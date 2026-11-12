//"use client";

import QrScanner from "@/components/qr-scanner";
import Link from "next/link";
//import { ScanLine } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";



export const metadata = createPageMetadata("Quét mã QR trực tuyến miễn phí", "Quét mã QR bằng camera, ảnh tải lên hoặc vùng màn hình đã chọn. Nội dung được đọc ngay trên trình duyệt.", "/scan");

export default function ScanPage() {
  return (
    
    <main className="min-h-screen bg-[#f5f7fb]">
      <div className="mx-auto flex min-h-screen max-w-[1200px] items-start px-4 py-8 sm:px-6 lg:py-12">
        <div className="grid w-full items-start gap-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-8">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <Link
              href="/generate"
              className="mb-8 w-fit rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              ← Tạo QR
            </Link>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl">
              Quét mã QR trực tuyến miễn phí
            </h1>
            <h2 className="sr-only">
              Quét QR bằng camera, ảnh, clipboard hoặc màn hình
</h2>
            <p className="mt-5 max-w-sm text-base leading-7 text-zinc-500">
              Dùng camera, tải ảnh lên, dán ảnh vừa sao chép hoặc chọn vùng QR trên màn hình.
            </p>

            <ul className="mt-7 space-y-3 text-sm text-zinc-600">
              <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> Không cần đăng ký</li>
              <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> Nội dung QR được đọc trong trình duyệt</li>
              <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> Sao chép kết quả chỉ với một nút</li>
            </ul>
          </div>

          {/* Right */}
          <QrScanner />
        </div>
      </div>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",

      "@type": "SoftwareApplication",

      name: "QRFree - Quét mã QR",

      applicationCategory:
        "UtilitiesApplication",

      operatingSystem: "Web Browser",

      description:
        "Công cụ quét mã QR trực tuyến bằng camera, ảnh tải lên hoặc vùng màn hình đã chọn.",

      url: "https://qrfree.io.vn/scan",

      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    }),
  }}
/>

    </main>
  );
}
