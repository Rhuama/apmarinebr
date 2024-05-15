import Image from "next/image"

export default function Footer() {
    return (
    <div id="contact" className="h-[911px] mt-16 flex items-end text-gray-300">
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 border-t-2">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="AP Marine"
              className="inline-flex items-center"
            >
               <Image src="/images/logo.png" width={250} height={80} alt="logo" />
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
              href="https://www.facebook.com/ApMarineLtda/?locale=pt_BR"
              target="_blank"
              className="transition-colors duration-300 text-gray-400 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/apmarinebr/"
              target="_blank"
              className="transition-colors duration-300 text-gray-400 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10 C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1 c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
