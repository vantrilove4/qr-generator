
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Giới thiệu | About | QRFree",
  description: "Giới thiệu về QRFree.io.vn - Công cụ tạo và quét mã QR miễn phí.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-6 text-3xl font-bold">
        Giới thiệu
      </h1>

      <div className="space-y-4 text-muted-foreground leading-7">
        <p>
          <strong>QRFree.io.vn</strong> là công cụ tạo và quét mã QR trực tuyến
          miễn phí, giúp người dùng dễ dàng tạo các loại mã QR phục vụ học tập,
          công việc và nhu cầu cá nhân.
        </p>

        <p>
          Chúng tôi hỗ trợ tạo mã QR cho nhiều loại nội dung như:
          URL, văn bản, Wi-Fi, email, số điện thoại, danh bạ và nhiều định dạng khác.
        </p>

        <p>
          Bên cạnh đó, QRFree còn cung cấp tính năng quét mã QR trực tiếp bằng
          camera hoặc từ hình ảnh tải lên, mang lại trải nghiệm nhanh chóng và tiện lợi.
        </p>

        <p>
          Chúng tôi hướng đến việc xây dựng một dịch vụ đơn giản, dễ sử dụng,
          bảo mật và hoàn toàn miễn phí cho cộng đồng người dùng Việt Nam.
        </p>
      </div>

      <div className="mt-10 rounded-xl border p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Sứ mệnh của chúng tôi
        </h2>

        <p className="text-muted-foreground leading-7">
          Mang công nghệ mã QR đến gần hơn với mọi người thông qua một nền tảng
          miễn phí, thân thiện và đáng tin cậy.
        </p>
      </div>

      {/* Nút quay về trang chủ */}
      <div className="mt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-medium text-black transition hover:bg-cyan-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Quay về trang chủ
        </Link>
      </div>
    </main>
  );
}

