import { ExternalLink, Users, Gamepad2, Sparkles, Trophy, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { OrganizationJsonLd, WebPageJsonLd } from "@/components/JsonLd";
import bellaCheezinho from "@/assets/bella-cheezinho.png";

const BellaBot = () => {
  const features = [
    {
      icon: Users,
      title: "Interação Social",
      description: "Conecte-se com outros membros através de experiências interativas e dinâmicas."
    },
    {
      icon: Gamepad2,
      title: "Partidas entre Usuários",
      description: "Crie e participe de partidas criadas pela própria comunidade."
    },
    {
      icon: Trophy,
      title: "Sistema de Progressão",
      description: "Evolua, conquiste e destaque-se com um sistema próprio de economia e ranking."
    },
    {
      icon: Sparkles,
      title: "Experiência Dinâmica",
      description: "Funcionalidades que tornam cada interação única e competitiva."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Bella Bot | Cheetah Solutions Network"
        description="Conheça a Bella Bot, o bot inovador para Discord desenvolvido pela Cheetah Solutions Network. Interação social, partidas entre usuários e uma experiência dinâmica para comunidades."
        ogTitle="Bella Bot | Cheetah Solutions Network"
        ogDescription="Bot inovador para Discord com foco em interação social, partidas criadas por usuários e experiência competitiva para comunidades engajadas."
        ogUrl="/bellabot"
      />
      <OrganizationJsonLd />
      <WebPageJsonLd 
        title="Bella Bot | Cheetah Solutions Network"
        description="Bot inovador para Discord com foco em interação social, partidas entre usuários e experiência dinâmica para comunidades."
        url="/bellabot"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-0 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <AnimatedSection>
              <div className="max-w-xl">
                <p className="text-xs text-primary uppercase tracking-[0.2em] mb-6 font-medium">
                  Projeto Cheetah Solutions
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
                  Bella Bot
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  Um projeto inovador para Discord que transforma a forma como comunidades 
                  interagem. Partidas, competição e engajamento — tudo criado pelos próprios usuários.
                </p>
                <a 
                  href="https://discord.gg/ArbAtkw3Ug" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Servidor de Suporte
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </AnimatedSection>
            
            {/* Image with fade effect */}
            <AnimatedSection delay={100} animation="fade">
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative max-w-md lg:max-w-lg xl:max-w-xl">
                  <img 
                    src={bellaCheezinho} 
                    alt="Ilustração oficial da Bella Bot com o mascote Cheezinho da Cheetah Solutions Network"
                    className="w-full h-auto object-contain relative z-10"
                    loading="eager"
                    fetchPriority="high"
                  />
                  {/* Fade gradient at bottom */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-32 md:h-40 lg:h-48 z-20 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to bottom, transparent 0%, hsl(var(--background)) 100%)'
                    }}
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left column */}
            <AnimatedSection className="lg:col-span-4">
              <div className="sticky top-32">
                <p className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  Sobre o Projeto
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mt-3 leading-tight">
                  Mais do que um bot.<br />
                  Uma experiência.
                </h2>
              </div>
            </AnimatedSection>
            
            {/* Right column */}
            <AnimatedSection delay={100} className="lg:col-span-8">
              <div className="space-y-8">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  A Bella Bot nasceu da visão de criar algo diferente para comunidades no Discord. 
                  Não é apenas mais um bot com comandos básicos — é uma plataforma de interação 
                  onde os próprios usuários são protagonistas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Com foco em engajamento genuíno, a Bella oferece sistemas de partidas criadas 
                  pela comunidade, economia própria e progressão que recompensa participação ativa. 
                  Cada funcionalidade foi pensada para fortalecer conexões e tornar a experiência 
                  de servidor mais dinâmica e competitiva.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  O projeto está em desenvolvimento ativo, com novidades sendo adicionadas 
                  constantemente. Acompanhe o progresso e faça parte da comunidade desde o início.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-xl mb-16">
              <p className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                Funcionalidades
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mt-3">
                Interação que engaja,<br />
                competição que conecta.
              </h2>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-card border border-border rounded-xl p-8 h-full">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                Em Desenvolvimento
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-8">
                Isso é apenas o começo.
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-10">
                A Bella Bot está em constante evolução. Novos sistemas, funcionalidades e 
                surpresas estão sendo desenvolvidos pela equipe da Cheetah Solutions Network. 
                Entre no servidor de suporte para acompanhar as atualizações e fazer parte 
                dessa jornada desde o início.
              </p>
              <a 
                href="https://discord.gg/ArbAtkw3Ug" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Acompanhar no Discord
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Development Note */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto">
              <div className="bg-card border border-border rounded-xl p-8 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Desenvolvido por Cheetah Solutions Network</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A Bella Bot é um projeto oficial da Cheetah Solutions Network, desenvolvido 
                  com a mesma qualidade e dedicação que aplicamos em todas as nossas soluções. 
                  Engenharia sólida, design pensado e foco na experiência do usuário.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BellaBot;
