"use client";

import { motion } from "framer-motion";
import { SKILLS, STUDIES } from "@/lib/constants";
import { Github, Linkedin, Twitter, Download } from "lucide-react";
import Image from "next/image";

export default function SobreMiPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-16 pb-24 px-6 md:px-16 md:mr-20">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24"
        >
          <div>
            <p className="text-primary font-mono text-sm uppercase tracking-widest mb-4">Sobre Mí</p>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Arquitecto de<br />
              <span className="text-gradient">Plataformas</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              15 años diseñando la infraestructura tecnológica detrás de los marketplaces más grandes de LATAM.
              Desde matching algorítmico hasta sistemas de ghost kitchens a escala.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(21,245,186,0.4)] transition-all"
              >
                <Download size={18} /> Descargar CV
              </a>
              <div className="flex gap-3 items-center">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-xl text-white/60 hover:text-primary transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-xl text-white/60 hover:text-primary transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-xl text-white/60 hover:text-primary transition-colors">
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full aspect-square max-w-sm mx-auto rounded-3xl overflow-hidden glass-card border border-white/10">
              <Image
                src={STUDIES[0].image}
                alt="Wendy Nieto"
                fill
                className="object-cover opacity-80"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 glass-card rounded-2xl px-6 py-4 border border-primary/30">
              <div className="text-3xl font-black text-primary">15+</div>
              <div className="text-xs text-white/60 uppercase tracking-wide">Años de exp.</div>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-black mb-10">Stack & <span className="text-gradient">Habilidades</span></h2>
          <div className="space-y-6">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <skill.icon size={18} className="text-primary" />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-primary font-mono text-sm">{skill.percentage}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <div>
          <h2 className="text-3xl font-black mb-10">Experiencia</h2>
          <div className="relative border-l border-white/10 pl-8 space-y-12">
            {STUDIES.map((study, i) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-primary border-4 border-background" />
                <p className="text-primary font-mono text-xs uppercase tracking-widest mb-1">{study.period}</p>
                <h3 className="text-xl font-bold mb-1">{study.title}</h3>
                <p className="text-accent text-sm font-medium mb-3">{study.company}</p>
                <p className="text-white/60 leading-relaxed">{study.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
