import React from 'react';
import { Check, X, Crown, MessageCircle, Star } from 'lucide-react';

export default function PackagesTable({ packages }) {
  const handleWhatsAppClick = (packageName) => {
    const phoneNumber = "972532750181";
    const message = `היי! אני מעוניין בחבילת ${packageName}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const defaultPackages = [
    {
      name: "למתחילים",
      originalPrice: 100,
      currentPrice: 75,
      duration: "יום אחד",
      allGroups: true,
      adCreation: false,
      personalConsulting: false,
      flexibility: false,
      isPopular: false,
      description: "מתאים לניסיון ראשון"
    },
    {
      name: "פרימיום",
      originalPrice: 300,
      currentPrice: 220,
      duration: "5 ימים רצופים",
      allGroups: true,
      adCreation: false,
      personalConsulting: true,
      flexibility: true,
      isPopular: false,
      description: "הבחירה הפופולרית"
    },
    {
      name: "VIP",
      originalPrice: 550,
      currentPrice: 450,
      duration: "חודש מלא (5 ימים בשבוע)",
      allGroups: true,
      adCreation: true,
      personalConsulting: true,
      flexibility: true,
      isPopular: true,
      description: "הכי משתלמת - כוללת גם בניית מודעה מקצועית"
    }
  ];

  const packagesToShow = packages?.length > 0 ? packages : defaultPackages;

  return (
    <section id="packages" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              החבילות שלנו
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            בחרו את החבילה המתאימה לכם ותתחילו לקבל פניות כבר היום
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-hidden rounded-3xl 
                        shadow-[0_20px_60px_rgba(0,0,0,0.1)] bg-white/60 backdrop-blur-lg
                        border border-white/30 pt-4">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50/80 to-gray-100/80 backdrop-blur-sm">
                <th className="p-6 text-right font-bold text-gray-700 text-lg">תכונה / חבילה</th>
                {packagesToShow.map((pkg, index) => (
                  <th key={index} className="p-6 text-center relative">
                    {pkg.isPopular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-1 rounded-full text-sm font-bold
                                        shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_4px_12px_rgba(251,191,36,0.4)]
                                        flex items-center gap-1">
                          <Crown className="w-3 h-3" />
                          הכי משתלמת
                        </div>
                      </div>
                    )}
                    <div className="mt-2">
                      <div className="font-bold text-xl text-gray-800">{pkg.name}</div>
                      <div className="flex items-center justify-center gap-2 mt-2">
                        {pkg.originalPrice > pkg.currentPrice && (
                          <span className="text-gray-400 line-through text-lg">{pkg.originalPrice} ₪</span>
                        )}
                        <span className="text-2xl font-bold text-green-600">{pkg.currentPrice} ₪</span>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200/50">
                <td className="p-6 font-medium text-gray-700">כמות ימי פרסום</td>
                {packagesToShow.map((pkg, index) => (
                  <td key={index} className="p-6 text-center font-medium text-gray-600">{pkg.duration}</td>
                ))}
              </tr>
              <tr className="bg-gray-50/30 border-t border-gray-200/50">
                <td className="p-6 font-medium text-gray-700">פרסום בכל 700 הקבוצות</td>
                {packagesToShow.map((pkg, index) => (
                  <td key={index} className="p-6 text-center">
                    {pkg.allGroups ? <Check className="w-6 h-6 text-green-500 mx-auto" /> : <X className="w-6 h-6 text-red-400 mx-auto" />}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-gray-200/50">
                <td className="p-6 font-medium text-gray-700">בניית מודעה מקצועית</td>
                {packagesToShow.map((pkg, index) => (
                  <td key={index} className="p-6 text-center">
                    {pkg.adCreation ? <Check className="w-6 h-6 text-green-500 mx-auto" /> : <X className="w-6 h-6 text-red-400 mx-auto" />}
                  </td>
                ))}
              </tr>
              <tr className="bg-gray-50/30 border-t border-gray-200/50">
                <td className="p-6 font-medium text-gray-700">ייעוץ אישי להתאמה מקסימלית</td>
                {packagesToShow.map((pkg, index) => (
                  <td key={index} className="p-6 text-center">
                    {pkg.personalConsulting ? (
                      <div className="flex items-center justify-center gap-1">
                        <Check className="w-6 h-6 text-green-500" />
                        <span className="text-sm text-gray-600">(בוואטסאפ)</span>
                      </div>
                    ) : <X className="w-6 h-6 text-red-400 mx-auto" />}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-gray-200/50">
                <td className="p-6 font-medium text-gray-700">זמינות גבוהה לשינויים</td>
                {packagesToShow.map((pkg, index) => (
                  <td key={index} className="p-6 text-center">
                    {pkg.flexibility ? <Check className="w-6 h-6 text-green-500 mx-auto" /> : <X className="w-6 h-6 text-red-400 mx-auto" />}
                  </td>
                ))}
              </tr>
              <tr className="bg-gray-50/30 border-t border-gray-200/50">
                <td className="p-6 font-medium text-gray-700"></td>
                {packagesToShow.map((pkg, index) => (
                  <td key={index} className="p-6">
                    <button
                      onClick={() => handleWhatsAppClick(pkg.name)}
                      className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600
                                 text-white px-6 py-4 rounded-2xl font-bold text-lg
                                 shadow-[inset_0_2px_8px_rgba(255,255,255,0.3),0_8px_24px_rgba(34,197,94,0.3)]
                                 hover:shadow-[inset_0_2px_8px_rgba(255,255,255,0.4),0_12px_32px_rgba(34,197,94,0.4)]
                                 transform hover:scale-105 transition-all duration-300
                                 flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      בחר חבילה
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards View */}
        <div className="lg:hidden grid gap-8">
          {packagesToShow.map((pkg, index) => (
            <div key={index} className={`relative bg-white/60 backdrop-blur-lg rounded-3xl p-8 
                                        shadow-[inset_0_2px_16px_rgba(255,255,255,0.6),0_16px_48px_rgba(0,0,0,0.1)]
                                        border border-white/30 ${pkg.isPopular ? 'ring-2 ring-yellow-400' : ''}`}>
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-2 rounded-full text-sm font-bold
                                  shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_4px_12px_rgba(251,191,36,0.4)]
                                  flex items-center gap-2">
                    <Crown className="w-4 h-4" />
                    הכי משתלמת
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  {pkg.originalPrice > pkg.currentPrice && (
                    <span className="text-gray-400 line-through text-xl">{pkg.originalPrice} ₪</span>
                  )}
                  <span className="text-3xl font-bold text-green-600">{pkg.currentPrice} ₪</span>
                </div>
                <p className="text-gray-600">{pkg.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-gray-200/50">
                  <span className="font-medium text-gray-700">משך פרסום</span>
                  <span className="text-gray-600">{pkg.duration}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200/50">
                  <span className="font-medium text-gray-700">700 קבוצות</span>
                  {pkg.allGroups ? <Check className="w-5 h-5 text-green-500" /> : <X className="w-5 h-5 text-red-400" />}
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200/50">
                  <span className="font-medium text-gray-700">בניית מודעה</span>
                  {pkg.adCreation ? <Check className="w-5 h-5 text-green-500" /> : <X className="w-5 h-5 text-red-400" />}
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200/50">
                  <span className="font-medium text-gray-700">ייעוץ אישי</span>
                  {pkg.personalConsulting ? <Check className="w-5 h-5 text-green-500" /> : <X className="w-5 h-5 text-red-400" />}
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200/50">
                  <span className="font-medium text-gray-700">זמינות לשינויים</span>
                  {pkg.flexibility ? <Check className="w-5 h-5 text-green-500" /> : <X className="w-5 h-5 text-red-400" />}
                </div>
              </div>

              <button
                onClick={() => handleWhatsAppClick(pkg.name)}
                className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600
                           text-white px-8 py-4 rounded-2xl font-bold text-lg
                           shadow-[inset_0_2px_8px_rgba(255,255,255,0.3),0_8px_24px_rgba(34,197,94,0.3)]
                           hover:shadow-[inset_0_2px_8px_rgba(255,255,255,0.4),0_12px_32px_rgba(34,197,94,0.4)]
                           transform hover:scale-102 transition-all duration-300
                           flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                בחר חבילה זו
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
