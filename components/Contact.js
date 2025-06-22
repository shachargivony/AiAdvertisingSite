import React from 'react';
import { MessageCircle, Phone, Clock, Target } from 'lucide-react';

export default function Contact() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "972532750181";
    const message = "היי! אני רוצה לשמוע עוד פרטים על שירותי הפרסום שלכם";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              מעוניינים להתחיל?
            </span>
          </h2>
          
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-12
                          shadow-[inset_0_2px_20px_rgba(255,255,255,0.6),0_20px_60px_rgba(0,0,0,0.1)]
                          border border-white/30 mb-12">
            
            <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              💬 רוצה להתחיל לפרסם ולהיחשף לקהל ממוקד כבר היום?
            </div>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              הצטרפו למאות לקוחות מרוצים שכבר מקבלים תוצאות מעולות
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-3 bg-white/40 rounded-2xl p-4">
                <Target className="w-6 h-6 text-purple-500" />
                <span className="font-medium text-gray-700">קהל ממוקד 100,000+ איש</span>
              </div>
              <div className="flex items-center gap-3 bg-white/40 rounded-2xl p-4">
                <Clock className="w-6 h-6 text-blue-500" />
                <span className="font-medium text-gray-700">פרסום מיידי תוך שעה</span>
              </div>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="group relative flex flex-col items-center justify-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 
                         hover:from-green-500 hover:via-green-600 hover:to-green-700
                         text-white px-10 py-4 rounded-3xl text-lg font-bold
                         shadow-[inset_0_3px_12px_rgba(255,255,255,0.3),0_12px_32px_rgba(34,197,94,0.3)]
                         hover:shadow-[inset_0_3px_12px_rgba(255,255,255,0.4),0_16px_40px_rgba(34,197,94,0.4)]
                         transform hover:scale-105 transition-all duration-300 ease-out
                         border border-green-300/30 backdrop-blur-sm
                         animate-[pulse-flash-strong_1.1s_infinite] mx-auto"
              style={{ minWidth: '220px' }}
            >
              <MessageCircle className="w-6 h-6 mb-1" />
              <span className="text-base md:text-lg font-semibold mb-1">053-2750181</span>
              <span className="text-sm md:text-base">לחץ כאן ונדבר בוואטסאפ</span>
              {/* Floating notification bubble */}
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-red-500 rounded-full animate-bounce
                              shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_2px_8px_rgba(239,68,68,0.4)]"></div>
              <style jsx global>{`
                @keyframes pulse-flash-strong {
                  0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.7), 0_12px_32px_rgba(34,197,94,0.3); }
                  50% { box-shadow: 0 0 0 18px rgba(34,197,94,0.18), 0_12px_32px_rgba(34,197,94,0.3); }
                }
              `}</style>
            </button>
          </div>

          <div className="text-lg text-gray-600">
            ⚡ <span className="font-semibold">תגובה מיידית בוואטסאפ - אנחנו כאן בשבילכם!</span>
          </div>
        </div>
      </div>
    </section>
  );
}