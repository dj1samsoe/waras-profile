import { METADATA } from "@/common/constant/metadata";
import { Metadata } from "next";
import { MdWhatsapp } from "react-icons/md";
import Image from "next/image";
import AnimateCounter from "@/common/components/elements/AnimateCounter";
import { RiSteering2Line } from "react-icons/ri";
import { FaAddressCard, FaChartLine } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { BsBuildingGear } from "react-icons/bs";

export const metadata: Metadata = {
  title: `${METADATA.creator} - Kursus Mengemudi Terbaik di Krian`,
  alternates: {
    canonical: process.env.DOMAIN,
  },
};

export default function Home() {
  return (
    <>
      <section
        className={`min-h-screen flex items-center text-white bg-cover`}
        style={{
          backgroundImage: "url('/hero.webp')",
          backgroundPosition: "bottom, center",
        }}
      >
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 md:px-20 px-5 max-w-screen-2xl bg-gradient-to-r from-[#343045] via-[#343045]/90 to-transparent">
          <div className="lg:col-span-3 space-y-5 h-screen flex flex-col justify-center">
            <div className="flex flex-col gap-5 ">
              <h1 className="md:text-5xl text-4xl font-semibold">
                Kursus Mengemudi Terbaik di Krian
              </h1>
              <p className="md:text-lg text-md">
                Kursus Mengemudi Manual atau Matic dengan harga bersaing dan
                pelayanan maksimal
              </p>
              <button className="px-5 py-3 rounded-full bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] md:text-lg text-md text-[#303045] hover:text-white flex items-center gap-3 hover:bg-gradient-to-r hover:from-[#342F48] hover:to-[#9586D9] transition-all duration-300 max-w-[16rem]">
                <MdWhatsapp className="w-6 h-6" />
                Hubungi Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-screen-2xl md:px-20 px-5 py-20">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <div className="flex flex-col space-y-3">
            <p className="md:text-xl text-lg font-semibold">
              Mari Berkenalan dengan
            </p>
            <div className="flex gap-3">
              <h1 className="md:text-3xl text-2xl font-semibold text-white">
                Kursus Mengemudi Waras
              </h1>
              <Image src="/arrow.svg" alt="logo" width={100} height={100} />
            </div>
          </div>
          <p>
            Selamat datang di Kursus Mengemudi Waras, tempat di mana perjalanan
            Anda menuju keahlian mengemudi yang aman dan percaya diri dimulai!
            Buktikan kemampuanmu dengan Kursus Mengemudi Waras.
          </p>
        </div>
      </section>
      <section className="max-w-screen-2xl md:px-20 px-5 py-20" id="tentang">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <Image
            src="/about.webp"
            alt="about-image"
            width={500}
            height={400}
            className="w-full h-full object-cover rounded-3xl shadow-xl"
          />

          <div className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-2">
              <span className="md:text-xl text-lg font-semibold">
                Tentang Kami
              </span>
              <h1 className="md:text-3xl text-2xl font-semibold text-white">
                Kursus Mengemudi Waras
              </h1>
            </div>
            <p>
              Sebagai penyedia pelatihan mengemudi yang berpengalaman, Kursus
              Mengemudi Waras tidak hanya menawarkan kelas yang memenuhi
              persyaratan untuk mendapatkan izin mengemudi, tetapi juga
              memberikan pengajaran yang mendalam tentang keterampilan mengemudi
              defensif dan keselamatan di jalan raya.Tim instruktur kami yang
              terampil siap membimbing Anda melalui setiap langkah, memastikan
              bahwa Anda tidak hanya menguasai teknik mengemudi, tetapi juga
              memahami pentingnya perilaku berlalu lintas yang aman.
              Bergabunglah dengan Kursus Mengemudi Waras dan buatlah perjalanan
              Anda di jalan raya menjadi pengalaman belajar yang bermakna dan
              memuaskan.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-screen-2xl md:px-20 px-5 py-20" id="pelayanan">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <div className="flex flex-col space-y-3">
            <p className="md:text-xl text-lg font-semibold">
              Buktikan hasilnya hanya di
            </p>
            <div className="flex gap-3">
              <h1 className="md:text-3xl text-2xl font-semibold text-white">
                Kursus Mengemudi Waras
              </h1>
              <Image src="/arrow.svg" alt="logo" width={100} height={100} />
            </div>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-5 gap-8">
            <div className="flex flex-col items-center space-y-3">
              <div className="relative">
                <FaAddressCard className="absolute bottom-3 right-1 w-16 h-16 -z[50] text-white/10" />
                <AnimateCounter
                  total={200}
                  className="font-semibold text-4xl text-white"
                />
                <span className="font-semibold text-4xl">+</span>
              </div>
              <p className="font-medium text-md text-center">
                Lulusan Mengemudi
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="relative">
                <FaChartLine className="absolute bottom-3 -right-1 w-16 h-16 -z[50] text-white/10" />
                <AnimateCounter
                  total={10}
                  className="font-semibold text-4xl text-white"
                />
                <span className="font-semibold text-4xl">+</span>
              </div>
              <p className="font-medium text-md text-center">Pengalaman</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="relative">
                <FaClockRotateLeft className="absolute bottom-3 right-2 w-14 h-14 -z[50] text-white/10" />
                <AnimateCounter
                  total={500}
                  className="font-semibold text-4xl text-white"
                />
                <span className="font-semibold text-4xl">+</span>
              </div>
              <p className="font-medium text-md text-center">Jam Mengajar</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="relative">
                <BsBuildingGear className="absolute bottom-3 right-2 w-14 h-14 -z[50] text-white/10" />
                <AnimateCounter
                  total={3}
                  className="font-semibold text-4xl text-white"
                />
                <span className="font-semibold text-4xl">+</span>
              </div>
              <p className="font-medium text-md text-center">Kantor Cabang</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
