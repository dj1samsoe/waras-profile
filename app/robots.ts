import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const domain = "https://waras-mengemudi.vercel.app";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${domain}/sitemap.xml`,
  };
}
