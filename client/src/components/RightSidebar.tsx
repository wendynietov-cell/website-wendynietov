import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { NAVIGATION } from "@/lib/constants";
import { Menu, X, ChevronDown } from "lucide-react";

export function RightSidebar() {
  const [location] = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Mobile Hamburger Header */}
      <div className="md:hidden fixed top-0 left-0 w-full h-16 glass z-50 flex items-center justify-between px-6">
        <span className="font-bold text-lg text-gradient">TechConsult.</span>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white hover:text-primary transition-colors"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-20 px-6 pb-6 overflow-y-auto"
          >
            <div className="flex flex-col space-y-6 mt-8">
              {NAVIGATION.map((item) => (
                <div key={item.path}>
                  <Link href={item.path} className={`flex items-center text-xl font-medium ${location === item.path ? 'text-primary' : 'text-white'}`}>
                    <item.icon className="mr-4" size={24} />
                    {item.name}
                  </Link>
                  {item.subLinks && (
                    <div className="ml-10 mt-4 flex flex-col space-y-4 border-l border-white/10 pl-4">
                      {item.subLinks.map(sub => (
                        <Link key={sub.path} href={sub.path} className={`block text-lg ${location === sub.path ? 'text-primary' : 'text-white/70'}`}>
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
      </AnimatePresence>

      {/* Desktop Right Sidebar */}
      <motion.nav
        initial={false}
        animate={{ width: expanded ? 280 : 80 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => {
          setExpanded(false);
          setOpenSubmenu(null);
        }}
        className="hidden md:flex flex-col fixed right-0 top-0 h-screen glass-card z-50 border-l border-white/10 overflow-hidden"
      >
        <div className="h-20 flex items-center justify-center w-[80px] shrink-0 border-b border-white/10">
          <Menu className="text-white/50" size={24} />
        </div>

        <div className="flex-1 overflow-y-auto py-8 w-[280px] scrollbar-hide">
          <div className="flex flex-col space-y-2 px-4">
            {NAVIGATION.map((item) => {
              const isActive = location === item.path || (item.subLinks && item.subLinks.some(s => location === s.path));
              
              return (
                <div key={item.path} className="relative group">
                  <div 
                    className={`flex items-center p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                      isActive ? 'bg-primary/10 text-primary' : 'hover:bg-white/5 text-white/70 hover:text-white'
                    }`}
                    onClick={() => {
                      if (item.subLinks) {
                        setOpenSubmenu(openSubmenu === item.name ? null : item.name);
                      }
                    }}
                  >
                    <Link href={item.subLinks ? '#' : item.path} className="flex flex-1 items-center">
                      <div className="w-[32px] flex items-center justify-center shrink-0">
                        <item.icon size={22} className={isActive ? 'text-primary' : ''} />
                      </div>
                      <span className="ml-4 font-medium whitespace-nowrap opacity-100 transition-opacity">
                        {item.name}
                      </span>
                    </Link>
                    {item.subLinks && expanded && (
                      <ChevronDown size={16} className={`transition-transform ${openSubmenu === item.name ? 'rotate-180' : ''}`} />
                    )}
                  </div>
                  
                  {/* Expanded Submenu */}
                  <AnimatePresence>
                    {item.subLinks && openSubmenu === item.name && expanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden ml-[48px] mt-1 pr-4"
                      >
                        <div className="flex flex-col space-y-2 border-l border-white/10 pl-3 py-2">
                          {item.subLinks.map(sub => (
                            <Link 
                              key={sub.path} 
                              href={sub.path}
                              className={`text-sm py-1.5 transition-colors ${
                                location === sub.path ? 'text-primary font-medium' : 'text-white/50 hover:text-white/90'
                              }`}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </motion.nav>
    </>
  );
}
