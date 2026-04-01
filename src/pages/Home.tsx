import { ArrowRight, Globe, BookOpen, Users, Calendar, ChevronRight, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const heroImages = [
  '/images/pexels-aghyadnajjar-4623859.jpg',
  '/images/pexels-mesut-yalcin-1233429888-27914446.jpg',
  '/images/pexels-ykfotography-11066793.jpg'
];

export default function Home() {
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
        {/* Background Image Slider with Overlay */}
        <AnimatePresence mode="popLayout">
          <motion.div 
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1, filter: 'blur(4px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${heroImages[currentImageIndex]}")` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1B3B5F]/60 via-[#1B3B5F]/40 to-[#1B3B5F] backdrop-brightness-75"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
             <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] max-w-5xl mx-auto drop-shadow-2xl"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Researching <span className="text-[#E87722]">Eurasia</span>, <br />
              Bridging <span className="text-white/80 italic">Continents.</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-medium opacity-90 leading-relaxed"
          >
            India Eurasia Research Forum (IERF) is an independent initiative dedicated to promoting research, dialogue and people to people cooperation between India and Eurasia.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/about" 
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-black text-white bg-[#E87722] rounded-full hover:bg-[#d66a1d] transition-all shadow-[0_0_20px_rgba(232,119,34,0.3)] hover:shadow-[0_0_30px_rgba(232,119,34,0.5)] hover:-translate-y-1"
            >
              EXPLORE OUR MISSION
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/research" 
              className="px-10 py-5 text-lg font-bold text-white border-2 border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              READ RESEARCH
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
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
                Institutional Vision
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B3B5F] mb-8 leading-tight tracking-tight">
                Welcome to <span className="text-[#E87722]">IERF</span>
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed mb-8">
                India Eurasia Research Forum (IERF) is an independent initiative dedicated to promoting research, dialogue and people to people cooperation between India and Eurasia.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="space-y-2">
                  <div className="text-4xl font-black text-[#1B3B5F]">15+</div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-wider">Countries Covered</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-black text-[#E87722]">50+</div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-wider">Policy Insights</div>
                </div>
              </div>
              <p className="text-gray-500 leading-relaxed italic border-l-4 border-[#E87722] pl-6 py-2 mb-10">
                "Bridging the intellectual and strategic gap between India and Eurasia through scholarly rigour and diplomatic engagement."
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative p-4"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#1B3B5F]/5 rounded-full blur-3xl -z-10"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white group">
                <img 
                  src="/images/pexels-arthousestudio-4328296.jpg" 
                  alt="IERF HQ" 
                  className="w-full h-[600px] object-cover group-hover:scale-110 transition-transform duration-[3s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3B5F]/40 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Activities / Focus Areas - Glass Card Grid */}
      <section id="focus-areas" className="py-32 bg-[#F4F6F8] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-[#E87722] font-black text-sm uppercase tracking-[0.3em] mb-4">Strategic Pillars</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#1B3B5F] mb-6">Advancing Geopolitical Research</h3>
            <div className="w-24 h-2 bg-[#E87722] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Focus Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="lg:col-span-2 bg-white rounded-[2.5rem] p-12 shadow-xl shadow-blue-900/5 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 transition-transform group-hover:rotate-0">
                <Globe size={200} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#1B3B5F] rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-900/20">
                  <Globe size={32} />
                </div>
                <h4 className="text-3xl font-black text-[#1B3B5F] mb-8">Focus Areas</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {[
                    'Multidimensional Engagement',
                    'Socio-cultural Developments',
                    'Integration Frameworks',
                    'Resource Geopolitics',
                    'Regional Human Security',
                    'BRICS & SCO Analysis',
                    'Civilisational Hybridity'
                  ].map((area, idx) => (
                    <div key={idx} className="flex items-center space-x-4 group/item">
                      <div className="w-2 h-2 rounded-full bg-[#E87722] group-hover/item:scale-150 transition-transform"></div>
                      <span className="text-gray-600 font-bold text-sm tracking-tight">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Publication Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#1B3B5F] rounded-[2.5rem] p-10 flex flex-col text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#E87722] opacity-10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10 flex-grow">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                  <BookOpen size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-6">Featured Research</h4>
                <div className="rounded-2xl overflow-hidden mb-6 h-48 border border-white/10">
                   <img src="/images/istockphoto-171116980-1024x1024.jpg" className="w-full h-full object-cover" />
                </div>
                <h5 className="text-xl font-bold mb-4 line-clamp-2 leading-snug">Instability in Central Asia: Strategic Implications</h5>
                <p className="text-white/60 text-sm mb-8 line-clamp-3">Evaluating regional security shifts and their long-term impact on India's neighborhood policy.</p>
              </div>
              <Link to="/research" className="relative z-10 group inline-flex items-center justify-center w-full py-4 bg-[#E87722] rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-colors">
                READ NOW <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <h2 className="text-[#E87722] font-black text-sm uppercase tracking-[0.3em] mb-4">The IERF Way</h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#1B3B5F]">Building Lasting Legacies</h3>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <BookOpen className="text-blue-600" />, title: 'Scholarly Rigour', body: 'In-depth research on Eurasian geopolitics to build local perspectives.' },
              { icon: <Users className="text-[#E87722]" />, title: 'Track 2 Dialogue', body: 'Fostering cultural understanding through the Volga to Ganga series.' },
              { icon: <Globe className="text-green-600" />, title: 'Global Impact', body: 'Academic collaboration and public diplomacy across 15+ nations.' },
              { icon: <Send className="text-purple-600" />, title: 'Policy Insights', body: 'Policy-relevant analysis for decision-makers and global leaders.' }
            ].map((pill, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 text-center flex flex-col items-center group transition-all hover:bg-white hover:shadow-2xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-8 border border-gray-100 group-hover:-translate-y-2 transition-transform">
                  {pill.icon}
                </div>
                <h4 className="text-xl font-extrabold text-[#1B3B5F] mb-4">{pill.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{pill.body}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">Ready to collaborate?</h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-medium">
              Join IERF in reimagining Eurasian studies for the 21st century. We are always looking for contributors who value academic integrity and strategic depth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="px-12 py-5 bg-white text-[#1B3B5F] rounded-full font-black tracking-widest hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1">
                CONTACT US
              </Link>
              <Link to="/write-for-us" className="px-12 py-5 bg-transparent border-2 border-white/20 rounded-full font-black tracking-widest hover:bg-white/10 transition-all">
                WRITE FOR US
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
