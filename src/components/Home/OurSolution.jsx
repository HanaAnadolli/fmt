import React from "react";

function OurSolution() {
  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left side - Heading */}
          <div className="lg:col-span-3">
            <h2 className="text-4xl font-bold text-primary lg:text-5xl">
              Our Solution
            </h2>
          </div>

          {/* Vertical separator */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="h-[130px] w-[5px] bg-primary/30 mx-auto"></div>
          </div>

          {/* Right side - Description */}
          <div className="lg:col-span-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              FMT (Financial Management Tool) is a financial analysis tool with artificial intelligence integration designed to streamline and improve
              the financial analysis process. It supports a wide range of tasks, including financial spreading, credit rating calculations, and the generation 
              of detailed reports at both the single name and portfolio level.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurSolution;
