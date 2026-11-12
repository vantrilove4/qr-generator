import Link from "next/link";
import { BlogPostFaq, BlogPostSeo } from "@/components/blog-post";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("Cách tạo mã QR WiFi miễn phí | QRFree", "Hướng dẫn tạo mã QR WiFi để chia sẻ mạng nhanh chóng và lưu ý bảo mật khi chia sẻ mật khẩu.", "/blog/cach-tao-ma-qr-wifi");

export default function WifiQRBlog() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-16">
        <BlogPostSeo metadata={metadata} path="/blog/cach-tao-ma-qr-wifi" currentTitle="Cách tạo mã QR Wi‑Fi" />

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
              <li>Truy cập QRFree.io.vn.</li>
              <li>Chọn loại QR WiFi.</li>
              <li>Nhập tên mạng và mật khẩu.</li>
              <li>Chọn đúng kiểu bảo mật đang dùng trên router; chọn “Không mật khẩu” nếu mạng mở.</li>
              <li>Tạo mã, quét thử bằng điện thoại khác rồi tải xuống.</li>
            </ol>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">Kiểm tra các trường Wi‑Fi trước khi tạo mã</h2>
            <ul className="space-y-3 text-slate-300">
              <li><strong className="text-white">SSID:</strong> nhập đúng tên mạng, kể cả khoảng trắng và chữ hoa/chữ thường.</li>
              <li><strong className="text-white">Mật khẩu:</strong> kiểm tra ký tự đặc biệt và tránh dán thêm khoảng trắng ở đầu hoặc cuối.</li>
              <li><strong className="text-white">Bảo mật:</strong> chọn đúng WPA/WPA2, WEP hoặc “Không mật khẩu” theo router.</li>
            </ul>
            <p className="mt-4 leading-8 text-slate-300">QRFree hiện không có trường đánh dấu mạng ẩn hoặc cấu hình đăng nhập doanh nghiệp. Với Wi‑Fi cần username, chứng chỉ hay cấu hình riêng, hãy xin QR từ quản trị viên thay vì đoán các trường.</p>
          </section>
          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">Cách triển khai QR Wi‑Fi ở quán hoặc văn phòng</h2>
            <p className="leading-8 text-slate-300">Đặt mã tại nơi khách dễ thấy nhưng không phải nơi công cộng ngoài ý muốn. Thêm dòng “Quét để kết nối Wi‑Fi khách” để người dùng hiểu mục đích; giữ bên cạnh một cách nhập thủ công cho thiết bị không nhận định dạng Wi‑Fi.</p>
            <p className="mt-4 leading-8 text-slate-300">Nếu đổi tên mạng hoặc mật khẩu, QR cũ vẫn chứa thông tin trước đó. Tạo mã mới, quét thử rồi thay mọi bản in và hình ảnh đang dùng.</p>
          </section>
        </article>

        <BlogPostFaq items={[
          {
                    "question": "Vì sao quét QR Wi‑Fi nhưng không kết nối được?",
                    "answer": "Kiểm tra tên mạng, mật khẩu và loại bảo mật đã nhập có khớp router không. Tên Wi‑Fi và mật khẩu thường phân biệt chữ hoa, chữ thường; tạo lại mã sau khi sửa."
          },
          {
                    "question": "QRFree hỗ trợ loại bảo mật Wi‑Fi nào?",
                    "answer": "Biểu mẫu hiện có WPA/WPA2, WEP và mạng không mật khẩu. Mạng doanh nghiệp cần tên người dùng, chứng chỉ hoặc cấu hình riêng nên lấy mã từ bộ phận IT."
          },
          {
                    "question": "Có nên in QR Wi‑Fi của mạng chính không?",
                    "answer": "Nếu mã được đặt ở nơi nhiều người xem, hãy cân nhắc dùng mạng khách riêng và thay mật khẩu nếu quyền truy cập cần được thu hồi."
          }
]} />

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
