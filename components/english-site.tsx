import Link from "next/link";
import { ArrowRight, QrCode, ScanLine, ShieldCheck } from "lucide-react";

export type EnglishPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  intro: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
  faq: { question: string; answer: string }[];
};

export const englishPosts: EnglishPost[] = [
  {
    slug: "qrcode-la-gi", title: "What Is a QR Code? How It Works and How to Create One", description: "Learn how QR codes store information, how scanning works, and how to create a static QR code.", category: "QR basics", readTime: "5 min read",
    intro: "A QR Code is a two-dimensional barcode that stores information in a pattern of square modules. A phone camera can read the pattern and show the encoded text or open a link.",
    sections: [
      { heading: "How does a QR Code work?", body: "A scanner locates the three large finder patterns, reads the modules, and uses error correction to recover some damaged data. A QR Code can contain text or a URL. If it contains a URL, review the address before opening it." },
      { heading: "What can you use one for?", body: "Common uses include sharing a website, Wi-Fi access, contact details, a document link, or a short piece of text. The destination or data should be checked before the code is printed." },
      { heading: "Create and check a QR Code", body: "Choose a content type, enter the details, customize the appearance if needed, and generate the code. Scan the downloaded image with another phone and test the printed copy at its intended size." },
      { heading: "Keep the code easy to scan", body: "Longer data creates a denser pattern, which can be harder to read when printed small. Keep a clear margin around the code, use strong contrast, and avoid covering important modules with a logo." },
    ],
    faq: [
      { question: "Does a static QR Code expire?", answer: "The code has no built-in expiry date. A URL inside it may stop working if the destination page is deleted, moved, or made private." },
      { question: "What does QRFree create?", answer: "QRFree creates static codes for URLs, text, Wi-Fi, basic vCards, and cryptocurrency wallet addresses." },
    ],
  },
  {
    slug: "cach-tao-ma-qr-wifi", title: "How to Create a Wi-Fi QR Code", description: "Share Wi-Fi access without asking guests to type a long password, and check the security settings first.", category: "Wi-Fi QR", readTime: "4 min read",
    intro: "A Wi-Fi QR Code stores the network name, password, and security type. Compatible phones can offer to join the network after scanning; the exact prompt depends on the phone and camera app.",
    sections: [
      { heading: "Create the code", body: "Open the QR generator, select Wi-Fi, enter the exact SSID and password, choose the security type used by the router, and generate the code. Scan it with a second device before sharing." },
      { heading: "Check the network details", body: "Network names and passwords can be case-sensitive. Check spaces, punctuation, and whether the network uses WPA/WPA2, WEP, or no password. QRFree does not currently include fields for hidden networks or enterprise sign-in." },
      { heading: "Share it safely", body: "A Wi-Fi QR Code reveals the network credentials to anyone who can access it. Consider using a guest network when displaying a code in a café, office, or other shared space." },
    ],
    faq: [
      { question: "Why does my Wi-Fi QR Code fail to connect?", answer: "Check the SSID, password, and security type against the router settings. Generate a new code if the network password has changed." },
      { question: "Should I print a code for my main network?", answer: "If many people can see the code, a separate guest network can make access easier to manage." },
    ],
  },
  {
    slug: "quet-ma-qr-tren-dien-thoai", title: "How to Scan a QR Code on iPhone and Android", description: "Scan a QR Code with your phone camera, from a saved image, or from a copied picture.", category: "QR scanner", readTime: "4 min read",
    intro: "Most recent iPhone and Android phones can scan QR Codes with the built-in camera. If the code is already in a picture, use an image-scanning option instead of pointing the camera at the same screen.",
    sections: [
      { heading: "Scan with the camera", body: "Open the Camera app, point it steadily at the full code, and wait for the link or action prompt. Tap only after checking that the destination is the one you expect." },
      { heading: "Scan a saved or copied image", body: "Use a photo app or a browser-based scanner to read a QR Code from a saved image. QRFree can scan an uploaded picture, a pasted image from the clipboard, or a selected area of a screen capture." },
      { heading: "If the camera cannot read it", body: "Move closer or farther away, improve the lighting, clean the camera lens, and make sure the entire code and its clear margin are visible. A screenshot or clearer image may be easier to scan." },
    ],
    faq: [
      { question: "Do I need a separate QR app?", answer: "Many phones include QR scanning in the Camera app. If yours does not, use a trusted scanner or a browser-based tool." },
      { question: "Can I scan a QR Code shown on my own phone?", answer: "Yes. Save or copy the image, then scan it with an image-reading tool or another device." },
    ],
  },
  {
    slug: "ma-qr-co-an-toan-khong", title: "Are QR Codes Safe? How to Avoid QR Phishing", description: "Understand the risks behind QR links and check the destination before entering personal information.", category: "Security", readTime: "6 min read",
    intro: "A QR Code is a way to encode data; the risk depends on what it contains and what you do after scanning. A code can open a fake sign-in page, an unexpected payment page, or another misleading destination.",
    sections: [
      { heading: "Preview the destination", body: "Before opening a link, check its domain for misspellings or unexpected characters. Be cautious when a code asks you to act urgently, sign in, download an app, or enter payment details." },
      { heading: "Check codes in public places", body: "A sticker can be placed over a legitimate QR Code on a parking meter, table, or poster. Check that the printed code has not been covered or replaced." },
      { heading: "Use a trusted route for sensitive tasks", body: "For banking, account access, or payments, open the official app or type the known website address yourself. Do not rely on an unexpected QR code in an email or text message." },
    ],
    faq: [
      { question: "Can scanning a QR Code alone steal my password?", answer: "The main risk is usually the destination or action that follows, such as entering credentials on a spoofed page. Review the link and do not submit sensitive details unless you trust the site." },
      { question: "What should I do if the code looks suspicious?", answer: "Do not open the link or enter information. Reach the organization through a website or phone number you already know." },
    ],
  },
  {
    slug: "cach-tao-ma-qr-zalo", title: "How to Create a QR Code for Zalo", description: "Share a Zalo personal profile or Official Account with a QR Code and test the link before printing.", category: "Zalo QR", readTime: "4 min read",
    intro: "A QR Code can open a Zalo profile or Official Account link, making it easier for customers or contacts to find the right account without typing its name.",
    sections: [
      { heading: "Choose the right Zalo link", body: "Open the profile or Official Account you want people to reach and copy its share link. Check that it points to the intended account rather than an editing or administration page." },
      { heading: "Generate and test the QR Code", body: "Paste the copied URL into the QR generator, create the code, and scan it with a phone that is not logged into the same account. Confirm the profile name and visibility before printing." },
      { heading: "Add a clear call to action", body: "Place a short note such as “Scan to contact us” beside the code. Keep the QR image large enough and retain clear space around it." },
    ],
    faq: [
      { question: "Can a Zalo QR Code open a personal profile?", answer: "Yes, if the code contains a working share link to that profile and its visibility settings allow the viewer to access it." },
      { question: "Why does the code open the wrong account?", answer: "Recheck the copied link and scan the final image before sharing or printing." },
    ],
  },
  {
    slug: "cach-tao-ma-qr-facebook", title: "How to Create a QR Code for Facebook", description: "Create a QR Code for a Facebook profile or Page and check that people can view the destination.", category: "Facebook QR", readTime: "4 min read",
    intro: "A Facebook QR Code can send people to a profile or Page. The QR Code does not change the privacy settings of that destination, so test the link from another account before printing it.",
    sections: [
      { heading: "Copy the correct Facebook URL", body: "Open the profile or Page you want to share and copy its public link. Check the account name and avoid copying an administrative or private URL." },
      { heading: "Create and scan the QR Code", body: "Paste the URL into the generator, create the code, and scan it from a phone that is not signed in as the owner. Confirm that the destination is visible to the intended audience." },
      { heading: "Use it on printed materials", body: "Add a short instruction next to the code and print a test copy. Use a high-contrast design and avoid covering the QR modules with a logo." },
    ],
    faq: [
      { question: "Can I create a code for a Facebook Page?", answer: "Yes. Use the Page's public link and verify its visibility before sharing the QR Code." },
      { question: "Will the QR Code change Facebook privacy settings?", answer: "No. It only encodes the link you provide; Facebook controls who can view the destination." },
    ],
  },
  {
    slug: "cach-tao-ma-qr-thanh-toan-ngan-hang", title: "Bank Transfer QR Codes in Vietnam: VietQR Basics", description: "Learn how to create or scan a Vietnamese bank-transfer QR Code and verify the payment details before sending money.", category: "VietQR", readTime: "5 min read",
    intro: "In Vietnam, banking apps and compatible payment services can create QR Codes that prefill some transfer details. This guide is intended for people using Vietnamese bank-transfer services; availability and supported fields depend on the bank or payment app.",
    sections: [
      { heading: "Use a bank or trusted payment app", body: "For a transfer QR Code, start from the official banking or payment application. Select the recipient account and enter any amount or reference details offered by that app." },
      { heading: "Verify before confirming", body: "After scanning, compare the recipient name, account number, bank, amount, and transfer note with the information you were given. A QR Code does not guarantee that the recipient is legitimate." },
      { heading: "Do not confuse transfer and merchant payments", body: "A bank-transfer code and a merchant payment code can lead to different payment flows. Confirm the intended recipient and transaction in your banking app before authorizing it." },
    ],
    faq: [
      { question: "Should I create a payment QR with a general QR generator?", answer: "Use your bank or a trusted payment provider for payment instructions. A general QR generator only encodes data and does not validate a bank account." },
      { question: "Can a transfer QR Code contain a fixed amount?", answer: "Some bank apps support a preset amount or payment note. The available fields depend on the app and QR format." },
    ],
  },
  {
    slug: "qr-dong-va-qr-tinh-khac-nhau-the-nao", title: "Static vs Dynamic QR Codes: What Is the Difference?", description: "Compare static and dynamic QR Codes, including editable destinations, hosting, costs, and when each is appropriate.", category: "QR basics", readTime: "6 min read",
    intro: "A static QR Code stores its data directly in the symbol. A dynamic QR Code generally points to a redirect service, which can let the owner change the destination and collect scan analytics.",
    sections: [
      { heading: "Static QR Codes", body: "A static code is useful when its content is stable, such as Wi-Fi details, contact information, or a permanent URL. If the encoded link changes, the QR image must be generated again." },
      { heading: "Dynamic QR Codes", body: "A dynamic code can use a short redirect address that the service owner manages. Editing and scan reports depend on the provider, plan, and continued availability of the redirect service." },
      { heading: "Which type should you choose?", body: "Choose static for stable content and a code that does not depend on an account service. Consider dynamic when the destination must change after printing, and check the service terms and fees first." },
    ],
    faq: [
      { question: "Can I edit a static QR Code after printing?", answer: "No. The data is embedded in the symbol, so changing the destination requires a new code and usually a new print." },
      { question: "Does QRFree make dynamic QR Codes?", answer: "QRFree currently creates static QR Codes. It does not provide redirect-based editing or scan analytics." },
    ],
  },
  {
    slug: "cach-tao-ma-qr-google-maps", title: "How to Create a QR Code for a Google Maps Location", description: "Share a place, business, or set of directions with a QR Code and verify the map pin before printing.", category: "Google Maps", readTime: "5 min read",
    intro: "A Google Maps QR Code contains a link to a place or directions. The quality of the result depends on choosing and checking the right location link before generating the code.",
    sections: [
      { heading: "Copy the location link", body: "Find the place in Google Maps, check its name and map pin, then use the Share option to copy the link. For a private or unlisted destination, check whether the viewer will be able to access it." },
      { heading: "Create and test the code", body: "Paste the map link into the URL field, generate the QR Code, and scan it on another phone. Confirm that it opens the intended place or route rather than a nearby result." },
      { heading: "Use a short instruction", body: "For a shop, event, or printed invitation, add a note such as “Scan for directions.” Print a test copy and scan it at the distance visitors will use." },
    ],
    faq: [
      { question: "Can a QR Code open turn-by-turn directions?", answer: "It can open a Maps link that contains a location or route. The exact screen depends on the link and the device's map app." },
      { question: "Will the code update if I move my business?", answer: "A static QR Code keeps the link that was encoded. Generate a new code if the destination URL needs to change." },
    ],
  },
  {
    slug: "cach-tao-ma-qr-pdf", title: "How to Create a QR Code That Links to a PDF", description: "Create a QR Code for a publicly accessible PDF link and test access from a different device.", category: "PDF QR", readTime: "5 min read",
    intro: "A QR Code usually contains a URL to a PDF hosted online; it does not store the whole document. Anyone who scans it needs a working link and permission to view the file.",
    sections: [
      { heading: "Host the PDF and copy its link", body: "Upload the document to a hosting service or your website, set the access permissions, and copy the viewer link rather than an editing link." },
      { heading: "Create and test the QR Code", body: "Paste the share URL into the QR generator and create the code. Test it in a private browser window or on a device signed out of the file owner's account." },
      { heading: "Keep the destination stable", body: "If you replace or move the PDF, check whether its public URL stays the same. QRFree creates a static code, so a changed URL requires a new QR image." },
    ],
    faq: [
      { question: "Does the QR Code contain the PDF file?", answer: "No. QRFree encodes a link; the PDF must remain available at that destination." },
      { question: "Why does the file ask viewers to sign in?", answer: "The hosting service may restrict access. Review the sharing permissions and test the link from a separate account." },
    ],
  },
  {
    slug: "cach-tao-ma-qr-danh-thiep-vcard", title: "How to Create a QR Code Business Card (vCard)", description: "Share contact details with a vCard QR Code and test how the phone displays the contact before printing.", category: "vCard", readTime: "6 min read",
    intro: "A vCard QR Code can provide contact details that a compatible phone may offer to save as a new contact. QRFree currently supports a name and phone number in its vCard form.",
    sections: [
      { heading: "Enter accurate contact details", body: "Check the spelling of the name and use a phone number format that recipients can recognize. Avoid putting information in the code that you do not want to share publicly." },
      { heading: "Scan and save a test contact", body: "Scan the generated image with another phone and review the contact preview before saving. Different camera apps may display contact fields differently." },
      { heading: "Add a short instruction to the printed card", body: "A note such as “Scan to save my contact” explains what will happen. Keep the code at a practical size and leave clear space around it." },
    ],
    faq: [
      { question: "Can someone save my details directly from the code?", answer: "A compatible device may display a contact preview and let the user choose whether to save it." },
      { question: "What contact fields does QRFree support?", answer: "The current form supports a name and phone number." },
    ],
  },
  {
    slug: "nhung-loi-thuong-gap-khi-quet-ma-qr", title: "Common QR Code Scanning Problems and How to Fix Them", description: "Troubleshoot camera, image, print, and destination issues when a QR Code will not scan or open.", category: "QR scanner", readTime: "6 min read",
    intro: "When a QR Code does not work, the problem may be the camera, the printed symbol, the image, or the destination website. Check each part separately to find the cause.",
    sections: [
      { heading: "The camera cannot recognize the code", body: "Clean the camera lens, improve lighting, hold the phone steady, and show the complete code with its clear margin. If the code is on the same phone, scan the saved image instead." },
      { heading: "The image or printed code is unclear", body: "Avoid a blurry screenshot, stretching, low contrast, or a code that is too small. Try the original image or generate a new code from the source link." },
      { heading: "The QR scans but the page fails", body: "A successful scan only means the data was read. Check the URL, network connection, destination availability, and any sign-in or access restrictions." },
      { heading: "Test before distributing", body: "Scan the final exported file and a sample print on another phone. Confirm the content and destination, not just the appearance of the QR pattern." },
    ],
    faq: [
      { question: "Why does a QR Code scan but show an error page?", answer: "The code may contain a valid URL whose page is offline, moved, or access-restricted. Check the destination separately." },
      { question: "Can I scan a QR Code from a screenshot?", answer: "Yes. Upload or paste the screenshot into an image-capable scanner and select the code if needed." },
    ],
  },
];

