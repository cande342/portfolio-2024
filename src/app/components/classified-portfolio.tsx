
"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FiCode, FiPlus, FiStar } from "react-icons/fi";
import { experiencias } from '../utils/experiencias';

export default function Portfolio() {



return (
  <div className="bg-[#f4e2b8] text-gray-900 min-h-screen p-8 font-serif">
    {/* HEADER */}
    <div className="relative flex flex-col max-w-5xl mx-auto mt-12 px-0">
      <div className="flex flex-row items-center justify-between gap-8 w-full">
        {/* Bloque izquierdo: título + subtítulo */}
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-4xl md:text-6xl font-mono text-gray-900 uppercase tracking-widest text-left">
            <Typewriter
              options={{
                strings: ["Candela Azul Echazú"],
                autoStart: true,
                loop: true,
                delay: 120,
                deleteSpeed: 50,
              }}
            />
          </h1>

          <span className="text-lg md:text-xl font-mono text-gray-800 uppercase tracking-wide border-t border-gray-600 pt-1">
            Diseño & Desarrollo de Aplicaciones Web
          </span>
        </div>

        {/* Polaroid a la derecha */}
        <div className="relative w-54 bg-white shadow-xl border border-gray-700 transform rotate-[-3deg] flex-shrink-0 p-2 pb-6">
          <img
            src="p1.jpg"
            alt="Foto de Candela"
            className="w-full h-52 object-cover"
          />

          {/* Cintas */}
          <div className="absolute -top-2 -left-2 w-10 h-3 bg-gray-900/90 rotate-[-10deg] shadow-md"></div>
          <div className="absolute -top-2 -right-2 w-10 h-3 bg-gray-900/90 rotate-[10deg] shadow-md"></div>
        </div>
      </div>
    </div>

    {/* Sección principal */}
    <motion.section
      className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[3.2fr_1fr] gap-12 pt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Columna principal */}
      <div className="space-y-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-mono uppercase tracking-wide text-gray-900 pb-1">
            Especializada en FrontEnd
          </h2>

          <div className="text-sm md:text-base leading-relaxed text-gray-800 font-mono space-y-4 mt-6">
            <p>
              Candela se dedica al desarrollo de aplicaciones vinculadas a la administración y el back office. 
              Actualmente trabaja con Angular (v15 en adelante) y tiene experiencia en el consumo de API REST 
              (con .NET), así como en la integración de librerías como PrimeNG, Angular Material y Chart.js.
            </p>
            <p>
              Además, maneja RxJS para gestionar la reactividad y está explorando Signals para optimizar la 
              actualización de estados. También utiliza Figma para prototipos de interfaces, aplicando principios 
              de usabilidad y accesibilidad en cada proyecto.
            </p>
          </div>
        </div>

        {/* Experiencias */}
        <div>
          <h2 className="text-3xl font-mono text-gray-900 mb-8 tracking-wide text-start">
            Experiencias
          </h2>

          <ul className="list-none space-y-6 font-mono text-gray-900 text-base">
            {experiencias.map((exp, i) => (
              <li key={i} className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-black inline-block"></span>
                  <h3 className="font-bold uppercase">{exp.title}</h3>
                </div>
                <p className="text-sm text-gray-700 italic ml-5">{exp.date}</p>
                <p className="text-sm text-gray-800 ml-5">{exp.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Columna lateral: habilidades */}
      <div className="space-y-2">
        <h3 className="text-xl font-mono uppercase tracking-wide text-gray-900 pb-1">
          Tecnologías y habilidades
        </h3>

        <div className="mt-4 columns-1 gap-4">
          {[
            "Angular",
            "UX / UI",
            "Toma de requerimientos",
            "SPA",
            "CRUD",
            "Java + Spring Boot",
            "Integración de API REST",
            "Optimización de recursos",
            "Next.js"
          ].map((skill) => (
            <div
              key={skill}
              className="break-inside-avoid mb-4 font-mono text-sm text-gray-900"
            >
              <strong className="uppercase tracking-wide">{skill}</strong>
            </div>
          ))}
        </div>
      </div>
    </motion.section>

    {/* Carrusel de proyectos */}
    <motion.section
      className="max-w-6xl mx-auto pt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-mono uppercase tracking-wide text-gray-900 pb-1 mb-6 border-b border-gray-600">
        Proyectos destacados <small>(no comercializados)</small>
      </h3>

      <div className="overflow-x-auto flex gap-6 pb-6 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
        {[
          {
            id: 1,
            title: "Matchmaking Fix",
            description:
              "Consumo la API de Riot para filtrar datos de partidas y crear combinaciones y rankings. Cuenta con un backend intermedio en Nest.js y almacenamiento en Firestore. Para el frontend se utilizó Angular19 con CSS puro.",
            image: "/img/proy/2.webp",
          },
          {
            id: 2,
            title: "Buscador Reactivo",
            description:
              "Este proyecto fue una prueba técnica en la que se me pidió obtener y mostrar datos de una API de manera visualmente atractiva, con código limpio, en un plazo de 48 horas.",
            image: "/img/proy/6.webp",
          },
          {
            id: 3,
            title: "Prototipo UX/UI: Arcade",
            description:
              "Este proyecto fue realizado por un grupo de tres participantes para el curso de Diseño de Interfaces. Creé el prototipo en Figma y luego desarrollé algunas de las páginas estáticas, así como algunas de las secciones animadas del juego Number Blocks.",
            image: "/img/proy/8.webp",
          },
          // Más proyectos
        ].map((project) => (
          <motion.div
            key={project.id}
            className="min-w-[260px] max-w-xs bg-[#fdfbf4] border border-gray-700 rounded-lg p-4 flex-shrink-0 shadow-lg flex flex-col"
            whileHover={{ scale: 1.03 }}
          >
            <div className="w-full h-44 mb-3 overflow-hidden rounded-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover filter sepia hover:sepia-0 transition-all duration-500"
              />
            </div>
            <h4 className="font-mono text-gray-900 text-lg mb-2">{project.title}</h4>
            <p className="text-xs text-gray-700 flex-1 break-words">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>


    {/* FOOTER estilo confidencial / neutral */}
    <footer className="border-t border-gray-700 py-16 flex flex-col items-center max-w-6xl mx-auto text-center">
      <motion.h2
        className="text-2xl font-mono font-semibold text-gray-900 tracking-tight uppercase mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Contacto
      </motion.h2>

      <motion.p
        className="text-gray-700 text-sm font-mono leading-relaxed max-w-xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Para consultas o colaboraciones, puedes enviar un correo electrónico o visitar el perfil de LinkedIn.
      </motion.p>

      <motion.a
        href="mailto:gcandela894@gmail.com?subject=Contacto desde CV&body=Hola, quiero ponerme en contacto..."
        className="px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-sm text-sm font-mono transition-colors mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Enviar correo
      </motion.a>

      <motion.p
        className="text-gray-600 text-xs font-mono"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        © 2025 Candela Echazú — Todos los derechos reservados
      </motion.p>
    </footer>

  </div>
);

}