import Link from "next/link";
import type { Metadata } from "next";

type BlogPostFaqItem = {
  question: string;
  answer: string;
};

export function BlogBreadcrumb({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-400">
      <Link href="/" className="transition hover:text-white">Trang chủ</Link>
      <span aria-hidden="true">/</span>
      <Link href="/blog" className="transition hover:text-white">Blog</Link>
      <span aria-hidden="true">/</span>
      <span aria-current="page" className="max-w-full text-slate-200">{current}</span>
    </nav>
  );
}

export function BlogPostSeo({
  metadata,
  path,
  currentTitle,
}: {
  metadata: Metadata;
  path: string;
  currentTitle: string;
}) {
  const description = typeof metadata.description === "string" ? metadata.description : "";
  const baseUrl = "https://qrfree.io.vn";
  const url = `${baseUrl}${path}`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: currentTitle,
        description,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        author: { "@type": "Organization", name: "QRFree", url: `${baseUrl}/about` },
        publisher: {
          "@type": "Organization",
          name: "QRFree",
          url: baseUrl,
          logo: { "@type": "ImageObject", url: `${baseUrl}/makeqr.png` },
        },
        inLanguage: "vi-VN",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Trang chủ", item: baseUrl },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
          { "@type": "ListItem", position: 3, name: currentTitle, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data).replace(/</g, "\\u003c"),
        }}
      />
      <BlogBreadcrumb current={currentTitle} />
    </>
  );
}

export function BlogPostFaq({ items }: { items: BlogPostFaqItem[] }) {
  return (
    <section id="faq" className="mt-12 border-t border-white/10 pt-8" aria-labelledby="faq-title">
      <h2 id="faq-title" className="mb-5 text-2xl font-bold tracking-tight sm:text-3xl">
        Câu hỏi thường gặp
      </h2>
      <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.025] px-5 sm:px-6">
        {items.map(({ question, answer }) => (
          <details key={question} className="group py-4">
            <summary className="cursor-pointer list-none pr-8 font-semibold text-slate-100 marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
              <span className="flex items-start justify-between gap-4">
                {question}
                <span aria-hidden="true" className="text-cyan-300 transition group-open:rotate-45">＋</span>
              </span>
            </summary>
            <p className="mt-3 max-w-3xl leading-7 text-slate-300">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
