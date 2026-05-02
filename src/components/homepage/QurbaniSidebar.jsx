"use client";

import Image from "next/image";
import { ShieldCheck, HeartHandshake, Scale, Leaf, BadgeCheck } from "lucide-react";

const qurbaniTips = [
  {
    icon: ShieldCheck,
    title: "Choose Healthy Halal Animals",
    description:
      "Select healthy cows, goats, sheep, or camels that meet Islamic guidelines for age, health, and physical condition.",
  },
  {
    icon: BadgeCheck,
    title: "Verify Islamic Requirements",
    description:
      "Ensure the animal is free from visible defects and qualifies according to Shariah for a valid Qurbani.",
  },
  {
    icon: Leaf,
    title: "Care Before Sacrifice",
    description:
      "Provide clean food, water, and gentle treatment. Islam emphasizes mercy and kindness toward animals.",
  },
  {
    icon: Scale,
    title: "Distribute Meat Properly",
    description:
      "Divide meat into three parts: family, relatives/friends, and the needy, reflecting generosity and social responsibility.",
  },
  {
    icon: HeartHandshake,
    title: "Strengthen Faith & Charity",
    description:
      "Qurbani honors the sacrifice of Prophet Ibrahim (AS) and deepens devotion, gratitude, and care for the less fortunate.",
  },
];

const halalBreeds = [
  {
    name: "Deshi / Sahiwal Cow",
    type: "Cow",
    details: "Popular for affordability, meat quality, and strong suitability for Qurbani.",
    image: "https://images.unsplash.com/photo-1766858207728-698384162e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Black Bengal Goat",
    type: "Goat",
    details: "Highly valued in South Asia for premium meat quality and manageable size.",
    image: "https://plus.unsplash.com/premium_photo-1691030658378-acdaab929bed?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function QurbaniSidebar() {
  return (
    <aside className="w-full max-w-md mx-auto bg-white text-[#1D3557] rounded-3xl shadow-xl overflow-hidden border border-gray-100">
      {/* Header - Using your brand's Navy Blue */}
      <div className="relative p-6 bg-[#1D3557] text-white">
        <h2 className="text-2xl font-black tracking-tight mb-2">
          Qurbani Guide
        </h2>
        <p className="text-xs text-blue-100/80 leading-relaxed uppercase tracking-widest font-semibold">
          Honoring the Legacy of Prophet Ibrahim (AS)
        </p>
      </div>

      <div className="p-6 space-y-10">
        {/* Importance Section */}
        <section>
          <h3 className="text-lg font-bold mb-3 text-primary border-l-4 border-primary pl-3">
            Why Qurbani Matters
          </h3>
          <p className="text-sm text-gray-600 leading-6">
            Qurbani is an act of worship to obey Allah and support the poor by sharing blessings. It represents sacrifice, sincerity, and gratitude.
          </p>
        </section>

        {/* Tips Section */}
        <section>
          <h3 className="text-lg font-bold mb-5 text-primary border-l-4 border-primary pl-3">
            Essential Tips
          </h3>
          <div className="space-y-4">
            {qurbaniTips.slice(0, 3).map((tip, index) => { // Sliced for better sidebar height
              const Icon = tip.icon;
              return (
                <div
                  key={index}
                  className="flex gap-4 bg-base-200/50 rounded-2xl p-4 border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1D3557] mb-1">{tip.title}</h4>
                    <p className="text-[12px] text-gray-500 leading-5">
                      {tip.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Top Halal Breeds */}
        <section>
          <h3 className="text-lg font-bold mb-5 text-primary border-l-4 border-primary pl-3">
            Popular Breeds
          </h3>
          <div className="grid gap-4">
            {halalBreeds.map((animal, index) => (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative w-full h-32">
                  <Image
                    src={animal.image}
                    alt={animal.name}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 text-[10px] bg-primary text-white px-2 py-0.5 rounded-full font-bold">
                    {animal.type}
                  </span>
                </div>
                <div className="p-3">
                  <h4 className="text-sm font-bold text-[#1D3557]">
                    {animal.name}
                  </h4>
                  <p className="text-[11px] text-gray-500 line-clamp-1">
                    {animal.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
}