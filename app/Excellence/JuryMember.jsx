"use client";

import Image from "next/image";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

export default function JuryMember() {
    const reduceMotion = useReducedMotion();

    return (
        <section className="relative py-10 mt-5" id="advisory">
            {/* Half Black Background */}
            <div className="absolute top-0 left-0 w-full h-[60%] lg:bg-black bg-white z-0"></div>

            {/* Content */}
            <div className="relative z-10 px-4 sm:px-6 max-w-8xl mx-auto">
                <h2 className="md:text-[36px] 
    text-[28px] 
    text-black 
    lg:text-white 
    text-center 
    mb-6">
                    Jury Members
                </h2>

                <motion.div
                    className="grid 
             grid-cols-[repeat(auto-fit,minmax(100px,1fr))] 
             gap-4 sm:gap-5 lg:gap-6 
             justify-items-center 
             max-w-6xl 
             mx-auto 
             mt-6"
                    variants={containerVariants}
                    initial={reduceMotion ? false : "hidden"}
                    whileInView={reduceMotion ? undefined : "show"}
                    viewport={{ amount: 0.2, once: true }}
                >
                    {[
                        {
                            img: "/static/SanaAbbasi.svg",
                            name: "Sana Abbasi",
                            country: "India",
                        },
                        {
                            img: "/static/Shreya.svg",
                            name: "Shreya Chaatopadhyaya",
                            country: "Germany",
                        },
                        {
                            img: "/static/DrAli.svg",
                            name: "Deepika Malik",
                            country: "UAE",
                        },
                        {
                            img: "/static/David.svg",
                            name: "David Wintenberg",
                            country: "India",
                        },
                        {
                            img: "/static/timothy.svg",
                            name: "Timothy Jung",
                            country: "India",
                        },

                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center text-center gap-3"
                            variants={itemVariants}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <Image
                                src={item.img}
                                alt={item.name}
                                width={200}
                                height={200}
                                className="w-[140px] h-[160px] sm:w-[160px] sm:h-[180px] md:w-[190px] md:h-[210px] object-cover rounded-md shadow-lg"
                            />
                            <h3 className="mt-2 font-medium text-gray-900 text-[15px] sm:text-[16px] md:text-[17px]">
                                {item.name}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
