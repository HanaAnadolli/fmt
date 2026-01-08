import React from 'react';
import Modal from './Modal';
import cmtPopupImg from '../../../assets/popups/cmt-popup.png';

const CMTPopup = ({ open, onClose }) => {
  const data = {
    heading: "Compliance Management Tool (CMT)",
    brand: "#F0C430",
    bullets: [
      {
        body: "Integration with CMT streamlines the onboarding process in FMT by enabling the automatic transfer of company onboarding data. Additionally, the compliance monitoring and scoring is also transferred to FMT, offering an integrated view of each company or portfolio financial and compliance standing.",
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
            <p className="text-sm sm:text-base font-semibold text-black">{data.subheading}</p>
          </div>

          <ul className="space-y-4">
            {data.bullets.map((b, i) => (
              <li key={i} className="flex gap-3">
                <div>
                  <div className="font-bold text-sm sm:text-base mb-1" style={{ color: data.brand }}>
                    {b.title}
                  </div>
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
              src={cmtPopupImg} 
              alt="CMT Popup" 
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CMTPopup;

