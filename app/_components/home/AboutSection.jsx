"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import MotionSection from "../motion/MotionSection";

const blockVariants = {
    hidden: (direction) => ({
        opacity: 0,
        x: direction === "left" ? -40 : 40,
    }),
    show: { opacity: 1, x: 0 },
};

export default function AboutSection() {
    const reduceMotion = useReducedMotion();

    return (
        <MotionSection
            id="about"
            className="w-full bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_55%,#f7e3bf_100%)]"
        >
            <div className="container-fluid max-w-7xl mx-auto px-4 sm:px-6 xl:px-0">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center py-12 md:py-16">

                    {/* Image */}
                    <motion.div
                        className="flex justify-center"
                        custom="left"
                        variants={blockVariants}
                        initial={reduceMotion ? false : "hidden"}
                        whileInView={reduceMotion ? undefined : "show"}
                        viewport={{ amount: 0.2, once: false }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <Image
                            src="/static/aboutusSection.png"
                            alt="About Image"
                            width={600}
                            height={600}
                            className="w-full h-auto max-w-[480px] md:max-w-[560px]"
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        className="space-y-6 text-center"
                        custom="right"
                        variants={blockVariants}
                        initial={reduceMotion ? false : "hidden"}
                        whileInView={reduceMotion ? undefined : "show"}
                        viewport={{ amount: 0.2, once: false }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    >
                        <h1 className="md:text-[36px] font-semibold text-[28px]">
                            About Us
                        </h1>

                        <p className="mx-auto text-[16px] leading-[1.65] md:text-[17px] text-[#1c1c1c] max-w-3xl">
                            Nova Vista Education is a global organisation that designs and implements national or international education strategies and programs / services. We work with governments, policymakers, educators, and employers across the globe to prepare students and professionals for the global workforce. We also create initiatives that assist students, scholars, and expand teaching and learning across cultures; and provide opportunities to promote educational equity and exchange of knowledge.
                        </p>

                        <h1 className="md:text-[36px] font-semibold mt-6 text-[28px]">
                            Our Vision
                        </h1>

                        <p className="mx-auto text-[16px] leading-[1.65] md:text-[17px] text-[#1c1c1c] max-w-3xl">
                            Nova Vista Education is not for profit trust established to help students from all strata of society to get high quality education. We have been collaborating & organizing several programs and initiatives for promoting education at national & international level. The only and ultimate aim of an individual is to get employed. For making the individual employable, Nova Vista has collaborated with national and international universities for certification in skill-oriented courses.
                        </p>
                    </motion.div>
                </div>
            </div>
        </MotionSection>
    );
}
