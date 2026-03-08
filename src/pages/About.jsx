import Header from "../components/Header";
import vectorBg from "../assets/home/vector.png";
import Designing from "../components/about/Designing";
import Platforms from "../components/about/Platforms";

export default function About() {
  return (
    <div className="bg-[#F3FBFF] overflow-x-hidden">
      {/* HERO */}
      <section
        className="relative w-full h-[450px]"
        style={{
          backgroundImage: `url(${vectorBg}), url(${vectorBg})`,
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: "top center, top center",
          backgroundSize: "100% 200px, 105% 240px",
        }}
      >
        <Header />

        <div className="mx-auto max-w-[1200px] px-6 pt-[200px]">
          <h1 className="max-w-[700px] text-[56px] font-extrabold leading-[64px] text-[#011A27]">
            Software built for <br />
            financial operations
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <Designing />
      <Platforms />
    </div>
  );
}
