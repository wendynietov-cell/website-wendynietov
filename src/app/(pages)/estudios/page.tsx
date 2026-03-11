"use client";

import { motion } from "framer-motion";
import { STUDIES, SKILLS, METRICS } from "@/lib/constants";
import Image from "next/image";

export default function EstudiosPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-16 pb-24 px-6 md:px-16 md:mr-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm uppercase tracking-widest mb-4">Trayectoria</p>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Estudios & <span className="text-gradient">Experiencia</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl">
            15 años construyendo la infraestructura detrás de los marketplaces de delivery más grandes de LATAM.
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {METRICS.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-black text-primary mb-1">{metric.number}</div>
              <div className="text-xs text-white/50 uppercase tracking-wide">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-black mb-12">Experiencia profesional</h2>
          <div className="space-y-8">
            {STUDIES.map((study, i) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden flex flex-col md:flex-row"
              >
                <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0">
                  <Image
                    src={study.image}
                    alt={study.company}
                    fill
                    className="object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80 hidden md:block" />
                </div>
                <div className="p-8">
                  <span className="text-primary font-mono text-xs uppercase tracking-widest">{study.period}</span>
                  <h3 className="text-2xl font-bold mt-2 mb-1">{study.title}</h3>
                  <p className="text-accent font-medium mb-4">{study.company}</p>
                  <p className="text-white/70 leading-relaxed">{study.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-3xl font-black mb-10">Stack técnico</h2>
          <div className="space-y-5">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <skill.icon size={16} className="text-primary" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                  <span className="text-primary font-mono text-xs">{skill.percentage}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
