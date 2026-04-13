import { ArrowRight, Globe, BookOpen, Users, Calendar, ChevronRight, Send, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useContent } from '../context/ContentContext';

const heroImages = [
  '/images/hero1_new.jpg',
  '/images/hero2_new.jpeg',
  '/images/hero3_new.jpeg'
];

export default function Home() {
  const { content } = useContent();
  const c = content.home;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div 
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1, filter: 'blur(4px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat contrast-[1.1] brightness-[0.75] saturate-[1.1]"
            style={{ backgroundImage: `url("${heroImages[currentImageIndex]}")` }}
          />
        </AnimatePresence>
        <div className="absolute top-0 left-0 w-full h-[500px] z-0 pointer-events-none bg-gradient-to-b from-white from-[96px] via-white/40 via-[250px] to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
             <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] max-w-5xl mx-auto"
              style={{ 
                fontFamily: '"Playfair Display", Georgia, serif',
                textShadow: '0 4px 24px rgba(0,0,0,0.8), 0 0 50px rgba(0,0,0,0.5)'
              }}
            >
              Researching <span className="text-[#E87722]">Eurasia</span>, <br />
              Bridging <span className="text-white/80 italic">Continents.</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-2xl text-white mb-12 max-w-3xl mx-auto font-semibold leading-relaxed"
            style={{ textShadow: '0 2px 16px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.6)' }}
          >
            {c.heroSubtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/about" 
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-black text-white bg-[#E87722] rounded-full hover:bg-orange-600 transition-all shadow-[0_0_20px_rgba(232,119,34,0.3)] hover:shadow-[0_0_35px_rgba(232,119,34,0.6)] hover:-translate-y-1"
            >
              {c.heroButton1}
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/research" 
              className="px-10 py-5 text-lg font-bold text-white border-2 border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              {c.heroButton2}
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#E87722]/10 text-[#E87722] text-xs font-bold tracking-widest uppercase mb-6">
                {c.visionBadge}
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B3B5F] mb-8 leading-tight tracking-tight">
                Welcome to <span className="text-[#E87722]">IERF</span>
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed mb-8">
                {c.visionBody}
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="space-y-2">
                  <div className="text-4xl font-black text-[#1B3B5F]">{c.stat1Value}</div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-wider">{c.stat1Label}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-black text-[#E87722]">{c.stat2Value}</div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-wider">{c.stat2Label}</div>
                </div>
              </div>
              <p className="text-gray-500 leading-relaxed italic border-l-4 border-[#E87722] pl-6 py-2 mb-10">
                {c.visionQuote}
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative p-0"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E87722]/10 rounded-full blur-3xl -z-10 translate-x-12 -translate-y-12"></div>
              <div className="relative rounded-[3rem] overflow-hidden group">
                <img 
                  src={c.welcomeImage} 
                  alt="India-Eurasia cooperation" 
                  loading="lazy"
                  className="w-full h-[650px] object-cover group-hover:scale-105 transition-transform duration-[5s] contrast-[1.05] brightness-[0.95]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3B5F]/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Activities / Focus Areas */}
      <section id="focus-areas" className="py-32 bg-[#F4F6F8] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-black text-[#1B3B5F] mb-6 tracking-tighter">{c.focusAreasTitle}</h3>
            <div className="w-24 h-2 bg-[#E87722] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="lg:col-span-2 p-8 group relative overflow-hidden transition-all hover:bg-[#E87722]/5 rounded-[3rem] border border-transparent hover:border-[#E87722]/10 shadow-sm hover:shadow-xl hover:shadow-[#E87722]/5"
            >
              <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 transition-transform group-hover:rotate-0 text-[#E87722]">
                <Globe size={200} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#E87722] rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-[#E87722]/20 scale-110">
                  <Globe size={32} />
                </div>
                <h4 className="text-3xl font-black text-[#1B3B5F] mb-8 group-hover:text-[#E87722] transition-colors">Focus Areas</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {c.focusAreas.map((area, idx) => (
                    <div key={idx} className="flex items-center space-x-4 group/item">
                      <div className="w-2 h-2 rounded-full bg-[#E87722] group-hover/item:scale-150 transition-transform shadow-[0_0_8px_rgba(232,119,34,0.6)]"></div>
                      <span className="text-gray-600 font-bold text-sm tracking-tight group-hover/item:text-[#E87722] transition-colors">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="p-8 flex flex-col text-[#1B3B5F] group relative overflow-hidden transition-all hover:bg-[#E87722]/5 rounded-[3rem] border border-transparent hover:border-[#E87722]/10 shadow-sm hover:shadow-xl hover:shadow-[#E87722]/5"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-[#E87722]/10 rounded-2xl flex items-center justify-center text-[#E87722] mb-10 group-hover:scale-110 transition-transform duration-500 shadow-sm group-hover:shadow-[#E87722]/20">
                  <BookOpen size={28} />
                </div>
                <h4 className="text-3xl font-black mb-6 tracking-tighter group-hover:text-[#E87722] transition-colors">Publications</h4>
                <p className="text-gray-500 text-base leading-relaxed mb-10 font-medium italic border-l-2 border-[#E87722] pl-6 py-1">
                  "Promoting scholarly rigour and regional insights."
                </p>
                <div className="mt-auto">
                  <Link 
                    to="/research" 
                    className="inline-flex items-center gap-2 text-sm font-black text-[#E87722] uppercase tracking-[0.2em] group/link hover:gap-3 transition-all"
                  >
                    Read Research <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Volga to Ganga Flagship Section */}
      <section id="volga-to-ganga" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#E87722]/5 opacity-30 skew-y-6 transform origin-top-left -z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-[4rem] bg-gradient-to-br from-white to-gray-50 p-12 shadow-2xl border border-gray-100 flex flex-col items-center justify-center aspect-square max-w-md mx-auto group">
                <div className="absolute inset-0 bg-[#E87722]/5 rounded-[4rem] group-hover:scale-105 transition-transform duration-700"></div>
                <img 
                  src="/ganga-logo.svg" 
                  alt="Volga to Ganga Logo" 
                  className="w-64 h-64 relative z-10 drop-shadow-xl transform group-hover:rotate-6 transition-transform duration-1000"
                />
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-[#E87722] text-white text-[10px] font-black uppercase tracking-[0.4em] z-20 shadow-lg">
                  Flagship Series
                </div>
              </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B3B5F]/10 text-[#1B3B5F] text-xs font-black tracking-widest uppercase mb-8">
                 Civilizational Dialogue
              </div>
              <h2 className="text-5xl font-black text-[#1B3B5F] mb-10 tracking-tighter leading-tight">
                {c.volgaTeaserHeading}
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed mb-12 font-medium opacity-90">
                {c.volgaTeaserBody}
              </p>
              <Link 
                to="/events/volga-to-ganga" 
                className="group inline-flex items-center gap-4 px-10 py-5 bg-[#E87722] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl hover:shadow-[0_0_30px_rgba(232,119,34,0.5)] hover:-translate-y-1"
              >
                EXPLORE DIALOGUES <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <h2 className="text-[#E87722] font-black text-sm uppercase tracking-[0.3em] mb-4">{c.ierfWayTitle}</h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#1B3B5F]">{c.ierfWaySubtitle}</h3>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {c.ierfWayPillars.map((pill, idx) => {
              const icons = [<BookOpen className="text-blue-600" />, <Users className="text-[#E87722]" />, <Globe className="text-green-600" />, <Camera className="text-purple-600" />];
              return (
                <motion.div 
                  key={idx}
                  className="p-8 text-center flex flex-col items-center group transition-all hover:bg-[#E87722]/5 rounded-[2.5rem] border border-transparent hover:border-[#E87722]/10 shadow-sm hover:shadow-xl hover:shadow-[#E87722]/5"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 transition-all group-hover:-translate-y-2 group-hover:scale-110 shadow-sm group-hover:shadow-[#E87722]/20">
                    <div className="w-full h-full rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-white transition-colors">
                      {icons[idx % icons.length]}
                    </div>
                  </div>
                  <h4 className="text-xl font-extrabold text-[#1B3B5F] mb-4 group-hover:text-[#E87722] transition-colors">{pill.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium group-hover:text-gray-700 transition-colors">{pill.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DigiEurasia Teaser Section */}
      <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E87722]/5 rounded-full blur-3xl -translate-y-12"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-[#E87722]/30 text-[#E87722] text-sm font-black tracking-widest uppercase mb-10 mx-auto">
              <Camera size={16} /> Upcoming Project
            </div>
            <h2 className="text-5xl font-black text-[#1B3B5F] mb-8 tracking-tighter leading-tight">
              {c.digiTeaserHeading}
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed mb-12 font-medium">
              {c.digiTeaserBody}
            </p>
            <div className="p-12 bg-white/50 backdrop-blur-xl rounded-[3rem] border border-gray-100 shadow-sm inline-block opacity-60">
               <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs">Community Repository Launching Soon</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision / Call to Action */}
      <section className="relative py-32 bg-[#1B3B5F] text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pexels-ykfotography-11066793.jpg')] bg-cover bg-fixed opacity-10"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">{c.ctaHeading}</h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-medium">
              {c.ctaBody}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="px-12 py-5 bg-white text-[#1B3B5F] rounded-full font-black tracking-widest hover:bg-[#E87722] hover:text-white transition-all shadow-xl hover:shadow-[0_0_20px_rgba(232,119,34,0.4)] hover:-translate-y-1">
                JOIN THE DIALOGUE
              </Link>
              <Link to="/write-for-us" className="px-12 py-5 bg-transparent border-2 border-white/20 rounded-full font-black tracking-widest text-white hover:bg-[#E87722]/10 hover:border-[#E87722] transition-all">
                SUBMIT ANALYSIS
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
