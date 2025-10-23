"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import DottedGlowBackground from "@/components/ui/dotted-glow-background";

export default function HeroSection() {
  const [pixelRatio, setPixelRatio] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPixelRatio(window.devicePixelRatio || 1);
    }
  }, []);

  return (
    <section className="relative flex min-h-[600px] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#030712] to-[#0b0b0b]">
      {/* Optional Shape Blur Layer */}

      {/* Dotted Glow Overlay */}
      <DottedGlowBackground
        className="absolute inset-0 z-[1] opacity-40 dark:opacity-80"
        opacity={1}
        gap={10}
        radius={1.4}
        colorLightVar="--color-neutral-400"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.5}
        speedScale={1}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-8 py-20">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
          Empowering <span className="text-blue-500">Global Trade</span> through{" "}
          <span className="text-teal-400">Technology & Innovation</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          DM Trade & Investment PLC connects global supply chains with digital
          intelligence. From imports and exports to ERP systems — we drive
          growth through innovation.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-full bg-blue-600 px-8 py-3 text-white font-medium hover:bg-blue-500 transition-all duration-300">
            Explore Trade
          </button>
          <button className="rounded-full border border-blue-400 px-8 py-3 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300">
            View Software Solutions
          </button>
        </div>

        {/* Optional Footer-like Mini Demo */}
        <div className="absolute bottom-6 right-6 w-48 sm:w-60 opacity-80 hover:opacity-100 transition-all duration-500">
          <div className="relative flex items-center justify-between bg-white/5 rounded-2xl p-3 backdrop-blur-md border border-white/10 shadow-lg">
            <img
              src="https://assets.aceternity.com/logos/calcom.png"
              className="w-8 h-8 dark:invert"
              alt="Logo"
            />
            <p className="text-xs text-gray-300 font-light">
              Modern Scheduling App →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
