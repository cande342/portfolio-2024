import Image from 'next/image';
import Footer from '@/app/components/foooter';

export default function exp() {
    return (
<section className="flex flex-col items-center p-8 space-y-8">

  <div className="w-full">
    <h3 className="text-2xl font-semibold">Front End</h3>

    <div className="flex flex-wrap">

    <a
  href="https://tienda-lol.netlify.app/" 
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center m-5 bg-100 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer"
>
  <div className="flex flex-col items-center bg-bg-200 border border-bg-100 rounded-lg shadow md:flex-row md:max-w-sm hover:bg-primary-100">
    <Image
      className="object-cover w-full rounded-t-lg h-24 md:h-16 md:w-16 md:rounded-none md:rounded-l-lg" 
      src="/img/proy/3.png"
      alt="tiendalol"
      width={160}
      height={224}
      layout="responsive"
    />
    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Angular - Tienda
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">
        Comunicación entre componentes con un servicio.
        PrimeNG para estilos.
        Tailwindcss.
      </p>
    </div>
  </div>
</a>

<a
  href="https://apinextjs.netlify.app/" 
  target="_blank"
  rel="noopener noreferrer"
  className="flex flex-col m-5  items-center bg-100 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer"
>
  <div className="flex flex-col items-center bg-bg-200 border border-bg-100 rounded-lg shadow md:flex-row md:max-w-sm hover:bg-primary-100">
    <Image
      className="object-cover w-full rounded-t-lg h-24 md:h-16 md:w-16 md:rounded-none md:rounded-l-lg"
      src="/img/proy/1.png"
      alt="blog"
      width={160}
      height={224}
      layout="responsive"
    />
    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Next.Js - Blog
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">
        Llamadas a api externa.
        Tailwindcss.
        Uso de Link e Image nativos de next.js.
      </p>
    </div>
  </div>
</a>

<a
  href="https://apinextjs.netlify.app/" 
  target="_blank"
  rel="noopener noreferrer"
  className="flex flex-col m-5  items-center bg-100 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer"
>
  <div className="flex flex-col items-center bg-bg-200 border border-bg-100 rounded-lg shadow md:flex-row md:max-w-sm hover:bg-primary-100">
    <Image
      className="object-cover w-full rounded-t-lg h-24 md:h-16 md:w-16 md:rounded-none md:rounded-l-lg"
      src="/img/proy/2.png"
      alt="api"
      width={160}
      height={224}
      layout="responsive"
    />
    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Next.Js - Ruleta
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">
        Prueba de la funcionalidad de next para servicios de backend: creación de una API.
      </p>
    </div>
  </div>
</a>

 </div>

    <hr className="border-t border-gray-300 my-4" />
  </div>





  <div className="w-full">
    <h3 className="text-2xl font-semibold">Full Stack</h3>

    <a
  href="https://replit.com/join/rkqqvqwtyb-gcandela894" 
  target="_blank"
  rel="noopener noreferrer"
  className="flex flex-col m-5 items-center bg-100 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-sm hover:bg-gray-100 cursor-pointer"
>
  <div className="flex flex-col items-center bg-accent-200 border border-bg-100 rounded-lg shadow md:flex-row md:max-w-sm hover:bg-accent-100">
    <Image
      className="object-cover w-full  rounded-t-lg h-24 md:h-16 md:w-16 md:rounded-none md:rounded-l-lg"
      src="/img/proy/4.png"
      alt="Viajeros"
      width={160}
      height={224}
      layout="responsive"
    />
    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Node - Express
      </h5>
      <p className="mb-3 font-normal text-gray-900 text-sm">
        Login y Auth con JWT.
        CRUD con uso de multer para manejo de archivos.
        Mysql y phpmyadmin para la bd.
      </p>
    </div>
  </div>
</a>

    <hr className="border-t border-gray-300 my-4" />
  </div>

  <div className="w-full">
    <h3 className="text-2xl font-semibold">Diseño</h3>
    
    <a
  href="https://www.canva.com/design/DAGFUOfrVno/4J6riBKrehVWvjPWpeG4Gw/edit?utm_content=DAGFUOfrVno&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
  target="_blank"
  rel="noopener noreferrer"
  className="flex flex-col m-5  items-center bg-100 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer"
>
  <div className="flex flex-col items-center bg-bg-200 border border-bg-100 rounded-lg shadow md:flex-row md:max-w-sm hover:bg-primary-100">
    <Image
      className="object-cover w-full rounded-t-lg h-24 md:h-16 md:w-16 md:rounded-none md:rounded-l-lg"
      src="/img/proy/5.png"
      alt="Prototipo"
      width={160}
      height={224}
      layout="responsive"
    />
    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Diseño UX/UI
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">
        Entrevistas y técnicas de investigación para generar el prototipo.
        Figma. Atomic Design. 
      </p>
    </div>
  </div>
</a>


    <hr className="border-t border-gray-300 my-4" />
  </div>


  <Footer></Footer>
</section>

    );
  }