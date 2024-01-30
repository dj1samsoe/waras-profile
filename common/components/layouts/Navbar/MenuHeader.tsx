"use client";
import Link from "next/link";
import Image from "next/image";

import clsx from "clsx";
import React, { useEffect, useState } from "react";

interface ProfileHeaderProps {
  expandMenu: boolean;
  imageSize: number;
}

export default function MenuHeader({
  expandMenu,
  imageSize,
}: ProfileHeaderProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={clsx("flex")}>
      <Link href={"/"} aria-label="Home" className="cursor-pointer">
        <Image
          src={isVisible ? "/logo-5.png" : "/logo-4.png"}
          alt="navbar-logo"
          width={expandMenu ? 175 : imageSize * 0.9}
          height={expandMenu ? 175 : imageSize * 0.9}
          className="lg:hover:scale-105"
        />
      </Link>
    </div>
  );
}
