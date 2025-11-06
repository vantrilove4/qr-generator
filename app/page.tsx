"use client";
import { useState, useRef, useEffect } from "react";
import QRCode from "react-qr-code";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { jsPDF } from "jspdf";
import { createClient } from "@supabase/supabase-js";

// Kết nối Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Home() {
  const [text, setText] = useState("");
  const [qrValue, setQrValue] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [history, setHistory] = useState<{ text: string }[]>([]);
  const [downloadFormat, setDownloadFormat] = useState("png");
  const [downloadCount, setDownloadCount] = useState<number>(0);
  const [logo, setLogo] = useState<string | null>(null);
  const [qrColor, setQrColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [cornerRadius, setCornerRadius] = useState(20);

  const qrRef = useRef<HTMLDivElement>(null);

  // Load lịch sử từ localStorage
  useEffect(() => {
    const saved = localStorage.getItem("qrHistory");
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("qrHistory", JSON.stringify(history));
  }, [history]);

  // Lấy số lượt tải
  useEffect(() => {
    const fetchCount = async () => {
      const { data, error } = await supabase
        .from("qr_downloads")
        .select("downloads")
        .eq("qr_text", 1)
        .single();
      if (!error && data) setDownloadCount(data.downloads);
      else setDownloadCount(0);
    };
    fetchCount();
  }, []);

  const increaseDownload = async () => {
    const { data: existing, error: fetchError } = await supabase
      .from("qr_downloads")
      .select("downloads")
      .eq("qr_text", 1)
      .single();
    if (!fetchError && existing) {
      const { data, error } = await supabase
        .from("qr_downloads")
        .update({ downloads: existing.downloads + 1 })
        .eq("qr_text", 1)
        .select()
        .single();
      if (!error && data) setDownloadCount(data.downloads);
    }
  };

  const generateQR = async () => {
    if (!text) return;
    setQrValue(text);
    setHistory((prev) => [{ text }, ...prev].slice(0, 10));
    await increaseDownload();
  };

  const downloadQR = async () => {
    if (!qrRef.current || !qrValue) return;
    const svg = qrRef.current.querySelector("svg");
    if (!svg) return;
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);
    const img = new Image();
    img.src = "data:image/svg+xml;base64," + btoa(svgString);
    img.onload = () => {
      const size = 300;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d")!;
      // Nền
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, size, size);

      // Bo góc
      const radius = cornerRadius;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(radius, 0);
      ctx.lineTo(size - radius, 0);
      ctx.quadraticCurveTo(size, 0, size, radius);
      ctx.lineTo(size, size - radius);
      ctx.quadraticCurveTo(size, size, size - radius, size);
      ctx.lineTo(radius, size);
      ctx.quadraticCurveTo(0, size, 0, size - radius);
      ctx.lineTo(0, radius);
      ctx.quadraticCurveTo(0, 0, radius, 0);
      ctx.closePath();
      ctx.clip();

      ctx.drawImage(img, 0, 0, size, size);
      ctx.restore();

      if (logo) {
        const logoImg = new Image();
        logoImg.src = logo;
        logoImg.onload = () => {
          const logoSize = size * 0.22;
          ctx.save();
          ctx.beginPath();
          ctx.arc(size / 2, size / 2, logoSize / 2, 0, Math.PI * 2);
          ctx.clip();
          ctx.drawImage(
            logoImg,
            size / 2 - logoSize / 2,
            size / 2 - logoSize / 2,
            logoSize,
            logoSize
          );
          ctx.restore();
          const link = document.createElement("a");
          link.download = `qr_logo.png`;
          link.href = canvas.toDataURL("image/png");
          link.click();
        };
      } else {
        const link = document.createElement("a");
        link.download = `qr.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
      }
    };
  };

  const shareQR = () => {
    if (!qrRef.current || !qrValue) return;
    const svg = qrRef.current.querySelector("svg");
    if (!svg) return;
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);
    const img = new Image();
    img.src = "data:image/svg+xml;base64," + btoa(svgString);
    img.onload = () => {
      const size = 300;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d")!;
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, size, size);
      ctx.drawImage(img, 0, 0, size, size);

      if (logo) {
        const logoImg = new Image();
        logoImg.src = logo;
        logoImg.onload = () => {
          const logoSize = size * 0.22;
          ctx.save();
          ctx.beginPath();
          ctx.arc(size / 2, size / 2, logoSize / 2, 0, Math.PI * 2);
          ctx.clip();
          ctx.drawImage(
            logoImg,
            size / 2 - logoSize / 2,
            size / 2 - logoSize / 2,
            logoSize,
            logoSize
          );
          ctx.restore();
          canvas.toBlob((blob) => {
            if (!blob) return;
            const file = new File([blob], "qrcode.png", { type: "image/png" });
            if (navigator.canShare && navigator.canShare({ files: [file] })) {
              navigator.share({ title: "Chia sẻ mã QR", text: qrValue, files: [file] });
            } else alert("Thiết bị không hỗ trợ chia sẻ trực tiếp.");
          });
        };
      } else {
        canvas.toBlob((blob) => {
          if (!blob) return;
          const file = new File([blob], "qrcode.png", { type: "image/png" });
          if (navigator.canShare && navigator.canShare({ files: [file] })) {
            navigator.share({ title: "Chia sẻ mã QR", text: qrValue, files: [file] });
          } else alert("Thiết bị không hỗ trợ chia sẻ trực tiếp.");
        });
      }
    };
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-indigo-100 to-white p-6">
      <p className="mb-6 text-xl font-semibold text-indigo-700 text-center">
        Tạo mã QR tùy chỉnh: màu, nền, bo góc, logo 🚀
      </p>

      <div className="flex-1 flex items-center justify-center w-full">
        <Card className="w-full max-w-lg p-10 shadow-xl rounded-2xl bg-white">
          <CardContent className="space-y-6">
            <h1 className="text-3xl font-bold text-center text-gray-900">
              Tạo QR Code Free
            </h1>

            {/* Input + file upload */}
            <div className="flex gap-2 items-center">
              <Input
                type="text"
                placeholder="Nhập thông tin cần tạo QR"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="flex-1 rounded-lg text-lg p-3"
              />
              <label
                htmlFor="file-input"
                className="flex items-center gap-1 px-3 py-2 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 text-sm"
              >
                📁 Chọn logo
              </label>
              <input
                id="file-input"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = () => setLogo(reader.result as string);
                    reader.readAsDataURL(file);
                  }
                }}
                className="hidden"
              />
            </div>

            {/* Color, bg, radius */}
            <div className="flex gap-2 items-center">
              <label className="flex items-center gap-1 text-sm">
                Màu QR: <input type="color" value={qrColor} onChange={(e) => setQrColor(e.target.value)} />
              </label>
              <label className="flex items-center gap-1 text-sm">
                Nền: <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
              </label>
              <label className="flex items-center gap-1 text-sm">
                Bo góc: <input type="number" min={0} max={50} value={cornerRadius} onChange={(e) => setCornerRadius(Number(e.target.value))} className="w-16" />
              </label>
            </div>

            <Button
              onClick={generateQR}
              className="w-full rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 text-lg py-3"
              disabled={!text}
            >
              Tạo QR
            </Button>

            <p className="text-sm text-gray-600">
              📊 Số mã QR đã được tạo: <span className="font-semibold">{downloadCount}</span> lần
            </p>

            {qrValue && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-4 mt-6">
                <div ref={qrRef} onClick={() => setIsOpen(true)}>
                  <div style={{ position: "relative", display: "inline-block" }}>
                    <QRCode value={qrValue} size={256} fgColor={qrColor} bgColor={bgColor} />
                    {logo && (
                      <img
                        src={logo}
                        alt="logo"
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          width: "56px",
                          height: "56px",
                          transform: "translate(-50%, -50%)",
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "3px solid white",
                        }}
                      />
                    )}
                  </div>
                </div>

                <div className="flex gap-4 mt-2 w-full">
                  <Button onClick={downloadQR} className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-lg py-2">
                    📥 Tải QR
                  </Button>
                  <Button onClick={shareQR} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2">
                    📤 Chia sẻ QR
                  </Button>
                </div>

                {/* Lịch sử */}
                {history.length > 0 && (
                  <div className="mt-6 w-full">
                    <h2 className="text-lg font-semibold text-gray-700 mb-2">Lịch sử QR</h2>
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                      {history.map((item, i) => (
                        <div
                          key={i}
                          className="p-2 border rounded-lg cursor-pointer hover:bg-gray-50"
                          onClick={() => {
                            setQrValue(item.text);
                            setText(item.text);
                          }}
                        >
                          {item.text}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Modal phóng to */}
      <AnimatePresence>
        {isOpen && qrValue && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-xl relative flex flex-col items-center"
              style={{ scale: zoom }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                ✖
              </button>
              <div style={{ position: "relative" }}>
                <QRCode value={qrValue} size={300} fgColor={qrColor} bgColor={bgColor} />
                {logo && (
                  <img
                    src={logo}
                    alt="logo"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: "70px",
                      height: "70px",
                      transform: "translate(-50%, -50%)",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "3px solid white",
                    }}
                  />
                )}
              </div>
              <div className="flex gap-4 mt-4">
                <Button onClick={() => setZoom(zoom + 0.2)}>➕</Button>
                <Button onClick={() => setZoom(Math.max(0.5, zoom - 0.2))}>➖</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
