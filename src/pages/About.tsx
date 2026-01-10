import { Target, Code, Zap, Shield, Users, Heart, MessageCircle, Lightbulb, Cog, Award, Handshake } from "lucide-react";
import squareCloudLogo from "@/assets/square-cloud-logo.webp";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import GlowLayer from "@/components/decorations/GlowLayer";
import SEO from "@/components/SEO";
import { OrganizationJsonLd, WebPageJsonLd } from "@/components/JsonLd";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Cheetah Solutions | Quem Somos"
        description="Conheça a Cheetah Solutions Network, uma software house focada em soluções digitais sob medida para empresas."
        ogTitle="Quem Somos | Cheetah Solutions"
        ogDescription="Uma equipe técnica que entende de negócio. A Cheetah Solutions Network é uma software house focada na criação de soluções digitais sob medida para empresas que buscam eficiência, performance e escalabilidade."
        ogUrl="/sobre"
      />
      <OrganizationJsonLd />
      <WebPageJsonLd 
        title="Quem Somos | Cheetah Solutions"
        description="Uma equipe técnica que entende de negócio. A Cheetah Solutions Network é uma software house focada na criação de soluções digitais sob medida."
        url="/sobre"
      />
      <Header />
      
      {/* Hero - Asymmetric */}
      <section className="pt-28 pb-20 px-4">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-5xl">
              <p className="text-xs text-primary uppercase tracking-[0.2em] mb-6 font-medium">
                Software House desde 2020
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">
                Construímos software<br />
                <span className="text-primary">que funciona.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Eficiência, performance e escalabilidade. 
                Soluções digitais sob medida para empresas que buscam resultados.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quem Somos - Full width asymmetric */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left column - narrower */}
            <AnimatedSection className="lg:col-span-4">
              <div className="sticky top-32">
                <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  Quem Somos
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mt-3 leading-tight">
                  Uma equipe técnica<br />
                  que entende de negócio.
                </h2>
              </div>
            </AnimatedSection>
            
            {/* Right column - wider, content heavy */}
            <AnimatedSection delay={100} className="lg:col-span-8">
              <div className="space-y-8">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  A Cheetah Solutions Network é uma software house focada na criação de soluções digitais 
                  sob medida para empresas que buscam eficiência, performance e escalabilidade.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Desenvolvemos sistemas, aplicações e plataformas digitais, com forte atuação em automação 
                  de processos e integração de tecnologias. Cada projeto é construído com base em engenharia 
                  sólida, arquitetura bem definida e foco total na qualidade do software entregue.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nossa atuação é guiada pelo compromisso de transformar necessidades reais de negócio em 
                  soluções tecnológicas eficientes, utilizando automação e inovação de forma estratégica 
                  para impulsionar resultados e simplificar operações. Trabalhamos com rapidez e organização, 
                  sem abrir mão da estabilidade, da segurança e da confiabilidade dos sistemas desenvolvidos.
                </p>
                
                <div className="pt-8 border-t border-border">
                  <div className="grid sm:grid-cols-3 gap-8">
                    <div>
                      <span className="text-3xl font-bold text-primary">120+</span>
                      <p className="text-sm text-muted-foreground mt-1">projetos entregues</p>
                    </div>
                    <div>
                      <span className="text-3xl font-bold text-primary">5+</span>
                      <p className="text-sm text-muted-foreground mt-1">anos de mercado</p>
                    </div>
                    <div>
                      <span className="text-3xl font-bold text-primary">99.9%</span>
                      <p className="text-sm text-muted-foreground mt-1">uptime médio</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Nossa Filosofia */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-xl mb-16">
              <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                Como trabalhamos
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3">
                Processos bem definidos,<br />
                resultados consistentes.
              </h2>
            </div>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection delay={100}>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Acreditamos que software bem feito nasce de processos bem definidos, comunicação clara 
                  e colaboração constante. Por isso, atuamos de forma integrada com nossos clientes, 
                  valorizando a parceria, o entendimento do contexto e a construção conjunta de soluções duradouras.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nossa equipe é formada por profissionais qualificados e comprometidos com excelência técnica. 
                  Contamos também com designers internos, garantindo que cada solução entregue tenha não apenas 
                  alto desempenho, mas também uma experiência de uso consistente, intuitiva e alinhada à 
                  identidade do negócio.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-lg font-semibold mb-6">Nosso compromisso</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Zap className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Rapidez sem sacrificar qualidade</h4>
                      <p className="text-xs text-muted-foreground mt-1">Entregas ágeis com padrão técnico elevado</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Estabilidade e segurança</h4>
                      <p className="text-xs text-muted-foreground mt-1">Sistemas confiáveis e protegidos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Parceria genuína</h4>
                      <p className="text-xs text-muted-foreground mt-1">Construção conjunta de soluções</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* O que fazemos - Cards com variação */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-xl mb-16">
              <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                O que fazemos
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3">
                Desenvolvimento sob medida,<br />
                não templates genéricos.
              </h2>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card maior - destaque */}
            <AnimatedSection delay={100} className="lg:col-span-2">
              <div className="bg-card border border-border rounded-xl p-8 md:p-10 h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Sistemas e Aplicações Web</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Plataformas completas, painéis administrativos, ERPs customizados. 
                      Arquitetura escalável, código documentado, deploy automatizado.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="text-xs bg-secondary px-3 py-1.5 rounded-full text-muted-foreground">React</span>
                  <span className="text-xs bg-secondary px-3 py-1.5 rounded-full text-muted-foreground">Node.js</span>
                  <span className="text-xs bg-secondary px-3 py-1.5 rounded-full text-muted-foreground">TypeScript</span>
                  <span className="text-xs bg-secondary px-3 py-1.5 rounded-full text-muted-foreground">PostgreSQL</span>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Card menor */}
            <AnimatedSection delay={150}>
              <div className="bg-card border border-border rounded-xl p-8 h-full">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                  <Cog className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Automações</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Bots, integrações entre sistemas, workflows automatizados. 
                  Eliminamos trabalho manual repetitivo.
                </p>
              </div>
            </AnimatedSection>
            
            {/* Card menor */}
            <AnimatedSection delay={200}>
              <div className="bg-card border border-border rounded-xl p-8 h-full">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">APIs e Integrações</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Conectamos sistemas legados, ERPs, CRMs e qualquer ferramenta 
                  que sua operação precise usar.
                </p>
              </div>
            </AnimatedSection>
            
            {/* Card maior - segundo destaque */}
            <AnimatedSection delay={250} className="lg:col-span-2">
              <div className="bg-card border border-border rounded-xl p-8 md:p-10 h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Consultoria Técnica</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Análise de arquitetura, code review, mentoria de equipes. 
                      Ajudamos a corrigir o rumo antes que o projeto vire um problema.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Valores - Layout horizontal diferenciado */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20">
              <div className="lg:w-1/3">
                <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  Como pensamos
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mt-3">
                  Nossos princípios não são decorativos.
                </h2>
              </div>
              
              <div className="lg:w-2/3">
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
                  <div className="border-l-2 border-primary/30 pl-6">
                    <Zap className="h-5 w-5 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Agilidade real</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Sprints curtos, comunicação constante, entregas frequentes. 
                      Você acompanha o progresso, não fica esperando surpresas.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-primary/30 pl-6">
                    <Shield className="h-5 w-5 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Código que dura</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Documentação, testes, arquitetura pensada. 
                      Seu sistema não vai virar um pesadelo de manutenção.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-primary/30 pl-6">
                    <Heart className="h-5 w-5 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Compromisso genuíno</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Não abandonamos projetos, não sumimos. 
                      Estamos junto até a entrega — e depois dela.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-primary/30 pl-6">
                    <Users className="h-5 w-5 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Transparência total</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Acesso ao código, updates regulares, sem surpresas no orçamento. 
                      Você sabe exatamente onde está seu investimento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Visão de Futuro */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                Nossa visão
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-8">
                Software preparado para crescer.
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Buscamos evoluir continuamente, desenvolvendo software preparado para crescer junto 
                com nossos clientes. Nosso objetivo é ser reconhecidos como uma referência em desenvolvimento 
                de software personalizado, sendo a escolha natural de empresas que valorizam tecnologia 
                bem construída, confiável e orientada a resultados.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline - Minimalista */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  Trajetória
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mt-3">
                  5 anos construindo software sério.
                </h2>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
                  
                  <div className="space-y-8">
                    {[
                      { year: "2020", text: "Fundação. Foco inicial em automações e bots para Discord." },
                      { year: "2021", text: "Expansão para desenvolvimento web. Primeiros sistemas completos." },
                      { year: "2022", text: "50 projetos entregues. Consolidação como software house." },
                      { year: "2023", text: "Lançamento de produtos próprios. Equipe técnica expandida." },
                      { year: "2024", text: "100+ projetos. Reconhecimento no mercado B2B." },
                      { year: "2025", text: "Expansão de serviços. Foco em empresas em crescimento." },
                    ].map((item, index) => (
                      <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                        <div className="flex gap-6 items-start">
                          {/* Year Number */}
                          <div className="relative z-10 flex-shrink-0">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                              {item.year}
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 bg-card border border-border rounded-xl p-6 -mt-1">
                            <p className="text-muted-foreground leading-relaxed">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Parcerias Estratégicas */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column - text content */}
            <AnimatedSection animation="fade">
              <div>
                <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  Infraestrutura & Tecnologia
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-6">
                  Parcerias Estratégicas
                </h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Trabalhamos com parceiros estratégicos que garantem estabilidade, performance 
                    e previsibilidade para as soluções que desenvolvemos.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    A Cheetah Solutions Network é parceira da{" "}
                    <a 
                      href="https://squarecloud.app/pt-br/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      Square Cloud
                    </a>
                    , uma plataforma moderna de hospedagem focada em aplicações, bots, sites e 
                    bancos de dados, oferecendo uma base sólida para projetos escaláveis e confiáveis.
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Handshake className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Parceria tecnológica para infraestrutura de hospedagem e soluções escaláveis
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a 
                    href="https://squarecloud.app/pt-br/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button 
                      variant="outline"
                      className="border-border text-muted-foreground hover:bg-secondary hover:text-foreground font-medium"
                    >
                      Conhecer Square Cloud
                    </Button>
                  </a>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Right column - logo */}
            <AnimatedSection animation="fade" delay={150}>
              <div className="flex items-center justify-center h-full">
                <div className="relative p-6">
                  {/* Main logo container */}
                  <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-primary/15 shadow-2xl shadow-primary/10">
                    <img 
                      src={squareCloudLogo} 
                      alt="Square Cloud - Plataforma de Hospedagem Parceira da Cheetah Solutions Network"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Decorative ring - around the logo */}
                  <div className="absolute inset-3 border border-primary/10 rounded-3xl pointer-events-none" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA - Simples e direto */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Tem um projeto em mente?<br />
                <span className="text-primary">Vamos conversar.</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg">
                Sem compromisso. Conte sobre seu desafio e vamos avaliar 
                se faz sentido trabalharmos juntos.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contato">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Iniciar conversa
                  </Button>
                </Link>
                <Link to="/equipe">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-border text-muted-foreground hover:bg-secondary hover:text-foreground font-medium"
                  >
                    Conhecer a equipe
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

export default About;
