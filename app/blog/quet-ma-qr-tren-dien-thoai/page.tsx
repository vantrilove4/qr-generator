
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("Cách quét mã QR trên iPhone và Android | QRFree", "Hướng dẫn quét mã QR bằng camera trên iPhone, Android hoặc đọc mã từ ảnh đã lưu bằng cách tải lên hay dán ảnh.", "/blog/quet-ma-qr-tren-dien-thoai");

export default function ScanQRBlogPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-16">
        {/* Back */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center text-sm text-cyan-400 transition hover:text-cyan-300"
        >
          ← Quay lại Blog
        </Link>
        {/* Hero */}
        <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur">
          <span className="rounded-full bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
            QR SCANNER
          </span>

          <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Cách quét mã QR
            <span className="mt-2 block text-cyan-400">
              trên Android và iPhone
            </span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-400">
            <span>Biên soạn: QRFree</span>
            <span>4 phút đọc</span>
          </div>

          <p className="mt-6 max-w-3xl leading-8 text-slate-300">
            Dùng camera để quét mã trực tiếp, hoặc đọc mã từ ảnh đã lưu. Các bước cụ thể có thể khác nhau tùy thiết bị và ứng dụng Camera.
          </p>
        </div>

        {/* TOC */}
        <nav aria-label="Mục lục bài viết" className="mt-10 rounded-2xl border border-white/10 bg-slate-900/70 p-6">
          <h2 className="mb-4 text-lg font-bold">Trong bài viết</h2>

          <ul className="grid gap-2 text-slate-300 sm:grid-cols-2">
            <li><a className="hover:text-cyan-300" href="#iphone">01 · iPhone</a></li>
            <li><a className="hover:text-cyan-300" href="#android">02 · Android</a></li>
            <li><a className="hover:text-cyan-300" href="#anh-luu">03 · Ảnh đã lưu</a></li>
            <li><a className="hover:text-cyan-300" href="#quet-online">04 · Quét trực tuyến</a></li>
          </ul>
        </nav>

        {/* Content */}
        <article className="mx-auto mt-10 max-w-3xl space-y-10">
          <section id="iphone" className="scroll-mt-24 border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Cách quét mã QR trên iPhone
            </h2>

            <ol className="space-y-4 text-slate-300">
              <li>1. Mở ứng dụng Camera.</li>
              <li>2. Hướng camera vào mã QR.</li>
              <li>3. Chờ vài giây để điện thoại nhận diện.</li>
              <li>4. Nhấn vào thông báo hiện ra trên màn hình.</li>
            </ol>

            <p className="mt-6 leading-8 text-slate-300">
              Trên iPhone, ứng dụng Camera có thể nhận diện QR và hiện liên kết để bạn xem trước. Nếu không thấy thông báo, thử mở Trung tâm điều khiển và dùng Trình đọc mã, hoặc kiểm tra phần cài đặt Camera.
            </p>
          </section>

          <section id="android" className="scroll-mt-24 border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Cách quét mã QR trên Android
            </h2>

            <ol className="space-y-4 text-slate-300">
              <li>1. Mở ứng dụng Camera hoặc Google Lens.</li>
              <li>2. Đưa camera đến gần mã QR.</li>
              <li>3. Đợi hệ thống nhận diện.</li>
              <li>4. Nhấn vào liên kết hoặc nội dung được hiển thị.</li>
            </ol>

            <p className="mt-6 leading-8 text-slate-300">
              Tên nút và khả năng quét thay đổi theo hãng máy, phiên bản Android và ứng dụng Camera. Nếu camera không nhận mã, thử Google Lens hoặc trình quét tích hợp trong máy.
            </p>
          </section>

          <section id="anh-luu" className="scroll-mt-24 border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Quét mã QR từ ảnh trong thư viện
            </h2>

            <p className="leading-8 text-slate-300">
              Nếu mã QR nằm trong ảnh nhận qua Zalo, Messenger, email hoặc đã lưu trong thư viện, bạn không cần chụp màn hình lại. Mở QRFree trên thiết bị đó rồi tải ảnh lên hoặc sao chép ảnh và dán trực tiếp vào trang quét.
            </p>

            <ul className="mt-6 space-y-3 text-slate-300">
              <li>✓ Chọn ảnh từ thiết bị hoặc nhấn Ctrl+V / ⌘V để dán ảnh đã sao chép.</li>
              <li>✓ Xem nội dung được giải mã và kiểm tra liên kết trước khi mở.</li>
              <li>✓ Sao chép nội dung nếu cần.</li>
            </ul>
          </section>

          <section id="quet-online" className="scroll-mt-24 border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Khi nào nên dùng công cụ quét QR online?
            </h2>

            <p className="leading-8 text-slate-300">
              Công cụ quét QR trực tuyến hữu ích khi bạn đang mở ảnh trên máy tính, hoặc muốn dán ảnh từ clipboard. Hãy kiểm tra nội dung hiện ra trước khi truy cập website, đăng nhập hay thanh toán.
            </p>
          </section>
        </article>

        <section className="mx-auto mt-10 max-w-3xl border-t border-white/10 pt-6">
          <h2 className="mb-3 text-xl font-bold">Hướng dẫn chính thức</h2>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><a href="https://support.apple.com/en-ie/guide/iphone/iphe8bda8762/ios" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline underline-offset-4">Apple: quét mã QR bằng camera iPhone</a></li>
            <li><a href="https://support.google.com/camerafromgoogle/answer/12033278?hl=en" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline underline-offset-4">Google Camera: quét mã QR</a></li>
          </ul>
        </section>

        <aside aria-label="Quảng cáo" className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.02] p-4">
          <script async data-cfasync="false" src="https://pl29783748.effectivecpmnetwork.com/721828cd8f8c6a17755c9736f4a6116a/invoke.js"></script>
          <div id="container-721828cd8f8c6a17755c9736f4a6116a"></div>
        </aside>

        {/* CTA */}
        <section className="mt-16 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-10 text-center">
          <h2 className="text-3xl font-bold">
            Quét mã QR miễn phí ngay bây giờ
          </h2>

          <p className="mt-4 text-slate-300">
            Hỗ trợ quét bằng camera hoặc tải ảnh từ thiết bị.
          </p>

          <Link
            href="/scan"
            className="mt-8 inline-block rounded-2xl bg-cyan-500 px-8 py-4 font-bold text-black transition hover:bg-cyan-400"
          >
            Quét mã QR ngay
          </Link>
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
                Tìm hiểu về mã QR và cách hoạt động của công nghệ này.
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
                Chia sẻ WiFi nhanh chóng mà không cần nhập mật khẩu.
              </p>
            </Link>
            
          </div>
        </section>
        
      </div>
    </main>
  );
}

