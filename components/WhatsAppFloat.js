import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "972532750181";
    const message = "היי! אני מעוניין לשמוע על שירותי הפרסום שלכם";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="flex items-center justify-center bg-gradient-to-br from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 
                   text-white w-16 h-16 rounded-full shadow-[inset_0_2px_8px_rgba(255,255,255,0.3),0_4px_16px_rgba(34,197,94,0.3)]
                   hover:shadow-[inset_0_2px_8px_rgba(255,255,255,0.4),0_6px_20px_rgba(34,197,94,0.4)]
                   transform hover:scale-110 transition-all duration-300 ease-out
                   border border-green-300/30 backdrop-blur-sm animate-[pulse-flash_1.2s_infinite]"
        aria-label="צ'אט וואטסאפ"
      >
        <MessageCircle className="w-8 h-8" />
      </button>
      <style jsx global>{`
        @keyframes pulse-flash {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.7), 0_4px_16px_rgba(34,197,94,0.3); }
          50% { box-shadow: 0 0 0 8px rgba(34,197,94,0.15), 0_4px_16px_rgba(34,197,94,0.3); }
        }
      `}</style>
    </div>
  );
}