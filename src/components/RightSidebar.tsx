"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION } from "@/lib/constants";
import { ChevronDown, Menu, X } from "lucide-react";

export function RightSidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const submenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

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
      <style>{`
        .nav-btn-cyber {
          font-family: 'Space Mono', monospace;
          font-size: .72rem;
          letter-spacing: .08em;
          text-transform: uppercase;
          padding: 9px 22px;
          border: 1px solid rgba(180,79,223,.7);
          color: #c084fc;
          background: rgba(180,79,223,.07);
          clip-path: polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%);
          transition: all .3s;
          text-decoration: none;
          display: inline-block;
          white-space: nowrap;
        }
        .nav-btn-cyber:hover {
          background: rgba(180,79,223,.25);
          color: #fff;
          box-shadow: 0 0 22px rgba(180,79,223,.35);
        }
        .nav-link-cyber {
          font-family: 'Space Mono', monospace;
          font-size: .75rem;
          color: rgba(240,234,255,0.45);
          text-decoration: none;
          letter-spacing: .07em;
          text-transform: uppercase;
          font-weight: 500;
          transition: color .2s;
        }
        .nav-link-cyber:hover,
        .nav-link-cyber.active {
          color: #c084fc;
        }
        .submenu-link-cyber {
          font-family: 'Space Mono', monospace;
          font-size: .65rem;
          color: rgba(240,234,255,0.4);
          text-decoration: none;
          letter-spacing: .06em;
          text-transform: uppercase;
          display: block;
          padding: 8px 16px;
          transition: color .2s, background .2s;
        }
        .submenu-link-cyber:hover,
        .submenu-link-cyber.active {
          color: #c084fc;
          background: rgba(180,79,223,.07);
        }
        .logo-hex-svg { animation: hexPulse 4s ease-in-out infinite alternate; }
        @keyframes hexPulse { from { opacity: .7 } to { opacity: 1 } }
      `}</style>

      {/* ── Top Nav ── */}
      <header className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: 'rgba(6,6,16,.82)',
          backdropFilter: 'blur(18px)',
          borderBottom: '1px solid rgba(180,79,223,.13)',
        }}>
        <div className="flex items-center justify-between px-8 md:px-16 h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 no-underline">
            <div className="relative w-9 h-9 flex items-center justify-center">
              <svg className="logo-hex-svg absolute" width="36" height="36" viewBox="0 0 34 34">
                <polygon points="17,2 31,10 31,24 17,32 3,24 3,10"
                  fill="none" stroke="#b44fdf" strokeWidth="1.2" opacity=".75"/>
                <polygon points="17,7 26,12 26,22 17,27 8,22 8,12"
                  fill="rgba(180,79,223,.09)" stroke="#b44fdf" strokeWidth=".6" opacity=".5"/>
              </svg>
              <span style={{ fontFamily:"'Space Mono',monospace", fontSize:'.75rem', fontWeight:700, color:'#c084fc', letterSpacing:'.06em', position:'relative', zIndex:1 }}>
                WN
              </span>
            </div>
            <div className="flex flex-col leading-none">
              <span style={{ fontFamily:"'Space Mono',monospace", fontSize:'.8rem', fontWeight:700, color:'#c084fc', letterSpacing:'.05em' }}>
                Wendy Nieto
              </span>
              <span style={{ fontFamily:"'Space Mono',monospace", fontSize:'.52rem', color:'rgba(94,255,216,.7)', letterSpacing:'.12em', textTransform:'uppercase', marginTop:2 }}>
                Tech Sales
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <nav ref={submenuRef} className="hidden md:flex items-center gap-10">
            {NAVIGATION.map((item) => {
              const isActive = pathname === item.path ||
                (item.subLinks?.some((s) => pathname === s.path));

              return (
                <div key={item.path} className="relative">
                  {item.subLinks ? (
                    <>
                      <button
                        onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                        className={`nav-link-cyber flex items-center gap-1 bg-transparent border-0 cursor-pointer ${isActive ? 'active' : ''}`}
                      >
                        {item.name}
                        <ChevronDown size={12} style={{ transition:'transform .2s', transform: openSubmenu === item.name ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                      </button>

                      <AnimatePresence>
                        {openSubmenu === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.16 }}
                            className="absolute top-full left-0 mt-3 w-56 py-2 overflow-hidden"
                            style={{
                              background: 'rgba(6,6,16,.95)',
                              border: '1px solid rgba(180,79,223,.2)',
                              backdropFilter: 'blur(20px)',
                              clipPath: 'polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)',
                              boxShadow: '0 12px 40px rgba(0,0,0,.5)',
                            }}
                          >
                            {item.subLinks.map((sub) => (
                              <Link key={sub.path} href={sub.path}
                                className={`submenu-link-cyber ${pathname === sub.path ? 'active' : ''}`}>
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link href={item.path} className={`nav-link-cyber ${isActive ? 'active' : ''}`}>
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA */}
          <Link href="/agenda" className="nav-btn-cyber hidden md:inline-block">
            Agendar →
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden transition-colors"
            style={{ color: 'rgba(240,234,255,.7)', background:'none', border:'none', cursor:'pointer' }}
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
            className="md:hidden fixed inset-0 z-40 pt-[72px] px-6 pb-8 overflow-y-auto"
            style={{ background: 'rgba(6,6,16,.97)', backdropFilter: 'blur(20px)' }}
          >
            <div className="flex flex-col mt-6 gap-1"
              style={{ borderTop: '1px solid rgba(180,79,223,.13)', paddingTop: 24 }}>
              {NAVIGATION.map((item) => (
                <div key={item.path}>
                  <Link
                    href={item.path}
                    className="nav-link-cyber flex items-center gap-3 py-3.5 px-2"
                    style={{ fontSize: '.85rem' }}
                  >
                    <item.icon size={16} style={{ opacity:.6 }} />
                    {item.name}
                  </Link>
                  {item.subLinks && (
                    <div className="ml-10 pl-4 mb-2"
                      style={{ borderLeft: '1px solid rgba(180,79,223,.15)' }}>
                      {item.subLinks.map((sub) => (
                        <Link key={sub.path} href={sub.path}
                          className={`submenu-link-cyber py-2 ${pathname === sub.path ? 'active' : ''}`}>
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-6 mt-2" style={{ borderTop: '1px solid rgba(180,79,223,.13)' }}>
                <Link href="/agenda" className="nav-btn-cyber block text-center"
                  style={{ clipPath: 'none', borderRadius: 4 }}>
                  Agendar llamada →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
