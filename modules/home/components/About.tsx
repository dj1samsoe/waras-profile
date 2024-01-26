"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="max-w-screen-2xl md:px-20 px-5 py-20" id="tentang">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 grid-cols-1 gap-10"
      >
        <Image
          src="/about.webp"
          alt="about-image"
          width={500}
          height={400}
          className="w-full h-full object-cover rounded-3xl shadow-xl"
        />

        <div className="flex flex-col space-y-5">
          <div className="flex flex-col space-y-2 md:items-start items-center">
            <span className="md:text-xl text-lg font-semibold">
              Tentang Kami
            </span>
            <h1 className="md:text-3xl text-2xl font-semibold text-white">
              Kursus Mengemudi Waras
            </h1>
          </div>
          <p>
            Sebagai penyedia pelatihan mengemudi yang berpengalaman, Kursus
            Mengemudi Waras tidak hanya menawarkan kelas yang memenuhi
            persyaratan untuk mendapatkan izin mengemudi, tetapi juga memberikan
            pengajaran yang mendalam tentang keterampilan mengemudi defensif dan
            keselamatan di jalan raya.Tim instruktur kami yang terampil siap
            membimbing Anda melalui setiap langkah, memastikan bahwa Anda tidak
            hanya menguasai teknik mengemudi, tetapi juga memahami pentingnya
            perilaku berlalu lintas yang aman. Bergabunglah dengan Kursus
            Mengemudi Waras dan buatlah perjalanan Anda di jalan raya menjadi
            pengalaman belajar yang bermakna dan memuaskan.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
