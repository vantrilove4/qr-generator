
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cách quét mã QR trên điện thoại Android và iPhone | QRFree",
  description:
    "Hướng dẫn chi tiết cách quét mã QR trên điện thoại Android và iPhone bằng camera hoặc từ ảnh trong thư viện.",
  keywords: [
    "cách quét mã qr",
    "quét qr android",
    "quét qr iphone",
    "đọc mã qr từ ảnh",
    "qr scanner",
  ],
  alternates: {
    canonical: "https://qrfree.io.vn/blog/quet-ma-qr-tren-dien-thoai",
  },
};

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

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Cách quét mã QR
            <span className="mt-2 block text-cyan-400">
              trên Android và iPhone
            </span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-400">
            <span>📅 Cập nhật: 17/06/2026</span>
            <span>⏱️ 4 phút đọc</span>
          </div>

          <p className="mt-6 max-w-3xl leading-8 text-slate-300">
            Mã QR ngày càng được sử dụng phổ biến trong thanh toán, chia sẻ
            thông tin và truy cập website. Dưới đây là hướng dẫn chi tiết
            giúp bạn quét mã QR nhanh chóng trên cả Android và iPhone.
          </p>
        </div>

        {/* TOC */}
        <div className="mt-10 rounded-3xl border border-slate-800 bg-white/5 p-6">
          <h2 className="mb-4 text-xl font-bold">Mục lục</h2>

          <ul className="space-y-2 text-slate-300">
            <li>• Cách quét mã QR trên iPhone</li>
            <li>• Cách quét mã QR trên Android</li>
            <li>• Quét mã QR từ ảnh trong thư viện</li>
            <li>• Khi nào nên dùng công cụ quét QR online?</li>
          </ul>
        </div>

        {/* Content */}
        <article className="mt-10 space-y-10">
          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              Cách quét mã QR trên iPhone
            </h2>

            <ol className="space-y-4 text-slate-300">
              <li>1. Mở ứng dụng Camera.</li>
              <li>2. Hướng camera vào mã QR.</li>
              <li>3. Chờ vài giây để điện thoại nhận diện.</li>
              <li>4. Nhấn vào thông báo hiện ra trên màn hình.</li>
            </ol>

            <p className="mt-6 leading-8 text-slate-300">
              Tính năng này được hỗ trợ trên hầu hết các phiên bản iOS hiện đại.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              Cách quét mã QR trên Android
            </h2>

            <ol className="space-y-4 text-slate-300">
              <li>1. Mở ứng dụng Camera hoặc Google Lens.</li>
              <li>2. Đưa camera đến gần mã QR.</li>
              <li>3. Đợi hệ thống nhận diện.</li>
              <li>4. Nhấn vào liên kết hoặc nội dung được hiển thị.</li>
            </ol>

            <p className="mt-6 leading-8 text-slate-300">
              Một số dòng điện thoại Android có thể yêu cầu bật tính năng quét QR trong phần cài đặt camera.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              Quét mã QR từ ảnh trong thư viện
            </h2>

            <p className="leading-8 text-slate-300">
              Nếu bạn nhận được ảnh chứa mã QR qua Zalo, Messenger hoặc Email,
              bạn có thể sử dụng công cụ quét QR trực tuyến để đọc nội dung
              mà không cần chụp lại màn hình.
            </p>

            <ul className="mt-6 space-y-3 text-slate-300">
              <li>✓ Tải ảnh chứa mã QR lên.</li>
              <li>✓ Hệ thống tự động nhận diện.</li>
              <li>✓ Sao chép hoặc mở liên kết ngay lập tức.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              Khi nào nên dùng công cụ quét QR online?
            </h2>

            <p className="leading-8 text-slate-300">
              Công cụ quét QR online đặc biệt hữu ích khi bạn cần đọc mã QR
              từ ảnh đã lưu trên máy tính hoặc điện thoại. Ngoài ra, việc xử lý
              trực tiếp trên trình duyệt cũng giúp tiết kiệm thời gian và không
              cần cài đặt thêm ứng dụng.
            </p>
          </section>
        </article>
<script async="async" data-cfasync="false" src="https://pl29783748.effectivecpmnetwork.com/721828cd8f8c6a17755c9736f4a6116a/invoke.js"></script>
<div id="container-721828cd8f8c6a17755c9736f4a6116a"></div>
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

