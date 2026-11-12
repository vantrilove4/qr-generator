import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("Tạo mã QR miễn phí", "Tạo mã QR tĩnh cho website, văn bản, Wi-Fi, danh bạ vCard hoặc địa chỉ ví crypto. Tùy chỉnh màu sắc, thêm logo và tải ảnh PNG hoặc PDF.", "/generate");

export default function GenerateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}