import React from 'react';
import { MessageCircle, TrendingUp, Users, Zap } from 'lucide-react';

export default function Hero() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "972532750181";
    const message = "היי! אני רוצה לשמוע על הפרסום ל-100,000 עיניים";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden
                                   bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-pink-200/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-blue-200/40 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Main Headline */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                הפרסום שלך בדרך ל-
              </span>
              <br />
              <span className="relative">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                  100,000 עיניים!
                </span>
                <div className="absolute -top-2 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce
                                shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_4px_12px_rgba(251,191,36,0.4)]">
                  <span className="text-xl">👀</span>
                </div>
              </span>
            </h1>
          </div>

          {/* Subtitle with icons */}
          <div className="mb-12 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              פרסום במעל ל-<span className="font-bold text-purple-600">700 קבוצות וואטסאפ</span>
              <br />
              ממוקדות לקהל דתי, חרדי ומסורתי
            </p>
            
            {/* Features highlights */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl
                              shadow-[inset_0_2px_8px_rgba(255,255,255,0.6),0_4px_16px_rgba(0,0,0,0.1)]
                              border border-white/30">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span className="font-medium text-gray-700">פרסום מיידי</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl
                              shadow-[inset_0_2px_8px_rgba(255,255,255,0.6),0_4px_16px_rgba(0,0,0,0.1)]
                              border border-white/30">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="font-medium text-gray-700">קהל ממוקד</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl
                              shadow-[inset_0_2px_8px_rgba(255,255,255,0.6),0_4px_16px_rgba(0,0,0,0.1)]
                              border border-white/30">
                <Zap className="w-5 h-5 text-yellow-500" />
                <span className="font-medium text-gray-700">תוצאות מהירות</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-6">
            <button
              onClick={handleWhatsAppClick}
              className="group relative bg-gradient-to-r from-green-400 via-green-500 to-green-600 
                         hover:from-green-500 hover:via-green-600 hover:to-green-700
                         text-white px-12 py-6 rounded-3xl text-xl font-bold
                         shadow-[inset_0_3px_12px_rgba(255,255,255,0.3),0_12px_36px_rgba(34,197,94,0.4)]
                         hover:shadow-[inset_0_3px_12px_rgba(255,255,255,0.4),0_16px_48px_rgba(34,197,94,0.5)]
                         transform hover:scale-105 transition-all duration-300 ease-out
                         border border-green-300/30 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4">
                <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
                <span>פנו אלינו עכשיו בוואטסאפ</span>
                <div className="w-3 h-3 bg-white/30 rounded-full animate-ping"></div>
              </div>
            </button>

            <p className="text-gray-600 text-lg">
              ⚡ <span className="font-semibold">אפשרות לפרסום מיידי גם תוך שעה!</span>
            </p>
          </div>

          {/* Arrow pointing down */}
          <div className="mt-16 animate-bounce">
            <div className="w-12 h-12 mx-auto bg-white/60 backdrop-blur-sm rounded-full
                            shadow-[inset_0_2px_8px_rgba(255,255,255,0.6),0_4px_16px_rgba(0,0,0,0.1)]
                            border border-white/30 flex items-center justify-center">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent border-t-gray-600"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}