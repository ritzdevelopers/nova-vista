import Image from "next/image";
import TopHeader from "./TopHeader";

export default function Header() {
  return (
    <div>
      {/* Top header component  */}
      <TopHeader />
      <div className="container mx-auto flex justify-between items-center py-3">
        <div className="h-[56px] w-[220px] flex items-center">
          <Image
            src="/logos/nova-vista-logo.svg"
            alt="logo"
            width={220}
            height={56}
          />
        </div>
        <div>
          <ul className="flex gap-10">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <Image
            src="/logos/nova-msme.png"
            alt="Nova-MSME"
            width={140}
            height={56}
          />
        </div>
      </div>
    </div>
  );
}
