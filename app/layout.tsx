import type { Metadata } from "next";
import "./globals.css";
import { METADATA } from "@/common/constant/metadata";
import Layouts from "@/common/components/layouts";
import { montserrat } from "@/common/styles/font";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: {
    name: METADATA.creator,
    url: METADATA.authors.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Layouts>{children}</Layouts>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
