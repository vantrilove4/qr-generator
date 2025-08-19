import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tạo mã QR miễn phí | QR Code Generator",
  description: "Công cụ tạo mã QR miễn phí, nhanh chóng, hỗ trợ URL, văn bản và nhiều loại nội dung khác.",
  keywords: ["tạo QR", "QR code generator", "mã QR miễn phí", "tạo mã QR online"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
