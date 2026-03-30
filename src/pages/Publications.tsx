import { BookOpen, Calendar, ArrowRight, Download, Eye, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { publications } from '../data/publications';
import SubHero from '../components/SubHero';

export default function Publications() {
  const categories = ['All', 'Reports', 'Policy Briefs', 'Articles', 'Working Papers'];
  
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] pb-24 overflow-x-hidden">
      <SubHero 
        title="Publications" 
        subtitle="Insights and analysis from our research network on the shifting dynamics of India-Eurasia relations."
        breadcrumb={[{ label: 'Publications' }]}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 -mt-10 relative z-20 w-full">
        
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl sm:rounded-[2.5rem] shadow-2xl p-4 sm:p-6 border border-gray-100 mb-10 sm:mb-16 flex flex-col lg:flex-row gap-4 sm:gap-6 items-center backdrop-blur-xl bg-white/95">
          <div className="relative flex-grow w-full">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300" size={22} />
            <input 
              type="text" 
              placeholder="Search research papers, notes, and analysis..." 
              className="w-full pl-16 pr-6 py-4 bg-gray-50 rounded-2xl outline-none focus:ring-4 focus:ring-[#E87722]/10 transition-all border border-transparent focus:border-[#E87722]/30 text-lg font-medium"
            />
          </div>
          <div className="relative w-full lg:w-auto overflow-hidden">
            <div className="flex gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide mask-fade-right">
              {categories.map((category, index) => (
                <button 
                  key={index}
                  className={`px-6 py-3 rounded-xl text-xs font-black whitespace-nowrap transition-all uppercase tracking-widest ${index === 0 ? 'bg-[#1B3B5F] text-white shadow-xl shadow-blue-900/20' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                >
                  {category}
                </button>
              ))}
            </div>
            {/* Mobile Scroll Indicator (only visible on small screens) */}
            <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none lg:hidden"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {publications.map((pub, index) => (
            <motion.div 
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl group flex flex-col transition-all duration-500"
            >
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={pub.image} 
                  alt={pub.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3B5F]/80 to-transparent opacity-60"></div>
                <div className="absolute top-6 left-6 z-20">
                   <span className="bg-[#E87722] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">
                     {pub.type}
                   </span>
                </div>
              </div>
              
              <div className="p-5 sm:p-8 lg:p-10 flex flex-col flex-grow overflow-hidden">
                <div className="flex items-center space-x-4 text-gray-400 text-[10px] font-black uppercase tracking-[0.15em] mb-6">
                  <span className="flex items-center"><Calendar size={14} className="mr-2 text-[#E87722]"/> {pub.date}</span>
                </div>
                
                <Link to={`/publications/${pub.id}`} className="group/title">
                  <h3 className="text-xl sm:text-2xl font-black text-[#1B3B5F] mb-4 sm:mb-6 group-hover/title:text-[#E87722] transition-colors line-clamp-2 leading-tight tracking-tight publication-card-title break-words">
                    {pub.title}
                  </h3>
                </Link>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 sm:mb-8 line-clamp-3 font-medium break-words">
                  {pub.description}
                </p>
                
                <div className="mt-auto flex items-center justify-between pt-6 sm:pt-8 border-t border-gray-100">
                  <span className="text-xs font-black text-[#1B3B5F] uppercase tracking-widest">{pub.author}</span>
                  <div className="flex items-center space-x-2">
                     <Link 
                        to={`/publications/${pub.id}`}
                        className="w-10 h-10 flex items-center justify-center bg-gray-50 text-[#1B3B5F] hover:bg-[#E87722] hover:text-white transition-all rounded-xl"
                        title="Read Online"
                      >
                        <Eye size={18} />
                     </Link>
                     <button className="w-10 h-10 flex items-center justify-center bg-gray-50 text-[#1B3B5F] hover:bg-[#E87722] hover:text-white transition-all rounded-xl" title="Download PDF">
                        <Download size={18} />
                     </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Load More */}
        <div className="mt-20 text-center">
           <button className="inline-flex items-center justify-center px-10 py-5 bg-white border border-gray-200 text-[#1B3B5F] text-xs font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-[#1B3B5F] hover:text-white hover:border-[#1B3B5F] transition-all shadow-xl hover:-translate-y-1 group">
              LOAD MORE INSIGHTS <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
           </button>
        </div>
      </div>
    </div>
  );
}
