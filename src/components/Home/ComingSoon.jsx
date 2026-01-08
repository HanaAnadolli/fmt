import React from "react";
import comingSoonImage from "../../assets/home/coming-soon.png"; // adjust path if needed

const ComingSoon = () => {
  return (
    <section className="flex items-center pb-10">
      <div className="mx-auto max-w-7xl px-6 w-full text-center">
        {/* Image */}
        <img
          src={comingSoonImage}
          alt="Coming Soon"
          className="mx-auto w-full max-w-7xl h-auto"
        />
      </div>
    </section>
  );
};

export default ComingSoon;
