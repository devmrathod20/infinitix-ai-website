"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const caseStudies = [
  {
    image: "/case-studies/Case1.jpg",
    title: "Lead Management Automation",
    industry: "Healthcare",
    challenge: "Manual lead tracking and delayed response times.",
    solution: "AI chatbot, CRM integration and workflow automation.",
    result: "80% faster lead response and improved conversion rates.",
  },
  {
    image: "/case-studies/Case2.jpg",
    title: "Cloud Migration Project",
    industry: "Finance",
    challenge: "Legacy infrastructure and scalability limitations.",
    solution: "AWS migration with monitoring and automation.",
    result: "Improved reliability and reduced operational overhead.",
  },
  {
    image: "/case-studies/Case3.jpg",
    title: "Business Intelligence Platform",
    industry: "Retail",
    challenge: "Lack of actionable business insights.",
    solution: "Analytics dashboards and centralized reporting.",
    result: "Faster decision making and improved visibility.",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="py-24 px-6 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Success Stories
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto">
            Delivering measurable business outcomes through
            technology innovation and digital transformation.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 5000,
          }}
          pagination={{
            clickable: true,
          }}
          loop
        >
          {caseStudies.map((study, index) => (
            <SwiperSlide key={index}>

              <div className="grid lg:grid-cols-2 gap-10 items-center">

                {/* Image */}
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-[450px] object-cover"
                  />
                </div>

                {/* Content */}
                <div>

                  <div className="text-blue-400 font-medium mb-4">
                    {study.industry}
                  </div>

                  <h3 className="text-4xl font-bold mb-6">
                    {study.title}
                  </h3>

                  <div className="space-y-6">

                    <div>
                      <h4 className="font-semibold mb-2">
                        Challenge
                      </h4>

                      <p className="text-slate-400">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">
                        Solution
                      </h4>

                      <p className="text-slate-400">
                        {study.solution}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">
                        Outcome
                      </h4>

                      <p className="text-slate-400">
                        {study.result}
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}