'use client';

import { motion } from 'framer-motion';
import { METRICS } from '@/lib/constants';

export function Metrics() {
  return (
    <section className="py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {METRICS.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl glass-card flex items-center justify-center">
                <metric.icon className="text-primary" size={24} />
              </div>
              <div className="text-3xl md:text-4xl font-black text-primary mb-2">{metric.number}</div>
              <div className="text-sm text-white/60 uppercase tracking-wide">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
