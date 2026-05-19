"use client";

import QrScanner from "@/components/qr-scanner";
import Link from "next/link";
import { ScanLine } from "lucide-react";
export default function ScanPage() {
  return (
    
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-white px-4 py-12">
        
      <div className="mx-auto max-w-2xl">
        
        <div className="mb-10 text-center">
            
            <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
  <div className="rounded-2xl bg-black p-4 text-white shadow-md">
    <h3 className="flex items-center gap-2 text-lg font-semibold">
      <ScanLine size={18} />
      Quét QR Code
    </h3>

    <p className="mt-1 text-sm text-zinc-500">
      Camera hoặc ảnh QR
    </p>
  </div>

  <Link
    href="/"
    className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-md transition hover:bg-zinc-50"
  >
    <h3 className="text-lg font-semibold">
      Tạo QR Code
    </h3>

    <p className="mt-1 text-sm text-zinc-300">
      Link, WiFi, văn bản...
    </p>
  </Link>
</div>
          <h1 className="text-4xl font-bold tracking-tight">
            Scan QR Code
            
          </h1>
          
        
          <p className="mt-3 text-zinc-500">
            Quét mã QR bằng camera hoặc tải ảnh lên
          </p>
        </div>

        <QrScanner />
      </div>
    </main>
  );
}