import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, XOctagon } from "lucide-react";
import { Link } from "wouter";

interface ProblemSolutionSplitProps {
  title: string;
  problem: string;
  solution: string;
  metrics: { label: string; value: string }[];
}

export function ProblemSolutionSplit({ title, problem, solution, metrics }: ProblemSolutionSplitProps) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 mt-16 glass rounded-3xl overflow-hidden relative">
        {/* Central Divider Line (Desktop) */}
        <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-[1px] bg-gradient-to-b from-white/0 via-white/20 to-white/0 -translate-x-1/2" />
        
        {/* Problem Section */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12"
        >
          <div className="inline-flex items-center space-x-2 text-accent bg-accent/10 px-4 py-2 rounded-full mb-6 font-medium">
            <XOctagon size={18} />
            <span>El Problema</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Status Quo Ineficiente</h3>
          <p className="text-white/70 text-lg leading-relaxed">
            {problem}
          </p>
        </motion.div>

        {/* Solution Section */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 bg-primary/5"
        >
          <div className="inline-flex items-center space-x-2 text-primary bg-primary/10 px-4 py-2 rounded-full mb-6 font-medium">
            <CheckCircle2 size={18} />
            <span>Nuestra Solución</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Arquitectura Optimizada</h3>
          <p className="text-white/80 text-lg leading-relaxed mb-10">
            {solution}
          </p>

          <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-xs md:text-sm text-white/50 uppercase tracking-wider">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA Box */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 glass rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between neon-border"
      >
        <div>
          <h4 className="text-2xl font-bold text-white mb-2">¿Listo para transformar tus operaciones?</h4>
          <p className="text-white/60">Hablemos de tu caso específico y descubramos oportunidades de optimización.</p>
        </div>
        <div className="mt-6 md:mt-0">
          <Link href="/contacto" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(21,245,186,0.5)] transition-all">
            Agendar consultoría <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
