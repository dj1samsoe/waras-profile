"use client";
import Breakline from "@/common/components/elements/Breakline";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";

export default function Contact() {
  return (
    <section
      className="max-w-screen-2xl md:px-20 px-5 py-20 flex flex-col items-center text-quaternary-black"
      id="kontak"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col space-y-5 items-center text-center pt-5"
      >
        <div className="flex flex-col space-y-3">
          <p className="md:text-xl text-lg font-semibold text-primary-purple">
            Informasi Lokasi & Kontak
          </p>
          <h1 className="md:text-3xl text-2xl font-semibold">
            Kursus Mengemudi Waras
          </h1>
        </div>
        <Breakline className="w-24 border-2 border-primary-purple" />
      </motion.div>
      <motion.iframe
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.6338558042576!2d112.60473397409189!3d-7.394859892615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e780926c09e9f11%3A0x897642cbd42751e4!2sKursus%20Mengemudi%20Waras!5e0!3m2!1sid!2sid!4v1706179091577!5m2!1sid!2sid"
        width="600"
        height="450"
        className="w-full md:h-[500px] h-[300px] rounded-xl my-10 border border-quaternary-black/80"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="embed maps"
      />
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:text-2xl text-xl font-semibold text-center mb-10"
      >
        Ingin bisa mengemudi tapi tidak ada pengajar? Hubungi kami sekarang
        juga!
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full flex md:flex-row flex-col md:gap-8 gap-4 items-center justify-center"
      >
        <Link href="https://wa.me/6287754030807" target="_blank">
          <div className="flex flex-col space-y-4 items-center border border-quaternary-black rounded-lg p-5 w-[320px] h-[200px] hover:bg-neutral-200 transition-all duration-200">
            <MdWhatsapp className="w-16 h-16 text-primary-purple" />
            <h2 className="text-quaternary-black font-semibold md:text-xl">
              0877-5403-0807
            </h2>
            <p className="text-quaternary-black font-openSans md:text-lg">
              WhatsApp Admin
            </p>
          </div>
        </Link>
        <span className="text-neutral-700">atau</span>
        <Link href="https://instagram.com/kursusmengemudiwaras" target="_blank">
          <div className="flex flex-col space-y-4 items-center border border-quaternary-black rounded-lg p-5 w-[320px] h-[200px] hover:bg-neutral-200 transition-all duration-200">
            <FaInstagram className="w-16 h-16 text-primary-purple" />
            <h2 className="text-quaternary-black font-semibold md:text-xl">
              @kursusmengemudiwaras
            </h2>
            <p className="text-quaternary-black font-openSans md:text-lg">
              Instagram
            </p>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
