/* eslint-disable @next/next/no-img-element */
"use client";
import Breakline from "@/common/components/elements/Breakline";
import { FACILITIES } from "@/common/constant/facilities";

import React from "react";
import { motion } from "framer-motion";

export default function Facilities() {
  return (
    <section
      className="max-w-screen-2xl md:px-20 px-5 py-20 flex flex-col space-y-5 items-center justify-center text-quaternary-black"
      id="fasilitas"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center space-y-5 pb-5"
      >
        <div className="flex flex-col space-y-3 items-center pt-5">
          <p className="md:text-xl text-lg font-semibold text-primary-purple">
            Kenapa Memilih Kami?
          </p>
          <h1 className="md:text-3xl text-2xl font-semibold text-center">
            Kami Memberikan Fasilitas dan Service Terbaik
          </h1>
        </div>
        <Breakline className="w-24 border-2 border-primary-purple" />
        <p className="text-lg font-openSans">
          Beberapa keunggulan yang kami miliki untuk menjaga kualitas dan mutu
          pengajaran yang baik
        </p>
      </motion.div>
      <div className="w-full grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-3 grid-cols-1 gap-7">
        {FACILITIES?.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            key={index}
          >
            <div className="flex flex-col space-y-3 items-center justify-center h-full w-full">
              <img
                src={item.icon}
                alt="fasilitas-image"
                className="w-24 h-24"
                loading="lazy"
              />
              <p className="text-xl font-medium text-black">{item.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
