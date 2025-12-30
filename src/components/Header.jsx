// Header.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/70 border-b border-green-400/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-semibold tracking-widest select-none">
          <span className="text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.9)]">
            DKT
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth
              spy
              duration={500}
              offset={-80}
              onSetActive={() => setActive(item.id)}
              className="relative cursor-pointer text-sm tracking-wider"
            >
              <span
                className={`transition-all ${
                  active === item.id
                    ? "text-green-400 drop-shadow-[0_0_6px_rgba(34,197,94,0.8)]"
                    : "text-gray-300 hover:text-green-400 hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.6)]"
                }`}
              >
                {item.label}
              </span>

              {active === item.id && (
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-green-400 shadow-[0_0_10px_rgba(34,197,94,0.9)]"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center">
          <a
            href="https://drive.google.com/file/d/1mYFEccq7EbeRldVjRz5uk675iy7xkq6l/view?usp=sharing"
            className="px-5 py-2 text-sm font-medium text-green-400
            border border-green-400/40 rounded-full
            shadow-[0_0_12px_rgba(34,197,94,0.6)]
            hover:bg-green-400 hover:text-black
            hover:shadow-[0_0_20px_rgba(34,197,94,1)]
            transition-all duration-300"
          >
            View Resume
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;