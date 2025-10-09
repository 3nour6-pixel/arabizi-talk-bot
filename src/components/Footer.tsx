import { Mail, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[hsl(47,96%,53%)] to-[hsl(280,70%,60%)] flex items-center justify-center">
                <Mail className="w-6 h-6 text-background" />
              </div>
              <span className="text-2xl font-bold text-gradient-vip">VIP Mail</span>
            </div>
            <p className="text-muted-foreground">
              خدمة البريد الإلكتروني المميزة للنخبة الرقمية
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-4 text-foreground">روابط سريعة</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#features" className="hover:text-[hsl(47,96%,53%)] transition-colors">المزايا</a></li>
              <li><a href="#pricing" className="hover:text-[hsl(47,96%,53%)] transition-colors">الأسعار</a></li>
              <li><a href="#about" className="hover:text-[hsl(47,96%,53%)] transition-colors">من نحن</a></li>
              <li><a href="#contact" className="hover:text-[hsl(47,96%,53%)] transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4 text-foreground">قانوني</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-[hsl(47,96%,53%)] transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-[hsl(47,96%,53%)] transition-colors">شروط الاستخدام</a></li>
              <li><a href="#" className="hover:text-[hsl(47,96%,53%)] transition-colors">سياسة الاسترجاع</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold mb-4 text-foreground">تواصل معنا</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-card border border-border/40 hover:border-[hsl(47,96%,53%)] flex items-center justify-center transition-colors group">
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-[hsl(47,96%,53%)]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-card border border-border/40 hover:border-[hsl(47,96%,53%)] flex items-center justify-center transition-colors group">
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-[hsl(47,96%,53%)]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-card border border-border/40 hover:border-[hsl(47,96%,53%)] flex items-center justify-center transition-colors group">
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-[hsl(47,96%,53%)]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-card border border-border/40 hover:border-[hsl(47,96%,53%)] flex items-center justify-center transition-colors group">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-[hsl(47,96%,53%)]" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center text-muted-foreground">
          <p>© 2025 VIP Mail - vipm.org. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
