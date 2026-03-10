import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ParticleBackground } from "@/components/ParticleBackground";
import { 
  SERVICES, METRICS, CLIENTS, METHODOLOGY_STEPS, TESTIMONIALS, 
  PUBLICATIONS, FAQ, AGENDA_SLOTS 
} from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const stackSectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Service cards animation
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

    // Sticky stacking animation for home sections
    const stackContainer = document.getElementById("sticky-stack-container");
    if (stackContainer) {
      stackSectionsRef.current.forEach((section, index) => {
        if (!section) return;

        gsap.to(section, {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "center center",
            scrub: 1,
            markers: false,
          }
        });

        // Set z-index progressively
        section.style.zIndex = String(10 + index);
        section.style.position = "relative";
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-12 overflow-hidden">
        <ParticleBackground />
        
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

      {/* Metrics Section */}
      <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {METRICS.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="text-primary" size={32} />
                </div>
                <div className="text-3xl md:text-4xl font-black mb-2">{metric.number}</div>
                <div className="text-white/60 text-sm">{metric.label}</div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Empresas que confían en mí</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CLIENTS.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl text-center hover:border-primary/50 transition-colors"
            >
              <div className="text-5xl mb-4">{client.logo}</div>
              <h3 className="font-bold text-lg mb-2">{client.name}</h3>
              <p className="text-white/50 text-sm">{client.description}</p>
            </motion.div>
          ))}
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

      {/* Methodology Section */}
      <section className="py-32 px-4 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">Mi Metodología</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {METHODOLOGY_STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              <div className="glass-card p-8 rounded-2xl h-full">
                <div className="text-5xl font-black text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-white/60">{step.description}</p>
              </div>
              
              {index < METHODOLOGY_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="text-primary/30" size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-4 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">Testimonios</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-white/80 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-32 px-4 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">Publicaciones</h2>
        
        <div className="space-y-6">
          {PUBLICATIONS.map((pub, index) => (
            <motion.a
              key={index}
              href={pub.url}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl flex items-start justify-between hover:border-primary/50 transition-colors group"
            >
              <div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{pub.title}</h3>
                <p className="text-white/60 text-sm">{pub.publisher} • {pub.date}</p>
              </div>
              <ArrowRight className="text-white/40 group-hover:text-primary transition-colors flex-shrink-0 ml-4" size={20} />
            </motion.a>
          ))}
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-32 px-4 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Últimos Insights</h2>
        <p className="text-center text-white/60 mb-20 max-w-2xl mx-auto">
          Análisis profundos sobre arquitectura, plataformas y futuro del ecosistema digital.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index - 1) * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden hover:border-primary/50 transition-colors group"
            >
              <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20" />
              <div className="p-8">
                <span className="text-xs font-semibold text-primary uppercase">Arquitectura</span>
                <h3 className="text-xl font-bold my-3">Escalabilidad en Plataformas</h3>
                <p className="text-white/60 text-sm mb-6">Análisis detallado de cómo diseñar sistemas que crecen sin dolor.</p>
                <div className="text-white/40 text-xs">Hace 2 semanas</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-32 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Sobre Mí</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Ex-líder técnico en Rappi y DiDi Food. Cofundador de GhostKitchens. Experto en arquitectura escalable para marketplaces y plataformas que crecen 10x en 18 meses.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              He manejado más de $2B en GMV, liderado equipos de 50+ personas y asesorado startups que hoy son unicornios.
            </p>
            <Link 
              href="/sobre-mi"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-xl hover:bg-primary/10 transition-all"
            >
              Ver trayectoria completa <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-card p-12 rounded-3xl text-center"
          >
            <div className="text-8xl mb-6">👨‍💻</div>
            <p className="text-white/60 mb-8 italic">
              "Creo que la arquitectura es el arte de tomar decisiones complejas y hacerlas simples para que un equipo pequeño pueda escalar infinitamente."
            </p>
            <div className="pt-8 border-t border-white/10">
              <div className="text-2xl font-bold mb-2">5+ años</div>
              <p className="text-white/60">En ecosistema LATAM</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-4 md:px-12 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">Preguntas Frecuentes</h2>
        
        <div className="space-y-4">
          {FAQ.map((item, index) => (
            <motion.div
              key={index}
              ref={el => faqRefs.current[index] = el}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className={`glass-card rounded-2xl overflow-hidden ${expandedFaq === index ? 'expanded' : ''}`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
              >
                <h3 className="text-lg font-bold">{item.question}</h3>
                <motion.div
                  animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="flex-shrink-0" size={20} />
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: expandedFaq === index ? "auto" : 0, opacity: expandedFaq === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6">
                  <p className="text-white/70">{item.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Agenda Section */}
      <section className="py-32 px-4 md:px-12 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Agendar Consultoría</h2>
        <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">
          Selecciona un horario disponible para una sesión de 30 minutos.
        </p>

        <div className="glass-card p-12 rounded-3xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AGENDA_SLOTS.map((slot, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                disabled={!slot.available}
                className={`p-4 rounded-xl font-semibold transition-all ${
                  slot.available 
                    ? 'bg-primary/10 border border-primary text-primary hover:bg-primary/20' 
                    : 'bg-white/5 border border-white/10 text-white/40 cursor-not-allowed'
                }`}
              >
                {slot.time}
                {!slot.available && <span className="ml-2 text-xs">No disponible</span>}
              </motion.button>
            ))}
          </div>

          <Link
            href="/contacto"
            className="w-full mt-12 px-8 py-4 rounded-xl font-bold bg-accent hover:bg-accent/90 text-white shadow-[0_0_20px_rgba(187,0,170,0.4)] transition-all flex items-center justify-center"
          >
            Continuar con selección <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
