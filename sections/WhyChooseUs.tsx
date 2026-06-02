"use client";

import { useEffect, useState } from "react";
import {
  Building2,
  Rocket,
  ShieldCheck,
  Headphones,
  Cloud,
  BarChart3,
} from "lucide-react";

const features = [
  {
    number: "01",
    title: "Business-First Approach",
    description:
      "We align technology initiatives with business objectives to deliver measurable outcomes and long-term value.",
    icon: Building2,
  },
  {
    number: "02",
    title: "Rapid AI Implementation",
    description:
      "Accelerate innovation with proven AI and automation frameworks designed for faster deployment.",
    icon: Rocket,
  },
  {
    number: "03",
    title: "Secure & Scalable Architecture",
    description:
      "Enterprise-grade security and cloud-native scalability built into every solution we deliver.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Dedicated Support & Optimization",
    description:
      "Continuous monitoring, maintenance and optimization to maximize business performance.",
    icon: Headphones,
  },
  {
    number: "05",
    title: "Cloud-Native Solutions",
    description:
      "Modern applications and infrastructure powered by leading cloud platforms and best practices.",
    icon: Cloud,
  },
  {
    number: "06",
    title: "Measurable ROI",
    description:
      "Focused on reducing operational costs, improving productivity and generating tangible results.",
    icon: BarChart3,
  },
];

export default function WhyChooseUs() {
  const images = [
    "why-us/image1.jpg",
    "why-us/image2.jpg",
    "why-us/image3.jpg",
    "why-us/image4.jpg",
    "why-us/image5.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="why-us"
      className="py-28 bg-[#07101f] relative overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}

        <div className="text-center mb-20">
          <span className="text-blue-400 uppercase tracking-[0.3em] font-semibold">
            Why Enterprises Choose Us
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-6 mb-6">
            Your Trusted AI & Automation Partner
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            We combine AI expertise, cloud technologies and automation
            frameworks to help organizations innovate, optimize and scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE IMAGE SLIDER */}

          <div className="relative">

            <div
              className="
              relative
              h-[650px]
              rounded-3xl
              overflow-hidden
              border
              border-slate-800
              shadow-[0_0_60px_rgba(59,130,246,0.15)]
              "
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Enterprise AI Solutions"
                  className={`
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    transition-all
                    duration-[2000ms]
                    ease-in-out
                    ${
                      currentImage === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-110"
                    }
                  `}
                />
              ))}

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Floating Badge */}

              <div
                className="
                absolute
                top-6
                left-6
                px-5
                py-2.5
                rounded-full
                bg-blue-500/10
                border
                border-blue-500/30
                text-blue-400
                text-sm
                font-semibold
                backdrop-blur-md
                shadow-[0_0_25px_rgba(59,130,246,0.2)]
                "
              >
                Trusted Enterprise Technology Partner
              </div>

              {/* Bottom Card */}

              <div
                className="
                absolute
                bottom-8
                left-8
                right-8
                bg-black/40
                backdrop-blur-xl
                border
                border-white/10
                rounded-2xl
                p-6
                "
              >
                <h4 className="text-2xl font-semibold text-white mb-2">
                  Enterprise AI & Automation
                </h4>

                <p className="text-slate-300">
                  Delivering intelligent automation, cloud-native
                  solutions and AI-powered digital transformation
                  for modern enterprises.
                </p>
              </div>
            </div>

            {/* Indicators */}

            <div className="flex justify-center gap-3 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`
                    h-2 rounded-full transition-all duration-500
                    ${
                      currentImage === index
                        ? "w-12 bg-blue-500"
                        : "w-2 bg-slate-600 hover:bg-slate-400"
                    }
                  `}
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE FEATURES */}

          <div className="space-y-5">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.number}
                  className="
                  group
                  flex
                  gap-5
                  p-6
                  rounded-2xl
                  border
                  border-slate-800
                  bg-[#0f172a]
                  hover:border-blue-500
                  hover:translate-x-2
                  transition-all
                  duration-300
                  "
                >
                  <div className="text-3xl font-bold text-blue-500 min-w-[60px]">
                    {feature.number}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon
                        size={22}
                        className="text-blue-400"
                      />

                      <h3 className="text-xl font-semibold">
                        {feature.title}
                      </h3>
                    </div>

                    <p className="text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}