"use client";

import { cvData } from "../data/cvData";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { CiLinkedin, CiLink, CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
import { IoIosLaptop } from "react-icons/io";


export default function CV() {
  const { name, role, contact, objective, skills, experience, education, projects } = cvData;

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 py-10">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Header */}
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold">{name}</h1>
          <p className="text-gray-400">{role}</p>

          <div className="mt-4 space-y-2 text-sm text-gray-300">
            <p className="flex gap-2 items-start">
              <IoLocationOutline className="mt-1" /> {contact.location}
            </p>
            <p className="flex gap-2 items-start">
              <IoCallOutline className="mt-1" /> {contact.phone}
            </p>
            <p className="flex gap-2 items-start flex-wrap">
              <MdOutlineMail className="mt-1" />
              <span className="break-all">{contact.email}</span>
            </p>
            <p className="flex gap-2 items-start">
              <CiLinkedin className="mt-1" />
              <a href={contact.linkedin} className="text-blue-400 hover:underline">
                LinkedIn Profile
              </a>
            </p>
            <p className="flex gap-2 items-start break-all">
              <CiLink className="mt-1" />
              <a href={contact.github} className="text-blue-400 hover:underline">
                {contact.github}
              </a>
            </p>
          </div>
        </div>

        <hr className="border-gray-700" />

        {/* Objective */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Career Objective</h2>
          <p className="text-gray-300">{objective}</p>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Technical Skills</h2>

          <div className="grid sm:grid-cols-2 gap-4 text-gray-300">
            {Object.entries(skills).map(([key, value], i) => (
              <div key={i}>
                <h3 className="font-semibold text-white capitalize mb-1">
                  {key}
                </h3>
                <ul className="space-y-1">
                  {value.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Experience</h2>

          <p className="font-semibold">{experience.role}</p>
          <p className="text-gray-400">
            {experience.company} — {experience.duration}
          </p>

          <ul className="list-disc pl-5 mt-2 text-gray-300 space-y-1">
            {experience.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Education</h2>

          <div className="space-y-2 text-gray-300">
            {education.map((edu, i) => (
              <p key={i} className="flex gap-2 items-start">
                {i === 0 ? <FaGraduationCap /> : <IoIosLaptop />}
                {edu}
              </p>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Projects</h2>

          <div className="space-y-3 text-gray-300">
            {projects.map((project, i) => (
              <div key={i} className="flex justify-between flex-wrap gap-2">
                <span className="flex items-center gap-2">
                  {i === 0 ? <CiShoppingCart /> : <IoPersonOutline />}
                  {project.name}
                </span>

                <a
                  href={project.link}
                  className="text-blue-400 hover:underline"
                >
                  View Website
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Download */}
        <div>
          <a href="/cv.pdf" download>
            <button className="px-6 py-3 border border-white rounded-md hover:bg-white hover:text-black transition">
              Download CV
            </button>
          </a>
        </div>

      </div>
    </div>
  );
}