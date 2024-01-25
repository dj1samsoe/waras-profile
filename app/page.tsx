import { METADATA } from "@/common/constant/metadata";
import { Metadata } from "next";
import HomePage from "@/modules/home";

export const metadata: Metadata = {
  title: `${METADATA.creator} - Kursus Mengemudi Terbaik di Krian`,
  alternates: {
    canonical: process.env.DOMAIN,
  },
};

export default function Home() {
  return <HomePage />;
}
