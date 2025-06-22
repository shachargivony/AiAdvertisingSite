
import React, { useState, useEffect } from 'react';
import { Package, Testimonial } from '@/entities/all';

import Header from '../components/Header';
import Hero from '../components/Hero';
import PackagesTable from '../components/PackagesTable';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function Home() {
  const [packages, setPackages] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [packagesData, testimonialsData] = await Promise.all([
        Package.list(),
        Testimonial.list()
      ]);
      setPackages(packagesData);
      setTestimonials(testimonialsData);
    } catch (error) {
      console.log('Using default data');
    }
  };

  return (
    <div className="min-h-screen" dir="rtl">
      <Header />
      <main>
        <Hero />
        <PackagesTable packages={packages} />
        <WhyChooseUs />
        <Testimonials testimonials={testimonials} />
        <Contact />
      </main>
      <WhatsAppFloat />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            A.I Advertising
          </div>
          <p className="text-gray-400 mb-6">
            הפרסום החכם שמגיע לקהל הנכון בזמן הנכון
          </p>
          <div className="text-gray-500">
            © 2025 A.I Advertising. כל הזכויות שמורות.
          </div>
        </div>
      </footer>
    </div>
  );
}
