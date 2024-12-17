"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Menu() {
  return (
    <div className="drawer drawer-end md:px-12 bg-white text-black font-medium fixed z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar bg-white w-full">
          <div className="mx-2 flex-1 px-2">
            <Image
              src={"/logo.png"}
              alt="navbar-logo"
              width={175}
              height={175}
            />
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              <li>
                <Link href={"#tentang"} aria-label="Tentang">
                  Tentang
                </Link>
              </li>
              <li>
                <Link href={"#fasilitas"} aria-label="Fasilitas">
                  Fasilitas
                </Link>
              </li>
              <li>
                <Link href={"#pelayanan"} aria-label="Pelayanan">
                  Pelayanan
                </Link>
              </li>

              <li>
                <Link href={"#kontak"} aria-label="Kontak">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-white min-h-full w-80 p-4 items-center">
          <Image
            src={"/logo.png"}
            alt="navbar-logo"
            width={175}
            height={175}
            className="pb-10"
          />
          <li className="w-full py-3">
            <Link
              href={"#tentang"}
              aria-label="Tentang"
              className="w-full flex justify-center text-center"
            >
              Tentang
            </Link>
          </li>
          <li className="w-full py-3">
            <Link
              href={"#fasilitas"}
              aria-label="Fasilitas"
              className="w-full flex justify-center text-center"
            >
              Fasilitas
            </Link>
          </li>
          <li className="w-full py-3">
            <Link
              href={"#pelayanan"}
              aria-label="Pelayanan"
              className="w-full flex justify-center text-center"
            >
              Pelayanan
            </Link>
          </li>
          <li className="w-full py-3">
            <Link
              href={"#kontak"}
              aria-label="Kontak"
              className="w-full flex justify-center text-center"
            >
              Kontak
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
