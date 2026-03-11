'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

export function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Lo que dicen <span className="text-gradient">Clientes</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Resultados comprobados en los marketplaces más grandes de LATAM
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-8 relative"
            >
              <Quote className="absolute top-6 right-6 text-primary/15" size={30} />
              <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                <t.icon size={22} className="text-white/50" />
              </div>
              <p className="text-white/75 mb-6 leading-relaxed text-sm">"{t.quote}"</p>
              <div>
                <div className="font-bold text-sm">{t.author}</div>
                <div className="text-xs text-white/40 mt-0.5">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
