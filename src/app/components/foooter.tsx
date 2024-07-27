// src/app/components/Footer.tsx

export default function Footer() {
    return (
        <footer className="text-center mt-12">
        <h2 className=" mb-8 text-2xl">¡Contáctame!</h2>
    <div className="flex justify-center space-x-8 text-1xl">
      <a
        href="https://www.linkedin.com/in/candela-echaz%C3%BA-111805236/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-bg-200 hover:primary-100"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/cande342"
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-100 hover:text-primary-300"
      >
        GitHub
      </a>
      <a
        href="mailto:gcandela894@gmail.com"
        className="text-accent-200 hover:text-primary-300"
      >
        Correo
      </a>
    </div>
    <div className="mt-4 text-1xl">
      <a
        href="/docs/Candela-Echazu2024.pdf"
        download
        className="text-primary-200 hover:text-primary-300"
      >
        Descargar CV
      </a>
    </div>
        </footer>
    );
  }
  