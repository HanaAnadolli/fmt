import React from 'react';
import Modal from './Modal';
import servicesPopupImg from '../../../assets/popups/services-popup.png';

const ServicesPopup = ({ open, onClose }) => {
  const data = {
    heading: "External Services",
    subtitle: "API Connectivity for External Sources",
    description:
      "FMT enables seamless real-time integration with external data providers and client systems. Through smart APIs, it can automatically retrieve daily forex rates, extract country sovereign ratings, and connect directly to ERP platforms — while also supporting custom client requirements for a fully streamlined workflow.",
    brand: "#36A8DF",
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* LEFT SIDE */}
          <div>
            <h2
              className="text-2xl sm:text-3xl font-extrabold mb-2"
              style={{ color: data.brand }}
            >
              {data.heading}
            </h2>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
              {data.subtitle}
            </h3>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-8">
              {data.description}
            </p>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex items-center justify-center lg:justify-end">
            <img
              src={servicesPopupImg}
              alt="External Services Illustration"
              className="w-full max-w-md lg:max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ServicesPopup;
