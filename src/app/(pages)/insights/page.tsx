"use client";

import { motion } from "framer-motion";
import { INSIGHTS, PUBLICATIONS } from "@/lib/constants";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function InsightsPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-16 pb-24 px-6 md:px-16 md:mr-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm uppercase tracking-widest mb-4">Publicaciones</p>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Insights & <span className="text-gradient">Análisis</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl">
            Perspectivas desde el campo sobre tecnología, plataformas y operaciones en LATAM.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {INSIGHTS.map((insight, i) => (
            <motion.article
              key={insight.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <span className="absolute top-4 left-4 bg-primary/20 text-primary text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm">
                  {insight.category}
                </span>
              </div>
              <div className="p-6">
                <p className="text-white/40 text-xs mb-3">{insight.date}</p>
                <h2 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-primary transition-colors">
                  {insight.title}
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">{insight.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div>
          <h2 className="text-3xl font-black mb-8">Publicaciones externas</h2>
          <div className="space-y-4">
            {PUBLICATIONS.map((pub, i) => (
              <motion.a
                key={i}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between glass-card rounded-xl p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div>
                  <p className="text-primary text-xs font-mono uppercase tracking-widest mb-1">
                    {pub.publisher} · {pub.date}
                  </p>
                  <h3 className="font-bold text-white group-hover:text-primary transition-colors">
                    {pub.title}
                  </h3>
                </div>
                <ExternalLink size={18} className="text-white/30 group-hover:text-primary transition-colors shrink-0 ml-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
