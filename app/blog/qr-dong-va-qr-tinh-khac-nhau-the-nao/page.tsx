import Link from "next/link";
import { BlogPostFaq, BlogPostSeo } from "@/components/blog-post";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("QR động và QR tĩnh khác nhau thế nào? | QRFree", "So sánh QR động và QR tĩnh. Tìm hiểu ưu điểm, nhược điểm và nên sử dụng loại mã QR nào cho từng nhu cầu.", "/blog/qr-dong-va-qr-tinh-khac-nhau-the-nao");

export default function DynamicVsStaticQRPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-16">
        <BlogPostSeo metadata={metadata} path="/blog/qr-dong-va-qr-tinh-khac-nhau-the-nao" currentTitle="QR động và QR tĩnh khác nhau thế nào?" />

        {/* Hero */}
        <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur">
          <span className="rounded-full bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
            QR GUIDE
          </span>

          <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            QR động và QR tĩnh
            <span className="block text-cyan-400">
              khác nhau thế nào?
            </span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-400">
            <span>Biên soạn: QRFree</span>
            <span>6 phút đọc</span>
          </div>

          <p className="mt-6 leading-8 text-slate-300">
            QR động (Dynamic QR) và QR tĩnh (Static QR) là hai loại mã QR phổ biến
            hiện nay. Mỗi loại có ưu điểm và nhược điểm riêng. Bài viết này sẽ giúp
            bạn hiểu rõ sự khác biệt và lựa chọn phù hợp với nhu cầu sử dụng.
          </p>
        </div>

        {/* Content */}
        <article className="mx-auto mt-10 max-w-3xl space-y-10">
          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              QR tĩnh là gì?
            </h2>

            <p className="leading-8 text-slate-300">
              QR tĩnh (Static QR) là loại mã QR chứa trực tiếp dữ liệu bên trong.
              Dữ liệu được mã hóa trực tiếp trong hình QR. Muốn đổi dữ liệu, thường phải tạo mã mới. Với QR chứa một URL, chủ trang vẫn có thể đổi nội dung ở chính địa chỉ đó.
            </p>

            <ul className="mt-6 space-y-3 text-slate-300">
              <li>✓ Không phụ thuộc dịch vụ chuyển hướng QR</li>
              <li>✓ Không cần máy chủ trung gian</li>
              <li>✓ Hoạt động lâu dài</li>
              <li>✗ Không thể chỉnh sửa nội dung</li>
              <li>✗ Bản thân mã không cung cấp thống kê lượt quét</li>
            </ul>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              QR động là gì?
            </h2>

            <p className="leading-8 text-slate-300">
              QR động thường mã hóa một URL chuyển hướng do nhà cung cấp quản lý. Nhà cung cấp có thể cho phép đổi địa chỉ đích mà không in lại mã; các tính năng cụ thể phụ thuộc dịch vụ.
            </p>

            <ul className="mt-6 space-y-3 text-slate-300">
              <li>✓ Có thể chỉnh sửa nội dung</li>
              <li>✓ Một số dịch vụ có thống kê lượt quét</li>
              <li>✓ Mức dữ liệu thống kê tùy nhà cung cấp và cài đặt quyền riêng tư</li>
              <li>✓ Phù hợp cho marketing</li>
              <li>✓ Giá và giới hạn sử dụng tùy gói dịch vụ</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-white/5 p-8 overflow-x-auto">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              So sánh QR động và QR tĩnh
            </h2>

            <table className="w-full min-w-[620px] border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="p-3">Tiêu chí</th>
                  <th className="p-3">QR tĩnh</th>
                  <th className="p-3">QR động</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-slate-800">
                  <td className="p-3">Chi phí</td>
                  <td className="p-3">Tùy công cụ</td>
                  <td className="p-3">Tùy nhà cung cấp</td>
                </tr>

                <tr className="border-b border-slate-800">
                  <td className="p-3">Sửa nội dung</td>
                  <td className="p-3">❌</td>
                  <td className="p-3">✅</td>
                </tr>

                <tr className="border-b border-slate-800">
                  <td className="p-3">Thống kê qua dịch vụ QR</td>
                  <td className="p-3">Không có sẵn trong mã</td>
                  <td className="p-3">Có thể có, tùy dịch vụ</td>
                </tr>

                <tr className="border-b border-slate-800">
                  <td className="p-3">Marketing</td>
                  <td className="p-3">⚠️</td>
                  <td className="p-3">✅</td>
                </tr>

                <tr>
                  <td className="p-3">Dễ sử dụng</td>
                  <td className="p-3">✅</td>
                  <td className="p-3">✅</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Nên sử dụng loại nào?
            </h2>

            <h3 className="mb-4 text-xl font-semibold text-cyan-400">
              QR tĩnh phù hợp nếu:
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>✓ Website cá nhân</li>
              <li>✓ WiFi</li>
              <li>✓ Email hoặc số điện thoại</li>
              <li>✓ Danh bạ vCard</li>
              <li>✓ Facebook hoặc Zalo</li>
            </ul>

            <h3 className="mb-4 mt-8 text-xl font-semibold text-cyan-400">
              QR động phù hợp nếu:
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>✓ Marketing</li>
              <li>✓ Nhà hàng, quán cà phê</li>
              <li>✓ Sự kiện</li>
              <li>✓ Chiến dịch quảng cáo</li>
              <li>✓ Đo lường chiến dịch khi dịch vụ và thiết lập quyền riêng tư phù hợp</li>
            </ul>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              QRFree hỗ trợ loại nào?
            </h2>

            <p className="leading-8 text-slate-300">
              Hiện tại QRFree hỗ trợ tạo mã QR tĩnh miễn phí cho nhiều loại nội dung:
            </p>

            <ul className="mt-6 space-y-3 text-slate-300">
              <li>✓ Website URL</li>
              <li>✓ WiFi</li>
              <li>✓ Văn bản</li>
              <li>✓ Danh bạ vCard</li>
              <li>✓ Địa chỉ ví crypto</li>
            </ul>
          </section>

          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">Những rủi ro vận hành cần tính trước</h2>
            <p className="leading-8 text-slate-300">QR tĩnh không phụ thuộc máy chủ chuyển hướng của nhà cung cấp, nhưng địa chỉ đích vẫn có thể hỏng. QR động dễ đổi đích hơn, song nếu dịch vụ ngừng hoạt động, hết gói hoặc thay đổi điều khoản, mã đã in có thể mất chức năng chuyển hướng.</p>
            <p className="mt-4 leading-8 text-slate-300">Nếu chọn QR động, kiểm tra thời hạn lưu mã, giới hạn quét, cách xuất dữ liệu, khả năng đổi đích và chính sách lưu thông tin người quét trước khi đưa vào chiến dịch dài hạn.</p>
          </section>
          <section className="border-b border-white/10 pb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">Cách chọn theo vòng đời nội dung</h2>
            <ul className="space-y-3 text-slate-300">
              <li><strong className="text-white">Chọn QR tĩnh:</strong> đích ít thay đổi, cần mã hoạt động độc lập và có thể thay bản in nếu URL đổi.</li>
              <li><strong className="text-white">Cân nhắc QR động:</strong> cần đổi nhiều đích sau khi in, đo chiến dịch hoặc quản lý số lượng lớn từ một nền tảng.</li>
              <li><strong className="text-white">Trước khi ký gói:</strong> tính tổng chi phí duy trì và phương án dự phòng nếu nhà cung cấp ngừng dịch vụ.</li>
            </ul>
          </section>
        </article>

        <BlogPostFaq items={[
          {
                    "question": "QR tĩnh có thể đổi đích đến không?",
                    "answer": "Dữ liệu trong hình mã không sửa được. Nếu QR chứa URL do bạn quản lý, bạn có thể thay nội dung tại chính URL đó; khi URL thay đổi thì cần tạo mã mới."
          },
          {
                    "question": "QR động có luôn theo dõi vị trí người quét không?",
                    "answer": "Không. Thống kê và dữ liệu thu thập phụ thuộc nền tảng, cấu hình, quyền của thiết bị và chính sách riêng tư của nhà cung cấp."
          },
          {
                    "question": "QRFree tạo loại QR nào?",
                    "answer": "QRFree hiện tạo QR tĩnh: dữ liệu được mã hóa trực tiếp trong mã, không qua dịch vụ chuyển hướng do QRFree quản lý."
          }
]} />

        {/* CTA */}
        <section className="mt-16 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-10 text-center">
          <h2 className="text-3xl font-bold">
            Tạo mã QR miễn phí ngay hôm nay
          </h2>

          <p className="mt-4 text-slate-300">
            Hỗ trợ URL, Wi-Fi, văn bản, vCard và địa chỉ ví crypto.
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
              href="/blog/ma-qr-co-an-toan-khong"
              className="rounded-3xl border border-slate-800 bg-white/5 p-6 transition hover:border-cyan-500/40"
            >
              <h3 className="text-xl font-bold">
                Mã QR có an toàn không?
              </h3>
              <p className="mt-3 text-slate-400">
                Những lưu ý quan trọng khi quét mã QR.
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
              href="/blog/cach-tao-ma-qr-thanh-toan-ngan-hang"
              className="rounded-3xl border border-slate-800 bg-white/5 p-6 transition hover:border-cyan-500/40"
            >
              <h3 className="text-xl font-bold">
                Cách tạo mã QR thanh toán ngân hàng
              </h3>
              <p className="mt-3 text-slate-400">
                Tìm hiểu cách tạo mã thanh toán qua ứng dụng ngân hàng hoặc dịch vụ VietQR.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
