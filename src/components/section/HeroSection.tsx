"use client";
import React from "react";
import Image from "next/image";
import trade from "@/assets/images/trade.jpg";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden text-white bg-gradient-to-b from-white via-[#0F1C3A] to-[#020C24]">
      {/* Background Image + Overlay */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-30" />
      <div className="absolute inset-0">
        <Image
          src={trade}
          alt="Global trade background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFFF5] via-[#001036CC] to-[#001036]" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-12 pt-32 md:pt-44 pb-32 flex flex-col items-start">
        {/* Tagline */}
        <div className="inline-block bg-[#0D52B3] text-white text-xs sm:text-sm px-4 sm:px-6 py-1.5 sm:py-2 rounded-full mb-6 font-medium shadow-[0_0_15px_rgba(13,82,179,0.6)] text-center sm:text-left">
          We bridge Global Trade & Technology
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-snug max-w-4xl text-white">
          Empowering <span className="text-[#4DB5FF]">Global Growth</span>{" "}
          through Technology
        </h1>

        {/* Description */}
        <p className="mt-5 sm:mt-6 text-base sm:text-lg text-gray-200 max-w-2xl leading-relaxed">
          Empowering global enterprises through technology, strategy, and
          innovation — redefining the way businesses connect, operate, and scale
          in a digital-first world.
        </p>

        {/* Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="bg-[#0D52B3] px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-md text-sm sm:text-base w-full sm:w-auto">
            Our Services →
          </button>
          <button className="border border-white/40 px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto">
            Get a Quote →
          </button>
        </div>
      </div>
    </section>
  );
}
