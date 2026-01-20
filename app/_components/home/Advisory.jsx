import Image from "next/image";
import React from "react";

export default function Advisory() {
    return (
        <section className="relative py-10 mt-5 " id="advisory"> 
            {/* Half Black Background */}
            <div className="absolute top-0 left-0 w-full h-[60%] lg:bg-black bg-white z-0"></div>

            {/* Content */}
            <div className="relative z-10  px-4">
                <h2 className="md:text-[36px] text-[28px] text:black   lg:text-black xl:text-white text-center mb-4">
                    Advisory Board
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-[4px] justify-items-center">
                    {[
                        {
                            img: "/static/Prof.MaheshGandhi.png",
                            name: "Prof. Mahesh Gandhi",
                            country: "India",
                        },
                        {
                            img: "/static/ShashankJain.png",
                            name: "Shashank Jain",
                            country: "Germany",
                        },
                        {
                            img: "/static/DeepikaMalik.png",
                            name: "Deepika Malik",
                            country: "UAE",
                        },
                        {
                            img: "/static/Dr.BenuSehgal.png",
                            name: "Dr. Benu Sehgal",
                            country: "India",
                        },
                        {
                            img: "/static/CADeepakKumar.png",
                            name: "CA Deepak Kumar",
                            country: "India",
                        },
                        {
                            img: "/static/NaveenKapoor.png",
                            name: "Naveen Kapoor",
                            country: "USA",
                        },
                        {
                            img: "/static/Dr.Taronish.png",
                            name: "Dr. Taronish",
                            country: "India",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center gap-4"
                        >
                            <Image
                                src={item.img}
                                alt={item.name}
                                width={200}
                                height={200}
                                className="w-50 h-45 object-cover rounded-md shadow-lg"
                            />
                            <h3 className="mt-[4px] font-medium text-gray-900 text-[17px] ">
                                {item.name}
                            </h3>
                            <p className="text-gray-600 text-[16px] mt-[-10px]">
                                {item.country}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
