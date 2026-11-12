import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("Cách tạo mã QR Google Maps miễn phí | QRFree", "Hướng dẫn tạo mã QR Google Maps để chia sẻ vị trí, cửa hàng hoặc địa điểm nhanh chóng bằng một lần quét.", "/blog/cach-tao-ma-qr-google-maps");

export default function GoogleMapsQRPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* Background */}
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
            GOOGLE MAPS
          </span>

          <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Cách tạo mã QR
            <span className="block text-cyan-400">
              Google Maps miễn phí
            </span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-400">
            <span>Biên soạn: QRFree</span>
            <span>5 phút đọc</span>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            Mã QR Google Maps giúp khách hàng hoặc bạn bè tìm đến đúng địa điểm
            chỉ với một lần quét. Đây là giải pháp rất hữu ích cho cửa hàng,
            quán cà phê, khách sạn, văn phòng và các sự kiện.
          </p>
        </div>

        {/* Nội dung */}
        <article className="mx-auto mt-10 max-w-3xl space-y-10">
          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Mã QR Google Maps là gì?
            </h2>

            <p className="leading-8 text-slate-300">
              Mã QR Google Maps là mã QR chứa liên kết đến một địa điểm cụ thể
              trên Google Maps. Khi quét mã, liên kết có thể mở trong ứng dụng Maps hoặc trình duyệt tùy cài đặt thiết bị; người dùng có thể xem địa điểm rồi tự chọn chỉ đường.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Đây là cách chia sẻ vị trí nhanh hơn nhiều so với việc gửi địa chỉ
              dài hoặc tọa độ GPS.
            </p>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Lợi ích của mã QR Google Maps
            </h2>

            <ul className="space-y-4 text-slate-300">
              <li>✓ Chia sẻ vị trí nhanh chóng.</li>
              <li>✓ Không cần nhập địa chỉ thủ công.</li>
              <li>✓ Giảm nhầm lẫn khi tìm đường.</li>
              <li>✓ Phù hợp cho doanh nghiệp và cá nhân.</li>
              <li>✓ Dễ in trên danh thiếp hoặc poster.</li>
            </ul>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Cách tạo mã QR Google Maps
            </h2>

            <ol className="space-y-4 text-slate-300">
              <li>1. Mở Google Maps trên điện thoại hoặc máy tính.</li>
              <li>2. Tìm địa điểm muốn chia sẻ.</li>
              <li>3. Chọn nút Chia sẻ.</li>
              <li>4. Sao chép liên kết Google Maps.</li>
              <li>5. Truy cập QRFree.io.vn.</li>
              <li>6. Chọn loại QR Website.</li>
              <li>7. Dán liên kết Google Maps vào ô nhập liệu.</li>
              <li>8. Tải mã QR về thiết bị.</li>
            </ol>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Những trường hợp nên sử dụng
            </h2>

            <ul className="space-y-4 text-slate-300">
              <li>✓ Quán cà phê và nhà hàng.</li>
              <li>✓ Khách sạn và homestay.</li>
              <li>✓ Văn phòng công ty.</li>
              <li>✓ Cửa hàng bán lẻ.</li>
              <li>✓ Triển lãm và hội chợ.</li>
              <li>✓ Đám cưới và sự kiện cá nhân.</li>
            </ul>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Mẹo sử dụng hiệu quả
            </h2>

            <p className="leading-8 text-slate-300">
              Trước khi in mã QR số lượng lớn, hãy thử quét trên nhiều thiết bị
              khác nhau để đảm bảo liên kết Google Maps hoạt động chính xác.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              QRFree tạo mã tĩnh nên địa chỉ được mã hóa không thể sửa trực tiếp trong QR. Nếu địa điểm hoặc URL thay đổi, hãy tạo và thay mã mới; nếu chỉ cập nhật thông tin của cùng một địa điểm trên Google Maps, liên kết hiện tại có thể vẫn dùng được.
            </p>
          </section>
        </article>

        {/* CTA */}
        <section className="mt-16 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-10 text-center">
          <h2 className="text-3xl font-bold">
            Tạo mã QR Google Maps ngay
          </h2>

          <p className="mt-4 text-slate-300">
            Chia sẻ vị trí nhanh chóng bằng mã QR miễn phí.
          </p>

          <Link
            href="/generate"
            className="mt-8 inline-block rounded-2xl bg-cyan-500 px-8 py-4 font-bold text-black transition hover:bg-cyan-400"
          >
            Tạo mã QR
          </Link>
        </section>

        {/* Bài liên quan */}
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
                Tìm hiểu nguyên lý hoạt động của mã QR.
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
              href="/blog/cach-tao-ma-qr-zalo"
              className="rounded-3xl border border-slate-800 bg-white/5 p-6 transition hover:border-cyan-500/40"
            >
              <h3 className="text-xl font-bold">
                Cách tạo mã QR Zalo
              </h3>

              <p className="mt-3 text-slate-400">
                Kết nối Zalo nhanh chóng bằng QR Code.
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
                So sánh chi tiết hai loại mã QR phổ biến hiện nay.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
