"use client";

import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import {
  Camera,
  Upload,
  Copy,
  ExternalLink,
  ScanLine,
} from "lucide-react";

export default function QrScanner() {
  const scannerRef = useRef<Html5Qrcode | null>(null);

  const [result, setResult] = useState("");
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    return () => {
      stopScanner();
    };
  }, []);

  const startScanner = async () => {
    try {
      const scanner = new Html5Qrcode("reader");

      scannerRef.current = scanner;

      setScanning(true);

      await scanner.start(
        { facingMode: "environment" },
        {
          fps: 10,
          qrbox: 250,
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

  return (
    <div className="space-y-6">
      {/* Scanner Box */}
      <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-xl">
        <div
          id="reader"
          className="min-h-[320px]"
        />

        {!scanning && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-50">
            <div className="mb-4 rounded-full bg-black p-4 text-white">
              <ScanLine size={34} />
            </div>

            <h2 className="text-xl font-semibold">
              QR Scanner
            </h2>

            <p className="mt-2 text-sm text-zinc-500">
              Quét QR bằng camera hoặc tải ảnh lên
            </p>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="grid gap-4 sm:grid-cols-2">
        {!scanning ? (
          <button
            onClick={startScanner}
            className="flex items-center justify-center gap-2 rounded-2xl bg-black px-5 py-4 text-white transition hover:scale-[1.02]"
          >
            <Camera size={20} />
            Bắt đầu quét
          </button>
        ) : (
          <button
            onClick={stopScanner}
            className="rounded-2xl bg-red-500 px-5 py-4 text-white transition hover:scale-[1.02]"
          >
            Dừng quét
          </button>
        )}

        <label className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white px-5 py-4 transition hover:bg-zinc-50">
          <Upload size={20} />
          Tải ảnh QR

          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileUpload}
          />
        </label>
      </div>

      {/* Result */}
      {result && (
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-lg">
          <div className="mb-3 flex items-center gap-2">
            <div className="rounded-full bg-green-100 p-2 text-green-600">
              <ScanLine size={18} />
            </div>

            <h3 className="font-semibold">
              Kết quả quét
            </h3>
          </div>

          <div className="rounded-2xl bg-zinc-100 p-4 break-all text-sm">
            {result}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              onClick={() =>
                navigator.clipboard.writeText(result)
              }
              className="flex items-center gap-2 rounded-xl border border-zinc-200 px-4 py-2 transition hover:bg-zinc-100"
            >
              <Copy size={16} />
              Copy
            </button>

            {result.startsWith("http") && (
              <a
                href={result}
                target="_blank"
                className="flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-white transition hover:opacity-90"
              >
                <ExternalLink size={16} />
                Mở liên kết
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}