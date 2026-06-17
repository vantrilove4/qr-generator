import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cách tạo mã QR Zalo cá nhân và Zalo OA miễn phí | QRFree",
  description:
    "Hướng dẫn tạo mã QR Zalo cá nhân và Zalo Official Account miễn phí để chia sẻ liên hệ nhanh chóng.",
  keywords: [
    "tạo qr zalo",
    "mã qr zalo",
    "tạo mã qr zalo cá nhân",
    "qr zalo oa",
    "zalo qr code",
  ],
  alternates: {
    canonical: "https://qrfree.io.vn/blog/cach-tao-ma-qr-zalo",
  },
};

export default function ZaloQRBlogPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-16">
        <Link
          href="/blog"
          className="mb-8 inline-flex text-sm text-cyan-400 hover:text-cyan-300"
        >
          ← Quay lại Blog
        </Link>

        {/* Hero */}
        <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur">
          <span className="rounded-full bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
            ZALO QR
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Cách tạo mã QR Zalo
            <span className="mt-2 block text-cyan-400">
              miễn phí trong vài giây
            </span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-400">
            <span>📅 Cập nhật: 17/06/2026</span>
            <span>⏱️ 5 phút đọc</span>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            Mã QR Zalo giúp bạn chia sẻ tài khoản cá nhân hoặc Zalo Official
            Account nhanh chóng mà không cần tìm kiếm bằng số điện thoại.
          </p>
        </div>

        {/* Content */}
        <article className="mt-10 space-y-10">
          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              Mã QR Zalo là gì?
            </h2>

            <p className="leading-8 text-slate-300">
              Đây là mã QR chứa liên kết đến tài khoản Zalo của bạn.
              Khi người khác quét mã, họ có thể truy cập hồ sơ và kết bạn
              hoặc theo dõi OA ngay lập tức.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              Lợi ích của QR Zalo
            </h2>

            <ul className="space-y-4 text-slate-300">
              <li>✓ Kết bạn nhanh chóng.</li>
              <li>✓ Chia sẻ thông tin dễ dàng.</li>
              <li>✓ Tăng lượt theo dõi OA.</li>
              <li>✓ Phù hợp cho cửa hàng và doanh nghiệp.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              Cách tạo mã QR Zalo miễn phí
            </h2>

            <ol className="space-y-4 text-slate-300">
              <li>1. Sao chép liên kết Zalo của bạn.</li>
              <li>2. Truy cập QRFree.io.vn.</li>
              <li>3. Chọn loại QR "Website".</li>
              <li>4. Dán liên kết Zalo vào.</li>
              <li>5. Tùy chỉnh màu sắc hoặc logo.</li>
              <li>6. Tải mã QR về thiết bị.</li>
            </ol>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              Ứng dụng thực tế
            </h2>

            <p className="leading-8 text-slate-300">
              Các cửa hàng thường in mã QR Zalo lên danh thiếp,
              menu hoặc quầy thanh toán để khách hàng dễ dàng liên hệ.
            </p>
          </section>
        </article>

        {/* CTA */}
        <section className="mt-16 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-10 text-center">
          <h2 className="text-3xl font-bold">
            Tạo mã QR Zalo miễn phí
          </h2>

          <p className="mt-4 text-slate-300">
            Chỉ mất vài giây để tạo mã QR chuyên nghiệp.
          </p>

          <Link
            href="/generate"
            className="mt-8 inline-block rounded-2xl bg-cyan-500 px-8 py-4 font-bold text-black transition hover:bg-cyan-400"
          >
            Tạo mã QR ngay
          </Link>
        </section>

        {/* Related */}
        <section className="mt-16">
          <h2 className="mb-6 text-3xl font-bold">
            Bài viết liên quan
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/blog/qr-code-la-gi"
              className="rounded-3xl border border-slate-800 bg-white/5 p-6 transition hover:border-cyan-500/40"
            >
              <h3 className="text-xl font-bold">
                QR Code là gì?
              </h3>

              <p className="mt-3 text-slate-400">
                Tìm hiểu về công nghệ QR Code.
              </p>
            </Link>

            <Link
              href="/blog/cach-tao-ma-qr-wifi"
              className="rounded-3xl border border-slate-800 bg-white/5 p-6 transition hover:border-cyan-500/40"
            >
              <h3 className="text-xl font-bold">
                Cách tạo mã QR WiFi
              </h3>

              <p className="mt-3 text-slate-400">
                Chia sẻ WiFi chỉ bằng một lần quét.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}