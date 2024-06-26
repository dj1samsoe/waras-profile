import { motion } from "framer-motion";
import { FC } from "react";
import Link from "next/link";
import Breakline from "../../elements/Breakline";

export const MobileMenu: FC = () => {
  return (
    <motion.div
      className="h-full w-full flex flex-col bg-primary-white/70 backdrop-blur-xl py-5 rounded-md"
      initial={{ y: -50, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
    >
      <Breakline className="md:flex hidden" />
      <div>
        <ul className="flex flex-col space-y-5 items-center text-quaternary-black font-medium">
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
    </motion.div>
  );
};
