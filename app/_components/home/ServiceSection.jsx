"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ServiceSection() {
    return (
        <>
            <div
                id="services"
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0"
            >
                <h1 className="font-semibold md:text-[36px] text-center mb-6 text-[28px]">
                    Our Services
                </h1>

                <div className="flex flex-col lg:flex-row bg-[#0B5C7A] rounded-2xl overflow-hidden shadow-lg">
                    {/* Left Content */}
                    <div className="lg:w-7/12 w-full flex items-center justify-center p-8 sm:p-10 md:p-12 lg:p-14 text-white">
                        <div className="flex flex-col items-center text-center gap-4 max-w-xl">
                            <h2 className="md:text-[36px] text-[28px]">
                                Job Oriented Courses
                            </h2>

                            <p className="md:text-[24px] text-[18px] opacity-90 leading-8">
                                <span>
                                    (Certificate / Diploma / Degree)
                                </span>
                                <br />
                                <span className="mt-3 inline-block">
                                    Certified By The National And International
                                    <br />
                                    Universities (Online / Offline)
                                </span>
                            </p>

                            <p className="mt-4 uppercase tracking-wide text-xs sm:text-sm md:text-base opacity-80 underline">
                                Admission / Registration
                            </p>

                            <Link
                                href="/Contact"
                                className="mt-4 inline-flex justify-center bg-white md:text-[16px] text-[12px] text-[#012A3C] md:px-8 md:py-3 py-2 px-4 font-semibold hover:bg-gray-100 transition rounded-full min-w-[160px]"
                            >
                                Apply Now
                            </Link>
                        </div>
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
                        <div className="lg:col-span-2 relative rounded-xl overflow-hidden min-h-[260px] sm:min-h-[300px] shadow-lg">
                            <img
                                src="/static/scholarshipStudent.png"
                                alt="Graduation"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent"></div>
                            {/* Overlay Text */}
                            <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                                <h2 className="md:text-[24px] text-[18px] md:text-3xl font-bold mb-2">
                                    Honorary Doctorates <br /> and D.Litt
                                </h2>
                                <p className="bg-white text-black py-1 md:text-[16px] text-[12px] px-3 inline-block rounded">
                                    Non-Academic Awards for achievers and eminent persons
                                </p>
                            </div>
                        </div>

                        {/* Right Cards */}
                        <div className="flex flex-col gap-4 lg:gap-6">
                            <div className="bg-[#0B5C7A] text-white rounded-xl p-6 sm:p-8 flex flex-col justify-center items-center text-center h-full shadow-md">
                                <h3 className="md:text-[24px] text-[18px] font-semibold mb-4">
                                    Excellence Awards
                                </h3>
                                
                                    <Link  href={"/Excellence"} className="bg-white text-[#0B5C7A] px-4 py-2  md:text-[16px] text-[12px] hover:bg-gray-100 transition rounded-full min-w-[170px]">
                                    Click To Know Award Categories
                                </Link>
                            </div>

                            <div className="bg-[#0B5C7A] text-white rounded-xl p-6 sm:p-8 flex flex-col justify-center items-center text-center h-full shadow-md">
                                <h3 className="text-xl font-semibold mb-4 md:text-[24px] text-[18px]">
                                    Professional Training Programs
                                </h3>
                                <Link  href={"/ProgramTraining"} className="bg-white text-[#0B5C7A] px-4 py-2  hover:bg-gray-100 transition md:text-[16px] text-[12px] rounded-full min-w-[150px]">
                                    Click Here
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                            {/* First Image */}
                            <div className="relative overflow-hidden rounded-xl min-h-[220px] shadow-lg">
                                <Image
                                    src={"/static/school.png"}
                                    width={600}
                                    height={400}
                                    alt="school"
                                    className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-95"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent"></div>
                                <p className="absolute bottom-2 md:text-[22px] text-[18px] text-white px-4 sm:px-6 py-2 rounded md:leading-7 leading-5">
                                    Establishment of Schools/Colleges/
                                    Universities & Off-Shore Campuses
                                </p>
                            </div>

                            {/* Second Image */}
                            <div className="relative overflow-hidden rounded-xl min-h-[220px] shadow-lg">
                                <Image
                                    src={"/static/laptop.png"}
                                    width={600}
                                    height={400}
                                    alt="laptop"
                                    className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-95"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent"></div>
                                <p className="absolute bottom-2 md:text-[22px] md:leading-7 leading-5 text-[18px] text-white px-4 sm:px-6 py-2 rounded mb-2">
                                    Twinning, Exchange and dual certification programs
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
