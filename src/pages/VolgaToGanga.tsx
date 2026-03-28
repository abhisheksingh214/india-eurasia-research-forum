import { motion } from 'motion/react';
import { Calendar, Quote, ArrowRight } from 'lucide-react';
import SubHero from '../components/SubHero';

export default function VolgaToGanga() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <SubHero 
        title="Volga to Ganga" 
        subtitle="Exploring the civilisational, cultural and intellectual linkages between India and the wider Eurasian region."
        breadcrumb={[{ label: 'Events', href: '/events' }, { label: 'Volga to Ganga' }]}
      />

      <section className="py-24 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E87722] opacity-[0.02] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1B3B5F] opacity-[0.03] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl shadow-blue-900/10 border border-gray-100 text-center"
          >
            <motion.div 
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               className="flex justify-center mb-16"
            >
              <div className="h-40 flex items-center justify-center p-8 bg-white/5 backdrop-blur-sm rounded-[2rem] border border-gray-200/50 shadow-sm">
                <img src="/ganga logo.svg" alt="Volga to Ganga Logo" className="h-full object-contain" />
              </div>
            </motion.div>
            
            <div className="relative mb-16">
               <Quote className="absolute -top-10 -left-6 text-gray-100 w-24 h-24 -z-10" />
               <p className="text-[#1B3B5F] text-xl md:text-2xl leading-relaxed italic font-medium">
                "The Volga to Ganga Dialogues is India Eurasia Research Forum’s flagship platform dedicated to exploring the civilisational, cultural and intellectual linkages between India and the wider Eurasian region."
               </p>
            </div>

            <div className="text-left space-y-8 text-gray-500 font-medium leading-[2] text-lg max-w-3xl mx-auto mb-20">
              <p>
                Drawing inspiration from the deep historical linkages and intellectual traditions that have connected societies across the Eurasian landmass, the dialogue series brings together scholars, diplomats, artists and practitioners to engage in reflective conversations that transcend geopolitics.
              </p>
              <p>
                The dialogue series seeks to foster mutual understanding, people-to-people connections, and a shared appreciation of the enduring ties between the regions falling between the Volga and the Ganga river basins.
              </p>
            </div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="inline-flex flex-col items-center bg-[#1B3B5F] text-white p-12 rounded-[3rem] shadow-2xl shadow-[#1B3B5F]/30 border-b-8 border-[#E87722]"
            >
              <h3 className="text-[#E87722] text-xs font-black uppercase tracking-[0.4em] mb-4">Phase: Initiative Launch</h3>
              <h4 className="text-3xl font-black mb-6 tracking-tight">Coming Soon</h4>
              <p className="text-white/60 text-sm max-w-sm mx-auto mb-8 font-bold uppercase tracking-widest leading-relaxed">
                Stay tuned for updates on our upcoming hybrid and physical dialogue series.
              </p>
              <div className="h-10 w-px bg-white/20 mb-8"></div>
              <button className="flex items-center text-xs font-black uppercase tracking-widest hover:text-[#E87722] transition-colors group">
                 Join the Waitlist <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
