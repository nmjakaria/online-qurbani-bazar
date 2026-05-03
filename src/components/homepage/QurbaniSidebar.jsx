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
    image:
      "https://images.unsplash.com/photo-1766858207728-698384162e8e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Black Bengal Goat",
    type: "Goat",
    details: "Highly valued in South Asia for premium meat quality and manageable size.",
    image:
      "https://plus.unsplash.com/premium_photo-1691030658378-acdaab929bed?q=80&w=687&auto=format&fit=crop",
  },
  {
    name: "Kacchi Sheep",
    type: "Sheep",
    details: "Known for its adaptability and quality meat, making it a common choice for Qurbani.",
    image:
      "https://images.unsplash.com/photo-1637515755087-3bbf0bc1b255?q=80&w=1887&auto=format&fit=crop",
  }
];

export default function QurbaniSection() {
  return (
    <section className="w-full bg-pink-50 text-[#1D3557]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">

        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-black">
            Qurbani Guide
          </h2>
          <p className="text-sm md:text-base text-gray-500 uppercase tracking-widest font-semibold">
            Honoring the Legacy of Prophet Ibrahim (AS)
          </p>
        </div>

        {/* Importance */}
        <section className="space-y-3">
          <h3 className="text-xl font-bold border-l-4 border-primary pl-3">
            Why Qurbani Matters
          </h3>
          <p className="text-sm md:text-base text-gray-600 leading-7 max-w-3xl">
            Qurbani is an act of worship to obey Allah and support the poor by sharing blessings.
            It represents sacrifice, sincerity, and gratitude.
          </p>
        </section>

        {/* Tips */}
        <section>
          <h3 className="text-xl font-bold mb-6 border-l-4 border-primary pl-3">
            Essential Tips
          </h3>

          <div className="grid md:grid-cols-2 gap-5">
            {qurbaniTips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <div
                  key={index}
                  className="flex gap-4 bg-gray-50 rounded-2xl p-5 border hover:border-primary/30 hover:shadow-md transition"
                >
                  <Icon className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold mb-1">{tip.title}</h4>
                    <p className="text-xs text-gray-500 leading-5">
                      {tip.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Breeds */}
        <section>
          <h3 className="text-xl font-bold mb-6 border-l-4 border-primary pl-3">
            Popular Halal Breeds
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {halalBreeds.map((animal, index) => (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-lg transition"
              >
                <div className="relative w-full h-44">
                  <Image
                    src={animal.image}
                    alt={animal.name}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[11px] bg-primary text-white px-3 py-1 rounded-full font-bold">
                    {animal.type}
                  </span>
                </div>

                <div className="p-4">
                  <h4 className="text-sm font-bold">{animal.name}</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {animal.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}