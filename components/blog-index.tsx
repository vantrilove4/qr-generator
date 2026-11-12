"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Search, ShieldCheck } from "lucide-react";
import { englishPosts } from "@/components/english-site";

const vietnamesePosts = [
  { title: "QR Code là gì? Cách hoạt động và cách tạo mã QR", description: "Tìm hiểu dữ liệu, sửa lỗi, khả năng quét và cách kiểm tra mã QR trước khi in.", href: "/blog/qrcode-la-gi", category: "Kiến thức QR", topic: "Kiến thức QR", time: "5 phút đọc" },
  { title: "Cách tạo mã QR WiFi miễn phí", description: "Chia sẻ WiFi nhanh chóng mà không cần đọc mật khẩu cho từng người.", href: "/blog/cach-tao-ma-qr-wifi", category: "QR WiFi", topic: "Tạo QR", time: "4 phút đọc" },
  { title: "Cách quét mã QR trên điện thoại", description: "Hướng dẫn quét QR trên iPhone, Android và từ ảnh đã lưu hoặc clipboard.", href: "/blog/quet-ma-qr-tren-dien-thoai", category: "QR Scanner", topic: "Quét QR", time: "4 phút đọc" },
  { title: "Mã QR có an toàn không?", description: "Nhận biết liên kết đáng ngờ và các bước giảm rủi ro khi quét mã.", href: "/blog/ma-qr-co-an-toan-khong", category: "Bảo mật", topic: "Bảo mật", time: "6 phút đọc" },
  { title: "Cách tạo mã QR Zalo miễn phí", description: "Chia sẻ đúng liên kết Zalo cá nhân hoặc OA và kiểm tra trước khi in.", href: "/blog/cach-tao-ma-qr-zalo", category: "QR Zalo", topic: "Tạo QR", time: "4 phút đọc" },
  { title: "Cách tạo mã QR Facebook miễn phí", description: "Tạo QR tới trang cá nhân hoặc Fanpage, kiểm tra quyền xem và liên kết.", href: "/blog/cach-tao-ma-qr-facebook", category: "QR Facebook", topic: "Tạo QR", time: "4 phút đọc" },
  { title: "Cách tạo mã QR thanh toán ngân hàng", description: "Tìm hiểu cách tạo mã thanh toán bằng ứng dụng ngân hàng hoặc dịch vụ VietQR.", href: "/blog/cach-tao-ma-qr-thanh-toan-ngan-hang", category: "VietQR", topic: "Tạo QR", time: "5 phút đọc" },
  { title: "QR động và QR tĩnh khác nhau thế nào?", description: "So sánh QR động và QR tĩnh để chọn loại phù hợp với nhu cầu.", href: "/blog/qr-dong-va-qr-tinh-khac-nhau-the-nao", category: "Kiến thức QR", topic: "Kiến thức QR", time: "6 phút đọc" },
  { title: "Cách tạo mã QR Google Maps miễn phí", description: "Chia sẻ địa điểm hoặc đường dẫn chỉ đường bằng QR.", href: "/blog/cach-tao-ma-qr-google-maps", category: "Google Maps", topic: "Tạo QR", time: "5 phút đọc" },
  { title: "Cách tạo mã QR cho file PDF", description: "Tạo QR cho link PDF, thiết lập quyền xem và giữ đường dẫn ổn định.", href: "/blog/cach-tao-ma-qr-pdf", category: "PDF QR", topic: "Tạo QR", time: "5 phút đọc" },
  { title: "Cách tạo mã QR danh thiếp (vCard)", description: "Chia sẻ tên và số điện thoại; thử lưu liên hệ trước khi in danh thiếp.", href: "/blog/cach-tao-ma-qr-danh-thiep-vcard", category: "vCard", topic: "Tạo QR", time: "6 phút đọc" },
  { title: "Những lỗi thường gặp khi quét mã QR", description: "Cách xử lý khi camera không nhận mã hoặc ảnh QR khó đọc.", href: "/blog/nhung-loi-thuong-gap-khi-quet-ma-qr", category: "QR Scanner", topic: "Quét QR", time: "6 phút đọc" },
];

const topicsVi = ["Tất cả", "Tạo QR", "Quét QR", "Kiến thức QR", "Bảo mật"];
const englishTopics = ["All", "Create QR", "Scan QR", "QR basics", "Security"];

