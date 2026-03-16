import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import talissonPhoto from "@/assets/talisson-souza.png";

const FounderHero = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15, triggerOnce: true });

  return (
    <section 
      ref={ref}
      className="relative py-20 lg:py-28 px-4 lg:px-8 bg-gradient-to-b from-background via-secondary/20 to-background overflow-x-hidden contain-paint"
      aria-labelledby="founder-heading"
    >
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid lg:grid-cols-[1fr,auto] gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 
              id="founder-heading"
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-[1.2] tracking-tight transition-opacity sm:transition-[opacity,transform] duration-700 ease-out ${
                isVisible 
                  ? 'opacity-100 sm:translate-y-0' 
                  : 'opacity-0 sm:translate-y-6'
              }`}
            >
              <span className="text-primary">Estruturação tecnológica</span>{" "}
              para operações que exigem performance
            </h2>
            
            <p 
              className={`text-base lg:text-lg text-foreground/70 mb-10 max-w-2xl leading-[1.8] transition-opacity sm:transition-[opacity,transform] duration-700 ease-out delay-150 ${
                isVisible 
                  ? 'opacity-100 sm:translate-y-0' 
                  : 'opacity-0 sm:translate-y-6'
              }`}
            >
              Analisamos operações empresariais, identificamos <strong className="text-foreground/90 font-medium">gargalos estruturais</strong>{" "}
              e desenvolvemos <strong className="text-foreground/90 font-medium">sistemas sob medida</strong> que organizam processos, 
              integram setores e criam <strong className="text-foreground/90 font-medium">base tecnológica preparada para crescimento</strong>.
            </p>
            
            {/* Founder signature block */}
            <div 
              className={`flex items-center gap-4 transition-opacity sm:transition-[opacity,transform] duration-700 ease-out delay-300 ${
                isVisible 
                  ? 'opacity-100 sm:translate-y-0' 
                  : 'opacity-0 sm:translate-y-6'
              }`}
            >
              <Avatar className="h-14 w-14 lg:h-16 lg:w-16 border-2 border-primary/20 shadow-lg shadow-primary/10">
                <AvatarImage 
                  src={talissonPhoto} 
                  alt="Talisson Souza - Fundador e CEO da Cheetah Solutions Network"
                  className="object-cover"
                />
                <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                  TS
                </AvatarFallback>
              </Avatar>
              
              <div>
                <p className="font-semibold text-foreground text-base lg:text-lg">
                  Talisson Souza
                </p>
                <p className="text-sm text-muted-foreground">
                  Fundador & CEO
                </p>
              </div>
              
              {/* Decorative line */}
              <div className="hidden sm:block h-px flex-1 max-w-[100px] bg-gradient-to-r from-border to-transparent ml-2" />
            </div>
          </div>
          
          {/* Photo - Mobile: centered, Desktop: right side */}
          <div 
            className={`order-1 lg:order-2 flex justify-center lg:justify-end transition-opacity sm:transition-[opacity,transform] duration-700 ease-out delay-100 ${
              isVisible 
                ? 'opacity-100 sm:scale-100' 
                : 'opacity-0 sm:scale-95'
            }`}
          >
            <div className="relative p-6 contain-paint">
              {/* Main photo container */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary/15 shadow-2xl shadow-primary/10">
                <img 
                  src={talissonPhoto}
                  alt="Talisson Souza - Fundador e CEO da Cheetah Solutions Network"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Decorative ring - inside padding area */}
              <div className="absolute inset-3 border border-primary/10 rounded-full pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderHero;
