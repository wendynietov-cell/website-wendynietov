import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, MapPin, Mail as MailIcon, Phone } from "lucide-react";
import { useCreateContact } from "@/hooks/use-contacts";
import { useToast } from "@/hooks/use-toast";

// Extracted schema definition from the prompt
const contactSchema = z.object({
  name: z.string().min(2, "El nombre es muy corto"),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres")
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const createContact = useCreateContact();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await createContact.mutateAsync(data);
      setIsSubmitted(true);
      toast({
        title: "Mensaje enviado",
        description: "Me pondré en contacto contigo pronto.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error al enviar",
        description: error.message || "Intenta nuevamente más tarde.",
      });
    }
  };

  return (
    <div className="px-4 md:px-12 py-24 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-black mb-6">Iniciemos una <span className="text-gradient">Conversación</span></h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          ¿Tienes un desafío operativo o tecnológico complejo? Escríbeme y evaluemos cómo puedo ayudarte a escalar.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-1 space-y-6"
        >
          <div className="glass-card p-8 rounded-3xl flex items-start space-x-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <MailIcon size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">Email</h3>
              <p className="text-white/60">hello@techconsult.lat</p>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-3xl flex items-start space-x-6">
            <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">Teléfono</h3>
              <p className="text-white/60">+57 300 000 0000</p>
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl flex items-start space-x-6">
            <div className="w-12 h-12 rounded-xl bg-white/5 text-white flex items-center justify-center shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">Ubicación</h3>
              <p className="text-white/60">Bogotá, Colombia<br/>Disponible remoto global</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 glass p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden"
        >
          {isSubmitted ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/50 backdrop-blur-sm z-10">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-6">
                <Send size={40} />
              </div>
              <h3 className="text-3xl font-bold mb-4">¡Gracias por escribir!</h3>
              <p className="text-white/60 text-center max-w-sm">He recibido tu mensaje. Me pondré en contacto contigo en las próximas 24-48 horas.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 px-6 py-3 rounded-lg border border-white/20 hover:bg-white/5 transition-colors"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : null}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Nombre completo</label>
                <input 
                  {...register("name")}
                  className={`w-full bg-black/20 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`}
                  placeholder="Ej. Juan Pérez"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Correo electrónico</label>
                <input 
                  {...register("email")}
                  className={`w-full bg-black/20 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`}
                  placeholder="ejemplo@empresa.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Mensaje</label>
              <textarea 
                {...register("message")}
                rows={6}
                className={`w-full bg-black/20 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none`}
                placeholder="Cuéntame sobre tu proyecto o desafío actual..."
              />
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary to-primary/80 text-background font-bold text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(21,245,186,0.3)] hover:shadow-[0_0_30px_rgba(21,245,186,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
