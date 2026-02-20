"use client";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Intro() {
return (
    <>
     <section className="w-full py-12 bg-black flex justify-center">
      <div className="flex gap-6 sm:gap-8 animate-fadeIn">
        <a
          href="https://github.com/krishnaSharma22iks"
          target="_blank"
          className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-700 transition"
        >
          <Github size={22} />
        </a>

        <a
          href="https://www.linkedin.com/in/krishna-sharma-4b7384359"
          target="_blank"
          className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500 transition"
        >
          <Linkedin size={22} />
        </a>

         <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=flashm683@gmail.com"
             target="_blank"
            rel="noopener noreferrer"
             className=" py-4 px-5 bg-orange-700 text-white   rounded-[70%] font-semibold hover:bg-orange-600 transition text-lg inline-block"
                >
          <Mail size={22} />
            </a>
      </div>
    </section>
    </>
);
}
