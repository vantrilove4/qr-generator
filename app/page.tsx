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
  const [zoom, setZoom] = useState(1);
  const [history, setHistory] = useState<{ text: string }[]>([]);
  const [downloadCount, setDownloadCount] = useState<number>(0);
  const [logo, setLogo] = useState<string | null>(null);
  const [qrColor, setQrColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");

  const qrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("qrHistory");
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("qrHistory", JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    const fetchCount = async () => {
      const { data } = await supabase
        .from("qr_downloads")
        .select("downloads")
        .eq("qr_text", 1)
        .single();
      if (data) setDownloadCount(data.downloads);
    };
    fetchCount();
  }, []);

  const increaseDownload = async () => {
    const { data: existing } = await supabase
      .from("qr_downloads")
      .select("downloads")
      .eq("qr_text", 1)
      .single();
    if (existing) {
      await supabase
        .from("qr_downloads")
        .update({ downloads: existing.downloads + 1 })
        .eq("qr_text", 1)
        .single();
    }
  };

  const generateQR = async () => {
    if (!text) return;
    setQrValue(text);
    setHistory((prev) => [{ text }, ...prev].slice(0, 10));
    await increaseDownload();
  };

  const drawLogoWithBorder = (
    ctx: CanvasRenderingContext2D,
    size: number,
    logoImg: HTMLImageElement
  ) => {
    const logoSize = size * 0.22;

    // Vẽ logo
    ctx.drawImage(
      logoImg,
      size / 2 - logoSize / 2,
      size / 2 - logoSize / 2,
      logoSize,
      logoSize
    );

    // Vẽ viền logo màu nhạt
    ctx.lineWidth = logoSize * 0.08;
    ctx.strokeStyle = "#f8f8f8"; // viền hơi sáng, không trắng tinh
    const r = logoSize * 0.2;
    ctx.beginPath();
    ctx.moveTo(size / 2 - logoSize / 2 + r, size / 2 - logoSize / 2);
    ctx.arcTo(size / 2 + logoSize / 2, size / 2 - logoSize / 2, size / 2 + logoSize / 2, size / 2 + logoSize / 2, r);
    ctx.arcTo(size / 2 + logoSize / 2, size / 2 + logoSize / 2, size / 2 - logoSize / 2, size / 2 + logoSize / 2, r);
    ctx.arcTo(size / 2 - logoSize / 2, size / 2 + logoSize / 2, size / 2 - logoSize / 2, size / 2 - logoSize / 2, r);
    ctx.arcTo(size / 2 - logoSize / 2, size / 2 - logoSize / 2, size / 2 + logoSize / 2, size / 2 - logoSize / 2, r);
    ctx.closePath();
    ctx.stroke();
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
      canvas.width = size + 40;
      canvas.height = size + 40;
      const ctx = canvas.getContext("2d")!;
      ctx.fillStyle = "#f0f0f0"; // viền xung quanh QR
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 20, 20, size, size);

      if (logo) {
        const logoImg = new Image();
        logoImg.src = logo;
        logoImg.onload = () => {
          drawLogoWithBorder(ctx, size + 40, logoImg);
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

  const downloadPDF = async () => {
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
      canvas.width = size + 40;
      canvas.height = size + 40;
      const ctx = canvas.getContext("2d")!;
      ctx.fillStyle = "#f0f0f0"; // viền xung quanh QR
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 20, 20, size, size);

      if (logo) {
        const logoImg = new Image();
        logoImg.src = logo;
        logoImg.onload = () => {
          drawLogoWithBorder(ctx, size + 40, logoImg);
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF();
          pdf.addImage(imgData, "PNG", 45, 30, 120, 120);
          pdf.save("qrcode.pdf");
        };
      } else {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        
        pdf.addImage(imgData, "PNG", 45, 30, 120, 120);
        pdf.save("qrcode.pdf");
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
      canvas.width = size + 40;
      canvas.height = size + 40;
      const ctx = canvas.getContext("2d")!;
      ctx.fillStyle = "#f0f0f0"; // viền xung quanh QR
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 20, 20, size, size);

      canvas.toBlob((blob) => {
        if (!blob) return;
        const file = new File([blob], "qrcode.png", { type: "image/png" });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          navigator.share({ title: "Chia sẻ mã QR", text: qrValue, files: [file] });
        } else alert("Chỉ hỗ trợ Mobile !!!");
      });
    };
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-indigo-100 to-white p-6">
      <p>
        <a href="https://qrfree.io.vn" target="_blank" rel="noopener noreferrer">
          <img src="/makeqr.png" alt="Logo" width={200} height={200} />
        </a>
      </p>

      <div className="flex-1 flex items-center justify-center w-full">
        <Card className="w-full max-w-lg p-10 shadow-xl rounded-2xl bg-white">
          <CardContent className="space-y-6">
            <h1 className="text-3xl font-bold text-center text-gray-900">TẠO MÃ QR MIỄN PHÍ</h1>

            <Input
              type="text"
              placeholder="Nhập thông tin cần tạo QR"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="flex-1 rounded-lg text-lg p-3"
            />

            <label htmlFor="file-input" className="flex items-center gap-1 px-3 py-2 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 text-sm">
              📁 Chọn ảnh đặt vào mã QR
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

            <div className="flex gap-2 items-center">
              <label className="text-sm">Màu QR: <input type="color" value={qrColor} onChange={(e) => setQrColor(e.target.value)} /></label>
              <label className="text-sm">Nền: <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} /></label>
            </div>

            <Button onClick={generateQR} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg py-3" disabled={!text}>
              Tạo Ngay
            </Button>

            <p className="text-sm text-gray-600">📊 Số mã QR đã được tạo: <span className="font-semibold">{downloadCount}</span> lần</p>

            {qrValue && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-4 mt-6">
                <div ref={qrRef}>
                  <div
                    style={{
                      display: "inline-block",
                      padding: "20px",
                      background: "#f0f0f0", // viền xung quanh QR
                      borderRadius: "20px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    }}
                  >
                    <div style={{ position: "relative", display: "inline-block" }}>
                      <QRCode
                        value={qrValue}
                        size={256}
                        fgColor={qrColor}
                        bgColor={bgColor}
                        
                        level="H"
                      />
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
                            borderRadius: "15%",
                            objectFit: "cover",
                            border: "3px solid #f8f8f8", // viền logo
                          }}
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 w-full">
                  <Button onClick={downloadQR} className="bg-green-600 hover:bg-green-700 text-white">📥 PNG</Button>
                  <Button onClick={downloadPDF} className="bg-purple-600 hover:bg-purple-700 text-white">📄 PDF</Button>
                  <Button onClick={shareQR} className="bg-blue-600 hover:bg-blue-700 text-white">📤 Share</Button>
                </div>

              </motion.div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
