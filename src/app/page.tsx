"use client"

import { useState, useEffect } from "react"
import { motion, useScroll } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"

import { experiencias } from "./utils/experiencias"

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-[#f4e2b8] text-gray-900 min-h-screen p-8 font-serif relative">
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23000000 fillOpacity=0.1%3E%3Ccircle cx=7 cy=7 r=1/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <motion.div
        className="fixed top-8 right-8 z-10"
        initial={{ opacity: 0, rotate: -15, scale: 0 }}
        animate={{ opacity: 1, rotate: -15, scale: 1 }}
        transition={{ delay: 1, duration: 0.8, type: "spring" }}
      >
        <div className="bg-red-600 text-white px-4 py-2 font-mono text-sm font-bold border-2 border-red-700 transform rotate-12 shadow-lg">
          CONFIDENCIAL
        </div>
      </motion.div>

      <motion.div
        className="fixed top-32 right-12 z-10"
        initial={{ opacity: 0, rotate: 10, scale: 0 }}
        animate={{ opacity: 1, rotate: 10, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
      >
        <div className="bg-gray-800 text-white px-3 py-1 font-mono text-xs font-bold border border-gray-900 shadow-md">
          EXPEDIENTE #2025
        </div>
      </motion.div>

      <motion.div
        className="text-center mb-8 border-b-2 border-gray-700 pb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="font-mono text-xs text-gray-600 uppercase tracking-widest">
          DOCUMENTO CLASIFICADO - NIVEL: CONFIDENCIAL
        </div>
        <div className="font-mono text-xs text-gray-500 mt-1">
          FECHA DE CLASIFICACIÓN: 01/01/2025 | AUTORIZACIÓN: 0001
        </div>
      </motion.div>

      {/* HEADER */}
      <motion.div
        className="relative flex flex-col max-w-5xl mx-auto mt-12 px-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 w-full">
          {/* Bloque izquierdo: título + subtítulo */}
          <div className="flex flex-col items-start gap-4 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-mono text-gray-900 uppercase tracking-widest">
              <Typewriter
                words={["Candela Azul Echazú"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={120}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>

            <span className="text-lg md:text-xl font-mono text-gray-800 uppercase tracking-wide border-t border-gray-600 pt-1">
              Diseño & Desarrollo de Aplicaciones Web
            </span>

            <motion.div
              className="bg-yellow-200 border border-yellow-600 px-3 py-1 font-mono text-xs font-bold text-gray-900 shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
            >
              SUJETO: DESARROLLADORA CON ESPECIAL FOCO EN EL FRONTEND
            </motion.div>
          </div>

          {/* Polaroid */}
          <motion.div
            className="relative w-54 bg-white shadow-xl border border-gray-700 transform rotate-[-3deg] flex-shrink-0 p-2 pb-6 mb-6 md:mb-0"
            initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
            animate={{ opacity: 1, rotate: -3, scale: 1 }}
            transition={{ delay: 0.8, duration: 1, type: "spring" }}
            whileHover={{ rotate: 0, scale: 1.05 }}
          >
            <img
              src="p1.jpg"
              alt="Foto de Candela"
              className="w-full h-52 object-cover filter sepia-[0.3]"
            />

            {/* Enhanced tape effects */}
            <div className="absolute -top-2 -left-2 w-10 h-3 bg-gray-900/90 rotate-[-10deg] shadow-md"></div>
            <div className="absolute -top-2 -right-2 w-10 h-3 bg-gray-900/90 rotate-[10deg] shadow-md"></div>

            <div className="absolute -bottom-3 -right-3 bg-red-600 text-white px-2 py-1 font-mono text-xs font-bold transform rotate-12 shadow-lg">
              EVIDENCIA A1
            </div>
          </motion.div>
        </div>
      </motion.div>


      {/* Sección principal */}
      <motion.section
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[3.2fr_1fr] gap-12 pt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Columna principal */}
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-mono uppercase tracking-wide text-gray-900 pb-1 border-b border-gray-600">
              Descripción
            </h2>

            <div className="text-sm md:text-base leading-relaxed text-gray-800 font-mono space-y-4 mt-6">
              <p>
                Candela se dedica al desarrollo de aplicaciones vinculadas a la administración y el back office.
                Actualmente trabaja con Angular (v15 en adelante) y tiene experiencia en el consumo de API REST (con
                .NET), así como en la integración de librerías como PrimeNG, Angular Material y Chart.js.
              </p>
              <p>
                Además, maneja RxJS para gestionar la reactividad y está explorando Signals para optimizar la
                actualización de estados. También utiliza Figma para prototipos de interfaces, aplicando los principios de
                usabilidad y accesibilidad que se requieran según cada proyecto.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-mono text-gray-900 mb-8 tracking-wide text-start border-b border-gray-600 pb-2">
              Historial de Casos
            </h2>

            <ul className="list-none space-y-6 font-mono text-gray-900 text-base">
              {experiencias.map((exp, i) => (
                <motion.li
                  key={i}
                  className="flex flex-col gap-2 bg-[#fdfbf4] border border-gray-400 p-4 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-black inline-block"></span>
                    <h3 className="font-bold uppercase text-sm">{exp.title}</h3>
                  </div>
                  <p className="text-xs text-gray-700 italic ml-5 bg-yellow-100 px-2 py-1 inline-block">{exp.date}</p>
                  <p className="text-sm text-gray-800 ml-5 leading-relaxed">{exp.description}</p>

                  <div className="text-xs text-gray-500 ml-5 mt-2 font-bold">
                    CASO #{String(i + 1).padStart(3, "0")}-2024
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-mono uppercase tracking-wide text-gray-900 pb-1 border-b border-gray-600">
            Habilidades Documentadas
          </h3>

          <div className="mt-4 columns-1 gap-4">
            {[
              "Angular",
              "UX / UI",
              "Inglés B1",
              "Toma de requerimientos",
              "Single Page Aplication",
              "creación de CRUD en Java, Node y Nest.",
              "Java + Spring Boot",
              "Integración de API REST",
              "Optimización de recursos",
              "Next.js",
              "Trabajo colaborativo: github, gitlab",
              "Metodologias agiles",
              "CSS, TAILWIND, SASS",
              "INTEGRACION DE LIBRERIAS"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                className="break-inside-avoid mb-4 font-mono text-sm text-gray-900 bg-[#fdfbf4] border border-gray-300 p-2 shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ backgroundColor: "#f0f0f0", scale: 1.05 }}
              >
                <strong className="uppercase tracking-wide">✓ {skill}</strong>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>


      {/* Seccion carrusel */}
      <motion.section
        className="max-w-6xl mx-auto pt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-mono uppercase tracking-wide text-gray-900 pb-1 mb-6 border-b border-gray-600">
          Evidencia de Proyectos <small>(no comercializados)</small>
        </h3>

        <div className="overflow-x-auto flex gap-6 pb-6 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
          {[
            {
              id: 1,
              title: "Matchmaking Fix",
              description:
                "Consumo la API de Riot para filtrar datos de partidas y crear combinaciones y rankings. Cuenta con un backend intermedio en Nest.js y almacenamiento en Firestore. Para el frontend se utilizó Angular19 con CSS puro.",
              image: "/img/proy/2.webp",
              link: "https://matchmakinglol.netlify.app/",
              link2: "https://github.com/cande342/lolApp",
            },
            {
              id: 2,
              title: "Buscador Reactivo",
              description:
                "Este proyecto fue una prueba técnica en la que se me pidió obtener y mostrar datos de una API de manera visualmente atractiva, con código limpio, en un plazo de 48 horas.",
              image: "/img/proy/6.webp",
              link: "https://desafio-angular.netlify.app/",
              link2: "https://github.com/cande342/desafio-angular",
            },
            {
              id: 3,
              title: "Prototipo UX/UI: Arcade",
              description:
                "Este proyecto fue realizado por un grupo de tres participantes para el curso de Diseño de Interfaces. Creó el prototipo en Figma y luego desarrolló algunas de las páginas estáticas, así como algunas de las secciones animadas del juego Number Blocks.",
              image: "/img/proy/8.webp",
              link: "https://antonellafernandez.github.io/TudaiInterfacesPracticos2024Grupo17/TP4/Home.html",
              link2: "https://github.com/antonellafernandez/TudaiInterfacesPracticos2024Grupo17?tab=readme-ov-file",
            },
          ].map((project, index) => (
            <motion.div
              key={project.id}
              className="min-w-[260px] max-w-xs bg-[#fdfbf4] border border-gray-700 rounded-lg p-4 flex-shrink-0 shadow-lg flex flex-col relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 25px rgba(0,0,0,0.15)" }}
            >
              <div className="absolute -top-2 -right-2 bg-blue-600 text-white px-2 py-1 font-mono text-xs font-bold transform rotate-12 shadow-lg">
                ANEXO {String.fromCharCode(65 + index)}
              </div>

              <div className="w-full h-44 mb-3 overflow-hidden rounded-md border border-gray-400">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover filter sepia hover:sepia-0 transition-all duration-500"
                />
              </div>

              <h4 className="font-mono text-gray-900 text-lg mb-2 font-bold">{project.title}</h4>
              <p className="text-xs text-gray-700 flex-1 break-words leading-relaxed">{project.description}</p>

              {/* Link y botón */}
              <div className="mt-3 flex flex-col gap-2">
                <a
                  href={project.link2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-xs font-mono"
                >
                  Ver repositorio
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white text-xs font-mono py-1 px-3 rounded-sm text-center hover:bg-gray-800 transition-colors"
                >
                  Ir al proyecto
                </a>
              </div>

              <div className="text-xs text-gray-500 mt-2 font-mono font-bold border-t border-gray-300 pt-2">
                PROYECTO #{String(project.id).padStart(3, "0")}-2024
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>


      <motion.footer
        className="border-t-2 border-gray-700 py-16 flex flex-col items-center max-w-6xl mx-auto text-center relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute top-4 left-4 w-16 h-16 border-4 border-gray-700 rounded-full flex items-center justify-center bg-[#f4e2b8]"
          initial={{ opacity: 0, rotate: -180, scale: 0 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, type: "spring" }}
          viewport={{ once: true }}
        >
          <div className="text-xs font-mono font-bold text-center leading-tight">
            OFICIAL
            <br />
            2025
          </div>
        </motion.div>

        <motion.h2
          className="text-2xl font-mono font-semibold text-gray-900 tracking-tight uppercase mb-6 border-b border-gray-600 pb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Información de Contacto
        </motion.h2>

        <motion.p
          className="text-gray-700 text-sm font-mono leading-relaxed max-w-xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Para consultas oficiales o colaboraciones autorizadas, utilizar los canales de comunicación establecidos.
        </motion.p>

        <motion.a
          href="mailto:gcandela894@gmail.com?subject=Contacto desde CV&body=Hola, quiero ponerme en contacto..."
          className="px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-sm text-sm font-mono transition-colors mb-10 border border-gray-600 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          ESTABLECER CONTACTO
        </motion.a>

        <motion.div
          className="text-gray-600 text-xs font-mono space-y-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>© 2025 Candela Echazú — Documento Confidencial</p>
          <p className="text-gray-500">CLASIFICACIÓN: CONFIDENCIAL | AUTORIZACIÓN REQUERIDA</p>
          <p className="text-gray-500">DOCUMENTO GENERADO: 01/01/2025 | VERSIÓN: 1.0</p>
        </motion.div>
      </motion.footer>
    </div>
  )
}
