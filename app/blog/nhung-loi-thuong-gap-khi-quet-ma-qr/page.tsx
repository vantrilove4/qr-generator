import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Những lỗi thường gặp khi quét mã QR và cách khắc phục | QRFree",
  description:
    "Tổng hợp các lỗi phổ biến khi quét mã QR như không nhận diện được mã, camera không đọc được QR hoặc QR bị hỏng cùng cách khắc phục hiệu quả.",
  keywords: [
    "lỗi quét qr",
    "không quét được qr",
    "camera không đọc qr",
    "qr không hoạt động",
    "khắc phục lỗi qr",
  ],
  alternates: {
    canonical:
      "https://qrfree.io.vn/blog/nhung-loi-thuong-gap-khi-quet-ma-qr",
  },
};

export default function QRScanErrorsPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
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
            QR SCANNER
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Những lỗi thường gặp
            <span className="block text-cyan-400">
              khi quét mã QR
            </span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-400">
            <span>📅 Cập nhật: 20/06/2026</span>
            <span>⏱️ 6 phút đọc</span>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            Bạn không thể quét mã QR? Camera không nhận diện được mã?
            Bài viết này sẽ giúp bạn xác định nguyên nhân và khắc phục nhanh chóng.
          </p>
        </div>

        {/* Nội dung */}
        <article className="mt-10 space-y-10">

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              1. Mã QR bị mờ hoặc quá nhỏ
            </h2>

            <p className="leading-8 text-slate-300">
              Đây là nguyên nhân phổ biến nhất. Khi mã QR bị mờ, vỡ nét hoặc
              in quá nhỏ, camera sẽ khó nhận diện.
            </p>

            <ul className="mt-6 space-y-3 text-slate-300">
              <li>✓ Tăng kích thước mã QR.</li>
              <li>✓ In ở độ phân giải cao.</li>
              <li>✓ Tránh nén ảnh quá mức.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              2. Camera điện thoại bị bẩn
            </h2>

            <p className="leading-8 text-slate-300">
              Bụi bẩn hoặc dấu vân tay trên ống kính có thể khiến camera
              không lấy nét chính xác.
            </p>

            <ul className="mt-6 space-y-3 text-slate-300">
              <li>✓ Lau sạch camera.</li>
              <li>✓ Đảm bảo đủ ánh sáng.</li>
              <li>✓ Đưa camera gần hơn.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              3. Liên kết bên trong QR không còn tồn tại
            </h2>

            <p className="leading-8 text-slate-300">
              Mã QR vẫn quét được nhưng website hoặc tài liệu phía sau đã bị xóa,
              đổi tên miền hoặc thay đổi đường dẫn.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Trong trường hợp này cần tạo lại mã QR mới với liên kết chính xác.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              4. QR có độ tương phản thấp
            </h2>

            <p className="leading-8 text-slate-300">
              QR màu quá nhạt hoặc nền quá sáng có thể khiến máy quét khó nhận diện.
            </p>

            <ul className="mt-6 space-y-3 text-slate-300">
              <li>✓ Dùng nền trắng.</li>
              <li>✓ Dùng mã QR màu đen hoặc màu đậm.</li>
              <li>✓ Tránh màu vàng nhạt hoặc xám nhạt.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              5. Ứng dụng quét QR không hỗ trợ
            </h2>

            <p className="leading-8 text-slate-300">
              Một số điện thoại đời cũ không hỗ trợ quét QR trực tiếp bằng camera.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Bạn có thể sử dụng công cụ quét QR trực tuyến tại QRFree.io.vn
              bằng cách tải ảnh mã QR lên hệ thống.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              Cách kiểm tra mã QR có hoạt động không
            </h2>

            <ol className="space-y-4 text-slate-300">
              <li>1. Thử quét trên nhiều điện thoại khác nhau.</li>
              <li>2. Kiểm tra độ sắc nét của ảnh QR.</li>
              <li>3. Kiểm tra liên kết đích.</li>
              <li>4. Kiểm tra màu sắc và độ tương phản.</li>
              <li>5. Thử bằng công cụ quét QR trực tuyến.</li>
            </ol>
          </section>

        </article>

        {/* CTA */}
        <section className="mt-16 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-10 text-center">
          <h2 className="text-3xl font-bold">
            Kiểm tra mã QR của bạn ngay
          </h2>

          <p className="mt-4 text-slate-300">
            Quét mã QR trực tuyến hoặc tạo mã QR mới miễn phí.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/scan"
              className="rounded-2xl bg-cyan-500 px-8 py-4 font-bold text-black transition hover:bg-cyan-400"
            >
              Quét mã QR
            </Link>

            <Link
              href="/generate"
              className="rounded-2xl border border-cyan-500/20 px-8 py-4 font-bold transition hover:bg-white/5"
            >
              Tạo mã QR
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
              href="/blog/ma-qr-co-an-toan-khong"
              className="rounded-3xl border border-slate-800 bg-white/5 p-6 hover:border-cyan-500/40"
            >
              <h3 className="text-xl font-bold">
                Mã QR có an toàn không?
              </h3>
              <p className="mt-3 text-slate-400">
                Các lưu ý bảo mật khi sử dụng QR Code.
              </p>
            </Link>

            <Link
              href="/blog/quet-ma-qr-tren-dien-thoai"
              className="rounded-3xl border border-slate-800 bg-white/5 p-6 hover:border-cyan-500/40"
            >
              <h3 className="text-xl font-bold">
                Cách quét mã QR trên điện thoại
              </h3>
              <p className="mt-3 text-slate-400">
                Hướng dẫn chi tiết cho Android và iPhone.
              </p>
            </Link>

            <Link
              href="/blog/qr-dong-va-qr-tinh-khac-nhau-the-nao"
              className="rounded-3xl border border-slate-800 bg-white/5 p-6 hover:border-cyan-500/40"
            >
              <h3 className="text-xl font-bold">
                QR động và QR tĩnh khác nhau thế nào?
              </h3>
              <p className="mt-3 text-slate-400">
                So sánh chi tiết hai loại QR phổ biến.
              </p>
            </Link>

            <Link
              href="/blog/qr-code-la-gi"
              className="rounded-3xl border border-slate-800 bg-white/5 p-6 hover:border-cyan-500/40"
            >
              <h3 className="text-xl font-bold">
                QR Code là gì?
              </h3>
              <p className="mt-3 text-slate-400">
                Tìm hiểu nguyên lý hoạt động của QR Code.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}