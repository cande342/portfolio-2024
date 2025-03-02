"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Maximize, Code, Server, Palette } from "lucide-react"
import Image from "next/image"

type ProjectType = "Frontend" | "Fullstack" | "UX/UI Design"

interface Project {
  id: number
  title: string
  type: ProjectType
  image: string
  description: string
  technologies: string[]
  link: string
  github: string
}

export default function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "Angular Store",
      type: "Frontend",
      image: "/img/proy/7.webp",
      description:
        "I used a shared service to build a small store inspired by the League of Legends shop. This project was created for the university seminar on Angular.",
      technologies: ["Angular 19", "Tailwind CSS", "PrimeNG", "Typescript"],
      link: "https://tienda-lol.netlify.app/",
      github: "https://github.com/cande342/tienda-angular",
    },
    {
      id: 2,
      title: "Matchmaking Fix",
      type: "Fullstack",
      image: "/img/proy/2.webp",
      description:
        "Waiting for Riot to confirm that I won’t have any issues publishing it... I consume the Riot API to filter match data and create combinations and rankings. It features an intermediate backend with Nest.js, and the data is stored in a Firestore database. For the frontend, I used only pure CSS",
      technologies: ["Nest.Js", "Angular 19", "Firestore", "CSS", "RxJS", "Vercel"],
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Salgo Ahora?",
      type: "UX/UI Design",
      image: "/img/proy/1.webp",
      description:
       "The final project of the CoderHouse course, where I learned the fundamentals of designing a product with a UX/UI focus.",
      technologies: ["Figma", "Canva"],
      link: "https://www.canva.com/design/DAGFUOfrVno/4J6riBKrehVWvjPWpeG4Gw/edit",
      github: "https://github.com/cande342/desafio-angular",
    },
    {
      id: 4,
      title: "Rick And Morty API",
      type: "Frontend",
      image: "/img/proy/6.webp",
      description:
        "This project was a technical test where I was required to fetch and display data from an API in a visually appealing way with clean code within 48 hours.",
      technologies: ["Angular 16", "Bootstrap", "Tailwind CSS", "RxJS"],
      link: "https://desafio-angular.netlify.app/",
      github: "#",
    },
    {
      id: 5,
      title: "Arcade",
      type: "Frontend",
      image: "/img/proy/8.webp",
      description:
        "This project was carried out by a group of three participants for the Interface Design course. I created the Figma prototype and then developed some of the static pages, along with some of the animated sections in the Number Blocks game.",
      technologies: ["Figma", "HTML", "CSS", "Javascript"],
      link: "https://acortar.link/psAtdV",
      github: "https://github.com/antonellafernandez/TudaiInterfacesPracticos2024Grupo17?tab=readme-ov-file",
    },
  ]

  const getProjectTypeColor = (type: ProjectType) => {
    switch (type) {
      case "Frontend":
        return "from-blue-500 to-blue-600"
      case "Fullstack":
        return "from-purple-500 to-purple-600"
      case "UX/UI Design":
        return "from-green-500 to-green-600"
      default:
        return "from-pink-500 to-pink-600"
    }
  }

  const getProjectTypeIcon = (type: ProjectType) => {
    switch (type) {
      case "Frontend":
        return <Code className="w-4 h-4" />
      case "Fullstack":
        return <Server className="w-4 h-4" />
      case "UX/UI Design":
        return <Palette className="w-4 h-4" />
      default:
        return null
    }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="py-12">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-pink-400 to-pink-600 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Personal Projects
      </motion.h2>

      <motion.p
        className="text-center text-pink-300 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Demonstrating creativity and skills through passion projects where I practice and apply what I ve learned.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            layoutId={`project-container-${project.id}`}
            onClick={() => setSelectedId(project.id)}
            className="bg-pink-950 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <motion.div className="relative h-48 overflow-hidden" layoutId={`project-image-${project.id}`}>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-950/80 to-transparent flex items-end">
                <div className="p-4 text-pink-100">
                  <p className="text-sm font-medium">{project.type}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-pink-900/80 backdrop-blur-sm p-2 rounded-full">
                <Maximize className="w-4 h-4 text-pink-200" />
              </div>
            </motion.div>

            <motion.div className="p-6" layoutId={`project-content-${project.id}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className={`p-1 rounded-full bg-gradient-to-r ${getProjectTypeColor(project.type)}`}>
                  {getProjectTypeIcon(project.type)}
                </span>
                <h3 className="text-xl font-bold text-pink-200">{project.title}</h3>
              </div>
              <p className="text-pink-300 mb-4 line-clamp-2">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-pink-900 text-pink-200 text-xs font-medium rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`project-container-${selectedId}`}
              className="bg-pink-950 rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {projects
                .filter((p) => p.id === selectedId)
                .map((project) => (
                  <div key={project.id}>
                    <motion.div className="relative h-64" layoutId={`project-image-${project.id}`}>
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>

                    <motion.div className="p-8" layoutId={`project-content-${project.id}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`p-1 rounded-full bg-gradient-to-r ${getProjectTypeColor(project.type)}`}>
                          {getProjectTypeIcon(project.type)}
                        </span>
                        <h3 className="text-2xl font-bold text-pink-200">{project.title}</h3>
                      </div>
                      <p className="text-pink-300 mb-6">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-pink-900 text-pink-200 text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full flex items-center gap-2 hover:shadow-lg transition-shadow"
                        >
                          View Live <ExternalLink className="w-4 h-4" />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-pink-900 text-pink-200 rounded-full flex items-center gap-2 hover:bg-pink-800 transition-colors"
                        >
                          GitHub <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </motion.div>
                  </div>
                ))}

              <button
                className="absolute top-4 right-4 bg-pink-900/80 backdrop-blur-sm p-2 rounded-full"
                onClick={() => setSelectedId(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-pink-200"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}


