import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from "next/script";

export const metadata: Metadata = {
  title: "Tạo mã QR miễn phí & Tùy chỉnh | QR Generator",
  description: "Tạo mã QR online miễn phí, hỗ trợ nhiều loại nội dung: văn bản, URL, Wi-Fi, vCard, Crypto. Tùy chỉnh màu QR, màu nền, bo góc, thêm logo, lưu lịch sử, phóng to/thu nhỏ, tải về PNG/PDF/SVG và chia sẻ trực tiếp.",
  keywords: [
    "tạo QR",
    "QR code generator",
    "mã QR online miễn phí",
    "QR tùy chỉnh màu",
    "QR logo",
    "QR bo góc",
    "lưu lịch sử QR",
    "tải QR PNG PDF SVG",
    "chia sẻ QR",
    "QR generator Việt Nam"
  ],
  openGraph: {
    title: "Tạo mã QR miễn phí & Tùy chỉnh | QR Generator",
    description: "Tạo mã QR online nhanh chóng, hỗ trợ văn bản, URL, Wi-Fi, vCard, Crypto. Tùy chỉnh màu, nền, bo góc, thêm logo, lưu lịch sử, tải xuống PNG/PDF/SVG và chia sẻ trực tiếp.",
    url: "https://qrfree.io.vn",
    siteName: "Free QR Generator",
    images: [
      {
        url: "https://qrfree.io.vn/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tạo mã QR miễn phí, tùy chỉnh màu sắc, logo và chia sẻ dễ dàng"
      }
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tạo mã QR miễn phí & Tùy chỉnh | QR Generator",
    description: "Tạo mã QR online miễn phí, hỗ trợ nhiều loại nội dung, tùy chỉnh màu, nền, bo góc, thêm logo, lịch sử, tải về PNG/PDF/SVG và chia sẻ trực tiếp.",
    images: ["https://qrfree.io.vn/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-TESRRYTM8Z"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TESRRYTM8Z');
          `}
        </Script>
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
