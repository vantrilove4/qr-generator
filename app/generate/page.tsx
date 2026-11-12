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
                  <div ref={qrRef} className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="relative inline-block align-middle">
                      <QRCode value={qrValue} size={256} fgColor={qrColor} bgColor={bgColor} level="H" />
                      {logo && <img src={logo} alt="Logo ở giữa mã QR" className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-lg border-[3px] border-white object-cover" />}
                    </div>
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
