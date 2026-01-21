import React from "react";
import Image from "next/image";
import Header from "../_components/header/Header";
import Footer from "../_components/footer/Footer";

export default function Contact() {
    return (
        <>
            <Header />
            <section className="w-full bg-white py-12">
                <h2 className="text-center text-[18px]  md:text-[26px] font-semibold mb-10">
                    Certificate, Diploma, Degree Programs From
                </h2>
                {/* <div className=" px-4"> */}
                {/* Heading */}

                {/* Logos Grid */}
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
                                    className="object-contain w-[150px] h-[150px] sm:w-[150px] sm:h-auto"
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

                <section className="w-full  py-12 sm:py-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 items-start">
                            {/* ================= LEFT FORM ================= */}
                            <div className="bg-[#0B6E99] text-white  p-6 sm:p-8">
                                <h3 className="text-[22px] sm:text-[36px] font-semibold mb-6">
                                    Online Admission/Registration
                                </h3>

                                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="bg-white text-black px-4 py-3 rounded outline-none border border-gray-200"
                                    />

                                    <input
                                        // type="date"
                                        type="text"
                                        placeholder="Date of Birth"
                                        className="bg-white text-black px-4 py-3 rounded outline-none border border-gray-200"
                                    />

                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="bg-white text-black px-4 py-3 rounded outline-none border border-gray-200"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Country"
                                        className="bg-white text-black px-4 py-3 rounded outline-none border border-gray-200"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Mobile Number"
                                        className="bg-white text-black px-4 py-3 rounded outline-none border border-gray-200"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Qualification"
                                        className="bg-white text-black px-4 py-3 rounded outline-none border border-gray-200"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Course"
                                        className="sm:col-span-2 bg-white text-black px-4 py-3 rounded outline-none border border-gray-200"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Course Duration"
                                        className="sm:col-span-2 bg-white text-black px-4 py-3 rounded outline-none border border-gray-200"
                                    />

                                    <textarea
                                        rows="3"
                                        placeholder="Any Other Information?"
                                        className="sm:col-span-2 bg-white text-black px-4 py-3 rounded outline-none border border-gray-200"
                                    ></textarea>

                                    <button
                                        type="submit"
                                        className="sm:col-span-2 mt-2 bg-[#062b3b] text-white py-3 w-full sm:w-[180px]   transition"
                                    >
                                        Submit
                                    </button>
                                </form>

                                <p className="text-[15px] opacity-90 mt-4">
                                    To complete your admission/registration
                                    please pay ₹999 fee and upload the payment
                                    receipt for final processing.
                                </p>
                                <p className="text-[15px]">
                                    [Remittance For India (INR/USD)]
                                </p>
                            </div>

                            {/* ================= RIGHT PAYMENT SECTION ================= */}
                            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                                <img
                                    src="/static/scanner.png"
                                    alt="QR Code"
                                    className="w-full max-w-[280px] mb-6 object-contain mx-auto sm:mx-0"
                                />

                                <div className="bg-white rounded shadow-sm p-4 text-sm w-full max-w-sm text-left">
                                    <p className="text-[#1B78A1] font-semibold mb-3">
                                        DEMO NATIONAL BANK
                                    </p>

                                    <p className="mb-2">
                                        <span className="font-semibold">
                                            ACCOUNT:
                                        </span>{" "}
                                        <span className="text-[18px] font-medium text-[#00000099]">
                                            Nova Vista
                                        </span>
                                    </p>

                                    <p className="mb-2 flex flex-wrap items-center gap-2">
                                        <span className="font-semibold">
                                            ACCOUNT NUMBER:
                                        </span>
                                        <span className="text-[18px] font-medium text-[#00000099]">
                                            Ixx-xxx-xxx-xxx
                                        </span>
                                    </p>

                                    <p className="mb-2">
                                        <span className="font-semibold">
                                            IFSC CODE:
                                        </span>{" "}
                                        <span className="text-[18px] font-medium text-[#00000099]">
                                            111xxxxxx
                                        </span>
                                    </p>

                                    <p>
                                        <span className="font-semibold">
                                            SWIFT CODE:
                                        </span>{" "}
                                        <span className="text-[18px] font-medium text-[#00000099]">
                                            ABCDEFGH
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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
                            <div className="hidden lg:flex absolute inset-0 items-center justify-center  justify-end px-6 mr-[-40px]">
                                <ContactForm />
                            </div>
                        </div>

                        {/* ================= FORM – MOBILE ================= */}
                        <div className="flex lg:hidden justify-center mt-8 px-4">
                            <ContactForm />
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
                </section>
                {/* </div> */}
            </section>
            <Footer />;
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
