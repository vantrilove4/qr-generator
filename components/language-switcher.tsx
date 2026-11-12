"use client";

import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");

  const switchLanguage = (locale: "vi" | "en") => {
    document.cookie = `qrfree-locale=${locale}; path=/; max-age=31536000; samesite=lax`;
    const currentPath = pathname || "/";
    const basePath = isEnglish ? currentPath.replace(/^\/en(?=\/|$)/, "") || "/" : currentPath;
    const targetPath = locale === "en" ? `/en${basePath === "/" ? "" : basePath}` : basePath;
    window.location.assign(`${targetPath}${window.location.search}`);
  };

  return (
    <div className="inline-flex items-center rounded-full border border-slate-300/70 bg-white/95 p-1 text-xs font-semibold shadow-sm backdrop-blur" role="group" aria-label={isEnglish ? "Language selector" : "Chọn ngôn ngữ"}>
      <button type="button" onClick={() => switchLanguage("vi")} aria-pressed={!isEnglish} className={`rounded-full px-2.5 py-1.5 transition ${isEnglish ? "text-slate-600 hover:bg-slate-100" : "bg-slate-900 text-white"}`}>VI</button>
      <button type="button" onClick={() => switchLanguage("en")} aria-pressed={isEnglish} className={`rounded-full px-2.5 py-1.5 transition ${isEnglish ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"}`}>EN</button>
    </div>
  );
}
