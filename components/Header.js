import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "972532750181";
    const message = "היי! אני מעוניין לשמוע על שירותי הפרסום שלכם";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-lg 
                      shadow-[0_8px_32px_rgba(0,0,0,0.1)] border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              A.I Advertising
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 ml-6"
            >
              בית
            </button>
            <button
              onClick={() => scrollToSection('packages')}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
            >
              החבילות שלנו
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
            >
              המלצות
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
            >
              צור קשר
            </button>
          </nav>

          {/* Desktop WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-green-400 to-green-500 
                       hover:from-green-500 hover:to-green-600 text-white px-6 py-3 rounded-2xl
                       shadow-[inset_0_2px_8px_rgba(255,255,255,0.3),0_4px_16px_rgba(34,197,94,0.3)]
                       hover:shadow-[inset_0_2px_8px_rgba(255,255,255,0.4),0_6px_20px_rgba(34,197,94,0.4)]
                       transform hover:scale-105 transition-all duration-300 font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            צור קשר
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-2xl bg-gray-100/80 hover:bg-gray-200/80 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg 
                          shadow-[0_8px_32px_rgba(0,0,0,0.1)] border-b border-white/20">
            <nav className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-right py-3 px-4 rounded-2xl hover:bg-purple-50 
                           text-gray-700 hover:text-purple-600 font-medium transition-all duration-200"
              >
                בית
              </button>
              <button
                onClick={() => scrollToSection('packages')}
                className="block w-full text-right py-3 px-4 rounded-2xl hover:bg-purple-50 
                           text-gray-700 hover:text-purple-600 font-medium transition-all duration-200"
              >
                החבילות שלנו
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-right py-3 px-4 rounded-2xl hover:bg-purple-50 
                           text-gray-700 hover:text-purple-600 font-medium transition-all duration-200"
              >
                המלצות
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-right py-3 px-4 rounded-2xl hover:bg-purple-50 
                           text-gray-700 hover:text-purple-600 font-medium transition-all duration-200"
              >
                צור קשר
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 to-green-500 
                           text-white px-6 py-4 rounded-2xl font-medium mt-4
                           shadow-[inset_0_2px_8px_rgba(255,255,255,0.3),0_4px_16px_rgba(34,197,94,0.3)]"
              >
                <MessageCircle className="w-4 h-4" />
                דברו איתנו בוואטסאפ
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
