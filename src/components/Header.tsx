import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Facebook, Twitter, Instagram, Menu, X, ChevronDown, Send, BookOpen, CalendarDays, Globe, Users, PenLine, MessageSquare, Compass } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isResearchOpen, setIsResearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none flex justify-center pt-4 transition-all duration-300">
      <motion.div
        animate={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0)',
          backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
          boxShadow: scrolled ? '0 10px 40px -10px rgba(27,59,95,0.15), 0 0 0 1px rgba(0,0,0,0.02)' : 'none',
          borderRadius: scrolled ? '9999px' : '0px',
          width: scrolled ? '85%' : '100%',
          maxWidth: scrolled ? '1100px' : '1280px',
          paddingLeft: scrolled ? '1.5rem' : '0.5rem',
          paddingRight: scrolled ? '0.5rem' : '0.5rem',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
        className="pointer-events-auto relative flex items-center justify-between h-14 md:h-[64px]"
      >
        {/* ── Logo & Wordmark (Left Island) ── */}
        <div className="flex shrink-0 justify-start items-center">
          <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className={`relative flex-shrink-0 transition-all duration-300 ${scrolled ? 'w-9 h-9' : 'w-16 h-16'}`}>
              <img
                src="/logo.svg"
                alt="IERF"
                className="w-full h-full object-contain drop-shadow-sm"
              />
            </div>

            <div
              className={`flex ${
                scrolled ? 'flex-col items-start leading-[1.1]' : 'flex-row items-center gap-1.5'
              } font-black tracking-[0.08em] transition-all duration-300 ${
                scrolled ? 'text-[#1B3B5F] text-[10px] md:text-[11px]' : 'text-white text-xs md:text-sm'
              } whitespace-nowrap`}
              style={{ fontFamily: '"Outfit", sans-serif' }}
            >
              <span>INDIA EURASIA</span>
              <span className={scrolled ? 'block' : 'hidden sm:inline'}>RESEARCH FORUM</span>
            </div>
          </Link>
        </div>

        {/* ── Desktop Nav (Center Island) ── */}
        <div className="hidden lg:flex flex-1 justify-center items-center px-4">
          <nav
            className={`flex items-center gap-1 xl:gap-2 transition-all duration-300 ${
              scrolled ? '' : 'bg-black/10 backdrop-blur-md rounded-full px-3 py-1.5'
            }`}
          >
            <NavLink to="/" label="Home" scrolled={scrolled} />
            <NavLink to="/about" label="About Us" scrolled={scrolled} />

            {/* Events dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsEventsOpen(true)}
              onMouseLeave={() => setIsEventsOpen(false)}
            >
              <button className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${scrolled ? 'text-[#1B3B5F] hover:bg-[#1B3B5F]/6' : 'text-white hover:bg-white/10'}`}>
                Events <ChevronDown size={13} className={`transition-transform duration-200 ${isEventsOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isEventsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-3 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-[#1B3B5F]/10 border border-gray-100 overflow-hidden"
                  >
                    <div className="p-2">
                      <DropdownItem
                        to="/events/volga-to-ganga"
                        icon={<img src="/ganga logo.svg" className="w-4 h-4 object-contain" />}
                        bg="bg-[#E87722]/10"
                        title="Volga to Ganga"
                        desc="Dialogue Series"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Research and Analysis dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsResearchOpen(true)}
              onMouseLeave={() => setIsResearchOpen(false)}
            >
              <button className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${scrolled ? 'text-[#1B3B5F] hover:bg-[#1B3B5F]/6' : 'text-white hover:bg-white/10'}`}>
                Research & Analysis <ChevronDown size={13} className={`transition-transform duration-200 ${isResearchOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isResearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-3 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-[#1B3B5F]/10 border border-gray-100 overflow-hidden"
                  >
                    <div className="p-2">
                      <DropdownItem
                        to="/research"
                        icon={<BookOpen size={16} className="text-[#1B3B5F]" />}
                        bg="bg-blue-500/10"
                        title="Perspectives"
                        desc="Analytical articles on Eurasia"
                      />
                      <DropdownItem
                        to="/research"
                        icon={<MessageSquare size={16} className="text-purple-600" />}
                        bg="bg-purple-500/10"
                        title="Commentary"
                        desc="Timely analysis of developments"
                      />
                      <DropdownItem
                        to="/research"
                        icon={<Compass size={16} className="text-emerald-600" />}
                        bg="bg-emerald-500/10"
                        title="Stories from Eurasia"
                        desc="Travel accounts & cultural portraits"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/our-people" label="Our People" scrolled={scrolled} />
          </nav>
        </div>

        {/* ── Right CTA (Right Island) ── */}
        <div className="flex shrink-0 justify-end items-center gap-3">
          <div className={`hidden md:flex items-center gap-2 transition-all duration-300 ${scrolled ? '' : 'bg-black/10 backdrop-blur-md rounded-full p-1'}`}>
            <Link
              to="/write-for-us"
              className={`flex items-center px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                scrolled
                  ? 'text-[#1B3B5F] hover:bg-black/5'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              Write for Us
            </Link>

            <Link
              to="/contact"
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                scrolled
                  ? 'bg-[#1B3B5F] text-white hover:bg-[#1B3B5F]/90 shadow-md transform hover:scale-105'
                  : 'bg-white text-[#1B3B5F] hover:shadow-white/20 hover:shadow-lg transform hover:scale-105'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-full lg:hidden block ${
              scrolled ? 'text-[#1B3B5F] hover:bg-black/5' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.div>

      {/* ── Mobile Menu (Right Drawer) ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            {/* Full-screen Backdrop (Separate Layer for perfect clicks) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="absolute inset-0 bg-[#0A192F]/60 backdrop-blur-sm pointer-events-auto"
            />
            
            {/* Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-white shadow-[-20px_0_80px_-15px_rgba(0,0,0,0.4)] flex flex-col pointer-events-auto"
            >
              {/* Drawer Header */}
              <div className="p-7 flex items-center justify-between border-b border-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center p-1.5 shadow-inner">
                    <img src="/logo.svg" className="w-full h-full object-contain" alt="" />
                  </div>
                  <div className="font-black text-[11px] text-[#1B3B5F] leading-[1.1] tracking-[0.1em] font-sans">
                    <div>INDIA EURASIA</div>
                    <div className="text-[#E87722] text-[8px] tracking-[0.2em] mt-0.5">RESEARCH FORUM</div>
                  </div>
                </div>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-[#1B3B5F] hover:bg-[#E87722]/10 hover:text-[#E87722] transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 overflow-y-auto pt-8 pb-12 px-5 space-y-1.5">
                {[
                  { label: 'Home', to: '/', icon: <Globe size={18} /> },
                  { label: 'About Us', to: '/about', icon: <BookOpen size={18} /> },
                  { label: 'Research & Analysis', to: '/research', icon: <PenLine size={18} /> },
                  { label: 'Our People', to: '/our-people', icon: <Users size={18} /> },
                  { label: 'Write for Us', to: '/write-for-us', icon: <Send size={18} /> },
                  { label: 'Events', to: '/events', icon: <CalendarDays size={18} /> },
                  { label: 'Contact', to: '/contact', icon: <Mail size={18} /> },
                ].map(link => (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-4 px-5 py-4 rounded-2xl text-[#1B3B5F] font-bold text-[15px] hover:bg-[#1B3B5F]/5 active:bg-[#1B3B5F]/10 active:scale-[0.98] transition-all group"
                  >
                    <span className="text-[#1B3B5F]/30 group-hover:text-[#E87722] transition-colors">{link.icon}</span>
                    {link.label}
                  </Link>
                ))}
                
                <div className="pt-8 px-2">
                  <Link
                    to="/events/volga-to-ganga"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-4 px-6 py-5 rounded-[2.5rem] bg-[#1B3B5F] text-white font-bold text-base shadow-xl shadow-[#1B3B5F]/20 active:scale-95 transition-all group overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1B3B5F] to-[#E87722] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center relative z-10 p-1.5">
                      <img src="/ganga logo.svg" className="w-full h-full brightness-0 invert" alt="" />
                    </div>
                    <span className="relative z-10">Volga to Ganga</span>
                  </Link>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-8 border-t border-gray-100 bg-gray-50/30">
                <div className="flex justify-center gap-8 mb-6">
                  <Facebook size={20} className="text-[#1B3B5F]/40 hover:text-[#1B3B5F] transition-colors cursor-pointer" />
                  <Twitter size={20} className="text-[#1B3B5F]/40 hover:text-[#1B3B5F] transition-colors cursor-pointer" />
                  <Instagram size={20} className="text-[#1B3B5F]/40 hover:text-[#1B3B5F] transition-colors cursor-pointer" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.3em]">
                    India Eurasia Research Forum
                  </p>
                  <p className="text-[8px] text-gray-300 font-bold uppercase tracking-widest">
                    © 2026 • All Rights Reserved
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ── Helpers ──
function NavLink({ to, label, scrolled }: { to: string; label: string; scrolled: boolean }) {
  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${scrolled ? 'text-[#1B3B5F] hover:bg-[#1B3B5F]/6 hover:text-[#E87722]' : 'text-white hover:bg-white/10'}`}
    >
      {label}
    </Link>
  );
}

function DropdownItem({
  to, icon, bg, title, desc
}: {
  to: string; icon: React.ReactNode; bg: string; title: string; desc: string;
}) {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors group"
    >
      <div className={`w-9 h-9 ${bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
        {icon}
      </div>
      <div>
        <div className="text-sm font-bold text-[#1B3B5F] group-hover:text-[#E87722] transition-colors">{title}</div>
        <div className="text-[11px] text-gray-400 font-medium">{desc}</div>
      </div>
    </Link>
  );
}
