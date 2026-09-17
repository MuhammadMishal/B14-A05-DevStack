import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
const navItems = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-slate-100 bg-white sticky top-0 left-0 right-0 z-10">
      <nav
        className="relative mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 lg:px-8"
        aria-label="Main navigation"
      >
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="btn btn-ghost btn-square -ml-2 border-0 shadow-none hover:bg-slate-100 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <HiOutlineX className="text-2xl" />
          ) : (
            <HiOutlineMenuAlt3 className="text-2xl" />
          )}
        </button>

        <img
          className="h-8 w-auto object-contain sm:h-9"
          src="images/logo-text.png"
          alt=""
        />

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={index === 1 ? "#technologies" : "#"}
              className={
                index === 0
                  ? "text-pink-600"
                  : "transition-colors hover:text-pink-600"
              }
            >
              {item}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2 text-sm font-medium sm:gap-4 md:ml-0">
          <button
            type="button"
            className="btn btn-sm border-0 bg-transparent px-1 text-[#10182b] opacity-100 shadow-none hover:bg-slate-50 hover:text-pink-600 sm:px-2"
          >
            Sign In
          </button>
          <button
            type="button"
            className="btn btn-sm rounded-full border-0 bg-gradient-to-r from-orange-500 to-purple-500 px-4 text-white shadow-none hover:brightness-95 sm:px-6"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-4 pb-5 pt-3 md:hidden">
          <div className="flex flex-col">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={index === 1 ? "#technologies" : "#"}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-pink-50 text-pink-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-pink-600"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
