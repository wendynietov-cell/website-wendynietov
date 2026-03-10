import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STUDIES, SKILLS } from "@/lib/constants";
import { Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Estudios() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Timeline animation
    const timelineItems = gsap.utils.toArray('.timeline-item');
    
    timelineItems.forEach((item: any, i) => {
      gsap.fromTo(item, 
        { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
        {
          opacity: 1, x: 0, duration: 0.8,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          }
        }
      );
    });

    // Progress bars animation
    const bars = gsap.utils.toArray('.skill-progress');
    bars.forEach((bar: any) => {
      const width = bar.getAttribute('data-width');
      gsap.fromTo(bar, 
        { width: 0 },
        { 
          width: `${width}%`, 
          duration: 1.5, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 75%",
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="px-4 md:px-12 py-24 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-6xl font-black mb-6">Trayectoria <span className="text-gradient">Profesional</span></h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          Experiencia forjada en las empresas de mayor crecimiento de la región.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative mb-32" ref={timelineRef}>
        {/* Line */}
        <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2" />
        
        <div className="space-y-12 md:space-y-24">
          {STUDIES.map((study, index) => (
            <div key={study.id} className={`timeline-item relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Center Dot */}
              <div className="absolute left-[28px] md:left-1/2 w-[16px] h-[16px] rounded-full bg-primary -translate-x-[7px] md:-translate-x-1/2 mt-8 md:mt-0 shadow-[0_0_15px_rgba(21,245,186,0.8)] z-10" />

              <div className={`pl-20 md:pl-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                <div className="glass-card p-8 rounded-3xl hover:border-primary/30 transition-colors group relative overflow-hidden">
                  
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors pointer-events-none" />

                  <div className={`flex items-center space-x-3 mb-4 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                    <Briefcase className="text-primary" size={20} />
                    <span className="text-primary font-bold">{study.period}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-2">{study.title}</h3>
                  <div className="text-xl text-accent font-semibold mb-6">{study.company}</div>
                  
                  <p className="text-white/70 leading-relaxed mb-6">
                    {study.description}
                  </p>
                  
                  {/* landing page hero scenic mountain landscape placeholder for company imagery */}
                  <div className="rounded-xl overflow-hidden h-48 border border-white/10">
                    <img 
                      src={study.image} 
                      alt={study.company} 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Matrix */}
      <div ref={skillsRef} className="glass p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
        
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Matriz de Habilidades</h2>
        
        <div className="space-y-8 max-w-3xl mx-auto relative z-10">
          {SKILLS.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-3">
                <div className="flex items-center space-x-3 text-lg font-medium">
                  <skill.icon className="text-primary" size={20} />
                  <span>{skill.name}</span>
                </div>
                <span className="text-white/50">{skill.percentage}%</span>
              </div>
              <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
                <div 
                  className="skill-progress h-full bg-gradient-to-r from-primary to-accent rounded-full relative"
                  data-width={skill.percentage}
                >
                  <div className="absolute inset-0 bg-white/20 w-full animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
