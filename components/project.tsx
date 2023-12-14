import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CardProject from "./card-project";

export default function Project() {

  const polygonPoints =
    "63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%";

  const projects: {
    title: string;
    href: string;
    gambar: string;
    description: string;
  }[] = [
    {
      title: "E-Planning",
      href: "https://sipd.merantikab.go.id/e-planning/",
      gambar: "/img/apps/e-planning.png",
      description: "Aplikasi yang menginovasi proses musrenbang kelurahan, musrenbang kecamatan, forum Organisasi Perangkat Daerah (OPD), pokok-pokok pikiran dewan, musrenbang Kabupaten/Kota, hingga terbentuk rancangan RKPD yang lebih transparan, cepat, terintegrasi, konsisten dan sesuai dengan aturan yang berlaku.",
    },
    {
      title: "DIKEMAS",
      href: "https://dikemas.merantikab.go.id/",
      gambar: "/img/apps/dikemas.png",
      description: "Survei Kepuasan Masyarakat (SKM) adalah kegiatan pengukuran secara komprehensif tingkat kepuasan masyarakat terhadap kualitas layanan yang diberikan oleh penyelenggara pelayanan publik. Indeks Kepuasan Masyarakat (IKM) adalah hasil pengukuran dari kegiatan Survei Kepuasan Masyarakat berupa angka.",
    },
    {
      title: "Smart City Meranti",
      href: "https://smartcity.merantikab.go.id/",
      gambar: "/img/apps/smartcity.png",
      description: "SmartCity Meranti berbasis GIS (Geographic Information System) atau sistem informasi geografis adalah alat berbasis komputer untuk memetakan dan menganalisis hal-hal yang ada dan peristiwa-peristiwa yang terjadi di bumi. Teknologi GIS mengintegrasikan database umum dengan operasi seperti kueri dan analisis statistik dengan visualisasi unik. GIS juga dapat menampilkan aspek geografis serta manfaat analisis yang ditawarkan oleh peta.",
    },
    {
      title: "E-P3KE",
      href: "https://ep3ke.merantikab.go.id/",
      gambar: "/img/apps/epke3.png",
      description: "Aplikasi Pengukuran dan pengambil kebijakan terhadap kemiskinan ekstrim yang berbasis GIS sehingga terlihat peningkatan dan penurunan Miskin Ekstrim dari hasil analisa menggunakan sistem EP3KE, hasil analisa dari sistem ini bisa menghasilkan sebaran desa yang masih tinggi angka miskin ekstrim serta melihat hasil evaluasi anggaran sudah tepat sasaran atau belum dari realisasi anggaran yang sudah tersedia",
    },
    {
      title: "YAYASAN PERMATA",
      href: "https://yayasanpermata.com/",
      gambar: "/img/apps/yayasanpermata.png",
      description: "Portal Yayasan, Sekolah, PPDB, SPP, Absensi, dan Penggajian",
    },
    {
      title: "E-Sakip",
      href: "http://e-sakip.merantikab.go.id/",
      gambar: "/img/apps/e-sakip.png",
      description: "Sistem Akuntabilitas Kinerja Instansi Permerintah Daerah",
    },
    {
      title: "SITAMAN",
      href: "http://sitaman.merantikab.go.id/",
      gambar: "/img/apps/sitaman.png",
      description: "Sistem Informasi Taging dan Mandatori",
    },
    {
      title: "ES-KRIM",
      href: "http://es-krim.merantikab.go.id/",
      gambar: "/img/apps/es-krim.png",
      description: "Elektronik Sistem Klinik Riset dan Inovasi Meranti berisi hasil kajian dan inovasi daerah",
    },
    {
      title: "Toko Online",
      href: "https://cu-pick-online.vercel.app/",
      gambar: "/img/apps/tokoline.png",
      description: "Toko Online yang dibangun dengan Next.js, Tailwindcss, Redux, Typescript",
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
              {projects.length > 0 &&
                projects.map((item: any, index: number) => (
                  <CardProject key={index} {...item} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
