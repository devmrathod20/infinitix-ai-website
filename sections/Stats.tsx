"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    end: 20,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    end: 10,
    suffix: "+",
    label: "Technology Experts",
  },
  {
    end: 10,
    suffix: "+",
    label: "Years Experience",
  },
  {
    end: 100,
    suffix: "%",
    label: "Client Commitment",
  },
];

export default function Stats() {
  return (
    <section className="py-24 px-6 bg-[#050816]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Delivering Measurable Results
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto">
            Building scalable technology solutions that create
            measurable business value and long-term impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                bg-gradient-to-br
                from-[#0f172a]
                to-[#111827]
                border
                border-slate-800
                rounded-3xl
                p-10
                text-center
                hover:border-blue-500
                transition-all
                duration-300
              "
            >
              {/* Premium Accent Bar */}
              <div className="w-16 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>

              {/* Animated Number */}
              <div className="text-6xl font-bold text-blue-500 mb-4">
                <CountUp
                  end={stat.end}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {stat.suffix}
              </div>

              {/* Label */}
              <div className="text-slate-300 text-lg">
                {stat.label}
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}