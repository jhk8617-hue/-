
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AcademyIntroduction from './components/AcademyIntroduction';
import Features from './components/Features';
import SchoolStrategy from './components/SchoolStrategy';
import Contact from './components/Contact';
import LevelTestModal from './components/LevelTestModal';
import EducationSystemPage from './components/EducationSystemPage';
import ContactPage from './components/ContactPage';
import { ViewType } from './types';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewType>('home');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const navigateToSystem = () => {
    setCurrentView('system-detail');
    window.scrollTo(0, 0);
  };
  
  const navigateToContact = () => {
    setCurrentView('contact-detail');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentView('home');
    window.scrollTo(0, 0);
  };

  // Handle browser back button/navigation
  useEffect(() => {
    const handlePopState = () => {
      if (currentView !== 'home') {
        setCurrentView('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentView]);

  if (currentView === 'system-detail') {
    return (
      <div className="min-h-screen bg-white">
        <EducationSystemPage onBack={navigateToHome} onOpenModal={openModal} />
        <LevelTestModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    );
  }

  if (currentView === 'contact-detail') {
    return (
      <div className="min-h-screen bg-white">
        <ContactPage onBack={navigateToHome} />
        <LevelTestModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar 
        onNavigateHome={navigateToHome} 
        onNavigateContact={navigateToContact}
        onNavigateSystem={navigateToSystem}
      />
      <main>
        <Hero onNavigateSystem={navigateToSystem} />
        <AcademyIntroduction onOpenModal={openModal} />
        <Features />
        <SchoolStrategy onOpenModal={openModal} />
      </main>
      <Contact onNavigateContact={navigateToContact} />
      
      <LevelTestModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
};

export default App;
