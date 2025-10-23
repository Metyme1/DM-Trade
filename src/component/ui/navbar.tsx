"use client";

import PillNav from "@/component/effects/pillnav";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex justify-center">
        <PillNav
          logo="/logo.png"
          logoAlt="DM Trade Logo"
          items={[
            { label: "Home", href: "/" },
            { label: "Trade", href: "/trade" },
            { label: "Software", href: "/software" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]}
          activeHref="/"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#0047ab"
          pillTextColor="#000000"
        />
      </div>
    </header>
  );
};

export default Navbar;
