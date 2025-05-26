"use client";
import Card from "@/common/components/elements/Card";
import useIsMobile from "@/common/hooks/useIsMobile";
import Carousel from "nuka-carousel";
import React from "react";
import Image from "next/image";
import Breakline from "@/common/components/elements/Breakline";
import { motion } from "framer-motion";
import { GoStarFill } from "react-icons/go";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";
import useGoogleReviews from "@/common/hooks/useGoogleReviews";

export const revalidate = 3600;

export default function Testimonial() {
  const isMobile = useIsMobile();
  const { data, isLoading, isError } = useGoogleReviews();

  if (isLoading) return <p>Loading reviews...</p>;
  if (isError || !data) return <p>Failed to load reviews.</p>;

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

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
    <section
      className="max-w-screen-2xl md:px-20 px-5 py-20 text-quaternary-black"
      id="testimoni"
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

      <Card className="w-full bg-white flex md:flex-row flex-col md:justify-between justify-center items-center md:space-y-0 space-y-5 p-10">
        <div className="flex flex-col space-y-3 md:items-start items-center">
          <h2 className="text-xl font-semibold md:text-start text-center">
            Ulasan Google untuk {data.name}
          </h2>
          <div className="flex flex-col space-y-2 items-start">
            <div className="flex items-center gap-2">
              <GoStarFill className="w-8 h-8" style={{ color: "gold" }} />
              <p className="font-bold md:text-2xl text-xl">{data.rating}</p>
            </div>
            <p className="text-base">dari {data.total} ulasan</p>
          </div>
        </div>

        <Link
          href="https://www.google.com/maps/place/Kursus+Mengemudi+Waras/@-7.3948599,112.6073089,17z/data=!4m8!3m7!1s0x2e780926c09e9f11:0x897642cbd42751e4!8m2!3d-7.3948599!4d112.6073089!9m1!1b1!16s%2Fg%2F11g4fzw20s?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          className="py-3 px-5 bg-primary-purple text-white rounded-full font-medium text-base"
        >
          Beri Ulasan di Google
        </Link>
      </Card>

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
        {data.reviews?.map((items, index) => (
          <Card
            key={index}
            className="flex flex-col items-start justify-between p-8 bg-white h-[20rem]"
          >
            <p
              className={
                items.text !== ""
                  ? "mx-auto text-base italic text-center font-medium font-openSans line-clamp-6"
                  : "text-base text-center mx-auto"
              }
            >
              {items.text !== "" ? `"${items.text}"` : "Tidak ada komentar"}
            </p>
            <div className="flex gap-3 items-center">
              <Image
                src={items.profile_photo_url}
                alt="image-reviewers"
                width={50}
                height={50}
              />
              <div className="flex flex-col space-y-2">
                <h1 className="text-md font-semibold">{items.author_name}</h1>
                <div className="flex items-center gap-2">
                  {renderStars(items.rating)}
                  <p className="text-sm">{items.relative_time_description}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </Carousel>
    </section>
  );
}
