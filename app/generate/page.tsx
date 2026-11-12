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
import { ScanLine } from "lucide-react";




//// Kết nối Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);


export default function Home() {
  type FrameStyle = "none" | "rounded" | "label" | "double" | "gradient" | "ticket" | "sticker" | "minimal" | "soft" | "pointer" | "scallop" | "ribbon" | "envelope" | "bag" | "phone" | "hand";

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
  const [formError, setFormError] = useState("");
  const [history, setHistory] = useState<{ text: string }[]>([]);
  const [downloadCount, setDownloadCount] = useState<number>(0);
  const [logo, setLogo] = useState<string | null>(null);
  const [qrColor, setQrColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [frameStyle, setFrameStyle] = useState<FrameStyle>("none");
  const [frameColor, setFrameColor] = useState("#4f46e5");
  const [frameBgColor, setFrameBgColor] = useState("#ffffff");
  const [frameTextColor, setFrameTextColor] = useState("#1e293b");
  const [frameText, setFrameText] = useState("QUÉT MÃ NGAY");
  const frameIsScene = ["envelope", "bag", "phone", "hand"].includes(frameStyle);
  const frameHasCaption = frameStyle !== "none";
  const frameUsesTextColor = ["rounded", "label", "double", "gradient", "ticket", "minimal", "scallop"].includes(frameStyle);
  const frameLabels: Record<FrameStyle, string> = {
    none: "Không khung", rounded: "Bo góc", label: "Lời nhắc", double: "Khung đôi",
    gradient: "Chuyển sắc", ticket: "Vé QR", sticker: "Nhãn nổi", minimal: "Tối giản",
    soft: "Thẻ mềm", pointer: "Mũi tên", scallop: "Răng cưa", ribbon: "Ruy-băng",
    envelope: "Phong bì", bag: "Túi", phone: "Điện thoại", hand: "Trên tay",
  };

  const selectFrameStyle = (style: FrameStyle) => {
    const presets: Partial<Record<FrameStyle, { border: string; background: string }>> = {
      rounded: { border: "#111827", background: "#ffffff" },
      label: { border: "#111827", background: "#ffffff" },
      double: { border: "#111827", background: "#ffffff" },
      gradient: { border: "#7c3aed", background: "#ffffff" },
      ticket: { border: "#111827", background: "#ffffff" },
      sticker: { border: "#ea580c", background: "#fff7ed" },
      minimal: { border: "#475569", background: "#ffffff" },
      soft: { border: "#111827", background: "#e2e8f0" },
      pointer: { border: "#111827", background: "#ffffff" },
      scallop: { border: "#0f766e", background: "#ffffff" },
      ribbon: { border: "#111827", background: "#ffffff" },
      envelope: { border: "#64748b", background: "#ffffff" },
      bag: { border: "#0f766e", background: "#fef3c7" },
      phone: { border: "#111827", background: "#ffffff" },
      hand: { border: "#c2410c", background: "#fff7ed" },
    };
    setFrameStyle(style);
    const preset = presets[style];
    if (preset) {
      setFrameColor(preset.border);
      setFrameBgColor(preset.background);
    }
  };

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
        value = text.trim();
        break;
      case "url":
        value = url.trim();
        break;
      case "wifi":
        if (!wifiSSID.trim()) {
          setFormError("Vui lòng nhập tên mạng Wi-Fi.");
          setQrValue(null);
          return;
        }
        if (wifiType !== "nopass" && !wifiPassword) {
          setFormError("Vui lòng nhập mật khẩu Wi-Fi hoặc chọn mạng không mật khẩu.");
          setQrValue(null);
          return;
        }
        value = `WIFI:T:${wifiType};S:${wifiSSID};P:${wifiPassword};;`;
        break;
      case "vcard":
        if (!vCardName.trim() && !vCardPhone.trim()) {
          setFormError("Nhập ít nhất tên hoặc số điện thoại cho danh thiếp.");
          setQrValue(null);
          return;
        }
        value = `BEGIN:VCARD\nVERSION:3.0\nFN:${vCardName}\nTEL:${vCardPhone}\nEND:VCARD`;
        break;
      case "crypto":
        if (!cryptoAddress.trim()) {
          setFormError("Vui lòng nhập địa chỉ ví.");
          setQrValue(null);
          return;
        }
        value = `${cryptoCoin.toLowerCase()}:${cryptoAddress.trim()}`;
        break;

      default:
        value = text;
    }

    if (!value) {
      setFormError("Vui lòng nhập nội dung cần tạo mã QR.");
      setQrValue(null);
      return;
    }
    setFormError("");
    setQrValue(value);
    setHistory((prev) => [{ text: value }, ...prev].slice(0, 10));
    await increaseDownload();
  };

  const drawRoundedRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number
  ) => {
    const r = Math.min(radius, width / 2, height / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + width, y, x + width, y + height, r);
    ctx.arcTo(x + width, y + height, x, y + height, r);
    ctx.arcTo(x, y + height, x, y, r);
    ctx.arcTo(x, y, x + width, y, r);
    ctx.closePath();
  };

  const loadImage = (src: string) => new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Không thể tải hình ảnh."));
    image.src = src;
  });

  const drawFrameLabel = (ctx: CanvasRenderingContext2D, text: string, centerX: number, y: number, maxWidth: number) => {
    const words = text.trim().split(/\s+/).filter(Boolean);
    const lines: string[] = [];
    let line = "";
    ctx.font = "700 30px Arial, sans-serif";
    for (const word of words) {
      const nextLine = line ? `${line} ${word}` : word;
      if (ctx.measureText(nextLine).width > maxWidth && line) {
        lines.push(line);
        line = word;
      } else {
        line = nextLine;
      }
    }
    if (line) lines.push(line);
    const visibleLines = lines.slice(0, 2);
    const firstLineY = y - (visibleLines.length > 1 ? 19 : 0);
    visibleLines.forEach((item, index) => ctx.fillText(item, centerX, firstLineY + index * 38, maxWidth));
  };

  const drawPill = (ctx: CanvasRenderingContext2D, text: string, x: number, y: number, width: number, height: number, background: string, color: string) => {
    drawRoundedRect(ctx, x, y, width, height, height / 2);
    ctx.fillStyle = background;
    ctx.fill();
    ctx.fillStyle = color;
    ctx.font = "700 28px Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, x + width / 2, y + height / 2, width - 28);
  };

  const exportQR = async (type: "png" | "pdf" | "share") => {
    if (!qrRef.current || !qrValue) return;
    const svg = qrRef.current.querySelector("svg");
    if (!svg) return;

    try {
      const svgBlob = new Blob([new XMLSerializer().serializeToString(svg)], { type: "image/svg+xml;charset=utf-8" });
      const svgUrl = URL.createObjectURL(svgBlob);
      const qrImage = await loadImage(svgUrl);
      URL.revokeObjectURL(svgUrl);

      const sceneFrame = frameStyle === "envelope" || frameStyle === "bag" || frameStyle === "phone" || frameStyle === "hand";
      const qrSize = sceneFrame ? 500 : 640;
      const canvasWidth = sceneFrame ? 800 : qrSize + (frameStyle === "none" ? 80 : 160);
      const padding = sceneFrame ? (canvasWidth - qrSize) / 2 : frameStyle === "none" ? 40 : 80;
      const footerHeight = sceneFrame || frameStyle === "none" || frameStyle === "ribbon" ? 0 : frameStyle === "sticker" ? 120 : 150;
      const canvasHeight = sceneFrame
        ? frameStyle === "phone" ? 980 : frameStyle === "bag" || frameStyle === "hand" ? 900 : 840
        : qrSize + padding * 2 + footerHeight;
      const canvas = document.createElement("canvas");
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.fillStyle = frameStyle === "none" ? bgColor : frameStyle === "ticket" || frameStyle === "scallop" ? "#f8fafc" : frameBgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (frameStyle === "phone") {
        ctx.fillStyle = "#111827";
        drawRoundedRect(ctx, 92, 18, 616, 944, 58);
        ctx.fill();
        ctx.fillStyle = "#ffffff";
        drawRoundedRect(ctx, 108, 34, 584, 912, 46);
        ctx.fill();
        ctx.fillStyle = "#111827";
        drawRoundedRect(ctx, 340, 52, 120, 18, 9);
        ctx.fill();
      } else if (frameStyle === "bag") {
        ctx.fillStyle = frameBgColor;
        ctx.strokeStyle = frameColor;
        ctx.lineWidth = 12;
        ctx.beginPath();
        ctx.moveTo(92, 205);
        ctx.lineTo(708, 205);
        ctx.lineTo(756, 860);
        ctx.lineTo(44, 860);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(255, 212);
        ctx.bezierCurveTo(255, 72, 545, 72, 545, 212);
        ctx.stroke();
      } else if (frameStyle === "envelope") {
        ctx.fillStyle = frameBgColor;
        ctx.strokeStyle = frameColor;
        ctx.lineWidth = 12;
        ctx.beginPath();
        ctx.moveTo(62, 132);
        ctx.lineTo(738, 132);
        ctx.lineTo(738, 740);
        ctx.lineTo(62, 740);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(68, 142);
        ctx.lineTo(400, 440);
        ctx.lineTo(732, 142);
        ctx.moveTo(68, 730);
        ctx.lineTo(310, 492);
        ctx.moveTo(732, 730);
        ctx.lineTo(490, 492);
        ctx.stroke();
      } else if (frameStyle === "hand") {
        ctx.fillStyle = "#fed7aa";
        ctx.strokeStyle = "#475569";
        ctx.lineWidth = 12;
        ctx.beginPath();
        ctx.moveTo(22, 900);
        ctx.lineTo(22, 850);
        ctx.bezierCurveTo(92, 838, 112, 748, 180, 728);
        ctx.bezierCurveTo(235, 710, 288, 748, 328, 790);
        ctx.lineTo(370, 840);
        ctx.lineTo(430, 790);
        ctx.bezierCurveTo(490, 736, 554, 710, 615, 728);
        ctx.bezierCurveTo(690, 750, 710, 840, 778, 850);
        ctx.lineTo(778, 900);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(210, 770);
        ctx.lineTo(270, 824);
        ctx.moveTo(590, 770);
        ctx.lineTo(530, 824);
        ctx.stroke();
        ctx.fillStyle = frameBgColor;
        ctx.strokeStyle = frameColor;
        ctx.lineWidth = 8;
        drawRoundedRect(ctx, 108, 54, 584, 630, 24);
        ctx.fill();
        ctx.stroke();
      } else if (frameStyle === "gradient") {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, frameColor);
        gradient.addColorStop(0.52, "#8b5cf6");
        gradient.addColorStop(1, "#06b6d4");
        ctx.fillStyle = frameBgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = gradient;
        drawRoundedRect(ctx, 16, 16, canvas.width - 32, canvas.height - 32, 42);
        ctx.fill();
        ctx.fillStyle = frameBgColor;
        drawRoundedRect(ctx, 46, 46, canvas.width - 92, qrSize + padding - 12, 30);
        ctx.fill();
      } else if (frameStyle !== "none") {
        const inset = 24;
        const cardHeight = canvas.height - inset * 2;
        ctx.lineWidth = frameStyle === "double" ? 8 : frameStyle === "minimal" ? 2 : 10;
        ctx.strokeStyle = frameColor;
        ctx.fillStyle = frameBgColor;
        if (frameStyle === "rounded" || frameStyle === "label" || frameStyle === "ticket" || frameStyle === "sticker" || frameStyle === "minimal" || frameStyle === "soft" || frameStyle === "pointer" || frameStyle === "scallop" || frameStyle === "ribbon") {
          drawRoundedRect(ctx, inset, inset, canvas.width - inset * 2, cardHeight, 38);
          ctx.fill();
          if (frameStyle !== "sticker") {
            if (frameStyle === "ticket") ctx.setLineDash([14, 10]);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        } else {
          ctx.strokeRect(inset, inset, canvas.width - inset * 2, cardHeight);
          ctx.lineWidth = 3;
          ctx.strokeRect(inset + 18, inset + 18, canvas.width - (inset + 18) * 2, cardHeight - 36);
        }
      }

      const qrX = sceneFrame ? 150 : padding;
      const qrY = frameStyle === "phone" ? 150 : frameStyle === "bag" ? 255 : frameStyle === "envelope" ? 168 : frameStyle === "hand" ? 92 : frameStyle === "ribbon" ? 112 : padding;
      ctx.drawImage(qrImage, qrX, qrY, qrSize, qrSize);

      if (logo) {
        const logoImage = await loadImage(logo);
        const logoSize = qrSize * 0.2;
        const logoX = qrX + (qrSize - logoSize) / 2;
        const logoY = qrY + (qrSize - logoSize) / 2;
        ctx.fillStyle = "#ffffff";
        drawRoundedRect(ctx, logoX - 10, logoY - 10, logoSize + 20, logoSize + 20, 22);
        ctx.fill();
        ctx.drawImage(logoImage, logoX, logoY, logoSize, logoSize);
      }

      if (frameStyle === "ticket") {
        const dividerY = qrY + qrSize + padding / 2;
        ctx.save();
        ctx.strokeStyle = frameColor;
        ctx.lineWidth = 3;
        ctx.setLineDash([10, 10]);
        ctx.beginPath();
        ctx.moveTo(54, dividerY);
        ctx.lineTo(canvas.width - 54, dividerY);
        ctx.stroke();
        ctx.restore();
        ctx.fillStyle = "#f8fafc";
        ctx.beginPath();
        ctx.arc(24, dividerY, 18, 0, Math.PI * 2);
        ctx.arc(canvas.width - 24, dividerY, 18, 0, Math.PI * 2);
        ctx.fill();
      }

      if (frameStyle === "scallop") {
        ctx.fillStyle = "#f8fafc";
        for (let x = 42; x < canvas.width - 24; x += 36) {
          ctx.beginPath();
          ctx.arc(x, canvas.height - 24, 18, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (frameHasCaption) {
        const caption = frameText || "QUÉT MÃ NGAY";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        if (sceneFrame) {
          const badge = frameStyle === "phone"
            ? { x: 250, y: 730, width: 300, height: 68, color: "#111827" }
            : frameStyle === "bag"
              ? { x: 250, y: 780, width: 300, height: 62, color: frameColor }
              : frameStyle === "envelope"
                ? { x: 250, y: 686, width: 300, height: 44, color: frameColor }
                : { x: 250, y: 620, width: 300, height: 50, color: frameColor };
          drawPill(ctx, caption, badge.x, badge.y, badge.width, badge.height, badge.color, "#ffffff");
        } else if (frameStyle === "sticker") {
          ctx.font = "700 28px Arial, sans-serif";
          const pillWidth = Math.min(qrSize - 20, Math.max(260, ctx.measureText(caption).width + 64));
          const pillHeight = 86;
          const pillX = (canvas.width - pillWidth) / 2;
          const pillY = qrY + qrSize + padding + (footerHeight - pillHeight) / 2;
          drawRoundedRect(ctx, pillX, pillY, pillWidth, pillHeight, pillHeight / 2);
          ctx.fillStyle = frameColor;
          ctx.fill();
          ctx.fillStyle = "#ffffff";
          ctx.font = "700 28px Arial, sans-serif";
          ctx.fillText(caption, canvas.width / 2, pillY + pillHeight / 2, pillWidth - 28);
        } else if (frameStyle === "soft" || frameStyle === "pointer") {
          const badgeX = (canvas.width - 360) / 2;
          const badgeY = qrY + qrSize + padding + 30;
          drawPill(ctx, caption, badgeX, badgeY, 360, 76, "#111827", "#ffffff");
          if (frameStyle === "pointer") {
            ctx.fillStyle = "#111827";
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2 - 26, badgeY + 76);
            ctx.lineTo(canvas.width / 2 + 26, badgeY + 76);
            ctx.lineTo(canvas.width / 2, badgeY + 104);
            ctx.closePath();
            ctx.fill();
          }
        } else if (frameStyle === "ribbon") {
          drawPill(ctx, caption, (canvas.width - 400) / 2, 28, 400, 58, "#111827", "#ffffff");
          ctx.fillStyle = "#111827";
          ctx.beginPath();
          ctx.moveTo(canvas.width / 2 - 22, 86);
          ctx.lineTo(canvas.width / 2 + 22, 86);
          ctx.lineTo(canvas.width / 2, 108);
          ctx.closePath();
          ctx.fill();
        } else {
          if (frameStyle === "ticket") {
            ctx.fillStyle = frameColor;
            ctx.font = "700 18px Arial, sans-serif";
            ctx.fillText("CẢM ƠN BẠN", canvas.width / 2, qrY + qrSize + padding / 2 + 25, qrSize - 40);
          }
          ctx.fillStyle = frameTextColor;
          ctx.font = "700 30px Arial, sans-serif";
          const captionY = qrY + qrSize + padding + footerHeight / 2;
          drawFrameLabel(ctx, caption, canvas.width / 2, captionY, qrSize);
        }
      }

      handleExport(canvas, type);
    } catch {
      setFormError("Không thể xuất mã QR. Vui lòng thử lại.");
    }
  };

  const handleExport = (canvas: HTMLCanvasElement, type: "png" | "pdf" | "share") => {
    if (type === "png") {
      const link = document.createElement("a");
      link.download = frameStyle === "none" ? "qr.png" : "qr-co-khung.png";
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
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const maxWidth = pageWidth - 30;
      const maxHeight = pageHeight - 30;
      const scale = Math.min(maxWidth / canvas.width, maxHeight / canvas.height);
      const imageWidth = canvas.width * scale;
      const imageHeight = canvas.height * scale;
      pdf.addImage(imgData, "PNG", (pageWidth - imageWidth) / 2, (pageHeight - imageHeight) / 2, imageWidth, imageHeight);
      pdf.save("qrcode.pdf");
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="QRFree trang chủ">
          <img src="/makeqr.png" alt="" width={44} height={44} className="h-11 w-11 rounded-xl object-cover" />
          <span className="text-lg font-bold tracking-tight">QRFree</span>
        </Link>
        <Link href="/scan" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold shadow-sm transition hover:border-indigo-300 hover:text-indigo-700">
          <ScanLine size={17} /> Quét mã QR
        </Link>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-12 pt-5 sm:px-8 sm:pt-10">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-600">Công cụ miễn phí</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Tạo mã QR của bạn</h1>
          <p className="mt-3 text-base leading-7 text-slate-600">Nhập nội dung, tùy chỉnh giao diện nếu muốn, rồi tải mã QR về thiết bị.</p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.85fr)]">
          <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">1</span>
              <div>
                <h2 className="font-semibold">Nhập nội dung</h2>
                <p className="text-sm text-slate-500">Chọn loại QR rồi điền thông tin.</p>
              </div>
            </div>

            <div className="space-y-5">
              <label className="block space-y-2">
                <span className="text-sm font-medium text-slate-700">Loại mã QR</span>
                <select value={qrType} onChange={(e) => setQrType(e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100">
                  <option value="text">Văn bản</option>
                  <option value="url">Website / đường dẫn</option>
                  <option value="wifi">Wi-Fi</option>
                  <option value="vcard">Danh thiếp (vCard)</option>
                  <option value="crypto">Địa chỉ ví crypto</option>
                </select>
              </label>

              {qrType === "text" && <label className="block space-y-2"><span className="text-sm font-medium text-slate-700">Nội dung</span><Input placeholder="Nhập văn bản cần đưa vào mã QR" value={text} onChange={(e) => setText(e.target.value)} className="w-full rounded-xl border-slate-300 p-3" /></label>}
              {qrType === "url" && <label className="block space-y-2"><span className="text-sm font-medium text-slate-700">Đường dẫn</span><Input type="url" placeholder="https://example.com" value={url} onChange={(e) => setUrl(e.target.value)} className="w-full rounded-xl border-slate-300 p-3" /></label>}
              {qrType === "wifi" && (
                <div className="space-y-4">
                  <label className="block space-y-2"><span className="text-sm font-medium text-slate-700">Tên mạng Wi-Fi (SSID)</span><Input placeholder="Tên mạng Wi-Fi" value={wifiSSID} onChange={(e) => setWifiSSID(e.target.value)} className="w-full rounded-xl border-slate-300 p-3" /></label>
                  {wifiType !== "nopass" && <label className="block space-y-2"><span className="text-sm font-medium text-slate-700">Mật khẩu</span><Input type="password" placeholder="Mật khẩu Wi-Fi" value={wifiPassword} onChange={(e) => setWifiPassword(e.target.value)} className="w-full rounded-xl border-slate-300 p-3" /></label>}
                  <label className="block space-y-2"><span className="text-sm font-medium text-slate-700">Bảo mật</span><select value={wifiType} onChange={(e) => setWifiType(e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm"><option value="WPA">WPA / WPA2</option><option value="WEP">WEP</option><option value="nopass">Không mật khẩu</option></select></label>
                </div>
              )}
              {qrType === "vcard" && (
                <div className="space-y-4">
                  <label className="block space-y-2"><span className="text-sm font-medium text-slate-700">Họ tên</span><Input placeholder="Tên hiển thị trong danh bạ" value={vCardName} onChange={(e) => setVCardName(e.target.value)} className="w-full rounded-xl border-slate-300 p-3" /></label>
                  <label className="block space-y-2"><span className="text-sm font-medium text-slate-700">Số điện thoại</span><Input type="tel" placeholder="Số điện thoại" value={vCardPhone} onChange={(e) => setVCardPhone(e.target.value)} className="w-full rounded-xl border-slate-300 p-3" /></label>
                </div>
              )}
              {qrType === "crypto" && (
                <div className="space-y-4">
                  <label className="block space-y-2"><span className="text-sm font-medium text-slate-700">Loại tiền mã hóa</span><select value={cryptoCoin} onChange={(e) => setCryptoCoin(e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm"><option value="BTC">Bitcoin (BTC)</option><option value="ETH">Ethereum (ETH)</option><option value="USDT">Tether (USDT)</option><option value="BNB">Binance Coin (BNB)</option><option value="LTC">Litecoin (LTC)</option><option value="DOGE">Dogecoin (DOGE)</option><option value="XRP">Ripple (XRP)</option><option value="SOL">Solana (SOL)</option></select></label>
                  <label className="block space-y-2"><span className="text-sm font-medium text-slate-700">Địa chỉ ví</span><Input placeholder="Nhập địa chỉ ví" value={cryptoAddress} onChange={(e) => setCryptoAddress(e.target.value)} className="w-full rounded-xl border-slate-300 p-3" /></label>
                </div>
              )}

              <details className="group rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-800 marker:hidden">Tùy chỉnh logo và màu sắc <span className="float-right text-slate-400 group-open:rotate-180">⌄</span></summary>
                <div className="mt-4 space-y-4 border-t border-slate-200 pt-4">
                  <div>
                    <label htmlFor="file-input" className="inline-flex cursor-pointer items-center rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700">{logo ? "Đổi ảnh logo" : "Chọn ảnh logo"}</label>
                    <input id="file-input" type="file" accept="image/*" onChange={(e) => { const file = e.target.files?.[0]; if (file) { const reader = new FileReader(); reader.onload = () => setLogo(reader.result as string); reader.readAsDataURL(file); } }} className="sr-only" />
                    {logo && <div className="mt-3 flex items-center gap-3"><img src={logo} alt="Logo đã chọn" className="h-12 w-12 rounded-lg border border-slate-200 object-cover" /><button type="button" onClick={() => setLogo(null)} className="text-sm font-medium text-rose-600 hover:underline">Gỡ logo</button></div>}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">Màu QR<input aria-label="Màu QR" type="color" value={qrColor} onChange={(e) => setQrColor(e.target.value)} className="h-9 w-10 cursor-pointer border-0 bg-transparent p-0" /></label>
                    <label className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">Màu nền<input aria-label="Màu nền" type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="h-9 w-10 cursor-pointer border-0 bg-transparent p-0" /></label>
                  </div>
                  <p className="text-xs leading-5 text-slate-500">Chọn màu có độ tương phản cao để mã dễ quét.</p>
                </div>
              </details>

              <details className="group rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-800 marker:hidden">
                  Tạo khung cho mã QR
                  <span className="float-right inline-flex items-center gap-2 text-xs font-medium text-slate-500">
                    <span className="rounded-full bg-white px-2 py-1">{frameLabels[frameStyle]}</span>
                    <span className="transition group-open:rotate-180">⌄</span>
                  </span>
                </summary>
                <div className="mt-4 space-y-4 border-t border-slate-200 pt-4">
                  <p className="text-xs leading-5 text-slate-500">Chọn kiểu khung, chỉnh màu và xem trước trước khi tải xuống.</p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {([
                    { id: "none", name: "Không khung" },
                    { id: "rounded", name: "Bo góc" },
                    { id: "label", name: "Thêm lời nhắc" },
                    { id: "double", name: "Khung đôi" },
                    { id: "gradient", name: "Chuyển sắc" },
                    { id: "ticket", name: "Vé QR" },
                    { id: "sticker", name: "Nhãn nổi" },
                    { id: "minimal", name: "Tối giản" },
                    { id: "soft", name: "Thẻ mềm" },
                    { id: "pointer", name: "Mũi tên" },
                    { id: "scallop", name: "Răng cưa" },
                    { id: "ribbon", name: "Ruy-băng" },
                    { id: "envelope", name: "Phong bì" },
                    { id: "bag", name: "Túi mua sắm" },
                    { id: "phone", name: "Điện thoại" },
                    { id: "hand", name: "Trên tay" },
                  ] as const).map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      aria-pressed={frameStyle === option.id}
                      onClick={() => selectFrameStyle(option.id)}
                      className={`flex min-h-[108px] flex-col items-center justify-center gap-2 rounded-xl border p-2 text-[11px] font-semibold transition ${frameStyle === option.id ? "border-indigo-500 bg-indigo-50 text-indigo-700 ring-2 ring-indigo-100" : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300"}`}
                    >
                      <span
                        aria-hidden="true"
                        className={`relative flex h-[54px] w-[48px] flex-col items-center justify-center bg-white ${option.id === "sticker" ? "rounded-full text-white" : "text-slate-800"} ${option.id === "rounded" ? "rounded-xl border-[3px]" : option.id === "double" ? "rounded-md border-[3px] border-double" : option.id === "label" ? "rounded-md border-2" : option.id === "gradient" ? "rounded-xl border-2" : option.id === "ticket" ? "rounded-md border-2 border-dashed" : option.id === "minimal" ? "rounded-md border" : option.id === "phone" ? "rounded-xl border-[4px] border-slate-900" : option.id === "bag" ? "rounded-b-xl border-2" : option.id === "envelope" ? "rounded-sm border-2" : option.id === "hand" ? "rounded-md border-2" : option.id === "scallop" ? "rounded-md border-2 border-dotted" : option.id === "ribbon" ? "rounded-md border-2" : "rounded-md"}`}
                        style={option.id === "none" ? undefined : option.id === "gradient" ? { borderColor: frameColor, backgroundImage: `linear-gradient(135deg, ${frameColor}, #8b5cf6, #06b6d4)` } : option.id === "sticker" || option.id === "soft" || option.id === "pointer" || option.id === "ribbon" ? { backgroundColor: frameColor, borderColor: frameColor } : { borderColor: frameColor }}
                      >
                        {option.id === "bag" && <span className="absolute -top-2 h-3 w-5 rounded-t-full border-2 border-b-0" style={{ borderColor: frameColor }} />}
                        {option.id === "phone" && <span className="absolute top-1 h-1 w-3 rounded-full bg-slate-900" />}
                        {option.id === "envelope" && <svg aria-hidden="true" viewBox="0 0 48 54" className="pointer-events-none absolute inset-0 h-full w-full"><path d="M3 5 24 27 45 5M3 49l16-16m26 16L29 33" fill="none" stroke={frameColor} strokeWidth="1.5" /></svg>}
                        <span className={`grid h-5 w-5 grid-cols-2 gap-0.5 ${option.id === "ribbon" || option.id === "soft" || option.id === "pointer" ? "text-white" : "text-slate-900"}`} aria-hidden="true">
                          <span className="rounded-[1px] bg-current" /><span className="rounded-[1px] bg-current" />
                          <span className="rounded-[1px] bg-current" /><span className="rounded-[1px] bg-current" />
                        </span>
                        <span className={`mt-1 max-w-[42px] truncate rounded-sm px-0.5 text-[5px] leading-[8px] ${option.id === "ribbon" || option.id === "soft" || option.id === "pointer" || option.id === "sticker" ? "bg-slate-950 text-white" : "text-slate-900"}`}>Scan Me!</span>
                      </span>
                      {option.name}
                    </button>
                  ))}
                </div>
                {frameStyle !== "none" && (
                  <div className="space-y-3 border-t border-slate-100 pt-3">
                    <div className="grid grid-cols-2 gap-3">
                      <label className="flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700">
                        Màu viền
                        <input aria-label="Màu viền khung QR" type="color" value={frameColor} onChange={(e) => setFrameColor(e.target.value)} className="h-8 w-9 cursor-pointer border-0 bg-transparent p-0" />
                      </label>
                      <label className="flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700">
                        Màu khung
                        <input aria-label="Màu nền khung QR" type="color" value={frameBgColor} onChange={(e) => setFrameBgColor(e.target.value)} className="h-8 w-9 cursor-pointer border-0 bg-transparent p-0" />
                      </label>
                    </div>
                    {frameHasCaption && (
                      <>
                        <label className="block space-y-2">
                          <span className="text-xs font-medium text-slate-700">Nội dung nhãn</span>
                          <Input value={frameText} maxLength={48} onChange={(e) => setFrameText(e.target.value)} placeholder="Ví dụ: Quét mã để xem thực đơn" className="w-full rounded-xl border-slate-300 p-3 text-sm" />
                        </label>
                        {frameUsesTextColor && <label className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700">
                          Màu chữ<input aria-label="Màu chữ trên khung QR" type="color" value={frameTextColor} onChange={(e) => setFrameTextColor(e.target.value)} className="h-8 w-9 cursor-pointer border-0 bg-transparent p-0" />
                        </label>}
                      </>
                    )}
                  </div>
                )}
                <p className="text-xs leading-5 text-slate-500">Để mã dễ quét, giữ khoảng trắng quanh QR và dùng màu có độ tương phản cao.</p>
                </div>
              </details>

              {formError && <p role="alert" className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{formError}</p>}
              <Button onClick={generateQR} className="w-full rounded-xl bg-indigo-600 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-700">Tạo mã QR</Button>
              <p className="text-center text-sm text-slate-500">Đã tạo {downloadCount.toLocaleString("vi-VN")} mã QR</p>
            </div>

            {history.length > 0 && (
              <details className="mt-6 border-t border-slate-200 pt-5">
                <summary className="cursor-pointer text-sm font-semibold text-slate-700">Lịch sử gần đây ({history.length})</summary>
                <div className="mt-3 max-h-48 space-y-2 overflow-y-auto">
                  {history.map((item, i) => <button key={i} type="button" className="block w-full break-all rounded-xl border border-slate-200 bg-white p-3 text-left text-sm text-slate-600 hover:border-indigo-300" onClick={() => { setQrValue(item.text); setText(item.text); }}>{item.text}</button>)}
                </div>
              </details>
            )}
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:sticky lg:top-6">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">2</span>
              <div>
                <h2 className="font-semibold">Xem trước mã QR</h2>
                <p className="text-sm text-slate-500">Kết quả hiển thị tại đây.</p>
              </div>
            </div>
            <div className="flex min-h-[320px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5">
              {qrValue ? (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex w-full flex-col items-center gap-5">
                  <div
                    className={`relative shadow-sm ${frameStyle === "none" ? "rounded-2xl p-4" : frameStyle === "gradient" ? "rounded-[28px] p-3" : frameStyle === "sticker" ? "rounded-[28px] p-5" : frameStyle === "phone" ? "rounded-[32px] border-[8px] border-slate-900 bg-white px-5 pb-5 pt-8" : frameStyle === "bag" ? "rounded-b-[32px] border-x-4 border-b-4 border-t-0 px-5 pb-5 pt-7" : frameStyle === "hand" ? "rounded-2xl border-2 p-4" : frameStyle === "ribbon" ? "rounded-2xl p-1" : "p-5"} ${frameStyle === "rounded" || frameStyle === "label" || frameStyle === "envelope" || frameStyle === "ribbon" ? "rounded-2xl" : frameStyle === "double" ? "rounded-lg" : frameStyle === "minimal" ? "rounded-xl" : frameStyle === "ticket" || frameStyle === "scallop" ? "rounded-2xl" : ""}`}
                    style={{
                      backgroundColor: frameStyle === "none" ? bgColor : frameStyle === "phone" ? "#ffffff" : frameStyle === "scallop" ? "#ffffff" : frameBgColor,
                      backgroundImage: frameStyle === "gradient" ? `linear-gradient(135deg, ${frameColor}, #8b5cf6, #06b6d4)` : undefined,
                      border: ["none", "gradient", "sticker", "phone", "bag"].includes(frameStyle) ? undefined : `${frameStyle === "double" ? 6 : frameStyle === "minimal" ? 2 : 4}px ${frameStyle === "double" ? "double" : frameStyle === "ticket" || frameStyle === "scallop" ? "dashed" : "solid"} ${frameColor}`,
                      borderColor: frameStyle === "phone" ? undefined : frameColor,
                    }}
                  >
                    {frameStyle === "phone" && <span aria-hidden="true" className="absolute left-1/2 top-2 h-1.5 w-10 -translate-x-1/2 rounded-full bg-slate-900" />}
                    {frameStyle === "bag" && <span aria-hidden="true" className="absolute left-1/2 top-[-20px] h-8 w-20 -translate-x-1/2 rounded-t-full border-[4px] border-b-0" style={{ borderColor: frameColor }} />}
                    {frameStyle === "envelope" && <svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full"><path d="M2 5 50 52 98 5M2 98 39 62m59 36L61 62" fill="none" stroke={frameColor} strokeWidth="1.5" /></svg>}
                    {frameStyle === "ribbon" && <div className="mx-auto mb-3 w-[160px] max-w-full rounded-full px-3 py-1 text-center text-[10px] font-bold text-white" style={{ backgroundColor: "#111827" }}>{frameText || "QUÉT MÃ NGAY"}<span className="mx-auto -mb-3 mt-0.5 block h-0 w-0 border-x-[6px] border-t-[6px] border-x-transparent border-t-slate-900" /></div>}
                    <div className={frameStyle === "gradient" ? "rounded-2xl p-3" : ""} style={frameStyle === "gradient" ? { backgroundColor: frameBgColor } : undefined}>
                      <div ref={qrRef} className="relative inline-block align-middle">
                        <QRCode value={qrValue} size={frameIsScene ? 200 : 256} fgColor={qrColor} bgColor={bgColor} level="H" />
                        {logo && <img src={logo} alt="Logo ở giữa mã QR" className={`absolute left-1/2 top-1/2 ${frameIsScene ? "h-11 w-11" : "h-14 w-14"} -translate-x-1/2 -translate-y-1/2 rounded-lg border-[3px] border-white object-cover`} />}
                      </div>
                    </div>
                    {frameHasCaption && (
                      <>
                        {frameStyle === "ticket" && <div className="mt-3 border-t-2 border-dashed" style={{ borderColor: frameColor }} />}
                        {frameStyle === "sticker" || frameStyle === "soft" || frameStyle === "pointer" || frameIsScene ? (
                          <p className={`mx-auto mt-4 rounded-full px-4 py-2 text-center text-xs font-bold text-white ${frameIsScene ? "max-w-[200px]" : "max-w-[256px]"} ${frameStyle === "soft" || frameStyle === "pointer" || frameStyle === "phone" ? "bg-slate-900" : ""}`} style={{ backgroundColor: frameStyle === "soft" || frameStyle === "pointer" || frameStyle === "phone" ? "#111827" : frameColor }}>
                            {frameText || "QUÉT MÃ NGAY"}
                          </p>
                        ) : frameStyle === "ribbon" ? null : (
                          <div className="pt-3 text-center">
                            {frameStyle === "ticket" && <p className="mb-1 text-[10px] font-bold tracking-[0.18em]" style={{ color: frameColor }}>CẢM ƠN BẠN</p>}
                            <p className="max-w-[256px] px-2 text-sm font-bold leading-5" style={{ color: frameTextColor }}>{frameText || "QUÉT MÃ NGAY"}</p>
                          </div>
                        )}
                        {frameStyle === "pointer" && <span aria-hidden="true" className="mx-auto -mt-1 block h-0 w-0 border-x-[12px] border-t-[12px] border-x-transparent border-t-slate-900" />}
                        {frameStyle === "hand" && <svg aria-hidden="true" viewBox="0 0 100 28" className="mx-auto mt-1 h-7 w-full max-w-[220px] text-orange-300"><path d="M1 28 10 25c8-3 10-15 19-19 8-4 15 1 20 7l7 8 9-7c9-7 19-11 27-8 5 2 7 8 8 11l-9 4H1Z" fill="currentColor" stroke="#475569" strokeWidth="2" /></svg>}
                      </>
                    )}
                    {frameStyle === "scallop" && <span aria-hidden="true" className="absolute -bottom-2 left-2 right-2 flex justify-between">{Array.from({ length: 9 }, (_, index) => <span key={index} className="h-4 w-4 rounded-full bg-slate-50" />)}</span>}
                    {frameStyle === "ticket" && <><span aria-hidden="true" className="pointer-events-none absolute -left-2 top-[276px] h-4 w-4 rounded-full bg-slate-50" /><span aria-hidden="true" className="pointer-events-none absolute -right-2 top-[276px] h-4 w-4 rounded-full bg-slate-50" /></>}
                  </div>
                  <p className="max-w-full break-all text-center text-xs text-slate-500">{qrValue}</p>
                </motion.div>
              ) : (
                <div className="max-w-xs text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-indigo-500 shadow-sm"><ScanLine size={30} /></div>
                  <p className="mt-4 font-semibold text-slate-700">Mã QR sẽ xuất hiện ở đây</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">Điền nội dung ở khung bên trái rồi chọn “Tạo mã QR”.</p>
                </div>
              )}
            </div>
            {qrValue && <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
              <Button onClick={() => exportQR("png")} className="bg-emerald-600 text-white hover:bg-emerald-700">Tải PNG</Button>
              <Button onClick={() => exportQR("pdf")} className="bg-violet-600 text-white hover:bg-violet-700">Tải PDF</Button>
              <Button onClick={() => exportQR("share")} className="bg-sky-600 text-white hover:bg-sky-700">Chia sẻ</Button>
            </div>}
            <p className="mt-5 text-center text-xs leading-5 text-slate-400">QR được tạo trên thiết bị của bạn. Hãy quét thử trước khi in hoặc chia sẻ.</p>
          </section>
        </div>
      </section>
    </main>
  );
}
