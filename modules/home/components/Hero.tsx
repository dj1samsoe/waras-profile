"use client";
import Link from "next/link";
import React from "react";
import { MdWhatsapp } from "react-icons/md";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen max-w-screen-2xl flex items-center text-white bg-cover`}
      style={{
        backgroundImage: "url('/hero.webp')",
        backgroundPosition: "bottom, center",
      }}
    >
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 md:px-20 px-5 max-w-screen-2xl bg-gradient-to-r from-[#343045] via-[#343045]/90 to-[#343045]/20">
        <div className="lg:col-span-3 space-y-5 h-screen flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-5 md:items-start items-center"
          >
            <h1 className="md:text-5xl text-4xl font-semibold md:text-start text-center">
              Kursus Mengemudi Terbaik di Krian
            </h1>
            <p className="md:text-lg text-md md:text-start text-center">
              Kursus Mengemudi Manual atau Matic dan Pembuatan SIM dengan harga
              bersaing dan pelayanan maksimal
            </p>
            <Link
              href="https://wa.me/6289679047230/"
              target="_blank"
              className="px-5 py-3 rounded-full bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] md:text-lg text-md text-[#303045] hover:text-white flex items-center gap-3 hover:bg-gradient-to-r hover:from-[#342F48] hover:to-[#9586D9] transition-all duration-300 max-w-[16rem]"
            >
              <MdWhatsapp className="w-6 h-6" />
              Hubungi Sekarang
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
