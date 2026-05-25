"use client";

import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

import ReactCrop, {
  Crop,
  PixelCrop,
} from "react-image-crop";

import "react-image-crop/dist/ReactCrop.css";

export default function QrScanner() {
  const scannerRef = useRef<Html5Qrcode | null>(null);

  const imageRef =
    useRef<HTMLImageElement | null>(null);

  const [result, setResult] = useState("");

  const [scanning, setScanning] =
    useState(false);

  const [screenImage, setScreenImage] =
    useState<string | null>(null);

  const [crop, setCrop] = useState<Crop>({
    unit: "%",
    x: 25,
    y: 25,
    width: 50,
    height: 50,
  });

  const [completedCrop, setCompletedCrop] =
    useState<PixelCrop>();

  useEffect(() => {
    return () => {
      stopScanner();
    };
  }, []);

  // CAMERA SCAN
  const startScanner = async () => {
    try {
      const scanner = new Html5Qrcode("reader");

      scannerRef.current = scanner;

      setScanning(true);

      await scanner.start(
        { facingMode: "environment" },
        {
          fps: 15,
          qrbox: 280,
        },
        (decodedText) => {
          setResult(decodedText);

          stopScanner();
        },
        () => {}
      );
    } catch (err) {
      console.error(err);

      alert("Không thể mở camera");
    }
  };

  const stopScanner = async () => {
    try {
      if (
        scannerRef.current &&
        scannerRef.current.isScanning
      ) {
        await scannerRef.current.stop();

        await scannerRef.current.clear();
      }
    } catch (err) {}

    setScanning(false);
  };

  // UPLOAD IMAGE
  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      const scanner = new Html5Qrcode("reader");

      const decoded = await scanner.scanFile(
        file,
        true
      );

      setResult(decoded);
    } catch (err) {
      console.error(err);

      alert("Không đọc được QR");
    }
  };

  // SCREEN CAPTURE
  const captureScreen = async () => {
    try {
      const stream =
        await navigator.mediaDevices.getDisplayMedia(
          {
            video: true,
          }
        );

      const video =
        document.createElement("video");

      video.srcObject = stream;

      await video.play();

      const canvas =
        document.createElement("canvas");

      canvas.width = video.videoWidth;

      canvas.height = video.videoHeight;

      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      ctx.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
      );

      stream
        .getTracks()
        .forEach((track) => track.stop());

      const image =
        canvas.toDataURL("image/png");

      setScreenImage(image);
    } catch (err) {
      console.error(err);

      alert("Đã hủy capture màn hình");
    }
  };

  // SCAN SELECTED AREA
  const scanSelectedArea = async () => {
    if (
      !completedCrop ||
      !imageRef.current
    ) {
      alert("Hãy chọn vùng QR");

      return;
    }

    try {
      const image = imageRef.current;

      const canvas =
        document.createElement("canvas");

      const ctx =
        canvas.getContext("2d");

      if (!ctx) return;

      // SCALE FIX
      const scaleX =
        image.naturalWidth /
        image.width;

      const scaleY =
        image.naturalHeight /
        image.height;

      // REAL crop size
      const cropX =
        completedCrop.x * scaleX;

      const cropY =
        completedCrop.y * scaleY;

      const cropWidth =
        completedCrop.width * scaleX;

      const cropHeight =
        completedCrop.height * scaleY;

      // Upscale for better QR reading
      canvas.width = cropWidth * 2;

      canvas.height = cropHeight * 2;

      // Draw cropped area
      ctx.drawImage(
        image,
        cropX,
        cropY,
        cropWidth,
        cropHeight,
        0,
        0,
        canvas.width,
        canvas.height
      );

      // Enhance contrast
      const imageData =
        ctx.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        );

      const data = imageData.data;

      for (
        let i = 0;
        i < data.length;
        i += 4
      ) {
        const avg =
          (data[i] +
            data[i + 1] +
            data[i + 2]) /
          3;

        const value =
          avg > 128 ? 255 : 0;

        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
      }

      ctx.putImageData(imageData, 0, 0);

      canvas.toBlob(async (blob) => {
        if (!blob) return;

        const file = new File(
          [blob],
          "cropped.png",
          {
            type: "image/png",
          }
        );

        try {
          const scanner =
            new Html5Qrcode("reader");

          const decoded =
            await scanner.scanFile(
              file,
              true
            );

          setResult(decoded);

          setScreenImage(null);
        } catch (err) {
          console.error(err);

          alert(
            "Không tìm thấy QR trong vùng đã chọn"
          );
        }
      }, "image/png");
    } catch (err) {
      console.error(err);

      alert("Lỗi xử lý vùng chọn");
    }
  };

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white/80 p-4 shadow-2xl backdrop-blur-xl">
      {/* Glow */}
      <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-200/40 blur-3xl" />

      <div className="relative z-10">
        {/* CAMERA */}
        {!screenImage && (
          <div className="overflow-hidden rounded-[24px] border border-zinc-200 bg-zinc-100 shadow-inner">
            <div
              id="reader"
              className={
                scanning
                  ? "aspect-square w-full max-h-[520px]"
                  : "hidden"
              }
            />

            {!scanning && (
              <div className="flex h-[220px] items-center justify-center text-sm text-zinc-400">
                Ready to scan QR code
              </div>
            )}
          </div>
        )}

        {/* SCREEN OVERLAY */}
        {screenImage && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-6">
            <div className="max-h-[95vh] overflow-auto rounded-3xl bg-white p-5 shadow-2xl">
              <p className="mb-4 text-sm font-medium text-zinc-500">
                Kéo chọn vùng chứa QR code
              </p>

              <ReactCrop
                crop={crop}
                onChange={(c) =>
                  setCrop(c)
                }
                onComplete={(c) =>
                  setCompletedCrop(c)
                }
              >
                <img
                  ref={imageRef}
                  src={screenImage}
                  alt="Capture"
                  className="max-h-[75vh] rounded-xl"
                />
              </ReactCrop>

              <div className="mt-5 flex gap-3">
                <button
                  onClick={scanSelectedArea}
                  className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Scan Selected Area
                </button>

                <button
                  onClick={() =>
                    setScreenImage(null)
                  }
                  className="rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-700 shadow-sm transition hover:bg-zinc-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* BUTTONS */}
        {!screenImage && (
          <div className="mt-5 flex flex-wrap gap-3">
            {!scanning ? (
              <button
                onClick={startScanner}
                className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Start Scan
              </button>
            ) : (
              <button
                onClick={stopScanner}
                className="rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-700 shadow-sm transition hover:bg-zinc-50"
              >
                Stop
              </button>
            )}

            <label className="cursor-pointer rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-zinc-50 hover:shadow-md">
              Upload QR

              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>

            <button
              onClick={captureScreen}
              className="rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-zinc-50 hover:shadow-md"
            >
              Scan Area
            </button>
          </div>
        )}

        {/* RESULT */}
        {result && (
          <div className="mt-6 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="mb-3 text-sm font-medium text-zinc-500">
              Result
            </p>

            <div className="rounded-2xl bg-zinc-50 p-4 text-sm leading-7 break-all text-zinc-800">
              {result}
            </div>

            <div className="mt-5 flex gap-3">
              <button
                onClick={() =>
                  navigator.clipboard.writeText(
                    result
                  )
                }
                className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium transition hover:bg-zinc-50"
              >
                Copy
              </button>

              {result.startsWith("http") && (
                <a
                  href={result}
                  target="_blank"
                  className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-md transition hover:opacity-90"
                >
                  Open
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}