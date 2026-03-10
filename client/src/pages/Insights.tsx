import { motion } from "framer-motion";
import { Link } from "wouter";
import { INSIGHTS } from "@/lib/constants";
import { ArrowRight, Clock } from "lucide-react";

export default function Insights() {
  return (
    <div className="px-4 md:px-12 py-24 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20"
      >
        <h1 className="text-5xl md:text-6xl font-black mb-6">Perspectivas e <span className="text-gradient">Insights</span></h1>
        <p className="text-xl text-white/60 max-w-2xl">
          Análisis profundo sobre tecnología, operaciones y el futuro de las plataformas digitales.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {INSIGHTS.map((insight, index) => (
          <motion.article 
            key={insight.id}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-3xl overflow-hidden group flex flex-col"
          >
            <div className="relative h-60 overflow-hidden border-b border-white/10">
              <div className="absolute inset-0 bg-background/20 z-10 group-hover:bg-transparent transition-colors duration-300" />
              {/* landing page hero scenic mountain landscape placeholder for tech blog */}
              <img 
                src={insight.image} 
                alt={insight.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 z-20 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-semibold text-primary uppercase tracking-wider">
                {insight.category}
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center text-sm text-white/40 mb-4">
                <Clock size={14} className="mr-2" />
                {insight.date}
              </div>
              
              <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                {insight.title}
              </h2>
              
              <p className="text-white/60 leading-relaxed mb-8 flex-1">
                {insight.excerpt}
              </p>
              
              <Link href={`#`} className="inline-flex items-center text-primary font-bold group/btn">
                Leer artículo 
                <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
