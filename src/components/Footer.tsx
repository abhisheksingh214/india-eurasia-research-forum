import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1B3B5F] text-white pt-20 pb-10 overflow-hidden relative">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#E87722] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-400 opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center space-x-3 mb-8 group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center p-1.5 group-hover:scale-110 transition-transform">
                 <img src="/logo.svg" alt="IERF Logo" className="w-full h-full object-contain drop-shadow-md" />
              </div>
              <div className="flex items-center">
                <span className="text-white font-bold text-sm tracking-widest" style={{ fontFamily: '"Outfit", sans-serif', letterSpacing: '0.1em' }}>INDIA EURASIA RESEARCH FORUM</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              An independent research and public diplomacy platform dedicated to strengthening dialogue and deepening cooperation between India and Eurasia.
            </p>
            <div className="flex items-center space-x-4">
              {[
                { icon: <Facebook size={18} />, href: 'https://www.facebook.com/indiaeurasia' },
                { icon: <Twitter size={18} />, href: 'https://x.com/indiaeurasia' },
                { icon: <Instagram size={18} />, href: 'https://www.instagram.com/indiaeurasia' },
                { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/company/india-eurasia-research-forum' },
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#E87722] hover:text-white hover:border-[#E87722] transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-8">Navigation</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-[#E87722] transition-colors flex items-center">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#E87722] transition-colors">About Us</Link></li>
              <li><Link to="/research" className="hover:text-[#E87722] transition-colors">Research & Analysis</Link></li>
              <li><Link to="/our-people" className="hover:text-[#E87722] transition-colors">Our People</Link></li>
              <li><Link to="/write-for-us" className="hover:text-[#E87722] transition-colors">Write for Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-8">Get in Touch</h3>
            <ul className="space-y-6 text-sm text-gray-400">
              <li className="flex items-start space-x-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#E87722] group-hover:bg-[#E87722] group-hover:text-white transition-colors">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Our Location</p>
                  <p>New Delhi, India</p>
                </div>
              </li>
              <li className="flex items-start space-x-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#E87722] group-hover:bg-[#E87722] group-hover:text-white transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Email Us</p>
                  <a href="mailto:connect@indiaeurasia.org" className="hover:text-[#E87722] transition-colors">connect@indiaeurasia.org</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
              <h3 className="text-white font-bold mb-2">Join our Newsletter</h3>
              <p className="text-gray-400 text-xs mb-6">Receive the latest insights and updates from the IERF network.</p>
              <div className="flex items-center bg-white/10 rounded-full p-1 border border-white/10 focus-within:border-[#E87722] transition-colors">
                <input 
                  type="email" 
                  placeholder="Enter email" 
                  className="bg-transparent text-sm w-full px-4 outline-none text-white placeholder:text-gray-500"
                />
                <button className="bg-[#E87722] text-white p-2 rounded-full hover:bg-orange-600 transition-colors">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Affiliate Section */}
        <div className="border-t border-white/10 pt-10 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start gap-8 opacity-60">
               <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all cursor-default">
                  <img src="/ganga logo.svg" className="w-8 h-8 object-contain" />
                  <span className="text-xs font-bold uppercase tracking-wider">Volga to Ganga</span>
               </div>
            </div>
            <div className="text-gray-500 text-xs font-medium">
               &copy; {new Date().getFullYear()} India Eurasia Research Forum. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
