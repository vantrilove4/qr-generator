import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cách tạo mã QR Facebook cá nhân và Fanpage miễn phí | QRFree",
  description:
    "Hướng dẫn tạo mã QR Facebook miễn phí để chia sẻ trang cá nhân hoặc Fanpage nhanh chóng.",
  keywords: [
    "tạo qr facebook",
    "mã qr facebook",
    "qr fanpage",
    "facebook qr code",
    "tạo mã qr fanpage",
  ],
  alternates: {
    canonical: "https://qrfree.io.vn/blog/cach-tao-ma-qr-facebook",
  },
};

export default function FacebookQRBlogPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
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
            FACEBOOK QR
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Cách tạo mã QR Facebook
            <span className="mt-2 block text-cyan-400">
              miễn phí trong vài giây
            </span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-400">
            <span>📅 Cập nhật: 17/06/2026</span>
            <span>⏱️ 5 phút đọc</span>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            Chia sẻ Facebook bằng mã QR giúp người khác truy cập trang cá nhân
            hoặc Fanpage của bạn nhanh chóng mà không cần tìm kiếm thủ công.
          </p>
        </div>

        {/* Nội dung */}
        <article className="mt-10 space-y-10">
          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              Mã QR Facebook là gì?
            </h2>

            <p className="leading-8 text-slate-300">
              Đây là mã QR chứa liên kết đến trang Facebook cá nhân hoặc Fanpage.
              Khi quét, người dùng sẽ được chuyển đến đúng trang mà bạn muốn chia sẻ.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              Lợi ích của QR Facebook
            </h2>

            <ul className="space-y-4 text-slate-300">
              <li>✓ Tăng lượt theo dõi Fanpage.</li>
              <li>✓ Dễ dàng kết nối với khách hàng.</li>
              <li>✓ Chia sẻ nhanh tại sự kiện hoặc hội chợ.</li>
              <li>✓ In trên danh thiếp hoặc poster.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              Cách tạo mã QR Facebook
            </h2>

            <ol className="space-y-4 text-slate-300">
              <li>1. Sao chép liên kết Facebook cá nhân hoặc Fanpage.</li>
              <li>2. Truy cập QRFree.io.vn.</li>
              <li>3. Chọn loại QR "Website".</li>
              <li>4. Dán liên kết Facebook vào ô nhập liệu.</li>
              <li>5. Tùy chỉnh màu sắc hoặc logo nếu cần.</li>
              <li>6. Tải mã QR về thiết bị.</li>
            </ol>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              Nên sử dụng QR Facebook ở đâu?
            </h2>

            <p className="leading-8 text-slate-300">
              Mã QR Facebook rất phù hợp để in trên bao bì sản phẩm,
              standee quảng cáo, danh thiếp hoặc chia sẻ trực tuyến.
            </p>
          </section>
        </article>

        {/* CTA */}
        <section className="mt-16 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-10 text-center">
          <h2 className="text-3xl font-bold">
            Tạo mã QR Facebook miễn phí
          </h2>

          <p className="mt-4 text-slate-300">
            Chia sẻ Facebook nhanh chóng chỉ với một lần quét.
          </p>

          <Link
            href="/generate"
            className="mt-8 inline-block rounded-2xl bg-cyan-500 px-8 py-4 font-bold text-black transition hover:bg-cyan-400"
          >
            Tạo mã QR ngay
          </Link>
        </section>

        {/* Bài liên quan */}
        <section className="mt-16">
          <h2 className="mb-6 text-3xl font-bold">
            Bài viết liên quan
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/blog/cach-tao-ma-qr-zalo"
              className="rounded-3xl border border-slate-800 bg-white/5 p-6 transition hover:border-cyan-500/40"
            >
              <h3 className="text-xl font-bold">
                Cách tạo mã QR Zalo
              </h3>

              <p className="mt-3 text-slate-400">
                Chia sẻ Zalo nhanh chóng bằng mã QR.
              </p>
            </Link>

            <Link
              href="/blog/qr-code-la-gi"
              className="rounded-3xl border border-slate-800 bg-white/5 p-6 transition hover:border-cyan-500/40"
            >
              <h3 className="text-xl font-bold">
                QR Code là gì?
              </h3>

              <p className="mt-3 text-slate-400">
                Tìm hiểu cách hoạt động của QR Code.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}