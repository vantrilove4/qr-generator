"use client";
import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function CreateQR() {
  const [slug, setSlug] = useState("");
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");

  const handleCreate = async () => {
    await fetch("/api/qr/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, url }),
    });
    setQr(`${window.location.origin}/r/${slug}`);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Tạo QR động</h1>
      <input className="border p-2 w-full mb-2" placeholder="Mã (slug)" value={slug} onChange={e => setSlug(e.target.value)} />
      <input className="border p-2 w-full mb-2" placeholder="Nội dung/URL" value={url} onChange={e => setUrl(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleCreate}>Tạo</button>
      {qr && (
        <div className="mt-4 text-center">
          <QRCodeCanvas value={qr} size={180} />
          <p className="mt-2">{qr}</p>
        </div>
      )}
    </div>
  );
}
