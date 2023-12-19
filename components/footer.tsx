import { Heart } from "lucide-react";
import { SiTelegram } from "react-icons/si";

export default function Footer() {
  return (
    <section className="relative pt-20 pb-8 overflow-hidden">
      {/* <img className="absolute top-0 left-0 min-w-max xs:min-w-0 w-112 xs:w-full h-full" src="/orange-background.png" alt="" /> */}
      <div className="relative container px-4 mx-auto">
        <div className="max-w-3xl mb-24 sm:mb-52 pr-8 sm:pr-0">
          <h1 className="font-heading text-4xl xs:text-5xl md:text-6xl font-semibold mb-20">
            <span>Contact Me</span>
            <br />
            <span className="font-serif italic">Anda Butuh Aplikasi ?</span>
            <br />
            <span>Mari Diskusi Sekarang</span>
          </h1>
          <div className="sm:flex items-center">
            <div className="sm:flex mb-6 sm:mb-0 sm:mr-12 items-center">
              <div className="flex mb-3 sm:mb-0 sm:mr-3 items-center justify-center w-12 h-12 rounded-full">
                <img src="/map-pin.svg" alt="" />
              </div>
              <div>
                <span className="block">
                  Jalan Perumbi Gg. Antara RT 002 RW 002 Kota Selatpanjang
                </span>
                <span className="block">
                  Kab.Kep. Meranti, Riau, Indonesia
                </span>
              </div>
            </div>
            <div className="sm:flex items-center">
              <div className="flex mb-3 sm:mb-0 sm:mr-3 items-center justify-center w-12 h-12 rounded-full">
                <SiTelegram className="w-10 h-10 text-blue-700" />
              </div>
              <div>
                <span className="block">@MisArianto</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t-2 border-orange-400 border-opacity-50">
          <div className="flex items-center justify-center">
            <span className="">
              Created with <Heart className="text-red-500 inline-block" /> Mis
              Arianto
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
