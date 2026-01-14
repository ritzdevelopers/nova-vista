export default function HeroSection() {
  return (
    <div className="container-fluid mx-auto h-[636px]">
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
