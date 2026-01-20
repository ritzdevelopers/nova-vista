export default function HeroSection() {
  return (
    <div className="w-full h-[55vh] min-h-[320px] md:h-[65vh] lg:h-[636px] overflow-hidden">
      <video
        src="/static/hero-section-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}
