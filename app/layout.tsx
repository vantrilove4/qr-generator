import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
 
export const metadata: Metadata = {
  title: "Tạo mã QR miễn phí | Free QR Generator",
  description:
    "Công cụ tạo mã QR online miễn phí, nhanh chóng. Hỗ trợ URL, văn bản, điện thoại và tải về ảnh PNG chất lượng cao.",
  keywords: [
    "tạo QR",
    "QR code generator",
    "tạo mã QR online",
    "QR miễn phí",
    "qr generator việt nam",
  ],
  openGraph: {
    title: "Tạo mã QR miễn phí | Free QR Generator",
    description:
      "Công cụ tạo mã QR online miễn phí, hỗ trợ nhiều loại nội dung và tải xuống PNG chất lượng cao.",
    url: "https://freeqr.vercel.app",
    siteName: "Free QR Generator",
    images: [
      {
        url: "https://freeqr.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tạo mã QR nhanh chóng và miễn phí",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tạo mã QR miễn phí | Free QR Generator",
    description:
      "Công cụ tạo mã QR online miễn phí, hỗ trợ URL, văn bản, điện thoại và tải về ảnh PNG.",
    images: ["https://freeqr.vercel.app/og-image.png"],
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
