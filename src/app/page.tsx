"use client"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Typewriter } from "react-simple-typewriter"




export default function Portfolio() {
    const [showForm, setShowForm] = useState(false)

  return (
  <div className="bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 text-gray-800 min-h-screen p-8 space-y-32">

  {/* Header - Foto centrada + Nombre debajo */}
  <div className="flex flex-col items-center gap-6 max-w-3xl mx-auto mt-12">

    {/* Foto centrada */}
    <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-gray-300 shadow-md">
      <img 
        src="perfil.webp" 
        alt="Foto de perfil" 
        className="w-full h-full object-cover" 
      />
    </div>

    {/* Nombre con efecto Ouija */}
    <h1 className="text-4xl md:text-5xl font-[UnifrakturCook] text-gray-800 text-center">
      <Typewriter
        words={["Candela Azul Echazú"]}
        cursor
        cursorStyle="|"
        typeSpeed={120}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h1>

    <p className="mt-2 text-lg md:text-xl text-gray-600 font-[UnifrakturCook] text-center">
      Diseño & Desarrollo
    </p>
  </div>


  {/* Sección sobre mí estilo diario */}
  <motion.section
    className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start border-t border-gray-300 pt-20"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    {/* Noticia estilo diario */}
    <div className="space-y-4">
      <h2 className="text-2xl font-[UnifrakturCook] text-gray-800">
        Desarrolladora FullStack, especializada en Front End
      </h2>
      <p className="text-sm leading-relaxed text-gray-600 font-serif">
        Me dedico al desarrollo de aplicaciones relacionadas a la administración y el back office, actualmente trabajo con Angular (v15 en adelante). Tengo experiencia en el consumo de API REST (con .NET) y en la integración de librerías como PrimeNG, Angular Material y Chart.js, mejorando la experiencia del usuario y la presentación de datos.
      </p>
      <p className="text-sm leading-relaxed text-gray-600 font-serif">
        Trabajo con RxJS para gestionar la reactividad y estoy explorando Signals para optimizar la actualización de estados. Complemento mi perfil con conocimientos en UX/UI y diseño de MVP, uso Figma para prototipos y diseño de interfaces, aplicando principios de usabilidad y accesibilidad en cada proyecto.
      </p>
    </div>

    {/* Habilidades */}
    <div className="bg-gray-100 border-2 border-gray-300 shadow-md rounded-xl p-6 space-y-4">
      <h3 className="text-xl font-[UnifrakturCook] text-gray-700 text-center">
        Tecnologías & Habilidades principales
      </h3>
      <ul className="grid grid-cols-2 gap-3 text-sm text-center text-gray-700">
        <li className="bg-gray-200 rounded-md p-2">Angular</li>
        <li className="bg-gray-200 rounded-md p-2">UX / UI</li>
        <li className="bg-gray-200 rounded-md p-2">Toma de requerimientos</li>
        <li className="bg-gray-200 rounded-md p-2">SPA</li>
        <li className="bg-gray-200 rounded-md p-2">CRUD</li>
        <li className="bg-gray-200 rounded-md p-2">Java + Spring Boot</li>
        <li className="bg-gray-200 rounded-md p-2">Integración de API REST</li>
        <li className="bg-gray-200 rounded-md p-2">Optimización de recursos</li>
      </ul>
    </div>
  </motion.section>


  {/* Experiencias */}
  <motion.section
    className="max-w-6xl mx-auto pt-20 border-t border-gray-400"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-[UnifrakturCook] text-gray-800 text-center mb-12 tracking-wide">
      Experiencias
    </h2>

    {/* Contenedor de artículos con animación escalonada */}
    <motion.div
      className="space-y-10"
      variants={{
        visible: { transition: { staggerChildren: 0.3 } },
        hidden: {}
      }}
    >
      {/* TRASUS */}
      <motion.article
        className="border-l-4 border-gray-500 pl-6 space-y-2"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
        }}
      >
        <h3 className="text-xl font-[UnifrakturCook] text-gray-700">
          TRASUS Consulting — Desarrolladora Front End Jr.
        </h3>
        <p className="text-xs text-gray-500 italic">Noviembre 2024 - Actualidad</p>
        <p className="text-sm text-gray-600 font-serif leading-relaxed">
          Desarrollo de aplicaciones <span className="italic">Single Page Application</span> siguiendo las normas ISO 9001 e ISO 37001. Diseño de un sistema de gestión para el sector público. Integración de la pasarela de pagos <span className="italic">Pago360</span> con Angular 19 y Signals.
        </p>
      </motion.article>

      {/* Freelance */}
      <motion.article
        className="border-l-4 border-gray-500 pl-6 space-y-2"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
        }}
      >
        <h3 className="text-xl font-[UnifrakturCook] text-gray-700">
          Freelance — Desarrolladora Front End
        </h3>
        <p className="text-xs text-gray-500 italic">Marzo 2025 - Julio 2025</p>
        <p className="text-sm text-gray-600 font-serif leading-relaxed">
          CRUD básico en Angular 16 para IMK. Diseño de la base de datos y optimización del flujo administrativo, mejorando la eficiencia de los procesos internos.
        </p>
      </motion.article>

      {/* Teaching Assistant */}
      <motion.article
        className="border-l-4 border-gray-500 pl-6 space-y-2"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
        }}
      >
        <h3 className="text-xl font-[UnifrakturCook] text-gray-700">
          Universidad Nacional del Centro (UNICEN) — Ayudante de cátedra
        </h3>
        <p className="text-xs text-gray-500 italic">2024 · Tandil, Buenos Aires</p>
        <p className="text-sm text-gray-600 font-serif leading-relaxed">
          Asistencia a estudiantes de primer año en <span className="italic">Programación 1</span>.
        </p>
      </motion.article>
    </motion.div>
  </motion.section>

  {/* Footer */}
  <footer className="border-t border-zinc-300 py-12 flex flex-col items-center space-y-8 max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center space-y-4"
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-[UnifrakturCook] text-zinc-900 tracking-wide">
        ¿Trabajamos juntos?
      </h2>
      <p className="text-zinc-600 text-sm font-serif">
        Puedes contactarme directamente por correo o visitar mi perfil en LinkedIn.
      </p>

      {/* Botón Contacto */}
      <motion.a
        href="mailto:gcandela894@gmail.com?subject=Contacto desde CV&body=Hola, quiero ponerme en contacto contigo..."
        className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 rounded-lg text-white shadow-md shadow-zinc-400 transition font-[UnifrakturCook] inline-block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Contáctame
      </motion.a>

      {/* LinkedIn */}
      <motion.div
        className="mt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <a
          href="https://www.linkedin.com/in/candela-echaz%C3%BA-111805236/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-700 hover:text-zinc-900 underline decoration-zinc-400 transition-colors"
        >
          Mi LinkedIn
        </a>
      </motion.div>
    </motion.div>
  </footer>


  </div>

    )
  }
