import { createPageMetadata } from "@/lib/seo";
import BlogIndex from "@/components/blog-index";

export const metadata = createPageMetadata(
  "Hướng dẫn tạo và quét mã QR",
  "Tìm hướng dẫn về QR Wi-Fi, danh thiếp, quét mã, bảo mật QR và các kiến thức hữu ích khác.",
  "/blog",
);

export default function BlogPage() {
  return <BlogIndex />;
}
