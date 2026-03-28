import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Facebook, Twitter, Instagram, Menu, X, ChevronDown, Send, BookOpen, CalendarDays, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isPublicationsOpen, setIsPublicationsOpen] = useState(false);
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
            <NavLink to="/#about" label="About" scrolled={scrolled} />

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
                        to="/events"
                        icon={<CalendarDays size={16} className="text-[#1B3B5F]" />}
                        bg="bg-[#1B3B5F]/8"
                        title="All Events"
                        desc="View the IERF calendar"
                      />
                      <DropdownItem
                        to="/events/volga-to-ganga"
                        icon={<img src="/ganga logo.svg" className="w-4 h-4 object-contain" />}
                        bg="bg-[#E87722]/10"
                        title="Volga to Ganga"
                        desc="Flagship Dialogue Series"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Publications dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsPublicationsOpen(true)}
              onMouseLeave={() => setIsPublicationsOpen(false)}
            >
              <button className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${scrolled ? 'text-[#1B3B5F] hover:bg-[#1B3B5F]/6' : 'text-white hover:bg-white/10'}`}>
                Publications <ChevronDown size={13} className={`transition-transform duration-200 ${isPublicationsOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isPublicationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-3 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-[#1B3B5F]/10 border border-gray-100 overflow-hidden"
                  >
                    <div className="p-2">
                      <DropdownItem
                        to="/publications"
                        icon={<BookOpen size={16} className="text-[#1B3B5F]" />}
                        bg="bg-blue-500/10"
                        title="Research Papers"
                        desc="In-depth geopolitical analysis"
                      />
                      <DropdownItem
                        to="/publications"
                        icon={<Send size={16} className="text-purple-600" />}
                        bg="bg-purple-500/10"
                        title="Special Notes"
                        desc="Expert commentary & insights"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/team" label="Team" scrolled={scrolled} />
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

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden mx-4 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-[#1B3B5F]/10 border border-gray-100 overflow-hidden pointer-events-auto"
          >
            <div className="p-4 space-y-1">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/#about' },
                { label: 'Publications', to: '/publications' },
                { label: 'Team', to: '/team' },
                { label: 'Write for Us', to: '/write-for-us' },
                { label: 'All Events', to: '/events' },
                { label: 'Contact Us', to: '/contact' },
              ].map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-[#1B3B5F] font-semibold text-sm hover:bg-[#1B3B5F]/6 hover:text-[#E87722] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/events/volga-to-ganga"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#1B3B5F] font-semibold text-sm hover:bg-[#E87722]/8 hover:text-[#E87722] transition-colors"
              >
                <span className="w-6 h-6 rounded-md bg-[#E87722]/10 flex items-center justify-center">
                  <img src="/ganga logo.svg" className="w-4 h-4" />
                </span>
                Volga to Ganga
              </Link>
            </div>
          </motion.div>
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
