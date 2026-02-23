"use client";
import { useState, useRef, useEffect } from "react";
import QRCode from "react-qr-code";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { jsPDF } from "jspdf";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";


// Kết nối Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Home() {
  // Loại QR
  const [qrType, setQrType] = useState("text");

  // Các input khác nhau theo loại QR
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [wifiSSID, setWifiSSID] = useState("");
  const [wifiPassword, setWifiPassword] = useState("");
  const [wifiType, setWifiType] = useState("WPA");
  const [vCardName, setVCardName] = useState("");
  const [vCardPhone, setVCardPhone] = useState("");

  // Crypto
  const [cryptoCoin, setCryptoCoin] = useState("BTC");
  const [cryptoAddress, setCryptoAddress] = useState("");

  const [qrValue, setQrValue] = useState<string | null>(null);
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

  // Tạo giá trị QR dựa vào loại
  const generateQR = async () => {
    let value = "";
    switch (qrType) {
      case "text":
        value = text;
        break;
      case "url":
        value = url;
        break;
      case "wifi":
        value = `WIFI:T:${wifiType};S:${wifiSSID};P:${wifiPassword};;`;
        break;
      case "vcard":
        value = `BEGIN:VCARD\nVERSION:3.0\nFN:${vCardName}\nTEL:${vCardPhone}\nEND:VCARD`;
        break;
      case "crypto":
  if (!cryptoAddress) return;
  value = `${cryptoCoin.toLowerCase()}:${cryptoAddress}`; // SOL cũng được convert thành sol:<address>
  break;

      default:
        value = text;
    }

    if (!value) return;
    setQrValue(value);
    setHistory((prev) => [{ text: value }, ...prev].slice(0, 10));
    await increaseDownload();
  };

  const drawLogoWithBorder = (
    ctx: CanvasRenderingContext2D,
    size: number,
    logoImg: HTMLImageElement
  ) => {
    const logoSize = size * 0.22;
    ctx.drawImage(
      logoImg,
      size / 2 - logoSize / 2,
      size / 2 - logoSize / 2,
      logoSize,
      logoSize
    );

    ctx.lineWidth = logoSize * 0.08;
    ctx.strokeStyle = "white";
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

  const exportQR = async (type: "png" | "pdf" | "share") => {
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
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 20, 20, size, size);

      if (logo) {
        const logoImg = new Image();
        logoImg.src = logo;
        logoImg.onload = () => {
          drawLogoWithBorder(ctx, size + 40, logoImg);
          handleExport(canvas, type);
        };
      } else {
        handleExport(canvas, type);
      }
    };
  };

  const handleExport = (canvas: HTMLCanvasElement, type: "png" | "pdf" | "share") => {
    if (type === "png") {
      const link = document.createElement("a");
      link.download = `qr.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } else if (type === "share") {
      canvas.toBlob((blob) => {
        if (!blob) return;
        const file = new File([blob], "qrcode.png", { type: "image/png" });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          navigator.share({ title: "Chia sẻ mã QR", text: qrValue!, files: [file] });
        } else alert("Chỉ hỗ trợ Mobile !!!");
      });
    } else {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 45, 30, 120, 120);
      pdf.save("qrcode.pdf");
    }
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
            
            {/* Dropdown chọn loại QR */}
            <div className="flex gap-2 items-center">
              <label className="text-sm">Loại QR:</label>
              <select value={qrType} onChange={(e) => setQrType(e.target.value)} className="rounded-lg p-2 border">
                <option value="text">Text</option>
                <option value="url">URL</option>
                <option value="wifi">Wi-Fi</option>
                <option value="vcard">vCard</option>
                <option value="crypto">Crypto</option>
              </select>
            </div>

            {/* Input theo loại QR */}
            {qrType === "text" && <Input placeholder="Nhập nội dung" value={text} onChange={(e) => setText(e.target.value)} className="rounded-lg p-3" />}
            {qrType === "url" && <Input placeholder="Nhập URL" value={url} onChange={(e) => setUrl(e.target.value)} className="rounded-lg p-3" />}
            {qrType === "wifi" && (
              <div className="space-y-2">
                <Input placeholder="Tên Wi-Fi (SSID)" value={wifiSSID} onChange={(e) => setWifiSSID(e.target.value)} className="rounded-lg p-3" />
                <Input placeholder="Mật khẩu" value={wifiPassword} onChange={(e) => setWifiPassword(e.target.value)} className="rounded-lg p-3" />
                <select value={wifiType} onChange={(e) => setWifiType(e.target.value)} className="rounded-lg p-2 border">
                  <option value="WPA">WPA/WPA2</option>
                  <option value="WEP">WEP</option>
                  <option value="nopass">Không mật khẩu</option>
                </select>
              </div>
            )}
            {qrType === "vcard" && (
              <div className="space-y-2">
                <Input placeholder="Họ tên" value={vCardName} onChange={(e) => setVCardName(e.target.value)} className="rounded-lg p-3" />
                <Input placeholder="Số điện thoại" value={vCardPhone} onChange={(e) => setVCardPhone(e.target.value)} className="rounded-lg p-3" />
              </div>
            )}
            {qrType === "crypto" && (
  <div className="space-y-2">
    <select value={cryptoCoin} onChange={(e) => setCryptoCoin(e.target.value)} className="rounded-lg p-2 border">
      <option value="BTC">Bitcoin (BTC)</option>
      <option value="ETH">Ethereum (ETH)</option>
      <option value="USDT">Tether (USDT)</option>
      <option value="BNB">Binance Coin (BNB)</option>
      <option value="LTC">Litecoin (LTC)</option>
      <option value="DOGE">Dogecoin (DOGE)</option>
      <option value="XRP">Ripple (XRP)</option>
      <option value="SOL">Solana (SOL)</option> {/* Thêm SOL */}
    </select>
    <Input
      placeholder="Nhập địa chỉ ví"
      value={cryptoAddress}
      onChange={(e) => setCryptoAddress(e.target.value)}
      className="rounded-lg p-3"
    />
  </div>
)}

            {/* Chọn logo */}
            <label htmlFor="file-input" className="flex items-center gap-1 px-3 py-2 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 text-sm">
              📁 Chọn ảnh logo
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

            <Button onClick={generateQR} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg py-3">
              Tạo Ngay
            </Button>
              <p className="text-sm text-gray-600 text-center mt-2">
    <a
    href="https://watermarkpro.io.vn/"
    target="_blank"
    rel="noopener"
    className="text-indigo-600 font-semibold hover:underline"
  >
    Tạo watermark online miễn phí tại Watermarkpro.io.vn
  </a>{" "}
  để bảo vệ ảnh khỏi bị sao chép.
</p>
            <p className="text-sm text-gray-600">📊 Số mã QR đã được tạo: <span className="font-semibold">{downloadCount}</span> lần</p>

            {qrValue && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-4 mt-6">
                <div ref={qrRef}>
                  <div
                    style={{
                      display: "inline-block",
                      padding: "20px",
                      background: "#d6d7f8ff",
                      borderRadius: "20px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    }}
                  >
                    <div style={{ position: "relative", display: "inline-block" }}>
                      <QRCode value={qrValue} size={256} fgColor={qrColor} bgColor={bgColor} level="H" />
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
                            border: "3px solid white",
                          }}
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 w-full">
                  <Button onClick={() => exportQR("png")} className="bg-green-600 hover:bg-green-700 text-white">📥 PNG</Button>
                  <Button onClick={() => exportQR("pdf")} className="bg-purple-600 hover:bg-purple-700 text-white">📄 PDF</Button>
                  <Button onClick={() => exportQR("share")} className="bg-blue-600 hover:bg-blue-700 text-white">📤 Share</Button>
                </div>

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
      <nav className="p-4 flex gap-4 justify-center">
                <h5 className="text-blue-600 font-bold"> Made by: TriNguyen</h5>

          </nav>
          
    </div>
  );
}
