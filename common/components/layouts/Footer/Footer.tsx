import Link from "next/link";
import React from "react";
// import { FaFacebook, FaInstagram } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-quaternary-black text-primary-white rounded">
      <Image src="/logo-4.png" alt="navbar-logo" width={200} height={100} />
      <nav className="grid grid-flow-col gap-4">
        <Link href="#tentang" className="link link-hover" aria-label="Tentang">
          Tentang
        </Link>
        <Link
          href="#fasilitas"
          className="link link-hover"
          aria-label="Fasilitas"
        >
          Fasilitas
        </Link>
        <Link
          href="#pelayanan"
          className="link link-hover"
          aria-label="Pelayanan"
        >
          Pelayanan
        </Link>
        <Link href="#kontak" className="link link-hover" aria-label="Kontak">
          Kontak
        </Link>
      </nav>
      {/* <nav className="flex gap-3">
        <Link
          href="https://instagram.com/kursusmengemudiwaras"
          target="_blank"
          aria-label="Instagram"
          className="p-2 text-white"
        >
          <FaInstagram className="w-6 h-6" />
        </Link>
        <Link
          href="https://facebook.com/kursusmengemudiwaras"
          target="_blank"
          aria-label="facebook"
          className="p-2 text-white"
        >
          <FaFacebook className="w-6 h-6" />
        </Link>
        <Link
          href="https://twitter.com/kursusmengemudiwaras"
          target="_blank"
          aria-label="twitter"
          className="p-2 text-white"
        >
          <FaXTwitter className="w-6 h-6" />
        </Link>
      </nav> */}
      <div>
        <p>Copyright © 2024 - All right reserved by Kursus Mengemudi Waras</p>
      </div>
    </footer>
  );
}
