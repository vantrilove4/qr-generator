import Link from "next/link";
import { BlogPostFaq, BlogPostSeo } from "@/components/blog-post";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("Cách tạo mã QR thanh toán VietQR bằng ứng dụng ngân hàng", "Tìm hiểu cách tạo mã thanh toán VietQR bằng ứng dụng ngân hàng hoặc dịch vụ VietQR và các thông tin cần kiểm tra.", "/blog/cach-tao-ma-qr-thanh-toan-ngan-hang");

export default function VietQRBlogPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-16">
        <BlogPostSeo metadata={metadata} path="/blog/cach-tao-ma-qr-thanh-toan-ngan-hang" currentTitle="Cách tạo mã QR thanh toán VietQR" />

        <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur">
          <span className="rounded-full bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
            VIETQR
          </span>

          <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Cách tạo mã QR thanh toán VietQR
          </h1>

          <div className="mt-5 flex flex-wrap gap-5 text-sm text-slate-400">
            <span>Biên soạn: QRFree</span>
            <span>5 phút đọc</span>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            Có thể tạo mã chuyển khoản từ ứng dụng ngân hàng hoặc dịch vụ hỗ trợ VietQR. Bài viết hướng dẫn các bước cần kiểm tra và nêu rõ QRFree hiện chỉ tạo QR cho liên kết, chưa tạo mã chuyển khoản VietQR.
          </p>
        </div>

        <aside className="mt-6 rounded-2xl border border-amber-400/25 bg-amber-300/5 p-5 text-sm leading-7 text-amber-100/90">
          QRFree chưa tạo mã chuyển khoản VietQR. Hãy tạo mã bằng ứng dụng ngân hàng hoặc dịch vụ VietQR đáng tin cậy; không nhập thông tin đăng nhập hay OTP ngân hàng vào trang tạo QR.
        </aside>

        <article className="mx-auto mt-10 max-w-3xl space-y-10">
          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              VietQR là gì?
            </h2>

            <p className="leading-8 text-slate-300">
              VietQR là thương hiệu và định dạng QR do NAPAS triển khai cho các dịch vụ thanh toán, chuyển tiền. Khi quét mã cá nhân bằng ứng dụng ngân hàng tương thích, thông tin người nhận có thể được điền sẵn để bạn kiểm tra; số tiền và nội dung chuyển khoản tùy mã.
            </p>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Lợi ích của mã QR thanh toán
            </h2>

            <ul className="space-y-4 text-slate-300">
              <li>✓ Chuyển khoản nhanh chóng.</li>
              <li>✓ Có thể điền sẵn thông tin người nhận để giảm thao tác nhập.</li>
              <li>✓ Chuyên nghiệp hơn khi kinh doanh.</li>
              <li>✓ In trên hóa đơn, menu hoặc danh thiếp.</li>
            </ul>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Cách tạo mã QR thanh toán
            </h2>

            <ol className="space-y-4 text-slate-300">
              <li>Mở ứng dụng ngân hàng hoặc dịch vụ VietQR mà bạn tin cậy.</li>
              <li>Nhập ngân hàng, số tài khoản và tên người nhận; thêm số tiền hoặc nội dung nếu cần.</li>
              <li>Tạo mã trong ứng dụng và kiểm tra tên người nhận cùng các thông tin hiển thị.</li>
              <li>Quét thử bằng ứng dụng ngân hàng khác trước khi in hoặc chia sẻ.</li>
              <li>Khi nhận tiền, xác nhận giao dịch trong tài khoản ngân hàng thay vì chỉ dựa vào ảnh chụp.</li>
            </ol>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Những lưu ý khi sử dụng
            </h2>

            <ul className="space-y-4 text-slate-300">
              <li>✓ Kiểm tra tên người nhận, ngân hàng, số tài khoản, số tiền và nội dung trước khi xác nhận.</li>
              <li>✓ Không cung cấp mật khẩu, mã OTP hoặc mã PIN để tạo hay nhận thanh toán.</li>
              <li>✓ Tạo lại và thay QR đã in nếu tài khoản nhận tiền thay đổi.</li>
              <li>✓ Chỉ dùng ứng dụng ngân hàng hoặc nguồn VietQR đáng tin cậy.</li>
            </ul>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">Phân biệt QR chuyển khoản và QR thanh toán tại cửa hàng</h2>
            <p className="leading-8 text-slate-300">Mã cá nhân để nhận chuyển khoản và mã thanh toán tại đơn vị chấp nhận thanh toán có thể đi qua các dịch vụ, ứng dụng và luồng xác nhận khác nhau. Hãy tạo đúng loại trong ứng dụng ngân hàng hoặc dịch vụ đang dùng; không biến một đường dẫn thanh toán thông thường thành mã chuyển khoản bằng cách dán URL vào QRFree.</p>
            <p className="mt-4 leading-8 text-slate-300">NAPAS mô tả dịch vụ chuyển tiền NAPAS 247 bằng VietQR và dịch vụ thanh toán VietQR riêng. Chi tiết có thể khác theo ngân hàng, vì vậy người nhận và người trả cần đọc thông tin giao dịch trong ứng dụng trước khi xác nhận.</p>
          </section>
          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">Cách thay mã chuyển khoản đã in</h2>
            <ol className="space-y-3 text-slate-300">
              <li>Tạo mã mới trong ứng dụng ngân hàng hoặc nguồn VietQR.</li>
              <li>Quét thử bằng ứng dụng ngân hàng và soát tên người nhận.</li>
              <li>Thay mã ở quầy, hóa đơn, website và tài liệu cũ.</li>
              <li>Xác nhận tiền đã vào tài khoản trước khi giao hàng hoặc dịch vụ.</li>
            </ol>
          </section>
        </article>

        <BlogPostFaq items={[
          {
                    "question": "QRFree có tạo mã chuyển khoản VietQR không?",
                    "answer": "Chưa. QRFree tạo QR cho đường dẫn và các loại dữ liệu được liệt kê trong công cụ; hãy tạo mã chuyển khoản bằng ứng dụng ngân hàng hoặc dịch vụ VietQR đáng tin cậy."
          },
          {
                    "question": "Mã VietQR có luôn chứa số tiền không?",
                    "answer": "Không. Người tạo có thể để người chuyển tự nhập số tiền hoặc tạo mã kèm số tiền và nội dung. Hãy kiểm tra thông tin hiện trong ứng dụng ngân hàng trước khi xác nhận."
          },
          {
                    "question": "Ảnh chụp màn hình báo đã chuyển tiền có đủ để xác nhận không?",
                    "answer": "Không nên chỉ dựa vào ảnh chụp. Người nhận hãy kiểm tra giao dịch đã ghi có trong ứng dụng hoặc tài khoản ngân hàng của mình."
          }
]} />

        <section className="mt-10 rounded-3xl border border-slate-800 bg-white/5 p-8">
          <h2 className="mb-4 text-2xl font-bold">Nguồn tham khảo</h2>
          <p className="leading-7 text-slate-300">Thông tin về chuyển tiền bằng mã VietQR được tham khảo từ hướng dẫn chính thức của <a href="https://www.napas.com.vn/dich-vu-chuyen-tien-nhanh-napas-247" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline decoration-cyan-300/50 underline-offset-4 hover:text-cyan-200">NAPAS</a>.</p>
        </section>

        <section className="mt-16 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-10 text-center">
          <h2 className="text-3xl font-bold">
            Tạo mã QR cho đường dẫn thanh toán
          </h2>

          <p className="mt-4 text-slate-300">
            QRFree hiện chỉ tạo QR cho đường dẫn. Để nhận chuyển khoản, hãy dùng mã do ngân hàng hoặc dịch vụ VietQR tạo và xác minh thông tin người nhận trước khi chia sẻ.
          </p>

          <Link
            href="/generate"
            className="mt-8 inline-block rounded-2xl bg-cyan-500 px-8 py-4 font-bold text-black transition hover:bg-cyan-400"
          >
            Tạo QR cho liên kết
          </Link>
        </section>
        <section className="mt-16">
  <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
    Bài viết liên quan
  </h2>

  <div className="grid gap-6 md:grid-cols-2">
    <Link
      href="/blog/ma-qr-co-an-toan-khong"
      className="rounded-3xl border border-slate-800 bg-white/5 p-6 transition hover:border-cyan-500/40"
    >
      <h3 className="text-xl font-bold">
        Mã QR có an toàn không?
      </h3>

      <p className="mt-3 text-slate-400">
        7 lưu ý giúp tránh các hình thức lừa đảo QR Code.
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
        Tìm hiểu cách hoạt động và ứng dụng của QR Code.
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
        Chia sẻ tài khoản Zalo nhanh chóng bằng QR.
      </p>
    </Link>

    <Link
      href="/blog/cach-tao-ma-qr-facebook"
      className="rounded-3xl border border-slate-800 bg-white/5 p-6 transition hover:border-cyan-500/40"
    >
      <h3 className="text-xl font-bold">
        Cách tạo mã QR Facebook
      </h3>

      <p className="mt-3 text-slate-400">
        Chia sẻ trang cá nhân hoặc Fanpage bằng QR.
      </p>
    </Link>
  </div>
</section>
      </div>
    </main>
  );
}
