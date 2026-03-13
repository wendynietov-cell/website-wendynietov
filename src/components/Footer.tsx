import Link from "next/link";
import { Linkedin, Twitter, Mail, CalendarDays, Lock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 py-8 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div>
          <span className="text-lg font-black bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">
            Wendy Nieto
          </span>
          <p className="font-mono text-xs text-white/40 mt-1 uppercase tracking-wider">
            © {currentYear} · Estratega de Plataformas
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/50 hover:text-primary transition-colors text-sm"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/50 hover:text-primary transition-colors text-sm"
          >
            <Twitter size={15} />
            Twitter
          </a>
          <Link
            href="/contacto"
            className="flex items-center gap-1.5 text-white/50 hover:text-primary transition-colors text-sm"
          >
            <CalendarDays size={15} />
            Agendar
          </Link>
          <a
            href="mailto:wendy@wendynieto.com"
            className="flex items-center gap-1.5 text-white/50 hover:text-primary transition-colors text-sm"
          >
            <Mail size={15} />
            Email
          </a>
          <Link
            href="/admin/robust-login"
            className="flex items-center gap-1.5 text-white/20 hover:text-white/60 transition-colors text-xs"
          >
            <Lock size={12} />
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
