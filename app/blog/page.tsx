import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog QRFree | Hướng dẫn tạo và quét mã QR",
  description:
    "Khám phá các hướng dẫn về tạo mã QR, quét mã QR, QR WiFi, QR Zalo, QR Facebook và nhiều kiến thức hữu ích khác.",
};

const posts = [
  {
    title: "QR Code là gì? Cách tạo mã QR miễn phí năm 2026",
    description:
      "Tìm hiểu QR Code là gì, cách hoạt động và ứng dụng trong cuộc sống.",
    href: "/blog/qrcode-la-gi",
    category: "Kiến thức QR",
    time: "5 phút đọc",
  },
  {
    title: "Cách tạo mã QR WiFi miễn phí",
    description:
      "Chia sẻ WiFi nhanh chóng mà không cần nhập mật khẩu.",
    href: "/blog/cach-tao-ma-qr-wifi",
    category: "QR WiFi",
    time: "4 phút đọc",
  },
  {
    title: "Cách quét mã QR trên điện thoại",
    description:
      "Hướng dẫn quét QR trên Android, iPhone và từ ảnh.",
    href: "/blog/quet-ma-qr-tren-dien-thoai",
    category: "QR Scanner",
    time: "4 phút đọc",
  },
  {
    title: "Mã QR có an toàn không?",
    description:
      "7 lưu ý giúp tránh bị lừa đảo khi sử dụng QR Code.",
    href: "/blog/ma-qr-co-an-toan-khong",
    category: "Bảo mật",
    time: "6 phút đọc",
  },
  {
    title: "Cách tạo mã QR Zalo miễn phí",
    description:
      "Chia sẻ Zalo cá nhân hoặc OA bằng mã QR.",
    href: "/blog/cach-tao-ma-qr-zalo",
    category: "QR Zalo",
    time: "5 phút đọc",
  },
  {
    title: "Cách tạo mã QR Facebook miễn phí",
    description:
      "Tăng lượt theo dõi Fanpage bằng QR Code.",
    href: "/blog/cach-tao-ma-qr-facebook",
    category: "QR Facebook",
    time: "5 phút đọc",
  },
];

export default function BlogPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Navbar */}
        <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6">
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight"
          >
            QR<span className="text-cyan-400">Free</span>
          </Link>

          <Link
            href="/generate"
            className="rounded-xl bg-cyan-500 px-4 py-2 font-semibold text-black transition hover:bg-cyan-400"
          >
            Tạo mã QR
          </Link>
        </header>

        {/* Hero */}
        <section className="mx-auto max-w-7xl px-5 py-16 text-center">
          <div className="mb-6 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
            QRFree Blog
          </div>

          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Kiến thức về
            <span className="block text-cyan-400">
              Mã QR
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-slate-300 leading-8">
            Hướng dẫn tạo mã QR, quét QR, bảo mật QR Code
            và nhiều mẹo hữu ích giúp bạn sử dụng QR hiệu quả hơn.
          </p>
        </section>
           <script async="async" data-cfasync="false" src="https://pl29783748.effectivecpmnetwork.com/721828cd8f8c6a17755c9736f4a6116a/invoke.js"></script>
<div id="container-721828cd8f8c6a17755c9736f4a6116a"></div>


        {/* Blog Grid */}
        <section className="mx-auto max-w-7xl px-5 pb-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group rounded-3xl border border-cyan-500/10 bg-white/5 p-8 backdrop-blur transition hover:border-cyan-500/40 hover:bg-white/10"
              >
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
                  {post.category}
                </span>

                <h2 className="mt-6 text-2xl font-bold transition group-hover:text-cyan-400">
                  {post.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-300">
                  {post.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-slate-400">
                    {post.time}
                  </span>

                  <span className="text-cyan-400 transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-5 pb-24">
          <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-10 text-center">
            <h2 className="text-3xl font-bold">
              Sẵn sàng tạo mã QR?
            </h2>

            <p className="mt-4 text-slate-300">
              Miễn phí, không cần đăng ký và hỗ trợ nhiều loại nội dung.
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
                className="rounded-2xl border border-cyan-500/20 px-8 py-4 font-bold transition hover:bg-white/5"
              >
                Quét mã QR
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
          <p>
            © 2026 QRFree.io.vn · Blog về Mã QR
          </p>

          <div className="mt-3 flex flex-wrap justify-center gap-4">
            <Link href="/">Trang chủ</Link>
            <Link href="/generate">Tạo QR</Link>
            <Link href="/scan">Quét QR</Link>
            <Link href="/contact">Liên hệ</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}