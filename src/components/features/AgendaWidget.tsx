"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

interface AgendaWidgetProps {
  fadeUp: (delay?: number) => object;
  variant?: "desktop" | "mobile";
}

export default function AgendaWidget({ fadeUp }: AgendaWidgetProps) {
  useEffect(() => {
    // Catch and suppress Unhandled Action errors from Cal.com embed
    const handleError = (event: ErrorEvent) => {
      if (event.message && event.message.includes('Unhandled Action')) {
        console.warn('Suppressed Unhandled Action error from Cal.com embed:', event.message);
        event.preventDefault();
      }
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  return (
    <motion.div
      {...fadeUp(0.15)}
      /* Importante: h-full para que use todo el alto del padre */
      className="w-full h-full rounded-2xl overflow-hidden"
      style={{ 
        border: "1px solid rgba(255,255,255,.06)", 
        background: "rgba(255,255,255,.015)" 
      }}
    >
      <iframe
        src="https://cal.com/wendynietov/30min?embed=true&theme=dark&layout=month_view"
        /* Cambiamos height: 900 por 100% */
        style={{ width: "100%", height: "100%", border: "none" }}
        /* CAMBIO CLAVE: Cambiamos "no" por "yes" o "auto" */
        scrolling="yes" 
        allow="camera; microphone; autoplay; fullscreen"
        title="Agenda Wendy Nieto"
        onError={(e) => {
          console.warn('Cal.com embed loading error:', e);
        }}
      />
    </motion.div>
  );
}