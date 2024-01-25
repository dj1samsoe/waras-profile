import { CiFaceSmile } from "react-icons/ci";
import { FaRegHandshake } from "react-icons/fa";
import { GrHostMaintenance, GrSchedule } from "react-icons/gr";
import { IoMdPricetags } from "react-icons/io";
import { IoCarOutline } from "react-icons/io5";

export const FACILITIES = [
  {
    image: "/about.webp",
    icon: <FaRegHandshake className="w-16 h-16 text-white/50" />,
    title: "Terpercaya",
  },
  {
    image: "/about.webp",
    icon: <IoMdPricetags className="w-16 h-16 text-white/50" />,
    title: "Harga Kompetitif",
  },
  {
    image: "/about.webp",
    icon: <CiFaceSmile className="w-16 h-16 text-white/50" />,
    title: "Pelayanan Terbaik",
  },
  {
    image: "/about.webp",
    icon: <GrSchedule className="w-14 h-14 text-white/50" />,
    title: "Jadwal Fleksibel",
  },
  {
    image: "/about.webp",
    icon: <GrHostMaintenance className="w-14 h-14 text-white/50" />,
    title: "Maintenance Rutin",
  },
  {
    image: "/about.webp",
    icon: <IoCarOutline className="w-16 h-16 text-white/50" />,
    title: "Graits Antar Jemput",
  },
];
