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
import { FaCircle } from "react-icons/fa";

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
          <p className="md:text-xl text-lg font-semibold text-primary-purple">
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
        wrapAround={true}
        cellSpacing={24}
        slidesToShow={isMobile ? 1 : 3}
        renderCenterLeftControls={({ previousSlide }) => null}
        renderCenterRightControls={({ nextSlide }) => null}
        renderBottomCenterControls={({
          slideCount,
          currentSlide,
          goToSlide,
        }) => (
          <div className="slider-control-bottomcenter">
            <ul className="flex gap-1">
              {Array.from({ length: slideCount }).map((_, index) => (
                <li key={index}>
                  <button
                    onClick={() => goToSlide(index)}
                    style={{
                      color: index === currentSlide ? "purple" : "gray",
                    }}
                  >
                    <FaCircle size={10} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        className="py-10"
      >
        {REVIEW?.map((items, index) => (
          <Card
            key={index}
            className="flex flex-col items-start space-y-7 px-5 py-10 bg-white min-h-[20rem]"
          >
            <div className="flex gap-3 items-center">
              <Image
                src={items.image}
                alt="image-reviewers"
                width={50}
                height={50}
              />
              <div className="flex flex-col space-y-2">
                <h1 className="text-md font-semibold">{items.nama}</h1>
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
            <p className="text-md font-openSans line-clamp-6 hover:line-clamp-none">
              {items.review}
            </p>
          </Card>
        ))}
      </Carousel>
    </section>
  );
}
