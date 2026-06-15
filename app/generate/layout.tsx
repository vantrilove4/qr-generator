import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tạo mã QR miễn phí - QR Generator Online",
  description:
    "Tạo mã QR miễn phí trực tuyến cho Website, Văn bản, WiFi, Email, Số điện thoại và Danh bạ.",

  alternates: {
    canonical: "https://qrfree.io.vn/generate",
  },

  openGraph: {
    title: "Tạo mã QR miễn phí - QR Generator Online",
    description:
      "Tạo mã QR trực tuyến miễn phí cho URL, WiFi, Email và nhiều loại nội dung khác.",
    url: "https://qrfree.io.vn/generate",
    siteName: "QRFree",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/og-image-generate.png",
        width: 1200,
        height: 630,
        alt: "QR Generator",
      },
    ],
  },
};

export default function GenerateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}