import Image from 'next/image';
import Footer from '@/app/components/foooter';

export default function exp() {
    return (
<section className="flex flex-col items-center p-8 space-y-8">
  <div className="w-full">
    <h3 className="text-2xl font-semibold">Front End</h3>
    <div className="flex flex-wrap">
      <div className="flex items-center m-5 md:flex-row md:max-w-sm">
        <div className="flex flex-col items-center bg-bg-200 border border-bg-100 rounded-lg shadow md:flex-row md:max-w-sm">
          <Image
            className="object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="/img/proy/3.png"
            alt="tiendalol"
            width={200}
            height={200}
            objectFit="cover"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-white">
              Angular - Tienda
            </h5>
            <p className="mb-3 font-normal text-gray-400 text-sm">
              Comunicación entre componentes con un servicio.
              PrimeNG para estilos.
              Tailwindcss.
            </p>
            <a
              href="https://tienda-lol.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 px-4 py-2 bg-bg-100 border border-bg-100 rounded text-primary-500 hover:bg-primary-100 text-center"
            >
              Ir al proyecto
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center m-5 md:flex-row md:max-w-sm">
        <div className="flex flex-col items-center bg-bg-200 border border-bg-100 rounded-lg shadow md:flex-row md:max-w-sm">
          <Image
            className="object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="/img/proy/1.png"
            alt="blog"
            width={200}
            height={200}
            objectFit="cover"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-white">
              Next.Js - Blog
            </h5>
            <p className="mb-3 font-normal text-gray-400 text-sm">
              Llamadas a api externa.
              Tailwindcss.
              Uso de Link e Image nativos de next.js.
            </p>
            <a
              href="https://blogasoiaf.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 px-4 py-2 bg-bg-100 border border-bg-100 rounded text-primary-500 hover:bg-primary-100 text-center"
            >
              Ir al proyecto
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center m-5 md:flex-row md:max-w-sm">
        <div className="flex flex-col items-center bg-bg-200 border border-bg-100 rounded-lg shadow md:flex-row md:max-w-sm">
          <Image
            className="object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="/img/proy/2.png"
            alt="api"
            width={200}
            height={200}
            objectFit="cover"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-white">
              Next.Js - Ruleta
            </h5>
            <p className="mb-3 font-normal text-gray-400 text-sm">
              Prueba de la funcionalidad de next para servicios de backend: creación de una API.
            </p>
            <a
              href="https://apinextjs.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 px-4 py-2 bg-bg-100 border border-bg-100 rounded text-primary-500 hover:bg-primary-100 text-center"
            >
              Ir al proyecto
            </a>
          </div>
        </div>
      </div>
    </div>
    <hr className="border-t border-gray-300 my-4" />
  </div>

  <div className="w-full">
    <h3 className="text-2xl font-semibold">Full Stack</h3>
    <div className="flex items-center m-5 md:flex-row md:max-w-sm">
      <div className="flex flex-col items-center bg-accent-200 border border-bg-100 rounded-lg shadow md:flex-row md:max-w-sm">
        <Image
          className="object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
          src="/img/proy/4.png"
          alt="Viajeros"
          width={200}
          height={200}
          objectFit="cover"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-white">
            Node - Express
          </h5>
          <p className="mb-3 font-normal text-gray-900 text-sm">
            Login y Auth con JWT.
            CRUD con uso de multer para manejo de archivos.
            Mysql y phpmyadmin para la bd.
          </p>
          <a
            href="https://replit.com/join/rkqqvqwtyb-gcandela894"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 px-4 py-2 bg-bg-100 border border-bg-100 rounded text-primary-500 hover:bg-primary-100 text-center"
          >
            Ir al proyecto
          </a>
        </div>
      </div>
    </div>
    <hr className="border-t border-gray-300 my-4" />
  </div>

  <div className="w-full">
    <h3 className="text-2xl font-semibold">Diseño</h3>
    <div className="flex items-center m-5 md:flex-row md:max-w-sm">
      <div className="flex flex-col items-center bg-bg-200 border border-bg-100 rounded-lg shadow md:flex-row md:max-w-sm">
        <Image
          className="object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
          src="/img/proy/5.png"
          alt="Prototipo"
          width={200}
          height={200}
          objectFit="cover"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-white">
            Diseño UX/UI
          </h5>
          <p className="mb-3 font-normal text-gray-400 text-sm">
            Entrevistas y técnicas de investigación para generar el prototipo.
            Figma. Atomic Design.
          </p>
          <a
            href="https://www.canva.com/design/DAGFUOfrVno/4J6riBKrehVWvjPWpeG4Gw/edit?utm_content=DAGFUOfrVno&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 px-4 py-2 bg-bg-100 border border-bg-100 rounded text-primary-500 hover:bg-primary-100 text-center"
          >
            Ir al proyecto
          </a>
        </div>
      </div>
    </div>
    <hr className="border-t border-gray-300 my-4" />
  </div>

  <Footer />
</section>

    );
  }
