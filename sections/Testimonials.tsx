"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "John Smith",
    company: "Healthcare Solutions Ltd",
    image: "/testimonials/client1.jpg",
    quote:
      "Infinitix AI helped us automate our lead management process and significantly improved response times.",
  },
  {
    name: "Sarah Johnson",
    company: "RetailTech Group",
    image: "/testimonials/client2.jpg",
    quote:
      "Their cloud modernization expertise enabled us to scale faster while improving operational efficiency.",
  },
  {
    name: "Michael Brown",
    company: "FinancePro",
    image: "/testimonials/client3.jpg",
    quote:
      "Professional team, excellent communication and outstanding delivery quality throughout the project.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#050816]">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto">
            Trusted by organizations looking to accelerate
            innovation through technology and automation.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#0f172a] border border-slate-800 rounded-3xl p-10 md:p-14 text-center">

                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-2 border-blue-500"
                />

                <div className="text-yellow-400 text-2xl mb-6">
                  ★★★★★
                </div>

                <p className="text-slate-300 text-lg italic max-w-3xl mx-auto mb-8">
                  "{testimonial.quote}"
                </p>

                <h4 className="text-xl font-semibold">
                  {testimonial.name}
                </h4>

                <p className="text-blue-400">
                  {testimonial.company}
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}