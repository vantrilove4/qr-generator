import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("Cách tạo mã QR danh thiếp (vCard) miễn phí | QRFree", "Hướng dẫn tạo mã QR danh thiếp vCard miễn phí để chia sẻ thông tin liên hệ nhanh chóng chỉ bằng một lần quét.", "/blog/cach-tao-ma-qr-danh-thiep-vcard");

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

          <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Cách tạo mã QR
            <span className="block text-cyan-400">
              danh thiếp (vCard) miễn phí
            </span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-400">
            <span>Biên soạn: QRFree</span>
            <span>6 phút đọc</span>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            Mã QR danh thiếp (vCard QR) cho phép người khác lưu thông tin liên hệ
            của bạn trực tiếp vào điện thoại chỉ bằng một lần quét, không cần nhập
            thủ công số điện thoại hay email.
          </p>
        </div>

        {/* Nội dung */}
        <article className="mx-auto mt-10 max-w-3xl space-y-10">
          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              QR danh thiếp (vCard) là gì?
            </h2>

            <p className="leading-8 text-slate-300">
              vCard là định dạng danh thiếp điện tử. QRFree hiện cho nhập họ tên và số điện thoại để tạo mã; điện thoại tương thích có thể đề xuất lưu thông tin đó vào danh bạ sau khi quét.
            </p>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
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

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Thông tin trong QRFree
            </h2>

            <ul className="space-y-4 text-slate-300">
              <li>✓ Họ và tên</li>
              <li>✓ Số điện thoại</li>
            </ul>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Cách tạo mã QR danh thiếp
            </h2>

            <ol className="space-y-4 text-slate-300">
              <li>1. Truy cập QRFree.io.vn.</li>
              <li>2. Chọn loại QR Danh bạ (vCard).</li>
              <li>3. Nhập tên và số điện thoại bạn muốn chia sẻ.</li>
              <li>4. Tạo mã, quét thử và xác nhận nội dung hiển thị.</li>
              <li>5. Tải mã QR về thiết bị.</li>
              <li>6. In lên danh thiếp hoặc hồ sơ cá nhân.</li>
            </ol>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
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
            Chia sẻ tên và số điện thoại để người khác lưu vào danh bạ.
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
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
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
              href="/blog/qrcode-la-gi"
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
