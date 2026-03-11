'use client';

import { motion } from 'framer-motion';
import { Target, Rocket, Handshake, BarChart2, Settings, Globe } from 'lucide-react';

const ITEMS = [
  { num: '01', Icon: Target,    name: 'Sales Strategy',         desc: 'Diseño de procesos end-to-end desde prospección hasta cierre. Metodologías consultivas para productos tech B2B y SaaS.', tag: 'Estrategia', color: 'mint' },
  { num: '02', Icon: Rocket,    name: 'Pipeline Development',   desc: 'Construcción y optimización de pipelines de alta conversión. ICP definition, qualification frameworks y deal acceleration.', tag: 'Crecimiento', color: 'rose' },
  { num: '03', Icon: Handshake, name: 'Enterprise Partnerships', desc: 'Relaciones estratégicas con C-suite. Negociaciones complejas con múltiples stakeholders y ciclos largos de venta.', tag: 'Enterprise', color: 'purple' },
  { num: '04', Icon: BarChart2, name: 'Sales Coaching',          desc: 'Entrenamiento de equipos: objection handling, discovery calls efectivas y demos de alto impacto que cierran.', tag: 'Coaching', color: 'mint' },
  { num: '05', Icon: Settings,  name: 'RevOps Consulting',       desc: 'Optimización de tu stack de ventas: CRM, automatización, analytics y enablement para escalar revenue de forma sostenida.', tag: 'RevOps', color: 'rose' },
  { num: '06', Icon: Globe,     name: 'GTM Strategy',            desc: 'Go-to-market para productos tech. Segmentación, positioning, pricing y expansión a nuevos mercados en LATAM y USA.', tag: 'GTM', color: 'purple' },
];

const TAG_STYLES: Record<string, string> = {
  mint:   'text-emerald-400 bg-emerald-400/8 border border-emerald-400/20',
  rose:   'text-rose-300 bg-rose-500/8 border border-rose-500/20',
  purple: 'text-purple-300 bg-purple-500/8 border border-purple-500/20',
};

const ICON_STYLES: Record<string, string> = {
  mint:   'bg-emerald-400/10 text-emerald-400',
  rose:   'bg-rose-400/10 text-rose-400',
  purple: 'bg-purple-400/10 text-purple-400',
};

export function Services() {
  return (
    <section className="py-24 px-6 md:px-16 relative z-1" id="services">
      <div className="max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="flex justify-between items-end mb-16 gap-10 flex-wrap">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-4">
              <div className="w-6 h-px bg-emerald-400" />
              Servicios Tech Sales
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Lo que puedo hacer<br />
              por tu <span className="font-serif italic font-light text-gradient">negocio</span>
            </h2>
          </div>
          <p className="max-w-sm text-white/60 leading-relaxed text-right">
            Estrategia de ventas tech con enfoque consultivo, orientada a resultados reales y escalables.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-2xl p-8 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-white/5 transition-all duration-300"
            >
              <div className="font-mono text-xs text-white/30 mb-7">{item.num}</div>
              <div className={`mb-5 w-12 h-12 rounded-xl flex items-center justify-center ${ICON_STYLES[item.color]}`}>
                <item.Icon size={22} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.name}</h3>
              <p className="text-white/60 leading-relaxed mb-6 text-sm">{item.desc}</p>
              <span className={`inline-block font-mono text-xs uppercase tracking-wider px-3 py-1.5 rounded-full ${TAG_STYLES[item.color]}`}>
                {item.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
