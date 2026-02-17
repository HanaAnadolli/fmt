// src/components/Home/OMTPopup.jsx
import React from "react";
import Modal from "./Modal";
import omtPopupImg from "../../assets/home/omt-popup.png";

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
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* LEFT */}
          <div className="max-w-[520px]">
            <h2
              className="text-2xl sm:text-3xl font-extrabold mb-5"
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

          {/* RIGHT */}
          <div className="flex items-center justify-center lg:justify-end">
            <img
              src={omtPopupImg}
              alt="OMT Popup"
              className="w-full max-w-[520px] lg:max-w-[560px] object-contain"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default OMTPopup;
