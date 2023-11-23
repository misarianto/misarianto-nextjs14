import { ModeToggle } from '@/components/dark-mode'
import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Navbar from '@/components/navbar'
import { Button } from '@/components/ui/button';
import Certificate from '@/components/certificate';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import About from '@/components/about';
import Project from '@/components/project';
import TechStack from '@/components/tech';

export default function Home() {
  const polygonPoints = "73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%";

  return (
    <>
      {/* <header className="bg-opacity-80 backdrop-blur-lg py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-semibold">Mis Arianto</div>

          <nav>
            <ul className="flex space-x-6">
              <li className="h-12"><a href="#">Home</a></li>
              <li className="h-12"><a href="#">Certificate</a></li>
              <li className="h-12"><a href="#">Projects</a></li>
              <li className="h-12"><a href="#">About</a></li>
              <li className="h-12"><a href="#">Contact</a></li>
              <li className="h-12">
                <ModeToggle />
              </li>
            </ul>
          </nav>

        </div>
      </header> */}
      <Navbar />
      <div className="absolute flex transform-gpu justify-center overflow-hidden blur-3xl" aria-hidden="true">
        <div className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-yellow-600 to-yellow-500 opacity-25 dark:block" style={{ clipPath: `polygon(${polygonPoints})` }}></div>
      </div>
      <section className="pb-5 px-36">
        <div className="relative container px-4 pt-12 md:pt-20 mx-auto">
          <div className="flex flex-wrap items-center -mx-4 mb-20 2xl:mb-14">
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              <span className="text-lg font-bold text-primary">Assalamu'alaikum wr.wb</span>
              {/* <h2 className="max-w-2xl mt-5 mb-5 text-6xl 2xl:text-8xl  font-bold font-heading">"Temukan <span className="inline-block -rotate-1 animate-gradient-pulse rounded-xl ring-2 ring-primary/70 shadow-2xl shadow-primary/[0.25] ml-1 bg-gradient-to-r from-background via-primary/10 to-background px-4 py-1.5 text-lg tracking-tight text-foreground sm:px-4 sm:py-3 sm:text-3xl lg:text-4xl">Bakat Terbaik</span> kamu hingga ke titik maksimal"</h2> */}
              <h2 className="max-w-2xl mt-5 mb-5 text-6xl 2xl:text-8xl  font-bold font-heading">"Find your <span className="inline-block -rotate-1 animate-gradient-pulse rounded-xl ring-2 ring-primary/70 shadow-2xl shadow-primary/[0.25] ml-1 bg-gradient-to-r from-background via-primary/10 to-background px-4 py-1.5 text-lg tracking-tight text-foreground sm:px-4 sm:py-3 sm:text-3xl lg:text-4xl">Best Talent</span> to the maximum point"</h2>
              <p className="mb-12 lg:mb-16 2xl:mb-24 text-xl text-gray-100">Selalu bersyukur atas apa yang kita raih hari ini</p>
              <a className="inline-block px-12 py-3 text-lg font-bold bg-primary-foreground hover:bg-primary-foreground text-white border border-spacing-10 border-primary rounded-full transition duration-200" href="#">About</a>
            </div><div className="w-full lg:w-1/2 px-4">

              <img className="w-full" src="/me.png" alt="" /></div>
          </div>
          <div className="max-w-4xl mx-auto -mb-12 flex flex-wrap items-center justify-center">
            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-12">
              <img className="h-8 mx-auto" src="zospace-assets/logos/brands/nike.svg" alt="" />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-12">
              <img className="h-8 mx-auto" src="zospace-assets/logos/brands/marvel.svg" alt="" />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-12">
              <img className="h-8 mx-auto" src="zospace-assets/logos/brands/airbnb.svg" alt="" />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-12">
              <img className="h-8 mx-auto" src="zospace-assets/logos/brands/facebook.svg" alt="" />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-12">
              <img className="h-8 mx-auto" src="zospace-assets/logos/brands/tesla.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <About />
      <TechStack />
      <Certificate />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}
