"use client";
import Card from "@/common/components/elements/Card";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { MdWhatsapp } from "react-icons/md";
import { motion } from "framer-motion";
import { MANUAL, MATIC } from "@/common/constant/service";
import Breakline from "@/common/components/elements/Breakline";

export default function Service() {
  return (
    <section
      className="max-w-screen-2xl md:px-20 px-5 py-20 text-quaternary-black"
      id="pelayanan"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 grid-cols-1 gap-10 pt-5"
      >
        <div className="flex flex-col space-y-3">
          <p className="md:text-xl text-lg font-semibold text-tertiary-red">
            Pilihan Paket yang tersedia di
          </p>
          <div className="flex gap-3">
            <h1 className="md:text-3xl text-2xl font-semibold">
              Kursus Mengemudi Waras
            </h1>
            <Image src="/arrow-3.svg" alt="logo" width={100} height={100} />
          </div>
        </div>
        <p className="text-lg font-openSans">
          Kami menawarkan Paket Latihan Manual dan Matic yang tentu saja dengan
          harga bersaing dan pelayanan yang maksimal. Kita akan diajarkan mulai
          dari dasar seperti pengenalan bagian-bagian mobil, pedal gas, kopling,
          rem, tanjakan atau turunan, dan juga parkir.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center py-10"
      >
        <h1 className="md:text-2xl text-xl font-medium text-center">
          Paket Manual
        </h1>
        <Breakline className="w-24 text-center border-2 border-primary-purple" />
      </motion.div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-7 ">
        {MANUAL?.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card
              key={index}
              className="flex flex-col space-y-5 items-center justify-between bg-white py-10 h-[24rem] hover:-translate-y-3 transition-all duration-200"
            >
              <h1 className="md:text-2xl text-xl font-medium text-center">
                {item.title}
              </h1>
              <p className="flex gap-1 items-end">
                <sup className="text-xl">{item.sup}</sup>
                <span className="text-5xl font-semibold text-primary-purple">
                  {item.price}
                </span>
                <sub className="text-xl">{item.sub}</sub>
              </p>
              <div className="flex flex-col space-y-2 items-center text-md">
                <p>{item.description1}</p>
                <p>{item.description2}</p>
                <p>{item.description3}</p>
              </div>
              <Link
                href={item.href}
                target="_blank"
                aria-label="Klik"
                className="px-5 py-2 rounded-full bg-primary-purple text-primary-white hover:shadow-lg hover:bg-secondary-purple transition-all duration-200"
              >
                Daftar Disini
              </Link>
            </Card>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center py-10"
      >
        <h1 className="md:text-2xl text-xl font-medium text-center">
          Paket Matic
        </h1>
        <Breakline className="w-24 text-center border-2 border-primary-purple" />
      </motion.div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-7 ">
        {MATIC?.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card
              key={index}
              className="flex flex-col space-y-5 items-center justify-between bg-white py-10 h-[24rem] hover:-translate-y-3 transition-all duration-200"
            >
              <h1 className="md:text-2xl text-xl font-medium text-center">
                {item.title}
              </h1>
              <p className="flex gap-1 items-end">
                <sup className="text-xl">{item.sup}</sup>
                <span className="text-5xl font-semibold text-primary-purple">
                  {item.price}
                </span>
                <sub className="text-xl">{item.sub}</sub>
              </p>
              <div className="flex flex-col space-y-2 items-center text-md">
                <p>{item.description1}</p>
                <p>{item.description2}</p>
                <p>{item.description3}</p>
              </div>
              <Link
                href={item.href}
                target="_blank"
                aria-label="Klik"
                className="px-5 py-2 rounded-full bg-primary-purple text-primary-white hover:shadow-lg hover:bg-secondary-purple transition-all duration-200"
              >
                Daftar Disini
              </Link>
            </Card>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex justify-center py-10"
      >
        <Link
          href="https://wa.me/6289679047230/"
          target="_blank"
          className="px-5 py-3 rounded-full md:text-lg text-md bg-tertiary-red text-primary-white flex items-center gap-3 hover:bg-tertiary-red/90 hover:shadow-lg transition-all duration-300 max-w-[16rem]"
        >
          <MdWhatsapp className="w-6 h-6" />
          Hubungi Sekarang
        </Link>
      </motion.div>
    </section>
  );
}
