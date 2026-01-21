import React from "react";
import Image from "next/image";
import Header from "../_components/header/Header";
import Footer from "../_components/footer/Footer";
import QueryFormSection from "../_components/programtraining/QueryFormSection";
import JuryMember from "./JuryMember";
import MotionSection from "../_components/motion/MotionSection";

export default function Excellence() {
    return (
        <>
            <Header />
            <MotionSection className="w-full bg-white">
                <div className="max-w-7xl mx-auto px-4 flex justify-center items-center">
                    <h2 className="text-center text-[22px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold tracking-wide leading-tight text-[#111111] my-8 w-full">
                        Certificate, Diploma, Degree Programs From
                    </h2>
                </div>
                <div className="bg-[#F6F6F6] px-4">
                    {/* Heading */}
                    <div className="max-w-7xl mx-auto">
                        {/* Logos Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 pt-8">
                            {/* Card */}
                            <div className="flex items-center justify-center bg-white shadow-md rounded-lg p-6 h-[250px]">
                                <Image
                                    src="/logos/arni.png"
                                    alt="ARN University"
                                    width={200}
                                    height={80}
                                    className="w-auto h-auto object-contain"
                                />
                            </div>

                            <div className="flex items-center justify-center bg-white shadow-md rounded-lg p-6 h-[250px]">
                                <Image
                                    src="/logos/integral.png"
                                    alt="Integral University"
                                    width={200}
                                    height={80}
                                    className="w-auto h-auto object-contain"
                                />
                            </div>

                            <div className="flex items-center justify-center bg-white shadow-md rounded-lg p-6 h-[250px]">
                                <Image
                                    src="/logos/nau.png"
                                    alt="NAU University"
                                    width={200}
                                    height={80}
                                    className="w-auto h-auto object-contain"
                                />
                            </div>

                            <div className="flex items-center justify-center bg-white shadow-md rounded-lg p-6 h-[250px]">
                                <Image
                                    src="/logos/royalamericanuniversity.png"
                                    alt="Royal American University"
                                    width={200}
                                    height={80}
                                    className="w-auto h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src="/static/award.png"
                    alt="Awards"
                    className="w-[860px] h-[484px] mx-auto object-contain pt-10 "
                />
                <MotionSection className="w-full bg-white py-12">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex items-center mb-6">
                            <h2 className="text-[22px] font-semibold md:text-[28px]  text-gray-800 mr-4">
                                Academic
                            </h2>
                            <div className="flex-grow h-[2px] bg-gray-300"></div>
                        </div>

                        {/* ================= GRID CONTENT ================= */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* ================= LEFT COLUMN (2/3) ================= */}
                            <div className="lg:col-span-2 flex flex-col gap-6">
                                {/* Top Row: 2 Boxes */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                                    {/* Box 1: Pre-Schools */}
                                    <div className="bg-white shadow-lg rounded-lg p-6  h-full">
                                        <h3 className="text-[18px] font-semibold text-[#1B78A1] mb-4 uppercase">
                                            PRE-SCHOOLS
                                        </h3>
                                        <ul className="text-[15px] font-regu text-gray-600 space-y-2">
                                            <li>
                                                – India’s Best Playschool Chain
                                            </li>
                                            <li>
                                                – Innovation in Early Learning /
                                                Child Development
                                            </li>
                                            <li>
                                                – Best Playschool in –
                                                City/State/Zone
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Box 2: Senior Secondary */}
                                    <div className="bg-white shadow-lg rounded-lg p-6  h-full">
                                        <h3 className="text-[18px] font-semibold text-[#1B78A1] mb-4 uppercase">
                                            SENIOR SECONDARY SCHOOLS
                                        </h3>
                                        <ul className="text-[15px] text-gray-600 space-y-2">
                                            <li>
                                                – India’s Best Chain of Senior
                                                Secondary Schools
                                            </li>
                                            <li>
                                                – India’s Best Boarding School.
                                            </li>
                                            <li>
                                                – School with best
                                                infrastructure.
                                            </li>
                                            <li>
                                                – Best Faculty amongst Senior
                                                Secondary Schools
                                            </li>
                                            <li>– Principal of the Year</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Bottom Row: Specialized Courses */}
                                <div className="bg-white shadow-lg rounded-lg p-6 ]">
                                    <h3 className="text-[18px] font-semibold text-[#1B78A1] mb-4 uppercase">
                                        SPECIALIZED COURSES
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-[15px] text-gray-600">
                                        <ul className="space-y-2">
                                            <li>
                                                – Best Vocational Training
                                                Institute
                                            </li>
                                            <li>
                                                – Best Clinical Research
                                                Institute
                                            </li>
                                            <li>
                                                – Best Teacher's Training
                                                Institute
                                            </li>
                                            <li>
                                                – Best Retail Management
                                                Institute
                                            </li>
                                            <li>– Best Banking Institute</li>
                                            <li>
                                                – Best Aviation Training
                                                Institute
                                            </li>
                                            <li>
                                                – Best Hotel Management
                                                Institute
                                            </li>
                                            <li>
                                                – Best Interior Designing
                                                Institute
                                            </li>
                                            <li>
                                                – Best Fashion Designing
                                                Institute
                                            </li>
                                            <li>
                                                – Best Beauty Training Institute
                                            </li>
                                            <li>
                                                – Best Animation & Multimedia
                                                Institute
                                            </li>
                                            <li>– Foreign Trade Education</li>
                                        </ul>
                                        <ul className="space-y-2">
                                            <li>
                                                – Best IT Training Institute
                                                (Hardware & Networking)
                                            </li>
                                            <li>
                                                – Best IT Training Institute
                                                (Software & Web Designing)
                                            </li>
                                            <li>
                                                – Best Jewellery Designing
                                                Institute
                                            </li>
                                            <li>
                                                – Best Textile Designing
                                                Institute.
                                            </li>
                                            <li>
                                                – Best Biotechnology Institute
                                            </li>
                                            <li>
                                                – Best Journalism & Mass
                                                Communication Institute
                                            </li>
                                            <li>
                                                – Best Institute for Financial
                                                Education
                                            </li>
                                            <li>
                                                – Best Language Training
                                                Institute
                                            </li>
                                            <li>– Best Online Education</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* ================= INDIVIDUAL & MISCELLANEOUS (SIDE BY SIDE) ================= */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Individual */}
                                    <div>
                                        <div className="flex items-center mb-6 mt-4">
                                            <h2 className="text-[22px] font-semibold md:text-[28px]  text-gray-800 mr-4">
                                                Individual
                                            </h2>
                                            <div className="flex-grow h-[2px] bg-gray-300"></div>
                                        </div>

                                        <div className="bg-white shadow-lg rounded-lg mb-6 px-6 py-6 ">
                                            <h3 className="text-[20px] font-semibold text-[#1B78A1] uppercase">
                                                Individual
                                            </h3>
                                            <ul className="text-[15px] text-gray-600 space-y-2  mt-4">
                                                <li>
                                                    – Business Leader of the
                                                    Year
                                                </li>
                                                <li>
                                                    – Women Business Leader of
                                                    the Year
                                                </li>
                                                <li>– Hall of Fame Award</li>
                                                <li>– CEO of the Year</li>
                                                <li>– CFO of the Year</li>
                                                <li>
                                                    – Education Leadership Award
                                                </li>
                                                <li>
                                                    – Educational Entrepreneur
                                                </li>
                                                <li>
                                                    – Award for Outstanding
                                                    Contribution to Education
                                                </li>
                                                <li>
                                                    – Visionary Leader Award
                                                </li>
                                                <li>– Best Director Award</li>
                                                <li>– Residential</li>
                                                <li>– Environment Friendly</li>
                                                <li>
                                                    – Property Consultant Of The
                                                    Year
                                                </li>
                                                <li>– Most Preferred Brand</li>
                                                <li>
                                                    – Integrated Township Of The
                                                    Year
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Miscellaneous */}
                                    <div>
                                        <div className="flex items-center mb-6 mt-4">
                                            <h2 className="text-[22px] font-semibold md:text-[28px] text-gray-800 mr-4">
                                                Miscellaneous
                                            </h2>
                                            <div className="flex-grow h-[2px] bg-gray-300"></div>
                                        </div>

                                        <div className="bg-white shadow-lg rounded-lg p-6">
                                            <h3 className="text-[18px] font-semibold text-[#1B78A1] mb-4 uppercase">
                                                Miscellaneous
                                            </h3>
                                            <ul className="text-[15px] text-gray-600 space-y-2">
                                                <li>
                                                    – Best Education Consultants
                                                </li>
                                                <li>
                                                    – Best Overseas Education
                                                    Consultants
                                                </li>
                                                <li>
                                                    – Best Education Technology
                                                    Company
                                                </li>
                                                <li>
                                                    – Best Teachers/Researchers
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ================= RIGHT COLUMN (1/3) ================= */}
                            <div className="lg:col-span-1 flex flex-col gap-6">
                                {/* Higher Education */}
                                <div className="bg-white shadow-lg rounded-lg p-6 h-auto">
                                    <h3 className="text-[18px] font-semibold text-[#1B78A1] mb-4 uppercase ">
                                        HIGHER EDUCATION
                                    </h3>
                                    <ul className="text-[15px] text-gray-600 space-y-3">
                                        <li>
                                            – Best Private University (North)
                                        </li>
                                        <li>
                                            – Best Private University (South)
                                        </li>
                                        <li>
                                            – Best Private University (East)
                                        </li>
                                        <li>
                                            – Best Private University (West)
                                        </li>
                                        <li>
                                            – Best Private Engineering College.
                                        </li>
                                        <li>
                                            – Best Infrastructure – Engineering
                                            Colleges.
                                        </li>
                                        <li>– Best Faculty – Engineering</li>
                                        <li>– Best Faculty – Management</li>
                                        <li>– Best Medical College.</li>
                                        <li>– Best Agricultural College.</li>
                                        <li>– Best Pharmacy College.</li>
                                        <li>– Best Polytecnic .</li>
                                        <li>
                                            – Excellence in Distance Learning
                                            Education.
                                        </li>
                                        <li>– Best B.Ed College</li>
                                        <li>– Best Fashion Design College</li>
                                        <li>– Best Hospitality Collage</li>
                                        <li>
                                            – Best Distance Learning University
                                        </li>
                                    </ul>
                                </div>

                                {/* Coaching Institutes */}
                                <div className="bg-white shadow-lg rounded-lg p-6">
                                    <h3 className="text-[18px] font-semibold text-[#1B78A1] mb-4 uppercase">
                                        COACHING INSTITUTES
                                    </h3>
                                    <ul className="text-[15px] text-gray-600 space-y-2">
                                        <li>
                                            – Best Engineering Entrance
                                            Institute
                                        </li>
                                        <li>
                                            – Best Medical Entrance Institute
                                        </li>
                                        <li>
                                            – Best Civil Services Entrance
                                            Institute
                                        </li>
                                        <li>– Best Bank/PO Entrance</li>
                                        <li>– Best Acting/Drama Institute</li>
                                        <li>– Best Dance Institute</li>
                                        <li>– Best Music Training Institute</li>
                                        <li>– Best Sports Coaching</li>
                                        <li>– Best Yoga Coaching Institute</li>
                                        <li>– Best Photography Classes</li>
                                        <li>– Best Cooking Classes</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </MotionSection>
            </MotionSection>
            <JuryMember />
            <QueryFormSection />
            <Footer />
        </>
    );
}
