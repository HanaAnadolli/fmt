import Header from "../components/Header";
import vectorBg from "../assets/home/vector.png";
import BlogSection from "../components/BlogSection";

export default function Blog() {
  return (
    <div className="bg-[#F3FBFF] overflow-x-hidden">
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
            Insights on financial <br /> intelligence
          </h1>
          <br />
          <p className="max-w-[700px] text-[16px] text-[#52636B]">
            Perspectives from the KS-TF team on trade finance, credit <br />{" "}
            analysis, compliance and the future of intelligent financial <br />{" "}
            platforms.
          </p>
        </div>
      </section>
      <BlogSection />
    </div>
  );
}
