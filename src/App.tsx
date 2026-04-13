import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { ContentProvider } from './context/ContentContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import WriteForUs from './pages/WriteForUs';
import Team from './pages/Team';
import Contact from './pages/Contact';
import VolgaToGanga from './pages/VolgaToGanga';
import Events from './pages/Events';
import Publications from './pages/Publications';
import PublicationDetail from './pages/PublicationDetail';
import IERFTalks from './pages/IERFTalks';
import DigiEurasia from './pages/DigiEurasia';
import Admin from './pages/Admin';
import ScrollToTop from './components/ScrollToTop';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="flex-grow flex flex-col"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/write-for-us" element={<WriteForUs />} />
          <Route path="/our-people" element={<Team />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/volga-to-ganga" element={<VolgaToGanga />} />
          <Route path="/events/ierf-talks" element={<IERFTalks />} />
          <Route path="/research" element={<Publications />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/publications/:id" element={<PublicationDetail />} />
          <Route path="/digieurasia" element={<DigiEurasia />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function AppLayout() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  const isHome = location.pathname === '/';
  
  if (isAdmin) {
    return <Admin />;
  }

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white">
      <Header />
      <main className="flex-grow flex flex-col relative">
        <AnimatedRoutes />
        {!isHome && (
          <div className="absolute top-0 left-0 w-full h-[500px] z-40 pointer-events-none bg-gradient-to-b from-white from-[96px] via-white/40 via-[250px] to-transparent"></div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ContentProvider>
      <Router>
        <ScrollToTop />
        <AppLayout />
      </Router>
    </ContentProvider>
  );
}
