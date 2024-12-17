/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React from "react";
import { MdWhatsapp } from "react-icons/md";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="flex md:flex-row flex-col md:gap-10 md:px-20 px-5 w-full h-screen">
      <img
        src="/hero.png"
        alt="hero-image"
        className="w-[500px] object-contain md:hidden block mt-16 mb-0"
        loading="lazy"
      />
      <div className="space-y-5 flex flex-col justify-center max-w-[600px]">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-5 md:items-start items-center text-black"
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
            className="px-5 py-3 uppercase tracking-wide font-semibold font-openSans rounded-full bg-primary-purple md:text-lg text-md text-primary-white flex items-center gap-3 hover:bg-secondary-purple transition-all duration-300 max-w-[16rem]"
          >
            <MdWhatsapp className="w-6 h-6" />
            Hubungi Kami
          </Link>
        </motion.div>
      </div>
      <img
        src="/hero.png"
        alt="hero-image"
        className="w-[650px] object-contain md:block hidden"
        loading="lazy"
      />
    </div>
  );
}
