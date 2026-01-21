"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const formVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

const cardsContainerVariants = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};

export default function ContactSection() {
    const reduceMotion = useReducedMotion();

    return (
        <section
            id="contact"
            className="relative w-full py-10 scroll-mt-28"
        >
            <div className="relative max-w-[1280px] mx-auto px-4">
                {/* ================= IMAGE SECTION ================= */}
                <div className="relative">
                    <Image
                        src="/static/employes.png"
                        alt="Office Team"
                        width={1400}
                        height={600}
                        className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                    />

                    {/* Overlay – Desktop only */}
                    <div className="hidden lg:block absolute inset-0 bg-black/20"></div>

                    {/* Form Overlay – Desktop */}
                <div className="hidden lg:flex absolute inset-0 items-center justify-end px-6 mr-[-50px]">
                    <motion.div
                        className="w-[500px] lg:w-[380px] xl:w-[600px]"
                        variants={formVariants}
                        initial={reduceMotion ? false : "hidden"}
                        whileInView={reduceMotion ? undefined : "show"}
                        viewport={{ amount: 0.2, once: true }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <ContactForm />
                    </motion.div>
                </div>
                </div>

                {/* ================= FORM – MOBILE ================= */}
                <div className="flex lg:hidden justify-center items-center mt-8 px-4 w-full">
                    <div className="w-full flex justify-center items-center">
                        <motion.div
                            className="w-full flex justify-center"
                            variants={formVariants}
                            initial={reduceMotion ? false : "hidden"}
                            whileInView={reduceMotion ? undefined : "show"}
                            viewport={{ amount: 0.2, once: true }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <ContactForm />
                        </motion.div>
                    </div>
                </div>

                {/* ================= OFFICES SECTION ================= */}
                <div className="mt-5 max-w-3xl">
                    <style
                        dangerouslySetInnerHTML={{
                            __html: `
                            .office-card {
                                width: 100%;
                            }
                            @media (min-width: 1024px) {
                                .office-cards-container {
                                    display: flex !important;
                                    flex-wrap: wrap;
                                }
                                .office-card[data-width] {
                                    width: var(--office-card-width);
                                }
                            }
                        `,
                        }}
                    />
                    <h3 className="text-[28px] md:text-[36px] font-semibold mb-3 text-center lg:text-left">
                        Our Offices
                    </h3>

                    <motion.div
                        className="office-cards-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3"
                        variants={cardsContainerVariants}
                        initial={reduceMotion ? false : "hidden"}
                        whileInView={reduceMotion ? undefined : "show"}
                        viewport={{ amount: 0.2, once: true }}
                    >
                        <OfficeCard
                            title="INDIA"
                            width={300}
                            text={`Nova Vista Education, 6th Floor,
Nukleus, Plot 29, Sector 142,
Noida, Uttar Pradesh`}
                        />

                        <OfficeCard
                            title="GERMANY"
                            width={300}
                            text={`Truderinger Strasse 206,
Munich, 81825`}
                        />

                        <OfficeCard
                            title="USA"
                            width={300}
                            text={`3314 Windridge Ave,
Thousand Oaks, CA, 91362`}
                        />

                        <OfficeCard
                            title="NEPAL"
                            width={300}
                            text={`Baluwatar 4 Kathmandu,
Nepal - 44616`}
                        />

                        <OfficeCard
                            title="BANGLADESH"
                            width={615}
                            text={`Shimanto Square Market, Shop No. 262,
2nd Floor, Dhanmondi, Dhaka.
Contact: 01718570686, 01787493933`}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

/* ================= CONTACT FORM ================= */
function ContactForm() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const regex = {
        name: /^[a-zA-Z ]{2,40}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
        mobile: /^[6-9]\d{9}$/,
        message: /^.{1,}$/,
    };

    const validate = () => {
        const newErrors = {};

        if (!regex.name.test(values.name))
            newErrors.name = "Enter valid name";

        if (!regex.email.test(values.email))
            newErrors.email = "Enter valid email";

        if (!regex.mobile.test(values.mobile))
            newErrors.mobile = "Enter valid Phone Number";

        if (!regex.message.test(values.message))
            newErrors.message = "Enter valid Message";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validate();
    };

    return (
        <div
            className="bg-white w-full max-w-[600px] p-8 rounded-xl shadow-2xl lg:mt-[700px] h-[600px] py-10"
            style={{ boxShadow: " 0px 4px 16px 0px #0000001A" }}
        >
            <h2 className="md:text-[36px] text-[28px] font-semibold mb-6 text-center">
                Contact Us
            </h2>

            <form className="space-y-7" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder={errors.name ? errors.name : "Name"}
                    className={`w-full bg-[#FAFAFA] border rounded-sm px-4 py-3 text-sm ${errors.name ? "border-red-500 placeholder:text-red-500" : "border-gray-300"}`}
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    placeholder={errors.email ? errors.email : "Email Address"}
                    className={`w-full bg-[#FAFAFA] border rounded-sm px-4 py-3 text-sm ${errors.email ? "border-red-500 placeholder:text-red-500" : "border-gray-300"}`}
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder={errors.mobile ? errors.mobile : "Phone Number"}
                    className={`w-full bg-[#FAFAFA] border rounded-sm px-4 py-3 text-sm ${errors.mobile ? "border-red-500 placeholder:text-red-500" : "border-gray-300"}`}
                    name="mobile"
                    value={values.mobile}
                    onChange={handleChange}
                />
                <textarea
                    placeholder={errors.message ? errors.message : "Message"}
                    rows="4"
                    className={`w-full bg-[#FAFAFA] border rounded-sm px-4 py-3 text-sm ${errors.message ? "border-red-500 placeholder:text-red-500" : "border-gray-300"}`}
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                ></textarea>

                <button
                    type="submit"
                    className="text-white py-2 w-[200px] bg-[#062b3b] transition cursor-pointer hover:bg-[#ffff] hover:text-[#000] hover:border-2 hover:border-[#062b3b] "
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

/* ================= OFFICE CARD ================= */
function OfficeCard({ title, text, width = 300 }) {
    return (
        <motion.div
            className="office-card bg-white py-3 px-4 text-center "
            data-width={width}
            style={{
                boxShadow: "0px 4px 16px 0px #0000001A",
                "--office-card-width": `${width}px`,
            }}
            variants={cardVariants}
        >
            <h4 className="font-medium md:text-[18px] text-[16px] mb-2">
                {title}
            </h4>
            <p className="md:text-[16px] text-[14px] text-gray-600 leading-relaxed whitespace-pre-line">
                {text}
            </p>
        </motion.div>
    );
}