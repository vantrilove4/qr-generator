import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cách tạo mã QR danh thiếp (vCard) miễn phí | QRFree",
  description:
    "Hướng dẫn tạo mã QR danh thiếp vCard miễn phí để chia sẻ thông tin liên hệ nhanh chóng chỉ bằng một lần quét.",
  keywords: [
    "qr danh thiếp",
    "vcard qr",
    "mã qr danh bạ",
    "contact qr",
    "tạo qr danh thiếp",
  ],
  alternates: {
    canonical:
      "https://qrfree.io.vn/blog/cach-tao-ma-qr-danh-thiep-vcard",
  },
};

export default function VCardQRPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
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
            VCARD QR
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Cách tạo mã QR
            <span className="block text-cyan-400">
              danh thiếp (vCard) miễn phí
            </span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-400">
            <span>📅 Cập nhật: 20/06/2026</span>
            <span>⏱️ 6 phút đọc</span>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            Mã QR danh thiếp (vCard QR) cho phép người khác lưu thông tin liên hệ
            của bạn trực tiếp vào điện thoại chỉ bằng một lần quét, không cần nhập
            thủ công số điện thoại hay email.
          </p>
        </div>

        {/* Nội dung */}
        <article className="mt-10 space-y-10">
          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              QR danh thiếp (vCard) là gì?
            </h2>

            <p className="leading-8 text-slate-300">
              Đây là loại mã QR chứa thông tin liên hệ như họ tên, số điện thoại,
              email, công ty, địa chỉ và website. Sau khi quét, người dùng có thể
              lưu trực tiếp vào danh bạ điện thoại.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              Lợi ích của QR danh thiếp
            </h2>

            <ul className="space-y-4 text-slate-300">
              <li>✓ Chia sẻ thông tin nhanh chóng.</li>
              <li>✓ Không cần nhập lại số điện thoại.</li>
              <li>✓ Giảm sai sót khi lưu danh bạ.</li>
              <li>✓ Chuyên nghiệp hơn khi gặp khách hàng.</li>
              <li>✓ Dễ in trên danh thiếp giấy.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              Thông tin có thể chứa trong vCard
            </h2>

            <ul className="space-y-4 text-slate-300">
              <li>✓ Họ và tên</li>
              <li>✓ Chức vụ</li>
              <li>✓ Công ty</li>
              <li>✓ Số điện thoại</li>
              <li>✓ Email</li>
              <li>✓ Website</li>
              <li>✓ Địa chỉ</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              Cách tạo mã QR danh thiếp
            </h2>

            <ol className="space-y-4 text-slate-300">
              <li>1. Truy cập QRFree.io.vn.</li>
              <li>2. Chọn loại QR Danh bạ (vCard).</li>
              <li>3. Nhập thông tin liên hệ.</li>
              <li>4. Xem trước mã QR.</li>
              <li>5. Tải về PNG hoặc SVG.</li>
              <li>6. In lên danh thiếp hoặc hồ sơ cá nhân.</li>
            </ol>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              Ai nên sử dụng?
            </h2>

            <ul className="space-y-4 text-slate-300">
              <li>✓ Nhân viên kinh doanh</li>
              <li>✓ Chủ doanh nghiệp</li>
              <li>✓ Freelancer</li>
              <li>✓ Môi giới bất động sản</li>
              <li>✓ Chuyên viên tư vấn</li>
              <li>✓ Người tham gia hội chợ, triển lãm</li>
            </ul>
          </section>
        </article>

        {/* CTA */}
        <section className="mt-16 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-10 text-center">
          <h2 className="text-3xl font-bold">
            Tạo mã QR danh thiếp ngay
          </h2>

          <p className="mt-4 text-slate-300">
            Chia sẻ thông tin liên hệ chuyên nghiệp bằng QR Code.
          </p>

          <Link
            href="/generate"
            className="mt-8 inline-block rounded-2xl bg-cyan-500 px-8 py-4 font-bold text-black transition hover:bg-cyan-400"
          >
            Tạo mã QR
          </Link>
        </section>

        {/* Related Posts */}
        <section className="mt-16">
          <h2 className="mb-6 text-3xl font-bold">
            Bài viết liên quan
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/blog/cach-tao-ma-qr-pdf"
              className="rounded-3xl border border-slate-800 bg-white/5 p-6 transition hover:border-cyan-500/40"
            >
              <h3 className="text-xl font-bold">
                Cách tạo mã QR PDF
              </h3>
              <p className="mt-3 text-slate-400">
                Chia sẻ tài liệu bằng QR Code.
              </p>
            </Link>

            <Link
              href="/blog/cach-tao-ma-qr-google-maps"
              className="rounded-3xl border border-slate-800 bg-white/5 p-6 transition hover:border-cyan-500/40"
            >
              <h3 className="text-xl font-bold">
                Cách tạo mã QR Google Maps
              </h3>
              <p className="mt-3 text-slate-400">
                Chia sẻ vị trí chỉ với một lần quét.
              </p>
            </Link>

            <Link
              href="/blog/qr-dong-va-qr-tinh-khac-nhau-the-nao"
              className="rounded-3xl border border-slate-800 bg-white/5 p-6 transition hover:border-cyan-500/40"
            >
              <h3 className="text-xl font-bold">
                QR động và QR tĩnh khác nhau thế nào?
              </h3>
              <p className="mt-3 text-slate-400">
                So sánh chi tiết hai loại mã QR.
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
                Tìm hiểu nguyên lý hoạt động của QR Code.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}