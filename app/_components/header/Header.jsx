"use client";

import { useState } from "react";
import Image from "next/image";
import TopHeader from "./TopHeader";
import Link from "next/link";

export default function Header() {
    const [open, setOpen] = useState(false);

    const scrollToSection = (id) => {
        setOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            {/* Top Header */}
            <TopHeader />

            <div className="sticky top-0 z-40 bg-white">
                {/* ===== MAIN HEADER ===== */}
                <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 relative">
                    {/* Logo */}
                    <Link href="/">
                        <div className="h-[48px] sm:h-[56px] w-[180px] sm:w-[220px] flex items-center shrink-0">
                            <Image
                                src="/logos/nova-vista-logo.svg"
                                alt="logo"
                                width={220}
                                height={56}
                                priority
                                className="w-full h-auto"
                            />
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <ul className="flex gap-3 md:gap-4 lg:gap-6 xl:gap-10 text-xs md:text-sm lg:text-base font-normal">
                            <Link href="/">
                                <li className="cursor-pointer ">Home</li>
                            </Link>
                            <Link href="/Excellence">
                                <li className="cursor-pointer">About</li>
                            </Link>
                            <Link href="/ProgramTraining">
                                <li className="cursor-pointer">Service</li>
                            </Link>
                            <li
                                className="cursor-pointer"
                                onClick={() => scrollToSection("advisory")}
                            >
                                Advisory Board
                            </li>
                            <li
                                className="cursor-pointer"
                                onClick={() => scrollToSection("contact")}
                            >
                                Contact
                            </li>
                        </ul>
                    </div>

                    {/* Desktop Right Logo */}
                    <div className="hidden md:block shrink-0">
                        <Image
                            src="/logos/nova-msme.png"
                            alt="Nova-MSME"
                            width={140}
                            height={56}
                            className="w-auto h-[40px]"
                        />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-3xl font-bold z-50"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle Menu"
                    >
                        {open ? "✕" : "☰"}
                    </button>
                </div>

                {/* Overlay */}
                <div
                    className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
                    ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
                    onClick={() => setOpen(false)}
                />

                {/* ===== MOBILE DRAWER ===== */}
                <div
                    className={`fixed top-0 right-0 h-full w-[85%] max-w-[360px] bg-white z-50
                    transform transition-transform duration-300
                    ${open ? "translate-x-0" : "translate-x-full"}`}
                >
                    {/* Drawer Header */}
                    <div className="flex justify-between items-center px-6 py-4 border-b">
                        <h2 className="text-lg font-semibold">Menu</h2>
                        <button
                            className="text-3xl"
                            onClick={() => setOpen(false)}
                        >
                            ✕
                        </button>
                    </div>

                    {/* Navigation */}
                    <ul className="flex flex-col gap-4 px-6 py-6 text-lg">
                        <li onClick={() => setOpen(false)}>Home</li>
                        <Link href="/Excellence" onClick={() => setOpen(false)}>
                            <li>About</li>
                        </Link>
                        <Link
                            href="/ProgramTraining"
                            onClick={() => setOpen(false)}
                        >
                            <li>Services</li>
                        </Link>
                        <li onClick={() => setOpen(false)}>Advisory Board</li>
                        <li onClick={() => setOpen(false)}>Contact</li>
                    </ul>

                    <hr />

                    {/* Contact Info */}
                    <div className="px-6 py-6 text-sm space-y-4">
                        <h3 className="font-semibold">Contact Info</h3>

                        <div className="flex items-center gap-3">
                            <Image
                                src="/icons/email.svg"
                                alt="email"
                                width={16}
                                height={16}
                            />
                            <p>info@novavistaeducation.com</p>
                        </div>

                        <div className="flex items-start gap-3">
                            <Image
                                src="/icons/location.svg"
                                alt="location"
                                width={16}
                                height={16}
                            />
                            <p>
                                6th Floor, Nukleus, Plot 29, Sector 142, Noida
                            </p>
                        </div>

                        <button className="w-full bg-[#012A3C] text-white py-2 rounded">
                            Contact Us
                        </button>
                    </div>

                    {/* MSME Logo */}
                    <div className="absolute bottom-6 w-full flex justify-center">
                        <Image
                            src="/logos/nova-msme.png"
                            alt="Nova-MSME"
                            width={120}
                            height={48}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
