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
  const [history, setHistory] = useState<{ text: string; url: string }[]>([]);
  const [downloadFormat, setDownloadFormat] = useState("png");
  const [downloadCount, setDownloadCount] = useState<number>(0);

  const qrRef = useRef<HTMLDivElement>(null);

  // Load lịch sử từ localStorage
  useEffect(() => {
    const saved = localStorage.getItem("qrHistory");
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("qrHistory", JSON.stringify(history));
  }, [history]);

  // Lấy số lượt tải khi load trang
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

  // Tăng lượt tải bằng cách lấy số hiện tại +1
  const increaseDownload = async () => {
    // Lấy số hiện tại
    const { data: existing, error: fetchError } = await supabase
      .from("qr_downloads")
      .select("downloads")
      .eq("qr_text", 1)
      .single();

    if (!fetchError && existing) {
      // Update +1
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

    // Tạo QR
    setQrValue(text);

    // Lưu lịch sử
    setHistory((prev) => [{ text, url: text }, ...prev].slice(0, 10));

    // Tăng lượt tải
    await increaseDownload();
  };

  const downloadQR = async () => {
    if (!qrRef.current || !qrValue) return;
    const svg = qrRef.current.querySelector("svg");
    if (!svg) return;

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);

    const handleDownload = (canvas: HTMLCanvasElement) => {
      if (downloadFormat === "png") {
        const pngUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = pngUrl;
        link.download = "qrcode.png";
        link.click();
      } else if (downloadFormat === "pdf") {
        const pdf = new jsPDF();
        const imgData = canvas.toDataURL("image/png");
        pdf.addImage(imgData, "PNG", 20, 20, 150, 150);
        pdf.save("qrcode.pdf");
      }
    };

    if (downloadFormat === "svg") {
      const blob = new Blob([svgString], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "qrcode.svg";
      link.click();
      URL.revokeObjectURL(url);
    } else {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      const svgBlob = new Blob([svgString], { type: "image/svg+xml" });
      const url = URL.createObjectURL(svgBlob);

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);
        handleDownload(canvas);
      };
      img.src = url;
    }
  };

  const copyQRText = () => {
    if (qrValue) navigator.clipboard.writeText(qrValue);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-indigo-100 to-white p-6">
      <p className="mb-6 text-xl font-semibold text-indigo-700 text-center">
        Tạo mã QR miễn phí, không chèn quảng cáo, tải về nhanh chóng 🚀
      </p>

      <div className="flex-1 flex items-center justify-center w-full">
        <Card className="w-full max-w-lg p-10 shadow-xl rounded-2xl bg-white">
          <CardContent className="space-y-6">
            <h1 className="text-3xl font-bold text-center text-gray-900">
              Tạo QR Code Free
            </h1>

            <Input
              type="text"
              placeholder="Nhập thông tin cần tạo QR"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="rounded-lg text-lg p-3"
            />

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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center gap-4 mt-6"
              >
                <div ref={qrRef} onClick={() => setIsOpen(true)}>
                  <QRCode value={qrValue} size={220} />
                </div>

                

                <div className="flex gap-4 mt-2">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      value="png"
                      checked={downloadFormat === "png"}
                      onChange={(e) => setDownloadFormat(e.target.value)}
                    />
                    PNG
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      value="pdf"
                      checked={downloadFormat === "pdf"}
                      onChange={(e) => setDownloadFormat(e.target.value)}
                    />
                    PDF
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      value="svg"
                      checked={downloadFormat === "svg"}
                      onChange={(e) => setDownloadFormat(e.target.value)}
                    />
                    SVG
                  </label>
                </div>

                <div className="flex gap-2 w-full">
                  <Button
                    onClick={downloadQR}
                    className="flex-1 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 text-lg py-3"
                  >
                    📥 Tải QR ({downloadFormat.toUpperCase()})
                  </Button>
                  <Button
                    onClick={copyQRText}
                    className="flex-1 rounded-lg bg-gray-300 text-gray-800 font-medium hover:bg-gray-400 text-lg py-3"
                  >
                    📋 Copy nội dung
                  </Button>
                  
                </div>
                
              </motion.div>
              
            )}

            {history.length > 0 && (
              <div className="mt-6">
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
          </CardContent>
        </Card>
      </div>

      <footer className="mt-6 text-center text-gray-500 text-sm">
        Made by: <span className="font-medium text-indigo-600">TriNguyen - </span>
        Liên hệ: <span className="font-medium text-indigo-600">nvantri93@gmail.com</span>
      </footer>

      {/* Modal phóng to */}
      <AnimatePresence>
        {isOpen && (
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
              <QRCode value={qrValue || ""} size={300} />
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
