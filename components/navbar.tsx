"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { useState } from 'react';
import { BookMinus, Code, Contact, Dessert, Dot, Home, MousePointer2, ShieldCheck, UserCog } from 'lucide-react';
import Image from 'next/image';
import { ModeToggle } from './dark-mode'

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);


  return (
    // <div className="relative mb-20">
    //   <div className="absolute inset-0 bg-blur-md"></div>
    //   <nav className="fixed top-0 left-0 right-0 px-52 z-50">
    //     <div className="container mx-auto bg-white bg-opacity-5 py-2 rounded-b-2xl">
    //     <div className="flex items-center justify-between">
    //     <Link href="/">
    //       <span className="flex items-center focus:outline-none">
    //         {/* <Image src="/pu-pick-online.png" alt="" width={150} height={50} /> */}
    //         <div className="text-2xl mr-5 font-semibold">Mis Arianto</div>
    //         <span className="sr-only">Go to home page</span>
    //       </span>
    //     </Link>
    //     {/* Burger icon on mobile */}
    //     <div className="md:hidden flex items-center justify-between">
    //       <div className="flex items-center space-x-1">
    //         <ModeToggle />
    //       </div>
    //     </div>
    //     {/* Desktop menu */}
    //     <div className="hidden md:flex items-center">
    //       <div className="mr-4 flex items-center gap-x-2">
    //         <div className='relative'>
    //           <NavigationMenu>
    //             <NavigationMenuList>
    //               <NavigationMenuItem>
    //                 <Link href="/" className="flex items-center" legacyBehavior passHref>
    //                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    //                     <Home className="mr-2" />
    //                     Home
    //                   </NavigationMenuLink>
    //                 </Link>
    //               </NavigationMenuItem>
    //               <NavigationMenuItem>
    //                 <Link href="/" className="flex items-center" legacyBehavior passHref>
    //                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    //                     <ShieldCheck className="mr-2" />
    //                     Certificate
    //                   </NavigationMenuLink>
    //                 </Link>
    //               </NavigationMenuItem>
    //               <NavigationMenuItem>
    //                 <Link href="/produk/kategori" className="flex items-center" legacyBehavior passHref>
    //                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    //                     <Code className="mr-2" />
    //                     Projects
    //                   </NavigationMenuLink>
    //                 </Link>
    //               </NavigationMenuItem>
    //               <NavigationMenuItem>
    //                 <Link href="/produk/kategori" className="flex items-center" legacyBehavior passHref>
    //                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    //                     <UserCog className="mr-2" />
    //                     About
    //                   </NavigationMenuLink>
    //                 </Link>
    //               </NavigationMenuItem>
    //               <NavigationMenuItem>
    //                 <Link href="/produk/kategori" className="flex items-center" legacyBehavior passHref>
    //                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    //                     <Contact className="mr-2" />
    //                     Contact
    //                   </NavigationMenuLink>
    //                 </Link>
    //               </NavigationMenuItem>
    //             </NavigationMenuList>
    //           </NavigationMenu>
    //         </div>
    //         <div data-orientation="vertical" role="none" className="shrink-0 w-[1px] ml-6 mr-4 h-8 bg-slate-500/20"></div>

    //         <div className="relative">
    //           <ModeToggle />
    //         </div>
    //       </div>

    //     </div>
    //   </div>
    //   {/* Mobile menu */}
    //   {isMenuOpen && (
    //     <div className="md:hidden transform translate-x-0 transition-transform">
    //       <ul className="py-4 px-6">
    //         <li className="mb-4">
    //           <Link href="/" className="flex items-center">
    //             <Dessert className="mr-2" />
    //             Certificate
    //           </Link>
    //         </li>
    //         <li className="mb-4">
    //           <Link href="/" className="flex items-center">
    //             <BookMinus className="mr-2" />
    //             Projects
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   )}
    //     </div>
    //   </nav>
    // </div>

    // <div className="relative bg-blur-md py-2">
    //   <div className="container mx-auto">
    //     <nav className="px-36 flex items-center justify-center h-16">
    //     <div className="flex items-center justify-between">
    //     <Link href="/">
    //       <span className="flex items-center focus:outline-none">
    //         {/* <Image src="/pu-pick-online.png" alt="" width={150} height={50} /> */}
    //         <div className="text-2xl mr-5 font-semibold">Mis Arianto</div>
    //         <span className="sr-only">Go to home page</span>
    //       </span>
    //     </Link>
    //     {/* Burger icon on mobile */}
    //     <div className="md:hidden flex items-center justify-between">
    //       <div className="flex items-center space-x-1">
    //         <ModeToggle />
    //       </div>
    //     </div>
    //     {/* Desktop menu */}
    //     <div className="hidden md:flex items-center">
    //       <div className="mr-4 flex items-center gap-x-2">
    //         <div className='relative'>
    //           <NavigationMenu>
    //             <NavigationMenuList>
    //               <NavigationMenuItem>
    //                 <Link href="/" className="flex items-center" legacyBehavior passHref>
    //                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    //                     <Home className="mr-2" />
    //                     Home
    //                   </NavigationMenuLink>
    //                 </Link>
    //               </NavigationMenuItem>
    //               <NavigationMenuItem>
    //                 <Link href="/" className="flex items-center" legacyBehavior passHref>
    //                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    //                     <ShieldCheck className="mr-2" />
    //                     Certificate
    //                   </NavigationMenuLink>
    //                 </Link>
    //               </NavigationMenuItem>
    //               <NavigationMenuItem>
    //                 <Link href="/produk/kategori" className="flex items-center" legacyBehavior passHref>
    //                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    //                     <Code className="mr-2" />
    //                     Projects
    //                   </NavigationMenuLink>
    //                 </Link>
    //               </NavigationMenuItem>
    //               <NavigationMenuItem>
    //                 <Link href="/produk/kategori" className="flex items-center" legacyBehavior passHref>
    //                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    //                     <UserCog className="mr-2" />
    //                     About
    //                   </NavigationMenuLink>
    //                 </Link>
    //               </NavigationMenuItem>
    //               <NavigationMenuItem>
    //                 <Link href="/produk/kategori" className="flex items-center" legacyBehavior passHref>
    //                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    //                     <Contact className="mr-2" />
    //                     Contact
    //                   </NavigationMenuLink>
    //                 </Link>
    //               </NavigationMenuItem>
    //             </NavigationMenuList>
    //           </NavigationMenu>
    //         </div>
    //         <div data-orientation="vertical" role="none" className="shrink-0 w-[1px] ml-6 mr-4 h-8 bg-slate-500/20"></div>

    //         <div className="relative">
    //           <ModeToggle />
    //         </div>
    //       </div>

    //     </div>
    //   </div>
    //   {/* Mobile menu */}
    //   {isMenuOpen && (
    //     <div className="md:hidden transform translate-x-0 transition-transform">
    //       <ul className="py-4 px-6">
    //         <li className="mb-4">
    //           <Link href="/" className="flex items-center">
    //             <Dessert className="mr-2" />
    //             Certificate
    //           </Link>
    //         </li>
    //         <li className="mb-4">
    //           <Link href="/" className="flex items-center">
    //             <BookMinus className="mr-2" />
    //             Projects
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   )}
    //     </nav>
    //   </div>
    // </div>

    <nav className="relative max-w-screen-2xl mx-auto z-20 px-4 py-2 sm:px-6 md:block">
      <div className="flex items-center justify-between">
        <Link href="/">
          <span className="flex items-center focus:outline-none">
            {/* <Image src="/pu-pick-online.png" alt="" width={150} height={50} /> */}
            <div className="text-2xl font-semibold">Mis Arianto</div>
            <span className="sr-only">Go to home page</span>
          </span>
        </Link>
        {/* Burger icon on mobile */}
        <div className="md:hidden flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <ModeToggle />
          </div>
        </div>
        {/* Desktop menu */}
        <div className="hidden md:flex items-center">
          <div className="mr-4 flex items-center gap-x-2">
            <div className='relative'>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/" className="flex items-center" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <Home className="mr-2" />
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/" className="flex items-center" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <ShieldCheck className="mr-2" />
                        Certificate
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  {/* <NavigationMenuItem>
                    <NavigationMenuTrigger>
                    <ShieldCheck className="mr-2" />
                        Certificate
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <Image className="block w-full mb-8 border border-spacing-10 border-primary rounded-lg filter blur-sm hover:blur-none transition duration-300" src="/img/certificate/2022/1.png" width={6} height={6} loading="lazy" alt="" />
                              <div className="mb-2 mt-4 text-lg font-medium">
                              Certificate New
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                              How to Develop a Website and Optimize Setup in ECS Alibaba Cloud
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <Link href="/certificate/2022" className="flex items-center" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                              <Dot classNamemr-2 />
                              Tahun 2022
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link href="/certificate/2023" className="flex items-center" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <Dot classNamemr-2 />
                              Tahun 2023
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem> */}
                  <NavigationMenuItem>
                    <Link href="/produk/kategori" className="flex items-center" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <Code className="mr-2" />
                        Projects
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/produk/kategori" className="flex items-center" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <UserCog className="mr-2" />
                        About
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/produk/kategori" className="flex items-center" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <Contact className="mr-2" />
                        Contact
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div data-orientation="vertical" role="none" className="shrink-0 w-[1px] ml-6 mr-4 h-8 bg-slate-500/20"></div>

            <div className="relative">
              <ModeToggle />
            </div>
          </div>

        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden transform translate-x-0 transition-transform">
          <ul className="py-4 px-6">
            <li className="mb-4">
              <Link href="/" className="flex items-center">
                <Dessert className="mr-2" />
                Certificate
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/" className="flex items-center">
                <BookMinus className="mr-2" />
                Projects
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>


  );
}