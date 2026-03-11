import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Servicios | Wendy Nieto",
  description: "Consultoría tecnológica en restaurantes, plataformas, ghost kitchens y economía creativa.",
};

export default function ServiciosPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-16 pb-24 px-6 md:px-16 md:mr-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-primary font-mono text-sm uppercase tracking-widest mb-4">Servicios</p>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Soluciones que{" "}
            <span className="text-gradient">escalan</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl">
            Arquitectura estratégica para plataformas que crecen 10x. Cada servicio está diseñado desde la experiencia en campo real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/servicios/${service.slug}`}
              className="glass-card rounded-2xl p-8 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <service.icon size={28} className="text-primary" />
                </div>
                <ArrowRight size={20} className="text-white/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>

              <h2 className="text-xl font-bold text-white mb-3">{service.title}</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6">{service.shortDesc}</p>

              <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
                {service.metrics.map((metric, i) => (
                  <div key={i}>
                    <div className="text-lg font-bold text-primary">{metric.value}</div>
                    <div className="text-xs text-white/40 uppercase tracking-wide">{metric.label}</div>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
