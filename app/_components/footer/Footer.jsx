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

export default function Footer() {
    return (
        <footer className="bg-[#062b3b] text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-14">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* LEFT */}
                    <div>
                        <div className="h-[56px] w-[220px] flex items-center">
                            <Image
                                src="/logos/whitelogo.png"
                                alt="logo"
                                width={220}
                                height={56}
                                priority
                            />
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            Our team is here to help you take the next step —
                            whether it’s academic recognition or skill
                            enhancement.
                        </p>

                        <div className="flex gap-3">
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
                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white cursor-pointer">
                                Home
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                About Us
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Academic Recognition
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Personality Development
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Contact
                            </li>
                        </ul>
                    </div>

                    {/* PROGRAMS */}
                    <div>
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
                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Contact Us
                        </h3>

                        <div className="space-y-3 text-sm">
                           <div className="flex gap-3">
  <MapPin className="w-[20px] h-[20px] mt-1 shrink-0" />
  <p>
    Nova Vista Education, 6th Floor, Nukleus,
    Plot 29, Sector 142, Noida, Uttar Pradesh
  </p>
</div>


                            <div className="flex gap-3 items-center">
                                <Phone size={16} />
                                <p>+91 99587 77855</p>
                            </div>

                            <div className="flex gap-3 items-center">
                                <Mail size={16} />
                                <p>info@novavistaeducation.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM */}
            <div className="border-t border-white/10 py-4 text-center text-xs text-gray-400">
                © 2025 novavista. All rights reserved. Digital media planned by
                Ritz Media World
            </div>
        </footer>
    );
}
