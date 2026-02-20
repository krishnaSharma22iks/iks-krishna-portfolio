"use client";

import Footer from "../../Components/Footer";
import Hero from "../../Components/Hero";
import Intro from "../../Components/Intro";
import SkillsPreview from "../../Components/SkillsPreview";
import Projects from "../../Components/Projects"
import CTASection from "../../Components/CTASection";

export default function Home() {
  return (
    <>
    <section>
      <Hero/>
      <Intro/>
      <SkillsPreview />
      <Projects />
      <CTASection />
      <Footer />
    </section>
    </>
  );
}
