import { Bot, ArrowRight, MessageCircle, Zap, Shield, Users, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const ServiceBots = () => {
  const platforms = [
    { name: "Discord", description: "Moderação, economia virtual, comandos personalizados" },
    { name: "Telegram", description: "Automação de grupos, notificações, integrações" },
    { name: "WhatsApp", description: "Atendimento automatizado, fluxos de vendas" },
    { name: "Slack", description: "Produtividade, integrações empresariais" }
  ];

  const useCases = [
    {
      title: "Comunidades Gaming",
      description: "Sistemas de ranking, torneios, economia virtual e moderação automática"
    },
    {
      title: "Atendimento ao Cliente",
      description: "Respostas automáticas, triagem de tickets, encaminhamento inteligente"
    },
    {
      title: "Automação de Vendas",
      description: "Qualificação de leads, follow-up automático, integração com CRM"
    },
    {
      title: "Notificações e Alertas",
      description: "Monitoramento de sistemas, alertas em tempo real, relatórios automáticos"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Cheetah Solutions Network | Bots e Automação"
        description="Desenvolvemos bots inteligentes para Discord, Telegram e WhatsApp. Automatize tarefas, modere comunidades e melhore a experiência dos usuários."
        ogTitle="Bots e Automação | Cheetah Solutions Network"
        ogDescription="Bots que trabalham por você. Desenvolvemos bots inteligentes para Discord, Telegram e WhatsApp."
        ogUrl="/servicos/bots"
      />
      <Header />
      
      {/* Hero - Asymmetric */}
      <section className="pt-28 pb-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <AnimatedSection className="lg:col-span-7">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">Bots & Automação</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
                Bots que <span className="text-primary">trabalham</span> por você
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Desenvolvemos bots inteligentes para Discord, Telegram e WhatsApp. 
                Automatize tarefas, modere comunidades e melhore a experiência dos usuários.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/orcamento">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-border text-foreground hover:bg-secondary">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Falar no WhatsApp
                  </Button>
                </a>
              </div>
            </AnimatedSection>
            
          </div>
        </div>
      </section>

      {/* O Problema */}
      <section className="py-16 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="text-2xl font-bold mb-6">
                O problema que <span className="text-primary">resolvemos</span>
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Comunidades crescem e a moderação manual se torna impossível. 
                  Equipes perdem tempo respondendo as mesmas perguntas repetidamente.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Atendimento humano 24/7 é caro e nem sempre necessário. 
                  Muitas interações podem ser automatizadas sem perder qualidade.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Criamos bots que trabalham continuamente: moderando, respondendo, 
                  notificando e executando tarefas que antes exigiam intervenção manual.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={150}>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Por que usar bots</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Disponibilidade 24/7</h4>
                      <p className="text-xs text-muted-foreground mt-1">Funcionam ininterruptamente sem descanso</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Resposta instantânea</h4>
                      <p className="text-xs text-muted-foreground mt-1">Ações executadas em milissegundos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Escala ilimitada</h4>
                      <p className="text-xs text-muted-foreground mt-1">Atendem milhares de usuários simultaneamente</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Consistência garantida</h4>
                      <p className="text-xs text-muted-foreground mt-1">Aplicam regras de forma uniforme e imparcial</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Plataformas */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-2">
              Plataformas <span className="text-primary">suportadas</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl">
              Desenvolvemos bots para as principais plataformas de comunicação
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="p-6 border border-border rounded-lg bg-card h-full">
                  <h3 className="text-lg font-semibold mb-2">{platform.name}</h3>
                  <p className="text-sm text-muted-foreground">{platform.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-16 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-2">
              Casos de <span className="text-primary">aplicação</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl">
              Exemplos de como nossos bots são utilizados por diferentes segmentos
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="p-6 border border-border rounded-lg bg-card h-full">
                  <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* O que entregamos */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <AnimatedSection className="lg:col-span-4">
              <h2 className="text-2xl font-bold mb-4">
                O que está <span className="text-primary">incluído</span>
              </h2>
              <p className="text-muted-foreground text-sm">
                Cada bot é entregue com recursos completos para operação profissional.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={150} className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Comandos personalizados",
                  "Painel de controle web",
                  "Logs e relatórios",
                  "Integração com APIs",
                  "Sistema de permissões",
                  "Hospedagem incluída",
                  "Documentação completa",
                  "Suporte técnico"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Pronto para <span className="text-primary">automatizar</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                Vamos discutir seu projeto e criar o bot ideal para suas necessidades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/orcamento">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/atendimento">
                  <Button variant="outline" className="border-border text-foreground hover:bg-secondary">
                    Falar com Especialista
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceBots;
