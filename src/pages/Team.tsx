import { motion } from 'motion/react';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import SubHero from '../components/SubHero';

const teamMembers = [
  {
    name: 'Rahul Gupta',
    role: 'Leadership',
    image: '/images/image10.jpg',
    bio: 'Rahul Gupta is a Senior Research Fellow with the Centre for Russian and Central Asian Studies at the School of International Studies, JNU. His research focuses on Eurasian geopolitics, regional connectivity, and international organisations in the Global South.'
  },
  {
    name: 'Sujal Yadav',
    role: 'Leadership',
    image: '/images/image8.jpg',
    bio: 'Sujal Yadav is a Senior Research Fellow at JNU, specialising in Russian foreign policy, cultural diplomacy, and literary studies. He has served as an official interpreter at major international platforms including the SCO Forum.'
  },
  {
    name: 'Kishan Srinivas',
    role: 'Team Member',
    image: '/images/image9.jpg',
    bio: 'Kishan holds a B.Tech in ECE and is a Master’s student of Political Science at DU. His research explores the intersection of Science, Technology, and International Relations.'
  },
  {
    name: 'Arkadyute Nath',
    role: 'Team Member',
    image: '/images/image7.jpg',
    bio: 'Arkadyute is an English literature graduate from Hansraj College. He manages social media and programs at TGMC under ArtSpeaks India.'
  },
  {
    name: 'Ravi Raj',
    role: 'Team Member',
    image: '/images/image14.jpg',
    bio: 'Ravi Raj is a research scholar at JNU focusing on nuclear nonproliferation, conflict resolution in Eurasia, and energy geopolitics.'
  },
  {
    name: 'Vaibhavi Gupta',
    role: 'Team Member',
    image: '/images/image5.jpg',
    bio: 'Vaibhavi is a Junior Research Fellow at JNU. Her research interests include critical theories of IR, Russian philosophy, and non-traditional global actors.'
  },
  {
    name: 'Aditya Harsh',
    role: 'Team Member',
    image: '/images/image11.png',
    bio: 'Aditya is a PhD candidate at JNU researching foreign policy analysis and Russia’s strategic positioning within global frameworks.'
  },
  {
    name: 'Avik Sarkar',
    role: 'Team Member',
    image: '/images/image3.jpg',
    bio: 'Avik is a Senior Research Fellow at JNU, working on agrarian political economy and non-Eurocentric political philosophy.'
  },
  {
    name: 'Harshal Raj Patel',
    role: 'Team Member',
    image: '/images/image12.jpg',
    bio: 'Harshal is a Philosophy graduate and political consultant. He contributes regularly to The Tribune on geopolitics and cultural history.'
  },
  {
    name: 'Abhishek Singh',
    role: 'Team Member',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop',
    bio: 'Contributing to the research and operational goals of the India Eurasia Research Forum.'
  }
];

const advisor = {
  name: 'Dr. Pravesh Kumar Gupta',
  role: 'Research Advisor',
  image: '/images/image1.jpg',
  bio: 'Dr Pravesh Kumar Gupta is an Associate Fellow at the Vivekananda International Foundation (VIF) and an expert on Eurasian geopolitics. He holds a PhD in Central Asian Studies from JNU. His research focuses on the society and politics of Central Asian Republics, energy security, and trans-regional connectivity.\n\nDr Gupta’s views are regularly published in leading platforms such as The Hindustan Times, Financial Express, and the Valdai Discussion Club.'
};

export default function Team() {
  const leadership = teamMembers.filter(m => m.role === 'Leadership');
  const members = teamMembers.filter(m => m.role === 'Team Member');

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <SubHero 
        title="Our Experts" 
        subtitle="The diverse team of scholars and researchers bridge-building between India and the Eurasian heartland."
        breadcrumb={[{ label: 'Team' }]}
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Advisor Section - Premium Highlight */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-[#E87722] font-black text-sm uppercase tracking-[0.3em] mb-4">Academic Guidance</h2>
              <h3 className="text-4xl font-black text-[#1B3B5F]">Research Advisor</h3>
            </div>
            
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-[#1B3B5F] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row relative"
            >
              <div className="lg:w-1/3 relative h-96 lg:h-auto">
                <img src={advisor.image} alt={advisor.name} className="absolute inset-0 w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#1B3B5F] via-transparent to-transparent"></div>
              </div>
              <div className="lg:w-2/3 p-12 lg:p-20 text-white relative">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                   <img src="/logo.svg" className="w-64 grayscale invert" alt="" />
                </div>
                <h4 className="text-4xl font-black mb-2 tracking-tight">{advisor.name}</h4>
                <div className="text-[#E87722] font-black text-xs uppercase tracking-[0.2em] mb-8">{advisor.role}</div>
                <div className="space-y-6">
                  {advisor.bio.split('\n\n').map((p, i) => (
                    <p key={i} className="text-white/70 text-lg leading-relaxed font-medium">{p}</p>
                  ))}
                </div>
                <div className="flex space-x-4 mt-12">
                   <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#E87722] transition-all"><Linkedin size={20} /></a>
                   <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#E87722] transition-all"><Mail size={20} /></a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Leadership Section */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-[#E87722] font-black text-sm uppercase tracking-[0.3em] mb-4">Core Management</h2>
              <h3 className="text-4xl font-black text-[#1B3B5F]">Leadership</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {leadership.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-blue-900/5 border border-gray-100 flex flex-col items-center text-center group"
                >
                  <div className="w-40 h-40 rounded-[2rem] overflow-hidden border-8 border-gray-50 mb-8 shadow-inner transition-transform group-hover:scale-105 duration-500">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-2xl font-black text-[#1B3B5F] mb-2">{member.name}</h4>
                  <div className="text-[#E87722] font-black text-[10px] uppercase tracking-[0.2em] mb-6">{member.role}</div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium">{member.bio}</p>
                  <div className="flex space-x-3">
                     <a href="#" className="p-3 bg-gray-50 rounded-xl text-[#1B3B5F] hover:bg-[#1B3B5F] hover:text-white transition-all"><Linkedin size={18} /></a>
                     <a href="#" className="p-3 bg-gray-50 rounded-xl text-[#1B3B5F] hover:bg-[#1B3B5F] hover:text-white transition-all"><Mail size={18} /></a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Full Team Grid */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-[#E87722] font-black text-sm uppercase tracking-[0.3em] mb-4">Scholarly Network</h2>
              <h3 className="text-4xl font-black text-[#1B3B5F]">Research Fellows</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white/50 backdrop-blur-sm p-8 rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10 transition-all group"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden mr-4 flex-shrink-0">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-[#1B3B5F] leading-tight group-hover:text-[#E87722] transition-colors">{member.name}</h4>
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{member.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed font-medium mb-6 line-clamp-4">
                    {member.bio}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                    <div className="flex space-x-2">
                       <a href="#" className="p-2 text-gray-300 hover:text-[#1B3B5F] transition-colors"><Linkedin size={16} /></a>
                       <a href="#" className="p-2 text-gray-300 hover:text-[#1B3B5F] transition-colors"><Mail size={16} /></a>
                    </div>
                    <button className="text-[10px] font-black text-[#1B3B5F] uppercase tracking-widest flex items-center group-hover:text-[#E87722] transition-colors">
                      Full Bio <ArrowUpRight size={14} className="ml-1" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
