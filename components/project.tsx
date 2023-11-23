import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CardCertificate from "./card-certificate";

export default function Project() {

  const polygonPoints =
    "63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%";

  const certificats: {
    title: string;
    href: string;
    gambar: string;
    description: string;
  }[] = [
    {
      title: "Teknik Ethical Hacking dan Mengatasi Peretasan IT menggunakan Ilmu Ethical Hacking bagi Cyber Security Specialist, Pentester dan White Hat Hacker",
      href: "/certificate/2022/how-to-attract-more-traffic-to-our-website",
      gambar: "/img/certificate/cyber1.jpg",
      description: "Teknik Ethical Hacking dan Mengatasi Peretasan IT menggunakan Ilmu Ethical Hacking bagi Cyber Security Specialist, Pentester dan White Hat Hacker",
    },
  ];

  return (
    <>
      <section className="py-3 mt-20 md:py-3">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="xs:max-w-sm md:max-w-sm lg:max-w-4xl mx-auto text-center mb-24">
              <h1 className="font-heading tracking-tight text-4xl sm:text-5xl font-bold mb-4">
                My Project
              </h1>
            </div>

            <div className="flex flex-wrap -mx-4 md:-mx-6 items-center">
              {/* {certificats.length > 0 &&
                certificats.map((item: any, index: number) => (
                  <CardCertificate key={index} {...item} />
                ))} */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
