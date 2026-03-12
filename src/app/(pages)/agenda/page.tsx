"use client";

import { motion } from "framer-motion";
import AgendaWidget from "@/components/features/AgendaWidget";

export default function AgendaPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        
        /* Bloqueamos el scroll del sitio para que parezca una App */
        html, body { 
          overflow: hidden; 
          height: 100vh;
          background: #06060f;
        }

        @keyframes scanDown { from{top:0} to{top:100vh} }
      `}</style>

      {/* Línea de escaneo estética */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-0 pointer-events-none opacity-[.05]"
        style={{ background: "linear-gradient(90deg,transparent,#b44fdf,#e040a0,transparent)", animation: "scanDown 10s linear infinite" }} />

      {/* Contenedor que ocupa el 100% del alto visible */}
      <main className="relative h-screen w-full flex items-center justify-center p-4 md:p-8 z-10">
        
        {/* Glow ambiental */}
        <div className="absolute w-[60%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          /* flex-col es vital aquí para que la cabecera y el contenido se apilen */
          className="relative w-full max-w-6xl h-full max-h-[85vh] rounded-[2.5rem] border border-white/10 bg-[#0d0d1a]/40 backdrop-blur-3xl overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Cabecera Estilo Ventana */}
          <div className="flex items-center justify-between px-8 py-4 border-b border-white/5 bg-white/[0.02] shrink-0">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500/20" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
              <div className="w-2 h-2 rounded-full bg-green-500/20" />
            </div>
            <span className="font-mono text-[9px] tracking-[.4em] uppercase text-white/20">BuscArt / Scheduling Interface</span>
            <div className="w-10" />
          </div>

          {/* CONTENEDOR DEL WIDGET: flex-1 hace que use todo el espacio restante */}
          <div className="flex-1 w-full overflow-hidden relative">
            <AgendaWidget fadeUp={() => ({})} />
          </div>
        </motion.div>

      </main>
    </>
  );
}