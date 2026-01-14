import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="container-fluid mx-auto">
      <div className="row">
        <div className="col-12 col-md-6">
          <Image
            src="/static/about-section-image.png"
            alt="About Image"
            width={600}
            height={600}
          />
        </div>
        <div className="col-12 col-md-6">
          <h1>About Us</h1>
          <p>
            We are a team of dedicated professionals who are passionate about
            helping our clients achieve their goals.
          </p>
        </div>
      </div>
    </div>
  );
}
