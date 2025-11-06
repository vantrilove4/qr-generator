import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
 
export const metadata: Metadata = {
  title: "Tạo mã QR miễn phí | Free QR Generator",
  description:
    "Công cụ tạo mã QR online miễn phí, nhanh chóng, hỗ trợ tùy chỉnh màu QR, màu nền, bo góc, thêm logo, lưu lịch sử, phóng to/thu nhỏ, tải về PNG/PDF/SVG và chia sẻ trực tiếp.",
  keywords: [
    "tạo QR",
    "QR code generator",
    "tạo mã QR online",
    "QR miễn phí",
    "tùy chỉnh QR code",
    "QR logo",
    "QR màu sắc",
    "QR bo góc",
    "lịch sử QR",
    "tải QR PNG PDF SVG",
    "chia sẻ QR code",
    "qr generator việt nam"
  ],
  openGraph: {
    title: "Tạo mã QR miễn phí | Free QR Generator",
    description:
      "Công cụ tạo mã QR online miễn phí, hỗ trợ nhiều loại nội dung, tùy chỉnh màu, nền, bo góc, thêm logo, lưu lịch sử, phóng to/thu nhỏ, tải xuống PNG/PDF/SVG và chia sẻ trực tiếp.",
    url: "https://qrfree.io.vn",
    siteName: "Free QR Generator",
    images: [
      {
        url: "https://qrfree.io.vn/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tạo mã QR nhanh chóng, tùy chỉnh màu sắc, logo và chia sẻ dễ dàng",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tạo mã QR miễn phí | Free QR Generator",
    description:
      "Công cụ tạo mã QR online miễn phí, hỗ trợ URL, văn bản, tùy chỉnh màu, nền, bo góc, thêm logo, lịch sử, phóng to/thu nhỏ, tải về PNG/PDF/SVG và chia sẻ trực tiếp.",
    images: ["https://qrfree.io.vn/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
