import Link from "next/link";
import VisitorCounter from "@/components/VisitorCounter";
import { createPageMetadata } from "@/lib/seo";
import { ArrowRight, QrCode, ScanLine, ShieldCheck } from "lucide-react";

export const metadata = createPageMetadata(
  "QRFree - Tạo và quét mã QR miễn phí",
  "Tạo QR tĩnh cho URL, văn bản, Wi-Fi, danh bạ vCard và địa chỉ ví crypto; quét QR bằng camera, ảnh hoặc màn hình.",
  "/",
);

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-180px] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-80px] h-[460px] w-[460px] rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 sm:py-5">
          <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="QRFree - Trang chủ">
            <img src="/makeqr.png" alt="" width={44} height={44} className="h-11 w-11 rounded-xl object-cover" />
            <span className="text-xl font-extrabold tracking-tight">QR<span className="text-cyan-400">Free</span></span>
          </Link>

          <nav aria-label="Điều hướng chính" className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
            <Link href="/generate" className="transition hover:text-white">Tạo QR</Link>
            <Link href="/scan" className="transition hover:text-white">Quét QR</Link>
            <Link href="/blog" className="transition hover:text-white">Blog</Link>
          </nav>

          <Link href="/generate" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 sm:px-5">
            Bắt đầu <ArrowRight size={16} />
          </Link>
        </header>

        <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24 lg:pt-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">
              Công cụ QR miễn phí
            </p>
            <h1 className="mt-5 max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Tạo và quét
              <span className="mt-1 block text-cyan-400">mã QR dễ dàng</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Tạo QR cho website, Wi-Fi, văn bản, danh thiếp và ví crypto. Quét mã bằng camera, ảnh hoặc dán ảnh vừa sao chép.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/generate" className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-bold text-slate-950 shadow-lg shadow-cyan-950/20 transition hover:-translate-y-0.5 hover:bg-cyan-300">
                <QrCode size={19} /> Tạo mã QR
              </Link>
              <Link href="/scan" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:border-slate-400 hover:bg-white/10">
                <ScanLine size={19} /> Quét mã QR
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
              <span>✓ Miễn phí</span>
              <span>✓ Không cần đăng ký</span>
              <span>✓ Dùng ngay trên trình duyệt</span>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative rounded-[2rem] border border-cyan-400/20 bg-white/[0.04] p-4 shadow-2xl shadow-cyan-950/20 backdrop-blur sm:p-6">
              <div aria-hidden="true" className="absolute inset-8 rounded-full bg-cyan-500/15 blur-3xl" />
              <div className="relative rounded-3xl bg-white p-4 shadow-xl sm:p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold text-slate-900">Mã QR tĩnh</p>
                    <p className="mt-1 text-xs text-slate-500">Ví dụ mã có thể tải về</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Sẵn sàng quét</span>
                </div>
                <img src="/qr-demo.png" alt="Ví dụ mã QR được tạo bằng QRFree" className="mx-auto aspect-square w-full max-w-[320px] rounded-xl object-contain" />
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5 text-xs text-slate-600">
                  <ShieldCheck size={16} className="shrink-0 text-emerald-600" /> Tạo và đọc mã ngay trên thiết bị của bạn
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20">
          <div className="mb-6 max-w-2xl">
            <p className="text-sm font-semibold text-cyan-300">Chọn công cụ</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Bạn muốn làm gì hôm nay?</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/generate" className="group rounded-3xl border border-cyan-400/20 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/[0.07] sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300"><QrCode size={24} /></div>
              <h3 className="mt-5 text-xl font-bold">Tạo mã QR</h3>
              <p className="mt-2 max-w-lg leading-7 text-slate-300">Tạo mã cho đường dẫn, Wi-Fi, văn bản, danh thiếp hoặc địa chỉ ví. Tùy chỉnh màu sắc, thêm logo và tải PNG hoặc PDF.</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-300">Mở công cụ <ArrowRight size={16} className="transition group-hover:translate-x-1" /></span>
            </Link>

            <Link href="/scan" className="group rounded-3xl border border-blue-400/20 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-blue-300/50 hover:bg-white/[0.07] sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-300"><ScanLine size={24} /></div>
              <h3 className="mt-5 text-xl font-bold">Quét mã QR</h3>
              <p className="mt-2 max-w-lg leading-7 text-slate-300">Quét bằng camera, tải ảnh lên, chụp một vùng trên màn hình hoặc dán ảnh QR từ clipboard.</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-300">Mở công cụ <ArrowRight size={16} className="transition group-hover:translate-x-1" /></span>
            </Link>
          </div>
        </section>

        <footer className="border-t border-slate-800/80 px-5 py-8 text-center text-sm text-slate-500 sm:px-8">
          <p>© 2026 QRFree.io.vn · Tạo và quét mã QR miễn phí</p>
          <nav aria-label="Liên kết bổ sung" className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2">
            <Link href="/about" className="hover:text-slate-300">Giới thiệu</Link>
            <Link href="/contact" className="hover:text-slate-300">Liên hệ</Link>
            <Link href="/privacy" className="hover:text-slate-300">Bảo mật</Link>
            <Link href="/terms" className="hover:text-slate-300">Điều khoản</Link>
            <Link href="/blog" className="hover:text-slate-300">Blog</Link>
          </nav>
          <p className="mt-5 text-xs text-slate-600">Made with ❤️ by TriNguyen</p>
          <VisitorCounter />
        </footer>
      </div>
    </main>
  );
}
