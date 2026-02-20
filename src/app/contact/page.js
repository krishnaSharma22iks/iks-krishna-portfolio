"use client";

import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 ">
      <div className="max-w-6xl mx-auto ">

        {/* Heading */}
        <h2 className="text-4xl font-semibold  edu-hand text-center mb-16 animate-fadeIn">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT CARD */}
          <div className="animate-fadeIn bg-white/5 backdrop-blur-lg border border-gray-800 rounded-2xl p-8 space-y-6 shadow-lg">

            <h3 className="text-2xl font-semibold">Contact Info</h3>

            <p className="text-gray-400">
              Feel free to reach out for projects, collaborations or just a chat.
            </p>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <a href="mailto:flashm683@gmail.com" className="hover:underline">
                  flashm683@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+91 7976694298</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Beawar, Rajasthan, India</span>
              </div>

            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">

              <a
                href="https://www.linkedin.com/in/krishna-sharma-4b7384359"
                target="_blank"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://github.com/krishnaSharma22iks"
                target="_blank"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition"
              >
                <Github size={20} />
              </a>

            </div>

          </div>

          {/* RIGHT CARD (CTA) */}
          <div className=" animate-fadeIn bg-linear-to-br from-white/10 to-white/5 border border-gray-800 rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-lg">

            <h3 className="text-2xl font-semibold mb-4">
              Let’s Work Together 
            </h3>

            <p className="text-gray-400 mb-8 max-w-md">
              Have an idea or project in mind? Click below and send me an email directly.
            </p>

           <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=flashm683@gmail.com"
             target="_blank"
            rel="noopener noreferrer"
             className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition text-lg inline-block"
                >
            Send Email
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}