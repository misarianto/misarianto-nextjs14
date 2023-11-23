import Navbar from "@/components/navbar";

export default function Certificate() {
    return (
        <>
        <Navbar />
        <section className="relative pt-24 px-36 md:pb-28 lg:pt-0 lg:pb-0 bg-black overflow-hidden">
            {/* <img className="absolute bottom-0 right-0" src="/me.png" alt="" /> */}
            <div className="relative z-10 container px-4 mx-auto">
                <div className="flex flex-wrap items-center -m-8">
                    <div className="w-full md:w-1/2 p-8">
                        <div className="md:max-w-lg">
                            <h2 className="mb-6 text-6xl md:text-7xl text-white font-bold tracking-px-n leading-tight">Join &amp; get 30% discount right now</h2>
                            <p className="mb-8 text-white text-opacity-70 font-medium md:max-w-md">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>
                            <div className="flex flex-wrap -m-2">
                                <div className="w-full md:w-auto p-2">
                                    <button className="py-4 px-6 w-full font-medium rounded-xl shadow-6xl focus:ring focus:ring-gray-300 bg-white hover:bg-gray-100 transition ease-in-out duration-200" type="button">Try 30 days free trial</button>
                                </div>
                                <div className="w-full md:w-auto p-2">
                                    <button className="inline-flex items-center justify-center py-4 px-6 w-full text-white font-medium border border-white border-opacity-20 hover:border-opacity-40 rounded-xl focus:ring focus:ring-white focus:ring-opacity-40 bg-transparent hover:bg-black hover:bg-opacity-5 transition ease-in-out duration-200" type="button">
                                        <svg className="mr-2.5" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.75 3.75C2.75 2.92157 3.42157 2.25 4.25 2.25H6.70943C7.03225 2.25 7.31886 2.45657 7.42094 2.76283L8.5443 6.13291C8.66233 6.48699 8.50203 6.87398 8.1682 7.0409L6.47525 7.88737C7.30194 9.72091 8.77909 11.1981 10.6126 12.0247L11.4591 10.3318C11.626 9.99796 12.013 9.83767 12.3671 9.9557L15.7372 11.0791C16.0434 11.1811 16.25 11.4677 16.25 11.7906V14.25C16.25 15.0784 15.5784 15.75 14.75 15.75H14C7.7868 15.75 2.75 10.7132 2.75 4.5V3.75Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                        <span>Book a call</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-8">
                        <img className="mx-auto" src="/me.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
        </>

    );
}