const origin = "https://qrfree.io.vn";

export function EnglishHome() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden"><div className="absolute left-1/2 top-[-180px] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" /></div>
      <div className="relative z-10">
        <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 sm:py-5">
          <Link href="/en" className="flex items-center gap-3" aria-label="QRFree home"><img src="/makeqr.png" alt="" width={44} height={44} className="h-11 w-11 rounded-xl object-cover" /><span className="text-xl font-extrabold">QR<span className="text-cyan-400">Free</span></span></Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex"><Link href="/en/generate">Create QR</Link><Link href="/en/scan">Scan QR</Link><Link href="/en/blog">Blog</Link></nav>
          <Link href="/en/generate" className="rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950">Get started <ArrowRight size={16} className="ml-1 inline" /></Link>
        </header>
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">Free QR tools</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">Create and scan<span className="mt-1 block text-cyan-400">QR Codes with ease</span></h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">Create QR Codes for websites, Wi-Fi, text, contacts, and crypto wallets. Scan with your camera, upload an image, or paste a copied picture.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/en/generate" className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-bold text-slate-950"><QrCode size={19} /> Create a QR Code</Link><Link href="/en/scan" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 bg-white/5 px-6 py-3.5 font-semibold"><ScanLine size={19} /> Scan a QR Code</Link></div>
            <div className="mt-7 flex flex-wrap gap-5 text-sm text-slate-400"><span>✓ Free to use</span><span>✓ No sign-up required</span><span>✓ Works in your browser</span></div>
          </div>
          <div className="mx-auto w-full max-w-md rounded-[2rem] border border-cyan-400/20 bg-white/[0.04] p-5 shadow-2xl"><div className="rounded-3xl bg-white p-5 text-slate-900"><div className="flex items-center justify-between"><div><p className="font-bold">Static QR Code</p><p className="mt-1 text-xs text-slate-500">Ready to scan</p></div><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Preview</span></div><img src="/qr-demo.png" alt="Example QR Code generated with QRFree" className="mx-auto mt-4 aspect-square w-full max-w-[320px] rounded-xl object-contain" /><div className="mt-4 flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5 text-xs text-slate-600"><ShieldCheck size={16} className="text-emerald-600" /> Create and read codes in your browser</div></div></div>
        </section>
        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8"><h2 className="mb-6 text-2xl font-bold sm:text-3xl">What would you like to do?</h2><div className="grid gap-4 md:grid-cols-2">
          <Link href="/en/generate" className="rounded-3xl border border-cyan-400/20 bg-white/[0.04] p-7"><QrCode size={26} className="text-cyan-300"/><h3 className="mt-4 text-xl font-bold">Create a QR Code</h3><p className="mt-2 leading-7 text-slate-300">Make a code for a URL, Wi-Fi network, text, contact, or wallet. Customize its colors, add a logo, and download PNG or PDF.</p></Link>
          <Link href="/en/scan" className="rounded-3xl border border-blue-400/20 bg-white/[0.04] p-7"><ScanLine size={26} className="text-blue-300"/><h3 className="mt-4 text-xl font-bold">Scan a QR Code</h3><p className="mt-2 leading-7 text-slate-300">Scan with your camera, upload an image, select an area of your screen, or paste a QR image from the clipboard.</p></Link>
        </div></section>
        <footer className="border-t border-slate-800 px-5 py-8 text-center text-sm text-slate-500"><p>© 2026 QRFree.io.vn · Free QR Code tools</p><nav aria-label="Additional links" className="mt-4 flex flex-wrap justify-center gap-5"><Link href="/en/about">About</Link><Link href="/en/contact">Contact</Link><Link href="/en/privacy">Privacy</Link><Link href="/en/terms">Terms</Link><Link href="/en/blog">Blog</Link></nav></footer>
      </div>
    </main>
  );
}

