import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mã QR có an toàn không? 7 lưu ý giúp tránh bị lừa đảo | QRFree",
  description:
    "Tìm hiểu mã QR có an toàn không và những lưu ý quan trọng giúp bạn tránh các hình thức lừa đảo thông qua QR Code.",
  keywords: [
    "mã qr có an toàn không",
    "lừa đảo qr code",
    "quét qr an toàn",
    "bảo mật qr code",
    "qr scam",
  ],
  alternates: {
    canonical: "https://qrfree.io.vn/blog/ma-qr-co-an-toan-khong",
  },
};

export default function QRSecurityBlogPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-16">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center text-sm text-cyan-400 transition hover:text-cyan-300"
        >
          ← Quay lại Blog
        </Link>

        {/* Hero */}
        <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur">
          <span className="rounded-full bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
            BẢO MẬT QR
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Mã QR có an toàn không?
            <span className="mt-2 block text-cyan-400">
              7 lưu ý giúp tránh bị lừa đảo
            </span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-400">
            <span>📅 Cập nhật: 17/06/2026</span>
            <span>⏱️ 6 phút đọc</span>
          </div>

          <p className="mt-6 max-w-3xl leading-8 text-slate-300">
            QR Code ngày càng phổ biến trong thanh toán và chia sẻ thông tin.
            Tuy nhiên, việc quét mã QR từ nguồn không đáng tin cậy cũng tiềm ẩn
            nhiều rủi ro. Dưới đây là những điều bạn cần biết để sử dụng QR Code
            an toàn hơn.
          </p>
        </div>

        {/* Content */}
        <article className="mt-10 space-y-10">
          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              QR Code bản thân không nguy hiểm
            </h2>

            <p className="leading-8 text-slate-300">
              QR Code chỉ là một phương tiện lưu trữ dữ liệu. Tương tự như một
              đường link hoặc mã vạch, bản thân mã QR không chứa virus hay gây
              hại cho thiết bị của bạn.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              Nguy cơ đến từ nội dung bên trong
            </h2>

            <p className="leading-8 text-slate-300">
              Kẻ xấu có thể tạo mã QR dẫn đến các website giả mạo nhằm đánh cắp
              thông tin đăng nhập, lừa chuyển tiền hoặc cài đặt ứng dụng độc hại.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              7 lưu ý khi quét mã QR
            </h2>

            <ul className="space-y-4 text-slate-300">
              <li>✓ Kiểm tra nguồn gốc của mã QR.</li>
              <li>✓ Đọc kỹ đường dẫn trước khi mở.</li>
              <li>✓ Không nhập mật khẩu vào website đáng ngờ.</li>
              <li>✓ Không quét mã QR dán đè lên mã gốc.</li>
              <li>✓ Cập nhật điện thoại thường xuyên.</li>
              <li>✓ Chỉ cài ứng dụng từ nguồn chính thức.</li>
              <li>✓ Sử dụng công cụ quét đáng tin cậy.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              QR thanh toán có an toàn không?
            </h2>

            <p className="leading-8 text-slate-300">
              QR thanh toán được các ngân hàng và tổ chức tài chính áp dụng rộng
              rãi. Tuy nhiên, bạn vẫn nên kiểm tra kỹ tên người nhận và số tiền
              trước khi xác nhận giao dịch.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              QRFree bảo vệ quyền riêng tư như thế nào?
            </h2>

            <p className="leading-8 text-slate-300">
              Nội dung mã QR được xử lý trực tiếp trên thiết bị của bạn.
              QRFree không lưu trữ dữ liệu mã QR trên máy chủ, giúp giảm thiểu
              rủi ro liên quan đến quyền riêng tư.
            </p>
          </section>
        </article>

        {/* CTA */}
        <section className="mt-16 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-10 text-center">
          <h2 className="text-3xl font-bold">
            Tạo và quét mã QR an toàn
          </h2>

          <p className="mt-4 text-slate-300">
            Sử dụng QRFree để tạo và quét mã QR nhanh chóng, miễn phí.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/generate"
              className="rounded-2xl bg-cyan-500 px-8 py-4 font-bold text-black transition hover:bg-cyan-400"
            >
              Tạo mã QR
            </Link>

            <Link
              href="/scan"
              className="rounded-2xl border border-cyan-500/30 px-8 py-4 font-bold transition hover:bg-white/5"
            >
              Quét mã QR
            </Link>
          </div>
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
                Tìm hiểu nguyên lý hoạt động của QR Code.
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