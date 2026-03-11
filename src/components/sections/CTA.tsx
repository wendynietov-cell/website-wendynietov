import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CTA() {
  return (
    <section className="mx-6 md:mx-16 mb-20 relative z-1 rounded-3xl overflow-hidden" id="contact">
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/25 via-rose-500/20 to-emerald-400/10 backdrop-blur-xl" />
      <div className="absolute inset-0 rounded-3xl border border-purple-500/20">
        <div className="absolute top-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-rose-500/60 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 p-12 md:p-20 flex justify-between items-center gap-12 flex-wrap">
        <div>
          <h2 className="text-3xl md:text-4xl font-black leading-tight text-white mb-4">
            ¿Lista para cerrar<br />
            tu próximo{' '}
            <span className="font-serif italic font-light text-gradient-mint">big deal?</span>
          </h2>
          <p className="text-white/55 leading-relaxed max-w-md">
            Conversemos sobre cómo escalar tus ventas tech, construir un pipeline ganador y superar tus objetivos de revenue este año.
          </p>
        </div>

        <div className="flex flex-col gap-3 items-start">
          <div className="font-mono text-xs text-emerald-400/70">wendy@wendynieto.com</div>
          <Link
            href="mailto:wendy@wendynieto.com"
            className="inline-flex items-center gap-2 bg-gradient-main text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-rose-500/30 hover:-translate-y-0.5 transition-all"
          >
            Agendar llamada
            <ArrowRight size={18} />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="glass-card inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white/60 hover:text-white hover:-translate-y-0.5 transition-all"
          >
            Ver LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
}
