"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

interface HomeProps {
  setActiveSection: (section: string) => void;
}

export default function Home({ setActiveSection }: HomeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row items-center gap-12 min-h-[80vh]"
    >
      {/* Contenedor de Texto */}
      <motion.div
        className="flex-1 order-2 md:order-1"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-pink-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Hello, I'm <br />
          <span className="text-5xl md:text-7xl">Candela</span>
        </motion.h1>

        <motion.p
          className="text-lg text-pink-200 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          A Junior Frontend Developer specializing in Angular as my primary framework. Passionate about crafting visually stunning and highly interactive user interfaces that enhance the user experience.
        </motion.p>

        {/* Links a redes sociales */}
        <motion.div
          className="flex gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/cande342"
            className="p-2 bg-pink-900 text-pink-200 rounded-full hover:bg-pink-800 transition-colors"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/candela-echaz%C3%BA-111805236/"
            className="p-2 bg-pink-900 text-pink-200 rounded-full hover:bg-pink-800 transition-colors"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin />
          </motion.a>
          <motion.a
            href="mailto:gcandela894@gmail.com"
            className="p-2 bg-pink-900 text-pink-200 rounded-full hover:bg-pink-800 transition-colors"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail />
          </motion.a>
        </motion.div>

        {/* Botón "View My Work" que cambia la sección a "projects" */}
        <motion.button
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full flex items-center gap-2 hover:shadow-lg transition-shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          onClick={() => setActiveSection("projects")}
        >
          View My Work <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>

      {/* Imagen de perfil animada */}
      <motion.div
        className="flex-1 order-1 md:order-2 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-pink-500 shadow-xl"
          whileHover={{ scale: 1.05, rotate: 5 }}
          animate={{
            rotate: [0, 5, 0, -5, 0],
            transition: {
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            },
          }}
        >
          <Image src="/perfil.webp" alt="Profile" fill className="object-cover" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}


