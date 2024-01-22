import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { METADATA } from "@/common/constant/metadata";
import Layouts from "@/common/components/layouts";
import { montserrat } from "@/common/styles/font";

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
      </body>
    </html>
  );
}
