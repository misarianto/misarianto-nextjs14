import Navbar from "@/components/navbar";
import Certificate from "@/components/certificate";
import Footer from "@/components/footer";
import About from "@/components/about";
import Project from "@/components/project";
import TechStack from "@/components/tech";

export default function Home() {
  const polygonPoints =
    "73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%";

  return (
    <>
      <Navbar />
      <div
        className="absolute flex transform-gpu justify-center overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-yellow-600 to-yellow-500 opacity-25 dark:block"
          style={{ clipPath: `polygon(${polygonPoints})` }}
        ></div>
      </div>
      {/* <section className="pb-5 px-36">
        <div className="relative container px-4 pt-12 md:pt-20 mx-auto">
          <div className="flex flex-wrap items-center -mx-4 mb-20 2xl:mb-14">
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              <span className="text-lg font-bold text-primary">Assalamu&apos;alaikum wr.wb</span>
              <h2 className="max-w-2xl mt-5 mb-5 text-6xl 2xl:text-8xl  font-bold font-heading">&quot;Find your <span className="inline-block -rotate-1 animate-gradient-pulse rounded-xl ring-2 ring-primary/70 shadow-2xl shadow-primary/[0.25] ml-1 bg-gradient-to-r from-background via-primary/10 to-background px-4 py-1.5 text-lg tracking-tight text-foreground sm:px-4 sm:py-3 sm:text-3xl lg:text-4xl">Best Talent</span> to the maximum point&quot;</h2>
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
      </section> */}
      <section className="pb-5 px-4 md:px-8 lg:px-12 xl:px-36 mt-32">
        <div className="relative container mx-auto">
          <div className="flex flex-wrap items-center -mx-4 mb-10 md:mb-20 2xl:mb-14">
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <span className="text-lg font-bold text-primary">
                Assalamu&apos;alaikum wr.wb
              </span>
              <h2 className="max-w-2xl mt-5 mb-5 text-3xl md:text-4xl lg:text-6xl 2xl:text-8xl font-bold font-heading">
              &quot;Find your&nbsp;
                <span className="inline-block -rotate-1 animate-gradient-pulse rounded-xl ring-2 ring-primary/70 shadow-2xl shadow-primary/[0.25] ml-1 bg-gradient-to-r from-background via-primary/10 to-background px-4 py-1.5 text-base md:text-xl lg:text-2xl tracking-tight text-foreground">
                  Best Talent
                </span>&nbsp;
                to the maximum point&quot;
              </h2>
              <p className="mb-6 md:mb-10 lg:mb-12 2xl:mb-16 text-base md:text-lg lg:text-xl text-gray-100">
                Selalu bersyukur atas apa yang kita raih hari ini
              </p>
              <a
                className="inline-block px-6 md:px-12 py-3 text-base md:text-lg font-bold bg-primary-foreground hover:bg-primary-foreground text-white border border-spacing-10 border-primary rounded-full transition duration-200"
                href="#"
              >
                About
              </a>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <img className="w-full" src="/me.png" alt="" />
            </div>
          </div>
          <div className="max-w-4xl mx-auto -mb-8 flex flex-wrap items-center justify-center">
            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-8 md:mb-12">
              <img
                className="h-6 md:h-8 mx-auto"
                src="zospace-assets/logos/brands/nike.svg"
                alt=""
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-8 md:mb-12">
              <img
                className="h-6 md:h-8 mx-auto"
                src="zospace-assets/logos/brands/marvel.svg"
                alt=""
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-8 md:mb-12">
              <img
                className="h-6 md:h-8 mx-auto"
                src="zospace-assets/logos/brands/airbnb.svg"
                alt=""
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-8 md:mb-12">
              <img
                className="h-6 md:h-8 mx-auto"
                src="zospace-assets/logos/brands/facebook.svg"
                alt=""
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-8 md:mb-12">
              <img
                className="h-6 md:h-8 mx-auto"
                src="zospace-assets/logos/brands/tesla.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <About />
      <TechStack />
      <Certificate />
      <Project />
      <Footer />
    </>
  );
}
