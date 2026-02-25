import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with Next.js and Tailwind CSS",
      image: "/images/portfolio.png",
      tech: ["Next.js", "Tailwind"],
      live: "https://iks-krishna-portfolio.vercel.app/",
      github: "https://github.com/krishnaSharma22iks/iks-krishna-portfolio",
    },
    {
      title: "Ecommerce App",
      description: "Ecommerce Website built with React And Tailwind css",
      image: "/images/ecommerce.png",
      tech: ["React", "API", "Tailwind"],
      live: "https://react-ecommerce-website-iks.vercel.app/",
      github: "https://github.com/krishnaSharma22iks/react-ecommerce-website-iks",
    },
  ];

  return (
    <section className="w-full py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6 animate-fadeIn">
        <h2 className="edu-hand text-2xl sm:text-3xl font-semibold text-center text-white mb-14">
          Featured Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-700 overflow-hidden hover:border-white transition"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full border border-gray-600 text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex-1 text-center py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 transition"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex-1 text-center py-2 rounded-lg border border-white text-white text-sm font-medium hover:bg-white hover:text-black transition"
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