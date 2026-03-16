import { Target, Code, Zap, Shield, Users, Heart, MessageCircle, Lightbulb, Cog, Award, Handshake, HelpCircle } from "lucide-react";
import squareCloudLogo from "@/assets/square-cloud-logo.webp";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import GlowLayer from "@/components/decorations/GlowLayer";
import SEO from "@/components/SEO";
import { OrganizationJsonLd, WebPageJsonLd } from "@/components/JsonLd";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Cheetah Solutions Network | Quem Somos"
        description="A Cheetah Solutions Network é uma empresa de engenharia de software orientada à performance operacional. Estruturamos operações empresariais por meio de arquitetura tecnológica."
        ogTitle="Quem Somos | Cheetah Solutions Network"
        ogDescription="Engenharia de software orientada à performance operacional. Estruturamos operações empresariais por meio de diagnóstico, arquitetura e implementação de sistemas sob medida."
        ogUrl="/sobre"
      />
      <OrganizationJsonLd />
      <WebPageJsonLd 
        title="Quem Somos | Cheetah Solutions Network"
        description="Engenharia de software orientada à performance operacional. Estruturação tecnológica de operações empresariais."
        url="/sobre"
      />
      <Header />
      
      {/* Hero - Asymmetric */}
      <section className="pt-28 pb-20 px-4">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-5xl">
              <p className="text-xs text-primary uppercase tracking-[0.2em] mb-6 font-medium">
                Engenharia de Software desde 2020
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">
                Estruturamos operações<br />
                <span className="text-primary">com tecnologia.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Engenharia de software orientada à performance operacional. 
                Sistemas sob medida para empresas que exigem resultado.
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
                <p className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  Quem Somos
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mt-3 leading-tight">
                  Engenharia de software<br />
                  orientada à operação.
                </h2>
              </div>
            </AnimatedSection>
            
            {/* Right column - wider, content heavy */}
            <AnimatedSection delay={100} className="lg:col-span-8">
              <div className="space-y-8">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  A Cheetah Solutions Network é uma empresa de engenharia de software orientada à 
                  performance operacional. Atuamos na estruturação tecnológica de empresas, analisando 
                  operações, identificando gargalos e desenvolvendo sistemas que organizam processos.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Cada projeto começa com diagnóstico operacional, não com código. Entendemos como a 
                  empresa funciona, onde estão os pontos de ineficiência e quais sistemas são necessários 
                  para resolver problemas reais. O desenvolvimento é consequência da arquitetura definida.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nossa atuação é guiada pelo Cheetah OPS Framework, uma metodologia proprietária que 
                  combina diagnóstico, definição de arquitetura e implementação estruturada. O resultado 
                  são sistemas que eliminam retrabalho, integram setores e preparam a base tecnológica 
                  da empresa para crescer.
                </p>
                
                <div className="pt-8 border-t border-border">
                  <div className="grid sm:grid-cols-3 gap-8">
                    <div>
                      <span className="text-3xl font-bold text-primary">120+</span>
                      <p className="text-sm text-muted-foreground mt-1">operações estruturadas</p>
                    </div>
                    <div>
                      <span className="text-3xl font-bold text-primary">5+</span>
                      <p className="text-sm text-muted-foreground mt-1">anos de operação</p>
                    </div>
                    <div>
                      <span className="text-3xl font-bold text-primary">99.9%</span>
                      <p className="text-sm text-muted-foreground mt-1">disponibilidade</p>
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
              <p className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                Como trabalhamos
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mt-3">
                Metodologia estruturada,<br />
                resultados previsíveis.
              </h2>
            </div>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection delay={100}>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Acreditamos que sistemas eficientes nascem de diagnóstico preciso, arquitetura bem 
                  definida e implementação disciplinada. Atuamos de forma integrada com a operação dos 
                  clientes, entendendo o contexto real antes de definir qualquer solução tecnológica.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nossa equipe é formada por engenheiros de software com experiência em operações 
                  empresariais. Cada sistema entregue reflete o entendimento profundo do negócio 
                  do cliente, com foco em eliminar gargalos e criar base para crescimento.
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
              <p className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                O que fazemos
              </p>
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
                <p className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  Como pensamos
                </p>
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
              <p className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                Nossa visão
              </p>
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

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  Perguntas Frequentes
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mt-3">
                  Saiba mais sobre nós.
                </h2>
              </div>

              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="bg-card border border-border rounded-xl px-6 data-[state=open]:ring-2 data-[state=open]:ring-primary/20">
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-3 text-left">
                      <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="font-medium">Por que um Guepardo como logotipo?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 pl-8">
                    O guepardo é o animal terrestre mais rápido do mundo, simbolizando velocidade, 
                    agilidade e precisão, valores que são o centro da nossa atuação. Assim como o 
                    guepardo ataca com estratégia e eficiência, nós desenvolvemos soluções rápidas, 
                    focadas e certeiras para os desafios dos nossos clientes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-card border border-border rounded-xl px-6 data-[state=open]:ring-2 data-[state=open]:ring-primary/20">
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-3 text-left">
                      <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="font-medium">Qual Estado a empresa nasceu?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 pl-8">
                    A Cheetah Solutions Network nasceu em Recife, Pernambuco, Brasil. 
                    Apesar de atuarmos de forma remota com clientes de todo o país, 
                    nossas raízes estão fincadas no estado pernambucano.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-card border border-border rounded-xl px-6 data-[state=open]:ring-2 data-[state=open]:ring-primary/20">
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-3 text-left">
                      <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="font-medium">Quem é o Fundador e CEO?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 pl-8">
                    Talisson Souza é o fundador e CEO da Cheetah Solutions Network. 
                    Com visão empreendedora e experiência em tecnologia, ele lidera a empresa 
                    desde sua fundação, guiando a equipe na entrega de soluções digitais de alta qualidade.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-card border border-border rounded-xl px-6 data-[state=open]:ring-2 data-[state=open]:ring-primary/20">
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-3 text-left">
                      <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="font-medium">Em que ano vocês foram fundados?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 pl-8">
                    A Cheetah Solutions Network foi fundada em 2020. 
                    Desde então, já são mais de 5 anos de experiência desenvolvendo 
                    software de qualidade e ajudando empresas a crescerem com tecnologia.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </AnimatedSection>
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
                <Link to="/atendimento">
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
