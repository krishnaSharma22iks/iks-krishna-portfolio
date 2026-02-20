export default function CTASection() {
  return (
    <section className="w-full bg-black py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
          Let’s Build Something Great
        </h2>

        <p className="text-gray-400 text-base sm:text-lg mb-10">
          I’m currently available for internships and frontend developer roles.
          Let’s collaborate and turn ideas into reality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            Contact Me
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="px-8 py-3 rounded-lg border border-white text-white font-medium hover:bg-white hover:text-black transition"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}