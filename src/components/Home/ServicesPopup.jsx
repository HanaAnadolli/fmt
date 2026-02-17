// src/components/Home/ServicesPopup.jsx
import React from "react";
import Modal from "./Modal";
import servicesPopupImg from "../../assets/home/services-popup.png";

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
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* LEFT */}
          <div className="max-w-[520px]">
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

          {/* RIGHT */}
          <div className="flex items-center justify-center lg:justify-end">
            <img
              src={servicesPopupImg}
              alt="External Services Illustration"
              className="w-full max-w-[520px] lg:max-w-[560px] object-contain"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ServicesPopup;
