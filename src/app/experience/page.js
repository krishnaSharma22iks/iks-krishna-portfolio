"use client";

export default function Experience() {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h2 className="edu-hand text-4xl md:text-5xl font-semibold mb-12 text-center animate-fadeIn">
          Experience
        </h2>

        {/* Experience Card */}
        <div className="border border-gray-700 rounded-xl p-6 mb-10 
                        hover:border-white transition duration-300 
                        opacity-0 animate-fadeIn">

          <h3 className="text-xl font-semibold mb-2">
            Frontend Developer Intern
          </h3>

          <p className="text-gray-400 text-sm mb-4">
            OnePixel Soft, Mansarovar Jaipur • Oct 2025 – Present
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            Currently working as a frontend intern where I build responsive and 
            modern web interfaces using React and Next.js. I focus on writing clean, 
            maintainable code and creating smooth user experiences. I have also worked 
            with Tailwind CSS and Bootstrap to design responsive layouts.
          </p>

          <p className="text-gray-300 leading-relaxed">
            During this internship, I’ve improved my understanding of real-world 
            project structure, component-based architecture, and performance optimization.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-6">
            {["Html","Css","JavaScript","Tailwind", "Bootstrap","React", "Next.js","GitHub","ChatGpt","N8N AI"].map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full border border-gray-600 text-gray-300
                           hover:border-white hover:text-white transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Course Section */}
        <div className="border border-gray-700 rounded-xl p-6 
                        hover:border-white transition duration-300 
                        opacity-0 animate-fadeIn delay-200">

          <h3 className="text-xl font-semibold mb-2">
            Web Development Course
          </h3>

          <p className="text-gray-400 text-sm mb-4">
            Beawar • Completed
          </p>

          <p className="text-gray-300 leading-relaxed">
            I completed a web development course where I learned the fundamentals 
            of HTML, CSS, and JavaScript. This course helped me build a strong base 
            in frontend development and understand how websites are structured and designed. 
            It also gave me hands-on experience by working on small projects, which improved 
            my problem-solving skills and confidence in coding.
          </p>
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-6">
            {["Html","Css","JavaScript","Tailwind", "Bootstrap","React", "Next.js"].map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full border border-gray-600 text-gray-300
                           hover:border-white hover:text-white transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        

      </div>
    </section>
  );
}