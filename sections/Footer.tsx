import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Infinitix AI
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Delivering enterprise software,
              cloud solutions, AI automation
              and digital transformation services
              for modern businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Company
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-400 transition"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#solutions"
                  className="hover:text-blue-400 transition"
                >
                  Solutions
                </a>
              </li>

              <li>
                <a
                  href="#industries"
                  className="hover:text-blue-400 transition"
                >
                  Industries
                </a>
              </li>

              <li>
                <a
                  href="#process"
                  className="hover:text-blue-400 transition"
                >
                  Process
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Contact
            </h4>

            <div className="space-y-3 text-slate-400">

              <p>
                info@infinitixai.net
              </p>

              <p>
                +91 97377 74448
              </p>

              <p>
                Surat, Gujarat,
                India
              </p>

            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Connect With Us
            </h4>

            <div className="flex gap-4">

              <a
                href="#"
                className="p-3 bg-slate-800 rounded-lg hover:bg-blue-600 transition"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="#"
                className="p-3 bg-slate-800 rounded-lg hover:bg-blue-600 transition"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                className="p-3 bg-slate-800 rounded-lg hover:bg-blue-600 transition"
              >
                <FaFacebook size={20} />
              </a>

              <a
                href="#"
                className="p-3 bg-slate-800 rounded-lg hover:bg-blue-600 transition"
              >
                <FaTwitter size={20} />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">

          © {new Date().getFullYear()} Infinitix AI.
          All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}