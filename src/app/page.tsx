import Footer from "./components/foooter";

export default function Home() {
  return (

    <main>
          <div className="text-center mt-8">
          <h1 className="text-5xl font-bold">Candela Echazú</h1>
          <p className="text-2xl font-light mt-4">Estudiante Desarrollo Web</p>
          </div>




          <div className="flex justify-center items-center mt-6 mb-12 w-full">
  <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-4 max-w-4xl w-full">
    <button className="bg-primary-100 text-white py-2 px-4 rounded hover:bg-primary-200">
      Figma
    </button>
    <button className="bg-accent-200 text-white py-2 px-4 rounded hover:bg-accent-100">
      Node.js
    </button>
    <button className="bg-primary-100 text-white py-2 px-4 rounded hover:bg-primary-200">
      HTML y CSS
    </button>
    <button className="bg-accent-200 text-white py-2 px-4 rounded hover:bg-accent-100">
      Java
    </button>
    <button className="bg-primary-100 text-white py-2 px-4 rounded hover:bg-primary-200">
      JavaScript
    </button>
    <button className="bg-accent-200 text-white py-2 px-4 rounded hover:bg-accent-100">
      MySQL
    </button>
    <button className="bg-primary-100 text-white py-2 px-4 rounded hover:bg-primary-200">
      React
    </button>
    <button className="bg-accent-200 text-white py-2 px-4 rounded hover:bg-accent-100">
      MongoDB
    </button>
    <button className="bg-primary-100 text-white py-2 px-4 rounded hover:bg-primary-200">
      Next.js
    </button>
    <button className="bg-accent-200 text-white py-2 px-4 rounded hover:bg-accent-100">
      PostgreSQL
    </button>
    <button className="bg-primary-100 text-white py-2 px-4 rounded hover:bg-primary-200">
        Angular
      </button>
  </div>
          </div>

          <div className="flex justify-center items-center mt-4 mb-12 w-full">
            <div className="max-w-3xl w-full text-center p-4">
            <p>
              Hola, tengo 23 años y resido en <strong>Tandil, Buenos Aires</strong>. Actualmente curso 
              la <strong>tecnicatura de desarrollo web</strong>.
              Disfruto mucho la programación en general, y estoy siempre dispuesta a aceptar un nuevo
              desafío que me permita conseguir experiencia y crecimiento.
              Complemento mi educación de la mano de cursos y becas, lo que me permite cosechar 
              <strong> buenas habilidades de comunicación, trabajo en equipo y solución de problemas.</strong>
            </p>
            </div>
          </div>

          <Footer></Footer>
      
    </main>

  );
}
