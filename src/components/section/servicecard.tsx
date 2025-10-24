"use client";
import React from "react";

const services = [
  { title: "Software Development", icon: "💻" },
  { title: "Business Consultation", icon: "💼" },
  { title: "ERP & Automation", icon: "⚙️" },
  { title: "Market Research", icon: "📊" },
];

export default function ServiceCards() {
  return (
    <div className="relative z-20 -mt-20 md:-mt-28">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto bg-transparent px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-xl shadow-lg p-6 flex flex-col items-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >
            <span className="text-3xl mb-3">{service.icon}</span>
            <h3 className="text-lg font-semibold">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
