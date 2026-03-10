import { motion } from "framer-motion";
import { Download, Linkedin, Github, Twitter } from "lucide-react";

export default function SobreMi() {
  return (
    <div className="px-4 md:px-12 py-24 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-[3rem] p-8 md:p-16 relative overflow-hidden"
      >
        {/* Decorative Backgrounds */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          
          {/* Avatar Section */}
          <div className="shrink-0 flex flex-col items-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-2 neon-border mb-8">
              <div className="w-full h-full rounded-full overflow-hidden bg-background">
                {/* landing page hero scenic mountain landscape placeholder for portrait */}
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60" 
                  alt="Profile" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:text-primary hover:border-primary/50 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:text-primary hover:border-primary/50 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:text-primary hover:border-primary/50 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block border border-accent/50 text-accent bg-accent/10 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              Tech Leader & Strategist
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              Construyendo la infraestructura del <span className="text-gradient">mañana</span>.
            </h1>
            
            <p className="text-xl text-white/80 font-medium leading-relaxed mb-6 italic border-l-4 border-primary pl-6 text-left">
              "Ex-DiDi. Arquitecto de plataformas especializado en escalar modelos de negocio complejos mediante tecnología y eficiencia operativa."
            </p>
            
            <div className="space-y-6 text-white/60 leading-relaxed mb-10 text-left">
              <p>
                A lo largo de los últimos 7 años, he estado en el centro de la revolución del delivery y las plataformas digitales en Latinoamérica. Mi enfoque no es solo escribir código, sino diseñar arquitecturas tecnológicas que resuelvan cuellos de botella operativos reales.
              </p>
              <p>
                He construido sistemas desde cero para redes de cocinas ocultas, optimizado algoritmos de asignación para reducir tiempos de entrega a nivel continental, y ahora asesoro a startups que enfrentan los dolores de crecimiento (growing pains) que ya he resuelto en el pasado.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 rounded-xl font-bold bg-white text-background hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center">
                Descargar CV <Download className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
