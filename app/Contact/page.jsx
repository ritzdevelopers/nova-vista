import React from "react";
import Image from "next/image";

export default function Contact() {
    return (
        <>
            <section className="w-full bg-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Heading */}
                    <h2 className="text-center text-[18px]  md:text-[26px] font-semibold mb-10">
                        Certificate, Diploma, Degree Programs From
                    </h2>

                    {/* Logos Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-10">
                        {/* Card */}
                        <div className="flex items-center  justify-center bg-white shadow-md rounded-lg p-6 h-[180px]">
                            <img
                                src="/logos/arni.png"
                                alt="ARN University"
                                className="max-h-14 object-contain"
                            />
                        </div>

                        <div className="flex items-center justify-center bg-white shadow-md rounded-lg p-6 h-[180px]">
                            <img
                                src="/logos/integral.png"
                                alt="Integral University"
                                className="max-h-14 object-contain"
                            />
                        </div>

                        <div className="flex items-center justify-center bg-white shadow-md rounded-lg p-6 h-[180px]">
                            <img
                                src="/logos/nau.png"
                                alt="NAU University"
                                className="max-h-14 object-contain"
                            />
                        </div>

                        <div className="flex items-center justify-center bg-white shadow-md rounded-lg p-6 h-[180px]">
                            <img
                                src="/logos/royalamericanuniversity.png"
                                alt="Royal American University"
                                className="max-h-14 object-contain"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-start mt-5">
                        {/* ================= LEFT FORM ================= */}
                        <div className="bg-[#0B6E99] text-white rounded-lg p-6 sm:p-8">
                            <h2 className="text-[28px] md:text-[36px] font-semibold mb-6">
                                Online Admission/Registration
                            </h2>

                            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="col-span-1 bg-white text-black px-4 py-2 rounded outline-none"
                                />

                                <input
                                    type="date"
                                    placeholder="Date of Birth"
                                    className="col-span-1 bg-white text-black px-4 py-2 rounded outline-none"
                                />

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="col-span-1 bg-white text-black px-4 py-2 rounded outline-none"
                                />

                                <input
                                    type="text"
                                    placeholder="Country"
                                    className="col-span-1 bg-white text-black px-4 py-2 rounded outline-none"
                                />

                                <input
                                    type="text"
                                    placeholder="Mobile No"
                                    className="col-span-1 bg-white text-black px-4 py-2 rounded outline-none"
                                />

                                <input
                                    type="text"
                                    placeholder="Qualification"
                                    className="col-span-1 bg-white text-black px-4 py-2 rounded outline-none"
                                />

                                <input
                                    type="text"
                                    placeholder="Course"
                                    className="sm:col-span-2 bg-white text-black px-4 py-2 rounded outline-none"
                                />

                                <input
                                    type="text"
                                    placeholder="Course Duration"
                                    className="sm:col-span-2 bg-white text-black px-4 py-2 rounded outline-none"
                                />

                                <textarea
                                    rows="3"
                                    placeholder="Any Other Information?"
                                    className="sm:col-span-2 bg-white text-black px-4 py-2 rounded outline-none"
                                ></textarea>

                                <button
                                    type="submit"
                                    className="sm:col-span-2 bg-black text-white py-2 w-[200px]hover:bg-gray-800 transition"
                                >
                                    Submit
                                </button>
                            </form>

                            <p className="text-[15px] mt-4 opacity-90">
                                To complete your admission/registration please
                                pay ₹999 fee and upload the payment receipt for
                                final processing.
                            </p>
                        </div>

                        {/* ================= RIGHT PAYMENT INFO ================= */}
                        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                            <img
                                src="/static/scanner.png"
                                alt="QR Code"
                                className="mx-auto mb-6 w-60 h-60 object-contain"
                            />

                            <div className="text-left text-sm space-y-2">
                                <p className="font-semibold">
                                    DEMO NATIONAL BANK
                                </p>
                                <p>Account Name: Nova Vista</p>
                                <p>Account Number: XXXX-XXXX-XXXX</p>
                                <p>IFSC Code: DEMO0001</p>
                                <p>SWIFT Code: ABCDEFGH</p>
                            </div>
                        </div>
                    </div>
                    <section className="relative w-full bg-gray-50 mt-10 ">
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
                </div>
            </section>
        </>
    );
}

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
