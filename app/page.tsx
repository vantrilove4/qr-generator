
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      {/* Background */}
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
            <p>
        <a href="https://qrfree.io.vn" target="_blank" rel="noopener noreferrer">
          <img src="/makeqr.png" alt="Logo" width={100} height={100} />
        </a>
      </p>
          </Link>

          
        </header>

        {/* Hero */}
      

<section className="mx-auto max-w-7xl px-5 py-12 md:py-20">
  <div className="grid items-center gap-12 lg:grid-cols-2">
    <div>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
        Tạo & Quét
        <span className="block text-cyan-400">
          Mã QR Miễn Phí
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
        <b>Tạo và quét mã QR miễn phí cho website, WiFi, email, văn bản và nhiều nội dung khác. Nội dung được xử lý trực tiếp trên thiết bị của bạn, không lưu trữ dữ liệu mã QR trên máy chủ.</b>
      </p>

      <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-400">
        <span>✓ Miễn phí</span>
        <span>✓ Không cần đăng ký</span>
        <span>✓ Hỗ trợ điện thoại</span>
      </div>
    </div>

    {/* QR Demo */}
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
        </div>
      </div>
    </div>
  </div>
</section>

{/* 2 chức năng chính */}
<section className="mx-auto max-w-7xl px-5 pb-20">
  <div className="grid gap-6 md:grid-cols-2">

    {/* Generate */}
    <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur">
      <h2 className="mb-4 text-3xl font-bold">
        Tạo mã QR
      </h2>

      <p className="mb-6 text-slate-300">
        Tạo mã QR cho website, WiFi, email,
        số điện thoại và nhiều nội dung khác.
      </p>

      <Link
        href="/generate"
        className="inline-flex rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:bg-cyan-400"
      >
        Tạo Mã QR
      </Link>
    </div>

    {/* Scan */}
    <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur">
      <h2 className="mb-4 text-3xl font-bold">
        Quét mã QR
      </h2>

      <p className="mb-6 text-slate-300">
        Quét mã QR bằng camera hoặc tải ảnh
        từ thiết bị của bạn.
      </p>

      <Link
        href="/scan"
        className="inline-flex rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:bg-cyan-400"
      >
        Quét Mã QR
      </Link>
    </div>

  </div>
</section>



       

        {/* Footer */}
        <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
          <p>
            © 2026 QRFree.io.vn · Tạo & Quét Mã QR Miễn Phí
          </p>

          <div className="mt-3 flex flex-wrap justify-center gap-4">
            <Link href="/about">Giới thiệu</Link>
            <Link href="/contact">Liên hệ</Link>
            <Link href="/privacy">Bảo mật</Link>
            <Link href="/terms">Điều khoản</Link>
          </div>

          <p className="mt-4">
            Made with ❤️ by TriNguyen
          </p>
        </footer>
      </div>
    </main>
  );
}

