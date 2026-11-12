import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("Mã QR có an toàn không? 7 lưu ý giúp tránh bị lừa đảo | QRFree", "Tìm hiểu mã QR có an toàn không và những lưu ý quan trọng giúp bạn tránh các hình thức lừa đảo thông qua QR Code.", "/blog/ma-qr-co-an-toan-khong");

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

          <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Mã QR có an toàn không?
            <span className="mt-2 block text-cyan-400">
              7 lưu ý giúp tránh bị lừa đảo
            </span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-400">
            <span>Biên soạn: QRFree</span>
            <span>6 phút đọc</span>
          </div>

          <p className="mt-6 max-w-3xl leading-8 text-slate-300">
            QR Code ngày càng phổ biến trong thanh toán và chia sẻ thông tin.
            Tuy nhiên, việc quét mã QR từ nguồn không đáng tin cậy cũng tiềm ẩn
            nhiều rủi ro. Dưới đây là những điều bạn cần biết để sử dụng QR Code
            an toàn hơn.
          </p>
        </div>

        {/* Content */}
        <article className="mx-auto mt-10 max-w-3xl space-y-10">
          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              QR Code bản thân không nguy hiểm
            </h2>

            <p className="leading-8 text-slate-300">
              QR Code là cách mã hóa dữ liệu thành hình ảnh. Camera đọc mã thường chỉ hiển thị nội dung hoặc đường dẫn; rủi ro thường xuất hiện khi bạn mở trang, tải tệp, cài ứng dụng, đăng nhập hoặc xác nhận thanh toán theo hướng dẫn từ nguồn không đáng tin.
            </p>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Nguy cơ đến từ nội dung bên trong
            </h2>

            <p className="leading-8 text-slate-300">
              Kẻ gian có thể dán mã giả lên mã thật hoặc dẫn tới trang giả mạo để dụ bạn nhập thông tin, tải ứng dụng hay chuyển tiền. Hãy đọc địa chỉ website hiển thị và chỉ tiếp tục nếu tin cậy.
            </p>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              7 lưu ý khi quét mã QR
            </h2>

            <ul className="space-y-4 text-slate-300">
              <li>✓ Kiểm tra nguồn gốc của mã QR.</li>
              <li>✓ Đọc kỹ đường dẫn trước khi mở.</li>
              <li>✓ Không nhập mật khẩu, mã OTP hoặc thông tin thẻ từ liên kết đáng ngờ.</li>
              <li>✓ Không quét mã QR dán đè lên mã gốc.</li>
              <li>✓ Cập nhật điện thoại thường xuyên.</li>
              <li>✓ Chỉ cài ứng dụng từ nguồn chính thức.</li>
              <li>✓ Tự mở ứng dụng ngân hàng chính thức nếu cần thanh toán.</li>
            </ul>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              QR thanh toán có an toàn không?
            </h2>

            <p className="leading-8 text-slate-300">
              Trước khi chuyển tiền, hãy kiểm tra tên người nhận, ngân hàng, số tài khoản và số tiền ngay trong ứng dụng ngân hàng. Nếu thông tin không khớp, dừng giao dịch và xác nhận lại với người nhận qua kênh khác.
            </p>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              QRFree bảo vệ quyền riêng tư như thế nào?
            </h2>

            <p className="leading-8 text-slate-300">
              Nội dung mã QR được tạo hoặc giải mã ngay trên thiết bị; nội dung đó không được gửi lên máy chủ để xử lý. Website vẫn ghi nhận số lượt sử dụng và dùng dịch vụ phân tích truy cập. Xem thêm tại <Link href="/privacy" className="text-cyan-300 underline">chính sách bảo mật</Link>.
            </p>
          </section>
        </article>

        <section className="mt-10 rounded-3xl border border-slate-800 bg-white/5 p-8">
          <h2 className="mb-4 text-2xl font-bold">Nguồn tham khảo</h2>
          <ul className="list-disc space-y-2 pl-5 text-slate-300">
            <li><a href="https://consumer.ftc.gov/consumer-alerts/2026/09/see-qr-code-parked-somewhere-dont-scan-ityet" target="_blank" rel="noopener noreferrer" className="underline decoration-slate-500 underline-offset-4 hover:text-cyan-300">Federal Trade Commission: cách nhận biết liên kết lừa đảo trong mã QR</a></li>
          </ul>
        </section>

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
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
            Bài viết liên quan
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/blog/qrcode-la-gi"
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
