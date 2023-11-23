import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CardCertificate from "./card-certificate";

export default function Certificate() {
  // const polygonPoints = "63.1% 100.6%, 55.8% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%";

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
    {
      title: "Teknik Ethical Hacking dan Mengatasi Peretasan IT menggunakan Ilmu Ethical Hacking bagi Cyber Security Specialist, Pentester dan White Hat Hacker",
      href: "/certificate/2022/how-to-attract-more-traffic-to-our-website",
      gambar: "/img/certificate/cyber2.jpg",
      description: "Teknik Ethical Hacking dan Mengatasi Peretasan IT menggunakan Ilmu Ethical Hacking bagi Cyber Security Specialist, Pentester dan White Hat Hacker",
    },
    {
      title: "Berkarir Sebagai Backend Engineer dengan Golang",
      href: "/certificate/2022/how-to-attract-more-traffic-to-our-website",
      gambar: "/img/certificate/golang1.jpg",
      description: "Berkarir Sebagai Backend Engineer dengan Golang",
    },
    {
      title: "Berkarir Sebagai Backend Engineer dengan Golang",
      href: "/certificate/2022/how-to-attract-more-traffic-to-our-website",
      gambar: "/img/certificate/golang2.jpg",
      description: "Berkarir Sebagai Backend Engineer dengan Golang",
    },
    {
      title: "How to Attract More Traffic to our Website",
      href: "/certificate/2022/how-to-attract-more-traffic-to-our-website",
      gambar: "/img/certificate/2022/1.png",
      description: "How to Attract More Traffic to our Website",
    },
    {
      title: "How to Develop a Website and Optimize Setup in ECS Alibaba Cloud",
      href: "/certificate/2022/how-to-attract-more-traffic-to-our-website",
      gambar: "/img/certificate/2022/2.png",
      description:
        "How to Develop a Website and Optimize Setup in ECS Alibaba Cloud",
    },
    {
      title: "Web Geolocation dengan Laravel dan HERE Maps",
      href: "/certificate/2022/web-geolocation-dengan-laravel-dan-here-maps",
      gambar: "/img/certificate/2022/4.jpg",
      description: "Web Geolocation dengan Laravel dan HERE Maps",
    },
    {
      title: "Alibaba Cloud Relational Database Service Technical Operations",
      href: "/certificate/2023/alibaba-cloud-relational-database-service-technical-operations",
      gambar: "/img/certificate/2023/alibaba1.jpg",
      description: "Alibaba Cloud Relational Database Service Technical Operations",
    },
    {
      title: "Alibaba Cloud low-code tool in - Re-Cloud Challenges",
      href: "/certificate/2022/optimasi-kinerja-laravel-dengan-redis",
      gambar: "/img/certificate/2022/6.png",
      description: "Optimasi kinerja laravel dengan Redis",
    },
    {
      title: "Mengembangkan model database dengan python data analis",
      href: "/certificate/2022/mengembangkan-model-database-dengan-python-data-analis",
      gambar: "/img/certificate/2022/7.jpg",
      description: "Mengembangkan model database dengan python data analis",
    },
    {
      title: "Optimasi kinerja laravel dengan Redis",
      href: "/certificate/2022/optimasi-kinerja-laravel-dengan-redis",
      gambar: "/img/certificate/2022/8.jpg",
      description: "Optimasi kinerja laravel dengan Redis",
    },
    {
      title: "Alibaba Cloud Product- Re-Cloud Challenges",
      href: "/certificate/2023/alibaba-cloud-product",
      gambar: "/img/certificate/2023/webinar3.jpg",
      description: "Alibaba Cloud Product- Re-Cloud Challenges",
    },
  ];

  return (
    <>
      <section className="py-3 md:py-3">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="xs:max-w-sm md:max-w-sm lg:max-w-4xl mx-auto text-center mb-24">
              <span className="inline-flex items-center h-6 mb-4 px-2 text-xs uppercase font-medium  rounded-full">
                MY IT AWARD
              </span>
              <h1 className="font-heading tracking-tight text-4xl sm:text-5xl font-bold mb-4">
                My Certificate
              </h1>
              {/* <p className="text-lg text-gray-400">
                Sertifikat terbaru saat ini
              </p> */}
            </div>
            {/* <div className="flex items-center">
                <div className="border-l-4 border-primary h-8 mr-4"></div>
                <span className="text-xl font-semibold">2022</span>
            </div> */}

            <div className="flex flex-wrap -mx-4 md:-mx-6 items-center">
              {certificats.length > 0 &&
                certificats.map((item: any, index: number) => (
                  <CardCertificate key={index} {...item} />
                ))}
            </div>

            {/* <div className="flex items-center mt-20">
                <div className="border-l-4 border-primary h-8 mr-4"></div>
                <span className="text-xl font-semibold">2023</span>
            </div> */}

            {/* <div className="py-10 p-5 flex justify-end">
              <Link
                className="inline-flex items-center gap-x-1 justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-yellow-500 dark:bg-yellow-500 hover:bg-yellow-400 h-10 py-2 px-4 group relative"
                href="/certificate"
              >
                <span className="mr-1">More</span>
                <MoveRight />
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
