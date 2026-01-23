
import React, { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { NAV_LINKS, ACADEMY_INFO } from '../constants';
import { SectionId } from '../types';

interface NavbarProps {
  onNavigateHome?: () => void;
  onNavigateContact?: () => void;
  onNavigateSystem?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateHome, onNavigateContact, onNavigateSystem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === `#${SectionId.CONTACT}` && onNavigateContact) {
      e.preventDefault();
      onNavigateContact();
      setIsOpen(false);
    } else if (href === `#${SectionId.SYSTEM}` && onNavigateSystem) {
      e.preventDefault();
      onNavigateSystem();
      setIsOpen(false);
    } else if (href === `#${SectionId.HOME}` && onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <button onClick={onNavigateHome} className="flex-shrink-0 flex items-center gap-2">
              < GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-slate-800 tracking-tight">
                {ACADEMY_INFO.name}
              </span>
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
