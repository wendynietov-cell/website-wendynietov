'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const STATS = [
  { num: 120, suffix: '+', label: 'Empresas asesoradas' },
  { num: 3,   suffix: '×', label: 'Crecimiento en ventas' },
  { num: 5,   suffix: 'yr', label: 'Exp. Tech Sales' },
];

const LEFT_TAGS  = ['Sales Strategy', 'AI Tools', 'Revenue Growth'];
const RIGHT_TAGS = ['Data-Driven', 'CRM Expert', 'Tech Stack'];

export function Hero() {
  const cardRef  = useRef<HTMLDivElement>(null);
  const statsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const cx = (e.clientX / window.innerWidth  - 0.5) * 20;
      const cy = (e.clientY / window.innerHeight - 0.5) * 20;
      if (cardRef.current)
        cardRef.current.style.transform = `perspective(1800px) rotateY(${cx * 0.01}deg) rotateX(${-cy * 0.007}deg)`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    statsRef.current.forEach((el, i) => {
      if (!el) return;
      const { num, suffix } = STATS[i];
      let start: number | null = null;
      const obs = new IntersectionObserver(entries => {
        if (!entries[0].isIntersecting) return;
        const step = (ts: number) => {
          if (!start) start = ts;
          const p    = Math.min((ts - start) / 1400, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          el.textContent = (num < 10 ? (num * ease).toFixed(1) : Math.round(num * ease)) + suffix;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        obs.disconnect();
      });
      obs.observe(el);
    });
  }, []);

  return (
    <>
      <style>{`
        @keyframes cardReveal   { from{opacity:0;transform:translateY(24px) scale(.98)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes stripeShimmer{ 0%,100%{opacity:1} 50%{opacity:.5} }
        @keyframes mirrorSweep  { 0%{left:-80%;opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{left:160%;opacity:0} }
        @keyframes nameShimmer  { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes heroBlink    { 0%,100%{opacity:1} 50%{opacity:.15} }
        @keyframes heroFadeUp   { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        @keyframes trackSlide   { 0%{left:-6px;opacity:0} 20%{opacity:1} 100%{left:40px;opacity:0} }
        @keyframes hintPulse    { 0%,100%{opacity:.35} 50%{opacity:.7} }
        @keyframes scanDown     { from{top:-4px} to{top:100vh} }
        .card-reveal  { animation: cardReveal .85s cubic-bezier(.23,1,.32,1) .3s both; }
        .stripe-anim  { animation: stripeShimmer 4s ease-in-out infinite; }
        .sweep-anim   { animation: mirrorSweep 6s ease-in-out infinite; }
        .name-shimmer { animation: nameShimmer 5s ease infinite; background-size:200%; }
        .blink-dot    { animation: heroBlink 1.8s infinite; }
        .fu1 { opacity:0; animation: heroFadeUp .6s ease .65s  forwards; }
        .fu2 { opacity:0; animation: heroFadeUp .7s ease .8s   forwards; }
        .fu3 { opacity:0; animation: heroFadeUp .6s ease 1s    forwards; }
        .fu4 { opacity:0; animation: heroFadeUp .6s ease 1.15s forwards; }
        .fu5 { opacity:0; animation: heroFadeUp .6s ease 1.3s  forwards; }
        .fu6 { opacity:0; animation: heroFadeUp .6s ease 1.45s forwards; }
        .fu7 { opacity:0; animation: heroFadeUp .6s ease 1.55s forwards; }
        .scanline-el  { animation: scanDown 7s linear infinite; }
        .track-dot    { animation: trackSlide 2s ease-in-out infinite; }
        .hint-pulse   { animation: hintPulse 3s ease-in-out infinite; }
      `}</style>

      <div className="scanline-el fixed top-0 left-0 right-0 h-0.5 z-0 pointer-events-none opacity-10"
        style={{ background: 'linear-gradient(90deg,transparent,#b44fdf,#e040a0,transparent)' }} />

      <section className="relative flex flex-col px-6 md:px-14 pt-4 pb-8 z-10">

        {/* Top bar */}
        <div className="flex items-center justify-between mb-4 font-mono text-[10px] text-white/30 tracking-[.1em] uppercase fu1">
          <span>Wendy Nieto · 2026</span>
          <div className="flex-1 h-px mx-4" style={{ background: 'linear-gradient(90deg,#b44fdf,transparent)' }} />
          <span>Tech Sales Strategist</span>
          <div className="flex-1 h-px mx-4" style={{ background: 'linear-gradient(90deg,transparent,#b44fdf)' }} />
          <span>MDE · COL</span>
        </div>

        {/* ── Mirror card ── */}
        <div
          ref={cardRef}
          className="card-reveal rounded-2xl relative overflow-hidden grid grid-cols-1 md:grid-cols-2"
          style={{
            border: '1px solid rgba(180,79,223,.2)',
            background: 'rgba(180,79,223,.025)',
            backdropFilter: 'blur(28px) saturate(1.5)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,.06), 0 0 80px rgba(180,79,223,.08), 0 32px 100px rgba(0,0,0,.45)',
            minHeight: 'calc(100vh - 140px)',
          }}
        >
          <div className="stripe-anim absolute top-0 left-0 right-0 h-0.5 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(90deg,transparent,#b44fdf 25%,#e040a0 50%,#5effd8 75%,transparent)' }} />

          <div className="sweep-anim absolute top-0 w-[40%] h-full z-10 pointer-events-none -skew-x-12"
            style={{ background: 'linear-gradient(105deg,transparent,rgba(255,255,255,.035),transparent)' }} />

          {(['tl','tr','bl','br'] as const).map(p => (
            <div key={p} className="absolute w-4 h-4 pointer-events-none" style={{
              top:    p.startsWith('t') ? 14 : 'auto', bottom: p.startsWith('b') ? 14 : 'auto',
              left:   p.endsWith('l')  ? 14 : 'auto',  right:  p.endsWith('r')  ? 14 : 'auto',
              borderColor: 'rgba(180,79,223,.3)', borderStyle: 'solid',
              borderWidth: `${p.startsWith('t')?1:0}px ${p.endsWith('r')?1:0}px ${p.startsWith('b')?1:0}px ${p.endsWith('l')?1:0}px`,
            }} />
          ))}

          <div className="absolute top-[8%] left-1/2 bottom-[8%] w-px hidden md:block pointer-events-none"
            style={{ background: 'linear-gradient(to bottom,transparent,rgba(180,79,223,.18) 30%,rgba(224,64,160,.18) 70%,transparent)' }} />

          {/* ── IZQUIERDA ── */}
          <div className="flex flex-col justify-center gap-14 px-10 md:px-16 py-12 relative z-10">

            {/* BLOQUE SUPERIOR */}
            <div className="flex flex-col">
              {/* Badge */}
              <div className="fu1 flex items-center gap-3 mb-10">
                <span className="font-mono text-[10px] tracking-[.13em] uppercase px-3 py-1 text-purple-300"
                  style={{ border:'1px solid rgba(180,79,223,.35)', background:'rgba(180,79,223,.07)', clipPath:'polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)' }}>
                  Especialista en Ventas Tech
                </span>
                <span className="blink-dot w-1.5 h-1.5 rounded-full bg-purple-400 inline-block" />
                <span className="font-mono text-[9px] tracking-[.1em] uppercase" style={{ color:'rgba(240,234,255,0.35)' }}>
                  Disponible · 2026
                </span>
              </div>

              {/* Nombre */}
              <div className="fu2 relative leading-[.85] select-none whitespace-nowrap mb-10"
                style={{ fontSize: 'clamp(3rem, 5.5vw, 6rem)', fontFamily:"'Cormorant Garamond',serif", fontWeight:700, letterSpacing:'-.03em' }}>
                <span style={{ color:'#fff' }}>Wendy&nbsp;</span>
                <span className="name-shimmer font-light italic"
                  style={{ background:'linear-gradient(135deg,#a5b4fc 0%,#b44fdf 40%,#e040a0 80%,#5effd8 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundSize:'200%' }}>
                  Nieto
                </span>
              </div>

              {/* Role + Descripción */}
              <div className="flex flex-col gap-6">
                <p className="fu3 font-mono text-[10px] text-white/40 tracking-[.09em] uppercase">
                  Estratega de Ventas &amp; <span className="text-emerald-400">Tecnología</span> · Data · AI Tools
                </p>
                <p className="fu4 text-white/55 leading-[1.75] text-[.95rem] font-light max-w-md">
                  Asesoro equipos para escalar sus ventas mediante herramientas tecnológicas e inteligencia de datos. Especialista en integración logística y autogestión de plataformas como Rappi y DiDi, diseñando procesos que aseguran la eficiencia operativa y el aumento sostenido de ingresos.
                </p>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="fu5 flex flex-wrap gap-4 -mt-6">
              <Link href="/contacto"
                className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest uppercase px-6 py-3 text-white transition-all hover:-translate-y-0.5"
                style={{ background:'linear-gradient(135deg,#b44fdf,#e040a0,#5effd8)', clipPath:'polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)', boxShadow:'0 6px 24px rgba(180,79,223,.35)' }}>
                Trabajemos juntos ↗
              </Link>
              <Link href="/servicios"
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[.06em] uppercase px-5 py-3 text-purple-200/70 transition-all hover:-translate-y-0.5 hover:text-white"
                style={{ border:'1px solid rgba(165,180,252,.3)', background:'rgba(165,180,252,.05)', clipPath:'polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)' }}>
                Ver portafolio ▸
              </Link>
            </div>

            {/* BLOQUE INFERIOR (Ajustado el ancho de stats) */}
            <div className="flex flex-col gap-1">
              {/* Sección de Stats (Ahora es más ancha para coincidir con el diseño original) */}
              <div className="fu6 flex border border-purple-500/10 w-full"
                style={{ background:'rgba(180,79,223,.03)', clipPath:'polygon(12px 0%,100% 0%,calc(100% - 12px) 100%,0% 100%)' }}>
                {STATS.map((s, i) => (
                  <div key={i} className="flex-1 px-6 py-4 group relative overflow-hidden"
                    style={{ borderRight: i < STATS.length - 1 ? '1px solid rgba(180,79,223,.1)' : 'none' }}>
                    <div className="font-serif text-[1.75rem] font-bold leading-none"
                      style={{ background:'linear-gradient(135deg,#e040a0,#a5b4fc,#5effd8)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
                      <span ref={el => { statsRef.current[i] = el; }}>0{s.suffix}</span>
                    </div>
                    <div className="font-mono text-[9px] text-white/30 uppercase tracking-widest mt-1.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── DERECHA ── */}
          <div className="relative hidden md:block overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/imageportada.png"
                alt="Wendy Nieto"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
                style={{ mixBlendMode: 'luminosity', filter: 'contrast(1.05) brightness(0.9)' }}
                priority
              />
              <div className="absolute inset-0 pointer-events-none" style={{
                background: `
                  linear-gradient(to right,  rgba(6,6,16,.55) 0%, transparent 20%),
                  linear-gradient(to left,   rgba(6,6,16,.55) 0%, transparent 20%),
                  linear-gradient(to bottom, rgba(6,6,16,.4)  0%, transparent 15%),
                  linear-gradient(to top,    rgba(6,6,16,.85) 0%, transparent 35%)
                `
              }} />
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(135deg,rgba(109,40,217,.15) 0%,rgba(30,27,75,.2) 50%,rgba(224,64,160,.08) 100%)', mixBlendMode:'color' }} />
            </div>

            <div className="fu7 absolute left-4 bottom-16 flex flex-col gap-2 z-10">
              {LEFT_TAGS.map((t, i) => (
                <span key={i} className="font-mono text-[9px] tracking-widest uppercase px-3 py-1.5 backdrop-blur-sm"
                  style={{
                    border:`1px solid ${i===1?'rgba(224,64,160,.3)':i===2?'rgba(94,255,216,.3)':'rgba(180,79,223,.3)'}`,
                    color: i===1?'rgba(224,64,160,.85)':i===2?'rgba(94,255,216,.85)':'rgba(180,79,223,.85)',
                    background: i===1?'rgba(224,64,160,.08)':i===2?'rgba(94,255,216,.08)':'rgba(180,79,223,.08)',
                    clipPath:'polygon(5px 0%,100% 0%,calc(100% - 5px) 100%,0% 100%)',
                  }}>
                  {t}
                </span>
              ))}
            </div>
            <div className="fu7 absolute right-4 top-16 flex flex-col gap-2 items-end z-10">
              {RIGHT_TAGS.map((t, i) => (
                <span key={i} className="font-mono text-[9px] tracking-widest uppercase px-3 py-1.5 backdrop-blur-sm"
                  style={{
                    border:`1px solid ${i===0?'rgba(165,180,252,.3)':i===2?'rgba(224,64,160,.3)':'rgba(180,79,223,.3)'}`,
                    color: i===0?'rgba(165,180,252,.85)':i===2?'rgba(224,64,160,.85)':'rgba(180,79,223,.85)',
                    background: i===0?'rgba(165,180,252,.08)':i===2?'rgba(224,64,160,.08)':'rgba(180,79,223,.08)',
                    clipPath:'polygon(5px 0%,100% 0%,calc(100% - 5px) 100%,0% 100%)',
                  }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex items-center gap-3 mt-4 font-mono text-[9px] tracking-widest uppercase text-white/25 fu7">
          <div className="relative w-10 h-px overflow-hidden" style={{ background:'linear-gradient(90deg,#b44fdf,transparent)' }}>
            <div className="track-dot absolute -top-[2px] -left-1.5 w-1.5 h-1.5 rounded-full bg-purple-400" />
          </div>
          <span>Scroll to explore</span>
        </div>

      </section>
    </>
  );
}