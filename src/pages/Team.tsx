import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Linkedin, ChevronDown } from 'lucide-react';
import SubHero from '../components/SubHero';
import { useContent } from '../context/ContentContext';

interface Person {
  name: string;
  image: string;
  bio: string;
  linkedin: string;
}

const leadership: Person[] = [
  {
    name: 'Rahul Gupta',
    image: '/images/image10.jpg',
    bio: 'Rahul Gupta is a Senior Research Fellow with the Centre for Russian and Central Asian Studies at the School of International Studies, Jawaharlal Nehru University, New Delhi, India. He is currently pursuing a PhD at the same institution. His research interests include Eurasian geopolitics, regional connectivity between South and Central Asia, and international organisations in the Global South, with a focus on BRICS and SCO. An early career researcher specialising in post-Soviet studies, he has published extensively, including with SAGE, Routledge and the London School of Economics and Political Science Review of Books.',
    linkedin: 'https://www.linkedin.com/in/rahul-gupta-a8907110a/',
  },
  {
    name: 'Sujal Yadav',
    image: '/images/image8.jpg',
    bio: 'Sujal Yadav is a Senior Research Fellow with the Centre for Russian and Central Asian Studies at the School of International Studies, Jawaharlal Nehru University, New Delhi, India. He is currently pursuing a PhD at the same institution. His research interests include Russian foreign policy, cultural diplomacy, Russian literature, and cultural studies. An early career researcher specialising in contemporary Russian studies, her primary focus is on how non-traditional actors/institutions interact with traditional actors to shape global affairs.',
    linkedin: 'https://www.linkedin.com/in/sujal-yadav-235025208/',
  },
];

const technicalTeam: Person[] = [
  {
    name: 'Abhishek Singh',
    image: '/images/abhishek.jpg',
    bio: 'Abhishek Singh is a researcher from Jawaharlal Nehru University (JNU) and co-founder of an AI startup. An Assistant Professor specialising in complex systems, his work focuses on the intersection of emerging technologies, intelligence, and public diplomacy. He leads the digital architecture and strategic execution for IERF.',
    linkedin: 'https://www.linkedin.com/in/abhisheksingh22141/',
  },
  {
    name: 'Avadhesh Kumar',
    image: '/images/avadhesh.jpg',
    bio: 'Avadhesh Kumar is a researcher at IIT Delhi and co-founder of an AI startup. Currently pursuing an M.Tech in Computer Technology, his work focuses on the intersection of systems engineering and advanced artificial intelligence, with specific expertise in high-performance Transformer models and mathematical reasoning in LLMs. He leads the technical development and systems architecture for IERF.',
    linkedin: 'https://www.linkedin.com/in/avadhak/',
  },
];

const advisor: Person = {
  name: 'Dr. Pravesh Kumar Gupta',
  image: '/images/image1.jpg',
  bio: 'Dr Pravesh Kumar Gupta is an Associate Fellow at the Vivekananda International Foundation (VIF) and an expert on Eurasian geopolitics. He holds a PhD in Central Asian Studies from the School of International Studies, Jawaharlal Nehru University (JNU), New Delhi. His research focuses on the society and politics of the Central Asian Republics, the geopolitics of Central and South Asia, energy security, and trans-regional connectivity and energy linkages between Central and South Asia.\n\nDr Gupta\'s views are regularly published in leading platforms, such as The Hindustan Times, The Financial Express, Dunyo Information Agency (Information Agency of the Ministry of Foreign Affairs of the Republic of Uzbekistan), and the Valdai Discussion Club. He has authored a book and contributed chapters to several edited volumes in his areas of specialisation. He has also served as an International Election Observer during the Presidential Elections in Uzbekistan in 2021 and the constitutional referendum in 2023.',
  linkedin: 'https://www.linkedin.com/in/dr-pravesh-kumar-gupta-57a607187/',
};

