"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { BrowserQRCodeReader } from "@zxing/browser";
import ReactCrop from "react-image-crop";
import { createClient } from "@supabase/supabase-js";
import type { Crop, PixelCrop } from "react-image-crop";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function QrScanner() {
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [result, setResult] = useState("");
  const [imageStatus, setImageStatus] = useState("Sao chép ảnh QR, bấm vào khung này rồi nhấn Ctrl+V.");
  const [scanError, setScanError] = useState("");
  const [scanning, setScanning] = useState(false);
  const [screenImage, setScreenImage] = useState<string | null>(null);
  const [scanCount, setScanCount] = useState(0);
  const [crop, setCrop] = useState<Crop>({ unit: "%", x: 25, y: 25, width: 50, height: 50 });
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();

  const fetchScanCount = useCallback(async () => {
    const { data } = await supabase
      .from("qr_downloads")
      .select("downloads")
      .eq("qr_text", 2)
      .single();
    if (data) setScanCount(data.downloads);
  }, []);

  const incrementScanCount = useCallback(async () => {
    const { data } = await supabase
      .from("qr_downloads")
      .select("downloads")
      .eq("qr_text", 2)
      .single();
    if (!data) return;
    const newCount = data.downloads + 1;
    await supabase
      .from("qr_downloads")
      .update({ downloads: newCount })
      .eq("qr_text", 2);
    setScanCount(newCount);
  }, []);

  const processImageFile = useCallback(async (file: File) => {
    if (!file.type.startsWith("image/")) {
      setImageStatus("Clipboard không chứa ảnh. Hãy copy ảnh QR rồi thử lại.");
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    const img = new Image();
    try {
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error("Image could not be loaded"));
        img.src = imageUrl;
      });
      const reader = new BrowserQRCodeReader();
      const decoded = await reader.decodeFromImageElement(img);
      setResult(decoded.getText());
      setScanError("");
      setImageStatus("Đã đọc QR trong ảnh thành công.");
      await incrementScanCount();
    } catch (error) {
      console.error(error);
      setImageStatus("Không đọc được QR trong ảnh. Hãy thử ảnh rõ hơn hoặc cắt sát vùng mã.");
    } finally {
      URL.revokeObjectURL(imageUrl);
    }
  }, [incrementScanCount]);

  useEffect(() => {
    void fetchScanCount();
  }, [fetchScanCount]);

  useEffect(() => {
    const handlePaste = (event: ClipboardEvent) => {
      const items = Array.from(event.clipboardData?.items ?? []);
      const imageItem = items.find((item) => item.type.startsWith("image/"));
      const fileFromItems = imageItem?.getAsFile();
      const fileFromFiles = Array.from(event.clipboardData?.files ?? []).find((file) => file.type.startsWith("image/"));
      const imageFile = fileFromItems ?? fileFromFiles;
      if (!imageFile) return;
      event.preventDefault();
      setImageStatus("Đang đọc ảnh vừa dán…");
      void processImageFile(imageFile);
    };
    window.addEventListener("paste", handlePaste);
    return () => window.removeEventListener("paste", handlePaste);
  }, [processImageFile]);

  useEffect(() => () => {
    const scanner = scannerRef.current;
    if (scanner?.isScanning) {
      void scanner.stop().then(() => scanner.clear()).catch(() => undefined);
    }
  }, []);

  const startScanner = async () => {
    setScanError("");
    const scanner = new Html5Qrcode("reader");
    scannerRef.current = scanner;
    setScanning(true);
    try {
      await scanner.start(
        { facingMode: "environment" },
        { fps: 15, qrbox: 280 },
        (decodedText) => {
          setResult(decodedText);
          void incrementScanCount();
          void scanner.stop().then(() => scanner.clear()).catch(() => undefined);
          setScanning(false);
        },
        () => undefined
      );
    } catch (error) {
      console.error(error);
      setScanning(false);
      setScanError("Không mở được camera. Hãy kiểm tra quyền camera hoặc thử tải ảnh lên.");
    }
  };

  const stopScanner = async () => {
    const scanner = scannerRef.current;
    try {
      if (scanner?.isScanning) {
        await scanner.stop();
        await scanner.clear();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setScanning(false);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageStatus("Đang đọc ảnh…");
      void processImageFile(file);
    }
    event.currentTarget.value = "";
  };

  const captureScreen = async () => {
    let stream: MediaStream | undefined;
    try {
      stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      const video = document.createElement("video");
      video.srcObject = stream;
      await video.play();
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext("2d");
      if (!context || !canvas.width || !canvas.height) throw new Error("Could not capture screen");
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      setScreenImage(canvas.toDataURL("image/png"));
    } catch (error) {
      console.error(error);
      setScanError("Không chụp được màn hình. Bạn có thể tải ảnh QR lên thay thế.");
    } finally {
      stream?.getTracks().forEach((track) => track.stop());
    }
  };

  const scanSelectedArea = () => {
    if (!completedCrop || !imageRef.current) {
      setScanError("Hãy chọn vùng chứa mã QR trước.");
      return;
    }
    const image = imageRef.current;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const cropX = completedCrop.x * scaleX;
    const cropY = completedCrop.y * scaleY;
    const cropWidth = completedCrop.width * scaleX;
    const cropHeight = completedCrop.height * scaleY;
    canvas.width = Math.max(1, Math.round(cropWidth * 2));
    canvas.height = Math.max(1, Math.round(cropHeight * 2));
    context.drawImage(image, cropX, cropY, cropWidth, cropHeight, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
      if (!blob) {
        setScanError("Không xử lý được vùng ảnh đã chọn. Hãy thử lại.");
        return;
      }
      setScreenImage(null);
      setImageStatus("Đang đọc vùng ảnh đã chọn…");
      void processImageFile(new File([blob], "qr-crop.png", { type: "image/png" }));
    }, "image/png");
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Chọn cách quét</h2>
          <p className="mt-1 text-sm text-slate-500">Dùng camera, ảnh có sẵn hoặc nội dung trong clipboard.</p>
        </div>
        <div className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">Đã quét {scanCount.toLocaleString("vi-VN")}</div>
      </div>

      {!screenImage && <>
        <div className="grid gap-2 sm:grid-cols-3">
          {!scanning ? (
            <button type="button" onClick={startScanner} className="rounded-xl bg-slate-900 px-3 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">Bật camera</button>
          ) : (
            <button type="button" onClick={stopScanner} className="rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">Dừng camera</button>
          )}
          <label className="cursor-pointer rounded-xl border border-slate-300 bg-white px-3 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700">
            Tải ảnh lên
            <input type="file" accept="image/*" className="sr-only" onChange={handleFileUpload} />
          </label>
          <button type="button" onClick={captureScreen} className="rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700">Chụp màn hình</button>
        </div>

        <button type="button" onClick={(event) => event.currentTarget.focus()} className="mt-3 w-full rounded-2xl border border-dashed border-indigo-300 bg-indigo-50/70 px-4 py-4 text-left outline-none transition hover:border-indigo-500 focus:ring-4 focus:ring-indigo-100">
          <span className="block text-sm font-semibold text-indigo-950">Dán ảnh QR từ clipboard <span className="ml-1 rounded-md bg-white px-1.5 py-0.5 text-xs font-medium text-indigo-700">Ctrl + V</span></span>
          <span className="mt-1 block text-sm text-indigo-800/75">Copy ảnh QR, bấm vào đây rồi nhấn Ctrl+V (hoặc ⌘+V trên Mac).</span>
          <span aria-live="polite" className="mt-2 block text-xs text-slate-600">{imageStatus}</span>
        </button>

        <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <div id="reader" className={scanning ? "min-h-[260px] w-full" : "hidden"} />
          {!scanning && <div className="flex min-h-[250px] flex-col items-center justify-center px-6 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl text-indigo-600 shadow-sm">⌗</span>
            <p className="mt-4 font-semibold text-slate-800">Khung camera sẽ hiện ở đây</p>
            <p className="mt-1 max-w-sm text-sm leading-6 text-slate-500">Bật camera, tải ảnh lên hoặc dán ảnh để bắt đầu quét.</p>
          </div>}
        </div>
        {scanError && <p role="alert" className="mt-3 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800">{scanError}</p>}
      </>}

      {screenImage && <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <p className="mb-3 text-sm font-medium text-slate-700">Kéo chọn vùng có mã QR trong ảnh chụp.</p>
        <div className="max-h-[65vh] overflow-auto rounded-xl bg-white p-2">
          <ReactCrop crop={crop} onChange={(nextCrop) => setCrop(nextCrop)} onComplete={(nextCrop) => setCompletedCrop(nextCrop)}>
            <img ref={imageRef} src={screenImage} alt="Ảnh màn hình để chọn vùng QR" className="max-h-[62vh] rounded-lg" />
          </ReactCrop>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <button type="button" onClick={scanSelectedArea} className="rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700">Quét vùng đã chọn</button>
          <button type="button" onClick={() => setScreenImage(null)} className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">Hủy</button>
        </div>
      </div>}

      {result && <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-semibold text-slate-900">Kết quả quét</h3>
          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-800">Đã nhận diện</span>
        </div>
        <div className="mt-3 max-h-48 overflow-auto break-all rounded-xl bg-white p-4 text-sm leading-6 text-slate-800">{result}</div>
        <div className="mt-3 flex flex-wrap gap-2">
          <button type="button" onClick={() => { void navigator.clipboard.writeText(result); }} className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">Sao chép nội dung</button>
          {/^https?:\/\//i.test(result) && <a href={result} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-700">Mở liên kết</a>}
        </div>
      </div>}

      <p className="mt-4 text-center text-xs leading-5 text-slate-500">Nội dung QR được đọc ngay trong trình duyệt của bạn.</p>
    </section>
  );
}
