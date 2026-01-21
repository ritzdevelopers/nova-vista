import React from "react";
import {
    Linkedin,
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    MapPin,
    Phone,
    Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#062b3b] text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* LEFT */}
                    <div className="flex flex-col items-center text-center sm:col-span-2 lg:col-span-1 sm:items-start sm:text-left md:items-center md:text-center lg:items-start lg:text-left">
                        <div className="h-[56px] w-[220px] flex items-center justify-center sm:justify-start md:justify-center lg:justify-start">
                            <Image
                                src="/logos/whitelogo.png"
                                alt="logo"
                                width={220}
                                height={56}
                                priority
                            />
                        </div>
                        <p className="text-sm leading-relaxed mb-6 mt-4">
                            Our team is here to help you take the next step —
                            whether it’s academic recognition or skill
                            enhancement.
                        </p>

                        <div className="flex gap-3 justify-center sm:justify-start md:justify-center lg:justify-start">
                            <a className="bg-white text-[#062b3b] p-2 rounded-md hover:scale-105 transition">
                                <Linkedin size={16} />
                            </a>
                            <a className="bg-white text-[#062b3b] p-2 rounded-md hover:scale-105 transition">
                                <Facebook size={16} />
                            </a>
                            <a className="bg-white text-[#062b3b] p-2 rounded-md hover:scale-105 transition">
                                <Instagram size={16} />
                            </a>
                            <a className="bg-white text-[#062b3b] p-2 rounded-md hover:scale-105 transition">
                                <Twitter size={16} />
                            </a>
                            <a className="bg-white text-[#062b3b] p-2 rounded-md hover:scale-105 transition">
                                <Youtube size={16} />
                            </a>
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div className="text-center sm:text-left md:text-center lg:text-left">
                        <h3 className="text-white font-semibold mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <Link href={"/"}>
                                <li className="hover:text-white cursor-pointer">
                                    Home
                                </li>
                            </Link>
                            <Link href={"/Excellence"}>
                                <li className="hover:text-white cursor-pointer mt-1 mb-1">
                                    About Us
                                </li>
                            </Link>
                            <li className="hover:text-white cursor-pointer">
                                Academic Recognition
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Personality Development
                            </li>
                            <Link href={"/Contact"}>
                                <li className="hover:text-white cursor-pointer ">
                                    Contact
                                </li>
                            </Link>
                        </ul>
                    </div>

                    {/* PROGRAMS */}
                    <div className="text-center sm:text-left md:text-center lg:text-left">
                        <h3 className="text-white font-semibold mb-4">
                            Programs
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white cursor-pointer">
                                Academic Recognition
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Honorary Titles
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Personality Development
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Communication Training
                            </li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div className="text-center sm:col-span-2 lg:col-span-1 sm:text-center lg:text-left">
                        <h3 className="text-white font-semibold mb-1">
                            Contact Us
                        </h3>

                        <div className="space-y-3 text-sm">
                            <div className="flex gap-3 justify-center lg:justify-start">
                                <MapPin className="w-10 h-10 " />

                                <p className="text-left">
                                    Nova Vista Education, 6th Floor, Nukleus,
                                    Plot 29, Sector 142, Noida, Uttar Pradesh
                                </p>
                            </div>

                            <div className="flex gap-3 items-center justify-center lg:justify-start">
                                <Phone size={16} />
                                <p>+91 99587 77855</p>
                            </div>

                            <div className="flex gap-3 items-center justify-center lg:justify-start">
                                <Mail size={16} />
                                <p>info@novavistaeducation.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM */}
            <div className="border-t border-white/10 py-4 text-center text-xs text-gray-400">
                © 2025 NOVA VISTA. All rights reserved. Digital media planned by
                Ritz Media World
            </div>
        </footer>
    );
}
