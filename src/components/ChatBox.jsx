import React, { useEffect, useState } from "react";
import man from "../assets/chat/man.png";
import women from "../assets/chat/women.png";

const ChatBox = () => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);
  const toggle = () => setOpen((v) => !v);

  // Close on ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      {/* Chat button */}
      <button
        onClick={toggle}
        className="fixed bottom-6 right-6 flex items-center gap-2 rounded-lg bg-primary px-4 py-3 text-white shadow-lg transition hover:opacity-90 z-50"
        aria-label="Open chat"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        <span className="text-sm font-semibold">Chat</span>
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-[999]">
          {/* Backdrop (click closes) */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={close}
            role="button"
            tabIndex={-1}
            aria-label="Close chat backdrop"
          />

          {/* Popup wrapper */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            {/* Popup (stop propagation so clicking inside doesn't close) */}
            <div
              className="
                relative z-[1000] w-full max-w-4xl overflow-hidden
                rounded-[28px] shadow-2xl
                bg-gradient-to-r from-[#2B9BD6] to-[#1F6F9B]
                animate-[chatIn_220ms_ease-out]
              "
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close X */}
              <button
                type="button"
                onClick={close}
                className="absolute right-5 top-5 z-[1010] text-white/90 hover:text-white text-3xl leading-none"
                aria-label="Close"
              >
                ×
              </button>

              {/* Content */}
              <div className="relative h-[440px] sm:h-[480px]">
                <img
                  src={man}
                  alt="Support agent"
                  className="absolute left-0 bottom-0 h-[92%] w-auto object-contain pointer-events-none select-none"
                />
                <img
                  src={women}
                  alt="Support agent"
                  className="absolute right-0 bottom-0 h-[92%] w-auto object-contain pointer-events-none select-none"
                />

                <div className="absolute inset-0 flex items-center justify-center px-6">
                  <div className="text-center text-white max-w-md">
                    <p className="text-xl font-semibold mb-2">Coming soon</p>
                    <p className="text-lg leading-snug">
                      We will be available to guide
                      <br />
                      you in customising the ideal
                      <br />
                      FMT module.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <style>{`
              @keyframes chatIn {
                from { transform: translateY(10px) scale(0.98); opacity: 0; }
                to   { transform: translateY(0) scale(1); opacity: 1; }
              }
            `}</style>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
