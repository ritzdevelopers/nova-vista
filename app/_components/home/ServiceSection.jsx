"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import MotionSection from "../motion/MotionSection";

export default function ServiceSection() {
    const reduceMotion = useReducedMotion();

    const textVariants = {
        hidden: (direction) => ({
            opacity: 0,
            x: direction === "left" ? -40 : 40,
        }),
        show: { opacity: 1, x: 0 },
    };

    return (
        <MotionSection
            id="services"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0"
        >
                <h1 className="font-semibold md:text-[36px] text-center mb-6 text-[28px] mt-8">
                    Our Services
                </h1>

                <div className="flex flex-col lg:flex-row bg-[#0B5C7A] rounded-2xl overflow-hidden shadow-lg">
                    {/* Left Content */}
                    <div
                        className="lg:w-7/12 w-full flex items-center justify-center p-8 sm:p-10 md:p-12 lg:p-14 text-white bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: "url('/static/aboutbg.png')",
                        }}
                    >
                        <motion.div
                            className="flex flex-col items-center text-center gap-4 max-w-xl"
                            custom="left"
                            variants={textVariants}
                            initial={reduceMotion ? false : "hidden"}
                            whileInView={reduceMotion ? undefined : "show"}
                            viewport={{ amount: 0.2, once: false }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <h2 className="md:text-[36px] text-[28px] font-semibold">
                                Job Oriented Courses
                            </h2>

                            <p className="md:text-[26px] text-[18px] leading-8 font-semibold">
                                <span>(Certificate / Diploma / Degree)</span>
                                <br />
                                <span className="mt-3 inline-block text-center">
                                    Certified By The National And International
                                    Universities (Online / Offline)
                                </span>
                            </p>

                            <p className="mt-4 uppercase tracking-wide text-xs text-[14px] md:text-[18px] opacity-80 underline">
                                Admission / Registration
                            </p>

                            <Link
                                href="/Contact"
                                className="mt-4 inline-flex justify-center bg-white md:text-[16px] text-[12px] text-[#012A3C] md:px-8 md:py-3 py-2 px-4 font-medium hover:bg-gray-100 transition  min-w-[160px]"
                            >
                                Apply Now
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Image */}
                    <div className="lg:w-5/12 w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-auto">
                        <img
                            src="/static/scholarship.png"
                            alt="Graduation"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-0 md:px-0 xl:px-0 mt-6">
                    <div className="grid lg:grid-cols-3 gap-4 lg:gap-6">
                        {/* Left Large Card */}
                        <div className="lg:col-span-2 relative rounded-xl overflow-hidden min-h-[260px] sm:min-h-[300px] shadow-lg group h-[370px]">
                            <img
                                src="/static/scholarshipStudent.png"
                                alt="Graduation"
                                className="w-full h-full object-over transition-transform duration-500 group-hover:scale-105 "
                            />
                            <div className="absolute inset-0 bg-black/30"></div>
                            {/* Overlay Text */}
                            <motion.div
                                className="absolute top-8 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-10 flex flex-col items-center md:items-end text-center md:text-right max-w-md"
                                custom="right"
                                variants={textVariants}
                                initial={reduceMotion ? false : "hidden"}
                                whileInView={reduceMotion ? undefined : "show"}
                                viewport={{ amount: 0.2, once: false }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <h2 className="text-white font-semibold text-center md:text-[24px] text-[18px] mb-4 leading-tight shadow-sm">
                                    Honorary Doctorates <br /> and D.Litt
                                </h2>

                                <div
                                    className="bg-white text-black py-3 px-5 shadow-lg 
                text-[14px] md:text-[16px] font-medium leading-snug text-center
                w-[265px] md:w-auto mx-auto"
                                >
                                    Non-Academic Awards for{" "}
                                    <br className="hidden md:block" /> achievers
                                    and eminent persons
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Cards */}
                        {/* Right Cards */}
                        <div className="flex flex-col lg:flex-col gap-4 lg:gap-6 sm:flex-row ">
                            <motion.div
                                className="bg-[#187ba1] text-white rounded-xl p-6 flex flex-col justify-center items-center text-center shadow-lg hover:shadow-xl transition-shadow w-full"
                                custom="left"
                                variants={textVariants}
                                initial={reduceMotion ? false : "hidden"}
                                whileInView={reduceMotion ? undefined : "show"}
                                viewport={{ amount: 0.2, once: false }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <h3 className="md:text-[24px] text-[18px] font-semibold mb-6">
                                    Excellence Awards
                                </h3>

                                <Link
                                    href={"/Excellence"}
                                    className="bg-white text-[#012A3C] px-6 py-3 text-[14px] md:text-[16px] font-medium hover:bg-gray-50 transition shadow-sm"
                                >
                                    Click To Know Award Categories
                                </Link>
                            </motion.div>

                            <motion.div
                                className="bg-[#187ba1] text-white rounded-xl p-6 flex flex-col justify-center items-center text-center shadow-lg hover:shadow-xl transition-shadow w-full"
                                custom="right"
                                variants={textVariants}
                                initial={reduceMotion ? false : "hidden"}
                                whileInView={reduceMotion ? undefined : "show"}
                                viewport={{ amount: 0.2, once: false }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <h3 className="md:text-[24px] text-[18px] font-semibold mb-3 leading-tight">
                                    Professional Training <br /> Programs
                                </h3>

                                <Link
                                    href={"/ProgramTraining"}
                                    className="bg-white text-[#012A3C] px-8 py-3 text-[14px] md:text-[16px] font-medium hover:bg-gray-50 transition shadow-sm"
                                >
                                    Click Here
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                            {/* First Image */}
                            <div
                                className="relative overflow-hidden rounded-xl 
                h-[200px] sm:h-auto shadow-lg"
                            >
                                <Image
                                    src="/static/school.png"
                                    width={600}
                                    height={400}
                                    alt="school"
                                    className="w-full h-full sm:h-auto object-cover 
                   transform transition-transform duration-300 hover:scale-95"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent"></div>

                                <motion.p
                                    className="absolute bottom-2 
                  text-[18px] md:text-[24px] 
                  leading-6 md:leading-7 
                  text-white px-4 sm:px-6 py-5"
                                    custom="left"
                                    variants={textVariants}
                                    initial={reduceMotion ? false : "hidden"}
                                    whileInView={reduceMotion ? undefined : "show"}
                                    viewport={{ amount: 0.2, once: false }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                >
                                    Establishment of
                                    Schools/Colleges/Universities & Off-Shore
                                    Campuses
                                </motion.p>
                            </div>

                            {/* Second Image */}
                            <div
                                className="relative overflow-hidden rounded-xl 
                h-[200px] sm:h-auto shadow-lg"
                            >
                                <Image
                                    src="/static/laptop.png"
                                    width={600}
                                    height={400}
                                    alt="laptop"
                                    className="w-full h-full sm:h-auto object-cover 
                   transform transition-transform duration-300 hover:scale-95"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent"></div>

                                <motion.p
                                    className="absolute bottom-2 
                  text-[18px] md:text-[24px] 
                  leading-6 md:leading-7 
                  text-white px-4 sm:px-6 py-5 mb-2"
                                    custom="right"
                                    variants={textVariants}
                                    initial={reduceMotion ? false : "hidden"}
                                    whileInView={reduceMotion ? undefined : "show"}
                                    viewport={{ amount: 0.2, once: false }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                >
                                    Twinning, Exchange and dual certification
                                    programs
                                </motion.p>
                            </div>
                        </div>
                    </div>
                </div>
        </MotionSection>
    );
}
