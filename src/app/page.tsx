"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import Cursor from '@/app/components/cursor'
import Navbar from '@/app/components/navbar'
import Home from '@/app/components/home'
import Experience from '@/app/components/experience'
import Projects from '@/app/components/projects'


export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <div className="bg-black min-h-screen text-pink-100">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="container mx-auto px-4 pt-24 pb-16">
        {activeSection === "home" && <Home setActiveSection={setActiveSection} />}
        {activeSection === "experience" && <Experience />}
        {activeSection === "projects" && <Projects />}
      </main>
    </div>
  )
}


