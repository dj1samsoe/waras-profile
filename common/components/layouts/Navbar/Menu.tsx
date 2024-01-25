"use client";

import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

import { useMenu } from "@/common/context/menu";

import useIsMobile from "@/common/hooks/useIsMobile";

import MobileMenuButton from "./MobileMenuButton";
import MenuHeader from "./MenuHeader";
import { MobileMenu } from "./MobileMenu";
import MenuItems from "./MenuItems";

export default function Menu() {
  const isMobile = useIsMobile();
  const imageSize = isMobile ? 200 : 175;
  const { isOpen, toggleMenu } = useMenu();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      className={clsx(
        "md:p-0 p-5 w-full border-b md:border-none",
        isOpen && "pb-0"
      )}
    >
      <div className="flex items-center justify-between">
        <MenuHeader expandMenu={isOpen} imageSize={imageSize} />
        <div className="hidden md:flex">
          <MenuItems />
        </div>
        {isMobile && (
          <div
            className={clsx(
              "flex md:hidden items-center gap-5",
              isOpen && "!items-end flex-col-reverse justify-between"
            )}
          >
            <MobileMenuButton expandMenu={isOpen} setExpandMenu={toggleMenu} />
          </div>
        )}
      </div>

      {isMobile && (
        <AnimatePresence>{isOpen && <MobileMenu />}</AnimatePresence>
      )}
    </div>
  );
}
