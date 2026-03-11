"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION } from "@/lib/constants";
import { Menu, X, ChevronDown } from "lucide-react";

export function RightSidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const submenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Close submenu when clicking outside
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (submenuRef.current && !submenuRef.current.contains(e.target as Node)) {
        setOpenSubmenu(null);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      {/* ── Top Nav ── */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="flex items-center justify-between px-8 md:px-16 h-[72px]">

          {/* Brand */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="text-lg font-black tracking-tight bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">
              Wendy Nieto
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#5effd8] opacity-80 mt-0.5">
              Estratega de Plataformas
            </span>
          </Link>

          {/* Desktop links */}
          <nav ref={submenuRef} className="hidden md:flex items-center gap-10 list-none">
            {NAVIGATION.map((item) => {
              const isActive = pathname === item.path ||
                (item.subLinks?.some((s) => pathname === s.path));

              return (
                <div key={item.path} className="relative">
                  {item.subLinks ? (
                    <>
                      <button
                        onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                        className={`flex items-center gap-1 text-[13px] font-medium tracking-wide transition-colors ${
                          isActive ? "text-[#5effd8]" : "text-white/55 hover:text-[#5effd8]"
                        }`}
                      >
                        {item.name}
                        <ChevronDown size={13} className={`transition-transform ${openSubmenu === item.name ? "rotate-180" : ""}`} />
                      </button>

                      <AnimatePresence>
                        {openSubmenu === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.18 }}
                            className="absolute top-full left-0 mt-3 w-52 glass-card rounded-xl border border-white/10 py-2 shadow-xl"
                          >
                            {item.subLinks.map((sub) => (
                              <Link
                                key={sub.path}
                                href={sub.path}
                                className={`block px-4 py-2.5 text-sm transition-colors ${
                                  pathname === sub.path
                                    ? "text-[#5effd8]"
                                    : "text-white/55 hover:text-[#5effd8]"
                                }`}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      className={`relative text-[13px] font-medium tracking-wide transition-colors group ${
                        isActive ? "text-[#5effd8]" : "text-white/55 hover:text-[#5effd8]"
                      }`}
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-[#5effd8] to-[#00c9a7] transition-all duration-300 group-hover:w-full" />
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA */}
          <Link
            href="/contacto"
            className="hidden md:inline-flex items-center bg-gradient-to-r from-rose-500 to-purple-600 text-white text-[13px] font-semibold px-7 py-2.5 rounded-full shadow-[0_0_24px_rgba(180,79,223,0.4)] hover:opacity-90 hover:-translate-y-px transition-all"
          >
            Agendar llamada
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white/70 hover:text-white transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden fixed inset-0 z-40 bg-[#050d1a]/96 backdrop-blur-xl pt-[72px] px-6 pb-8 overflow-y-auto"
          >
            <div className="flex flex-col space-y-1 mt-6">
              {NAVIGATION.map((item) => (
                <div key={item.path}>
                  <Link
                    href={item.path}
                    className={`flex items-center gap-3 px-3 py-3.5 rounded-xl text-lg font-medium transition-colors ${
                      pathname === item.path ? "text-[#5effd8]" : "text-white/70"
                    }`}
                  >
                    <item.icon size={20} />
                    {item.name}
                  </Link>
                  {item.subLinks && (
                    <div className="ml-11 border-l border-white/10 pl-4 mb-2 space-y-1">
                      {item.subLinks.map((sub) => (
                        <Link
                          key={sub.path}
                          href={sub.path}
                          className={`block py-2 text-sm ${
                            pathname === sub.path ? "text-[#5effd8]" : "text-white/50"
                          }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/contacto"
                  className="block text-center bg-gradient-to-r from-rose-500 to-purple-600 text-white font-semibold py-3.5 rounded-full mt-2"
                >
                  Agendar llamada
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
