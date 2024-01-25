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
    <section className="max-w-screen-2xl md:px-20 px-5 py-20">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-3"
        >
          <p className="md:text-xl text-lg font-semibold">
            Buktikan hasilnya hanya di
          </p>
          <div className="flex gap-3">
            <h1 className="md:text-3xl text-2xl font-semibold text-white">
              Kursus Mengemudi Waras
            </h1>
            <Image src="/arrow.svg" alt="logo" width={100} height={100} />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-4 grid-cols-2 lg:gap-5 gap-8 md:pt-0 pt-3"
        >
          {COUNTER?.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative">
                {item.icon}
                <AnimateCounter
                  total={item.total}
                  className="font-semibold text-4xl text-white"
                />
                <span className="font-semibold text-4xl">{item.span}</span>
              </div>
              <p className="font-medium text-md text-center">{item.title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
