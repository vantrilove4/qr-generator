
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://qrfree.io.vn"),

  title: {
    default: "QRFree - Tạo & Quét Mã QR Miễn Phí",
    template: "%s | QRFree",
  },

  description:
    "Tạo và quét mã QR miễn phí trực tuyến. Hỗ trợ URL, WiFi, Email, Văn bản, Danh bạ, Số điện thoại và nhiều loại mã QR khác. Tải về PNG, SVG, PDF nhanh chóng.",

  keywords: [
    "QR Code",
    "Tạo mã QR",
    "Quét mã QR",
    "QR Generator",
    "QR Scanner",
    "QR miễn phí",
    "Tạo QR online",
    "QR WiFi",
    "QR Email",
    "QR URL",
    "QR Contact",
    "QRFree",
    "QRFree.io.vn",
  ],

  authors: [
    {
      name: "QRFree",
      url: "https://qrfree.io.vn",
    },
  ],

  creator: "TriNguyen",
  publisher: "QRFree",

  alternates: {
    canonical: "https://qrfree.io.vn",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "QRFree - Tạo & Quét Mã QR Miễn Phí",
    description:
      "Tạo và quét mã QR miễn phí trực tuyến. Hỗ trợ URL, WiFi, Email, Văn bản, Danh bạ và nhiều loại QR khác.",

    url: "https://qrfree.io.vn",
    siteName: "QRFree",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QRFree - Tạo & Quét Mã QR Miễn Phí",
      },
    ],

    locale: "vi_VN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "QRFree - Tạo & Quét Mã QR Miễn Phí",
    description:
      "Tạo và quét mã QR miễn phí trực tuyến với nhiều tùy chọn tùy chỉnh.",
    images: ["/og-image.png"],
  },

  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06b6d4",
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

        {/* Bing Webmaster */}
        <meta
          name="msvalidate.01"
          content="9DA58065EEC86FB88BAEB21C5A7EEDAC"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="google-adsense-account" content="ca-pub-7426230349740633"></meta>
      </head>

      <body suppressHydrationWarning>
        {children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

