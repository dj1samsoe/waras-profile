"use client";
import Breakline from "@/common/components/elements/Breakline";
import { CiFaceSmile } from "react-icons/ci";
import { FaRegHandshake } from "react-icons/fa";
import { GrSchedule, GrHostMaintenance } from "react-icons/gr";
import { IoMdPricetags } from "react-icons/io";
import { IoCarOutline } from "react-icons/io5";
import Image from "next/image";
import { FACILITIES } from "@/common/constant/facilities";

import React from "react";
import { motion } from "framer-motion";

export default function Facilities() {
  return (
    <section
      className="max-w-screen-2xl md:px-20 px-5 py-20 flex flex-col space-y-5 items-center justify-center"
      id="fasilitas"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center space-y-5 pb-5"
      >
        <div className="flex flex-col space-y-3 items-center">
          <p className="md:text-xl text-lg font-semibold">
            Kenapa Memilih Kami?
          </p>
          <h1 className="md:text-3xl text-2xl font-semibold text-white text-center">
            Kami Memberikan Fasilitas dan Service Terbaik
          </h1>
        </div>
        <Breakline className="w-24 border-2" />
        <p className="text-md">
          Beberapa keunggulan yang kami miliki untuk menjaga kualitas dan mutu
          pengajaran yang baik
        </p>
      </motion.div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
        {FACILITIES?.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div
              key={index}
              className="relative hover:scale-105 transition-all duration-200"
            >
              <Image
                src={item.image}
                alt="fasilitas-image"
                width={500}
                height={500}
                className="w-full object-cover rounded-2xl"
              />
              <div className="absolute top-0 left-0 z-[50] bottom-0 right-0 w-full h-full bg-gradient-to-t from-[#343045]/90 via-[#343045]/60 to-[#343045]/20">
                <div className="flex flex-col space-y-2 items-center justify-center h-full w-full">
                  {item.icon}
                  <p className="text-xl font-normal text-white/90">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
