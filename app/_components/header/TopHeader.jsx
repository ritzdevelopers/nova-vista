"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import ContactModal from "./ContactModal";

export default function TopHeader() {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        // Check initial scroll position
        handleScroll();
        
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div
                className={`fixed top-0 left-0 right-0 w-full bg-white border-b border-[#0000001A] z-50 transition-all duration-300 ease-in-out ${
                    isScrolled 
                        ? "-translate-y-full opacity-0 pointer-events-none" 
                        : "translate-y-0 opacity-100"
                } hidden md:block`}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-center py-2">
                        {/* Left side */}
                        <div className="flex gap-6">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/icons/email.svg"
                                    alt="email"
                                    width={16}
                                    height={16}
                                />
                                <p className="text-[14px] text-gray-500">
                                    info@novavistaeducation.com
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <Image
                                    src="/icons/location.svg"
                                    alt="location"
                                    width={16}
                                    height={16}
                                />
                                <p className="text-[14px] text-gray-500">
                                    6th Floor, Nukleus, Plot 29, Sector 142,
                                    Noida
                                </p>
                            </div>
                        </div>

                        {/* Right side */}
                        <button
                            onClick={() => setOpen(true)}
                            className="bg-[#012A3C] text-white px-4 py-2 text-[16px]"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
            {/* Popup */}
            <ContactModal open={open} setOpen={setOpen} />
        </>
    );
}
