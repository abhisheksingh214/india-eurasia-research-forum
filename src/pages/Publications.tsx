import React, { useState } from 'react';
import { BookOpen, Calendar, ArrowRight, Download, Eye, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SubHero from '../components/SubHero';
import { useContent } from '../context/ContentContext';

export default function Publications() {
  const { content } = useContent();
  const pubs = content.publications;
  const categories = ['All', 'Perspectives', 'Commentary', 'Stories from Eurasia', 'Research Notes'];
  
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPubs = pubs.filter(pub => {
    const pubType = pub.type.toLowerCase();
    const activeLower = activeCategory.toLowerCase();
    
    let matchesCategory = activeCategory === 'All';
    if (!matchesCategory) {
      if (activeCategory === 'Research Notes') {
        matchesCategory = pubType.includes('research note') || pubType.includes('working paper');
      } else {
        matchesCategory = pubType === activeLower;
      }
    }

    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = pub.title.toLowerCase().includes(searchLower) || pub.description.toLowerCase().includes(searchLower) || pub.author.toLowerCase().includes(searchLower);
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] pb-24 overflow-x-hidden">
      <SubHero 
        title="Research and Analysis" 
        subtitle="Insights and analysis from our research network on the shifting dynamics of India-Eurasia relations."
        breadcrumb={[{ label: 'Research and Analysis' }]}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 -mt-10 relative z-20 w-full">
        
        {/* Search & Filter Bar - De-boxed */}
        <div className="p-4 sm:p-6 mb-10 sm:mb-16 flex flex-col lg:flex-row gap-6 items-center">
          <div className="relative flex-grow w-full group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#E87722] transition-colors" size={22} />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search research papers, notes, and analysis..." 
              className="w-full pl-16 pr-6 py-5 bg-white rounded-2xl outline-none focus:ring-4 focus:ring-[#E87722]/10 transition-all border border-gray-100 focus:border-[#E87722]/40 text-lg font-medium shadow-sm hover:shadow-md hover:border-[#E87722]/20"
            />
          </div>
          <div className="relative w-full lg:w-auto">
            <div className="flex gap-3 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
              {categories.map((category) => (
                <button 
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-8 py-3.5 rounded-xl text-[10px] font-black whitespace-nowrap transition-all uppercase tracking-[0.2em] shadow-sm transform hover:-translate-y-0.5 ${activeCategory === category ? 'bg-[#1B3B5F] text-white shadow-xl shadow-blue-900/20' : 'bg-white border border-gray-100 text-gray-400 hover:text-[#E87722] hover:border-[#E87722]/30 hover:shadow-md hover:shadow-[#E87722]/5'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {filteredPubs.map((pub, index) => (
            <motion.div 
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col transition-all duration-500 p-4 hover:bg-[#E87722]/5 rounded-[2.5rem] hover:shadow-2xl hover:shadow-[#E87722]/10 border border-transparent hover:border-[#E87722]/10"
            >
              <div className="h-64 relative overflow-hidden rounded-3xl mb-8">
                <img 
                  src={pub.image} 
                  alt={pub.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3B5F]/40 to-transparent opacity-40"></div>
                <div className="absolute top-6 left-6 z-20">
                   <span className="bg-white/90 backdrop-blur-md text-[#1B3B5F] text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg">
                     {pub.type}
                   </span>
                </div>
              </div>
              
              <div className="px-4 flex flex-col flex-grow">
                <div className="flex items-center space-x-4 text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                  <span className="flex items-center"><Calendar size={14} className="mr-2 text-[#E87722] font-bold"/> {pub.date}</span>
                </div>
                
                <Link to={`/publications/${pub.id}`}>
                  <h3 className="text-2xl font-black text-[#1B3B5F] mb-6 hover:text-[#E87722] transition-colors leading-[1.3] tracking-tight">
                    {pub.title}
                  </h3>
                </Link>
                
                <p className="text-gray-500 text-base leading-relaxed mb-10 font-medium line-clamp-3">
                  {pub.description}
                </p>
                
                <div className="mt-auto flex items-center justify-between pt-8 border-t border-gray-50">
                  <span className="text-[10px] font-black text-[#1B3B5F]/40 uppercase tracking-[0.2em]">{pub.author}</span>
                  <Link 
                    to={`/publications/${pub.id}`}
                    className="flex items-center gap-2 text-[10px] font-black text-[#E87722] uppercase tracking-widest hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Load More */}
        <div className="mt-20 text-center">
           <button className="inline-flex items-center justify-center px-10 py-5 bg-white border border-gray-200 text-[#1B3B5F] text-xs font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-[#E87722] hover:text-white hover:border-[#E87722] transition-all shadow-xl hover:shadow-[0_0_20px_rgba(232,119,34,0.3)] hover:-translate-y-1 group">
              LOAD MORE INSIGHTS <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
           </button>
        </div>
      </div>
    </div>
  );
}
