"use client";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [language, setLanguage] = useState("English");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = ["Home", "Services", "Portfolio", "Blog"];
  const languages = ["English", "አማርኛ", "Somali", "Oromiffa"];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
          : "bg-gradient-to-b from-white/70 via-white/30 to-transparent backdrop-blur-[2px]"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-10 relative">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src={logo} alt="DM Logo" width={48} height={40} priority />
        </div>

        {/* Menu Items */}
        <ul className="hidden md:flex gap-10 text-[15px] font-medium text-gray-800 items-center">
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => setActive(item)}
              className={`relative cursor-pointer transition-all duration-200 hover:text-[#0D52B3] ${
                active === item ? "text-[#0D52B3]" : ""
              }`}
            >
              {item}
              {active === item && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#0D52B3] rounded-full transition-all duration-300"></span>
              )}
            </li>
          ))}

          {/* 🌐 Language Dropdown */}
          <li className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 text-gray-600 hover:text-[#0D52B3] cursor-pointer"
            >
              🌐 {language} <ChevronDown size={15} strokeWidth={2} />
            </button>

            {isDropdownOpen && (
              <ul className="absolute right-0 mt-3 w-36 bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden animate-fade-in">
                {languages.map((lang) => (
                  <li
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setIsDropdownOpen(false);
                    }}
                    className={`px-4 py-2 text-sm hover:bg-[#0D52B3]/10 hover:text-[#0D52B3] cursor-pointer transition ${
                      language === lang ? "bg-[#0D52B3]/10 text-[#0D52B3]" : ""
                    }`}
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        {/* CTA Button */}
        <button className="hidden md:block bg-[#0D52B3] hover:bg-[#0047AB] text-white px-5 py-2 rounded-md font-semibold text-sm shadow-md transition-all duration-300">
          Get a quote →
        </button>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">
          <button className="text-gray-800 hover:text-[#0D52B3] transition">
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}
