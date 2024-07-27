import Footer from '@/app/components/foooter';
export default function exp() {
    return (
<section>
  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
    Experiencia
  </h1>

  <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    
    <div className="bg-transparent border border-accent-200 rounded-lg shadow-md hover:shadow-lg text-gray-900 transition-shadow duration-300 p-4">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        Ayudante de Cátedra
      </h2>
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
        2024, Universidad Nacional del Centro de Buenos Aires
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        Cátedra de <strong>Programación 1</strong> perteneciente a la Tecnicatura Universitaria de Desarrollo Web.
        Cumpliendo tareas que incluían la resolución de problemas lógicos, preparación de ejercicios
        con ciclos While y For en JAVA y exposición de los mismos frente a los alumnos tanto en clases
        presenciales como virtuales.
      </p>
    </div>

   
    <div className="bg-transparent border border-accent-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 ">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        Bootcamp - Hedy Software
      </h2>
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
        Marzo - Junio 2024, empresa del rubro tecnológico en Córdoba.
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        Desarrollo de múltiples proyectos con Next.js, tanto individuales como en equipo, con
        el principal objetivo de explorar las nuevas tecnologías y saber cómo aprovecharlas. 
        También se trabajó en la reforma de proyectos con tecnologías viejas.
        Proyecto final: aplicación de manejo de tareas, con login y traductor.
      </p>
    </div>
  </div>

  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
    Formación
  </h1>

  <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    
    <div className="bg-transparent border border-primary-100  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        Tec. Universitaria en Desarrollo de Aplicaciones Web.
      </h2>
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
        Desde 2023, Universidad Nacional del Centro de Buenos Aires
      </h3>

    </div>

    <div className="bg-transparent border border-primary-100  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 ">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        Desarrollo web con NODE.JS y EXPRESS.
      </h2>
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
        Marzo - Junio 2024, Programa Nacional Codo a Codo.
      </h3>
    </div>

    <div className="bg-transparent border border-primary-100  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 ">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        Diseño UX/UI
      </h2>
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
        Marzo - Junio 2024, Becas CoderHouse.
      </h3>
    </div>


    <div className="bg-transparent border border-primary-100  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 ">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        Java - POO
      </h2>
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
        2023, UDEMY.
      </h3>
    </div>

    <div className="bg-transparent border border-primary-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 ">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        Argentina Programa.
      </h2>
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
        2020, Primera edición.
      </h3>
    </div>
  </div>

  <Footer></Footer>
</section>



    );
  }