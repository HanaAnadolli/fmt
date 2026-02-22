// src/components/Home/OMTPopup.jsx
import React from "react";
import Modal from "./Modal";

const OMTPopup = ({ open, onClose }) => {
  const data = {
    heading: "Operations Management Tool (OMT)",
    brand: "#1DA565",
    bullets: [
      {
        body: "OMT is an automation platform that improves and streamlines user experience by automatically populating financial spreads, interpreting financial data, generating credit reports, and providing guidance on platform usage.",
      },
    ],
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="w-full max-w-[700px] mx-auto">
        <h2
          className="text-2xl sm:text-3xl font-extrabold mb-6"
          style={{ color: data.brand }}
        >
          {data.heading}
        </h2>

        <ul className="space-y-4">
          {data.bullets.map((b, i) => (
            <li
              key={i}
              className="text-gray-700 leading-relaxed text-sm sm:text-base"
            >
              {b.body}
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default OMTPopup;
