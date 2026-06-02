"use client";

import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-bold text-white"
          >
            Infinitix AI
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            
            {/* Services Mega Menu */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-slate-300 hover:text-blue-400 transition">
                Services
                <ChevronDown size={16} />
              </button>

              {/* Mega Menu */}
              <div
                className="
                  absolute
                  top-full
                  left-0
                  w-[700px]
                  bg-[#0f172a]
                  border
                  border-slate-800
                  rounded-2xl
                  shadow-2xl
                  p-6
                  opacity-0
                  invisible
                  group-hover:opacity-100
                  group-hover:visible
                  transition-all
                  duration-200
                  z-[9999]
                "
              >
                <div className="grid grid-cols-2 gap-4">

                  <a
                    href="#services"
                    className="p-4 rounded-xl hover:bg-slate-800 transition block"
                  >
                    <h4 className="font-semibold text-lg mb-2">
                      AI & Automation
                    </h4>
                    <p className="text-sm text-slate-400">
                      Intelligent workflows, AI agents and automation.
                    </p>
                  </a>

                  <a
                    href="#services"
                    className="p-4 rounded-xl hover:bg-slate-800 transition block"
                  >
                    <h4 className="font-semibold text-lg mb-2">
                      Cloud Solutions
                    </h4>
                    <p className="text-sm text-slate-400">
                      AWS, Azure and cloud-native infrastructure.
                    </p>
                  </a>

                  <a
                    href="#services"
                    className="p-4 rounded-xl hover:bg-slate-800 transition block"
                  >
                    <h4 className="font-semibold text-lg mb-2">
                      Software Development
                    </h4>
                    <p className="text-sm text-slate-400">
                      Enterprise-grade web and mobile applications.
                    </p>
                  </a>

                  <a
                    href="#services"
                    className="p-4 rounded-xl hover:bg-slate-800 transition block"
                  >
                    <h4 className="font-semibold text-lg mb-2">
                      Digital Transformation
                    </h4>
                    <p className="text-sm text-slate-400">
                      Modernizing business operations through technology.
                    </p>
                  </a>

                  <a
                    href="#services"
                    className="p-4 rounded-xl hover:bg-slate-800 transition block"
                  >
                    <h4 className="font-semibold text-lg mb-2">
                      Business Intelligence
                    </h4>
                    <p className="text-sm text-slate-400">
                      Analytics, dashboards and reporting.
                    </p>
                  </a>

                  <a
                    href="#services"
                    className="p-4 rounded-xl hover:bg-slate-800 transition block"
                  >
                    <h4 className="font-semibold text-lg mb-2">
                      Managed Services
                    </h4>
                    <p className="text-sm text-slate-400">
                      Monitoring, support and optimization.
                    </p>
                  </a>

                </div>
              </div>
            </div>

            <a
              href="#solutions"
              className="text-slate-300 hover:text-blue-400 transition"
            >
              Solutions
            </a>

            <a
              href="#industries"
              className="text-slate-300 hover:text-blue-400 transition"
            >
              Industries
            </a>

            <a
              href="#process"
              className="text-slate-300 hover:text-blue-400 transition"
            >
              Process
            </a>

            <a
              href="#contact"
              className="text-slate-300 hover:text-blue-400 transition"
            >
              Contact
            </a>

            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg font-medium transition"
            >
              Book Consultation
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#0f172a] rounded-xl mb-4 p-5">
            <div className="flex flex-col gap-5">

              <a href="#services">Services</a>
              <a href="#solutions">Solutions</a>
              <a href="#industries">Industries</a>
              <a href="#process">Process</a>
              <a href="#contact">Contact</a>

              <a
                href="#contact"
                className="bg-blue-600 text-center py-3 rounded-lg"
              >
                Book Consultation
              </a>

            </div>
          </div>
        )}
      </div>
    </header>
  );
}