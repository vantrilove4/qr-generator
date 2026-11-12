import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("QR Code là gì? Cách tạo mã QR miễn phí", "Tìm hiểu QR Code là gì, cách hoạt động, các ứng dụng phổ biến và cách tạo mã QR tĩnh.", "/blog/qrcode-la-gi");

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

          <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            QR Code là gì?
            <span className="mt-2 block text-cyan-400">
              Cách tạo mã QR miễn phí
            </span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-400">
            <span>Biên soạn: QRFree</span>
            <span>5 phút đọc</span>
          </div>
        </div>

        {/* TOC */}
        <nav aria-label="Mục lục bài viết" className="mt-10 rounded-2xl border border-white/10 bg-slate-900/70 p-6">
          <h2 className="mb-4 text-lg font-bold">Trong bài viết</h2>

          <ul className="grid gap-2 text-slate-300 sm:grid-cols-2">
            <li><a className="hover:text-cyan-300" href="#qr-code-la-gi">• QR Code là gì?</a></li>
            <li><a className="hover:text-cyan-300" href="#cach-hoat-dong">• QR Code hoạt động như thế nào?</a></li>
            <li><a className="hover:text-cyan-300" href="#ung-dung">• QR Code dùng để làm gì?</a></li>
            <li><a className="hover:text-cyan-300" href="#cach-tao">• Cách tạo mã QR miễn phí</a></li>
            <li><a className="hover:text-cyan-300" href="#an-toan">• QR Code có an toàn không?</a></li>
          </ul>
        </nav>

        {/* Content */}
        <article className="mx-auto mt-10 max-w-3xl space-y-12">
          <section className="border-b border-white/10 pb-8">
            <h2 id="qr-code-la-gi" className="mb-4 scroll-mt-24 text-2xl font-bold tracking-tight sm:text-3xl">
              QR Code là gì?
            </h2>

            <p className="leading-8 text-slate-300">
              QR Code (Quick Response Code) là mã hai chiều lưu dữ liệu theo
              ma trận ô vuông. Định dạng này có thể mã hóa chữ, số và dữ liệu
              khác; khi quét, ứng dụng đọc mã giải mã nội dung rồi cho bạn xem
              hoặc thực hiện hành động phù hợp. QR Code được DENSO WAVE phát triển
              và được chuẩn hóa theo ISO/IEC 18004.
            </p>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 id="cach-hoat-dong" className="mb-4 scroll-mt-24 text-2xl font-bold tracking-tight sm:text-3xl">
              QR Code hoạt động như thế nào?
            </h2>

            <p className="leading-8 text-slate-300">
              Camera chụp hình mã; phần mềm quét tìm các điểm định vị, đọc
              những ô dữ liệu và dùng cơ chế sửa lỗi để khôi phục phần dữ liệu
              bị mờ hoặc hỏng trong giới hạn cho phép. Nội dung có thể là văn
              bản hoặc một đường dẫn. Nếu là đường dẫn, hãy kiểm tra địa chỉ
              trước khi mở.
            </p>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 id="ung-dung" className="mb-4 scroll-mt-24 text-2xl font-bold tracking-tight sm:text-3xl">
              QR Code dùng để làm gì?
            </h2>

            <ul className="space-y-4 text-slate-300">
              <li>✓ Chia sẻ đường dẫn tới website hoặc tài liệu.</li>
              <li>✓ Kết nối WiFi nhanh chóng.</li>
              <li>✓ Chia sẻ thông tin liên hệ.</li>
              <li>✓ Mở ứng dụng hoặc trang thanh toán tương thích.</li>
              <li>✓ Chia sẻ văn bản ngắn.</li>
            </ul>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 id="cach-tao" className="mb-4 scroll-mt-24 text-2xl font-bold tracking-tight sm:text-3xl">
              Cách tạo mã QR miễn phí
            </h2>

            <ol className="space-y-4 text-slate-300">
              <li>1. Truy cập công cụ tạo QR.</li>
              <li>2. Chọn loại nội dung.</li>
              <li>3. Nhập dữ liệu cần mã hóa.</li>
              <li>4. Tùy chỉnh màu sắc hoặc logo.</li>
              <li>5. Tạo mã, quét thử để kiểm tra nội dung rồi tải PNG hoặc PDF.</li>
            </ol>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 id="an-toan" className="mb-4 scroll-mt-24 text-2xl font-bold tracking-tight sm:text-3xl">
              QR Code có an toàn không?
            </h2>

            <p className="leading-8 text-slate-300">
              QR Code bản thân không nguy hiểm. Tuy nhiên, bạn nên kiểm tra
              kỹ liên kết trước khi mở để tránh các website giả mạo hoặc lừa đảo.
            </p>
          </section>
        </article>

        <section className="mx-auto mt-10 max-w-3xl border-t border-white/10 pt-6">
          <h2 className="mb-3 text-xl font-bold">Nguồn tham khảo</h2>
          <p className="leading-7 text-slate-300"><a href="https://www.denso-wave.com/en/system/qr/fundamental/qrcode/qrc/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline underline-offset-4">DENSO WAVE: giới thiệu QR Code và các đặc tính</a>; <a href="https://www.qrcode.com/en/about/standards.html/index.html" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline underline-offset-4">thông tin tiêu chuẩn QR Code</a>.</p>
        </section>

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
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
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
