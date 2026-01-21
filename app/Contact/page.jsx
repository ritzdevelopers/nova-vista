"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../_components/header/Header";
import Footer from "../_components/footer/Footer";

export default function Contact() {
    const script_url = process.env.NEXT_PUBLIC_SCRIPT_URL || '';
    const [admission, setAdmission] = useState({
        name: "",
        dob: "",
        email: "",
        country: "",
        mobile: "",
        qualification: "",
        course: "",
        duration: "",
        message: ""
    })
    const [admissionLoading, setAdmissionLoading] = useState(false);
    const [admissionMessage, setAdmissionMessage] = useState('');
    const [admissionError, setAdmissionError] = useState(false);

    const handleAdmissionChange = (e) => {
        setAdmission({ ...admission, [e.target.name]: e.target.value });
    };

    const handleAdmissionSubmit = async (e) => {
        e.preventDefault();
        setAdmissionLoading(true);
        setAdmissionMessage('');
        setAdmissionError(false);
        if (!script_url) {
            setAdmissionMessage('Form is not configured. Please try again later.');
            setAdmissionError(true);
            setAdmissionLoading(false);
            return;
        }

        try {
            await fetch(script_url, {
                method: "POST",
                body: JSON.stringify({...admission, formType: 'Admission'}),
            });

            setAdmissionMessage('Thank you for your submission! We will get back to you soon.');

            setAdmission({
                name: "",
                dob: "",
                email: "",
                country: "",
                mobile: "",
                qualification: "",
                course: "",
                duration: "",
                message: "",
            });
        } catch {
            setAdmissionMessage('Something went wrong. Please try again.');
            setAdmissionError(true);
        } finally {
            setAdmissionLoading(false);
        }
    };
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pb-8 pt-8">
                            {/* Card */}
                            <div className="flex items-center justify-center bg-white shadow-md rounded-lg p-6 h-[200px]">
                                <Image
                                    src="/logos/arni.png"
                                    alt="ARN University"
                                    width={200}
                                    height={80}
                                    className="w-auto h-auto object-contain"
                                />
                            </div>

                            <div className="flex items-center justify-center bg-white shadow-md rounded-lg p-6 h-[200px]">
                                <Image
                                    src="/logos/integral.png"
                                    alt="Integral University"
                                    width={200}
                                    height={80}
                                    className="object-contain w-[150px] h-[150px] sm:w-[150px] sm:h-auto"
                                />
                            </div>

                            <div className="flex items-center justify-center bg-white shadow-md rounded-lg p-6 h-[200px]">
                                <Image
                                    src="/logos/nau.png"
                                    alt="NAU University"
                                    width={200}
                                    height={80}
                                    className="w-auto h-auto object-contain"
                                />
                            </div>

                            <div className="flex items-center justify-center bg-white shadow-md rounded-lg p-6 h-[200px]">
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

                                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={handleAdmissionSubmit}>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="bg-white text-black px-4 py-3 rounded outline-none border border-gray-200"
                                        name="name"
                                        value={admission.name}
                                        onChange={handleAdmissionChange}
                                    />

                                    <input
                                        // type="date"
                                        type="text"
                                        placeholder="Date of Birth"
                                        className="bg-white text-black px-4 py-3 rounded outline-none border border-gray-200"
                                        name="dob"
                                        value={admission.dob}
                                        onChange={handleAdmissionChange}
                                    />

                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="bg-white text-black px-4 py-3 rounded outline-none border border-gray-200"
                                        name="email"
                                        value={admission.email}
                                        onChange={handleAdmissionChange}
                                    />

                                    <input
                                        type="text"
                                        placeholder="Country"
                                        className="bg-white text-black px-4 py-3 rounded outline-none border border-gray-200"
                                        name="country"
                                        value={admission.country}
                                        onChange={handleAdmissionChange}
                                    />

                                    <input
                                        type="text"
                                        placeholder="Mobile Number"
                                        className="bg-white text-black px-4 py-3 rounded outline-none border border-gray-200"
                                        name="mobile"
                                        value={admission.mobile}
                                        onChange={handleAdmissionChange}
                                    />

                                    <input
                                        type="text"
                                        placeholder="Qualification"
                                        className="bg-white text-black px-4 py-3 rounded outline-none border border-gray-200"
                                        name="qualification"
                                        value={admission.qualification}
                                        onChange={handleAdmissionChange}
                                    />

                                    <input
                                        type="text"
                                        placeholder="Course"
                                        className="sm:col-span-2 bg-white text-black px-4 py-3 rounded outline-none border border-gray-200"
                                        name="course"
                                        value={admission.course}
                                        onChange={handleAdmissionChange}
                                    />

                                    <input
                                        type="text"
                                        placeholder="Course Duration"
                                        className="sm:col-span-2 bg-white text-black px-4 py-3 rounded outline-none border border-gray-200"
                                        name="duration"
                                        value={admission.duration}
                                        onChange={handleAdmissionChange}
                                    />

                                    <textarea
                                        rows="3"
                                        placeholder="Any Other Information?"
                                        className="sm:col-span-2 bg-white text-black px-4 py-3 rounded outline-none border border-gray-200"
                                        name="message"
                                        value={admission.message}
                                        onChange={handleAdmissionChange}
                                    ></textarea>

                                    <button
                                        type="submit"
                                        disabled={admissionLoading}
                                        className="sm:col-span-2 mt-2 bg-[#062b3b] text-white py-3 w-full sm:w-[180px]   transition"
                                    >
                                        {admissionLoading ? "Submitting..." : "Submit"}
                                    </button>

                                    {admissionMessage && (
                                        <p className={`${admissionError ? "text-red-300" : "text-green-300"} sm:col-span-2 text-sm`}>
                                            {admissionMessage}
                                        </p>
                                    )}
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
                                <ContactForm script_url={script_url} />
                            </div>
                        </div>

                        {/* ================= FORM – MOBILE ================= */}
                        <div className="flex lg:hidden justify-center mt-8 px-4">
                            <ContactForm script_url={script_url} />
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
                {/* </div> */}
            </section>
            <Footer />;
        </>
    );
}

function ContactForm({ script_url }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [messageError, setMessageError] = useState(false);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setMessageError(false);
        if (!script_url) {
            setMessage('Form is not configured. Please try again later.');
            setMessageError(true);
            setLoading(false);
            return;
        }
        const payload = {
            ...formData,
            formType: 'Contact Form'
        }
        try {
            await fetch(script_url, {
                method: 'POST',
                body: JSON.stringify(payload)
            })
            setMessage('Thank you for your submission! We will get back to you soon.');
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: ""
            })
        } catch (error) {
            setMessage('Something went wrong. Please try again.');
            setMessageError(true);
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: ""
            })
        }
    }
    return (
        <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-2xl lg:mt-[500px] py-20">
            <h2 className="md:text-[36px] text-[28px] font-semibold mb-6 text-center">
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
