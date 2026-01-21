"use client";

import Image from "next/image";
import React, { useState } from "react";
import MotionSection from "../motion/MotionSection";

export default function ContactSection() {
    const script_url = process.env.NEXT_PUBLIC_SCRIPT_URL || '';

    return (
        <MotionSection
            id="contact"
            className="relative w-full py-20 bg-gray-50 scroll-mt-28"
        >
            <div className="relative max-w-7xl mx-auto px-4">
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
                    <div className="hidden lg:flex absolute inset-0 items-center justify-end px-6 mr-[-40px]">
                        <ContactForm script_url={script_url} />
                    </div>
                </div>

                {/* ================= FORM – MOBILE ================= */}
                <div className="flex lg:hidden justify-center items-center mt-8 px-4 w-full">
                    <div className="w-full flex justify-center items-center">
                        <ContactForm script_url={script_url} />
                    </div>
                </div>

                {/* ================= OFFICES SECTION ================= */}
                <div className="mt-5 max-w-3xl">
                    <h3 className="text-[28px] md:text-[36px] font-semibold mb-6 text-center lg:text-left">
                        Our Offices
                    </h3>

                    <div className="flex flex-wrap gap-6">
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
                    </div>
                </div>
            </div>
        </MotionSection>
    );
}

/* ================= CONTACT FORM ================= */
function ContactForm({ script_url }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [messageError, setMessageError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        setMessageError(false);
        if (!script_url) {
            setMessage("Form is not configured. Please try again later.");
            setMessageError(true);
            setLoading(false);
            return;
        }

        const payload = {
            ...formData,
            formType: "Contact Form",
        };

        try {
            await fetch(script_url, {
                method: "POST",
                body: JSON.stringify(payload),
            });
            setMessage("Thank you for your submission! We will get back to you soon.");
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: ""
            });
        } catch (error) {
            setMessage("Something went wrong. Please try again.");
            setMessageError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-2xl lg:mt-[500px] py-10">
            <h2 className="md:text-[36px] text-[36px] font-medium mb-6 text-center">
                Contact Us
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-[#FAFAFA] border border-gray-300    rounded-md px-4 py-2 text-sm focus:outline-none "
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-[#FAFAFA] border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none "
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full bg-[#FAFAFA] border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none  "
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <textarea
                    placeholder="Message"
                    rows="4"
                    className="w-full bg-[#FAFAFA] border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none "
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>

                <button
                    type="submit"
                    disabled={loading}
                    className=" text-white py-2 w-[200px] bg-[#062b3b]  hover:bg-gray-800 transition"
                >
                    {loading ? "Submitting..." : "Submit"}
                </button>
                {message && (
                    <p className={`${messageError ? "text-red-600" : "text-green-600"} text-sm`}>
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
}

/* ================= OFFICE CARD ================= */
function OfficeCard({ title, text, width = 300 }) {
    return (
        <div
            className="bg-white py-6 px-4 rounded-lg shadow text-center"
            style={{ width: `${width}px` }}
        >
            <h4 className="font-medium md:text-[18px] text-[16px] mb-2">
                {title}
            </h4>

            <p className="md:text-[16px] text-[14px] text-gray-600 leading-relaxed whitespace-pre-line">
                {text}
            </p>
        </div>
    );
}
