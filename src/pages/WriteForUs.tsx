import { Mail, Edit3, BookOpen, Globe2, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import SubHero from '../components/SubHero';

export default function WriteForUs() {
  const categories = [
    {
      icon: <BookOpen size={32} />,
      title: 'Perspectives',
      limit: 'Up to 1500 words',
      color: 'bg-blue-500',
      desc: 'Original and analytically grounded articles on broad themes related to Eurasia. Explore geopolitics, geoeconomics, regional connectivity, security, energy, culture and history.'
    },
    {
      icon: <FileText size={32} />,
      title: 'Commentary',
      limit: 'Up to 1200 words',
      color: 'bg-[#E87722]',
      desc: 'Brief commentaries on contemporary developments and unfolding regional dynamics. Informed, timely analysis of regional shifts in India’s engagement.'
    },
    {
      icon: <Globe2 size={32} />,
      title: 'Stories from Eurasia',
      limit: 'Up to 1000 words',
      color: 'bg-purple-500',
      desc: 'Travel accounts and cultural portraits of Indian and Eurasian cities. Highlighting everyday encounters, cultural experiences, and people-to-people connections.'
    }
  ];

  const guidelines = [
    'Structured & Correct: Articles should be well-written and factually correct.',
    'Original Content: Submissions must not have been published elsewhere.',
    'No in-text citations: IERF does not use endnotes or in-text citations.',
    'Hyperlinks only: All references must be hyperlinked directly in the text.',
    'Pitching: We accept unsolicited submissions, but pitching first is welcome.'
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <SubHero 
        title="Write For Us" 
        subtitle="Contribute your insights to India's first research network dedicated to the comprehensive study of the Eurasian region."
        breadcrumb={[{ label: 'Write For Us' }]}
      />

      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-black text-[#1B3B5F]">Submission Categories</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-blue-900/5 group border border-gray-100 transition-all flex flex-col"
              >
                <div className={`w-16 h-16 rounded-2xl ${cat.color} text-white flex items-center justify-center mb-8 shadow-lg transition-transform group-hover:rotate-6`}>
                  {cat.icon}
                </div>
                <h4 className="text-2xl font-black text-[#1B3B5F] mb-4">{cat.title}</h4>
                <div className="inline-block px-4 py-1.5 bg-gray-100 text-[#1B3B5F] text-[10px] font-black uppercase tracking-widest rounded-full mb-8 w-max">
                  {cat.limit}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow font-medium">
                  {cat.desc}
                </p>
                <div className="mt-8 pt-8 border-t border-gray-50">
                   <div className="text-[#E87722] text-[10px] font-black uppercase tracking-tighter">Category {idx + 1}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-12 shadow-2xl shadow-blue-900/5 border border-gray-100"
            >
              <h3 className="text-3xl font-black text-[#1B3B5F] mb-10 tracking-tight">Submission Guidelines</h3>
              <ul className="space-y-6">
                {guidelines.map((guide, idx) => (
                  <li key={idx} className="flex items-start group">
                    <div className="w-8 h-8 rounded-full bg-[#E87722]/10 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:bg-[#E87722] transition-colors">
                      <CheckCircle2 size={16} className="text-[#E87722] group-hover:text-white" />
                    </div>
                    <span className="text-gray-600 font-bold text-sm leading-relaxed">{guide}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1B3B5F] rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Mail size={150} />
              </div>
              <h3 className="text-4xl font-black mb-8 tracking-tight">Ready to publish?</h3>
              <p className="text-white/60 text-lg mb-6 font-medium leading-relaxed">
                Please send your submission along with a brief author bio (50 words) and a profile picture to our editorial team.
              </p>
              <div className="bg-white/10 rounded-2xl px-6 py-4 mb-8 border border-white/10">
                <p className="text-white/50 text-xs font-black uppercase tracking-widest mb-1">Send submissions to</p>
                <a href="mailto:submissions@indiaeurasia.org" className="text-[#E87722] text-lg font-black hover:underline">submissions@indiaeurasia.org</a>
              </div>
              <a 
                href="mailto:submissions@indiaeurasia.org" 
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#E87722] text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl hover:-translate-y-1"
              >
                <Mail size={20} className="mr-3" />
                Submit via Email
                <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </a>
              <p className="mt-8 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                Our team typically responds within 3-5 business days.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
