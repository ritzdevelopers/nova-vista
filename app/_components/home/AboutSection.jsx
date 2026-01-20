import Image from "next/image";

export default function AboutSection() {
    return (
        <div
            id="about"
            className="w-full bg-gradient-to-br from-[#FFF]  to-[#FFEEBE]"
        >
            <div className="container-fluid max-w-7xl mx-auto px-4 sm:px-6 xl:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center py-12 md:py-16">

                    {/* Image */}
                    <div className="flex justify-center">
                        <Image
                            src="/static/about-section-image.png"
                            alt="About Image"
                            width={600}
                            height={600}
                            className="w-full h-auto max-w-[480px] md:max-w-[560px]"
                        />
                    </div>

                    {/* Content */}
                    <div className="space-y-6 text-center">
                        <h1 className="md:text-[36px] font-semibold text-[28px]">
                            About Us
                        </h1>

                        <p className="mx-auto text-[16px] leading-[1.65] md:text-[17px] text-[#1c1c1c] max-w-3xl">
                            Nova Vista Education is a global organisation that designs and implements national or international education strategies and program services. We work with governments, policymakers, educators, and employers across the globe to prepare students and professionals for the global workforce. We also create initiatives that assist students, scholars, and expand teaching and learning across cultures; and provide opportunities to promote educational equities and exchange of knowledge.
                        </p>

                        <h1 className="md:text-[36px] font-semibold mt-6 text-[28px]">
                            Our Vision
                        </h1>

                        <p className="mx-auto text-[16px] leading-[1.65] md:text-[17px] text-[#1c1c1c] max-w-3xl">
                            Nova Vista Education is not for profit trust established to help students from all strata of society to get high quality education. We have been collaborating & organizing several programs and initiatives for promoting education at national & international level. The only and ultimate aim of an individual is to get employed. For making the individual employable, Nova Vista has collaborated with national and international universities for certification in skill-oriented courses.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
