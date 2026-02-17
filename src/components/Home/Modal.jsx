// src/components/Home/Modal.jsx
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, onClose, children }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKeyDown);

    // focus modal panel (helps with keyboard users)
    const t = setTimeout(() => panelRef.current?.focus(), 0);

    return () => {
      clearTimeout(t);
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[99999]" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/55 backdrop-blur-sm"
        onMouseDown={(e) => {
          // close only when clicking the backdrop itself
          if (e.target === e.currentTarget) onClose?.();
        }}
        aria-hidden="true"
      />

      {/* Centering wrapper with real spacing */}
      <div className="relative h-full w-full overflow-y-auto">
        <div className="min-h-full w-full flex items-center justify-center p-6 sm:p-10 md:p-12">
          {/* Modal Card */}
          <div
            ref={panelRef}
            tabIndex={-1}
            className="
              relative w-full
              max-w-[980px]
              rounded-[28px]
              bg-white
              shadow-[0_30px_90px_rgba(0,0,0,0.40)]
              ring-1 ring-black/5
              overflow-hidden
              outline-none
              animate-[modalIn_180ms_ease-out]
            "
          >
            {/* Header (keeps close button aligned) */}
            <div className="flex items-center justify-end px-5 sm:px-7 py-2">
              <button
                type="button"
                onClick={() => onClose?.()}
                aria-label="Close"
                className="
                  h-10 w-10 rounded-full
                  grid place-items-center
                  text-black/70 hover:text-black
                  hover:bg-black/5 active:bg-black/10
                  transition
                "
              >
                <span className="text-2xl leading-none">✕</span>
              </button>
            </div>

            {/* Content */}
            <div className="px-6 sm:px-10 py-2 sm:py-4">
              {children}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(10px) scale(0.985); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>,
    document.body
  );
}
