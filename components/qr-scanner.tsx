"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { BrowserQRCodeReader } from "@zxing/browser";
import { createClient } from "@supabase/supabase-js";
import type { PointerEvent as ReactPointerEvent } from "react";
import { usePathname } from "next/navigation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function QrScanner() {
  const isEnglish = (usePathname() || "").startsWith("/en");
  const t = useMemo(() => isEnglish ? {
    clipboardStart: "Copy a QR image, click this box, then press Ctrl+V.",
    clipboardType: "The clipboard does not contain an image. Copy a QR image and try again.",
    imageReadSuccess: "QR Code read from the image.",
    imageReadFail: "Could not read a QR Code in the image. Try a clearer image or crop closer to the code.",
    imageLoading: "Reading pasted image…",
    cameraError: "Could not start the camera. Check camera permission or upload an image instead.",
    readingImage: "Reading image…",
    screenError: "Could not capture the screen. You can upload a QR image instead.",
    screenUnsupported: "Screen capture requires HTTPS or localhost. Open http://localhost:3000/scan or use an HTTPS address.",
    chooseArea: "Select the area containing the QR Code first.",
    cropError: "Could not process the selected area. Please try again.",
    readingArea: "Reading the selected area…",
    chooseMethod: "Choose a scan method",
    methodHint: "Use your camera, an image, or a picture from the clipboard.",
    scanned: "Scanned",
    startCamera: "Start camera",
    stopCamera: "Stop camera",
    upload: "Upload image",
    captureScreen: "Capture screen",
    pasteTitle: "Paste a QR image from the clipboard",
    pasteHint: "Copy a QR image, click here, then press Ctrl+V (or ⌘+V on Mac).",
    cameraPlaceholder: "The camera view will appear here",
    cameraInstruction: "Start the camera, upload an image, or paste one to begin scanning.",
    cropHint: "Drag over the live screen preview to select the area you want to capture.",
    cropTitle: "Select a screen area",
    closeCrop: "Close crop window",
    screenshotAlt: "Live screen preview",
    scanArea: "Capture and scan selected area",
    screenLoading: "Opening screen preview…",
    cancel: "Cancel",
    result: "Scan result",
    detected: "Detected",
    copy: "Copy content",
    open: "Open link",
    privacy: "QR content is read in your browser.",
  } : {
    clipboardStart: "Sao chép ảnh QR, bấm vào khung này rồi nhấn Ctrl+V.",
    clipboardType: "Clipboard không chứa ảnh. Hãy copy ảnh QR rồi thử lại.",
    imageReadSuccess: "Đã đọc QR trong ảnh thành công.",
    imageReadFail: "Không đọc được QR trong ảnh. Hãy thử ảnh rõ hơn hoặc cắt sát vùng mã.",
    imageLoading: "Đang đọc ảnh vừa dán…",
    cameraError: "Không mở được camera. Hãy kiểm tra quyền camera hoặc thử tải ảnh lên.",
    readingImage: "Đang đọc ảnh…",
    screenError: "Không chụp được màn hình. Bạn có thể tải ảnh QR lên thay thế.",
    screenUnsupported: "Trình duyệt chỉ cho chụp màn hình trên HTTPS hoặc localhost. Hãy mở http://localhost:3000/scan hoặc dùng địa chỉ HTTPS.",
    chooseArea: "Hãy chọn vùng chứa mã QR trước.",
    cropError: "Không xử lý được vùng ảnh đã chọn. Hãy thử lại.",
    readingArea: "Đang đọc vùng ảnh đã chọn…",
    chooseMethod: "Chọn cách quét",
    methodHint: "Dùng camera, ảnh có sẵn hoặc nội dung trong clipboard.",
    scanned: "Đã quét",
    startCamera: "Bật camera",
    stopCamera: "Dừng camera",
    upload: "Tải ảnh lên",
    captureScreen: "Chụp màn hình",
    pasteTitle: "Dán ảnh QR từ clipboard",
    pasteHint: "Copy ảnh QR, bấm vào đây rồi nhấn Ctrl+V (hoặc ⌘+V trên Mac).",
    cameraPlaceholder: "Khung camera sẽ hiện ở đây",
    cameraInstruction: "Bật camera, tải ảnh lên hoặc dán ảnh để bắt đầu quét.",
    cropHint: "Kéo trực tiếp trên màn hình đang hiển thị để chọn vùng bạn muốn chụp.",
    cropTitle: "Chọn vùng màn hình",
    closeCrop: "Đóng bảng cắt ảnh",
    screenshotAlt: "Màn hình đang được chia sẻ",
    scanArea: "Chụp và quét vùng đã chọn",
    screenLoading: "Đang mở bản xem trước màn hình…",
    cancel: "Hủy",
    result: "Kết quả quét",
    detected: "Đã nhận diện",
    copy: "Sao chép nội dung",
    open: "Mở liên kết",
    privacy: "Nội dung QR được đọc ngay trong trình duyệt của bạn.",
  }, [isEnglish]);
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const selectionStartRef = useRef<{ x: number; y: number } | null>(null);
  const [result, setResult] = useState("");
  const [imageStatus, setImageStatus] = useState(t.clipboardStart);
  const [scanError, setScanError] = useState("");
  const [scanning, setScanning] = useState(false);
  const [screenStream, setScreenStream] = useState<MediaStream | null>(null);
  const [screenReady, setScreenReady] = useState(false);
  const [selectionRect, setSelectionRect] = useState<{ x: number; y: number; width: number; height: number } | null>(null);
  const [scanCount, setScanCount] = useState(0);

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
      setImageStatus(t.clipboardType);
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
      setImageStatus(t.imageReadSuccess);
      await incrementScanCount();
    } catch (error) {
      console.error(error);
      setImageStatus(t.imageReadFail);
    } finally {
      URL.revokeObjectURL(imageUrl);
    }
  }, [incrementScanCount, t]);

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
      setImageStatus(t.imageLoading);
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

  useEffect(() => {
    if (!screenStream) return;
    const video = videoRef.current;
    if (video) {
      video.srcObject = screenStream;
      void video.play().catch(() => undefined);
    }
    return () => {
      if (video) {
        video.pause();
        video.srcObject = null;
      }
      screenStream.getTracks().forEach((track) => track.stop());
    };
  }, [screenStream]);

  useEffect(() => {
    if (!screenStream) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setScreenStream(null);
        setSelectionRect(null);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [screenStream]);

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
      setScanError(t.cameraError);
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
      setImageStatus(t.readingImage);
      void processImageFile(file);
    }
    event.currentTarget.value = "";
  };

  const captureScreen = async () => {
    try {
      const mediaDevices = navigator.mediaDevices;
      const getDisplayMedia = mediaDevices?.getDisplayMedia;
      if (!window.isSecureContext || !getDisplayMedia) {
        setScanError(t.screenUnsupported);
        return;
      }
      const stream = await getDisplayMedia.call(mediaDevices, { video: true });
      stream.getVideoTracks()[0]?.addEventListener("ended", () => setScreenStream(null), { once: true });
      setSelectionRect(null);
      setScreenReady(false);
      setScanError("");
      setScreenStream(stream);
    } catch (error) {
      if (error instanceof DOMException && error.name === "NotAllowedError") return;
      console.error(error);
      setScanError(t.screenError);
    }
  };

  const getSelectionPoint = (event: ReactPointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    return {
      x: Math.max(0, Math.min(event.clientX - bounds.left, bounds.width)),
      y: Math.max(0, Math.min(event.clientY - bounds.top, bounds.height)),
    };
  };

  const startSelection = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!screenReady) return;
    event.preventDefault();
    const point = getSelectionPoint(event);
    selectionStartRef.current = point;
    setSelectionRect({ ...point, width: 0, height: 0 });
    setScanError("");
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const updateSelection = (event: ReactPointerEvent<HTMLDivElement>) => {
    const start = selectionStartRef.current;
    if (!start) return;
    const point = getSelectionPoint(event);
    setSelectionRect({
      x: Math.min(start.x, point.x),
      y: Math.min(start.y, point.y),
      width: Math.abs(point.x - start.x),
      height: Math.abs(point.y - start.y),
    });
  };

  const endSelection = (event: ReactPointerEvent<HTMLDivElement>) => {
    updateSelection(event);
    selectionStartRef.current = null;
  };

  const closeScreenTool = () => {
    setScreenStream(null);
    setScreenReady(false);
    setSelectionRect(null);
    selectionStartRef.current = null;
  };

  const scanSelectedArea = () => {
    const video = videoRef.current;
    if (!selectionRect || !video || !screenReady || selectionRect.width < 5 || selectionRect.height < 5) {
      setScanError(t.chooseArea);
      return;
    }
    const videoBounds = video.getBoundingClientRect();
    const scaleX = video.videoWidth / videoBounds.width;
    const scaleY = video.videoHeight / videoBounds.height;
    const sourceX = Math.max(0, Math.round(selectionRect.x * scaleX));
    const sourceY = Math.max(0, Math.round(selectionRect.y * scaleY));
    const sourceWidth = Math.min(video.videoWidth - sourceX, Math.round(selectionRect.width * scaleX));
    const sourceHeight = Math.min(video.videoHeight - sourceY, Math.round(selectionRect.height * scaleY));
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, sourceWidth);
    canvas.height = Math.max(1, sourceHeight);
    const context = canvas.getContext("2d");
    if (!context) return;
    context.drawImage(video, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
      if (!blob) {
        setScanError(t.cropError);
        return;
      }
      closeScreenTool();
      setImageStatus(t.readingArea);
      void processImageFile(new File([blob], "qr-crop.png", { type: "image/png" }));
    }, "image/png");
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">{t.chooseMethod}</h2>
          <p className="mt-1 text-sm text-slate-500">{t.methodHint}</p>
        </div>
        <div className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">{t.scanned} {scanCount.toLocaleString(isEnglish ? "en-US" : "vi-VN")}</div>
      </div>

      {!screenStream && <>
        <div className="grid gap-2 sm:grid-cols-3">
          {!scanning ? (
            <button type="button" onClick={startScanner} className="rounded-xl bg-slate-900 px-3 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">{t.startCamera}</button>
          ) : (
            <button type="button" onClick={stopScanner} className="rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">{t.stopCamera}</button>
          )}
          <label className="cursor-pointer rounded-xl border border-slate-300 bg-white px-3 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700">
            {t.upload}
            <input type="file" accept="image/*" className="sr-only" onChange={handleFileUpload} />
          </label>
          <button type="button" onClick={captureScreen} className="rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700">{t.captureScreen}</button>
        </div>

        <button type="button" onClick={(event) => event.currentTarget.focus()} className="mt-3 w-full rounded-2xl border border-dashed border-indigo-300 bg-indigo-50/70 px-4 py-4 text-left outline-none transition hover:border-indigo-500 focus:ring-4 focus:ring-indigo-100">
          <span className="block text-sm font-semibold text-indigo-950">{t.pasteTitle} <span className="ml-1 rounded-md bg-white px-1.5 py-0.5 text-xs font-medium text-indigo-700">Ctrl + V</span></span>
          <span className="mt-1 block text-sm text-indigo-800/75">{t.pasteHint}</span>
          <span aria-live="polite" className="mt-2 block text-xs text-slate-600">{imageStatus}</span>
        </button>

        <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <div id="reader" className={scanning ? "min-h-[260px] w-full" : "hidden"} />
          {!scanning && <div className="flex min-h-[250px] flex-col items-center justify-center px-6 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl text-indigo-600 shadow-sm">⌗</span>
            <p className="mt-4 font-semibold text-slate-800">{t.cameraPlaceholder}</p>
            <p className="mt-1 max-w-sm text-sm leading-6 text-slate-500">{t.cameraInstruction}</p>
          </div>}
        </div>
        {scanError && <p role="alert" className="mt-3 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800">{scanError}</p>}
      </>}

      {screenStream && <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-sm sm:p-6">
        <div role="dialog" aria-modal="true" aria-labelledby="screen-crop-title" className="flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
          <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-6">
            <div>
              <h2 id="screen-crop-title" className="text-lg font-bold text-slate-900 sm:text-xl">{t.cropTitle}</h2>
              <p className="mt-1 text-sm leading-6 text-slate-500">{t.cropHint}</p>
              {scanError && <p role="alert" className="mt-2 text-sm font-medium text-amber-700">{scanError}</p>}
            </div>
            <button type="button" onClick={closeScreenTool} aria-label={t.closeCrop} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-xl leading-none text-slate-500 transition hover:bg-slate-100 hover:text-slate-900">×</button>
          </div>
          <div className="min-h-0 overflow-auto bg-slate-100 p-3 sm:p-5">
            <div className="relative mx-auto flex min-h-40 max-h-[calc(92vh-170px)] items-center justify-center overflow-auto rounded-2xl bg-slate-950/[0.04] p-2 sm:p-4">
              <div
                className="relative inline-block max-w-full cursor-crosshair touch-none select-none"
                onPointerDown={startSelection}
                onPointerMove={updateSelection}
                onPointerUp={endSelection}
                onPointerCancel={endSelection}
              >
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  playsInline
                  aria-label={t.screenshotAlt}
                  className="block max-h-[65vh] max-w-full rounded-lg"
                  onLoadedMetadata={() => setScreenReady(true)}
                />
                {screenReady && selectionRect && <div
                  aria-hidden="true"
                  className="pointer-events-none absolute border-2 border-cyan-300 bg-cyan-300/20"
                  style={{
                    left: selectionRect.x,
                    top: selectionRect.y,
                    width: selectionRect.width,
                    height: selectionRect.height,
                    boxShadow: "0 0 0 9999px rgba(15, 23, 42, 0.48)",
                  }}
                />}
              </div>
              {!screenReady && <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-slate-100/80 text-sm font-medium text-slate-600">{t.screenLoading}</div>}
            </div>
          </div>
          <div className="flex flex-wrap justify-end gap-3 border-t border-slate-200 bg-white px-5 py-4 sm:px-6">
            <button type="button" onClick={closeScreenTool} className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">{t.cancel}</button>
            <button type="button" onClick={scanSelectedArea} disabled={!screenReady || !selectionRect || selectionRect.width < 5 || selectionRect.height < 5} className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40">{t.scanArea}</button>
          </div>
        </div>
      </div>}

      {result && <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-semibold text-slate-900">{t.result}</h3>
          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-800">{t.detected}</span>
        </div>
        <div className="mt-3 max-h-48 overflow-auto break-all rounded-xl bg-white p-4 text-sm leading-6 text-slate-800">{result}</div>
        <div className="mt-3 flex flex-wrap gap-2">
          <button type="button" onClick={() => { void navigator.clipboard.writeText(result); }} className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">{t.copy}</button>
          {/^https?:\/\//i.test(result) && <a href={result} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-700">{t.open}</a>}
        </div>
      </div>}

      <p className="mt-4 text-center text-xs leading-5 text-slate-500">{t.privacy}</p>
    </section>
  );
}
