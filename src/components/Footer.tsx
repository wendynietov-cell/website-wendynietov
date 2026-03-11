import Link from "next/link";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/40 backdrop-blur-[20px] border-t border-white/10 py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-black mb-4">Arquitecto</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Estrategia y arquitectura escalable para plataformas que crecen 10x.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Navegación</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Inicio" },
                { href: "/servicios", label: "Servicios" },
                { href: "/estudios", label: "Estudios" },
                { href: "/insights", label: "Insights" },
                { href: "/sobre-mi", label: "Sobre Mí" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-white/60 hover:text-primary transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Servicios</h4>
            <ul className="space-y-3">
              {[
                { href: "/servicios/tecnologia-restaurantes", label: "Restaurantes" },
                { href: "/servicios/plataformas", label: "Plataformas" },
                { href: "/servicios/cocinas-ocultas", label: "Ghost Kitchens" },
                { href: "/servicios/economia-creativa", label: "UGC & Creators" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-white/60 hover:text-primary transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Contacto</h4>
            <div className="space-y-4">
              <a
                href="mailto:hello@arquitecto.com"
                className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors text-sm"
              >
                <Mail size={16} />
                hello@arquitecto.com
              </a>
              <div className="flex gap-4 pt-4 border-t border-white/10">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors">
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-sm">
            © {currentYear} Arquitecto de Plataformas. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/40 hover:text-primary transition-colors text-sm">
              Política de Privacidad
            </a>
            <a href="#" className="text-white/40 hover:text-primary transition-colors text-sm">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
