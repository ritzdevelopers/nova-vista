"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import TopHeader from "./TopHeader";
import Link from "next/link";
import ContactModal from "./ContactModal";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [hideTop, setHideTop] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  // Hide TopHeader on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 60) {
        setHideTop(true); // scrolling down
      } else {
        setHideTop(false); // scrolling up
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      {/* ===== HEADER WRAPPER ===== */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white shadow-sm">
        
        {/* ===== TOP HEADER (auto hide) ===== */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            hideTop ? "max-h-0 opacity-0" : "max-h-[60px] opacity-100"
          }`}
        >
          <TopHeader />
        </div>

        {/* ===== MAIN HEADER ===== */}
        <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6">
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
          <nav className="hidden md:block">
            <ul className="flex gap-3 md:gap-4 lg:gap-6 xl:gap-10 text-xs md:text-sm lg:text-base">
              <Link href="/">Home</Link>
              <Link href="/Excellence">About Us</Link>
              <Link href="/ProgramTraining">Service</Link>
              <li className="cursor-pointer">Advisory Board</li>
              <Link href="/Contact">Contact</Link>
            </ul>
          </nav>

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
            className="md:hidden text-3xl font-bold"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Spacer for fixed header height */}
      <div className="h-[72px] md:h-[120px]" />


      {/* ===== OVERLAY ===== */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* ===== MOBILE DRAWER ===== */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[360px] bg-white z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <Image src="/logos/nova-vista-logo.svg" alt="logo" width={160} height={40} />
          <button className="text-3xl" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>

        {/* Navigation */}
        <ul className="flex flex-col gap-4 px-6 py-6 text-lg">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/Excellence" onClick={() => setOpen(false)}>About Us</Link>
          <Link href="/ProgramTraining" onClick={() => setOpen(false)}>Services</Link>
          <li onClick={() => setOpen(false)}>Advisory Board</li>
          <li
            onClick={() => {
              setOpen(false);
              setTimeout(() => setOpenModal(true), 300);
            }}
          >
            Contact
          </li>
        </ul>
      </div>

      {/* ===== MODAL ===== */}
      <ContactModal open={openModal} setOpen={setOpenModal} />
    </>
  );
}
