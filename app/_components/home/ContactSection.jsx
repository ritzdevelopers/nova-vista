import Image from "next/image";
import React from "react";

export default function ContactSection() {
    return (
        <section id="contact" className="relative w-full py-20 bg-gray-50">
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
                    <div className="hidden lg:flex absolute inset-0 items-center justify-center  justify-end px-6">
                        <ContactForm />
                    </div>
                </div>

                {/* ================= FORM – MOBILE ================= */}
                <div className="flex lg:hidden justify-center mt-8 px-4">
                    <ContactForm />
                </div>

                {/* ================= OFFICES SECTION ================= */}
                <div className="mt-16 max-w-3xl ">
                    <h3 className="md:text-[36px] text-[28px] font-semibold mb-6">
                        Our Offices
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 gap-6  ">
                        <OfficeCard
                            title="INDIA"
                            text={`Nova Vista Education, 6th Floor,
Nukleus, Plot 29, Sector 142,
Noida, Uttar Pradesh`}
                        />

                        <OfficeCard
                            title="GERMANY"
                            text={`Truderinger Strasse 206,
Munich, 81825`}
                        />

                        <OfficeCard
                            title="USA"
                            text={`3314 Windridge Ave,
Thousand Oaks, CA, 91362`}
                        />

                        <OfficeCard
                            title="NEPAL"
                            text={`Baluwatar 4 Kathmandu,
Nepal - 44616`}
                        />
                    </div>

                    <div className="mt-6">
                        <OfficeCard
                            title="BANGLADESH"
                            text={`Shimanto Square Market, Shop No. 262,
2nd Floor, Dhanmondi, Dhaka.
Contact: 01718570686, 01787493933`}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ================= CONTACT FORM ================= */
function ContactForm() {
    return (
        <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-2xl lg:mt-[500px] py-20">
            <h2 className="md:text-[36px] text-[28px] font-semibold mb-6 text-center">
                Contact Us
            </h2>

            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-[#FAFAFA] border border-gray-300    rounded-md px-4 py-2 text-sm focus:outline-none "
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-[#FAFAFA] border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none "
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full bg-[#FAFAFA] border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none  "
                />
                <textarea
                    placeholder="Message"
                    rows="4"
                    className="w-full bg-[#FAFAFA] border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none "
                ></textarea>

                <button className=" text-white py-2 w-[200px] bg-[#062b3b]  hover:bg-gray-800 transition">
                    Submit
                </button>
            </form>
        </div>
    );
}

/* ================= OFFICE CARD ================= */
function OfficeCard({ title, text }) {
    return (
        <div className="bg-white py-6 px-4 rounded-lg shadow text-center">
            <h4 className="font-semibold md:text-[18px] text-[16px]mb-2">
                {title}
            </h4>
            <p className="md:text-[16px] text-[14px] text-gray-600 leading-relaxed whitespace-pre-line">
                {text}
            </p>
        </div>
    );
}