export function EnglishBlogArticle({ post }: { post: EnglishPost }) {
  const path = `/en/blog/${post.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    inLanguage: "en-US",
    mainEntityOfPage: `${origin}${path}`,
    author: { "@type": "Organization", name: "QRFree", url: `${origin}/en/about` },
    publisher: { "@type": "Organization", name: "QRFree", url: origin },
  };
  return (
    <main className="min-h-screen bg-[#020617] text-white"><div className="relative z-10 mx-auto max-w-5xl px-5 py-14 sm:px-8">
      <nav aria-label="Breadcrumb" className="mb-8 flex gap-2 text-sm text-slate-400"><Link href="/en">Home</Link><span>/</span><Link href="/en/blog">Blog</Link><span>/</span><span aria-current="page" className="text-slate-200">{post.title}</span></nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <header className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8"><span className="rounded-full bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">{post.category}</span><h1 className="mt-6 text-3xl font-extrabold leading-tight sm:text-5xl">{post.title}</h1><div className="mt-5 flex gap-6 text-sm text-slate-400"><span>By QRFree</span><span>{post.readTime}</span></div><p className="mt-6 leading-8 text-slate-300">{post.intro}</p></header>
      <article className="mx-auto mt-10 max-w-3xl space-y-9">{post.sections.map((section) => <section key={section.heading} className="border-b border-white/10 pb-8"><h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">{section.heading}</h2><p className="leading-8 text-slate-300">{section.body}</p>{section.bullets && <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-300">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}</article>
      <section className="mx-auto mt-12 max-w-3xl border-t border-white/10 pt-8"><h2 className="mb-5 text-2xl font-bold">Frequently asked questions</h2><div className="divide-y divide-white/10 rounded-2xl border border-white/10 px-5">{post.faq.map((item) => <details key={item.question} className="group py-4"><summary className="cursor-pointer font-semibold text-slate-100">{item.question}</summary><p className="mt-3 leading-7 text-slate-300">{item.answer}</p></details>)}</div></section>
      <section className="mx-auto mt-14 max-w-3xl rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-8 text-center"><h2 className="text-2xl font-bold">Create a QR Code for your own content</h2><p className="mt-3 text-slate-300">Generate a static QR Code in your browser, then scan it before sharing.</p><Link href="/en/generate" className="mt-6 inline-flex rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950">Create a QR Code</Link></section>
    </div></main>
  );
}

export function EnglishStaticPage({ page }: { page: "about" | "contact" | "privacy" | "terms" }) {
  const pages = {
    about: { title: "About QRFree", text: ["QRFree.io.vn is a free online QR Code generator and scanner for everyday use.", "The tool creates static codes for URLs, text, Wi-Fi, basic vCards, and cryptocurrency wallet addresses. You can customize colors, add a logo, and download PNG or PDF.", "QRFree can also scan a QR Code with your camera or from an uploaded or copied image. Our goal is to keep these tools simple and accessible in your browser."], heading: "Our mission", detail: "Make QR Code technology easier to use through a free, friendly, and reliable platform." },
    contact: { title: "Contact QRFree", text: ["For support, bug reports, or suggestions, email us at the address below."], heading: "Support email", detail: "nvantri93@gmail.com" },
    privacy: { title: "Privacy Policy", text: ["QRFree is designed to process QR content in your browser. QR history is stored in local storage, and we do not store QR content on our servers.", "We use analytics and basic service metrics to understand usage and improve the site. These may include browser or device information and tool usage counts.", "The QR scanner reads images in your browser. Do not encode or share information you do not want other people to access."], heading: "Questions about privacy?", detail: "Contact us at nvantri93@gmail.com." },
    terms: { title: "Terms of Use", text: ["You may use QRFree to create and scan QR Codes for lawful purposes. Do not use the service to harm others, violate rights, or distribute deceptive or illegal content.", "QRFree encodes the data you provide. You are responsible for checking the destination, permissions, and content before sharing or printing a code.", "The service is provided as-is. QRFree is not responsible for third-party destinations or content encoded by users."], heading: "Questions", detail: "Contact us at nvantri93@gmail.com." },
  }[page];
  return <main className="mx-auto max-w-3xl space-y-7 px-6 py-14"><h1 className="text-3xl font-bold">{pages.title}</h1><div className="space-y-4 leading-8 text-muted-foreground">{pages.text.map((line) => <p key={line}>{line}</p>)}</div><section className="rounded-xl border p-6"><h2 className="mb-3 text-xl font-semibold">{pages.heading}</h2><p className="leading-7 text-muted-foreground">{page === "contact" ? <a className="text-cyan-600 hover:underline dark:text-cyan-400" href="mailto:nvantri93@gmail.com">{pages.detail}</a> : pages.detail}</p></section><Link href="/en" className="inline-flex rounded-lg bg-cyan-500 px-5 py-3 font-medium text-black">← Back to home</Link></main>;
}

