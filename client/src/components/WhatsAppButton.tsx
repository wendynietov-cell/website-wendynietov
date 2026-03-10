import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  // Replace with actual number
  const whatsappUrl = "https://wa.me/573000000000";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-[calc(80px+2.5rem)] z-50 flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-[0_0_20px_rgba(21,245,186,0.6)] cursor-pointer"
      whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(21,245,186,0.8)" }}
      animate={{ y: [0, -12, 0] }}
      transition={{ 
        y: {
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 3
        } 
      }}
    >
      <MessageCircle size={28} />
    </motion.a>
  );
}
