import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
const baseUrl = "https://qrfree.io.vn";

const routes = [
// Main Pages
"",
"/generate",
"/scan",
"/blog",


// Blog Posts
"/blog/qrcode-la-gi",
"/blog/cach-tao-ma-qr-wifi",
"/blog/quet-ma-qr-tren-dien-thoai",
"/blog/ma-qr-co-an-toan-khong",
"/blog/cach-tao-ma-qr-zalo",
"/blog/cach-tao-ma-qr-facebook",
"/blog/cach-tao-ma-qr-thanh-toan-ngan-hang",
"/blog/qr-dong-va-qr-tinh-khac-nhau-the-nao",
"/blog/cach-tao-ma-qr-google-maps",
"/blog/cach-tao-ma-qr-pdf",
"/blog/cach-tao-ma-qr-danh-thiep-vcard",
"/blog/nhung-loi-thuong-gap-khi-quet-ma-qr",

// Static Pages
"/about",
"/contact",
"/privacy",
"/terms",

];

return routes.map((route) => ({
url: `${baseUrl}${route}`,
lastModified: new Date(),

changeFrequency:
  route === ""
    ? "daily"
    : route === "/generate" || route === "/scan"
    ? "weekly"
    : route.startsWith("/blog")
    ? "monthly"
    : "yearly",

priority:
  route === ""
    ? 1.0
    : route === "/generate"
    ? 0.95
    : route === "/scan"
    ? 0.95
    : route === "/blog"
    ? 0.9
    : route.startsWith("/blog")
    ? 0.8
    : 0.5,
}));
}
