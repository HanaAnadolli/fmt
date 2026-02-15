import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/fmt.png";
import footerPeople from "../assets/footer-image.png";

const Footer = () => {
  return (
    <footer className="bg-[#011A27] text-white overflow-hidden">
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="flex flex-col gap-12 py-14 md:flex-row md:justify-between md:gap-10">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-10 md:flex-row md:gap-10">
            {/* Logo */}
            <div className="min-w-[180px]">
              <img
                src={logo}
                alt="FMT"
                className="h-20 w-auto object-contain"
                draggable="false"
              />
            </div>

            {/* Legal */}
            <div className="min-w-[170px]">
              <h4 className="text-sm font-semibold tracking-wide">LEGAL</h4>
              <div className="mt-6 space-y-4 text-[15px] leading-6 text-white/75">
                <Link to="/terms" className="block hover:text-white transition">
                  Terms and Conditions
                </Link>
                <Link to="/privacy" className="block hover:text-white transition">
                  Privacy and Policy
                </Link>
                <Link to="/cookies" className="block hover:text-white transition">
                  Cookies Policy
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div className="min-w-[260px]">
              <h4 className="text-sm font-semibold tracking-wide">CONTACT</h4>
              <div className="mt-6 space-y-4 text-[15px] leading-6 text-white/75">
                <a
                  href="mailto:info@fmt-pro.com"
                  className="block hover:text-white transition"
                >
                  info@fmt-pro.com
                </a>
                <div>Hinterbergstrasse 18, CH - 6312 Steinhausen</div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative md:w-[560px] flex flex-col items-center md:items-end">
            
            {/* ✅ On mobile: text gets its own space (NOT absolute) */}
            {/* ✅ On md+: text overlaps image (absolute) */}
            <div className="static mt-8 max-w-[420px] text-center md:mt-0 md:max-w-[200px] md:text-left md:absolute md:-left-10 md:top-16">
              <p className="text-[18px] leading-8 text-[#9EC7DC]">
                We will be available to guide you in customising the ideal FMT
                modules.
              </p>
            </div>

            {/* Image */}
            <img
              src={footerPeople}
              alt="FMT team"
              className="mt-6 h-[240px] w-auto object-contain select-none md:mt-0 md:h-[320px]"
              draggable="false"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="pb-10 text-[14px] text-white/70">
          © 2026 FMT, Financial Management Tool. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
