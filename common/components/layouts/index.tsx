"use client";

import React, { ReactNode } from "react";
import Footer from "./Footer/Footer";
import Menu from "./Navbar/Menu";
import WhatsAppButton from "../elements/WhatsAppButton";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface LayoutsProps {
  children: ReactNode;
}

export default function Layouts({ children }: LayoutsProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <header>
        <Menu />
      </header>
      <main className="min-h-screen max-w-screen-2xl bg-[#F5F5F5]">
        {children}
      </main>
      <WhatsAppButton />
      <Footer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
