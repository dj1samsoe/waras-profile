"use client";
import AnimateCounter from "@/common/components/elements/AnimateCounter";
import React from "react";
import { BsBuildingGear } from "react-icons/bs";
import { FaAddressCard, FaChartLine } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import Image from "next/image";
import { motion } from "framer-motion";
import { COUNTER } from "@/common/constant/counter";

export default function Counter() {
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
          <p className="md:text-xl text-lg font-semibold text-tertiary-red">
            Buktikan hasilnya hanya di
          </p>
          <div className="flex gap-3">
            <h1 className="md:text-3xl text-2xl font-semibold">
              Kursus Mengemudi Waras
            </h1>
            <Image src="/arrow-2.svg" alt="logo" width={100} height={100} />
          </div>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-5 gap-8 md:pt-0 pt-3">
          {COUNTER?.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative">
                {item.icon}
                <AnimateCounter
                  total={item.total}
                  className="font-semibold text-4xl"
                />
                <span className="font-semibold text-4xl">{item.span}</span>
              </div>
              <p className="font-medium text-md text-center">{item.title}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
