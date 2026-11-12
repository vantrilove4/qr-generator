import Link from "next/link";
import { BlogPostFaq, BlogPostSeo } from "@/components/blog-post";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("Cách tạo mã QR Zalo cá nhân và Zalo OA miễn phí | QRFree", "Hướng dẫn tạo mã QR Zalo cá nhân và Zalo Official Account miễn phí để chia sẻ liên hệ nhanh chóng.", "/blog/cach-tao-ma-qr-zalo");

export default function ZaloQRBlogPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-16">
        <BlogPostSeo metadata={metadata} path="/blog/cach-tao-ma-qr-zalo" currentTitle="Cách tạo mã QR Zalo cá nhân và OA" />

        {/* Hero */}
        <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur">
          <span className="rounded-full bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
            ZALO QR
          </span>

          <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Cách tạo mã QR Zalo
            <span className="mt-2 block text-cyan-400">
              cho cá nhân và OA
            </span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-400">
            <span>Biên soạn: QRFree</span>
            <span>4 phút đọc</span>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            Mã QR Zalo giúp bạn chia sẻ tài khoản cá nhân hoặc Zalo Official
            Account nhanh chóng mà không cần tìm kiếm bằng số điện thoại.
          </p>
        </div>

        {/* Content */}
        <article className="mx-auto mt-10 max-w-3xl space-y-10">
          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Mã QR Zalo là gì?
            </h2>

            <p className="leading-8 text-slate-300">
              Đây là mã QR chứa liên kết đến tài khoản Zalo của bạn.
              Khi người khác quét mã, thiết bị có thể mở ứng dụng Zalo hoặc trang liên kết. Người đó vẫn cần hoàn tất thao tác kết bạn hoặc theo dõi trong Zalo; kết quả phụ thuộc trạng thái đăng nhập và loại liên kết.
            </p>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Lợi ích của QR Zalo
            </h2>

            <ul className="space-y-4 text-slate-300">
              <li>✓ Kết bạn nhanh chóng.</li>
              <li>✓ Chia sẻ thông tin dễ dàng.</li>
              <li>✓ Giúp khách tìm đúng tài khoản hoặc OA để kết nối.</li>
              <li>✓ Phù hợp cho cửa hàng và doanh nghiệp.</li>
            </ul>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Cách tạo mã QR Zalo miễn phí
            </h2>

            <ol className="space-y-4 text-slate-300">
              <li>Sao chép liên kết hồ sơ hoặc OA từ Zalo và thử mở liên kết đó trước.</li>
              <li>Truy cập QRFree.io.vn.</li>
              <li>Chọn loại QR Website và dán liên kết Zalo vào trường URL.</li>
              <li>Nhấn “Tạo mã QR”, quét thử và xác nhận mở đúng tài khoản.</li>
              <li>Tải mã về thiết bị hoặc dùng chức năng chia sẻ.</li>
            </ol>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Ứng dụng thực tế
            </h2>

            <p className="leading-8 text-slate-300">
              Các cửa hàng thường in mã QR Zalo lên danh thiếp,
              menu hoặc quầy thanh toán để khách hàng dễ dàng liên hệ.
            </p>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">Chọn đúng liên kết trước khi in QR Zalo</h2>
            <p className="leading-8 text-slate-300">Tách rõ liên kết hồ sơ cá nhân với liên kết OA để khách không nhầm nơi cần nhắn tin. Dùng URL chia sẻ do Zalo cung cấp hoặc liên kết công khai bạn kiểm soát; tránh sao chép một đường dẫn chỉ mở được trong phiên đăng nhập của chính bạn.</p>
            <p className="mt-4 leading-8 text-slate-300">Sau khi quét thử, đối chiếu tên tài khoản và ảnh đại diện. Nếu trang đích hoặc liên kết đổi, tạo mã mới và thay mã ở menu, quầy thanh toán, danh thiếp và các bài đăng cũ.</p>
          </section>
          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">Mẹo đặt QR Zalo tại điểm bán</h2>
            <p className="leading-8 text-slate-300">Đặt cạnh lời kêu gọi cụ thể như “Quét để nhắn tin đặt hàng”, để mã không bị hiểu nhầm là mã thanh toán. Với bản in nhỏ, tránh đặt trên nền có hoa văn hoặc phản chiếu và luôn giữ một khoảng trắng quanh mã.</p>
          </section>
        </article>

        <BlogPostFaq items={[
          {
                    "question": "Nên dùng QR cá nhân hay QR Zalo OA?",
                    "answer": "Dùng liên kết hồ sơ nếu muốn người khác tìm tài khoản cá nhân; dùng liên kết OA nếu mục tiêu là trang chính thức của cửa hàng hoặc tổ chức."
          },
          {
                    "question": "Quét mã có tự động kết bạn hoặc theo dõi OA không?",
                    "answer": "Không nhất thiết. Thiết bị có thể mở ứng dụng hoặc trang liên kết, nhưng người quét thường vẫn phải xác nhận thao tác trong Zalo và có thể cần đăng nhập."
          },
          {
                    "question": "Làm sao chắc mã mở đúng Zalo?",
                    "answer": "Mở liên kết nguồn trước, tạo QR, rồi quét thử bằng thiết bị khác và kiểm tra tên, ảnh đại diện hoặc OA trước khi in."
          }
]} />

        {/* CTA */}
        <section className="mt-16 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-10 text-center">
          <h2 className="text-3xl font-bold">
            Tạo mã QR Zalo miễn phí
          </h2>

          <p className="mt-4 text-slate-300">
            Chỉ mất vài giây để tạo mã QR chuyên nghiệp.
          </p>

          <Link
            href="/generate"
            className="mt-8 inline-block rounded-2xl bg-cyan-500 px-8 py-4 font-bold text-black transition hover:bg-cyan-400"
          >
            Tạo mã QR ngay
          </Link>
        </section>

        {/* Related */}
        <section className="mt-16">
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
            Bài viết liên quan
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/blog/qrcode-la-gi"
              className="rounded-3xl border border-slate-800 bg-white/5 p-6 transition hover:border-cyan-500/40"
            >
              <h3 className="text-xl font-bold">
                QR Code là gì?
              </h3>

              <p className="mt-3 text-slate-400">
                Tìm hiểu về công nghệ QR Code.
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
          </div>
        </section>
      </div>
    </main>
  );
}
