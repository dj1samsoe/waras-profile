import Link from "next/link";
import Image from "next/image";

import clsx from "clsx";
import React from "react";

interface ProfileHeaderProps {
  expandMenu: boolean;
  imageSize: number;
}

export default function MenuHeader({
  expandMenu,
  imageSize,
}: ProfileHeaderProps) {
  return (
    <div className={clsx("flex")}>
      <Link href={"/"} aria-label="Home" className="cursor-pointer">
        <Image
          src={"/logo-2.png"}
          alt="navbar-logo"
          width={expandMenu ? 175 : imageSize * 0.9}
          height={expandMenu ? 175 : imageSize * 0.9}
          className="lg:hover:scale-105"
        />
      </Link>
    </div>
  );
}
