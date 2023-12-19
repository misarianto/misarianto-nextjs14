import Image from "next/image";
import Link from "next/link";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "./ui/button";

interface CertificateType {
    title: string;
    href: string;
    gambar: string;
    description: string;
}


export default function CardCertificate(props: CertificateType) {

    const { title, href, gambar, description } = props

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="w-full lg:w-1/3 px-4 mt-10 md:px-6 mb-16 lg:mb-0 cursor-pointer">
                    <div className="max-w-xs mx-auto lg:mx-0">
                        <Image className="object-cover h-56 rounded-t-lg hover:rotate-1 animate-gradient-pulse shadow-2xl shadow-primary/[0.25] bg-gradient-to-r block w-full mb-8 border border-spacing-10 border-primary rounded-lg filter blur-sm hover:blur-none transition duration-300" src={gambar} width={500} height={500} loading="lazy" alt="" />
                        <div className="flex">
                            <div className="ml-3">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <h6 className="inline-block animate-gradient-pulse rounded-xl ring-2 ring-primary/70 bg-gradient-to-r from-background via-primary/10 to-background px-4 py-1.5 tracking-tight text-foreground">{title.length > 50 ? `${title.slice(0, 50)}...` : title}</h6>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{title}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[90%] md:max-w-[80%] lg:max-w-[800px] mx-auto">
                <div className="flex items-center justify-center h-full">
                    <div className="overflow-y-auto">
                        <Image
                            className="block w-full border border-spacing-10 border-primary rounded-lg"
                            src={gambar}
                            width={800}
                            height={800}
                            loading="lazy"
                            alt=""
                        />
                        <h6 className="text-xl text-primary-foreground dark:text-primary font-bold mb-1">{title}</h6>
                    </div>
                </div>
            </DialogContent>

        </Dialog>

    );
}