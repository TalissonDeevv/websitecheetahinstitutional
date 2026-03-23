import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Discord icon SVG component
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

// Set to true to re-enable the popup
const POPUP_ENABLED = false;

const DiscordPopup = () => {
  if (!POPUP_ENABLED) return null;

  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Trigger animation after mount
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 350);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-4 right-4 z-50 w-[340px] max-w-[calc(100vw-2rem)] transform transition-all duration-[350ms] ease-out ${
        isClosing 
          ? "opacity-0 translate-y-4 scale-95" 
          : isAnimating 
            ? "opacity-100 translate-y-0 scale-100" 
            : "opacity-0 translate-y-6 scale-95"
      }`}
    >
      {/* Glow effect behind card */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-xl blur-xl opacity-50" />
      
      <Card className="relative overflow-hidden border-primary/15 bg-card/98 backdrop-blur-md shadow-2xl shadow-black/20">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-muted-foreground/60 hover:text-foreground transition-all duration-200 p-1.5 rounded-full hover:bg-muted/50 z-10"
          aria-label="Fechar"
        >
          <X className="h-4 w-4" />
        </button>
        
        <CardContent className="relative p-5 pr-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md" />
              <div className="relative p-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20">
                <DiscordIcon className="h-5 w-5 text-primary" />
              </div>
            </div>
            <h3 className="text-base font-semibold text-foreground tracking-tight">
              Gosta de Programação e Tecnologia?
            </h3>
          </div>
          
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            Participe da comunidade oficial da Cheetah Solutions Network e conecte-se com pessoas que vivem tecnologia e projetos reais.
          </p>
          
          <Button asChild className="w-full gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow">
            <a 
              href="https://discord.gg/H82XM7saMR" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <DiscordIcon className="h-4 w-4" />
              Entrar no Discord
            </a>
          </Button>
          
          <p className="text-[11px] text-muted-foreground/50 text-center mt-3 tracking-wide">
            Comunidade oficial
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DiscordPopup;
