"use client";

import { motion } from "framer-motion";
import {
  FaRobot,
  FaCloud,
  FaLaptopCode,
  FaMobileAlt,
  FaDatabase,
  FaPlug,
} from "react-icons/fa";

const services = [
  {
    icon: <FaRobot size={42} />,
    title: "AI & Automation",
    description:
      "Automate business processes, customer interactions and operational workflows using modern AI technologies.",
  },
  {
    icon: <FaCloud size={42} />,
    title: "Cloud Solutions",
    description:
      "Cloud migration, infrastructure optimization, monitoring and managed cloud services.",
  },
  {
    icon: <FaLaptopCode size={42} />,
    title: "Custom Software",
    description:
      "Enterprise-grade web applications, business platforms and digital products tailored to your needs.",
  },
  {
    icon: <FaMobileAlt size={42} />,
    title: "Mobile Applications",
    description:
      "Scalable Android and iOS applications designed for performance and user engagement.",
  },
  {
    icon: <FaDatabase size={42} />,
    title: "Data & Analytics",
    description:
      "Transform data into actionable insights with dashboards, reporting and business intelligence solutions.",
  },
  {
    icon: <FaPlug size={42} />,
    title: "Integration Services",
    description:
      "Seamlessly connect business systems, APIs and third-party platforms to improve efficiency.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-6 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Our Services
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto">
            Delivering innovative technology solutions that help
            businesses modernize operations, improve efficiency
            and accelerate growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
              }}
              className="group bg-[#0f172a] border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300"
            >
              <div className="text-blue-500 mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-slate-400 mb-6">
                {service.description}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition"
              >
                Learn More →
              </a>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}