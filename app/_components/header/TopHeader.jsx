import Image from "next/image";

export default function TopHeader() {
  return (
    <div className="container-fluid border-b-[1px] border-[#0000001A]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-2">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <Image
                src="/icons/email.svg"
                alt="email"
                width={24}
                height={24}
              />
              <p>info@novavistaeducation.com</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/icons/location.svg"
                alt="email"
                width={24}
                height={24}
              />
              <p>6th Floor, Nukles, Plot 29, Sector 142, Noida</p>
            </div>
          </div>
          <div>
            <button className="bg-[#012A3C] text-white px-4 py-2">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
