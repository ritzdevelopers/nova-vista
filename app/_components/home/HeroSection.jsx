export default function HeroSection() {
    return (
        <div className="container-fluid mx-auto h-[55vh] min-h-[320px] md:h-[65vh] lg:h-[636px] overflow-hidden rounded-none md:rounded-2xl shadow-sm">
            <video
                src="/static/hero-section-video.mp4"
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
            />
        </div>
    );
}
