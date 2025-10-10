import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[hsl(47,96%,53%)] to-[hsl(280,70%,60%)] flex items-center justify-center">
              <Mail className="w-6 h-6 text-background" />
            </div>
            <span className="text-2xl font-bold text-gold-premium">VIP Mail</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
              المزايا
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">
              الأسعار
            </a>
            <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
              من نحن
            </a>
            <Button className="bg-gradient-to-r from-[hsl(47,96%,53%)] to-[hsl(280,70%,60%)] text-background font-bold hover:opacity-90 transition-opacity">
              احجز بريدك الآن
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
