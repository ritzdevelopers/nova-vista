import Image from "next/image";

export default function TopHeader() {
    return (
        <div className="hidden md:block max-w-7xl mx-auto border-b border-[#0000001A] px-4 ">
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
                            6th Floor, Nukles, Plot 29, Sector 142, Noida
                        </p>
                    </div>
                </div>

                {/* Right side */}
                <button className="bg-[#012A3C] text-white px-4 py-2 text-[16px]">
                    Contact Us
                </button>
            </div>
        </div>
    );
}
