import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plan = {
  name: "VIP Mail",
  price: "1",
  period: "لمرة واحدة",
  badge: "🔥 عرض خاص",
  highlight: "بريدك الإلكتروني دائم طوال فترة اشتراك الدومين!",
  features: [
    "✨ بريد إلكتروني مخصص @vipm.org",
    "🎯 صالح مدى الحياة (طوال فترة اشتراك الدومين)",
    "🔒 حماية وتشفير كامل",
    "📧 دعم فني متواصل",
    "💎 انضم للنخبة الرقمية بسعر لا يُقاوم"
  ],
  dealPoints: [
    "💸 دولار واحد فقط!",
    "⏰ عرض محدود",
    "🚀 تفعيل فوري"
  ]
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-vip">اختر باقتك المثالية</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            أسعار شفافة وباقات مرنة تناسب احتياجاتك
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card 
            className="relative bg-card/50 backdrop-blur-sm border-[hsl(47,96%,53%)] shadow-[0_0_60px_hsl(47,96%,53%,0.3)] hover:shadow-[0_0_80px_hsl(47,96%,53%,0.4)] transition-all duration-300"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <span className="px-6 py-2 rounded-full bg-gradient-to-r from-[hsl(47,96%,53%)] to-[hsl(280,70%,60%)] text-background text-base font-bold animate-pulse">
                {plan.badge}
              </span>
            </div>
            
            <CardHeader className="text-center pb-6 pt-16">
              <CardTitle className="text-3xl mb-4">{plan.name}</CardTitle>
              
              <div className="mb-6">
                <div className="flex items-baseline justify-center gap-2 mb-3">
                  <span className="text-6xl font-bold text-gradient-gold">${plan.price}</span>
                  <span className="text-xl text-muted-foreground">/{plan.period}</span>
                </div>
                <p className="text-lg font-semibold text-[hsl(47,96%,53%)] bg-[hsl(47,96%,53%,0.1)] py-2 px-4 rounded-lg inline-block">
                  {plan.highlight}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 justify-center mb-6">
                {plan.dealPoints.map((point, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-[hsl(47,96%,53%,0.2)] to-[hsl(280,70%,60%,0.2)] border border-[hsl(47,96%,53%,0.3)] rounded-full text-sm font-bold"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </CardHeader>

            <CardContent className="space-y-6 pb-10">
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-lg">
                    <Check className="w-6 h-6 text-[hsl(47,96%,53%)] shrink-0 mt-1" />
                    <span className="text-foreground/90 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full bg-gradient-to-r from-[hsl(47,96%,53%)] to-[hsl(280,70%,60%)] text-background hover:opacity-90 text-lg py-6"
                size="lg"
              >
                🎉 احجز الآن بدولار واحد فقط!
              </Button>
              
              <p className="text-center text-sm text-muted-foreground">
                ⚡ انضم لآلاف المستخدمين الذين اختاروا التميز الرقمي
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
