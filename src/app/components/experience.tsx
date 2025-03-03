"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Briefcase, GraduationCap, Book } from "lucide-react"

type ExperienceItem = {
  id: number
  type: "work" | "education" | "course"
  title: string
  organization: string
  period: string
  location: string
  description: string
}

export default function Experience() {
  const timelineItems: ExperienceItem[] = [
    {
      id: 1,
      type: "work",
      title: "Junior Frontend Developer",
      organization: "TRASUS Consulting",
      period: "Nov 2024 - Present",
      location: "Remote",
      description:
        "I perform tasks according to my role using Angular 15 and above, including fixing bugs, developing new screens, creating and styling components, and consuming data to generate charts using Chart.js or other Angular-friendly libraries. I develop robust, enterprise-level applications for municipalities and companies, ensuring scalable and maintainable solutions. Additionally, I create Angular services to consume REST API endpoints efficiently.",
    },
    {
      id: 2,
      type: "work",
      title: "Teaching Assistant",
      organization: "University of the Center of the Province of Buenos Aires",
      period: "2024",
      location: "Tandil, Buenos Aires",
      description: "I worked in an educational role, assisting first-year students in the Programming 1 course, where we explored the logical foundations of programming using Java.",
    },
    {
      id: 3,
      type: "education",
      title: "Next.js Bootcamp",
      organization: "Hedy Software Inc.",
      period: "2024",
      location: "Online",
      description:
        "A 6-month bootcamp where I learned to use React Framework: Next.js, its advantages, and how to build fast and efficient applications with it. For example, this portfolio is built with Next.js.",
    },
    {
      id: 4,
      type: "course",
      title: "NODE.JS & Express",
      organization: "Codo a Codo (Argentinian Government Program)",
      period: "2024",
      location: "Online",
      description:
        "I learned to develop web applications using Node.js and Express, implementing authentication with OAuth and JWT for secure user access.",
    },
    {
      id: 5,
      type: "course",
      title: "Design UX/UI",
      organization: "CoderHouse",
      period: "2024",
      location: "Online",
      description:
        "In Coderhouse's UX/UI Design course, I learned user-centered design, wireframing, prototyping, and usability testing to create intuitive and engaging digital experiences.",
    },
    {
      id: 6,
      type: "education",
      title: "University Technical Degree in Software Application Development",
      organization: "University of the Center of the Province of Buenos Aires",
      period: "2022 - Present",
      location: "Tandil, Buenos Aires",
      description: "I have learned the fundamentals of OOP, user-centered application design, and design patterns to create robust and sustainable applications.",
    },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="py-12">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-400 to-pink-600 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Experience & Education
      </motion.h2>

      <div className="relative">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-pink-800 transform md:translate-x-px"></div>

        {timelineItems.map((item, index) => (
          <motion.div
            key={item.id}
            className={`relative flex flex-col md:flex-row items-center md:items-start gap-8 mb-16 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <motion.div
              className={`absolute left-0 md:left-1/2 w-5 h-5 rounded-full transform -translate-x-2 md:-translate-x-2.5 z-10 ${
                item.type === "work"
                  ? "bg-gradient-to-r from-pink-500 to-pink-600"
                  : item.type === "education"
                    ? "bg-gradient-to-r from-blue-500 to-blue-600"
                    : "bg-gradient-to-r from-green-500 to-green-600"
              }`}
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.2 }}
            ></motion.div>

            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
              <motion.div
                className={`p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow ${
                  item.type === "work" ? "bg-pink-950" : item.type === "education" ? "bg-blue-950" : "bg-green-950"
                }`}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-pink-200 mb-1">{item.title}</h3>
                <h4 className="text-lg font-semibold text-pink-300 mb-2">{item.organization}</h4>

                <div className="flex items-center gap-2 text-sm text-pink-300 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>{item.period}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-pink-300 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{item.location}</span>
                </div>

                <p className="text-pink-100">{item.description}</p>
              </motion.div>
            </div>

            <div className="hidden md:flex md:w-5/12 items-center justify-center">
              {item.type === "work" && <Briefcase className="w-8 h-8 text-pink-400" />}
              {item.type === "education" && <GraduationCap className="w-8 h-8 text-blue-400" />}
              {item.type === "course" && <Book className="w-8 h-8 text-green-400" />}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

