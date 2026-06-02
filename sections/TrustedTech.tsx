"use client";

import {
  FaAws,
  FaDocker,
  FaReact,
  FaPython,
} from "react-icons/fa";

import {
  SiGooglecloud,
  SiOpenai,
  SiPostgresql,
  SiMongodb,
  SiNextdotjs,
  SiN8N,
} from "react-icons/si";

const technologies = [
  {
    name: "AWS",
    icon: <FaAws size={50} />,
  },
  {
    name: "Google Cloud",
    icon: <SiGooglecloud size={50} />,
  },
  {
    name: "OpenAI",
    icon: <SiOpenai size={50} />,
  },
  {
    name: "n8n",
    icon: <SiN8N size={50} />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={50} />,
  },
  {
    name: "React",
    icon: <FaReact size={50} />,
  },
  {
    name: "Python",
    icon: <FaPython size={50} />,
  },
  {
    name: "Docker",
    icon: <FaDocker size={50} />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={50} />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={50} />,
  },
];

export default function TrustedTech() {
  return (
    <section className="py-24 px-6 bg-[#0a1128]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Technology Ecosystem
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto">
            Leveraging modern technologies, cloud platforms,
            AI frameworks and enterprise-grade tools to build
            scalable digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group bg-[#0f172a] border border-slate-800 rounded-2xl p-8 text-center hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex justify-center mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>

              <h3 className="font-medium">
                {tech.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}