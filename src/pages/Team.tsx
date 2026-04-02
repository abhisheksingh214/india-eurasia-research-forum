import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Linkedin, ChevronDown } from 'lucide-react';
import SubHero from '../components/SubHero';

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
  {
    name: 'Abhishek Singh',
    image: '/images/abhishek.jpg',
    bio: 'Abhishek Singh is a researcher from Jawaharlal Nehru University (JNU) and co-founder of an AI startup. An Assistant Professor specialising in complex systems, his work focuses on the intersection of emerging technologies, artificial intelligence, and public diplomacy. He leads the digital architecture and strategic execution for IERF.',
    linkedin: '',
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
    name: 'Saumya Tomar',
    image: '/images/saumya.jpg',
    bio: 'Saumya Tomar is a Junior Research Fellow at the Centre for Russian and Central Asian Studies, School of International Studies, Jawaharlal Nehru University, New Delhi. She is a PhD candidate at the same institution. Her research interests include climate change, environmental security and environmental governance in Eurasia, with a special focus on the Arctic and Baltic Region. Her work examines how environmental transformation influences governance structures, disrupts economic activity, and shapes geopolitical dynamics in the Post-Soviet space.',
    linkedin: 'https://www.linkedin.com/in/saumya-tomar-6b2a76345/',
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

function ProfileCard({ person, large = false }: { person: Person; large?: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-white ${large ? 'rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-10 shadow-xl' : 'rounded-2xl p-5 sm:p-8 shadow-sm hover:shadow-xl'} border border-gray-100 transition-all group`}
    >
      <div className={`flex ${large ? 'flex-col items-center text-center' : 'items-center'} gap-4 sm:gap-5`}>
        <div className={`${large ? 'w-32 h-32 sm:w-40 sm:h-40' : 'w-16 h-16'} rounded-full overflow-hidden flex-shrink-0 border-4 border-gray-50 shadow-inner`}>
          <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
        </div>
        <div className={large ? '' : 'flex-1 min-w-0'}>
          <h4 className={`${large ? 'text-2xl' : 'text-lg'} font-black text-[#1B3B5F] leading-tight`}>{person.name}</h4>
          {person.linkedin && (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-1 text-xs font-bold text-[#0077B5] hover:underline"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
          )}
        </div>
      </div>

      {/* Expandable Bio */}
      <div className="mt-4">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-xs font-black text-[#1B3B5F] uppercase tracking-widest hover:text-[#E87722] transition-colors"
        >
          {expanded ? 'Hide Bio' : 'Full Bio'}
          <ChevronDown size={14} className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-3">
                {person.bio.split('\n\n').map((p, i) => (
                  <p key={i} className="text-gray-500 text-sm leading-relaxed">{p}</p>
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
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <SubHero
        title="Our People"
        subtitle=""
        breadcrumb={[{ label: 'Our People' }]}
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Leadership */}
          <div className="mb-20">
            <h2 className="text-center text-3xl sm:text-4xl font-black text-[#1B3B5F] mb-12 tracking-tight">Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadership.map((person) => (
                <ProfileCard key={person.name} person={person} large />
              ))}
            </div>
          </div>

          {/* Research Advisor */}
          <div className="mb-20">
            <h2 className="text-center text-3xl sm:text-4xl font-black text-[#1B3B5F] mb-12 tracking-tight">Research Advisor</h2>
            <div className="max-w-2xl mx-auto">
              <ProfileCard person={advisor} large />
            </div>
          </div>

          {/* Scholarly Network */}
          <div>
            <h2 className="text-center text-3xl sm:text-4xl font-black text-[#1B3B5F] mb-12 tracking-tight">Scholarly Network</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scholarlyNetwork.map((person) => (
                <ProfileCard key={person.name} person={person} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
