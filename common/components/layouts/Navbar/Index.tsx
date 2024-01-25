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
          ? "z-[99999] fixed shadow-sm xl:shadow-none max-w-screen-2xl w-full md:px-20 md:py-5 bg-[#343045] transition-all ease-in-out duration-500"
          : "z-[99999] fixed shadow-sm xl:shadow-none max-w-screen-2xl w-full md:px-20 md:py-5 md:bg-transparent bg-[#343045] transition-all ease-in-out duration-500"
      }
    >
      <Menu />
    </nav>
  );
}
