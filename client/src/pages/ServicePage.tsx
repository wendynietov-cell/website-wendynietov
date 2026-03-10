import { useRoute } from "wouter";
import { SERVICES } from "@/lib/constants";
import { ProblemSolutionSplit } from "@/components/ProblemSolutionSplit";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function ServicePage() {
  const [, params] = useRoute("/servicios/:slug");
  const slug = params?.slug;
  
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col">
        <h1 className="text-4xl font-bold mb-4">Servicio no encontrado</h1>
        <Link href="/" className="text-primary hover:underline">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-12 py-24 max-w-6xl mx-auto">
      <Link href="/servicios" className="inline-flex items-center text-white/50 hover:text-primary transition-colors mb-12">
        <ArrowLeft size={20} className="mr-2" />
        Todos los servicios
      </Link>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-16"
      >
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_30px_rgba(21,245,186,0.2)]">
          <service.icon size={40} />
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black">{service.title}</h1>
          <p className="text-xl text-white/60 mt-4 max-w-2xl">{service.shortDesc}</p>
        </div>
      </motion.div>

      <ProblemSolutionSplit 
        title={service.title}
        problem={service.problem}
        solution={service.solution}
        metrics={service.metrics}
      />
    </div>
  );
}
