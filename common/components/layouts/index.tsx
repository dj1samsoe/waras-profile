"use client";

import React, { ReactNode } from "react";
import Footer from "./Footer/Footer";
import Menu from "./Navbar/Menu";
import WhatsAppButton from "../elements/WhatsAppButton";

interface LayoutsProps {
  children: ReactNode;
}

export default function Layouts({ children }: LayoutsProps) {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main className="min-h-screen max-w-screen-2xl bg-white">{children}</main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
