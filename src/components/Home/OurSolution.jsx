import React from "react";
import graphic from "../../assets/home/graphic.png";

export default function OurSolution() {
  return (
    <section className="bg-[#F6FBFF] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2 md:gap-24">
          
          {/* LEFT: Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={graphic}
              alt="FMT solution graphic"
              className="w-full max-w-lg object-contain"
              draggable="false"
            />
          </div>

          {/* RIGHT: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Our Solution
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              FMT (Financial Management Tool) is a semi or fully automated
              financial analysis tool designed to streamline and improve the
              financial analysis process. It supports a wide range of tasks,
              including financial spreading, industry specific credit rating
              calculations, and the generation of detailed reports at both the
              single name and portfolio level.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
