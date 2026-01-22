import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import bellaImage from "@/assets/bella.png";

const BellaSection = () => {
  return (
    <section className="py-16 px-4 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Column */}
          <AnimatedSection animation="fade-right">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary">
                Apoio Ultra
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Bella <span className="text-primary">Bot de Apostas</span> Interativas no Discord
              </h2>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Um projeto inovador que transforma jogos em experiências sociais dentro de servidores do Discord, permitindo que membros criem partidas interativas, competitivas e dinâmicas.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Partidas via chat ou canais de voz criados automaticamente
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Economia própria com múltiplas moedas, progressão e prestígio
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Loja interna com skins, efeitos visuais e vantagens equilibradas
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Dashboard administrativo para configuração e gestão completa
                  </p>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground/80 mb-6 italic">
                Projeto em evolução constante, com novos sistemas sendo implementados gradualmente.
              </p>
              
              <a 
                href="https://discord.gg/ErNPrZGwmy" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Acompanhar desenvolvimento da Bella
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </AnimatedSection>
          
          {/* Image Column */}
          <AnimatedSection animation="fade-left" delay={150}>
            <div className="flex items-center justify-center lg:justify-end relative">
              <div className="relative">
                <img 
                  src={bellaImage} 
                  alt="Bella - Bot de Apostas Interativas"
                  className="w-full max-w-sm lg:max-w-md h-auto object-contain"
                  loading="lazy"
                />
                {/* Fade-out effect at the bottom */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default BellaSection;
