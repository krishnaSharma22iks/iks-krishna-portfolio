"use client";

export default function Skills() {
  const skills = [
    { name: "HTML 5", level: 90 },
    { name: "CSS 3", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 80 },
    { name: "Next.js", level: 75 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Bootstrap", level: 75 },
    { name: "Git", level: 70 },
    { name: "GitHub", level: 70 },
  ];

  return (
    <section className="w-full min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className=" edu-hand text-center text-3xl sm:text-4xl font-semibold mb-16 animate-fadeIn">
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="opacity-0 animate-fadeIn border border-gray-800 rounded-xl p-6 
                         transition duration-500 hover:border-white hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">{skill.name}</h3>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>

              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16 gap-6 animate-fadeIn delay-300">
          <div className="text-center">
            <h4 className="text-2xl font-semibold">9+</h4>
            <p className="text-gray-400 text-sm">Technologies</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-semibold">1+</h4>
            <p className="text-gray-400 text-sm">Years Learning</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-semibold">10+</h4>
            <p className="text-gray-400 text-sm">Projects</p>
          </div>
        </div>

      </div>
    </section>
  );
}