import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/fmt.png";
import footerPeople from "../assets/footer-image.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#011A27] text-white">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="md:hidden pt-10 pb-12">
          {/* Logo */}
          <img
            src={logo}
            alt="FMT"
            className="h-12 w-auto object-contain"
            draggable="false"
          />
          <div className="mt-10">
            <h4 className="text-xs font-semibold tracking-wide text-white/90">
              LEGAL
            </h4>
            <div className="mt-4 space-y-2 text-[12px] leading-5 text-white/60">
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

          <div className="mt-8">
            <h4 className="text-xs font-semibold tracking-wide text-white/90">
              CONTACT
            </h4>
            <div className="mt-4 space-y-2 text-[12px] leading-5 text-white/60">
              <a
                href="mailto:info@fmt-pro.com"
                className="block text-[#59C1F0] hover:text-white transition"
              >
                info@fmt-pro.com
              </a>
              <div>Hinterbergstrasse 18, CH - 6312 Steinhausen</div>
            </div>
          </div>

          <div className="mt-10 text-[11px] leading-5 text-white/55">
            © 2026 FMT, Financial Management Tool. All Rights Reserved
          </div>

          <p className="mt-10 max-w-[260px] text-[12px] italic leading-5 text-[#9EC7DC]">
            We will be available to
            <br />
            guide you in customising
            <br />
            the ideal FMT modules.
          </p>

          <div className="relative mt-6 h-[230px] w-full">
            <div className="absolute bottom-0 left-1/2 h-[190px] w-[260px] -translate-x-1/2 rounded-full bg-[#0A3B52]/45" />
            <div className="absolute bottom-[-10px] left-1/2 h-[160px] w-[240px] -translate-x-1/2 rounded-full bg-[#0A3B52]/35" />

            <img
              src={footerPeople}
              alt="FMT team"
              draggable="false"
              className="absolute bottom-[-10px] left-1/2 z-10 h-[220px] w-auto -translate-x-1/2 object-contain"
            />
          </div>
        </div>

        <div className="hidden md:block">
          <div className="relative h-[420px] md:pr-[520px] lg:pr-[600px]">
            <div className="absolute left-0 top-[70px]">
              <img
                src={logo}
                alt="FMT"
                className="h-20 w-auto object-contain"
                draggable="false"
              />
            </div>
            <div className="absolute left-[200px] top-[80px]">
              <h4 className="text-sm font-semibold tracking-wide">LEGAL</h4>
              <div className="mt-4 space-y-3 text-[16px] leading-6 text-white/75">
                {/* <Link to="/terms" className="block hover:text-white transition">
                  Terms and Conditions
                </Link> */}
                <Link
                  to="/legal-privacy"
                  className="block hover:text-white transition"
                >
                  Privacy and Policy
                </Link>
                <Link
                  to="/legal-cookies"
                  className="block hover:text-white transition"
                >
                  Cookies Policy
                </Link>
              </div>
            </div>

            {/* CONTACT */}
            <div className="absolute left-[420px] top-[80px]">
              <h4 className="text-sm font-semibold tracking-wide">CONTACT</h4>
              <div className="mt-4 space-y-3 text-[16px] leading-6 text-white/75">
                <a
                  href="mailto:info@fmt-pro.com"
                  className="block text-[#59C1F0] hover:text-white transition"
                >
                  info@fmt-pro.com
                </a>
                <div>
                  Hinterbergstrasse 18, CH - 6312
                  <br />
                  Steinhausen
                </div>
              </div>
            </div>
            <div className="absolute top-[120px] right-[520px] lg:right-[300px] z-30 max-w-[340px] text-left">
              <p className="text-[16px] leading-9 text-[#9EC7DC]">
                We will be available to 
                <br />
                guide you in customising 
                <br />
                the ideal FMT modules.
              </p>
            </div>

            {/* People pinned to the REAL footer right (outside the reserved area) */}
            <div className="pointer-events-none absolute bottom-[-20px] right-[-20px] z-10">
              <img
                src={footerPeople}
                alt="FMT team"
                draggable="false"
                className="h-[360px] w-auto object-contain"
              />
            </div>

            {/* Copyright */}
            <div className="absolute bottom-[20px] left-0 text-[14px] text-white/70">
              © 2026 FMT, Financial Management Tool. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
