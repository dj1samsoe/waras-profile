"use client";
import Card from "@/common/components/elements/Card";
import useIsMobile from "@/common/hooks/useIsMobile";
import Carousel from "nuka-carousel";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Breakline from "@/common/components/elements/Breakline";
import { motion } from "framer-motion";
import { GoStarFill } from "react-icons/go";
import { FaCircle } from "react-icons/fa";
import { User } from "@/common/types/comments";
import axios from "axios";

interface ApiResponse {
  user: User[];
}
export const revalidate = 3600;

export default function Testimonial() {
  const isMobile = useIsMobile();
  const [comments, setComments] = useState<User[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get<ApiResponse>("/api/scrapper");
        setComments(response.data.user);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, []);

  const renderStars = (rating: string) => {
    const starRating = parseFloat(rating);
    const fullStars = Math.floor(starRating);
    const halfStar = starRating % 1 !== 0;

    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index}>
            {index < fullStars ? (
              <GoStarFill style={{ color: "gold" }} />
            ) : halfStar && index === fullStars ? (
              <GoStarFill style={{ color: "gold" }} />
            ) : (
              <GoStarFill style={{ color: "gold" }} />
            )}
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="max-w-screen-2xl md:px-20 px-5 text-quaternary-black">
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
        <div className="flex flex-col items-center space-y-2">
          <p className="text-lg font-openSans text-center">
            Beberapa pendapat dari mereka yang telah mengikuti kursus kami
          </p>
          <span className="italic text-sm font-thin text-neutral-800">
            (Sumber: Google Maps Reviews)
          </span>
        </div>
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
                      color: index === currentSlide ? "blue" : "gray",
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
        {comments?.map((items, index) => (
          <Card
            key={index}
            className="flex flex-col items-start justify-between p-8 bg-white h-[20rem]"
          >
            <p
              className={
                items.review !== ""
                  ? "mx-auto md:text-xl text-lg text-center font-medium font-openSans line-clamp-6 hover:line-clamp-none"
                  : "text-md text-center mx-auto"
              }
            >
              {items.review !== "" ? `"${items.review}"` : "Tidak ada komentar"}
            </p>
            <div className="flex gap-3 items-center">
              <Image
                src={items.thumbnail}
                alt="image-reviewers"
                width={50}
                height={50}
              />
              <div className="flex flex-col space-y-2">
                <h1 className="text-md font-semibold">{items.name}</h1>
                <div className="flex items-center gap-2">
                  {renderStars(items.rating)}
                  <p className="text-sm">{items.date}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </Carousel>
    </section>
  );
}
