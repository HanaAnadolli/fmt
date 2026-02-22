// src/components/Home/ServicesPopup.jsx
import React from "react";
import Modal from "./Modal";

const ServicesPopup = ({ open, onClose }) => {
  const data = {
    heading: "External Services",
    subtitle: "API Connectivity for External Sources",
    description:
      "FMT enables seamless real-time integration with external data providers and client systems. Using smart APIs, it automatically retrieves daily forex rates and connects directly to ERP platforms, while also supporting custom client requirements for a fully streamlined workflow.",
    brand: "#36A8DF",
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="w-full max-w-[700px] mx-auto">
        <h2
          className="text-2xl sm:text-3xl font-extrabold mb-2"
          style={{ color: data.brand }}
        >
          {data.heading}
        </h2>

        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
          {data.subtitle}
        </h3>

        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          {data.description}
        </p>
      </div>
    </Modal>
  );
};

export default ServicesPopup;
