"use client";

import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with Next.js and Tailwind CSS",
      image: "/projects/portfolio.png",
      tech: ["Next.js", "Tailwind"],
      live: "#",
      github: "#",
    },
    {
      title: "Weather App",
      description: "Real-time weather app using API and JavaScript",
      image: "/projects/weather.png",
      tech: ["JavaScript", "API"],
      live: "#",
      github: "#",
    },
    {
      title: "Todo App",
      description: "Task management app with React",
      image: "/projects/todo.png",
      tech: ["React", "CSS"],
      live: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="w-full py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <h2 className="edu-hand text-3xl sm:text-4xl font-semibold text-center mb-14 animate-fadeIn">
          Featured Projects
        </h2>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-700 overflow-hidden 
                         transition duration-500 hover:border-white hover:-translate-y-2 
                         opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full border border-gray-600 text-gray-300
                                 transition hover:border-white hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex-1 text-center py-2 rounded-md bg-white text-black text-sm font-medium 
                               hover:bg-gray-200 transition"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex-1 text-center py-2 rounded-md border border-white text-white text-sm font-medium 
                               hover:bg-white hover:text-black transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}