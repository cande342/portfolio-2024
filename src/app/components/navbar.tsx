"use client"

import { motion } from "framer-motion"
import { Home, Briefcase, Code } from "lucide-react"

interface NavbarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const navItems = [
    { id: "home", label: "Home", icon: <Home className="w-4 h-4" /> },
    { id: "experience", label: "Experience", icon: <Briefcase className="w-4 h-4" /> },
    { id: "projects", label: "Projects", icon: <Code className="w-4 h-4" /> },
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-pink-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <motion.div
            className="text-xl font-bold text-pink-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Portfolio
          </motion.div>

          <ul className="flex space-x-1 bg-pink-950 p-1 rounded-full">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`relative px-4 py-2 rounded-full flex items-center gap-2 transition-colors ${
                    activeSection === item.id ? "text-pink-500" : "text-pink-300 hover:text-pink-400"
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-pink-900 rounded-full"
                      initial={false}
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                  <span className="relative flex items-center gap-1">
                    {item.icon}
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  )
}

