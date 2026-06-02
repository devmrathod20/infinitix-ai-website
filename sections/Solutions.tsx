"use client";

import { motion } from "framer-motion";
import {
  FaRobot,
  FaChartLine,
  FaCloud,
  FaBuilding,
  FaDatabase,
  FaCogs,
} from "react-icons/fa";

const solutions = [
  {
    icon: <FaRobot size={40} />,
    title: "AI & Automation",
    description:
      "Automate repetitive processes, improve efficiency and enhance customer experiences with AI-powered solutions.",
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Digital Transformation",
    description:
      "Modernize business operations through technology adoption, process optimization and innovation strategies.",
  },
  {
    icon: <FaCloud size={40} />,
    title: "Cloud Modernization",
    description:
      "Migrate, optimize and scale applications using secure and reliable cloud infrastructure.",
  },
  {
    icon: <FaBuilding size={40} />,
    title: "Enterprise Applications",
    description:
      "Develop scalable business applications, internal platforms and enterprise-grade digital systems.",
  },
  {
    icon: <FaDatabase size={40} />,
    title: "Business Intelligence",
    description:
      "Transform data into actionable insights through dashboards, reporting and analytics solutions.",
  },
  {
    icon: <FaCogs size={40} />,
    title: "Managed Services",
    description:
      "Ensure operational excellence with continuous monitoring, maintenance and technology support.",
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="py-24 px-6 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Business Solutions
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto">
            Helping organizations accelerate growth through
            innovative technology solutions, enterprise systems
            and digital transformation initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
              }}
              className="group bg-[#0f172a] border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300"
            >
              <div className="text-blue-500 mb-6">
                {solution.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {solution.title}
              </h3>

              <p className="text-slate-400 mb-6">
                {solution.description}
              </p>

              <a
                href="#contact"
                className="text-blue-400 font-medium hover:text-blue-300 transition"
              >
                Discuss Solution →
              </a>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}