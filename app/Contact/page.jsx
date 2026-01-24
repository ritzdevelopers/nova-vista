"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Header from "../_components/header/Header";
import Footer from "../_components/footer/Footer";
import MotionSection from "../_components/motion/MotionSection";

export default function Contact() {
    const script_url = process.env.NEXT_PUBLIC_SCRIPT_URL || "";
    const reduceMotion = useReducedMotion();

    const blockVariants = {
        hidden: (direction) => ({
            opacity: 0,
            x: direction === "left" ? -40 : 40,
        }),
        show: { opacity: 1, x: 0 },
    };
    const formVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
    };
    const [admission, setAdmission] = useState({
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
    const [admissionErrors, setAdmissionErrors] = useState({});
    const [admissionLoading, setAdmissionLoading] = useState(false);
    const [admissionMessage, setAdmissionMessage] = useState("");
    const [admissionError, setAdmissionError] = useState(false);

    const admissionRegex = {
        name: /^[a-zA-Z ]{2,40}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
        mobile: /^[6-9]\d{9}$/,
    };

    const validateAdmission = () => {
        const newErrors = {};

        if (!admissionRegex.name.test(admission.name)) {
            newErrors.name = "Enter valid name";
        }
        if (!admission.dob.trim()) {
            newErrors.dob = "Enter date of birth";
        }
        if (!admissionRegex.email.test(admission.email)) {
            newErrors.email = "Enter valid email";
        }
        if (!admission.country.trim()) {
            newErrors.country = "Enter country";
        }
        if (!admissionRegex.mobile.test(admission.mobile)) {
            newErrors.mobile = "Enter valid mobile";
        }
        if (!admission.qualification.trim()) {
            newErrors.qualification = "Enter qualification";
        }
        if (!admission.course.trim()) {
            newErrors.course = "Enter course";
        }
        if (!admission.duration.trim()) {
            newErrors.duration = "Enter duration";
        }

        setAdmissionErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleAdmissionChange = (e) => {
        const { name, value } = e.target;
        setAdmission({ ...admission, [name]: value });
        if (admissionErrors[name]) {
            setAdmissionErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleAdmissionSubmit = async (e) => {
        e.preventDefault();
        setAdmissionLoading(true);
        setAdmissionMessage("");
        setAdmissionError(false);
        if (!validateAdmission()) {
            setAdmissionLoading(false);
            return;
        }
        if (!script_url) {
            setAdmissionMessage(
                "Form is not configured. Please try again later.",
            );
            setAdmissionError(true);
            setAdmissionLoading(false);
            return;
        }

        try {
            await fetch(script_url, {
                method: "POST",
                body: JSON.stringify({ ...admission, formType: "Admission" }),
            });

            setAdmissionMessage(
                "Thank you for your submission! We will get back to you soon.",
            );

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
            setAdmissionErrors({});
        } catch {
            setAdmissionMessage("Something went wrong. Please try again.");
            setAdmissionError(true);
        } finally {
            setAdmissionLoading(false);
        }
    };
    return (
        <>
            <Header />
            <div className="pt-[72px] md:pt-[121px]">
                <MotionSection className="w-full bg-white py-12">
                <motion.h2
                    className="text-center text-[18px]  md:text-[26px] font-semibold mb-10"
                    custom="left"
                    variants={blockVariants}
                    initial={reduceMotion ? false : "hidden"}
                    whileInView={reduceMotion ? undefined : "show"}
                    viewport={{ amount: 0.2, once: false }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    Certificate, Diploma, Degree Programs From
                </motion.h2>
                {/* <div className=" px-4"> */}
                {/* Heading */}

                {/* Logos Grid */}
                <div className="bg-[#F6F6F6] px-4">
                    {/* Heading */}
                    <div className="max-w-7xl mx-auto">
                        {/* Logos Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 pt-8">
                            {/* Card */}
                            <motion.div
                                className="flex items-center justify-center bg-white shadow-md rounded-lg p-6 h-[250px]"
                                custom="left"
                                variants={blockVariants}
                                initial={reduceMotion ? false : "hidden"}
                                whileInView={reduceMotion ? undefined : "show"}
                                viewport={{ amount: 0.2, once: false }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                    delay: 0.05,
                                }}
                            >
                                <Image
                                    src="/logos/arni.png"
                                    alt="ARN University"
                                    width={200}
                                    height={80}
                                    className="w-auto h-auto object-contain"
                                />
                            </motion.div>

                            <motion.div
                                className="flex items-center justify-center bg-white shadow-md rounded-lg p-6 h-[250px]"
                                custom="right"
                                variants={blockVariants}
                                initial={reduceMotion ? false : "hidden"}
                                whileInView={reduceMotion ? undefined : "show"}
                                viewport={{ amount: 0.2, once: false }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                    delay: 0.1,
                                }}
                            >
                                <Image
                                    src="/logos/integral.png"
                                    alt="Integral University"
                                    width={200}
                                    height={80}
                                    className="object-contain w-[150px] h-[150px] sm:w-[150px] sm:h-auto"
                                />
                            </motion.div>

                            <motion.div
                                className="flex items-center justify-center bg-white shadow-md rounded-lg p-6 h-[250px]"
                                custom="left"
                                variants={blockVariants}
                                initial={reduceMotion ? false : "hidden"}
                                whileInView={reduceMotion ? undefined : "show"}
                                viewport={{ amount: 0.2, once: false }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                    delay: 0.15,
                                }}
                            >
                                <Image
                                    src="/logos/nau.png"
                                    alt="NAU University"
                                    width={200}
                                    height={80}
                                    className="w-auto h-auto object-contain"
                                />
                            </motion.div>

                            <motion.div
                                className="flex items-center justify-center bg-white shadow-md rounded-lg p-6 h-[250px]"
                                custom="right"
                                variants={blockVariants}
                                initial={reduceMotion ? false : "hidden"}
                                whileInView={reduceMotion ? undefined : "show"}
                                viewport={{ amount: 0.2, once: false }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                    delay: 0.2,
                                }}
                            >
                                <Image
                                    src="/logos/royalamericanuniversity.png"
                                    alt="Royal American University"
                                    width={200}
                                    height={80}
                                    className="w-auto h-auto object-contain"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>

                <MotionSection className="w-full  py-12 sm:py-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 items-start">
                            {/* ================= LEFT FORM ================= */}
                            <motion.div
                                className="bg-[#0B6E99] text-white  p-6 sm:p-8"
                                custom="left"
                                variants={blockVariants}
                                initial={reduceMotion ? false : "hidden"}
                                whileInView={reduceMotion ? undefined : "show"}
                                viewport={{ amount: 0.2, once: false }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <h3 className="text-[22px] sm:text-[36px] font-semibold mb-6">
                                    Online Admission/Registration
                                </h3>

                                <form
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                                    onSubmit={handleAdmissionSubmit}
                                >
                                    <input
                                        type="text"
                                        placeholder={
                                            admissionErrors.name
                                                ? admissionErrors.name
                                                : "Name"
                                        }
                                        className={`bg-white text-black px-4 py-3 rounded outline-none border ${admissionErrors.name ? "border-red-500 placeholder:text-red-500" : "border-gray-200"}`}
                                        name="name"
                                        value={admission.name}
                                        onChange={handleAdmissionChange}
                                    />

                                    <input
                                        // type="date"
                                        type="text"
                                        placeholder={
                                            admissionErrors.dob
                                                ? admissionErrors.dob
                                                : "Date of Birth"
                                        }
                                        className={`bg-white text-black px-4 py-3 rounded outline-none border ${admissionErrors.dob ? "border-red-500 placeholder:text-red-500" : "border-gray-200"}`}
                                        name="dob"
                                        value={admission.dob}
                                        onChange={handleAdmissionChange}
                                    />

                                    <input
                                        type="email"
                                        placeholder={
                                            admissionErrors.email
                                                ? admissionErrors.email
                                                : "Email Address"
                                        }
                                        className={`bg-white text-black px-4 py-3 rounded outline-none border ${admissionErrors.email ? "border-red-500 placeholder:text-red-500" : "border-gray-200"}`}
                                        name="email"
                                        value={admission.email}
                                        onChange={handleAdmissionChange}
                                    />

                                    <input
                                        type="text"
                                        placeholder={
                                            admissionErrors.country
                                                ? admissionErrors.country
                                                : "Country"
                                        }
                                        className={`bg-white text-black px-4 py-3 rounded outline-none border ${admissionErrors.country ? "border-red-500 placeholder:text-red-500" : "border-gray-200"}`}
                                        name="country"
                                        value={admission.country}
                                        onChange={handleAdmissionChange}
                                    />

                                    <input
                                        type="text"
                                        placeholder={
                                            admissionErrors.mobile
                                                ? admissionErrors.mobile
                                                : "Mobile Number"
                                        }
                                        className={`bg-white text-black px-4 py-3 rounded outline-none border ${admissionErrors.mobile ? "border-red-500 placeholder:text-red-500" : "border-gray-200"}`}
                                        name="mobile"
                                        value={admission.mobile}
                                        onChange={handleAdmissionChange}
                                    />

                                    <input
                                        type="text"
                                        placeholder={
                                            admissionErrors.qualification
                                                ? admissionErrors.qualification
                                                : "Qualification"
                                        }
                                        className={`bg-white text-black px-4 py-3 rounded outline-none border ${admissionErrors.qualification ? "border-red-500 placeholder:text-red-500" : "border-gray-200"}`}
                                        name="qualification"
                                        value={admission.qualification}
                                        onChange={handleAdmissionChange}
                                    />

                                    <input
                                        type="text"
                                        placeholder={
                                            admissionErrors.course
                                                ? admissionErrors.course
                                                : "Course"
                                        }
                                        className={`sm:col-span-2 bg-white text-black px-4 py-3 rounded outline-none border ${admissionErrors.course ? "border-red-500 placeholder:text-red-500" : "border-gray-200"}`}
                                        name="course"
                                        value={admission.course}
                                        onChange={handleAdmissionChange}
                                    />

                                    <input
                                        type="text"
                                        placeholder={
                                            admissionErrors.duration
                                                ? admissionErrors.duration
                                                : "Course Duration"
                                        }
                                        className={`sm:col-span-2 bg-white text-black px-4 py-3 rounded outline-none border ${admissionErrors.duration ? "border-red-500 placeholder:text-red-500" : "border-gray-200"}`}
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
                                        className="sm:col-span-2 mt-2 bg-[#062b3b] text-white py-3 w-full sm:w-[180px]  transition cursor-pointer hover:bg-[#ffff] hover:text-[#000] hover:border-2 hover:border-[#062b3b]"
                                    >
                                        {admissionLoading
                                            ? "Submitting..."
                                            : "Submit"}
                                    </button>

                                    {admissionMessage && (
                                        <p
                                            className={`${admissionError ? "text-red-300" : "text-green-300"} sm:col-span-2 text-sm`}
                                        >
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
                            </motion.div>

                            {/* ================= RIGHT PAYMENT SECTION ================= */}
                            <motion.div
                                className="flex flex-col items-center text-center lg:items-start lg:text-left"
                                custom="right"
                                variants={blockVariants}
                                initial={reduceMotion ? false : "hidden"}
                                whileInView={reduceMotion ? undefined : "show"}
                                viewport={{ amount: 0.2, once: false }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut",
                                    delay: 0.1,
                                }}
                            >
                                <img
                                    src="/static/scanner.png"
                                    alt="QR Code"
                                    className="w-full max-w-[280px] mb-6 object-contain mx-auto sm:mx-0"
                                />

                                <div className="bg-white rounded shadow-sm p-4 text-sm w-full max-w-sm text-left">
                                    <p className="text-[#1B78A1] font-semibold mb-3 text-[18px]">
                                        HDFC BANK LTD
                                    </p>

                                    <p className="mb-2 text-[#00000099]">
                                        <span className="font-medium text-black">
                                            ACCOUNT:
                                        </span>{" "}
                                        NOVAVISTA EDUCATION PRIVATE LIMITED
                                    </p>

                                    <p className="mb-2 text-[#00000099]">
                                        <span className="font-medium text-black">
                                            ACCOUNT NUMBER:
                                        </span>{" "}
                                        50200112839472
                                    </p>

                                    <p className="mb-2 text-[#00000099]">
                                        <span className="font-medium text-black">
                                            IFSC CODE:
                                        </span>{" "}
                                        HDFC0002830
                                    </p>

                                    <p className="text-[#00000099]">
                                        <span className="font-medium text-black">
                                            BRANCH:
                                        </span>{" "}
                                        Sector 93A, Noida
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </MotionSection>

                <MotionSection className="relative w-full bg-gray-50 mt-10 ">
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
                            {/* <div className="hidden lg:flex absolute inset-0 items-center justify-center  justify-end px-6 mr-[-40px]">
                                <ContactForm  />
                            </div> */}
                            <div className="hidden lg:flex absolute inset-0 items-center justify-end px-6 mr-[-50px]">
                                <motion.div
                                    className="w-[500px] lg:w-[380px] xl:w-[600px]"
                                    variants={formVariants}
                                    initial={reduceMotion ? false : "hidden"}
                                    whileInView={reduceMotion ? undefined : "show"}
                                    viewport={{ amount: 0.2, once: true }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                >
                                    <ContactForm script_url={script_url} />
                                </motion.div>
                            </div>
                        </div>

                        {/* ================= FORM – MOBILE ================= */}
                        <div className="flex lg:hidden justify-center mt-8 px-4">
                            <motion.div
                                className="w-full flex justify-center"
                                variants={formVariants}
                                initial={reduceMotion ? false : "hidden"}
                                whileInView={reduceMotion ? undefined : "show"}
                                viewport={{ amount: 0.2, once: true }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <ContactForm script_url={script_url} />
                            </motion.div>
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

                            <div className="office-cards-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
                                <OfficeCard
                                    index={0}
                                    title="INDIA"
                                    width={300}
                                    text={`Nova Vista Education, 6th Floor,
Nukleus, Plot 29, Sector 142,
Noida, Uttar Pradesh`}
                                />

                                <OfficeCard
                                    index={1}
                                    title="GERMANY"
                                    width={300}
                                    text={`Truderinger Strasse 206,
Munich, 81825`}
                                />

                                <OfficeCard
                                    index={2}
                                    title="USA"
                                    width={300}
                                    text={`3314 Windridge Ave,
Thousand Oaks, CA, 91362`}
                                />

                                <OfficeCard
                                    index={3}
                                    title="NEPAL"
                                    width={300}
                                    text={`Baluwatar 4 Kathmandu,
Nepal - 44616`}
                                />

                                <OfficeCard
                                    index={4}
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
                {/* </div> */}
            </MotionSection>
            <Footer />
            </div>
        </>
    );
}

function ContactForm({ script_url }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [messageError, setMessageError] = useState(false);

    const regex = {
        name: /^[a-zA-Z ]{2,40}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
        phone: /^[6-9]\d{9}$/,
        message: /^.{10,}$/,
    };

    const validate = () => {
        const newErrors = {};

        if (!regex.name.test(formData.name)) {
            newErrors.name = "Enter valid name";
        }
        if (!regex.email.test(formData.email)) {
            newErrors.email = "Enter valid email";
        }
        if (!regex.phone.test(formData.phone)) {
            newErrors.phone = "Enter valid Phone Number";
        }
        if (!regex.message.test(formData.message)) {
            newErrors.message = "Enter valid Message";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setMessageError(false);
        if (!validate()) return;
        setLoading(true);
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
            setMessage(
                "Thank you for your submission! We will get back to you soon.",
            );
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
        } catch (error) {
            setMessage("Something went wrong. Please try again.");
            setMessageError(true);
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
            setErrors({});
        }
    };
    return (
        <div
            className="bg-white w-full max-w-[600px] p-8 rounded-xl shadow-2xl lg:mt-[700px] h-[550px] lg:h-[600px] py-10"
            style={{ boxShadow: "0px 4px 16px 0px #0000001A" }}
        >
            <h2 className="md:text-[36px] text-[28px] font-semibold mb-6 text-center">
                Contact Us
            </h2>

            <form className="space-y-7" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder={errors.name ? errors.name : "Name"}
                    className={`w-full bg-[#FAFAFA] border rounded-md px-4 py-2 text-sm focus:outline-none ${errors.name ? "border-red-500 placeholder:text-red-500" : "border-gray-300"}`}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    placeholder={errors.email ? errors.email : "Email Address"}
                    className={`w-full bg-[#FAFAFA] border rounded-md px-4 py-2 text-sm focus:outline-none ${errors.email ? "border-red-500 placeholder:text-red-500" : "border-gray-300"}`}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder={errors.phone ? errors.phone : "Phone Number"}
                    className={`w-full bg-[#FAFAFA] border rounded-md px-4 py-2 text-sm focus:outline-none ${errors.phone ? "border-red-500 placeholder:text-red-500" : "border-gray-300"}`}
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <textarea
                    placeholder={errors.message ? errors.message : "Message"}
                    rows="4"
                    className={`w-full bg-[#FAFAFA] border rounded-md px-4 py-2 text-sm focus:outline-none ${errors.message ? "border-red-500 placeholder:text-red-500" : "border-gray-300"}`}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>

                <button
    type="submit"
    disabled={loading}
    className="block mx-auto text-white py-2 w-[200px] bg-[#062b3b] hover:bg-gray-800 transition"
>
    {loading ? "Submitting..." : "Submit"}
</button>


                {message && (
                    <p
                        className={`${messageError ? "text-red-600" : "text-green-600"} text-sm`}
                    >
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
}

/* ================= OFFICE CARD ================= */
function OfficeCard({ title, text, width = 300, index = 0 }) {
    const reduceMotion = useReducedMotion();

    const itemVariants = {
        hidden: (direction) => ({
            opacity: 0,
            x: direction === "left" ? -30 : 30,
        }),
        show: { opacity: 1, x: 0 },
    };

    return (
        <motion.div
            className="office-card bg-white py-3 px-4 text-center "
            data-width={width}
            style={{
                boxShadow: "0px 4px 16px 0px #0000001A",
                "--office-card-width": `${width}px`,
            }}
            custom={index % 2 === 0 ? "left" : "right"}
            variants={itemVariants}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={{ amount: 0.2, once: false }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
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
