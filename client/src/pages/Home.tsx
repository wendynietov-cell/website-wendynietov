import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ParticleBackground } from "@/components/ParticleBackground";
import { SERVICES } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // GSAP Scroll Animations for cards
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      gsap.fromTo(card, 
        { 
          opacity: 0, 
          y: 50, 
          rotationY: 15,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          delay: index * 0.1
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-12 overflow-hidden">
        <ParticleBackground />
        
        {/* Glow Effects behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[40vw] h-[40vh] bg-accent/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block border border-primary/50 text-primary bg-primary/10 rounded-full px-5 py-2.5 text-sm md:text-base font-semibold mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(21,245,186,0.2)]">
              +15 proyectos implementados | 5 años en LatAm
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Arquitectura Estratégica para <br className="hidden md:block" />
            <span className="text-gradient">Plataformas Digitales</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Consultoría para startups de alta velocidad: Rappi, DiDi, Ghost Kitchens, cocinas ocultas y creadores UGC.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link 
              href="/servicios" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-accent hover:bg-accent/90 text-white shadow-[0_0_20px_rgba(187,0,170,0.4)] hover:shadow-[0_0_30px_rgba(187,0,170,0.6)] transition-all flex items-center justify-center"
            >
              Ver servicios <ArrowRight className="ml-2" size={20} />
            </Link>
            
            <Link 
              href="/contacto" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold border-2 border-primary text-primary hover:bg-primary/10 transition-all flex items-center justify-center group"
            >
              Agendar consultoría <Calendar className="ml-2 group-hover:scale-110 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-32 px-4 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Áreas de Especialidad</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Soluciones robustas probadas en entornos de hipercrecimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-[1000px]">
          {SERVICES.map((service, index) => (
            <div 
              key={service.slug} 
              ref={el => cardsRef.current[index] = el}
              className="h-full"
            >
              <Link href={`/servicios/${service.slug}`} className="block h-full">
                <motion.div 
                  whileHover={{ 
                    y: -8, 
                    boxShadow: '0 0 30px rgba(21, 245, 186, 0.15)',
                    borderColor: 'rgba(21, 245, 186, 0.4)'
                  }}
                  className="glass-card p-10 rounded-3xl h-full flex flex-col relative overflow-hidden group transition-colors duration-300"
                >
                  {/* Subtle hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-primary/10 group-hover:text-primary transition-colors text-white">
                    <service.icon size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed mb-8 flex-1">
                    {service.shortDesc}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                    {service.metrics.map((m, i) => (
                      <div key={i}>
                        <div className="text-primary font-bold text-lg mb-1">{m.value}</div>
                        <div className="text-xs text-white/40 uppercase tracking-wider">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
