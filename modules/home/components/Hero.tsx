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
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 md:px-20 px-5 max-w-screen-2xl bg-gradient-to-r from-primary-purple to-secondary-purple/20">
        <div className="lg:col-span-3 space-y-5 h-screen flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-5 md:items-start items-center"
          >
            <h1 className="md:text-5xl text-4xl font-semibold md:text-start text-center">
              Kursus Mengemudi Terbaik di Krian
            </h1>
            <p className="text-lg md:text-start text-center font-openSans">
              Kursus Mengemudi Manual atau Matic dengan harga bersaing dan
              pelayanan maksimal. Kami juga menyediakan jasa pengurusan SIM A
              maupun C dengan pelayanan terbaik
            </p>
            <Link
              href="https://api.whatsapp.com/send?phone=6287754030807&text=Halo%2C%20Saya%20tertarik%20dengan%20Kursus%20Mengemudi%20Waras.%20Apakah%20bisa%20berkomunikasi%20lebih%20lanjut%3F"
              target="_blank"
              className="px-5 py-3 font-openSans rounded-full bg-neutral-800 md:text-lg text-md text-primary-white flex items-center gap-3 hover:bg-neutral-950 transition-all duration-300 max-w-[16rem]"
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
