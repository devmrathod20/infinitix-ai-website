"use client";

import {
  FaAws,
  FaReact,
  FaDocker,
  FaPython,
} from "react-icons/fa";

import {
  SiGooglecloud,
  SiOpenai,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

const topRow = [
  { name: "AWS", icon: FaAws },
  { name: "Google Cloud", icon: SiGooglecloud },
  { name: "OpenAI", icon: SiOpenai },
  { name: "React", icon: FaReact },
  { name: "Docker", icon: FaDocker },
];

const bottomRow = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Python", icon: FaPython },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "AWS", icon: FaAws },
];

function TechCard({
  name,
  Icon,
}: {
  name: string;
  Icon: any;
}) {
  return (
    <div
      className="
      group
      relative
      min-w-[280px]
      h-[180px]
      rounded-3xl
      overflow-hidden
      border
      border-slate-800
      bg-gradient-to-br
      from-slate-900
      via-slate-900
      to-slate-800
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-blue-500
      hover:shadow-[0_0_50px_rgba(59,130,246,0.35)]
      "
    >
      <div
        className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        transition-all
        duration-500
        bg-gradient-to-r
        from-blue-500/10
        via-cyan-500/10
        to-blue-500/10
        "
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        <Icon
          size={70}
          className="
          text-blue-400
          mb-5
          transition-all
          duration-500
          group-hover:scale-110
          "
        />

        <span className="text-xl font-semibold text-white">
          {name}
        </span>
      </div>
    </div>
  );
}

export default function TechnologyEcosystem() {
  return (
    <section
      id="ecosystem"
      className="
      py-28
      bg-[#050816]
      relative
      overflow-hidden
      "
    >
      {/* Background Glow */}

      <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full" />

      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full" />

      <div className="relative z-10">

        <div className="text-center mb-20 px-6">

          <span className="text-blue-400 uppercase tracking-[0.3em] font-semibold">
            Technology Ecosystem
          </span>

          <h2 className="text-6xl font-bold mt-6 mb-8">
            Powered By Leading Technologies
          </h2>

          <p className="text-slate-400 max-w-4xl mx-auto text-xl">
            We leverage enterprise-grade cloud platforms,
            AI technologies, automation frameworks and
            modern engineering stacks to build intelligent
            digital solutions.
          </p>

        </div>

        {/* TOP SLIDER */}

        <div className="relative mb-10">

          <div className="marquee-left flex gap-8 w-max">

            {[...topRow, ...topRow].map((tech, i) => (
              <TechCard
                key={i}
                name={tech.name}
                Icon={tech.icon}
              />
            ))}

          </div>

        </div>

        {/* CENTER BADGE */}

        <div className="flex justify-center my-16">

          <div
            className="
            px-8
            py-4
            rounded-full
            border
            border-blue-500/30
            bg-blue-500/10
            text-blue-400
            font-semibold
            text-lg
            backdrop-blur-xl
            shadow-[0_0_30px_rgba(59,130,246,0.25)]
            "
          >
            INFINITIX AI TECHNOLOGY ECOSYSTEM
          </div>

        </div>

        {/* BOTTOM SLIDER */}

        <div className="relative">

          <div className="marquee-right flex gap-8 w-max">

            {[...bottomRow, ...bottomRow].map((tech, i) => (
              <TechCard
                key={i}
                name={tech.name}
                Icon={tech.icon}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}