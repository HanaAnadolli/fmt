import React from 'react';
import Modal from './Modal';
import omtPopupImg from '../../../assets/popups/omt-popup.png';

const OMTPopup = ({ open, onClose }) => {
  const data = {
    heading: "Operations Management Tool (OMT)",
    brand: "#1DA565",
    bullets: [
      {
        body: "An AI-powered assistant within OMT improves and streamlines user experience by automatically populating financial spreads, generating credit reports, and providing guidance on platform usage.",
      }
    ],
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Left side - Text content */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: data.brand }}>
              {data.heading}
            </h2>
          </div>

          <ul className="space-y-4">
            {data.bullets.map((b, i) => (
              <li key={i} className="flex gap-3">
                <div>
                  <div className="text-gray-800 leading-relaxed text-xs sm:text-sm">{b.body}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side - Popup Image */}
        <div className="flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src={omtPopupImg} 
              alt="OMT Popup" 
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default OMTPopup;

