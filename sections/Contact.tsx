"use client";

import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#0a1128]"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Let's Build Something Great
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto">
            Discuss your next digital transformation,
            AI automation or cloud modernization project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="bg-[#0f172a] rounded-3xl p-10 border border-slate-800">

            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex gap-4">
                <FaEnvelope className="text-blue-500 text-xl mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-slate-400">
                    info@infinitixai.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaPhone className="text-blue-500 text-xl mt-1" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-slate-400">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-blue-500 text-xl mt-1" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-slate-400">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaClock className="text-blue-500 text-xl mt-1" />
                <div>
                  <h4 className="font-semibold">Business Hours</h4>
                  <p className="text-slate-400">
                    Mon - Fri | 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Side Form */}
          <div className="bg-[#0f172a] rounded-3xl p-10 border border-slate-800">

            <h3 className="text-3xl font-bold mb-8">
              Schedule Consultation
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-[#111827] border border-slate-700 rounded-xl px-5 py-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-[#111827] border border-slate-700 rounded-xl px-5 py-4"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="w-full bg-[#111827] border border-slate-700 rounded-xl px-5 py-4"
              />

              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full bg-[#111827] border border-slate-700 rounded-xl px-5 py-4"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold transition"
              >
                Submit Inquiry
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}