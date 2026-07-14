import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "QR Code là gì? Cách tạo mã QR miễn phí năm 2026 | QRFree",
  description:
    "Tìm hiểu QR Code là gì, cách hoạt động và cách tạo mã QR miễn phí chỉ trong vài giây.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-16">
        {/* Back */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300"
        >
          ← Quay lại Blog
        </Link>

        {/* Hero */}
        <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur">
          <span className="rounded-full bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
            QR CODE
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            QR Code là gì?
            <span className="mt-2 block text-cyan-400">
              Cách tạo mã QR miễn phí năm 2026
            </span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-400">
            <span>📅 Cập nhật: 17/06/2026</span>
            <span>⏱️ 5 phút đọc</span>
          </div>
        </div>

        {/* TOC */}
        <div className="mt-10 rounded-3xl border border-slate-800 bg-white/5 p-6">
          <h2 className="mb-4 text-xl font-bold">Mục lục</h2>

          <ul className="space-y-2 text-slate-300">
            <li>• QR Code là gì?</li>
            <li>• QR Code hoạt động như thế nào?</li>
            <li>• QR Code dùng để làm gì?</li>
            <li>• Cách tạo mã QR miễn phí</li>
            <li>• QR Code có an toàn không?</li>
          </ul>
        </div>

        {/* Content */}
        <article className="mt-10 space-y-12">
          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              QR Code là gì?
            </h2>

            <p className="leading-8 text-slate-300">
              QR Code (Quick Response Code) là một loại mã vạch hai chiều
              có khả năng lưu trữ nhiều thông tin hơn mã vạch truyền thống.
              Người dùng có thể quét mã QR bằng điện thoại để truy cập website,
              kết nối WiFi, lưu danh bạ hoặc thực hiện nhiều tác vụ khác.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              QR Code hoạt động như thế nào?
            </h2>

            <p className="leading-8 text-slate-300">
              Khi camera nhận diện mã QR, ứng dụng quét sẽ giải mã dữ liệu
              được mã hóa bên trong và hiển thị cho người dùng. Quá trình này
              diễn ra gần như tức thì.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              QR Code dùng để làm gì?
            </h2>

            <ul className="space-y-4 text-slate-300">
              <li>✓ Chia sẻ website.</li>
              <li>✓ Kết nối WiFi nhanh chóng.</li>
              <li>✓ Chia sẻ thông tin liên hệ.</li>
              <li>✓ Thanh toán điện tử.</li>
              <li>✓ Chia sẻ email và số điện thoại.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              Cách tạo mã QR miễn phí
            </h2>

            <ol className="space-y-4 text-slate-300">
              <li>1. Truy cập công cụ tạo QR.</li>
              <li>2. Chọn loại nội dung.</li>
              <li>3. Nhập dữ liệu cần mã hóa.</li>
              <li>4. Tùy chỉnh màu sắc hoặc logo.</li>
              <li>5. Tải xuống PNG, SVG hoặc PDF.</li>
            </ol>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              QR Code có an toàn không?
            </h2>

            <p className="leading-8 text-slate-300">
              QR Code bản thân không nguy hiểm. Tuy nhiên, bạn nên kiểm tra
              kỹ liên kết trước khi mở để tránh các website giả mạo hoặc lừa đảo.
            </p>
          </section>
        </article>

        {/* CTA */}
        <section className="mt-16 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-10 text-center">
          <h2 className="text-3xl font-bold">
            Tạo mã QR miễn phí ngay hôm nay
          </h2>

          <p className="mt-4 text-slate-300">
            Không cần đăng ký. Hỗ trợ nhiều loại nội dung.
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
              href="/blog/cach-tao-ma-qr-wifi"
              className="rounded-3xl border border-slate-800 bg-white/5 p-6 transition hover:border-cyan-500/40"
            >
              <h3 className="text-xl font-bold">
                Cách tạo mã QR WiFi miễn phí
              </h3>

              <p className="mt-3 text-slate-400">
                Hướng dẫn chia sẻ WiFi bằng mã QR chỉ trong vài giây.
              </p>
            </Link>

            <Link
              href="/blog/quet-ma-qr-tren-dien-thoai"
              className="rounded-3xl border border-slate-800 bg-white/5 p-6 transition hover:border-cyan-500/40"
            >
              <h3 className="text-xl font-bold">
                Cách quét mã QR trên điện thoại
              </h3>

              <p className="mt-3 text-slate-400">
                Hướng dẫn quét QR trên Android và iPhone.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}