
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AcademyIntroduction from './components/AcademyIntroduction';
import Features from './components/Features';
import SchoolStrategy from './components/SchoolStrategy';
import Contact from './components/Contact';
import ConsultationModal from './components/ConsultationModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero onOpenModal={handleOpenModal} />
        <AcademyIntroduction onOpenModal={handleOpenModal} />
        <Features />
        <SchoolStrategy onOpenModal={handleOpenModal} />
      </main>
      <Contact />
      
      {/* Quick Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button 
          onClick={handleOpenModal}
          className="bg-blue-600 text-white flex items-center gap-2 px-6 py-4 rounded-full shadow-2xl hover:scale-110 transition-all font-bold group"
        >
          <Send className="h-5 w-5" />
          <span>상담 신청</span>
        </button>
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
