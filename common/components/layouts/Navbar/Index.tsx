import { useEffect, useState } from "react";
import Menu from "./Menu";

export default function Navbar() {
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
    <nav
      className={
        isVisible
          ? "z-[99999] fixed shadow-lg max-w-screen-2xl w-full md:px-20 md:py-5 bg-primary-white text-quaternary-black font-medium transition-all ease-in-out duration-500"
          : "z-[99999] fixed max-w-screen-2xl w-full md:px-20 md:py-5 bg-transparent md:text-white text-quaternary-black transition-all ease-in-out duration-500"
      }
    >
      <Menu />
    </nav>
  );
}
