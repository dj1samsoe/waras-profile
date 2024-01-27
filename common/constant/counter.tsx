import { BsBuildingGear } from "react-icons/bs";
import { FaAddressCard, FaChartLine } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";

export const COUNTER = [
  {
    icon: (
      <FaAddressCard className="absolute bottom-3 right-1 w-16 h-16 -z[50] text-quaternary-black/10" />
    ),
    total: 200,
    span: "+",
    title: "Lulusan Mengemudi",
  },
  {
    icon: (
      <FaChartLine className="absolute bottom-3 -right-1 w-16 h-16 -z[50] text-quaternary-black/10" />
    ),
    total: 10,
    span: "+",
    title: "Pengalaman",
  },
  {
    icon: (
      <FaClockRotateLeft className="absolute bottom-3 right-2 w-14 h-14 -z[50] text-quaternary-black/10" />
    ),
    total: 500,
    span: "+",
    title: "Jam Mengajar",
  },
  {
    icon: (
      <BsBuildingGear className="absolute bottom-3 right-2 w-14 h-14 -z[50] text-quaternary-black/10" />
    ),
    total: 3,
    span: "+",
    title: "Kantor Cabang",
  },
];
