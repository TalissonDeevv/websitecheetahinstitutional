import { Link } from "react-router-dom";
import { 
  Code, 
  Globe, 
  Layers, 
  Settings, 
  Bot, 
  ArrowRight, 
  Zap, 
  Shield, 
  Heart, 
  Users,
  MessageCircle,
  FileSearch,
  Cog,
  TestTube,
  Rocket,
  CheckCircle,
  Database,
  Server,
  Smartphone,
  Cloud,
  GitBranch,
  Layout
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubtleHighlight from "@/components/SubtleHighlight";
import HeroBackground from "@/components/HeroBackground";
import AnimatedSection from "@/components/AnimatedSection";
const Index = () => {
  const services = [
    {
      icon: Code,
      title: "Desenvolvimento de Software Personalizado",
      description: "Soluções sob medida focadas em desempenho, segurança e escalabilidade."
    },
    {
      icon: Globe,
      title: "Websites e Aplicações Web",
      description: "Projetos modernos, rápidos e com excelente experiência do usuário."
    },
    {
      icon: Layers,
      title: "Sistemas e Plataformas Digitais",
      description: "Soluções completas para gestão, operação e crescimento de negócios."
    },
    {
      icon: Settings,
      title: "Automação de Processos",
      description: "Fluxos inteligentes que reduzem custos e aumentam eficiência."
    },
    {
      icon: Bot,
      title: "Bots e Integrações",
      description: "Soluções inteligentes para Discord, Telegram, atendimento e integração de sistemas."
    }
  ];

  const stats = [
    { number: "120+", label: "Projetos Entregues" },
    { number: "50+", label: "Clientes Ativos" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Suporte" }
  ];

  const values = [
    {
      icon: Zap,
      title: "Agilidade",
      description: "Entregas rápidas sem comprometer a qualidade técnica."
    },
    {
      icon: Shield,
      title: "Confiabilidade",
      description: "Compromisso com prazos, segurança e resultados consistentes."
    },
    {
      icon: Heart,
      title: "Paixão",
      description: "Dedicação genuína em cada linha de código que escrevemos."
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Parceria real com nossos clientes em todas as etapas."
    }
  ];

  const processSteps = [
    {
      icon: FileSearch,
      step: "01",
      title: "Descoberta e Análise",
      description: "Entendemos seu negócio, objetivos e requisitos técnicos para criar um plano de projeto detalhado."
    },
    {
      icon: Cog,
      step: "02",
      title: "Desenvolvimento",
      description: "Codificamos com metodologias ágeis, entregas incrementais e comunicação constante."
    },
    {
      icon: TestTube,
      step: "03",
      title: "Testes e Qualidade",
      description: "Validamos cada funcionalidade com testes automatizados e revisões de código rigorosas."
    },
    {
      icon: Rocket,
      step: "04",
      title: "Entrega e Suporte",
      description: "Implantamos a solução e oferecemos acompanhamento técnico contínuo."
    }
  ];

  const technologies = [
    { icon: Code, name: "React / Next.js" },
    { icon: Server, name: "Node.js" },
    { icon: Database, name: "PostgreSQL" },
    { icon: Cloud, name: "AWS / Cloud" },
    { icon: Smartphone, name: "React Native" },
    { icon: GitBranch, name: "TypeScript" },
    { icon: Bot, name: "Discord.js" },
    { icon: Layout, name: "Tailwind CSS" }
  ];

  const useCases = [
    {
      category: "E-commerce",
      title: "Plataforma de Vendas Online",
      description: "Sistema completo de e-commerce com gestão de produtos, pagamentos integrados e painel administrativo.",
      results: ["Aumento de 40% nas conversões", "Integração com 5 gateways de pagamento"]
    },
    {
      category: "Gestão Empresarial",
      title: "Sistema de Gestão Interna",
      description: "Plataforma personalizada para controle de operações, relatórios em tempo real e automação de processos.",
      results: ["Redução de 60% no tempo operacional", "Dashboard com métricas em tempo real"]
    },
    {
      category: "Comunidades",
      title: "Bot de Moderação Discord",
      description: "Bot inteligente para gestão de comunidades com moderação automática, comandos personalizados e integrações.",
      results: ["+50.000 usuários gerenciados", "Sistema de tickets automatizado"]
    }
  ];

  const whyChooseUs = [
    {
      title: "Código Limpo e Documentado",
      description: "Desenvolvemos seguindo as melhores práticas da indústria, com código legível, testável e bem documentado para facilitar manutenção futura."
    },
    {
      title: "Comunicação Transparente",
      description: "Mantemos você informado em cada etapa do projeto com relatórios semanais, acesso ao repositório e canais diretos com a equipe técnica."
    },
    {
      title: "Escalabilidade Planejada",
      description: "Arquitetamos soluções pensando no crescimento do seu negócio, garantindo que o sistema suporte aumento de demanda sem retrabalho."
    },
    {
      title: "Segurança em Primeiro Lugar",
      description: "Implementamos práticas de segurança desde o início do desenvolvimento, protegendo dados e garantindo conformidade com regulamentações."
    },
    {
      title: "Suporte Técnico Dedicado",
      description: "Após a entrega, oferecemos acompanhamento contínuo para garantir o funcionamento perfeito e evolução da solução."
    },
    {
      title: "Metodologia Ágil Comprovada",
      description: "Utilizamos Scrum e entregas incrementais para garantir que você veja progresso real e possa ajustar prioridades durante o desenvolvimento."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 lg:px-8 overflow-hidden">
        <HeroBackground />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary/90 backdrop-blur-sm">
              <span>Software</span>
              <span className="w-1.5 h-1.5 bg-primary/60 rounded-full" />
              <span>Sistemas</span>
              <span className="w-1.5 h-1.5 bg-primary/60 rounded-full" />
              <span>Plataformas Digitais</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
              Desenvolvimento de{" "}
              <span className="text-primary relative">
                <SubtleHighlight>software</SubtleHighlight> sob medida
                <span className="absolute -inset-1 bg-primary/10 blur-2xl rounded-lg -z-10" />
              </span>{" "}
              para negócios que exigem <SubtleHighlight>performance</SubtleHighlight>
            </h1>
            
            <p className="text-lg lg:text-xl text-foreground/70 mb-10 max-w-3xl leading-relaxed">
              Criamos sistemas, aplicações e plataformas digitais escaláveis, combinando engenharia de software, automação e design profissional para transformar ideias em soluções tecnológicas reais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/servicos">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
                >
                  Conheça Nossos Serviços
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contato">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-foreground/20 text-foreground hover:bg-foreground/10 hover:border-foreground/30 px-8 py-3 text-base font-semibold transition-all"
                >
                  Fale com um Especialista
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 px-4 lg:px-8 border-y border-border/50">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="flex flex-wrap justify-between gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-baseline gap-2">
                  <span className="text-2xl lg:text-3xl font-bold text-foreground">{stat.number}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                Nossos <span className="text-primary">Serviços</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Soluções tecnológicas completas para impulsionar seu negócio
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="group p-5 border border-border rounded-lg hover:border-muted-foreground/30 transition-colors bg-card h-full">
                  <div className="mb-3">
                    <service.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-semibold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection delay={500}>
            <div className="mt-8">
              <Link to="/servicos">
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm font-medium"
                >
                  Ver Todos os Serviços
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                Como <span className="text-primary">Trabalhamos</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Processo estruturado para garantir qualidade e previsibilidade em cada projeto
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="relative h-full">
                  <div className="p-5 bg-card border border-border rounded-lg h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-bold text-primary/60">{step.step}</span>
                      <step.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-base font-semibold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                Tecnologias e <span className="text-primary">Expertise</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Stack moderna e ferramentas consolidadas para entregar soluções robustas
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {technologies.map((tech, index) => (
              <AnimatedSection key={index} delay={index * 50} animation="scale">
                <div className="flex flex-col items-center gap-2 p-4 border border-border rounded-lg bg-card hover:border-muted-foreground/30 transition-colors">
                  <tech.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  <span className="text-xs text-muted-foreground text-center">{tech.name}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                Casos de <span className="text-primary">Uso</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Exemplos de como nossas soluções geram resultados reais para diferentes segmentos
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="p-6 bg-card border border-border rounded-lg h-full">
                  <span className="text-xs font-medium text-primary mb-3 block">{useCase.category}</span>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.results.map((result, rIndex) => (
                      <div key={rIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                        <span className="text-xs text-muted-foreground">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection delay={450}>
            <div className="mt-8">
              <Link to="/portfolio">
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm font-medium"
                >
                  Ver Portfólio Completo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                Por que escolher a <span className="text-primary">Cheetah Network</span>?
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Diferenciais que fazem a diferença no resultado do seu projeto
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <AnimatedSection key={index} delay={index * 100} animation="fade-left">
                <div className="p-5 border-l-2 border-primary bg-card/50 h-full">
                  <h3 className="text-base font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection animation="fade-right">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                  Sobre a <span className="text-primary">Cheetah Network</span>
                </h2>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  Somos uma software house especializada em desenvolvimento de soluções tecnológicas sob medida. Nossa equipe combina expertise técnica com visão de negócio para entregar resultados que realmente impactam.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Com experiência em projetos de diferentes portes e segmentos, trabalhamos lado a lado com nossos clientes, desde a concepção até o suporte contínuo, garantindo que cada solução atenda às necessidades específicas do negócio.
                </p>
                <Link to="/sobre">
                  <Button 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-5 py-2 text-sm font-medium"
                  >
                    Conheça Nossa História
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
            
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <AnimatedSection key={index} delay={index * 100} animation="scale">
                  <div className="p-4 bg-card border border-border rounded-lg h-full">
                    <value.icon className="h-5 w-5 text-primary mb-3" strokeWidth={1.5} />
                    <h3 className="text-sm font-semibold mb-1 text-foreground">{value.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection animation="scale">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Vamos construir sua <span className="text-primary">próxima solução</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                Entre em contato para discutir seu projeto. Nossa equipe está pronta para entender suas necessidades e propor a melhor abordagem técnica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/orcamento">
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-foreground/20 text-foreground hover:bg-foreground/10 hover:border-foreground/30 px-8 py-3 text-base font-semibold transition-all"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Falar via WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
