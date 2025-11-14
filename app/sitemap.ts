import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://qrfree.io.vn",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://qrfree.io.vn/about",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://qrfree.io.vn/contact",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://qrfree.io.vn/pravicy",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://qrfree.io.vn/terms",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // thêm các trang khác nếu có
  ];
}
