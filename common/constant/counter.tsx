import { BsBuildingGear } from "react-icons/bs";
import { FaAddressCard, FaChartLine } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";

export const COUNTER = [
  {
    icon: (
      <FaAddressCard className="absolute bottom-3 right-1 w-16 h-16 -z[50] text-secondary-purple/20" />
    ),
    total: 200,
    span: "+",
    title: "Siswa Mengemudi",
  },
  {
    icon: (
      <FaChartLine className="absolute bottom-3 -right-7 w-16 h-16 -z[50] text-secondary-purple/20" />
    ),
    total: 5.0,
    span: "+",
    title: "Rating",
  },
  {
    icon: (
      <FaClockRotateLeft className="absolute bottom-3 right-2 w-14 h-14 -z[50] text-secondary-purple/20" />
    ),
    total: 500,
    span: "+",
    title: "Jam Mengajar",
  },
  {
    icon: (
      <BsBuildingGear className="absolute bottom-3 -right-2 w-14 h-14 -z[50] text-secondary-purple/20" />
    ),
    total: 3,
    span: "+",
    title: "Kantor Cabang",
  },
];
