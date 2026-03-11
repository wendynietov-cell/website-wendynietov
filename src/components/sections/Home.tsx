'use client';

import { motion } from "framer-motion";
import { METRICS, SERVICES, TESTIMONIALS, CLIENTS } from "@/lib/constants";
import { ArrowRight, Briefcase, TrendingUp, Users, Zap, Award, Quote, Star, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NAVIGATION } from "@/lib/constants";

export default function Home() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);
  return (
    <main className="min-h-screen relative">
      {/* Background atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full blur-[90px] opacity-[0.35] bg-gradient-to-r from-purple-500 to-transparent top-[-150px] right-[-100px] animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[90px] opacity-[0.35] bg-gradient-to-r from-pink-500 to-transparent bottom-[10%] left-[-120px] animate-pulse"></div>
        <div className="absolute w-[350px] h-[350px] rounded-full blur-[90px] opacity-[0.18] bg-gradient-to-r from-emerald-400 to-transparent top-[40%] left-[40%] animate-pulse"></div>
      </div>
      
      {/* Mesh grid */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-transparent via-emerald-400/4 to-transparent bg-[length:72px_72px]"></div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 w-full h-16 glass z-50 flex items-center justify-between px-6">
        <span className="font-bold text-lg bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">TechConsult.</span>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white hover:text-emerald-400 transition-colors"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-xl pt-20 px-6 pb-6 overflow-y-auto"
        >
          <div className="flex flex-col space-y-6 mt-8">
            {NAVIGATION.map((item) => (
              <div key={item.path}>
                <Link
                  href={item.path}
                  className={`flex items-center text-xl font-medium ${pathname === item.path ? "text-emerald-400" : "text-white"}`}
                >
                  <item.icon className="mr-4" size={24} />
                  {item.name}
                </Link>
                {item.subLinks && (
                  <div className="ml-10 mt-4 flex flex-col space-y-4 border-l border-white/10 pl-4">
                    {item.subLinks.map((sub) => (
                      <Link
                        key={sub.path}
                        href={sub.path}
                        className={`block text-lg ${pathname === sub.path ? "text-emerald-400" : "text-white/70"}`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
      {/* Enhanced Hero Section */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center px-6 md:px-16 pt-24 md:pt-16 relative z-1">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 glass-card rounded-full"
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">Disponible para proyectos</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4">
              <span className="block text-white">Especialista en</span>
              <span className="block italic font-light bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">Tech Sales</span>
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">que cierra deals.</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-white/70 leading-relaxed max-w-lg"
          >
            Hola, soy <strong className="text-emerald-300 font-semibold">Wendy Nieto</strong>. Ayudo a empresas tech a escalar su revenue con estrategia consultiva, pipelines sólidos y relaciones que duran. No solo vendo — <strong className="text-emerald-300 font-semibold">construyo.</strong>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-purple-500 text-white px-9 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-purple-500/40 transition-all"
            >
              Trabajemos juntos
              <ArrowRight size={20} />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 glass-card px-9 py-4 rounded-full font-bold hover:bg-white/10 transition-all border border-emerald-400/20"
            >
              <Briefcase size={20} />
              Ver servicios
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex gap-0 pt-10 border-t border-emerald-400/10"
          >
            <div className="flex-1 pr-8 border-r border-emerald-400/10">
              <div className="text-3xl font-black bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">+$5M</div>
              <div className="font-mono text-xs text-white/60 uppercase tracking-wider mt-1">Deals cerrados</div>
            </div>
            <div className="flex-1 px-8 border-r border-emerald-400/10">
              <div className="text-3xl font-black bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">120%</div>
              <div className="font-mono text-xs text-white/60 uppercase tracking-wider mt-1">Quota achieved</div>
            </div>
            <div className="flex-1 pl-8">
              <div className="text-3xl font-black bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">8+ yrs</div>
              <div className="font-mono text-xs text-white/60 uppercase tracking-wider mt-1">En tech sales</div>
            </div>
          </motion.div>
        </div>
        
        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="relative hidden lg:flex items-center justify-center h-[560px]"
        >
          <div className="absolute w-[460px] h-[460px] border border-purple-500/12 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin"></div>
          <div className="absolute w-[360px] h-[360px] border border-emerald-400/8 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin" style={{ animationDirection: 'reverse' }}></div>
          
          <div className="w-[300px] glass-card rounded-3xl p-10 text-center relative z-5 border border-purple-500/30">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-rose-500 to-purple-500 mx-auto mb-5 flex items-center justify-center text-4xl relative shadow-lg shadow-purple-500/50">
              👩‍💼
            </div>
            <div className="text-xl font-bold text-white mb-2">Wendy Nieto</div>
            <div className="font-mono text-xs text-emerald-400 uppercase tracking-wider mb-6">Tech Sales · LATAM & USA</div>
            <div className="h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent mb-6"></div>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="px-3 py-1 bg-emerald-400/10 border border-emerald-400/25 rounded-full text-xs font-semibold text-emerald-400">SaaS</span>
              <span className="px-3 py-1 bg-rose-500/10 border border-rose-500/25 rounded-full text-xs font-semibold text-rose-300">Enterprise</span>
              <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/25 rounded-full text-xs font-semibold text-purple-300">B2B</span>
              <span className="px-3 py-1 bg-emerald-400/10 border border-emerald-400/25 rounded-full text-xs font-semibold text-emerald-400">Pipeline</span>
              <span className="px-3 py-1 bg-rose-500/10 border border-rose-500/25 rounded-full text-xs font-semibold text-rose-300">RevOps</span>
              <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/25 rounded-full text-xs font-semibold text-purple-300">GTM</span>
            </div>
          </div>
          
          <div className="absolute top-10 right-[-20px] glass-card rounded-2xl p-4 border border-emerald-400/20 animate-bounce">
            <div className="font-mono text-xs text-white/60 uppercase tracking-wider mb-1">Win Rate</div>
            <div className="text-2xl font-bold text-emerald-400">67%</div>
            <div className="text-xs text-white/60">Industry avg 21%</div>
          </div>
          <div className="absolute bottom-14 left-[-30px] glass-card rounded-2xl p-4 border border-rose-500/20 animate-bounce" style={{ animationDelay: '0.5s' }}>
            <div className="font-mono text-xs text-white/60 uppercase tracking-wider mb-1">Pipeline activo</div>
            <div className="text-2xl font-bold text-rose-300">$2.4M</div>
            <div className="text-xs text-white/60">↑ 34% vs Q anterior</div>
          </div>
          <div className="absolute top-1/2 right-[-50px] -translate-y-1/2 glass-card rounded-2xl p-4 border border-purple-500/20 animate-bounce" style={{ animationDelay: '1s' }}>
            <div className="font-mono text-xs text-white/60 uppercase tracking-wider mb-1">Avg Deal</div>
            <div className="text-2xl font-bold text-purple-300">$85K</div>
            <div className="text-xs text-white/60">Enterprise focus</div>
          </div>
        </motion.div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {METRICS.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl glass-card flex items-center justify-center">
                  <metric.icon className="text-primary" size={24} />
                </div>
                <div className="text-3xl md:text-4xl font-black text-primary mb-2">
                  {metric.number}
                </div>
                <div className="text-sm text-white/60 uppercase tracking-wide">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-10 overflow-hidden border-t border-emerald-400/7 border-b border-emerald-400/7 relative z-1">
        <div className="flex gap-15 animate-scroll">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-15">
              <div className="flex items-center gap-4 font-semibold text-sm tracking-wider uppercase text-white/60 whitespace-nowrap">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400"></div>
                Sales Strategy
              </div>
              <div className="flex items-center gap-4 font-semibold text-sm tracking-wider uppercase text-white/60 whitespace-nowrap">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-300 shadow-lg shadow-rose-300"></div>
                Pipeline Development
              </div>
              <div className="flex items-center gap-4 font-semibold text-sm tracking-wider uppercase text-white/60 whitespace-nowrap">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-300 shadow-lg shadow-purple-300"></div>
                Enterprise Deals
              </div>
              <div className="flex items-center gap-4 font-semibold text-sm tracking-wider uppercase text-white/60 whitespace-nowrap">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400"></div>
                GTM Planning
              </div>
              <div className="flex items-center gap-4 font-semibold text-sm tracking-wider uppercase text-white/60 whitespace-nowrap">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-300 shadow-lg shadow-rose-300"></div>
                RevOps
              </div>
              <div className="flex items-center gap-4 font-semibold text-sm tracking-wider uppercase text-white/60 whitespace-nowrap">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-300 shadow-lg shadow-purple-300"></div>
                Sales Coaching
              </div>
              <div className="flex items-center gap-4 font-semibold text-sm tracking-wider uppercase text-white/60 whitespace-nowrap">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400"></div>
                LATAM & USA
              </div>
              <div className="flex items-center gap-4 font-semibold text-sm tracking-wider uppercase text-white/60 whitespace-nowrap">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-300 shadow-lg shadow-rose-300"></div>
                SaaS & Tech
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview - Original */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Servicios <span className="text-gradient">Especializados</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Soluciones tecnológicas end-to-end para marketplaces, ghost kitchens y economías creativas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.slice(0, 4).map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 hover:bg-white/5 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl glass-card flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{service.shortDesc}</p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {service.metrics.map((metric, j) => (
                    <div key={j} className="text-sm">
                      <span className="text-primary font-bold">{metric.value}</span>
                      <span className="text-white/60 ml-1">{metric.label}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/servicios/${service.slug}`}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  Ver más
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section from home.md */}
      <section className="py-24 px-6 md:px-16 relative z-1" id="services">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-16 gap-10 flex-wrap">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-4">
                <div className="w-6 h-px bg-emerald-400"></div>
                Servicios Tech Sales
              </div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Lo que puedo hacer<br />por tu <span className="italic font-light bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">negocio</span>
              </h2>
            </div>
            <p className="max-w-sm text-white/70 leading-relaxed text-right">
              Estrategia de ventas tech con enfoque consultivo, orientada a resultados reales y escalables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                num: "01",
                icon: "🎯",
                name: "Sales Strategy",
                desc: "Diseño de procesos end-to-end desde prospección hasta cierre. Metodologías consultivas para productos tech B2B y SaaS.",
                tag: "Estrategia",
                tagColor: "mint"
              },
              {
                num: "02",
                icon: "🚀",
                name: "Pipeline Development",
                desc: "Construcción y optimización de pipelines de alta conversión. ICP definition, qualification frameworks y deal acceleration.",
                tag: "Crecimiento",
                tagColor: "rose"
              },
              {
                num: "03",
                icon: "🤝",
                name: "Enterprise Partnerships",
                desc: "Relaciones estratégicas con C-suite. Negociaciones complejas con múltiples stakeholders y ciclos largos de venta.",
                tag: "Enterprise",
                tagColor: "purple"
              },
              {
                num: "04",
                icon: "📊",
                name: "Sales Coaching",
                desc: "Entrenamiento de equipos: objection handling, discovery calls efectivas y demos de alto impacto que cierran.",
                tag: "Coaching",
                tagColor: "mint"
              },
              {
                num: "05",
                icon: "⚙️",
                name: "RevOps Consulting",
                desc: "Optimización de tu stack de ventas: CRM, automatización, analytics y enablement para escalar revenue de forma sostenida.",
                tag: "RevOps",
                tagColor: "rose"
              },
              {
                num: "06",
                icon: "🌐",
                name: "GTM Strategy",
                desc: "Go-to-market para productos tech. Segmentación, positioning, pricing y expansión a nuevos mercados en LATAM y USA.",
                tag: "GTM",
                tagColor: "purple"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 border border-emerald-400/20 hover:border-emerald-400/25 transition-all hover:-translate-y-1.5 hover:shadow-lg hover:shadow-emerald-400/5 group"
              >
                <div className="font-mono text-xs text-white/60 mb-7">{service.num}</div>
                <div className="text-4xl mb-5 filter drop-shadow-lg drop-shadow-emerald-400/30">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3.5 text-white">{service.name}</h3>
                <p className="text-white/70 leading-relaxed mb-6 text-sm">{service.desc}</p>
                <span className={`inline-block font-mono text-xs uppercase tracking-wider px-3 py-1.5 rounded-full ${
                  service.tagColor === 'mint' ? 'text-emerald-400 bg-emerald-400/8 border border-emerald-400/20' :
                  service.tagColor === 'rose' ? 'text-rose-300 bg-rose-500/8 border border-rose-500/20' :
                  'text-purple-300 bg-purple-500/8 border border-purple-500/20'
                }`}>
                  {service.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Lo que dicen <span className="text-gradient">Clientes</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Resultados comprobados en los marketplaces más grandes de LATAM
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 relative"
              >
                <Quote className="absolute top-6 right-6 text-primary/20" size={32} />
                <div className="text-2xl mb-4">{testimonial.image}</div>
                <p className="text-white/80 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm text-white/60">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="mx-6 md:mx-16 mb-20 relative z-1 rounded-3xl overflow-hidden" id="contact">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/25 via-rose-500/20 to-emerald-400/10 backdrop-blur-xl"></div>
        <div className="absolute inset-0 rounded-3xl border border-purple-500/30">
          <div className="absolute top-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-rose-500/70 to-transparent"></div>
        </div>
        <div className="relative z-2 p-20 md:p-24 flex justify-between items-center gap-12 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-black leading-tight text-white mb-4">
              ¿Lista para cerrar<br />tu próximo <span className="italic font-light bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">big deal?</span>
            </h2>
            <p className="text-white/65 leading-relaxed max-w-md">
              Conversemos sobre cómo escalar tus ventas tech, construir un pipeline ganador y superar tus objetivos de revenue este año.
            </p>
          </div>
          <div className="flex flex-col gap-3.5 items-start">
            <div className="font-mono text-xs text-emerald-400 opacity-80">wendy@wendynieto.com</div>
            <Link
              href="mailto:wendy@wendynieto.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-purple-500 text-white px-9 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-purple-500/40 transition-all"
            >
              Agendar llamada
              <ArrowRight size={20} />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 glass-card px-9 py-4 rounded-full font-bold hover:bg-white/10 transition-all border border-emerald-400/20"
            >
              Ver LinkedIn
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