export default function BlogIndex() {
  const isEnglish = (usePathname() || "").startsWith("/en");
  const posts = useMemo(() => isEnglish
    ? englishPosts.map((post) => ({
        title: post.title,
        description: post.description,
        href: `/en/blog/${post.slug}`,
        category: post.category,
        topic: post.category === "Security" ? "Security" : post.category === "QR basics" ? "QR basics" : post.category === "QR scanner" ? "Scan QR" : "Create QR",
        time: post.readTime,
      }))
    : vietnamesePosts, [isEnglish]);
  const topics = isEnglish ? englishTopics : topicsVi;
  const allTopic = isEnglish ? "All" : "Tất cả";
  const featuredSlug = "ma-qr-co-an-toan-khong";
  const featuredPost = posts.find((post) => post.href.endsWith(featuredSlug))!;
  const [activeTopic, setActiveTopic] = useState(allTopic);
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLocaleLowerCase(isEnglish ? "en-US" : "vi-VN");
  const visiblePosts = useMemo(() => posts.filter((post) => {
    const matchesTopic = activeTopic === allTopic || post.topic === activeTopic;
    const searchable = `${post.title} ${post.description} ${post.category}`.toLocaleLowerCase(isEnglish ? "en-US" : "vi-VN");
    return matchesTopic && (!normalizedQuery || searchable.includes(normalizedQuery));
  }), [posts, activeTopic, allTopic, isEnglish, normalizedQuery]);
  const showFeatured = activeTopic === allTopic && !normalizedQuery;
  const listPosts = showFeatured ? visiblePosts.filter((post) => post.href !== featuredPost.href) : visiblePosts;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <Link href={isEnglish ? "/en" : "/"} className="text-xl font-extrabold tracking-tight">QR<span className="text-cyan-400">Free</span></Link>
          <nav aria-label={isEnglish ? "Main navigation" : "Điều hướng chính"} className="hidden items-center gap-6 text-sm font-medium text-slate-300 sm:flex">
            <Link href={isEnglish ? "/en/generate" : "/generate"} className="hover:text-white">{isEnglish ? "Create QR" : "Tạo QR"}</Link>
            <Link href={isEnglish ? "/en/scan" : "/scan"} className="hover:text-white">{isEnglish ? "Scan QR" : "Quét QR"}</Link>
          </nav>
          <Link href={isEnglish ? "/en/generate" : "/generate"} className="rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300">{isEnglish ? "Create QR Code" : "Tạo mã QR"}</Link>
        </header>

        <section className="mx-auto max-w-7xl px-5 pb-10 pt-10 sm:px-8 sm:pt-14">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-300">QRFree Blog</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">{isEnglish ? <>QR Code <span className="text-cyan-400">guides</span></> : <>Kiến thức về <span className="text-cyan-400">mã QR</span></>}</h1>
          <p className="mt-4 max-w-2xl leading-7 text-slate-300">{isEnglish ? "Guides to creating and scanning QR Codes, security, and practical ways to use them." : "Hướng dẫn tạo và quét mã QR, cùng những lưu ý về bảo mật và cách sử dụng trong đời sống."}</p>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-8 sm:px-8" aria-label={isEnglish ? "Search and filter articles" : "Tìm và lọc bài viết"}>
          <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-white/[0.04] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
            <div className="flex flex-wrap gap-2" role="group" aria-label={isEnglish ? "Filter by topic" : "Lọc theo chủ đề"}>
              {topics.map((topic) => (
                <button key={topic} type="button" onClick={() => setActiveTopic(topic)} aria-pressed={activeTopic === topic} className={`rounded-full px-3.5 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${activeTopic === topic ? "bg-cyan-400 text-slate-950" : "border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"}`}>
                  {topic}
                </button>
              ))}
            </div>
            <label className="relative block w-full sm:max-w-xs">
              <span className="sr-only">{isEnglish ? "Search articles" : "Tìm bài viết"}</span>
              <Search aria-hidden="true" size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={isEnglish ? "Search articles…" : "Tìm bài viết…"} className="w-full rounded-xl border border-slate-700 bg-slate-950/70 py-2.5 pl-10 pr-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20" />
            </label>
          </div>
        </section>

        {showFeatured && <section className="mx-auto max-w-7xl px-5 pb-10 sm:px-8" aria-labelledby="featured-title">
          <Link href={featuredPost.href} className="group grid gap-6 rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-white/[0.03] p-6 transition hover:border-cyan-300/50 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-8">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300"><ShieldCheck size={28} /></span>
            <span>
              <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300">{isEnglish ? "Featured guide" : "Bài nên đọc"} · {featuredPost.time}</span>
              <span id="featured-title" className="mt-2 block text-2xl font-bold">{featuredPost.title}</span>
              <span className="mt-2 block leading-7 text-slate-300">{featuredPost.description}</span>
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-cyan-300">{isEnglish ? "Read guide" : "Đọc bài"} <ArrowRight size={17} className="transition group-hover:translate-x-1" /></span>
          </Link>
        </section>}

        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8" aria-label={isEnglish ? "Article list" : "Danh sách bài viết"}>
          <div className="mb-5 flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold">{activeTopic === allTopic ? (isEnglish ? "All articles" : "Tất cả bài viết") : activeTopic}</h2>
            <p className="text-sm text-slate-400">{listPosts.length + (showFeatured ? 1 : 0)} {isEnglish ? "articles" : "bài viết"}</p>
          </div>
          {listPosts.length > 0 ? <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {listPosts.map((post) => (
              <Link key={post.href} href={post.href} className="group flex min-h-[230px] flex-col rounded-3xl border border-slate-800 bg-white/[0.04] p-6 transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                <span className="w-fit rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">{post.category}</span>
                <span className="mt-5 text-xl font-bold leading-snug transition group-hover:text-cyan-300">{post.title}</span>
                <span className="mt-3 leading-7 text-slate-300">{post.description}</span>
                <span className="mt-auto flex items-center justify-between pt-5 text-sm text-slate-400"><span>{post.time}</span><ArrowRight size={17} className="text-cyan-300 transition group-hover:translate-x-1" /></span>
              </Link>
            ))}
          </div> : <div className="rounded-2xl border border-slate-800 bg-white/[0.03] px-5 py-12 text-center">
            <p className="font-semibold text-slate-200">{isEnglish ? "No matching articles found" : "Chưa tìm thấy bài phù hợp"}</p>
            <p className="mt-2 text-sm text-slate-400">{isEnglish ? "Try another search or choose a different topic." : "Thử từ khóa khác hoặc chọn một chủ đề khác."}</p>
            <button type="button" onClick={() => { setQuery(""); setActiveTopic(allTopic); }} className="mt-4 text-sm font-semibold text-cyan-300 hover:text-cyan-200">{isEnglish ? "Clear filters" : "Xóa bộ lọc"}</button>
          </div>}
        </section>

        <section className="mx-auto max-w-5xl px-5 pb-20 sm:px-8">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-7 text-center sm:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">{isEnglish ? "Ready to make a QR Code?" : "Bạn đã sẵn sàng tạo mã QR?"}</h2>
            <p className="mt-3 text-slate-300">{isEnglish ? "Create or scan a QR Code for free in your browser." : "Dùng công cụ tạo hoặc quét QR miễn phí ngay trên trình duyệt."}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href={isEnglish ? "/en/generate" : "/generate"} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">{isEnglish ? "Create QR Code" : "Tạo mã QR"}</Link>
              <Link href={isEnglish ? "/en/scan" : "/scan"} className="rounded-xl border border-cyan-300/30 px-5 py-3 font-bold text-white transition hover:bg-white/5">{isEnglish ? "Scan QR Code" : "Quét mã QR"}</Link>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
          <p>© 2026 QRFree.io.vn · {isEnglish ? "QR Code blog" : "Blog về mã QR"}</p>
          <nav aria-label={isEnglish ? "Additional links" : "Liên kết bổ sung"} className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2">
            <Link href={isEnglish ? "/en" : "/"}>{isEnglish ? "Home" : "Trang chủ"}</Link><Link href={isEnglish ? "/en/generate" : "/generate"}>{isEnglish ? "Create QR" : "Tạo QR"}</Link><Link href={isEnglish ? "/en/scan" : "/scan"}>{isEnglish ? "Scan QR" : "Quét QR"}</Link><Link href={isEnglish ? "/en/contact" : "/contact"}>{isEnglish ? "Contact" : "Liên hệ"}</Link>
          </nav>
        </footer>
      </div>
    </main>
  );
}
