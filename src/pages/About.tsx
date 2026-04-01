import { motion } from 'motion/react';
import { Search, BookOpen, MessageCircle, Handshake, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SubHero from '../components/SubHero';

const pillars = [
  {
    icon: <Search size={28} />,
    title: 'Research',
    color: 'from-blue-500 to-blue-700',
    description: 'Conduct in-depth research on Eurasian geopolitics, economics, and culture to build research pathways between India and Eurasia. Promote and build a comprehensive repository of Indian perspectives on Eurasia.',
  },
  {
    icon: <MessageCircle size={28} />,
    title: 'Dialogue',
    color: 'from-[#E87722] to-orange-700',
    description: 'Facilitate informed dialogue through publications, seminars, and conferences. Foster greater cultural understanding and civilisational dialogue between India and the Eurasian countries through the Volga to Ganga Dialogue series.',
  },
  {
    icon: <Handshake size={28} />,
    title: 'Engagement',
    color: 'from-emerald-500 to-emerald-700',
    description: 'Promote multidimensional engagement across India and Eurasia through academic collaboration and public diplomacy initiatives. To promote Track 2 dialogues between India and the Eurasian countries in the future.',
  },
  {
    icon: <Target size={28} />,
    title: 'Policy Impact',
    color: 'from-purple-500 to-purple-700',
    description: 'Provide up-to-date & policy-relevant insights to decision-makers and industry leaders. To shape the policy landscape of foreign policy-making in the region on Eurasian affairs, particularly in regional cooperation, resource geopolitics, economic developments, and civilisational discourse.',
  },
];

const focusAreas = [
  "India's multidimensional engagement with Eurasian countries",
  'Political, economic and socio-cultural developments in Eurasia',
  'Regional cooperation and integration frameworks across Eurasia',
  'Resource geopolitics and geoeconomic developments',
  'Regional Security in the Eurasian context',
  'BRICS and SCO as Eurasian regional organisations',
  'Eurasian civilisations and cultural hybridity in the twenty-first century',
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] pb-24">
      <SubHero
        title="About Us"
        subtitle="Bridging the intellectual and strategic gap between India and Eurasia."
        breadcrumb={[{ label: 'About Us' }]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 w-full">

        {/* Who We Are */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl sm:rounded-[2.5rem] shadow-xl p-6 sm:p-10 lg:p-14 mb-12 border border-gray-100"
        >
          <h2 className="text-2xl sm:text-3xl font-black text-[#1B3B5F] mb-6 tracking-tight">Who We Are</h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            The India Eurasia Research Forum (IERF) is India's first research network dedicated to a comprehensive study of the Eurasian region. Our team comprises early career researchers, journalists, policymakers and emerging voices from India's leading public universities, including the Jawaharlal Nehru University and the University of Delhi. Together, we endeavour to bridge the intellectual and strategic gap between India and Eurasia, a region comprising Russia, Greater Central Asia and the Caucasus. To bridge this gap, IERF operates at the intersection of scholarly rigour and diplomatic engagement. The forum will serve as a platform for advancing cooperation and trust across Eurasia while supporting India's evolving global engagement by fostering cross-border cultural exchanges through an interdisciplinary approach.
          </p>
        </motion.section>

        {/* What We Do — Four Pillars */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1B3B5F] mb-4 tracking-tight">What We Do</h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              IERF aims to foster informed dialogue and multidimensional engagement between India and Eurasia. Currently, as part of our foundational mission, IERF's work is based on four pillars:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform`}>
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-black text-[#1B3B5F] mb-3">{pillar.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Our Vision */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1B3B5F] to-[#0A192F] rounded-2xl sm:rounded-[2.5rem] shadow-xl p-6 sm:p-10 lg:p-14 mb-12 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E87722] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <h2 className="text-2xl sm:text-3xl font-black mb-6 tracking-tight relative z-10">Our Vision</h2>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed relative z-10 mb-6">
            At the India Eurasia Research Forum (IERF), we believe that informed research and open dialogue are essential to building resilient partnerships and sustained engagement. The forum provides a platform for researchers, policymakers, and practitioners from India and Eurasia to explore the deep historical, cultural, and strategic ties that connect these dynamic regions, ensuring that academic enquiry and research effectively inform public discourse and shape the policy landscape.
          </p>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed relative z-10 mb-6">
            As part of IERF's vision, we promote a homegrown Indian perspective on Eurasian affairs. Our long-term vision is to become a leading India-origin academic platform that promotes research and publications on all aspects of Eurasian political, economic, and socio-cultural developments, particularly those that can have implications for India.
          </p>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed relative z-10">
            IERF's vision also extends to bringing India and Eurasia closer together — not just through analysis, publications and talks, but through shared stories and ideas that bridge gaps. We believe Eurasian studies need to be reimagined in Indian academic and policy-making circles, and IERF intends to fill this space.
          </p>
        </motion.section>

        {/* Focus Areas */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl sm:rounded-[2.5rem] shadow-xl p-6 sm:p-10 lg:p-14 mb-12 border border-gray-100"
        >
          <h2 className="text-2xl sm:text-3xl font-black text-[#1B3B5F] mb-8 tracking-tight">Focus Areas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-[#E87722]/5 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[#E87722] mt-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm font-medium leading-relaxed">{area}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why IERF */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl sm:rounded-[2.5rem] shadow-xl p-6 sm:p-10 lg:p-14 mb-12 border border-gray-100"
        >
          <h2 className="text-2xl sm:text-3xl font-black text-[#1B3B5F] mb-6 tracking-tight">Why IERF</h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
            India's role on the global stage is expanding rapidly, with a growing think-tank culture, particularly those dedicated to studying the various dimensions of India's global engagements. While India's global footprint grows, dedicated research on the vast Eurasian landmass — a region closely intertwined with India's history and vital to its future — has often been overlooked.
          </p>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            At IERF, we recognise the need to overcome this inertia by building an effective research ecosystem that provides up-to-date analysis of the latest developments, policy-relevant insights and fosters cross-border knowledge exchanges between India and Eurasia. IERF remains open to engaging with people from walks of life interested in exploring the new frontiers of Eurasian studies. We follow an inclusive working style and adhere to the highest standards of academic enquiry.
          </p>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/our-people"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#1B3B5F] text-white text-sm font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-[#E87722] transition-all shadow-xl hover:-translate-y-1 group"
          >
            Meet Our People <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
