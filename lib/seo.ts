import type { Metadata } from "next";

const siteName = "QRFree";
const socialImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "QRFree - Tạo và quét mã QR miễn phí",
};

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const cleanTitle = title.replace(/\s*\|\s*QRFree$/, "");
  const url = `https://qrfree.io.vn${path}`;

  return {
    title: cleanTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: cleanTitle,
      description,
      url,
      siteName,
      locale: "vi_VN",
      type: "website",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: cleanTitle,
      description,
      images: [socialImage.url],
    },
  };
}
