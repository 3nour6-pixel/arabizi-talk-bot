import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "VIP أساسي",
    price: "99",
    period: "سنويًا",
    features: [
      "بريد إلكتروني مخصص @vipm.org",
      "مساحة تخزين 50 جيجابايت",
      "حماية متقدمة من البريد المزعج",
      "دعم فني عبر البريد الإلكتروني",
      "تشفير شامل للرسائل"
    ],
    popular: false
  },
  {
    name: "VIP بريميوم",
    price: "199",
    period: "سنويًا",
    features: [
      "كل مزايا الباقة الأساسية",
      "مساحة تخزين 200 جيجابايت",
      "حتى 5 عناوين بريد إضافية",
      "دعم فني ذو أولوية",
      "نسخ احتياطي تلقائي",
      "واجهة مخصصة للأعمال"
    ],
    popular: true
  },
  {
    name: "VIP إكسكلوسيف",
    price: "399",
    period: "سنويًا",
    features: [
      "كل مزايا الباقة البريميوم",
      "مساحة تخزين غير محدودة",
      "عناوين بريد غير محدودة",
      "دعم فني على مدار الساعة",
      "مدير حساب شخصي",
      "تكامل متقدم مع تطبيقات الأعمال"
    ],
    popular: false
  }
];

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

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative bg-card/50 backdrop-blur-sm ${
                plan.popular 
                  ? 'border-[hsl(47,96%,53%)] shadow-[0_0_40px_hsl(47,96%,53%,0.2)] scale-105' 
                  : 'border-border/40'
              } hover:border-[hsl(47,96%,53%,0.5)] transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-[hsl(47,96%,53%)] to-[hsl(280,70%,60%)] text-background text-sm font-bold">
                    الأكثر شعبية
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-12">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-gradient-gold">${plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[hsl(47,96%,53%)] shrink-0 mt-0.5" />
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[hsl(47,96%,53%)] to-[hsl(280,70%,60%)] text-background hover:opacity-90'
                      : 'bg-card border border-[hsl(47,96%,53%)] text-[hsl(47,96%,53%)] hover:bg-[hsl(47,96%,53%,0.1)]'
                  }`}
                  size="lg"
                >
                  احجز الآن
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
