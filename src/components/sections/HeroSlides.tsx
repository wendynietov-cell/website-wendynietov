'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ArrowRight, Briefcase } from 'lucide-react';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SLIDES = [
  {
    index: '01',
    title: ['Vendo tecnología.', 'Construyo relaciones', 'reales.'],
    accentLine: 1,
    subtitle: 'Soy Wendy Nieto — convierto prospectos en clientes leales con estrategias de ventas consultivas y enfoque en resultados medibles.',
    accent: 'rose' as const,
    tag: 'Sales Specialist in Tech',
    cta: { label: 'Ver servicios', href: '/servicios' },
  },
  {
    index: '02',
    title: ['Equipos que venden', 'más con menos', 'fricción.'],
    accentLine: 1,
    subtitle: 'Diseño playbooks y frameworks de discovery adaptados al ciclo de venta tech. Metodologías probadas que escalan.',
    accent: 'mint' as const,
    tag: 'Playbooks & Frameworks',
    cta: { label: 'Mi metodología', href: '/sobre-mi' },
  },
  {
    index: '03',
    title: ['Resultados', 'medibles desde', 'el día uno.'],
    accentLine: 1,
    subtitle: 'Más de 3M en revenue generado para clientes tech. Estrategias data-driven que impactan directamente el bottom line.',
    accent: 'rose' as const,
    tag: '+$3M en Revenue',
    cta: { label: 'Ver casos', href: '/servicios' },
  },
  {
    index: '04',
    title: ['Tu próximo gran', 'deal empieza', 'aquí.'],
    accentLine: 1,
    subtitle: 'Una sesión estratégica de 30 minutos puede cambiar la dirección de tu equipo. Conversemos de crecimiento.',
    accent: 'mint' as const,
    tag: 'Sesión gratuita · 30 min',
    cta: { label: 'Agendar ahora', href: '/contacto' },
  },
];

const ACCENT = {
  rose: { color: '#e040a0', gradient: 'linear-gradient(135deg, #e040a0 0%, #b44fdf 100%)', shadow: 'rgba(224,64,160,0.45)' },
  mint: { color: '#5effd8', gradient: 'linear-gradient(135deg, #5effd8 0%, #00c9a7 100%)', shadow: 'rgba(94,255,216,0.35)' },
};

export function HeroSlides() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      const total = SLIDES.length;

      slidesRef.current.forEach((slide, i) => {
        if (!slide) return;
        gsap.set(slide, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 50 });
      });

      for (let i = 0; i < total - 1; i++) {
        const out = slidesRef.current[i];
        const inn = slidesRef.current[i + 1];
        if (!out || !inn) continue;

        ScrollTrigger.create({
          trigger: wrapperRef.current,
          start: `${(i / (total - 1)) * 75}% top`,
          end: `${((i + 1) / (total - 1)) * 75}% top`,
          onEnter: () => {
            gsap.to(out, { opacity: 0, y: -50, duration: 0.5, ease: 'power2.in' });
            gsap.fromTo(inn, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.1 });
            setCurrent(i + 1);
            updateDots(i + 1);
          },
          onLeaveBack: () => {
            gsap.to(inn, { opacity: 0, y: 50, duration: 0.4, ease: 'power2.in' });
            gsap.fromTo(out, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out', delay: 0.05 });
            setCurrent(i);
            updateDots(i);
          },
        });
      }

      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          if (progressRef.current)
            gsap.to(progressRef.current, { scaleX: self.progress, duration: 0.1, ease: 'none' });
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  function updateDots(active: number) {
    dotsRef.current.forEach((dot, i) => {
      if (!dot) return;
      gsap.to(dot, { width: i === active ? 28 : 8, opacity: i === active ? 1 : 0.3, duration: 0.3, ease: 'power2.out' });
    });
  }

  return (
    <div ref={wrapperRef} style={{ height: '400vh' }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Barra de progreso */}
        <div className="absolute top-0 left-0 right-0 h-[2px] z-50 bg-white/5">
          <div ref={progressRef} className="h-full origin-left" style={{ background: 'var(--gradient-main)', transform: 'scaleX(0)' }} />
        </div>

        {/* Contador */}
        <div className="absolute top-8 right-8 z-30 hidden md:flex items-center gap-2 font-mono text-xs text-white/30 tracking-widest">
          <span className="text-white/50">{String(current + 1).padStart(2, '0')}</span>
          <span className="text-white/20">/</span>
          <span>{String(SLIDES.length).padStart(2, '0')}</span>
        </div>

        {/* Dots indicadores */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-3 items-end">
          {SLIDES.map((slide, i) => (
            <div
              key={i}
              ref={el => { dotsRef.current[i] = el; }}
              className="h-[3px] rounded-full"
              style={{
                width: i === 0 ? 28 : 8,
                opacity: i === 0 ? 1 : 0.3,
                background: i === current ? ACCENT[slide.accent].color : 'rgba(255,255,255,0.25)',
                transition: 'background 0.3s',
              }}
            />
          ))}
        </div>

        {/* Slides */}
        {SLIDES.map((slide, i) => {
          const a = ACCENT[slide.accent];
          return (
            <div
              key={i}
              ref={el => { slidesRef.current[i] = el; }}
              className="absolute inset-0 flex items-center px-6 md:px-16"
              style={{ willChange: 'opacity, transform' }}
            >
              <div className="max-w-3xl w-full">

                {/* Tag */}
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-6 h-px" style={{ background: a.color }} />
                  <span className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: a.color }}>
                    {slide.tag}
                  </span>
                </div>

                {/* Título */}
                <h1 className="font-black leading-[1.05] mb-7" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.8rem)' }}>
                  {slide.title.map((line, li) => (
                    <span key={li} className="block">
                      {li === slide.accentLine
                        ? <span className="font-serif italic font-light" style={{ color: a.color }}>{line}</span>
                        : <span className="text-white">{line}</span>
                      }
                    </span>
                  ))}
                </h1>

                {/* Subtítulo */}
                <p className="text-white/60 leading-relaxed mb-10 max-w-lg" style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)' }}>
                  {slide.subtitle}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={slide.cta.href}
                    className="group inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full text-white transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: a.gradient, boxShadow: `0 4px 20px ${a.shadow}` }}
                  >
                    {slide.cta.label}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  {i === 0 && (
                    <Link href="/contacto" className="glass-card inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full text-white/70 hover:text-white hover:-translate-y-0.5 transition-all duration-300">
                      <Briefcase size={18} />
                      Agendar consultoría
                    </Link>
                  )}
                </div>

                {/* Stats — solo slide 0 */}
                {i === 0 && (
                  <div className="flex pt-10 mt-6 border-t border-white/8 max-w-xs">
                    <div className="flex-1 pr-6 border-r border-white/8">
                      <div className="text-2xl font-black text-gradient">+15</div>
                      <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest mt-1">Proyectos</div>
                    </div>
                    <div className="flex-1 pl-6">
                      <div className="text-2xl font-black text-gradient">5 años</div>
                      <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest mt-1">Ecosistema LatAm</div>
                    </div>
                  </div>
                )}

                {/* Número decorativo */}
                <div
                  className="absolute bottom-8 right-8 font-black text-white/[0.025] select-none pointer-events-none hidden lg:block leading-none"
                  style={{ fontSize: 'clamp(7rem, 16vw, 16rem)' }}
                >
                  {slide.index}
                </div>
              </div>
            </div>
          );
        })}

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] text-white/25 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent animate-bounce" />
        </div>
      </div>
    </div>
  );
}
