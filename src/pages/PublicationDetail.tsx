import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, Download, Share2, Printer } from 'lucide-react';
import { publications } from '../data/publications';

export default function PublicationDetail() {
  const { id } = useParams<{ id: string }>();
  const publication = publications.find(p => p.id === id);

  if (!publication) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Publication Not Found</h2>
          <Link to="/publications" className="text-[#1B3B5F] hover:text-[#E87722] font-semibold flex items-center justify-center">
            <ArrowLeft size={18} className="mr-2" /> Back to Publications
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F6F8]">
      {/* Detail Header */}
      <section className="bg-[#1B3B5F] pt-28 pb-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link to="/publications" className="inline-flex items-center text-gray-300 hover:text-white transition-colors font-medium text-sm group">
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> BACK TO PUBLICATIONS
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block bg-[#E87722] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm mb-4">
              {publication.type}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {publication.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-300 text-sm">
              <div className="flex items-center">
                <User size={16} className="mr-2 text-[#E87722]" />
                <span className="font-medium text-white">{publication.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2 text-[#E87722]" />
                {publication.date}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            {/* Featured Image */}
            <div className="h-64 md:h-96 w-full relative">
              <img 
                src={publication.image} 
                alt={publication.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="p-8 md:p-12">
              {/* Share & Actions */}
              <div className="flex justify-end gap-3 mb-10 pb-6 border-b border-gray-100">
                <button className="p-2.5 rounded-full bg-gray-50 text-gray-500 hover:bg-[#1B3B5F] hover:text-white transition-all shadow-sm" title="Share Article">
                  <Share2 size={18} />
                </button>
                <button className="p-2.5 rounded-full bg-gray-50 text-gray-500 hover:bg-[#1B3B5F] hover:text-white transition-all shadow-sm" title="Print">
                  <Printer size={18} />
                </button>
                <button className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#1B3B5F] text-white hover:bg-[#E87722] transition-colors shadow-md font-bold text-sm">
                  <Download size={18} /> <span>PDF</span>
                </button>
              </div>

              {/* Main Text Content */}
              <div 
                className="prose prose-lg prose-slate max-w-none text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: publication.content }}
              />

              {/* Author Bio Section (Mock) */}
              <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center gap-6">
                 <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                    <img src={publication.image} alt={publication.author} className="w-full h-full object-cover grayscale" />
                 </div>
                 <div className="text-center md:text-left">
                    <h4 className="text-lg font-bold text-[#1B3B5F] mb-2">{publication.author}</h4>
                    <p className="text-gray-500 text-sm italic">Research Associate at the India Eurasia Research Forum. specializing in regional geopolitics and security dynamics across the Eurasian landmass.</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-12 text-center">
            <Link to="/publications" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1B3B5F] font-bold rounded-xl border-2 border-[#1B3B5F] hover:bg-[#1B3B5F] hover:text-white transition-all shadow-sm">
              <ArrowLeft size={18} className="mr-2" /> SEE ALL PUBLICATIONS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
