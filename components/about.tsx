export default function About() {
    const polygonPoints = "63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%";

    return (
        <>
            <div className="absolute flex transform-gpu justify-center overflow-hidden blur-3xl" aria-hidden="true">
                <div className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-yellow-600 to-yellow-500 opacity-25 dark:block" style={{ clipPath: `polygon(${polygonPoints})` }}></div>
            </div>
            <section className="relative py-20 2xl:py-40">
                <div className="container px-4 mx-auto">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-wrap items-center -mx-4 mb-8">
                            {/* <div className="w-full px-4 mb-20">
                                <span className="text-lg font-bold text-blue-500">About</span>
                            </div> */}
                            <div className="w-full text-center mx-auto">
                                <span
                                    className="inline-block mb-4 px-3 py-1.5 text-sm uppercase tracking-tight font-semibold  rounded-full"
                                >
                                    Yuk Kenalan
                                </span>
                                <h2 className="font-heading mb-16 text-6xl tracking-tighter">
                                    About Me
                                </h2>

                            </div>
                            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                                <div className="mb-10 pb-14 border-b border-gray-50">
                                    <div className="flex flex-wrap">
                                        <div className="w-1/5">
                                            <img src="/quote-blue.svg" alt="" />
                                        </div>
                                        <div className="w-4/5">
                                            <h3 className="mb-14 text-4xl lg:text-3xl font-bold font-heading">Seorang Software Engineer dan Fullstack Developer</h3>
                                            <p className="mb-4 text-l">Saat ini aktif sebagai founder JetLog dan Haqqa Project yang sedang saya rintis di bawah nama Haqqa Group. dan juga aktif sebagai IT konsultan dan tenaga ahli IT di lingkungan Pemda</p>
                                            <p className="mb-4 text-l">Saya terlahir dari keluarga yang sangat sederhana. salah satu yang merubah kehidupan saya saat ini berkat rahmat Allah SWT dengan di limpahkan kemampuan untuk mengembangkan teknologi.</p>
                                            <p className="mb-4 text-l">Sehingga saya sangat tertatik dengan perkembangan teknologi yang terus berkembang, teknologi yang terus berkembang membuat saya memiliki banyak opsi untuk mengembangkan sesuatu yang lebih besar sesuai kebutuhan.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="w-4/5 ml-auto">
                                    <div className="flex mb-4">
                                        <img className="mr-1" src="/star-yellow.svg" alt="" />
                                        <img className="mr-1" src="/star-yellow.svg" alt="" />
                                        <img className="mr-1" src="/star-yellow.svg" alt="" />
                                        <img className="mr-1" src="/star-yellow.svg" alt="" />
                                        <img src="/star-light-gray.svg" alt="" />
                                    </div>
                                    <h4 className="mb-1 text-3xl font-bold">Mis Arianto</h4>
                                    <p>Founder Haqqa Group, JetLog, Haqqa Project</p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-4">
                                <img className="h-64 md:h-96 lg:h-144 mb-10 lg:mb-0 mx-auto rounded-full object-cover object-top" src="/me.png" alt="" />
                                {/* <img className="h-64 md:h-96 lg:h-144 mb-10 lg:mb-0 mx-auto rounded-full object-cover object-top" src="/men-circle-stars.png" alt="" /> */}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}