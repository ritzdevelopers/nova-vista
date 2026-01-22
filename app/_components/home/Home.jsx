import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServiceSection from "./ServiceSection";
import Advisory from "./Advisory";
import ContactSection from "./ContactSection";
import Footer from "../footer/Footer";
export default function Home() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ServiceSection />
            <Advisory />
            <ContactSection />
            <Footer />
        </div>
    );
}
