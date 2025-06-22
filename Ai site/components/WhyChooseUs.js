import React from 'react';
import { Zap, Target, Users, Clock, ThumbsUp, MessageCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Zap,
      title: "פרסום מיידי ואפקטיבי",
      description: "הפרסום שלכם יתפרסם תוך שעות ספורות ויגיע למטרה במהירות",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: Target,
      title: "קהל ממוקד ורלוונטי – מעל 100,000 איש",
      description: "הפרסום מגיע בדיוק לקהל שמעוניין בשירותים שלכם",
      color: "from-red-400 to-pink-400"
    },
    {
      icon: Users,
      title: "שירות אנושי, אישי ומדויק",
      description: "צוות מקצועי שמכיר את הקהל ויודע איך להגיע אליו בצורה הטובה ביותר",
      color: "from-blue-400 to-indigo-400"
    },
    {
      icon: Clock,
      title: "אפשרות לפרסום מיידי גם תוך שעה!",
      description: "במקרים דחופים אנחנו כאן בשבילכם עם שירות מהיר וזמין",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: ThumbsUp,
      title: "ניסיון עם מאות לקוחות מרוצים",
      description: "רשימה ארוכה של לקוחות שקיבלו תוצאות מעולות וממליצים עלינו",
      color: "from-purple-400 to-violet-400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              למה לבחור בנו?
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            אנחנו מתמחים בהגעה לקהל הדתי והמסורתי עם שירות מקצועי ותוצאות מוכחות
          </p>
        </div>

        {/* Top row with 3 features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="group relative bg-white/60 backdrop-blur-lg rounded-3xl p-8
                                       shadow-[inset_0_2px_16px_rgba(255,255,255,0.6),0_16px_48px_rgba(0,0,0,0.1)]
                                       border border-white/30 hover:scale-105 transition-all duration-300
                                       hover:shadow-[inset_0_2px_20px_rgba(255,255,255,0.7),0_20px_60px_rgba(0,0,0,0.15)]">
              
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} 
                              shadow-[inset_0_2px_8px_rgba(255,255,255,0.3),0_8px_24px_rgba(0,0,0,0.2)]
                              flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect decoration */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300 animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Bottom row with 2 features, centered */}
        <div className="mt-8 flex justify-center">
            <div className="grid md:grid-cols-2 gap-8 lg:w-2/3">
                {features.slice(3).map((feature, index) => (
                    <div key={index} className="group relative bg-white/60 backdrop-blur-lg rounded-3xl p-8
                                                shadow-[inset_0_2px_16px_rgba(255,255,255,0.6),0_16px_48px_rgba(0,0,0,0.1)]
                                                border border-white/30 hover:scale-105 transition-all duration-300
                                                hover:shadow-[inset_0_2px_20px_rgba(255,255,255,0.7),0_20px_60px_rgba(0,0,0,0.15)]">
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} 
                                    shadow-[inset_0_2px_8px_rgba(255,255,255,0.3),0_8px_24px_rgba(0,0,0,0.2)]
                                    flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
                        {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                    </p>

                    {/* Hover effect decoration */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 
                                    transition-opacity duration-300 animate-pulse"></div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}