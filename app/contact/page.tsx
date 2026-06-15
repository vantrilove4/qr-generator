
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Liên hệ | Contact | QRFree",
  description: "Thông tin liên hệ của QRFree.io.vn",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-6 text-3xl font-bold">
        Liên hệ
      </h1>

      <p className="text-muted-foreground">
        Nếu bạn cần hỗ trợ, báo lỗi hoặc có đề xuất cải thiện cho QRFree,
        vui lòng liên hệ với chúng tôi qua email dưới đây:
      </p>

      <div className="mt-6 rounded-xl border p-5">
        <p className="text-sm text-muted-foreground">
          Email hỗ trợ
        </p>

        <a
          href="mailto:nvantri93@gmail.com"
          className="mt-2 block text-lg font-semibold text-cyan-600 hover:underline dark:text-cyan-400"
        >
          📧 nvantri93@gmail.com
        </a>
      </div>

      <div className="mt-8">
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

