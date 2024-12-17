import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/6287754030807"
      target="_blank"
      className="p-2 bg-[#25d366] text-white fixed z-20 bottom-7 right-7 rounded-full cursor-pointer"
    >
      <FaWhatsapp className="w-10 h-10" />
    </Link>
  );
}
