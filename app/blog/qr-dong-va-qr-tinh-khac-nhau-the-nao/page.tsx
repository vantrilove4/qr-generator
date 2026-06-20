import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "QR động và QR tĩnh khác nhau thế nào? | QRFree",
  description:
    "So sánh QR động và QR tĩnh. Tìm hiểu ưu điểm, nhược điểm và nên sử dụng loại mã QR nào cho từng nhu cầu.",
  keywords: [
    "qr động",
    "qr tĩnh",
    "dynamic qr",
    "static qr",
    "qr động và qr tĩnh",
    "nên dùng qr động hay qr tĩnh",
  ],
  alternates: {
    canonical:
      "https://qrfree.io.vn/blog/qr-dong-va-qr-tinh-khac-nhau-the-nao",
  },
};

export default function DynamicVsStaticQRPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-16">
        <Link
          href="/blog"
          className="mb-8 inline-flex text-sm text-cyan-400 transition hover:text-cyan-300"
        >
          ← Quay lại Blog
        </Link>
<script async data-cfasync="false" src="https://pl29783748.effectivecpmnetwork.com/721828cd8f8c6a17755c9736f4a6116a/invoke.js"></script>
<div id="container-721828cd8f8c6a17755c9736f4a6116a"></div>
        {/* Hero */}
        <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur">
          <span className="rounded-full bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
            QR GUIDE
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            QR động và QR tĩnh
            <span className="block text-cyan-400">
              khác nhau thế nào?
            </span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-400">
            <span>📅 Cập nhật: 20/06/2026</span>
            <span>⏱️ 6 phút đọc</span>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            QR động (Dynamic QR) và QR tĩnh (Static QR) là hai loại mã QR phổ biến
            hiện nay. Mỗi loại có ưu điểm và nhược điểm riêng. Bài viết này sẽ giúp
            bạn hiểu rõ sự khác biệt và lựa chọn phù hợp với nhu cầu sử dụng.
          </p>
        </div>

        {/* Content */}
        <article className="mt-10 space-y-10">
          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              QR tĩnh là gì?
            </h2>

            <p className="leading-8 text-slate-300">
              QR tĩnh (Static QR) là loại mã QR chứa trực tiếp dữ liệu bên trong.
              Sau khi tạo, nội dung sẽ không thể chỉnh sửa hoặc thay đổi.
            </p>

            <ul className="mt-6 space-y-3 text-slate-300">
              <li>✓ Miễn phí</li>
              <li>✓ Không cần máy chủ trung gian</li>
              <li>✓ Hoạt động lâu dài</li>
              <li>✗ Không thể chỉnh sửa nội dung</li>
              <li>✗ Không có thống kê lượt quét</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              QR động là gì?
            </h2>

            <p className="leading-8 text-slate-300">
              QR động (Dynamic QR) không chứa dữ liệu thực tế mà chứa một liên kết
              trung gian. Nội dung đích có thể thay đổi mà không cần tạo lại mã QR.
            </p>

            <ul className="mt-6 space-y-3 text-slate-300">
              <li>✓ Có thể chỉnh sửa nội dung</li>
              <li>✓ Theo dõi lượt quét</li>
              <li>✓ Theo dõi vị trí và thiết bị</li>
              <li>✓ Phù hợp cho marketing</li>
              <li>✗ Thường mất phí</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8 overflow-x-auto">
            <h2 className="mb-6 text-3xl font-bold">
              So sánh QR động và QR tĩnh
            </h2>

            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="p-3">Tiêu chí</th>
                  <th className="p-3">QR tĩnh</th>
                  <th className="p-3">QR động</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-slate-800">
                  <td className="p-3">Miễn phí</td>
                  <td className="p-3">✅</td>
                  <td className="p-3">❌</td>
                </tr>

                <tr className="border-b border-slate-800">
                  <td className="p-3">Sửa nội dung</td>
                  <td className="p-3">❌</td>
                  <td className="p-3">✅</td>
                </tr>

                <tr className="border-b border-slate-800">
                  <td className="p-3">Thống kê lượt quét</td>
                  <td className="p-3">❌</td>
                  <td className="p-3">✅</td>
                </tr>

                <tr className="border-b border-slate-800">
                  <td className="p-3">Marketing</td>
                  <td className="p-3">⚠️</td>
                  <td className="p-3">✅</td>
                </tr>

                <tr>
                  <td className="p-3">Dễ sử dụng</td>
                  <td className="p-3">✅</td>
                  <td className="p-3">✅</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              Nên sử dụng loại nào?
            </h2>

            <h3 className="mb-4 text-xl font-semibold text-cyan-400">
              QR tĩnh phù hợp nếu:
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>✓ Website cá nhân</li>
              <li>✓ WiFi</li>
              <li>✓ Email</li>
              <li>✓ Danh bạ</li>
              <li>✓ Facebook hoặc Zalo</li>
            </ul>

            <h3 className="mb-4 mt-8 text-xl font-semibold text-cyan-400">
              QR động phù hợp nếu:
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>✓ Marketing</li>
              <li>✓ Nhà hàng, quán cà phê</li>
              <li>✓ Sự kiện</li>
              <li>✓ Chiến dịch quảng cáo</li>
              <li>✓ Theo dõi hành vi khách hàng</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              QRFree hỗ trợ loại nào?
            </h2>

            <p className="leading-8 text-slate-300">
              Hiện tại QRFree hỗ trợ tạo mã QR tĩnh miễn phí cho nhiều loại nội dung:
            </p>

            <ul className="mt-6 space-y-3 text-slate-300">
              <li>✓ Website URL</li>
              <li>✓ WiFi</li>
              <li>✓ Văn bản</li>
              <li>✓ Email</li>
              <li>✓ Số điện thoại</li>
              <li>✓ Danh bạ liên hệ</li>
            </ul>
          </section>
        </article>

        {/* CTA */}
        <section className="mt-16 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-10 text-center">
          <h2 className="text-3xl font-bold">
            Tạo mã QR miễn phí ngay hôm nay
          </h2>

          <p className="mt-4 text-slate-300">
            Hỗ trợ Website, WiFi, Email, Văn bản và nhiều loại nội dung khác.
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
              href="/blog/qr-code-la-gi"
              className="rounded-3xl border border-slate-800 bg-white/5 p-6 transition hover:border-cyan-500/40"
            >
              <h3 className="text-xl font-bold">
                QR Code là gì?
              </h3>
              <p className="mt-3 text-slate-400">
                Tìm hiểu cách hoạt động và ứng dụng của QR Code.
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
                Những lưu ý quan trọng khi quét mã QR.
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
                Chia sẻ WiFi chỉ bằng một lần quét.
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
                Hướng dẫn tạo QR chuyển khoản VietQR.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}