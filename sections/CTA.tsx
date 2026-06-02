"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
      <div className="max-w-5xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Ready To Accelerate Your
          <span className="block text-blue-400">
            Digital Transformation?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-300 text-lg max-w-3xl mx-auto mb-10"
        >
          Partner with us to build scalable software,
          AI-powered solutions, cloud infrastructure
          and enterprise applications that drive
          measurable business outcomes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-medium transition"
          >
            Schedule Consultation
          </a>

          <a
            href="#contact"
            className="border border-white/20 hover:border-blue-400 px-8 py-4 rounded-lg font-medium transition"
          >
            Contact Us
          </a>
        </motion.div>

      </div>
    </section>
  );
}