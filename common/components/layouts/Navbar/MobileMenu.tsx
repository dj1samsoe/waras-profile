import { motion } from "framer-motion";
import { FC } from "react";
import Link from "next/link";
import Breakline from "../../elements/Breakline";

export const MobileMenu: FC = () => {
  return (
    <motion.div
      className="h-screen max-w-screen flex flex-col bg-[#343045]"
      initial={{ y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Breakline />
      <div>
        <ul className="flex flex-col space-y-5 items-center text-white">
          <li>
            <Link href={"#tentang"} aria-label="Tentang">
              Tentang
            </Link>
          </li>
          <li>
            <Link href={"#pelayanan"} aria-label="Pelayanan">
              Pelayanan
            </Link>
          </li>
          <li>
            <Link href={"#Fasilitas"} aria-label="Fasilitas">
              Fasilitas
            </Link>
          </li>
          <li>
            <Link href={"#Kontak"} aria-label="Kontak">
              Kontak
            </Link>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};
