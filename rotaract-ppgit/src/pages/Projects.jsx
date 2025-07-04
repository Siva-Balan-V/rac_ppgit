import React from "react";
import elevate12 from "../assets/projects/elevate12.jpg";
import strive from "../assets/projects/strive.jpg";
import marathon from "../assets/projects/marathon.jpg";
import rise from "../assets/projects/rise_and_rule.jpg";
import dynamix from "../assets/projects/dynamix2.jpg";
import g1 from "../assets/projects/g1_kudumbathar.jpg";

const projectList = [
  {
    title: "Elevate 12",
    description: "Google Meet series – 12 Talks to Empower, Enlighten & Engage.",
    type: "Online",
    image: elevate12,
  },
  {
    title: "Strive for Bright Future",
    description: "Distribution of school essentials to government school students.",
    type: "Offline",
    image: strive,
  },
  {
    title: "RA One Marathon",
    description: "Physical wellness event with 2.5K, 5K, 10K run – public engagement.",
    type: "Offline",
    image: marathon,
  },
  {
    title: "Rise & Rule",
    description: "Leadership Development Session hosted on Google Meet.",
    type: "Online",
    image: rise,
  },
  {
    title: "Dynamix 2.0",
    description: "International collaboration with 100+ Rotaract clubs – Online meet.",
    type: "Online",
    image: dynamix,
  },
  {
    title: "G1 Kudumbathar – Ep 4",
    description: "Fellowship meetup of clubs from Group 1 of RI District 3206.",
    type: "Offline",
    image: g1,
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-gray-900 dark:to-gray-800 px-6 py-10 text-gray-800 dark:text-white transition-all duration-500">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Projects</h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition hover:scale-105 duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-sm mb-3">{project.description}</p>
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                    project.type === "Online"
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-white"
                      : "bg-green-100 text-green-800 dark:bg-green-700 dark:text-white"
                  }`}
                >
                  {project.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
