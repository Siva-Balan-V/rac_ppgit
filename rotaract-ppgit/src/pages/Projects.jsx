import React, { useState, useEffect } from "react";
import { client, urlFor } from '../sanity/client'
import elevate12 from "../assets/projects/elevate12.jpg";
import strive from "../assets/projects/strive.jpg";
import marathon from "../assets/projects/marathon.jpg";
import rise from "../assets/projects/rise_and_rule.jpg";
import dynamix from "../assets/projects/dynamix2.jpg";
import g1 from "../assets/projects/g1_kudumbathar.jpg";

// Fallback projects data
const fallbackProjects = [
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
  const [projects, setProjects] = useState(fallbackProjects)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "project"] | order(date desc) {
          _id,
          title,
          description,
          type,
          image,
          date,
          status
        }`
        
        const data = await client.fetch(query)
        
        if (data && data.length > 0) {
          // Map Sanity data to our component format
          const sanityProjects = data.map(project => ({
            title: project.title,
            description: project.description,
            type: project.type || 'Offline',
            image: project.image ? urlFor(project.image).width(600).height(400).url() : '/projects/default.jpg',
            date: project.date,
            status: project.status
          }))
          setProjects(sanityProjects)
        }
      } catch (error) {
        console.log('Using fallback projects data:', error)
        // Keep fallback data if Sanity fails
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white px-4 sm:px-6 py-12 transition-all duration-500">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Projects</h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:scale-[1.03] transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-48 object-cover object-center"
                onError={(e) => {
                  e.target.src = '/projects/default.jpg'
                }}
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                      project.type === "Online"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-white"
                        : "bg-green-100 text-green-800 dark:bg-green-700 dark:text-white"
                    }`}
                  >
                    {project.type}
                  </span>
                  {project.status && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {project.status}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
