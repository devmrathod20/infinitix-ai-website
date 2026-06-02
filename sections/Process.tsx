export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "Understanding business objectives, challenges and requirements.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Creating a roadmap and selecting the right technologies.",
    },
    {
      number: "03",
      title: "Development",
      description:
        "Building scalable and secure solutions with best practices.",
    },
    {
      number: "04",
      title: "Deployment",
      description:
        "Launching solutions with cloud infrastructure and monitoring.",
    },
    {
      number: "05",
      title: "Support",
      description:
        "Continuous maintenance, optimization and future enhancements.",
    },
  ];

  return (
    <section id="process" className="py-24 px-6 bg-[#0a1128]">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Our Process
        </h2>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6"
            >
              <div className="text-blue-500 text-4xl font-bold mb-4">
                {step.number}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {step.title}
              </h3>

              <p className="text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}