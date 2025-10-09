import { Shield, Lock, Zap, Crown, Headphones, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "حماية متقدمة",
    description: "تشفير من الطراز العسكري لحماية رسائلك من أي اختراق أو تجسس."
  },
  {
    icon: Lock,
    title: "خصوصية مطلقة",
    description: "بياناتك ملكك وحدك. لا نشارك معلوماتك مع أي طرف ثالث."
  },
  {
    icon: Crown,
    title: "عنوان VIP حصري",
    description: "احصل على بريد إلكتروني مميز ينتهي بـ @vipm.org يعكس تميزك."
  },
  {
    icon: Zap,
    title: "أداء فائق السرعة",
    description: "خوادم عالية الأداء تضمن وصول رسائلك في لمح البصر."
  },
  {
    icon: Headphones,
    title: "دعم فني مميز",
    description: "فريق دعم متاح على مدار الساعة لمساعدتك في أي وقت."
  },
  {
    icon: Globe,
    title: "وصول عالمي",
    description: "استخدم بريدك من أي مكان في العالم مع حماية كاملة."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-vip">مزايا استثنائية</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            خدمة بريد إلكتروني متكاملة مصممة خصيصًا للنخبة الرقمية
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border/40 hover:border-[hsl(47,96%,53%,0.5)] transition-all duration-300 hover:shadow-[0_0_30px_hsl(47,96%,53%,0.2)] group"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[hsl(47,96%,53%,0.2)] to-[hsl(280,70%,60%,0.2)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-[hsl(47,96%,53%)]" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
