"use client";
import Breakline from "@/common/components/elements/Breakline";
import { motion } from "framer-motion";
import React from "react";

export default function Contact() {
  return (
    <section
      className="max-w-screen-2xl md:px-20 px-5 py-20 flex flex-col items-center"
      id="kontak"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col space-y-5 items-center text-center"
      >
        <div className="flex flex-col space-y-3">
          <p className="md:text-xl text-lg">Informasi Kontak & Lokasi</p>
          <h1 className="md:text-3xl text-2xl text-white font-semibold">
            Kursus Mengemudi Waras
          </h1>
        </div>
        <Breakline className="w-24 border-2" />
      </motion.div>
      <motion.iframe
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.6338558042576!2d112.60473397409189!3d-7.394859892615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e780926c09e9f11%3A0x897642cbd42751e4!2sKursus%20Mengemudi%20Waras!5e0!3m2!1sid!2sid!4v1706179091577!5m2!1sid!2sid"
        width="600"
        height="450"
        className="w-full md:h-[500px] h-[300px] rounded-xl my-10"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="embed maps"
      />
    </section>
  );
}
