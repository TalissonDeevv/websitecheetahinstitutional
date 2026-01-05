import { Bot, Globe, Cog, Link2, Shield, Smartphone, CreditCard, Cpu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const Services = () => {
  const services = [
    {
      title: "Bots Discord & Telegram",
      description: "Automação de comunidades com bots inteligentes.",
      forWho: "Comunidades, servidores de jogos, empresas com suporte via chat",
      icon: Bot,
      link: "/servicos/bots",
      featured: false
    },
    {
      title: "Websites",
      description: "Sites institucionais, landing pages e plataformas web.",
      forWho: "Empresas que precisam de presença digital profissional",
      icon: Globe,
      link: "/servicos/web",
      featured: true
    },
    {
      title: "Sistemas Web",
      description: "ERPs, CRMs e sistemas de gestão sob medida.",
      forWho: "Empresas com processos específicos que não cabem em soluções prontas",
      icon: Cog,
      link: "/servicos/sistemas",
      featured: true
    },
    {
      title: "Integrações",
      description: "APIs, webhooks e conexões entre sistemas.",
      forWho: "Operações que usam múltiplas ferramentas desconectadas",
      icon: Link2,
      link: "/servicos/integracoes",
      featured: false
    },
    {
      title: "Segurança Digital",
      description: "Proteção de dados, LGPD e auditorias de segurança.",
      forWho: "Empresas que lidam com dados sensíveis ou regulamentados",
      icon: Shield,
      link: "/servicos/seguranca",
      featured: false
    },
    {
      title: "Apps Mobile",
      description: "Aplicativos nativos para Android e iOS.",
      forWho: "Negócios que precisam de presença mobile",
      icon: Smartphone,
      link: "/servicos/mobile",
      featured: false
    },
    {
      title: "E-commerce",
      description: "Lojas virtuais completas com gestão de estoque e pagamentos.",
      forWho: "Varejo e empresas que vendem produtos online",
      icon: CreditCard,
      link: "/servicos/ecommerce",
      featured: true
    },
    {
      title: "Inteligência Artificial",
      description: "Chatbots com IA, automação de processos e análise preditiva.",
      forWho: "Empresas que querem automatizar tarefas complexas",
      icon: Cpu,
      link: "/servicos/ia",
      featured: false
    }
  ];

  const featuredServices = services.filter(s => s.featured);
  const otherServices = services.filter(s => !s.featured);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Cheetah Solutions | Nossos Serviços"
        description="Desenvolvimento de software sob medida: bots, websites, sistemas web, integrações, apps mobile e e-commerce. Soluções personalizadas para sua empresa."
        ogTitle="Nossos Serviços | Cheetah Solutions"
        ogDescription="Desenvolvimento de software sob medida para empresas. Bots, websites, sistemas web, integrações, apps mobile e e-commerce."
        ogUrl="/servicos"
      />
      <Header />
      
      {/* Hero - Asymmetric */}
      <AnimatedSection animation="fade-up">
        <section className="pt-28 pb-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <p className="text-xs text-primary uppercase tracking-[0.2em] mb-6 font-medium">
                O que fazemos
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">
                Desenvolvimento de<br />
                <span className="text-primary">software sob medida.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Não vendemos pacotes prontos. Cada projeto é pensado 
                para resolver o seu problema específico.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Featured Services - Destaque */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="mb-12">
              <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                Principais serviços
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3">
                Onde mais atuamos.
              </h2>
            </div>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {featuredServices.map((service, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors group h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Para quem:</span>
                    <p className="text-sm text-foreground/80 mt-1">{service.forWho}</p>
                  </div>
                  <Link to={service.link}>
                    <Button variant="outline" className="w-full border-border hover:bg-secondary hover:text-foreground group/btn">
                      Ver detalhes
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services - Grid mais compacto */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <AnimatedSection animation="fade-right">
                <div className="sticky top-32">
                  <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                    Mais serviços
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mt-3 leading-tight">
                    Soluções<br />
                    complementares.
                  </h2>
                  <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                    Além dos serviços principais, desenvolvemos 
                    soluções específicas conforme a necessidade de cada projeto.
                  </p>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {otherServices.map((service, index) => (
                  <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
                    <Link 
                      to={service.link}
                      className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all block h-full"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <service.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process - Simples */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  Como funciona
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mt-3">
                  Processo direto, sem burocracia.
                </h2>
              </div>
            </AnimatedSection>
            
            <div className="space-y-0">
              {[
                { step: "01", title: "Conversa inicial", text: "Entendemos o problema e avaliamos se faz sentido trabalharmos juntos." },
                { step: "02", title: "Proposta", text: "Escopo detalhado, prazo e orçamento. Sem surpresas." },
                { step: "03", title: "Desenvolvimento", text: "Sprints semanais com entregas e validação constante." },
                { step: "04", title: "Entrega e suporte", text: "Deploy, documentação e 30 dias de suporte inclusos." },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  <div className="flex items-start gap-6 py-8 border-b border-border last:border-0">
                    <span className="text-primary font-bold text-2xl w-12 shrink-0">{item.step}</span>
                    <div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.text}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection animation="fade-up">
        <section className="py-24 px-4">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Tem um projeto?<br />
                <span className="text-primary">Vamos avaliar juntos.</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Orçamento gratuito e sem compromisso.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/orcamento">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                  >
                    Solicitar orçamento
                  </Button>
                </Link>
                <Link to="/contato">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-border text-muted-foreground hover:bg-secondary hover:text-foreground font-medium"
                  >
                    Falar conosco
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Services;
