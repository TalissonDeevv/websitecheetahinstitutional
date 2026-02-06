import { useState } from "react";
import { X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DiscordPopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <Card className="relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fechar"
        >
          <X className="h-4 w-4" />
        </button>
        
        <CardContent className="pt-6 pr-10">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Gosta de Programação e Tecnologia?
          </h3>
          
          <p className="text-sm text-muted-foreground mb-4">
            Faça parte da nossa comunidade oficial voltada para quem se interessa por programação, tecnologia e desenvolvimento de software. Um espaço para aprender, trocar experiências, acompanhar projetos reais e evoluir junto com outros profissionais da área.
          </p>
          
          <Button asChild className="w-full mb-2">
            <a 
              href="https://discord.gg/H82XM7saMR" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Entrar no Discord
            </a>
          </Button>
          
          <p className="text-xs text-muted-foreground text-center">
            Comunidade oficial da Cheetah Solutions Network
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DiscordPopup;
