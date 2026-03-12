"use client";

import { motion } from "framer-motion";
import { Video, Clock, ArrowRight, Youtube, Monitor, Sparkles } from "lucide-react";

/* ─── Data de Videos (Aquí pegas tus IDs de YouTube) ────────── */
const VIDEOS = [
  {
    title: "IA para emprendedores no técnicos",
    category: "Tech para Humanos",
    duration: "05:20",
    desc: "Cómo usar agentes de IA para automatizar tareas sin saber programar.",
    youtubeId: "dQw4w9WgXcQ", // Reemplaza con tu ID real
    accent: "#b44fdf"
  },
  {
    title: "Diseño de Pitch Decks en Canva",
    category: "Canva Tips",
    duration: "08:15",
    desc: "Trucos avanzados para presentaciones que consiguen inversión real.",
    youtubeId: "dQw4w9WgXcQ", 
    accent: "#5effd8"
  }
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] },
});

export default function VideosPage() {
  return (
    <>
      <style>{`
        .video-container {
          position: relative;
          padding-bottom: 56.25%; /* Relación 16:9 */
          height: 0;
          overflow: hidden;
          border-radius: 20px;
          background: #000;
          box-shadow: 0 0 20px rgba(180, 79, 223, 0.05);
        }
        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
        .video-card {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          transition: all 0.4s ease;
        }
        .video-card:hover {
          border-color: rgba(180, 79, 223, 0.3);
          transform: translateY(-5px);
        }
      `}</style>

      <div className="min-h-screen relative z-10 pt-32 pb-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <motion.div {...fadeUp(0)} className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Youtube className="text-red-500 w-5 h-5" />
              <span className="font-mono text-[10px] tracking-[.3em] uppercase text-purple-400/80">
                YouTube Streamed Content
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Tech para <span className="italic font-light text-purple-300/60">Humanos</span>
            </h1>
          </motion.div>

          {/* Grid de Videos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {VIDEOS.map((video, i) => (
              <motion.div key={i} {...fadeUp(0.1 * i)} className="video-card rounded-[32px] p-6">
                
                {/* Iframe Wrapper */}
                <div className="video-container mb-8">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&showinfo=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Info */}
                <div className="px-2">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-[9px] tracking-widest text-purple-400 uppercase">
                      {video.category}
                    </span>
                    <div className="flex items-center gap-2 text-white/30 font-mono text-[10px]">
                      <Clock size={12} /> {video.duration}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 italic">{video.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-6">{video.desc}</p>
                  
                  <a 
                    href={`https://youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white/60 hover:text-white transition-colors"
                  >
                    Ver en YouTube <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Banner de Suscripción */}
          <motion.div {...fadeUp(0.4)} className="mt-24 p-12 rounded-[40px] bg-white/5 border border-white/10 text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-purple-600/5 -z-10" />
             <Sparkles className="mx-auto text-yellow-500 mb-6 w-8 h-8 opacity-40" />
             <h2 className="text-3xl font-bold text-white mb-4">¿Te gusta este contenido?</h2>
             <p className="text-white/40 mb-8 max-w-md mx-auto italic">Suscríbete a mi canal para no perderte ninguna actualización sobre el mundo de las startups y la IA.</p>
             <button className="px-12 py-4 bg-red-600 text-white font-mono text-[10px] font-bold tracking-widest uppercase rounded-full hover:bg-red-500 transition-all shadow-lg shadow-red-600/20">
               Suscribirme ahora
             </button>
          </motion.div>

        </div>
      </div>
    </>
  );
}