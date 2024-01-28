"use client";
import Card from "@/common/components/elements/Card";
import { REVIEW } from "@/common/constant/review";
import useIsMobile from "@/common/hooks/useIsMobile";
import Carousel from "nuka-carousel";
import React from "react";
import Image from "next/image";
import Breakline from "@/common/components/elements/Breakline";
import { motion } from "framer-motion";
import { GoStarFill } from "react-icons/go";

export default function Testimonial() {
  const isMobile = useIsMobile();
  return (
    <section className="max-w-screen-2xl min-h-screen md:px-20 px-5 text-quaternary-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center space-y-5 pb-5"
      >
        <div className="flex flex-col space-y-3 items-center pt-5">
          <p className="md:text-xl text-lg font-semibold text-secondary-purple">
            Testimoni
          </p>
          <h1 className="md:text-3xl text-2xl font-semibold text-center">
            Apa Pendapat Mereka Tentang Kami?
          </h1>
        </div>
        <Breakline className="w-24 border-2 border-primary-purple" />
        <p className="text-lg font-openSans text-center">
          Beberapa pendapat dari mereka yang telah mengikuti kursus kami
        </p>
      </motion.div>
      <Carousel
        autoplay
        autoplayInterval={3000}
        cellSpacing={24}
        slidesToShow={isMobile ? 1 : 3}
        renderCenterLeftControls={({ previousSlide }) => null}
        renderCenterRightControls={({ nextSlide }) => null}
        className="py-10"
      >
        {REVIEW?.map((items, index) => (
          <Card
            key={index}
            className="flex flex-col items-start space-y-5 px-5 py-10 bg-white h-[28rem]"
          >
            <div className="flex gap-3 items-center">
              <Image src={items.image} alt="logo" width={75} height={75} />
              <div className="flex flex-col space-y-2">
                <h1 className="text-lg font-semibold">{items.nama}</h1>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0 text-yellow-300">
                    <GoStarFill />
                    <GoStarFill />
                    <GoStarFill />
                    <GoStarFill />
                    <GoStarFill />
                  </div>
                  <p className="text-sm">{items.time}</p>
                </div>
              </div>
            </div>
            <p className="text-md font-openSans">{items.review}</p>
          </Card>
        ))}
      </Carousel>
    </section>
  );
}
