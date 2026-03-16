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
import GlowLayer from "@/components/decorations/GlowLayer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { OrganizationJsonLd, WebPageJsonLd } from "@/components/JsonLd";
import pairProgrammingSvg from "@/assets/pair-programming.svg";
import bellaFeliz from "@/assets/bella-feliz.png";
import quackPayLogo from "@/assets/quack-pay-logo.png";
import squareCloudLogo from "@/assets/square-cloud-logo-white.png";
import FounderHero from "@/components/FounderHero";

const Index = () => {
  const services = [
    {
      icon: Layers,
      title: "Estruturação de Sistemas Operacionais",
      description: "Sistemas internos sob medida para organizar fluxos críticos e eliminar dependência de processos manuais."
    },
    {
      icon: Settings,
      title: "Automação de Processos Estratégicos",
      description: "Automação de rotinas operacionais e integração de dados para reduzir retrabalho e aumentar eficiência."
    },
    {
      icon: Globe,
      title: "Integração de Sistemas e Departamentos",
      description: "Conexão entre plataformas, bancos de dados e ferramentas para fluxo consistente de informação."
    },
    {
      icon: Code,
      title: "Plataformas Digitais Escaláveis",
      description: "Aplicações web preparadas para suportar crescimento de usuários, dados e complexidade operacional."
    },
    {
      icon: Bot,
      title: "Inteligência Operacional e Dashboards",
      description: "Centralização de dados estratégicos em painéis para tomada de decisão baseada em informação confiável."
    }
  ];

  const stats = [
    { number: "120+", label: "Operações Estruturadas" },
    { number: "50+", label: "Empresas Atendidas" },
    { number: "99.9%", label: "Disponibilidade" },
    { number: "24/7", label: "Monitoramento" }
  ];

  const values = [
    {
      icon: Zap,
      title: "Eficiência Operacional",
      description: "Eliminação de gargalos e retrabalho por meio de arquitetura bem definida."
    },
    {
      icon: Shield,
      title: "Confiabilidade",
      description: "Sistemas estáveis, seguros e preparados para a operação real da empresa."
    },
    {
      icon: Heart,
      title: "Compromisso Técnico",
      description: "Engenharia rigorosa aplicada a cada componente do sistema."
    },
    {
      icon: Users,
      title: "Parceria Estratégica",
      description: "Atuação integrada com a operação do cliente em todas as etapas."
    }
  ];

  const processSteps = [
    {
      icon: FileSearch,
      step: "01",
      title: "Diagnóstico Operacional",
      description: "Mapeamos a operação da empresa, identificamos gargalos estruturais e processos que geram retrabalho."
    },
    {
      icon: Cog,
      step: "02",
      title: "Arquitetura Tecnológica",
      description: "Definimos a estrutura de sistemas, integrações e fluxos de dados que a operação precisa."
    },
    {
      icon: TestTube,
      step: "03",
      title: "Implementação Estruturada",
      description: "Desenvolvemos e implantamos os sistemas com entregas incrementais e validação contínua."
    },
    {
      icon: Rocket,
      step: "04",
      title: "Acompanhamento e Evolução",
      description: "Monitoramos a operação, ajustamos o sistema e preparamos a base para o próximo ciclo de crescimento."
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
      category: "Operações",
      title: "Estruturação de Gestão Interna",
      description: "Sistema sob medida para controle de operações, integração entre departamentos e automação de processos críticos.",
      results: ["Redução de 60% no retrabalho operacional", "Dados centralizados em tempo real"]
    },
    {
      category: "Processos",
      title: "Automação de Fluxos Comerciais",
      description: "Eliminação de processos manuais em vendas, faturamento e relacionamento com clientes por meio de sistemas integrados.",
      results: ["Ciclo de venda 40% mais rápido", "Integração com 5 plataformas existentes"]
    },
    {
      category: "Inteligência",
      title: "Dashboard de Performance Operacional",
      description: "Painel centralizado com métricas de operação, financeiro e produtividade para tomada de decisão baseada em dados.",
      results: ["Visibilidade completa da operação", "Previsibilidade de resultados"]
    }
  ];

  const whyChooseUs = [
    {
      title: "Diagnóstico antes do código",
      description: "Antes de desenvolver qualquer sistema, analisamos a operação da empresa para garantir que a tecnologia resolva o problema certo."
    },
    {
      title: "Comunicação Técnica Direta",
      description: "Relatórios objetivos, acesso ao repositório e canais diretos com a equipe de engenharia. Sem intermediários."
    },
    {
      title: "Arquitetura Preparada para Crescimento",
      description: "Cada sistema é projetado para absorver aumento de demanda, complexidade e volume de dados sem necessidade de reconstrução."
    },
    {
      title: "Segurança Estrutural",
      description: "Práticas de segurança integradas desde a definição da arquitetura, protegendo dados e garantindo conformidade regulatória."
    },
    {
      title: "Acompanhamento Pós-implantação",
      description: "Após a entrega, monitoramos a operação do sistema e ajustamos conforme a empresa evolui."
    },
    {
      title: "Cheetah OPS Framework",
      description: "Metodologia proprietária de diagnóstico, arquitetura e implementação que garante previsibilidade e resultado em cada projeto."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-inter overflow-x-hidden">
      <SEO
        title="Cheetah Solutions Network | Engenharia de Software para Performance Operacional"
        description="A Cheetah Solutions Network estrutura operações empresariais por meio de arquitetura tecnológica. Diagnóstico operacional, sistemas sob medida e automação de processos para empresas em crescimento."
        ogTitle="Cheetah Solutions Network | Engenharia de Software para Performance Operacional"
        ogDescription="Estruturamos operações empresariais por meio de arquitetura tecnológica. Diagnóstico operacional, sistemas sob medida e automação para empresas que exigem performance."
        ogUrl="/"
      />
      <OrganizationJsonLd />
      <WebPageJsonLd 
        title="Cheetah Solutions Network | Engenharia de Software para Performance Operacional"
        description="A Cheetah Solutions Network estrutura operações empresariais por meio de arquitetura tecnológica, desenvolvendo sistemas sob medida para empresas em crescimento."
        url="/"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 lg:px-8 overflow-x-hidden contain-paint">
        <HeroBackground />

        <GlowLayer className="z-[1]">
          <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] bg-primary/3 rounded-full blur-[120px] pointer-events-none -translate-x-1/4 z-0" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent to-background z-[1]" />
        </GlowLayer>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-4xl">
            {/* Tag with refined animation */}
            <div 
              className="inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 mb-10 px-4 py-1.5 bg-primary/8 border border-primary/15 rounded-full text-xs font-medium text-primary/80 backdrop-blur-sm animate-fade-in-soft max-w-full"
              style={{ animationDelay: '100ms', animationFillMode: 'both' }}
            >
              <span>Diagnóstico</span>
              <span className="w-1 h-1 bg-primary/50 rounded-full" />
              <span>Arquitetura</span>
              <span className="w-1 h-1 bg-primary/50 rounded-full" />
              <span>Implementação</span>
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-[1.08] tracking-tight animate-fade-in-soft"
              style={{ animationDelay: '200ms', animationFillMode: 'both' }}
            >
              Estruturação{" "}
              <span className="relative inline-block">
                <span className="text-primary">tecnológica</span>
                <span 
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-primary/40 via-primary to-primary/40 rounded-full origin-left animate-[underlineReveal_0.8s_ease-out_1.2s_forwards]"
                  style={{ transform: 'scaleX(0)' }}
                />
              </span>{" "}
              de operações que exigem <SubtleHighlight>performance</SubtleHighlight>
            </h1>
            
            <p 
              className="text-lg lg:text-xl text-foreground/65 mb-12 max-w-3xl leading-[1.7] animate-fade-in-soft"
              style={{ animationDelay: '350ms', animationFillMode: 'both' }}
            >
              Analisamos a operação da sua empresa, identificamos gargalos estruturais e desenvolvemos sistemas sob medida que organizam processos, integram setores e criam base tecnológica preparada para crescimento.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-soft"
              style={{ animationDelay: '500ms', animationFillMode: 'both' }}
            >
              <Link to="/servicos">
                <Button 
                  size="lg"
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                >
                  Conheça Nossa Abordagem
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Button>
              </Link>
              <Link to="/atendimento">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border border-foreground/15 text-foreground/90 hover:bg-foreground/5 hover:border-foreground/25 px-8 py-3 text-base font-semibold transition-all duration-300"
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

      {/* Trusted Companies Section */}
      <section className="py-20 lg:py-24 px-4 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <div className="text-center mb-16 lg:mb-20">
              <p className="text-xs uppercase tracking-[0.25em] font-medium text-muted-foreground/80 mb-3">
                Empresas que confiam em nosso trabalho
              </p>
              <div className="w-12 h-px bg-primary/30 mx-auto" />
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <div className="flex items-center justify-center gap-20 lg:gap-32">
              <a 
                href="https://quackpay.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <img 
                  src={quackPayLogo} 
                  alt="Quack Pay" 
                  className="h-12 md:h-14 lg:h-16 w-auto object-contain opacity-50 group-hover:opacity-90 transition-all duration-300 grayscale group-hover:grayscale-0 dark:invert-0 invert"
                  loading="lazy"
                />
              </a>
              <a 
                href="https://squarecloud.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <img 
                  src={squareCloudLogo} 
                  alt="Square Cloud" 
                  className="h-12 md:h-14 lg:h-16 w-auto object-contain opacity-50 group-hover:opacity-90 transition-all duration-300 grayscale group-hover:grayscale-0 dark:invert-0 invert"
                  loading="lazy"
                />
              </a>
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

      {/* Nossa Abordagem Section */}
      <section className="py-16 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                Nossa <span className="text-primary">Abordagem</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Engenharia de software com foco em qualidade, performance e escalabilidade
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection delay={100}>
              <div className="space-y-6">
                <div className="p-5 border-l-2 border-primary bg-card/50">
                  <h3 className="text-base font-semibold mb-2 text-foreground">Arquitetura Pensada para Crescer</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Cada projeto é planejado considerando o crescimento futuro. Utilizamos padrões de arquitetura modernos que permitem escalar sem reescrever o sistema.
                  </p>
                </div>
                <div className="p-5 border-l-2 border-primary bg-card/50">
                  <h3 className="text-base font-semibold mb-2 text-foreground">Código Testado e Documentado</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Implementamos testes automatizados e documentação técnica clara. Isso garante manutenibilidade e facilita futuras evoluções do sistema.
                  </p>
                </div>
                <div className="p-5 border-l-2 border-primary bg-card/50">
                  <h3 className="text-base font-semibold mb-2 text-foreground">Performance como Prioridade</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Otimizamos cada aspecto da aplicação: tempo de carregamento, consumo de recursos e experiência do usuário final.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="bg-card border border-border rounded-lg p-6 h-full">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Como Trabalhamos</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground">Entendimento profundo do negócio</h4>
                      <p className="text-xs text-muted-foreground mt-1">Antes de qualquer código, entendemos seu contexto, objetivos e desafios técnicos.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground">Desenvolvimento iterativo</h4>
                      <p className="text-xs text-muted-foreground mt-1">Entregas incrementais com feedback constante, garantindo alinhamento em cada etapa.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground">Revisão técnica rigorosa</h4>
                      <p className="text-xs text-muted-foreground mt-1">Code review, testes automatizados e validação de segurança antes de cada release.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary">4</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground">Suporte técnico contínuo</h4>
                      <p className="text-xs text-muted-foreground mt-1">Acompanhamento pós-entrega para garantir estabilidade e evolução do sistema.</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
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

      {/* Cheetah Developers Brasil Section */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-right">
              <div>
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary">
                  <Users className="h-3.5 w-3.5" />
                  Comunidade Oficial
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                  Cheetah <span className="text-primary">Developers</span> Brasil
                </h2>
                <p className="text-lg text-muted-foreground mb-4 font-medium">
                  Onde desenvolvedores evoluem juntos.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Programa e comunidade oficial da Cheetah Solutions Network voltado ao crescimento técnico, colaboração e formação de desenvolvedores. Participe de discussões, compartilhe conhecimento e evolua junto com outros profissionais.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/developers">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Conheça o Programa
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <a 
                    href="https://discord.gg/rY3HUQpECS" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="border-foreground/15 text-foreground hover:bg-foreground/5">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Entrar na Comunidade
                    </Button>
                  </a>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-left" delay={150}>
              <div className="flex items-center justify-center">
                <img 
                  src={pairProgrammingSvg} 
                  alt="Pair programming illustration" 
                  className="w-full max-w-md h-auto"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Bella Bot Section */}
      <section className="relative py-16 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-right" delay={100} overflow="visible">
              <div className="flex items-center justify-center lg:justify-start order-2 lg:order-1">
                <img 
                  src={bellaFeliz} 
                  alt="Ilustração oficial da Bella Bot"
                  className="w-full max-w-[280px] md:max-w-[320px] lg:max-w-[360px] h-auto object-contain"
                  loading="lazy"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
                  }}
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-left" className="order-1 lg:order-2">
              <div>
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary">
                  <Bot className="h-3.5 w-3.5" />
                  Projeto Cheetah
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                  Bella <span className="text-primary">Bot</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-4 font-medium">
                  Interação, competição e engajamento no Discord.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Um projeto inovador que transforma comunidades no Discord. Partidas criadas por usuários, sistema de progressão e experiências dinâmicas que conectam pessoas.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/bellabot">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Conheça a Bella Bot
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Institutional Articles Section */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                Sobre a <span className="text-primary">Cheetah Solutions Network</span>
              </h2>
              <p className="text-muted-foreground max-w-3xl">
                A Cheetah Solutions Network publica artigos institucionais que esclarecem dúvidas frequentes sobre sua identidade, história e posicionamento no mercado de tecnologia.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <AnimatedSection delay={100}>
              <div className="p-6 bg-card border border-border rounded-lg h-full flex flex-col">
                <h3 className="text-lg font-semibold mb-2 text-foreground">O que é a Cheetah</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  Entenda o que é a empresa e como atua no mercado de tecnologia.
                </p>
                <Link to="/artigos/atuacao">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm">
                    Conhecer a atuação
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={150}>
              <div className="p-6 bg-card border border-border rounded-lg h-full flex flex-col">
                <h3 className="text-lg font-semibold mb-2 text-foreground">Missão, visão e valores</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  Princípios que orientam a atuação da empresa.
                </p>
                <Link to="/artigos/missao">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm">
                    Ver missão e valores
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="p-6 bg-card border border-border rounded-lg h-full flex flex-col">
                <h3 className="text-lg font-semibold mb-2 text-foreground">Ecossistema de projetos</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  Como funcionam os projetos próprios e experimentações.
                </p>
                <Link to="/artigos/ecossistema">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm">
                    Entender o ecossistema
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={250}>
              <div className="p-6 bg-card border border-border rounded-lg h-full flex flex-col">
                <h3 className="text-lg font-semibold mb-2 text-foreground">Posicionamento</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  Como a empresa se posiciona no mercado de tecnologia.
                </p>
                <Link to="/artigos/posicionamento">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm">
                    Ver posicionamento
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="p-6 bg-card border border-border rounded-lg h-full flex flex-col">
                <h3 className="text-lg font-semibold mb-2 text-foreground">Por que não somos agência</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  Diferenças entre software house e agência tradicional.
                </p>
                <Link to="/artigos/agencia-tradicional">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm">
                    Entender a diferença
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection delay={350}>
            <div className="text-center">
              <Link to="/artigos">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Ver todos os artigos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
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

      {/* Founder Hero Section */}
      <FounderHero />

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
