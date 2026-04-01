import { Mail, MapPin, Phone, Send, ArrowRight, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import SubHero from '../components/SubHero';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      desc: 'For general inquiries and research collaborations',
      value: 'connect@indiaeurasia.org',
      href: 'mailto:connect@indiaeurasia.org'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Visit Us',
      desc: '',
      value: 'New Delhi, India',
      href: '#'
    },
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      desc: '',
      value: '+91 7982288501',
      href: 'tel:+917982288501'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <SubHero 
        title="Contact Us" 
        subtitle="Get in touch with our team for research inquiries, membership details, or potential collaborations."
        breadcrumb={[{ label: 'Contact' }]}
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[#E87722] font-black text-sm uppercase tracking-[0.3em] mb-4">Connect</h2>
                <h3 className="text-4xl font-black text-[#1B3B5F] mb-6 tracking-tight">Global Reach, <br />Local Insight.</h3>
                <p className="text-gray-500 font-medium leading-relaxed mb-12">
                  We are always open to hearing from scholars, policy experts, and organizations interested in the India-Eurasian dialogue.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, idx) => (
                  <motion.a
                    key={idx}
                    href={info.href}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center p-8 bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-blue-900/5 hover:border-[#E87722]/30 transition-all group"
                  >
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#1B3B5F] group-hover:bg-[#E87722] group-hover:text-white transition-all mr-6 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-[#1B3B5F] uppercase tracking-widest mb-1">{info.title}</h4>
                      <p className="text-xs text-gray-400 font-bold mb-1 uppercase tracking-tighter">{info.desc}</p>
                      <p className="text-[#E87722] font-black">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-blue-900/10 border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                 <MessageSquare size={200} />
              </div>

              <h3 className="text-3xl font-black text-[#1B3B5F] mb-12 tracking-tight flex items-center">
                Send a Message
                <div className="ml-4 h-1 w-12 bg-[#E87722] rounded-full"></div>
              </h3>
              
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-transparent focus:border-[#E87722]/30 focus:ring-4 focus:ring-[#E87722]/5 outline-none transition-all font-bold text-[#1B3B5F]"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-transparent focus:border-[#E87722]/30 focus:ring-4 focus:ring-[#E87722]/5 outline-none transition-all font-bold text-[#1B3B5F]"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-transparent focus:border-[#E87722]/30 focus:ring-4 focus:ring-[#E87722]/5 outline-none transition-all font-bold text-[#1B3B5F]"
                    placeholder="Inquiry topic"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={6}
                    className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-transparent focus:border-[#E87722]/30 focus:ring-4 focus:ring-[#E87722]/5 outline-none transition-all font-bold text-[#1B3B5F] resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="group w-full flex items-center justify-center py-5 bg-[#1B3B5F] text-white rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-[#254d7a] transition-all hover:-translate-y-1 active:translate-y-0"
                >
                  <Send size={18} className="mr-3 group-hover:rotate-12 transition-transform" />
                  Transmit Message
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