const scholarlyNetwork: Person[] = [
  {
    name: 'Kishan Srinivas',
    image: '/images/image9.jpg',
    bio: 'Kishan Srinivas is a Master\'s student of Political Science at the Department of Political Science, University of Delhi, India. He holds a B.Tech in Electronics and Communication Engineering from Presidency University, Bangalore, India. With an interdisciplinary academic background, Kishan\'s areas of research interest include the intersection of Science and Technology with Political Science and International Relations. His research also includes studying the role of technology in Diplomacy and International Relations. He has previously worked as an AI and Geopolitical Risk intern at Hozint.',
    linkedin: 'https://www.linkedin.com/in/kishansrinivas070520',
  },
  {
    name: 'Arkadyute Nath',
    image: '/images/image7.jpg',
    bio: 'Arkadyute has completed his undergraduate studies in English literature from Hansraj College, University of Delhi. He is currently working as a Program Assistant and Social Media Manager at TGMC, under ArtSpeaks India.',
    linkedin: 'https://www.linkedin.com/in/arkadyute-nath-503008379/',
  },
  {
    name: 'Ravi Raj',
    image: '/images/image14.jpg',
    bio: 'Ravi Raj is a research scholar at the Centre for Russian and Central Asian Studies, School of International Studies, Jawaharlal Nehru University (JNU), New Delhi. His research focuses on nuclear nonproliferation, peacebuilding and conflict resolution in Eurasia, energy geopolitics, and India–Russia relations. He has participated in several international academic and policy forums, including the Nasser Fellowship in Egypt. He regularly contributes analytical pieces on global and regional security affairs.',
    linkedin: 'https://www.linkedin.com/in/ravi-raj-165145278/',
  },
  {
    name: 'Vaibhavi Gupta',
    image: '/images/image5.jpg',
    bio: 'Vaibhavi Gupta is a Junior Research Fellow with the Centre for Russian and Central Asian Studies, School of International Studies, Jawaharlal Nehru University, New Delhi, India. She is currently pursuing a PhD at the same institution. Her research interests include post-colonial and critical theories of IR, Russian literature and philosophy. As an early career researcher specialising in post-Soviet and contemporary Russian studies, her primary focus is on how non-traditional actors/institutions interact with traditional actors to shape global affairs.',
    linkedin: 'https://www.linkedin.com/in/vaibhavi-g-67363b226/',
  },
  {
    name: 'Saumya Tomar',
    image: '/images/Saumya.png',
    bio: 'Saumya Tomar is a Junior Research Fellow at the Centre for Russian and Central Asian Studies, School of International Studies, Jawaharlal Nehru University, New Delhi. She is a PhD candidate at the same institution. Her research interests include climate change, environmental security and environmental governance in Eurasia, with a special focus on the Arctic and Baltic Region. Her work examines how environmental transformation influences governance structures, disrupts economic activity, and shapes geopolitical dynamics in the Post-Soviet space.',
    linkedin: 'https://www.linkedin.com/in/saumya-tomar-6b2a76345/',
  },
  {
    name: 'Aditya Harsh',
    image: '/images/image11.png',
    bio: 'Aditya is a PhD candidate at the Centre for Russian and Central Asian Studies (CRCAS), School of International Studies, Jawaharlal Nehru University (JNU). His research engages with foreign policy analysis, especially Russia\'s foreign policy behaviour and India\'s strategic positioning within Russian policy frameworks. He has written on issues such as soft power, shifting geopolitical alignments, and the evolving dynamics of regional and global politics. His research aims to provide policy-relevant insights into contemporary geopolitical trends and their implications for India\'s foreign policy and regional security.',
    linkedin: 'https://www.linkedin.com/in/aditya-harsh-474050250/',
  },
  {
    name: 'Avik Sarkar',
    image: '/images/image3.jpg',
    bio: 'Avik Sarkar is a Senior Research Fellow with the Centre for Political Studies, Jawaharlal Nehru University, New Delhi. He works at the intersection of agrarian political economy and Subaltern Studies in India. His PhD thesis interrogates the fall of the world\'s longest-serving democratically elected Communist government in the Indian state of West Bengal. He is also interested in colonial-era Indian engagements with Germany and Russia. With deep interest in political philosophy, he advocates the need to blend Indian and non-Eurocentric conceptual universes.',
    linkedin: '',
  },
  {
    name: 'Harshal Raj Patel',
    image: '/images/image12.jpg',
    bio: 'Harshal Raj Patel completed his undergraduate studies in Philosophy at Hansraj College, University of Delhi. His final-year dissertation examined meritocracy and the concept of justice. His research interests include society, diplomatic history, and South Asian affairs. Alongside his academic pursuits, he has worked as a consultant at a New Delhi-based political consultancy. He is also a freelance columnist and contributes regularly to The Tribune, covering nationalism, geopolitics, and diplomatic history.',
    linkedin: 'https://www.linkedin.com/in/harshal-raj-patel-b81682259/',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

function ProfileCard({ person, large = false }: { person: Person; large?: boolean; key?: string | number }) {
  const [expanded, setExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Get initials for fallback
  const initials = person.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10, transition: { duration: 0.3, ease: 'easeOut' } }}
      className={`bg-white/80 backdrop-blur-xl ${
        large 
          ? 'rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_-15px_rgba(27,59,95,0.15)] border-white/60' 
          : 'rounded-2xl p-6 shadow-[0_10px_30px_-10px_rgba(27,59,95,0.1)] border-white/40'
      } border border-white/60 transition-all group relative overflow-hidden hover:border-[#E87722]/30 hover:shadow-2xl hover:shadow-[#E87722]/10`}
    >
      {/* Subtle Background Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#E87722]/5 rounded-full blur-3xl group-hover:bg-[#E87722]/10 transition-colors duration-500" />
      
      <div className={`flex ${large ? 'flex-col items-center text-center' : 'items-center'} gap-6 relative z-10`}>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className={`${large ? 'w-40 h-40 sm:w-48 sm:h-48' : 'w-20 h-20'} rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-xl group-hover:shadow-2xl group-hover:border-[#E87722]/30 transition-all duration-300 flex items-center justify-center bg-gray-50`}
        >
          {!imageError ? (
            <img 
              src={person.image} 
              alt={person.name} 
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              onError={() => setImageError(true)}
            />
          ) : (
            <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1B3B5F] to-[#2A528A] text-white ${large ? 'text-4xl' : 'text-xl'} font-black tracking-tighter`}>
              {initials}
            </div>
          )}
        </motion.div>
        
        <div className={large ? 'mt-4' : 'flex-1 min-w-0'}>
          <h4 className={`${large ? 'text-3xl' : 'text-xl'} font-black text-[#1B3B5F] leading-tight tracking-tight mb-2 group-hover:text-[#E87722] transition-colors`}>
            {person.name}
          </h4>
          
          {person.linkedin && (
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: '#E87722', color: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-50 text-gray-400 hover:text-white transition-all duration-300 shadow-sm"
            >
              <Linkedin size={12} fill="currentColor" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Expandable Bio Section */}
      <div className="mt-8 relative z-10">
        <motion.button
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-[10px] font-black text-[#1B3B5F]/60 uppercase tracking-[0.2em] hover:text-[#E87722] transition-colors bg-gray-50/50 hover:bg-[#E87722]/5 px-4 py-2 rounded-lg"
        >
          {expanded ? 'Collapse Details' : 'View Full Profile'}
          <ChevronDown size={14} className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
        </motion.button>
        
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-2 space-y-4 border-t border-gray-100/50">
                {person.bio.split('\n\n').map((p, i) => (
                  <p key={i} className="text-gray-500 text-[13px] leading-[1.8] font-medium">{p}</p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Team() {
  const { content } = useContent();
  const leadershipData = content.team.leadership;
  const technicalTeamData = content.team.technicalTeam;
  const advisorData = content.team.advisor;
  const scholarlyNetworkData = content.team.scholarlyNetwork;
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <SubHero
        title="Our People"
        subtitle="A network of excellence spanning academia, policy, and technology."
        breadcrumb={[{ label: 'Our People' }]}
      />

      <section className="py-20 sm:py-32 relative overflow-hidden">
        {/* Subtle page-level decorative elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/20 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-50/20 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/4" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Leadership */}
          <div className="mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-4xl sm:text-5xl font-black text-[#1B3B5F] mb-16 tracking-tighter"
            >
              Leadership
            </motion.h2>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              {leadershipData.map((person) => (
                <ProfileCard key={person.name} person={person} large />
              ))}
            </motion.div>
          </div>

          {/* Research Advisor */}
          <div className="mb-32">
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center text-4xl sm:text-5xl font-black text-[#1B3B5F] mb-16 tracking-tighter"
            >
              Research Advisor
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-3xl mx-auto"
            >
              <ProfileCard person={advisorData} large />
            </motion.div>
          </div>

          {/* Scholarly Network */}
          <div className="mb-32">
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center text-4xl sm:text-5xl font-black text-[#1B3B5F] mb-16 tracking-tighter"
            >
              Scholarly Network
            </motion.h2>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {scholarlyNetworkData.map((person) => (
                <ProfileCard key={person.name} person={person} />
              ))}
            </motion.div>
          </div>

          {/* Technical Team */}
          <div className="mb-12">
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center text-4xl sm:text-5xl font-black text-[#1B3B5F] mb-16 tracking-tighter"
            >
              Digital Strategy
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {technicalTeamData.map((person) => (
                <ProfileCard key={person.name} person={person} />
              ))}
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
