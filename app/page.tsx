import { METADATA } from "@/common/constant/metadata";
import { Metadata } from "next";
import { MdWhatsapp } from "react-icons/md";

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
                pelayanan maksimal (bisa dibuktikan dengan praktik langsung)
              </p>
              <button className="px-5 py-3 rounded-full bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] md:text-lg text-md text-[#303045] hover:text-white flex items-center gap-3 hover:bg-gradient-to-r hover:from-[#342F48] hover:to-[#9586D9] transition-all duration-300 max-w-[16rem]">
                <MdWhatsapp className="w-6 h-6" />
                Hubungi Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center md:px-20 px-5">
        <div
          className="px-7 py-5 flex gap-5 w-[1000px]"
          style={{
            background:
              "radial-gradient(99.99% 1.73% at 806.92% 0.90%, rgba(57.90, 51.64, 86.06, 0.95) 0%, #211E2E 100%)",
            boxShadow: "0px 4px 4px rgba(192.14, 183.37, 231.63, 0.01)",
            borderRadius: 90,
          }}
        >
          <div>
            <h1>Lokasi</h1>
          </div>
        </div>
      </section>
    </>
  );
}
