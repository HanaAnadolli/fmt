import { NavLink, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import fmtLogo from "../assets/fmt.png"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // prevent background scroll
  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => (document.body.style.overflow = prev)
  }, [menuOpen])

  // close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const isHome = location.pathname === "/"
  const headerBg = isHome ? "bg-transparent" : "bg-white"

  const base = "px-3 py-2 text-[19px] font-semibold relative group"
  const active = "text-primary"
  const inactive = "text-slate-700 hover:text-primary"

  const Item = ({ to, label, end, onClick }) => (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
    >
      {({ isActive }) => (
        <span className="relative inline-block">
          {label}
          <span
            className={`absolute left-0 -bottom-1 h-[2px] w-full bg-primary transition-opacity ${
              isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
          />
        </span>
      )}
    </NavLink>
  )

  return (
    <header className={`relative w-full ${headerBg}`}>
      <div className="mx-auto flex h-[110px] max-w-7xl items-center px-6 sm:px-8 lg:px-10">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={fmtLogo}
            alt="FMT Logo"
            className="select-none w-[120px] sm:w-[140px] h-auto"
            draggable={false}
          />
        </NavLink>

        {/* Desktop nav */}
        <nav className="ml-auto hidden items-center gap-12 md:flex">
          <Item to="/" label="Home" end />
          <Item to="/about" label="About Us" />
          <Item to="/news" label="Views & News" />
          <Item to="/contact" label="Contact" />
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
          className="ml-auto rounded-md p-3 text-slate-700 hover:text-primary md:hidden"
        >
          <span className="relative block h-6 w-7">
            <span className="absolute top-0 left-0 h-[2px] w-7 bg-current" />
            <span className="absolute top-[11px] left-0 h-[2px] w-7 bg-current" />
            <span className="absolute top-[22px] left-0 h-[2px] w-7 bg-current" />
          </span>
        </button>
      </div>

      {/* Overlay + Drawer */}
      <div
        className={`fixed inset-0 z-[100] md:hidden transition-opacity ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMenuOpen(false)}
        />

        <aside
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex h-full flex-col">
            <div className="flex justify-end px-6 py-5">
              <button
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full text-slate-700 hover:text-primary"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-6 px-8 pt-6">
              <Item to="/" label="Home" end onClick={() => setMenuOpen(false)} />
              <Item to="/about" label="About Us" onClick={() => setMenuOpen(false)} />
              <Item to="/news" label="Views & News" onClick={() => setMenuOpen(false)} />
              <Item to="/contact" label="Contact" onClick={() => setMenuOpen(false)} />
            </nav>
          </div>
        </aside>
      </div>
    </header>
  )
}
