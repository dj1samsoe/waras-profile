"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <section className="max-w-screen-2xl md:px-20 px-5 py-20 text-quaternary-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 grid-cols-1 gap-10"
      >
        <div className="flex flex-col space-y-3">
          <p className="md:text-xl text-lg font-semibold text-primary-purple">
            Mari Berkenalan dengan
          </p>
          <div className="flex gap-3">
            <h1 className="md:text-3xl text-2xl font-semibold">
              Kursus Mengemudi Waras
            </h1>
            <Image src="/arrow.svg" alt="logo" width={100} height={100} />
          </div>
        </div>
        <p className="text-lg font-openSans flex flex-col">
          Selamat datang di Kursus Mengemudi Waras, tempat di mana perjalanan
          Anda menuju keahlian mengemudi yang aman dan percaya diri dimulai!
          <span className="font-semibold">
            Buktikan kemampuanmu dengan Kursus Mengemudi Waras.
          </span>
        </p>
      </motion.div>
    </section>
  );
}
