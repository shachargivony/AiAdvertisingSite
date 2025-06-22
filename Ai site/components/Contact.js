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
              className="group bg-gradient-to-r from-green-400 via-green-500 to-green-600 
                         hover:from-green-500 hover:via-green-600 hover:to-green-700
                         text-white px-12 py-6 rounded-3xl text-2xl font-bold
                         shadow-[inset_0_3px_12px_rgba(255,255,255,0.3),0_16px_48px_rgba(34,197,94,0.4)]
                         hover:shadow-[inset_0_3px_12px_rgba(255,255,255,0.4),0_20px_60px_rgba(34,197,94,0.5)]
                         transform hover:scale-105 transition-all duration-300 ease-out
                         border border-green-300/30 backdrop-blur-sm
                         flex items-center gap-4 mx-auto"
            >
              <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
              <div className="text-right">
                <div>לחץ כאן ונדבר בוואטסאפ</div>
                <div className="flex items-center gap-2 text-lg opacity-90">
                  <Phone className="w-4 h-4" />
                  053-2750181
                </div>
              </div>
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