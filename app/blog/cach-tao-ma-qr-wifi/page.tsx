import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("Cách tạo mã QR WiFi miễn phí | QRFree", "Hướng dẫn tạo mã QR WiFi để chia sẻ mạng nhanh chóng và lưu ý bảo mật khi chia sẻ mật khẩu.", "/blog/cach-tao-ma-qr-wifi");

export default function WifiQRBlog() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-16">
        <Link
          href="/blog"
          className="mb-8 inline-flex text-cyan-400 hover:text-cyan-300"
        >
          ← Quay lại Blog
        </Link>

        <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8">
          <span className="rounded-full bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
            WIFI QR
          </span>

          <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Cách tạo mã QR WiFi miễn phí
          </h1>

          <div className="mt-5 flex flex-wrap gap-5 text-sm text-slate-400">
            <span>Biên soạn: QRFree</span>
            <span>4 phút đọc</span>
          </div>

          <p className="mt-6 text-slate-300 leading-8">
            Thay vì đọc mật khẩu WiFi dài và khó nhớ, bạn có thể tạo mã QR
            để khách hàng, bạn bè hoặc người thân kết nối chỉ bằng một lần quét.
          </p>
        </div>

        <article className="mx-auto mt-10 max-w-3xl space-y-8">
          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              QR WiFi là gì?
            </h2>

            <p className="leading-8 text-slate-300">
              QR WiFi là mã QR chứa tên mạng (SSID), mật khẩu và loại bảo mật.
              Điện thoại tương thích có thể hiện lời nhắc kết nối để người dùng xác nhận. Hành vi này tùy hệ điều hành và ứng dụng camera.
            </p>
          </section>

          <aside className="rounded-2xl border border-amber-400/25 bg-amber-300/5 p-5 text-sm leading-7 text-amber-100/90">
            Mã QR Wi-Fi chứa tên mạng và mật khẩu. Chỉ chia sẻ ở nơi phù hợp; nếu mạng chính chỉ dành cho gia đình hoặc nhân viên, hãy cân nhắc tạo mạng khách riêng.
          </aside>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Lợi ích của QR WiFi
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>✓ Kết nối nhanh chóng.</li>
              <li>✓ Hạn chế nhập sai mật khẩu.</li>
              <li>✓ Thuận tiện cho quán cà phê, nhà hàng.</li>
              <li>✓ Tăng trải nghiệm khách hàng.</li>
            </ul>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Cách tạo QR WiFi
            </h2>

            <ol className="space-y-4 text-slate-300">
              <li>1. Truy cập QRFree.io.vn.</li>
              <li>2. Chọn loại QR WiFi.</li>
              <li>3. Nhập tên mạng và mật khẩu.</li>
              <li>4. Chọn đúng kiểu bảo mật đang dùng trên router; chọn “Không mật khẩu” nếu mạng mở.</li>
              <li>5. Tạo mã, quét thử bằng điện thoại khác rồi tải xuống.</li>
            </ol>
          </section>
        </article>

        <section className="mt-16 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-10 text-center">
          <h2 className="text-3xl font-bold">
            Tạo mã QR WiFi miễn phí
          </h2>

          <p className="mt-4 text-slate-300">
            Chia sẻ WiFi dễ dàng chỉ trong vài giây.
          </p>

          <Link
            href="/generate"
            className="mt-8 inline-block rounded-2xl bg-cyan-500 px-8 py-4 font-bold text-black hover:bg-cyan-400"
          >
            Tạo QR WiFi ngay
          </Link>
        </section>
      </div>
    </main>
  );
}
