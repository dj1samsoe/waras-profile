"use client";
import Card from "@/common/components/elements/Card";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { MdWhatsapp } from "react-icons/md";
import { motion } from "framer-motion";
import { SERVICE } from "@/common/constant/service";

export default function Service() {
  return (
    <section className="max-w-screen-2xl md:px-20 px-5 py-20" id="pelayanan">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 grid-cols-1 gap-10"
      >
        <div className="flex flex-col space-y-3">
          <p className="md:text-xl text-lg font-semibold">
            Pilihan Paket yang tersedia di
          </p>
          <div className="flex gap-3">
            <h1 className="md:text-3xl text-2xl font-semibold text-white">
              Kursus Mengemudi Waras
            </h1>
            <Image src="/arrow.svg" alt="logo" width={100} height={100} />
          </div>
        </div>
        <p>
          Kami menawarkan Paket Latihan Manual dan Matic yang tentu saja dengan
          harga bersaing dan pelayanan yang maksimal. Kita akan diajarkan mulai
          dari dasar seperti pengenalan bagian-bagian mobil, pedal gas, kopling,
          rem, tanjakan atau turunan, dan juga parkir.
        </p>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="md:text-2xl text-xl font-medium text-white py-10 text-center"
      >
        Paket Manual/Matic
      </motion.h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-7 ">
        {SERVICE?.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <Card
              key={index}
              className="flex flex-col space-y-10 items-center bg-[#46415d] py-10 hover:-translate-y-3 transition-all duration-200"
            >
              <h1 className="md:text-2xl text-xl font-medium text-white text-center">
                {item.title}
              </h1>
              <p>
                <sup className="text-xl text-white/80">{item.sup}</sup>
                <span className="text-5xl font-semibold text-white">
                  {item.price}
                </span>
                <sub className="text-xl text-white/80">{item.sub}</sub>
              </p>
              <div className="flex flex-col space-y-2 items-center text-md">
                <p>{item.description1}</p>
                <p>{item.description2}</p>
                <p>{item.description3}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center py-10"
      >
        <Link
          href="https://wa.me/6289679047230/"
          target="_blank"
          className="px-5 py-3 rounded-full bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] md:text-lg text-md text-[#303045] hover:text-white flex items-center gap-3 hover:bg-gradient-to-r hover:from-[#342F48] hover:to-[#9586D9] transition-all duration-300 max-w-[16rem]"
        >
          <MdWhatsapp className="w-6 h-6" />
          Hubungi Sekarang
        </Link>
      </motion.div>
    </section>
  );
}
