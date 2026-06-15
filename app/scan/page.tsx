//"use client";

import QrScanner from "@/components/qr-scanner";
import Link from "next/link";
//import { ScanLine } from "lucide-react";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title:
    "Free QR Code Scanner Online | Camera, Image & Screen Scanner",

  description:
    "Scan QR codes instantly using camera, image upload, or screen capture. Free online QR scanner with snipping tool support.",

  keywords: [
    "qr scanner",
    "scan qr code",
    "qr code scanner online",
    "scan qr from image",
    "scan qr from screen",
    "free qr scanner",
  ],

  alternates: {
    canonical: "https://qrfree.io.vn/scan",
  },

  openGraph: {
    title:
      "Free QR Code Scanner Online | QRFree",

    description:
      "Scan QR codes using camera, uploaded images, or screen capture.",

    url: "https://qrfree.io.vn/scan",

    siteName: "QRFree",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Free QR Code Scanner Online | QRFree",

    description:
      "Scan QR codes instantly from camera, images, or your screen.",
  },
};

export default function ScanPage() {
  return (
    
    <main className="min-h-screen bg-[#f5f7fb]">
      <div className="mx-auto flex min-h-screen max-w-[1200px] items-center px-4 py-10">
        <div className="grid w-full gap-8 lg:grid-cols-[340px_minmax(0,1fr)]">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <Link
              href="/generate"
              className="mb-8 w-fit rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              ← Tạo QR
            </Link>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-zinc-900">
              Quét mã QR trực tuyến miễn phí
            </h1>
            <h2 className="sr-only">
  Scan QR codes from camera, image upload,
  and screen capture online for free
</h2>
            <p className="mt-5 max-w-sm text-base leading-7 text-zinc-500">
              Quét mã QR bằng camera hoặc tải ảnh lên.
              Nhanh, đơn giản và hoạt động trực tiếp trên trình duyệt.
            </p>

            <div className="mt-8 flex gap-3">
              <div className="rounded-2xl border border-white/60 bg-white/80 px-5 py-4 shadow-lg backdrop-blur">
                <p className="text-2xl font-bold text-zinc-900">
                  100%
                </p>

                <p className="text-sm text-zinc-500">
                  Client-side
                </p>
              </div>

              <div className="rounded-2xl border border-white/60 bg-white/80 px-5 py-4 shadow-lg backdrop-blur">
                <p className="text-2xl font-bold text-zinc-900">
                  Free
                </p>

                <p className="text-sm text-zinc-500">
                  No login
                </p>
              </div>
            </div>
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

      name: "QRFree Scanner",

      applicationCategory:
        "UtilitiesApplication",

      operatingSystem: "Web Browser",

      description:
        "Free online QR code scanner using camera, image upload, and screen capture.",

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