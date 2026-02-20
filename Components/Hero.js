"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide mb-6 animate-fadeIn">
              Krishna Sharma
            </h1>

            <p className="edu-hand text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-xl animate-fadeIn">
              Frontend Developer building modern, fast & responsive web experiences
            </p>

            <div className="flex justify-center lg:justify-start gap-4 mb-10 animate-fadeIn">
             <Link href="/projects">
              <button className="px-6 py-3 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition">
                View My Work
              </button>
             </Link>
              <button className="px-6 py-3 border border-white rounded-md hover:bg-white hover:text-black transition">
                Download CV
              </button>
            </div>

            <div className="w-full max-w-sm mx-auto lg:mx-0 animate-fadeIn">
              <Image
                src="/images/jrab5.webp"
                alt="Krishna Sharma"
                width={450}
                height={300}
                className="w-full h-auto rounded-lg grayscale hover:grayscale-0 transition duration-300"
                priority
              />
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center animate-fadeIn">
            <h2 className="edu-hand text-xl sm:text-2xl lg:text-3xl text-center lg:text-left leading-relaxed max-w-lg text-gray-200">
              I build modern, fast, and responsive web applications using
              Next.js, React, and modern web technologies.
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
}