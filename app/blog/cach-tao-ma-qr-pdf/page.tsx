import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cách tạo mã QR cho file PDF miễn phí | QRFree",
  description:
    "Hướng dẫn tạo mã QR cho file PDF miễn phí để chia sẻ tài liệu, báo giá, hồ sơ hoặc hướng dẫn sử dụng nhanh chóng.",
  keywords: [
    "qr pdf",
    "mã qr pdf",
    "tạo qr cho file pdf",
    "pdf qr code",
    "chia sẻ pdf bằng qr",
  ],
  alternates: {
    canonical: "https://qrfree.io.vn/blog/cach-tao-ma-qr-pdf",
  },
};

export default function QRPDFPage() {
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
            PDF QR
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Cách tạo mã QR
            <span className="block text-cyan-400">
              cho file PDF miễn phí
            </span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-400">
            <span>📅 Cập nhật: 20/06/2026</span>
            <span>⏱️ 5 phút đọc</span>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            Mã QR PDF giúp người dùng mở tài liệu chỉ bằng một lần quét.
            Đây là giải pháp phổ biến cho báo giá, catalogue, tài liệu đào tạo,
            hướng dẫn sử dụng và hồ sơ doanh nghiệp.
          </p>
        </div>

        {/* Nội dung */}
        <article className="mt-10 space-y-10">
          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              Mã QR PDF là gì?
            </h2>

            <p className="leading-8 text-slate-300">
              Mã QR PDF là mã QR chứa liên kết tới một tệp PDF được lưu trữ
              trực tuyến. Khi quét mã, người dùng có thể xem hoặc tải tài liệu
              ngay trên điện thoại hoặc máy tính.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              Lợi ích của mã QR PDF
            </h2>

            <ul className="space-y-4 text-slate-300">
              <li>✓ Chia sẻ tài liệu nhanh chóng.</li>
              <li>✓ Không cần gửi file qua email.</li>
              <li>✓ Dễ in trên brochure hoặc danh thiếp.</li>
              <li>✓ Truy cập mọi lúc trên điện thoại.</li>
              <li>✓ Tiết kiệm chi phí in ấn.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              Cách tạo mã QR cho PDF
            </h2>

            <ol className="space-y-4 text-slate-300">
              <li>1. Tải file PDF lên Google Drive hoặc OneDrive.</li>
              <li>2. Chia sẻ công khai liên kết PDF.</li>
              <li>3. Sao chép đường dẫn.</li>
              <li>4. Truy cập QRFree.io.vn.</li>
              <li>5. Chọn loại QR Website.</li>
              <li>6. Dán liên kết PDF.</li>
              <li>7. Tải mã QR về thiết bị.</li>
            </ol>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              Ứng dụng thực tế
            </h2>

            <ul className="space-y-4 text-slate-300">
              <li>✓ Catalogue sản phẩm.</li>
              <li>✓ Báo giá.</li>
              <li>✓ Tài liệu đào tạo.</li>
              <li>✓ Hồ sơ năng lực doanh nghiệp.</li>
              <li>✓ Hướng dẫn sử dụng sản phẩm.</li>
              <li>✓ Ebook và tài liệu học tập.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              Lưu ý khi sử dụng
            </h2>

            <p className="leading-8 text-slate-300">
              Hãy đảm bảo liên kết PDF có quyền truy cập công khai.
              Nếu thay đổi hoặc xóa tệp PDF, mã QR sẽ không còn hoạt động.
            </p>
          </section>
        </article>

        {/* CTA */}
        <section className="mt-16 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-10 text-center">
          <h2 className="text-3xl font-bold">
            Tạo mã QR miễn phí ngay hôm nay
          </h2>

          <p className="mt-4 text-slate-300">
            Hỗ trợ Website, WiFi, Email, PDF và nhiều loại nội dung khác.
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
              href="/blog/cach-tao-ma-qr-google-maps"
              className="rounded-3xl border border-slate-800 bg-white/5 p-6 transition hover:border-cyan-500/40"
            >
              <h3 className="text-xl font-bold">
                Cách tạo mã QR Google Maps
              </h3>
              <p className="mt-3 text-slate-400">
                Chia sẻ vị trí nhanh chóng bằng QR.
              </p>
            </Link>

            <Link
              href="/blog/cach-tao-ma-qr-thanh-toan-ngan-hang"
              className="rounded-3xl border border-slate-800 bg-white/5 p-6 transition hover:border-cyan-500/40"
            >
              <h3 className="text-xl font-bold">
                Cách tạo mã QR thanh toán ngân hàng
              </h3>
              <p className="mt-3 text-slate-400">
                Tạo mã QR chuyển khoản VietQR.
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
                So sánh hai loại mã QR phổ biến.
              </p>
            </Link>

            <Link
              href="/blog/ma-qr-co-an-toan-khong"
              className="rounded-3xl border border-slate-800 bg-white/5 p-6 transition hover:border-cyan-500/40"
            >
              <h3 className="text-xl font-bold">
                Mã QR có an toàn không?
              </h3>
              <p className="mt-3 text-slate-400">
                Những lưu ý quan trọng khi sử dụng QR.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}