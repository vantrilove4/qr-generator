"use client";

import { useState } from "react";
import QRCode from "qrcode";

export default function Home() {
  const [text, setText] = useState("");
  const [qrCode, setQrCode] = useState("");

  const generateQR = async () => {
    try {
      const qr = await QRCode.toDataURL(text, { width: 250 });
      setQrCode(qr);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Tạo mã QR miễn phí</h1>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập nội dung..."
        className="border p-2 rounded w-80 mb-4"
      />

      <button
        onClick={generateQR}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Tạo QR
      </button>

      {qrCode && (
        <div className="mt-6 flex flex-col items-center">
          <img src={qrCode} alt="QR Code" className="shadow-lg" />
          <a
            href={qrCode}
            download="qrcode.png"
            className="mt-3 text-blue-600 underline"
          >
            Tải xuống
          </a>
        </div>
      )}

      <div className="mt-10 w-full max-w-md h-28 border border-dashed border-gray-400 flex items-center justify-center">
        <p className="text-gray-500">[Chỗ đặt quảng cáo Google AdSense]</p>
      </div>
    </div>
  );
}