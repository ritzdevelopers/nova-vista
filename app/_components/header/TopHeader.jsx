import Image from "next/image";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function TopHeader() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="border-b border-[#0000001A]">
                <div className="hidden md:block max-w-7xl mx-auto  px-6">
                    <div className="flex justify-between items-center py-2">
                        {/* Left side */}
                        <div className="flex gap-6">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/icons/email.svg"
                                    alt="email"
                                    width={16}
                                    height={16}
                                />
                                <p className="text-[14px] text-gray-500">
                                    info@novavistaeducation.com
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <Image
                                    src="/icons/location.svg"
                                    alt="location"
                                    width={16}
                                    height={16}
                                />
                                <p className="text-[14px] text-gray-500">
                                    6th Floor, Nukleus, Plot 29, Sector 142,
                                    Noida
                                </p>
                            </div>
                        </div>

                        {/* Right side */}
                        <button
                            onClick={() => setOpen(true)}
                            className="bg-[#012A3C] text-white px-4 py-2 text-[16px]"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
            {/* Popup */}
            <ContactModal open={open} setOpen={setOpen} />
        </>
    );
}
