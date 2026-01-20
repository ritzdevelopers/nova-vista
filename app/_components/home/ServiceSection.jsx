"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ServiceSection() {
    return (
        <>
            <div
                id="services"
                className="max-w-7xl mx-auto px-4 md:px-4 xl:px-0"
            >
                <h1 className="font-semibold md:text-[36px] text-center mb-4 text-[28px]">
                    Our Services
                </h1>

                <div className="flex flex-col lg:flex-row bg-[#0B5C7A] rounded-2xl overflow-hidden">
                    {/* Left Content */}
                    <div className="lg:w-7/12 w-full flex items-center justify-center p-10 md:p-14 text-white">
                        <div className="flex flex-col items-center text-center">
                            <h2 className="md:text-[36px] text-[28px]  ">
                                Job Oriented Courses
                            </h2>

                            <p className="md:text-[26px] text-[18px] opacity-90 ">
                                <span className=" ">
                                    (Certificate / Diploma / Degree)
                                </span>
                                <br />

                                <p className=" mt-3">
                                    Certified By The National And International
                                    <br />
                                    Universities (Online / Offline)
                                </p>
                            </p>

                            <p className="mt-6 uppercase tracking-wide md:text-[16px] text-[12px    ] opacity-80 underline">
                                Admission / Registration
                            </p>

                            <Link
                                href="/Contact"
                                className="mt-6 bg-white md:text-[16px] text-[12px] text-[#012A3C] md:px-8 md:py-3 py-2 px-3 font-semibold hover:bg-gray-100 transition"
                            >
                                Apply Now
                            </Link>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="lg:w-5/12 w-full h-[300px] lg:h-auto">
                        <img
                            src="/static/scholarship.png" // replace with your image path
                            alt="Graduation"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-4 xl:px-0 mt-5 ">
                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Left Large Card */}
                        <div className="lg:col-span-2 relative rounded-xl overflow-hidden ">
                            <img
                                src="/static/scholarshipStudent.png" // replace with your image
                                alt="Graduation"
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay Text */}
                            <div className="absolute top-6 rounded-sm  right-6 text-white text-right">
                                <h2 className="md:text-[24px]  text-[18px] md:text-3xl font-bold mb-2 text-center">
                                    Honorary Doctorates <br /> and D.Litt
                                </h2>
                                <p className="bg-white text-black  py-1 md:text-[16px] text-[12px]  px-3  text-center">
                                    Non-Academic Awards for <br /> achievers and
                                    eminent persons
                                </p>
                            </div>
                        </div>

                        {/* Right Cards */}
                        <div className="flex flex-col gap-6">
                            <div className="bg-[#0B5C7A] text-white rounded-xl p-6 flex flex-col justify-center items-center text-center h-full">
                                <h3 className="md:text-[24px] text-[18px] font-semibold mb-4">
                                    Excellence Awards
                                </h3>
                                
                                    <Link  href={"/Excellence"} className="bg-white text-[#0B5C7A] px-4 py-2  md:text-[16px] text-[12px] hover:bg-gray-100 transition">
                                    Click To Know Award Categories
                                </Link>
                            </div>

                            <div className="bg-[#0B5C7A] text-white rounded-xl p-6 flex flex-col justify-center items-center text-center h-full">
                                <h3 className="text-xl font-semibold mb-4 md:text-[24px] text-[18px]">
                                    Professional Training Programs
                                </h3>
                                <Link  href={"/ProgramTraining"} className="bg-white text-[#0B5C7A] px-4 py-2  hover:bg-gray-100 transition md:text-[16px] text-[12px]">
                                    Click Here
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* First Image */}
                            <div className="relative overflow-hidden rounded-xl">
                                <Image
                                    src={"/static/school.png"}
                                    width={600}
                                    height={400}
                                    alt="school"
                                    className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-95"
                                />
                                <p className="absolute bottom-2 md:text-[24px]   text-[18px] text-white  px-6 py-1 rounded md:leading-7 leading-5">
                                    Establishment of Schools/Colleges/
                                    Universities & Off-Shore Campuses
                                </p>
                            </div>

                            {/* Second Image */}
                            <div className="relative overflow-hidden rounded-xl">
                                <Image
                                    src={"/static/laptop.png"}
                                    width={600}
                                    height={400}
                                    alt="laptop"
                                    className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-95"
                                />
                                <p className="absolute bottom-2 md:text-[24px]  md:leading-7 leading-5  text-[18px]  text-white px-6 py-1 rounded mb-4">
                                    Twinning, Exchange and dual certification{" "}
                                    programs
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
