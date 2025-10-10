import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[hsl(240,10%,8%)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(47,96%,53%,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(280,70%,60%,0.15),transparent_50%)]"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(240,10%,15%,0.1)_1px,transparent_1px),linear-gradient(to_right,hsl(240,10%,15%,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[hsl(47,96%,53%,0.3)] bg-[hsl(47,96%,53%,0.1)] backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[hsl(47,96%,53%)] animate-pulse"></span>
            <span className="text-sm text-[hsl(47,96%,70%)]">البريد الإلكتروني الأكثر أمانًا</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="text-gold-premium">VIP Mail</span>
          </h1>

          <p className="text-xl md:text-3xl text-foreground/90 leading-relaxed max-w-3xl mx-auto font-semibold">
            بريد إلكتروني يضع الأمان والخصوصية أولاً.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            احصل على بريد مميز مثل <span className="text-gradient-gold font-bold">yourname@vipm.org</span> وكن في مستوى النخبة الرقمية.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[hsl(47,96%,53%)] to-[hsl(280,70%,60%)] text-background font-bold text-lg px-8 py-6 hover:opacity-90 transition-opacity shadow-[0_0_40px_hsl(47,96%,53%,0.3)]"
            >
              احجز بريدك الآن
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[hsl(47,96%,53%)] text-[hsl(47,96%,53%)] hover:bg-[hsl(47,96%,53%,0.1)] text-lg px-8 py-6"
            >
              اعرف المزيد
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
