import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import BlogIndex from "@/components/blog-index";
import QrGenerator from "@/components/qr-generator";
import QrScanner from "@/components/qr-scanner";
import {
  EnglishBlogArticle,
  EnglishHome,
  EnglishStaticPage,
  englishPosts,
} from "@/components/english-site";

const origin = "https://qrfree.io.vn";

const staticMetadata: Record<string, { title: string; description: string }> = {
  "": {
    title: "Free QR Code Generator and Scanner",
    description: "Create static QR Codes for links, text, Wi-Fi, contacts, and wallet addresses. Customize, download, and scan QR Codes online for free.",
  },
  generate: {
    title: "Free QR Code Generator",
    description: "Create a static QR Code for a website, text, Wi-Fi, contact, or crypto wallet. Customize colors, add a logo, and download PNG or PDF.",
  },
  scan: {
    title: "Free Online QR Code Scanner",
    description: "Scan QR Codes with your camera, an uploaded or pasted image, or a selected area of your screen.",
  },
  blog: {
    title: "QR Code Guides and Tutorials",
    description: "Practical guides to creating and scanning QR Codes, Wi-Fi sharing, QR security, and common use cases.",
  },
  about: { title: "About QRFree", description: "Learn about QRFree's free online QR Code generator and scanner." },
  contact: { title: "Contact QRFree", description: "Contact QRFree for support, bug reports, or suggestions." },
  privacy: { title: "Privacy Policy", description: "Read how QRFree processes QR content and handles local history and service analytics." },
  terms: { title: "Terms of Use", description: "Terms for using QRFree's free QR Code creation and scanning tools." },
};

function metadataFor(path: string): Metadata {
  const article = path.startsWith("blog/")
    ? englishPosts.find((post) => post.slug === path.slice("blog/".length))
    : undefined;
  const meta = article
    ? { title: article.title, description: article.description }
    : staticMetadata[path];
  if (!meta) return {};

  const canonical = `${origin}/en${path ? `/${path}` : ""}`;
  const vietnamese = `${origin}${path ? `/${path}` : "/"}`;
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages: { "en-US": canonical, "vi-VN": vietnamese, "x-default": vietnamese },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      siteName: "QRFree",
      locale: "en_US",
      alternateLocale: ["vi_VN"],
      type: article ? "article" : "website",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "QRFree QR Code tools" }],
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description, images: ["/og-image.png"] },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug = [] } = await params;
  return metadataFor(slug.join("/"));
}

export default async function EnglishRoute({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  const path = slug.join("/");

  if (!path) return <EnglishHome />;
  if (path === "generate") return <QrGenerator />;
  if (path === "blog") return <BlogIndex />;
  if (path.startsWith("blog/")) {
    const post = englishPosts.find((item) => item.slug === path.slice("blog/".length));
    return post ? <EnglishBlogArticle post={post} /> : notFound();
  }
  if (path === "about" || path === "contact" || path === "privacy" || path === "terms") {
    return <EnglishStaticPage page={path} />;
  }
  if (path === "scan") {
    return (
      <main className="min-h-screen bg-[#f5f7fb]">
        <div className="mx-auto flex min-h-screen max-w-[1200px] items-start px-4 py-8 sm:px-6 lg:py-12">
          <div className="grid w-full items-start gap-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-8">
            <div className="flex flex-col justify-center">
              <Link href="/en/generate" className="mb-8 w-fit rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">← Create QR</Link>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl">Free online QR Code scanner</h1>
              <p className="mt-5 max-w-sm text-base leading-7 text-zinc-500">Scan with your camera, upload or paste an image, or select the QR area on your screen.</p>
              <ul className="mt-7 space-y-3 text-sm text-zinc-600">
                <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> No sign-up required</li>
                <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> QR content is read in your browser</li>
                <li className="flex items-center gap-2"><span className="text-emerald-600">✓</span> Copy results with one click</li>
              </ul>
            </div>
            <QrScanner />
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "QRFree QR Code Scanner",
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Web Browser",
          description: "Scan QR Codes online using your camera, an uploaded image, or a selected area of your screen.",
          url: `${origin}/en/scan`,
          inLanguage: "en-US",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }).replace(/</g, "\\u003c") }} />
      </main>
    );
  }
  return notFound();
}
