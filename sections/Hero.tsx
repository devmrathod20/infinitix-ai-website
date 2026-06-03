"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    title: "Enterprise Technology Solutions",
    subtitle:
      "Accelerating business growth through AI, cloud technologies and digital transformation.",
    image: "/Hero/hero1.jpg",
  },
  {
    title: "AI Powered Business Automation",
    subtitle:
      "Automate operations, improve efficiency and scale your business faster.",
    image: "/Hero/hero2.jpg",
  },
  {
    title: "Cloud & Software Excellence",
    subtitle:
      "Building secure, scalable and future-ready digital platforms.",
    image: "/Hero/hero3.jpg",
  },
];

export default function Hero() {
  return (
    <section className="h-screen relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-screen bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Premium Glow Effects */}
              <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />
              <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                  >
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                      {slide.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl">
                      {slide.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <a
                        href="#contact"
                        className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition"
                      >
                        Schedule Consultation
                      </a>

                      <a
                        href="#services"
                        className="border border-white/30 hover:border-blue-400 px-8 py-4 rounded-lg font-semibold transition"
                      >
                        Explore Services
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
