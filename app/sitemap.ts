
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://qrfree.io.vn";

  const routes = [
    "",
    "/generate",
    "/scan",
    "/blog",
    "/blog/qr-code-la-gi",
    "/blog/cach-tao-ma-qr-wifi",
    "/blog/quet-ma-qr-tren-dien-thoai",
    "/blog/ma-qr-co-an-toan-khong",
    "/blog/cach-tao-ma-qr-zalo",
    "/blog/cach-tao-ma-qr-facebook",
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
        : route.startsWith("/blog")
        ? "weekly"
        : "monthly",
    priority:
      route === ""
        ? 1.0
        : route === "/generate" || route === "/scan"
        ? 0.9
        : route === "/blog"
        ? 0.8
        : route.startsWith("/blog")
        ? 0.7
        : 0.5,
  }));
}

