import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

import Hero from "@/sections/Hero";
import TechnologyEcosystem from "@/sections/TechnologyEcosystem";
import Services from "@/sections/Services";
import Solutions from "@/sections/Solutions";
import Industries from "@/sections/Industries";
import EnterpriseValue from "@/sections/WhyChooseUs";
import Process from "@/sections/Process";
import CaseStudies from "@/sections/CaseStudies";
import Testimonials from "@/sections/Testimonials";
import Stats from "@/sections/Stats";
import CTA from "@/sections/CTA";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <TechnologyEcosystem />

        <Services />

        <Solutions />

        <Industries />

        <EnterpriseValue />

        <Process />

        <CaseStudies />

        <Testimonials />

        <Stats />

        <CTA />

        <Contact />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}