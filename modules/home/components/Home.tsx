import React from "react";
import Hero from "./Hero";
import Introduction from "./Introduction";
import Counter from "./Counter";
import Facilities from "./Facilities";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Testimonial from "./Testimonial";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <About />
      <Counter />
      <Facilities />
      <Service />
      <Testimonial />
      <Contact />
    </>
  );
}
