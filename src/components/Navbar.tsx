import { useTheme } from "../scripts/ThemeContext";
import { useState, useEffect } from "react";

export default function Navbar() {
  const sections = ["Hero", "About", "Projects", "Experience", "Contact"];

  const [active, setActive] = useState(sections[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleTheme, isDark } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  {/*DISABLE SCROLL WHEN MENU IS OPEN*/}
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  {/*CHANGE OF ACTIVE SECTION*/}
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        //section is in viewport?
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setActive(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);

    //call on mount to set initial active state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="relative">
      {/* DESKTOP NAVBAR */}
      <div className="hidden lg:flex flex-row justify-between gap-5">
        {/* LOGO */}
        <div className="flex flex-1">
          <h1 className="font-black text-3xl">CHRISTIAN COLADILLA</h1>
        </div>

        {/* NAV LINKS */}
        <div className="flex flex-row gap-10 flex-2 justify-center">
          {sections.map((id) => (
            <h3
              key={id}
              className={`nav-item flex justify-center items-center text-2xl font-extrabold
                ${active === id ? "active" : ""}
              `}
            >
              <a href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                  window.history.replaceState(null, "", window.location.pathname);
                }}
              >
                {id === "Hero" ? "HOME" : id.toUpperCase()}
              </a>
              
            </h3>
          ))}
        </div>

        {/* THEME TOGGLE */}
        <div className="flex flex-1 justify-end items-center">
          <div
            id="theme-toggle"
            onClick={toggleTheme}
            className="flex w-20 h-11 bg-(--accent) rounded-3xl justify-around items-center relative
                       cursor-pointer shadow-[inset_0_0_5px_black] transition-all duration-300 ease"
          >
            <div className="text-[20px]">🌙</div>
            <div
                className={`w-9 h-9 bg-(--primary) rounded-full absolute shadow-[0_0_3px_black]
                transition-all duration-300 ease
                ${isDark ? "left-[55%]" : "left-[5%]"}`}
            />
            <div className="text-[20px]">☀️</div>
          </div>
        </div>
      </div>

{/*========================================================================================================== */}
      {/* MOBILE NAVBAR */}
      <div className="lg:hidden flex flex-row justify-between items-center py-4">
        {/* LOGO */}
        <h1 className="font-black text-xl">
          CHRISTIAN <br /> COLADILLA
        </h1>

        {/* MOBILE MENU BUTTON & THEME TOGGLE */}
        <div className="flex flex-row gap-4 items-center">
          {/* THEME TOGGLE */}
          <div
            id="theme-toggle"
            onClick={toggleTheme}
            className="flex w-20 h-11 bg-(--accent) rounded-3xl justify-around items-center relative
                       cursor-pointer shadow-[inset_0_0_5px_black] transition-all duration-300 ease"
          >
            <div className="text-[20px]">🌙</div>
            <div
                className={`w-9 h-9 bg-(--primary) rounded-full absolute shadow-[0_0_3px_black]
                transition-all duration-300 ease
                ${isDark ? "left-[55%]" : "left-[5%]"}`}
            />
            <div className="text-[20px]">☀️</div>
          </div>

          {/* HAMBURGER BUTTON */}
          <button
            onClick={toggleMenu}
            className="default-btn flex flex-col gap-1.5 cursor-pointer p-2 bg-(--bg)!"
            aria-label="Toggle menu"
          >
            <div
              className={`w-6 h-0.5 bg-(--primary) transition-all duration-300 ease
                ${isMenuOpen ? "rotate-45 translate-y-2" : ""}
              `}
            />
            <div
              className={`w-6 h-0.5 bg-(--primary) transition-all duration-300 ease
                ${isMenuOpen ? "opacity-0" : ""}
              `}
            />
            <div
              className={`w-6 h-0.5 bg-(--primary) transition-all duration-300 ease
                ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}
              `}
            />
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`
          lg:hidden fixed inset-0 top-20 backdrop-blur-sm z-40
          transition-opacity duration-300
          ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <div
          className={`
            fixed inset-y-0 right-0 w-[70%] bg-(--bg) z-50
            transition-transform duration-500 ease-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex flex-col gap-0 py-6">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                  window.history.replaceState(null, "", window.location.pathname);
                  {closeMenu();}
                }}
                className={`px-6 py-4 text-2xl font-extrabold nav-item transition-all duration-200
                  ${
                    active === id
                      ? "bg-(--accent) bg-opacity-20 border-l-4 border-(--accent)"
                      : "hover:bg-(--accent) hover:bg-opacity-10"
                  }
                `}
              >
                {id === "Hero" ? "HOME" : id.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>
      

      {/* MOBILE MENU OVERLAY */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[80px] z-30 bg-(--bg) opacity-[0.90] backdrop-blur-sm"
          onClick={closeMenu}
        />
      )}
    </nav>
  );
}
