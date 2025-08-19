"use client";
import { useState } from "react";

export default function EditQR() {
  const [slug, setSlug] = useState("");
  const [url, setUrl] = useState("");

  const handleUpdate = async () => {
    await fetch("/api/qr/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, url }),
    });
    alert("Cập nhật thành công!");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Chỉnh sửa QR</h1>
      <input className="border p-2 w-full mb-2" placeholder="Mã (slug)" value={slug} onChange={e => setSlug(e.target.value)} />
      <input className="border p-2 w-full mb-2" placeholder="Nội dung mới" value={url} onChange={e => setUrl(e.target.value)} />
      <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleUpdate}>Cập nhật</button>
    </div>
  );
}
