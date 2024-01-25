import { METADATA } from "@/common/constant/metadata";
import { Metadata } from "next";
import { MdWhatsapp } from "react-icons/md";
import Image from "next/image";
import AnimateCounter from "@/common/components/elements/AnimateCounter";
import { FaAddressCard, FaChartLine, FaRegHandshake } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { BsBuildingGear } from "react-icons/bs";
import Breakline from "@/common/components/elements/Breakline";
import { IoMdPricetags } from "react-icons/io";
import { CiFaceSmile } from "react-icons/ci";
import { GrHostMaintenance, GrSchedule } from "react-icons/gr";
import { IoCarOutline } from "react-icons/io5";
import Card from "@/common/components/elements/Card";
import Link from "next/link";

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
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 md:px-20 px-5 max-w-screen-2xl bg-gradient-to-r from-[#343045] via-[#343045]/90 to-[#343045]/20">
          <div className="lg:col-span-3 space-y-5 h-screen flex flex-col justify-center">
            <div className="flex flex-col gap-5 ">
              <h1 className="md:text-5xl text-4xl font-semibold">
                Kursus Mengemudi Terbaik di Krian
              </h1>
              <p className="md:text-lg text-md">
                Kursus Mengemudi Manual atau Matic dan Pembuatan SIM dengan
                harga bersaing dan pelayanan maksimal
              </p>
              <Link
                href="https://wa.me/6289679047230/"
                target="_blank"
                className="px-5 py-3 rounded-full bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] md:text-lg text-md text-[#303045] hover:text-white flex items-center gap-3 hover:bg-gradient-to-r hover:from-[#342F48] hover:to-[#9586D9] transition-all duration-300 max-w-[16rem]"
              >
                <MdWhatsapp className="w-6 h-6" />
                Hubungi Sekarang
              </Link>
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
      <section className="max-w-screen-2xl md:px-20 px-5 py-20">
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
          <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-5 gap-8 md:pt-0 pt-3">
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
      <section
        className="max-w-screen-2xl md:px-20 px-5 py-20 flex flex-col space-y-5 items-center justify-center"
        id="fasilitas"
      >
        <div className="flex flex-col items-center space-y-5 pb-5">
          <div className="flex flex-col space-y-3 items-center">
            <p className="md:text-xl text-lg font-semibold">
              Kenapa Memilih Kami?
            </p>
            <h1 className="md:text-3xl text-2xl font-semibold text-white">
              Kami Memberikan Fasilitas dan Service Terbaik
            </h1>
          </div>
          <Breakline className="w-24 border-2" />
          <p className="text-md">
            Beberapa keunggulan yang kami miliki untuk menjaga kualitas dan mutu
            pengajaran yang baik
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
          <div className="relative">
            <Image
              src="/about.webp"
              alt="fasilitas-image"
              width={500}
              height={500}
              className="w-full object-cover rounded-2xl"
            />
            <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-gradient-to-t from-[#343045]/90 via-[#343045]/60 to-[#343045]/20">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <FaRegHandshake className="w-16 h-16 text-white/50" />
                <p className="text-xl font-reguler text-white/90">Terpercaya</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/about.webp"
              alt="fasilitas-image"
              width={500}
              height={500}
              className="w-full object-cover rounded-2xl"
            />
            <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-gradient-to-t from-[#343045]/90 via-[#343045]/60 to-[#343045]/20">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <IoMdPricetags className="w-16 h-16 text-white/50" />
                <p className="text-xl font-reguler text-white/90">
                  Harga Kompetitif
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/about.webp"
              alt="fasilitas-image"
              width={500}
              height={500}
              className="w-full object-cover rounded-2xl"
            />
            <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-gradient-to-t from-[#343045]/90 via-[#343045]/60 to-[#343045]/20">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <CiFaceSmile className="w-16 h-16 text-white/50" />
                <p className="text-xl font-reguler text-white/90">
                  Pelayanan Terbaik
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/about.webp"
              alt="fasilitas-image"
              width={500}
              height={500}
              className="w-full object-cover rounded-2xl"
            />
            <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-gradient-to-t from-[#343045]/90 via-[#343045]/60 to-[#343045]/20">
              <div className="flex flex-col space-y-2 items-center justify-center h-full w-full">
                <GrSchedule className="w-14 h-14 text-white/50" />
                <p className="text-xl font-reguler text-white/90">
                  Jadwal Fleksibel
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/about.webp"
              alt="fasilitas-image"
              width={500}
              height={500}
              className="w-full object-cover rounded-2xl"
            />
            <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-gradient-to-t from-[#343045]/90 via-[#343045]/60 to-[#343045]/20">
              <div className="flex flex-col space-y-2 items-center justify-center h-full w-full">
                <GrHostMaintenance className="w-14 h-14 text-white/50" />
                <p className="text-xl font-reguler text-white/90">
                  Maintenance Rutin
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/about.webp"
              alt="fasilitas-image"
              width={500}
              height={500}
              className="w-full object-cover rounded-2xl"
            />
            <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-gradient-to-t from-[#343045]/90 via-[#343045]/60 to-[#343045]/20">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <IoCarOutline className="w-16 h-16 text-white/50" />
                <p className="text-xl font-reguler text-white/90">
                  Gratis Antar Jemput
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-screen-2xl md:px-20 px-5 py-20" id="pelayanan">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <div className="flex flex-col space-y-3">
            <p className="md:text-xl text-lg font-semibold">
              Pilihan Paket yang tersedia di
            </p>
            <div className="flex gap-3">
              <h1 className="md:text-3xl text-2xl font-semibold text-white">
                Kursus Mengemudi Waras
              </h1>
              <Image src="/arrow.svg" alt="logo" width={100} height={100} />
            </div>
          </div>
          <p>
            Kami menawarkan Paket Latihan Manual dan Matic yang tentu saja
            dengan harga bersaing dan pelayanan yang maksimal. Kita akan
            diajarkan mulai dari dasar seperti pengenalan bagian-bagian mobil,
            pedal gas, kopling, rem, tanjakan atau turunan, dan juga parkir.
          </p>
        </div>
        <h1 className="md:text-2xl text-xl font-medium text-white py-10 text-center">
          Paket Manual/Matic
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-7 ">
          <Card className="flex flex-col space-y-10 items-center bg-[#46415d] py-10">
            <h1 className="md:text-2xl text-xl font-medium text-white text-center">
              Intensif
            </h1>
            <p>
              <sup className="text-xl text-white/80">Rp</sup>
              <span className="text-5xl font-semibold text-white">650</span>
              <sub className="text-xl text-white/80">rb</sub>
            </p>
            <div className="flex flex-col space-y-2 items-center text-md">
              <p>10x Pertemuan</p>
              <p>@2jam/pertemuan</p>
            </div>
          </Card>
          <Card className="flex flex-col space-y-10 items-center bg-[#46415d] py-10">
            <h1 className="md:text-2xl text-xl font-medium text-white text-center">
              Ekonomis
            </h1>
            <p>
              <sup className="text-xl text-white/80">Rp</sup>
              <span className="text-5xl font-semibold text-white">650</span>
              <sub className="text-xl text-white/80">rb</sub>
            </p>
            <div className="flex flex-col space-y-2 items-center text-md">
              <p>5x Pertemuan</p>
              <p>2 jam & 3 jam pertemuan</p>
            </div>
          </Card>
          <Card className="flex flex-col space-y-10 items-center bg-[#46415d] py-10">
            <h1 className="md:text-2xl text-xl font-medium text-white text-center">
              Intensif + SIM
            </h1>
            <p>
              <sup className="text-xl text-white/80">Rp</sup>
              <span className="text-5xl font-semibold text-white">650</span>
              <sub className="text-xl text-white/80">rb</sub>
            </p>
            <div className="flex flex-col space-y-2 items-center text-md">
              <p>10x Pertemuan</p>
              <p>@2jam/pertemuan</p>
              <p>Pembuatan SIM A</p>
            </div>
          </Card>
          <Card className="flex flex-col space-y-10 items-center bg-[#46415d] py-10">
            <h1 className="md:text-2xl text-xl font-medium text-white text-center">
              Ekonomis + SIM
            </h1>
            <p>
              <sup className="text-xl text-white/80">Rp</sup>
              <span className="text-5xl font-semibold text-white">650</span>
              <sub className="text-xl text-white/80">rb</sub>
            </p>
            <div className="flex flex-col space-y-2 items-center text-md">
              <p>5x Pertemuan</p>
              <p>2 jam & 3 jam pertemuan</p>
              <p>Pembuatan SIM A</p>
            </div>
          </Card>
        </div>
        <div className="flex justify-center py-10">
          <Link
            href="https://wa.me/6289679047230/"
            target="_blank"
            className="px-5 py-3 rounded-full bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] md:text-lg text-md text-[#303045] hover:text-white flex items-center gap-3 hover:bg-gradient-to-r hover:from-[#342F48] hover:to-[#9586D9] transition-all duration-300 max-w-[16rem]"
          >
            <MdWhatsapp className="w-6 h-6" />
            Hubungi Sekarang
          </Link>
        </div>
      </section>
      <section
        className="max-w-screen-2xl md:px-20 px-5 py-20 flex flex-col items-center"
        id="kontak"
      >
        <div className="flex flex-col space-y-5 items-center text-center">
          <div className="flex flex-col space-y-3">
            <p className="md:text-xl text-lg">Informasi Kontak & Lokasi</p>
            <h1 className="md:text-3xl text-2xl text-white font-semibold">
              Kursus Mengemudi Waras
            </h1>
          </div>
          <Breakline className="w-24 border-2" />
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.6338558042576!2d112.60473397409189!3d-7.394859892615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e780926c09e9f11%3A0x897642cbd42751e4!2sKursus%20Mengemudi%20Waras!5e0!3m2!1sid!2sid!4v1706179091577!5m2!1sid!2sid"
          width="600"
          height="450"
          className="w-full h-[500px] rounded-xl my-10"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
