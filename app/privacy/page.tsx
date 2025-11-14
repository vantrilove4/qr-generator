export const metadata = {
  title: "Chính sách bảo mật | Privacy Policy | QRFree",
  description: "Chính sách bảo mật song ngữ (Việt – Anh) của QRFree.io.vn",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-10">
      <h1 className="text-3xl font-bold text-center">
        🛡️ Chính Sách Bảo Mật / Privacy Policy
      </h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Giới thiệu / Introduction</h2>
        <p>
          <strong>VI:</strong> Trang web <b>QRFree.io.vn</b> cam kết bảo vệ quyền riêng tư của người dùng.
        </p>
        <p>
          <strong>EN:</strong> <b>QRFree.io.vn</b> is committed to protecting the privacy of our users.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          2. Chúng tôi thu thập gì? / What information we collect?
        </h2>

        <p><strong>VI:</strong> Chúng tôi thu thập dữ liệu phi cá nhân phục vụ thống kê và cải thiện dịch vụ.</p>
        <p><strong>EN:</strong> We collect non-personal data for analytics and service improvement.</p>

        <ul className="list-disc ml-6">
          <li>Loại mã QR được tạo / QR types generated</li>
          <li>Trình duyệt & thiết bị / Browser & device info</li>
          <li>Số lượt tạo QR / QR generation count</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          3. Lưu trữ dữ liệu / Data Storage
        </h2>

        <p>
          <strong>VI:</strong> Lưu lịch sử QR bằng LocalStorage, không lưu nội dung mã QR trên server.
        </p>
        <p>
          <strong>EN:</strong> QR history is stored locally on your browser. We do not store QR content on our servers.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          4. Bảo mật / Security
        </h2>

        <p><strong>VI:</strong> Website sử dụng HTTPS và các biện pháp bảo mật tiêu chuẩn.</p>
        <p><strong>EN:</strong> We use HTTPS and standard security measures.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. Liên hệ / Contact</h2>

        <p>
           Email: nvantri93@gmail.com
          
        </p>
      </section>
    </div>
  );
}
