import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import fmtLogo from "../assets/fmt.png"

export default function Header() {
  const [isVisible, setIsVisible] = useState(false)
  const HOLD_MS = 500

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), HOLD_MS)
    return () => clearTimeout(t)
  }, [])

  const base =
    "px-2 py-1 text-[16px] font-semibold transition-all relative group"
  const active = "text-primary"
  const inactive = "text-slate-700 hover:text-primary"

  const Item = ({ to, label, end }) => (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
    >
      {({ isActive }) => (
        <span className="relative">
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
    <header 
      className={`relative w-full transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundColor: '#E4E4E4' }}
    >
      <div className="relative mx-auto flex h-[86px] w-full max-w-7xl items-center px-8">
        <NavLink to="/" className="group flex items-center">
          <div className="flex h-10 w-24 items-center justify-center">
            <img
              src={fmtLogo}
              alt="FMT Logo"
              className="w-auto h-auto select-none"
              draggable={false}
            />
          </div>
        </NavLink>

        {/* push nav to the right */}
        <nav className="ml-auto flex items-center gap-12">
          <Item to="/" label="Home" end />
          <Item to="/about" label="About Us" />
          <Item to="/news" label="Views & News" />
          <Item to="/contact" label="Contact" />
        </nav>
      </div>
    </header>
  )
}
