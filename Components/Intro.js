"use client";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Intro() {
return (
    <>
     <section className="w-full py-12 bg-black flex justify-center">
      <div className="flex gap-6 sm:gap-8 animate-fadeIn">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-700 transition"
        >
          <Github size={22} />
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500 transition"
        >
          <Linkedin size={22} />
        </a>

        <a
          href="mailto:yourmail@gmail.com"
          className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-500 transition"
        >
          <Mail size={22} />
        </a>
      </div>
    </section>
    </>
);
}
