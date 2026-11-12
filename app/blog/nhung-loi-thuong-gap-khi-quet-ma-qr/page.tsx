import Link from "next/link";
import { BlogPostFaq, BlogPostSeo } from "@/components/blog-post";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("Những lỗi thường gặp khi quét mã QR và cách khắc phục | QRFree", "Tổng hợp các lỗi phổ biến khi quét mã QR như không nhận diện được mã, camera không đọc được QR hoặc QR bị hỏng cùng cách khắc phục hiệu quả.", "/blog/nhung-loi-thuong-gap-khi-quet-ma-qr");

export default function QRScanErrorsPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-16">
        <BlogPostSeo metadata={metadata} path="/blog/nhung-loi-thuong-gap-khi-quet-ma-qr" currentTitle="Lỗi quét mã QR và cách khắc phục" />

        {/* Hero */}
        <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur">
          <span className="rounded-full bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
            QR SCANNER
          </span>

          <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Những lỗi thường gặp
            <span className="block text-cyan-400">
              khi quét mã QR
            </span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-400">
            <span>Biên soạn: QRFree</span>
            <span>6 phút đọc</span>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            Bạn không thể quét mã QR? Camera không nhận diện được mã?
            Bài viết này sẽ giúp bạn xác định nguyên nhân và khắc phục nhanh chóng.
          </p>
        </div>

        {/* Nội dung */}
        <article className="mx-auto mt-10 max-w-3xl space-y-10">

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              1. Mã QR bị mờ hoặc quá nhỏ
            </h2>

            <p className="leading-8 text-slate-300">
              Đây là nguyên nhân phổ biến nhất. Khi mã QR bị mờ, vỡ nét hoặc
              in quá nhỏ, camera sẽ khó nhận diện.
            </p>

            <ul className="mt-6 space-y-3 text-slate-300">
              <li>✓ Tăng kích thước mã QR.</li>
              <li>✓ In ở độ phân giải cao.</li>
              <li>✓ Tránh nén ảnh quá mức.</li>
            </ul>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              2. Camera điện thoại bị bẩn
            </h2>

            <p className="leading-8 text-slate-300">
              Bụi bẩn hoặc dấu vân tay trên ống kính có thể khiến camera
              không lấy nét chính xác.
            </p>

            <ul className="mt-6 space-y-3 text-slate-300">
              <li>✓ Lau sạch camera.</li>
              <li>✓ Đảm bảo đủ ánh sáng.</li>
              <li>✓ Đưa camera gần hơn.</li>
            </ul>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              3. Liên kết bên trong QR không còn tồn tại
            </h2>

            <p className="leading-8 text-slate-300">
              Mã QR vẫn quét được nhưng website hoặc tài liệu phía sau đã bị xóa,
              đổi tên miền hoặc thay đổi đường dẫn.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Trong trường hợp này cần tạo lại mã QR mới với liên kết chính xác.
            </p>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              4. QR có độ tương phản thấp
            </h2>

            <p className="leading-8 text-slate-300">
              QR màu quá nhạt hoặc nền quá sáng có thể khiến máy quét khó nhận diện.
            </p>

            <ul className="mt-6 space-y-3 text-slate-300">
              <li>✓ Dùng nền trắng.</li>
              <li>✓ Dùng mã QR màu đen hoặc màu đậm.</li>
              <li>✓ Tránh màu vàng nhạt hoặc xám nhạt.</li>
            </ul>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              5. Camera chưa nhận diện mã QR
            </h2>

            <p className="leading-8 text-slate-300">
              Khả năng quét phụ thuộc vào mẫu điện thoại, ứng dụng Camera và cài đặt. Đảm bảo toàn bộ mã nằm trong khung hình, giữ máy ổn định để lấy nét, bật đủ sáng và kiểm tra quyền Camera nếu ứng dụng yêu cầu.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Nếu vẫn không nhận diện được, mở QRFree để tải ảnh lên hoặc dán ảnh QR đã sao chép vào trang /scan.
            </p>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Cách kiểm tra mã QR có hoạt động không
            </h2>

            <ol className="space-y-4 text-slate-300">
              <li>Thử quét trên nhiều điện thoại khác nhau.</li>
              <li>Kiểm tra độ sắc nét của ảnh QR.</li>
              <li>Kiểm tra liên kết đích.</li>
              <li>Kiểm tra màu sắc và độ tương phản.</li>
              <li>Thử bằng công cụ quét QR trực tuyến.</li>
            </ol>
          </section>


          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">Phân biệt lỗi đọc mã và lỗi ở trang đích</h2>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <thead><tr className="border-b border-white/10 text-slate-200"><th className="p-3">Dấu hiệu</th><th className="p-3">Nguyên nhân có thể</th><th className="p-3">Bước tiếp theo</th></tr></thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-white/10"><td className="p-3">Không hiện nội dung</td><td className="p-3">Mờ, thiếu sáng, mã bị cắt hoặc camera chưa lấy nét</td><td className="p-3">Tăng sáng, giữ trọn mã trong khung hoặc tải ảnh rõ hơn</td></tr>
                  <tr><td className="p-3">Đã hiện URL nhưng trang lỗi</td><td className="p-3">Đích bị xóa, yêu cầu quyền hoặc URL sai</td><td className="p-3">Kiểm tra URL và quyền truy cập; tạo mã mới nếu URL đổi</td></tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">Nếu bạn là người tạo mã: kiểm tra chất lượng bản in</h2>
            <p className="leading-8 text-slate-300">Giữ khoảng trắng quanh mã, dùng màu đủ tương phản và tránh logo che các ô định vị ở ba góc. Mức sửa lỗi cao không thể cứu mọi bản in; hãy quét thử file PNG/PDF và mẫu in thật trước khi phát hành.</p>
            <p className="mt-4 text-sm leading-7 text-slate-400">DENSO WAVE khuyến nghị vùng trắng bảo vệ rộng bốn mô-đun quanh mã: <a href="https://www.qrcode.com/en/howto/code.html/index.html" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline underline-offset-4">hướng dẫn thiết lập vùng mã QR</a>.</p>
          </section>
        </article>

        <BlogPostFaq items={[
          {
                    "question": "Camera không đọc được mã thì nên kiểm tra gì trước?",
                    "answer": "Lau ống kính, tăng ánh sáng, giữ toàn bộ mã trong khung hình và để camera lấy nét. Nếu quét từ màn hình, phóng to ảnh nhưng tránh làm mờ."
          },
          {
                    "question": "Mã được nhận diện nhưng liên kết báo lỗi, QR có hỏng không?",
                    "answer": "Không nhất thiết. Khi nội dung đã giải mã nhưng trang không mở, hãy kiểm tra URL, quyền truy cập, tên miền và trạng thái dịch vụ đích."
          },
          {
                    "question": "Có thể kiểm tra mã từ ảnh mà không dùng camera không?",
                    "answer": "Có. Tải ảnh QR lên /scan hoặc sao chép ảnh rồi dán vào trang nếu clipboard được hỗ trợ."
          }
]} />

        {/* CTA */}
        <section className="mt-16 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-10 text-center">
          <h2 className="text-3xl font-bold">
            Kiểm tra mã QR của bạn ngay
          </h2>

          <p className="mt-4 text-slate-300">
            Quét mã QR trực tuyến hoặc tạo mã QR mới miễn phí.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/scan"
              className="rounded-2xl bg-cyan-500 px-8 py-4 font-bold text-black transition hover:bg-cyan-400"
            >
              Quét mã QR
            </Link>

            <Link
              href="/generate"
              className="rounded-2xl border border-cyan-500/20 px-8 py-4 font-bold transition hover:bg-white/5"
            >
              Tạo mã QR
            </Link>
          </div>
        </section>

        {/* Related */}
        <section className="mt-16">
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
            Bài viết liên quan
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/blog/ma-qr-co-an-toan-khong"
              className="rounded-3xl border border-slate-800 bg-white/5 p-6 hover:border-cyan-500/40"
            >
              <h3 className="text-xl font-bold">
                Mã QR có an toàn không?
              </h3>
              <p className="mt-3 text-slate-400">
                Các lưu ý bảo mật khi sử dụng QR Code.
              </p>
            </Link>

            <Link
              href="/blog/quet-ma-qr-tren-dien-thoai"
              className="rounded-3xl border border-slate-800 bg-white/5 p-6 hover:border-cyan-500/40"
            >
              <h3 className="text-xl font-bold">
                Cách quét mã QR trên điện thoại
              </h3>
              <p className="mt-3 text-slate-400">
                Hướng dẫn chi tiết cho Android và iPhone.
              </p>
            </Link>

            <Link
              href="/blog/qr-dong-va-qr-tinh-khac-nhau-the-nao"
              className="rounded-3xl border border-slate-800 bg-white/5 p-6 hover:border-cyan-500/40"
            >
              <h3 className="text-xl font-bold">
                QR động và QR tĩnh khác nhau thế nào?
              </h3>
              <p className="mt-3 text-slate-400">
                So sánh chi tiết hai loại QR phổ biến.
              </p>
            </Link>

            <Link
              href="/blog/qrcode-la-gi"
              className="rounded-3xl border border-slate-800 bg-white/5 p-6 hover:border-cyan-500/40"
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
