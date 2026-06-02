"use client";

import { ArrowRight } from "lucide-react";

const industries = [
  {
    title: "Healthcare",
    description:
      "AI-powered patient engagement, workflow automation and healthcare analytics.",
    image: "/industries/healthcare.jpg",
  },
  {
    title: "Manufacturing",
    description:
      "Smart factory automation, predictive maintenance and Industry 4.0 solutions.",
    image: "/industries/manufacturing.jpg",
  },
  {
    title: "Finance",
    description:
      "Intelligent analytics, risk assessment and financial process automation.",
    image: "/industries/finance.jpg",
  },
  {
    title: "Retail",
    description:
      "Customer insights, inventory optimization and AI-driven personalization.",
    image: "/industries/retail.jpg",
  },
  {
    title: "Logistics",
    description:
      "Supply chain visibility, route optimization and warehouse automation.",
    image: "/industries/logistics.jpg",
  },
  {
    title: "Education",
    description:
      "Learning automation, student engagement and digital education platforms.",
    image: "/industries/education.jpg",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="py-28 bg-[#050816] relative overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}

        <div className="text-center mb-20">
          <span className="text-blue-400 uppercase tracking-[0.3em] font-semibold">
            Industries We Serve
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-6 mb-6">
            Transforming Industries Through Technology
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Delivering AI, automation and cloud solutions tailored
            to industry-specific challenges and opportunities.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {industries.map((industry, index) => (
            <div
              key={index}
              className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-slate-800
              bg-[#0f172a]
              transition-all
              duration-500
              hover:-translate-y-4
              hover:border-blue-500
              hover:shadow-[0_0_50px_rgba(59,130,246,0.25)]
              "
            >
              {/* Image */}

              <div className="relative h-[280px] overflow-hidden">

                <img
                  src={industry.image}
                  alt={industry.title}
                  className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                  "
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              {/* Content */}

              <div className="p-8">

                <h3 className="text-2xl font-semibold mb-4">
                  {industry.title}
                </h3>

                <p className="text-slate-400 mb-6">
                  {industry.description}
                </p>

                {/* Learn More */}

                <div
                  className="
                  flex
                  items-center
                  gap-2
                  text-blue-400
                  font-medium
                  opacity-0
                  -translate-x-4
                  group-hover:opacity-100
                  group-hover:translate-x-0
                  transition-all
                  duration-500
                  "
                >
                  Learn More

                  <ArrowRight size={18} />
                </div>

              </div>

              {/* Glow Border */}

              <div
                className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
                pointer-events-none
                bg-gradient-to-r
                from-blue-500/5
                via-cyan-500/5
                to-blue-500/5
                "
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
