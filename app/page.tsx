
import Link from "next/link";

export default function HomePage() {
  const qrTypes = [
    "Website",
    "Văn bản",
    "WiFi",
    "Email",
    "Điện thoại",
    "SMS",
    "Vị trí",
    "Danh bạ",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Navbar */}
        <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6">
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight md:text-3xl"
          >
            QR<span className="text-cyan-400">Free</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            

            <Link
              href="/about"
              className="text-slate-300 transition hover:text-white"
            >
              Giới thiệu
            </Link>

            <Link
              href="/contact"
              className="text-slate-300 transition hover:text-white"
            >
              Liên hệ
            </Link>
            <Link
              href="/privacy"
              className="text-slate-300 transition hover:text-white"
            >
              Điều Khoản
            </Link>
            <Link
              href="/terms"
              className="text-slate-300 transition hover:text-white"
            >
              Chính sách bảo mật
            </Link>
          </nav>

          <Link
            href="/generate"
            className="rounded-xl bg-cyan-500 px-4 py-2 font-semibold text-black transition hover:bg-cyan-400"
          >
            Bắt đầu
          </Link>
        </header>

        {/* Hero */}
        <section className="mx-auto max-w-7xl px-5 py-12 md:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <div className="mb-6 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
                QRFree.io.vn
              </div>

              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Tạo & Quét
                <span className="block text-cyan-400">
                  Mã QR Miễn Phí
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
                Tạo mã QR cho website, WiFi, email, số điện thoại,
                danh bạ và nhiều nội dung khác. Quét mã QR trực tiếp
                bằng camera hoặc tải ảnh lên để đọc nội dung ngay lập tức.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/generate"
                  className="rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-cyan-400"
                >
                  Tạo Mã QR
                </Link>

                <Link
                  href="/scan"
                  className="rounded-2xl border border-slate-700 px-6 py-3 font-semibold transition hover:bg-slate-900"
                >
                  Quét Mã QR
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-400">
                <span>✓ Miễn phí</span>
                <span>✓ Không cần đăng ký</span>
                <span>✓ Hỗ trợ điện thoại</span>
              </div>
            </div>

            {/* Right Hero */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />

                <div className="relative rounded-3xl border border-cyan-500/20 bg-white/5 p-5 backdrop-blur-xl">
                  <div className="rounded-2xl bg-white p-5 shadow-2xl">
                    <img
                      src="/qr-demo.png"
                      alt="QR Demo"
                      className="h-52 w-52 md:h-72 md:w-72"
                    />
                  </div>

                  <div className="absolute -left-4 top-8 rounded-xl border border-cyan-500/20 bg-slate-900/90 px-3 py-2 text-sm">
                    Website
                  </div>

                  <div className="absolute -right-4 top-24 rounded-xl border border-cyan-500/20 bg-slate-900/90 px-3 py-2 text-sm">
                    WiFi
                  </div>

                  <div className="absolute bottom-8 -left-4 rounded-xl border border-cyan-500/20 bg-slate-900/90 px-3 py-2 text-sm">
                    Email
                  </div>

                  <div className="absolute bottom-20 -right-4 rounded-xl border border-cyan-500/20 bg-slate-900/90 px-3 py-2 text-sm">
                    Scan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-7xl px-5 py-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur">
              <h2 className="mb-4 text-3xl font-bold">
                Tạo mã QR
              </h2>

              <p className="mb-6 text-slate-300">
                Tạo mã QR chuyên nghiệp cho mọi nhu cầu sử dụng.
              </p>

              <ul className="space-y-3 text-slate-300">
                <li>Website URL</li>
                <li>Văn bản</li>
                <li>WiFi</li>
                <li>Email</li>
                <li>Số điện thoại</li>
                <li>Danh bạ liên hệ</li>
              </ul>

              <Link
                href="/generate"
                className="mt-8 inline-block rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black"
              >
                Tạo Ngay
              </Link>
            </div>

            <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur">
              <h2 className="mb-4 text-3xl font-bold">
                Quét mã QR
              </h2>

              <p className="mb-6 text-slate-300">
                Quét mã QR bằng camera hoặc tải ảnh từ thiết bị.
              </p>

              <ul className="space-y-3 text-slate-300">
                <li>Camera trực tiếp</li>
                <li>Tải ảnh lên</li>
                <li>Đọc nội dung tức thì</li>
                <li>Mở liên kết nhanh</li>
                <li>Sao chép nội dung</li>
              </ul>

              <Link
                href="/scan"
                className="mt-8 inline-block rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black"
              >
                Quét Ngay
              </Link>
            </div>
          </div>
        </section>

        {/* QR Types */}
        <section className="mx-auto max-w-7xl px-5 py-20">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Hỗ trợ nhiều loại mã QR
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {qrTypes.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-800 bg-white/5 p-6 text-center transition hover:border-cyan-500/40 hover:bg-white/10"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mx-auto max-w-7xl px-5 pb-20">
          <div className="grid gap-6 rounded-3xl border border-cyan-500/20 bg-white/5 p-10 md:grid-cols-3">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400">
                1M+
              </div>
              <div className="mt-2 text-slate-300">
                Mã QR đã tạo
              </div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400">
                500K+
              </div>
              <div className="mt-2 text-slate-300">
                Mã QR đã quét
              </div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400">
                99.9%
              </div>
              <div className="mt-2 text-slate-300">
                Thời gian hoạt động
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-5 pb-24 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Sẵn sàng tạo mã QR?
          </h2>

          <p className="mt-4 text-slate-400">
            Nhanh chóng, miễn phí và dễ sử dụng.
          </p>

          <Link
            href="/generate"
            className="mt-8 inline-block rounded-2xl bg-cyan-500 px-8 py-4 font-bold text-black transition hover:scale-105"
          >
            Bắt đầu ngay
          </Link>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
          © 2026 QRFree.io.vn - Tạo & Quét Mã QR Miễn Phí
        </footer>
      </div>
    </main>
  );
}

