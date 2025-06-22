import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "972532750181";
    const message = "היי! אני מעוניין לשמוע על שירותי הפרסום שלכם 📱";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="group relative bg-gradient-to-br from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 
                   text-white px-6 py-4 rounded-3xl shadow-[inset_0_2px_8px_rgba(255,255,255,0.3),0_8px_32px_rgba(34,197,94,0.4)]
                   hover:shadow-[inset_0_2px_8px_rgba(255,255,255,0.4),0_12px_40px_rgba(34,197,94,0.5)]
                   transform hover:scale-105 transition-all duration-300 ease-out
                   border border-green-300/30 backdrop-blur-sm
                   animate-pulse hover:animate-none"
      >
        <div className="flex items-center gap-3">
          <MessageCircle className="w-6 h-6" />
          <div className="hidden md:block text-right">
            <div className="font-bold text-sm">דברו איתנו בוואטסאפ</div>
            <div className="text-xs opacity-90 flex items-center gap-1">
              <Phone className="w-3 h-3" />
              053-2750181
            </div>
          </div>
        </div>
        
        {/* Floating notification bubble */}
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full animate-bounce
                        shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_2px_8px_rgba(239,68,68,0.4)]"></div>
      </button>
    </div>
  );
}