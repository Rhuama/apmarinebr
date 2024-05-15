import Image from "next/image"

export default function Footer() {
    return (
    <div className="relative mt-16 bg-gray-900 text-gray-300">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-gray-900"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="AP Marine"
              className="inline-flex items-center"
            >
              <img src="logo.png" alt="AP Marine Logo" className="w-8" />
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                AP Marine
              </span>
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-gray-400">
                Soluções integradas para transporte marítimo, engenharia naval, consultoria técnica, gestão ambiental e tecnologias de automação.
              </p>
              <p className="mt-4 text-sm text-gray-400">
                Comprometidos com a excelência e a sustentabilidade em todas as nossas operações.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Soluções
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-gray-400 hover:text-teal-accent-400"
                  >
                    Logística Marítima
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-gray-400 hover:text-teal-accent-400"
                  >
                    Engenharia Naval
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-gray-400 hover:text-teal-accent-400"
                  >
                    Consultoria Técnica
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-gray-400 hover:text-teal-accent-400"
                  >
                    Gestão Ambiental
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Sobre
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/about"
                    className="transition-colors duration-300 text-gray-400 hover:text-teal-accent-400"
                  >
                    Nossa Empresa
                  </a>
                </li>
                <li>
                  <a
                    href="/team"
                    className="transition-colors duration-300 text-gray-400 hover:text-teal-accent-400"
                  >
                    Equipe
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="transition-colors duration-300 text-gray-400 hover:text-teal-accent-400"
                  >
                    Carreiras
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="transition-colors duration-300 text-gray-400 hover:text-teal-accent-400"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Recursos
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/blog"
                    className="transition-colors duration-300 text-gray-400 hover:text-teal-accent-400"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="transition-colors duration-300 text-gray-400 hover:text-teal-accent-400"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/support"
                    className="transition-colors duration-300 text-gray-400 hover:text-teal-accent-400"
                  >
                    Suporte
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="transition-colors duration-300 text-gray-400 hover:text-teal-accent-400"
                  >
                    Privacidade
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Social
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="https://www.facebook.com"
                    className="transition-colors duration-300 text-gray-400 hover:text-teal-accent-400"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com"
                    className="transition-colors duration-300 text-gray-400 hover:text-teal-accent-400"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    className="transition-colors duration-300 text-gray-400 hover:text-teal-accent-400"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com"
                    className="transition-colors duration-300 text-gray-400 hover:text-teal-accent-400"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-700 sm:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} AP Marine. Todos os direitos reservados.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="https://www.facebook.com"
              className="transition-colors duration-300 text-gray-400 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
            <a
              href="https://www.twitter.com"
              className="transition-colors duration-300 text-gray-400 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1c-1.1,0.2-2.2,0.4-3.3,0.5c-0.9-1-2.2-1.6-3.6-1.6c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1c-4.1-0.2-7.7-2.2-10.1-5.3
C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1c-0.8-0.1-1.6-0.2-2.3-0.6c0,0.1,0,0.1,0,0.2c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2
c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2
c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com"
              className="transition-colors duration-300 text-gray-400 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10 C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1 c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com"
              className="transition-colors duration-300 text-gray-400 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22.23,0H1.77C0.79,0,0,0.79,0,1.77v20.46C0,23.21,0.79,24,1.77,24h20.46C23.21,24,24,23.21,24,22.23V1.77 C24,0.79,23.21,0,22.23,0z M7.06,20.16H3.56V9h3.5V20.16z M5.31,7.66c-1.12,0-2.02-0.91-2.02-2.02S4.19,3.62,5.31,3.62 S7.33,4.53,7.33,5.64S6.43,7.66,5.31,7.66z M20.16,20.16h-3.5v-5.5c0-1.32-0.03-3.02-1.84-3.02c-1.84,0-2.12,1.44-2.12,2.92v5.6h-3.5 V9h3.36v1.52h0.05c0.47-0.88,1.61-1.8,3.31-1.8c3.54,0,4.19,2.33,4.19,5.36V20.16z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
