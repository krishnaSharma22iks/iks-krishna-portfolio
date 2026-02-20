export default function SkillsPreview() {
  const skills = [
    "HTML 5",
    "CSS 3",
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "BootStrap",
    "Git",
    "GitHub",
  ];

  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="edu-hand text-center text-white text-2xl sm:text-3xl font-semibold mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 rounded-lg border border-gray-700 text-gray-200 text-sm sm:text-base font-medium hover:bg-white hover:text-black transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}