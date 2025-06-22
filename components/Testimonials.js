import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials({ testimonials }) {
  const defaultTestimonials = [
    {
      customerName: "דניאל כהן",
      business: "בעל קבוצת מוצרים של עלי אקספרס",
      testimonialText: "בחרתי בחבילת ה-VIP כדי לבדוק אם באמת יש הבדל. קיבלתי יותר חשיפה ממה שציפיתי, והכי חשוב! הצטרפו משתתפים חדשים לקבוצה. השירות היה נעים, והכי אהבתי את הגמישות בשינויים.",
      rating: 5
    },
    {
      customerName: "רחלי RE MAX",
      business: "מתווכת נדלן ירושלים",
      testimonialText: "בס״ד\nממליצה מאוד!!!\nשירות ברמה הגבוהה ביותר – מקצועי, מהיר ומדויק.\nהמחיר מצוין והתוצאה מדברת בעד עצמה!\nתודה על ליווי אישי וזמינות מלאה לאורך כל הדרך 🙏",
      rating: 5
    },
    {
      customerName: "רותם לוי",
      business: "סוכן תיירות דיגיטלי",
      testimonialText: "ה-VIP נתנה לי שקט, המודעות נבנו בצורה מקצועית, והקמפיין רץ בלי כאב ראש. בהחלט קיבלתי תנועות חדשות לעסק.",
      rating: 5
    }
  ];

  const testimonialsToShow = testimonials?.length > 0 ? testimonials : defaultTestimonials;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              מה הלקוחות שלנו אומרים
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            תוצאות אמיתיות מלקוחות מרוצים שקיבלו בדיוק מה שהם חיפשו
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsToShow.map((testimonial, index) => (
            <div key={index} className="group relative bg-white/60 backdrop-blur-lg rounded-3xl p-8
                                       shadow-[inset_0_2px_16px_rgba(255,255,255,0.6),0_16px_48px_rgba(0,0,0,0.1)]
                                       border border-white/30 hover:scale-105 transition-all duration-300
                                       hover:shadow-[inset_0_2px_20px_rgba(255,255,255,0.7),0_20px_60px_rgba(0,0,0,0.15)]">
              
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-8 h-8 text-gray-400" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.testimonialText}"
              </blockquote>

              {/* Customer info */}
              <div className="border-t border-gray-200/50 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full
                                  shadow-[inset_0_2px_8px_rgba(255,255,255,0.3),0_4px_16px_rgba(0,0,0,0.2)]
                                  flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.customerName.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">{testimonial.customerName}</div>
                    <div className="text-gray-600 text-sm">{testimonial.business}</div>
                  </div>
                </div>
              </div>

              {/* Hover effect decoration */}
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-300 rounded-full opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}