"use client";

import Image from "next/image";
import Projects from "../../../Components/Projects";

export default function ProjectPage() {
  

  return (
    <section id="projects" className="w-full  bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <Projects />
       
      </div>
    </section>
  );
}