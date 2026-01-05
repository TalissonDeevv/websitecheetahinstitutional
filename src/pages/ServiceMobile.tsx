import { Smartphone, Tablet, ArrowRight, MessageCircle, CheckCircle, Zap, Download, Bell, Wifi, CreditCard, MapPin, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const ServiceMobile = () => {
  const appTypes = [
    {
      title: "Apps de E-commerce",
      description: "Lojas mobile completas com carrinho, pagamentos e gestão de pedidos",
      features: ["Carrinho inteligente", "Pagamentos integrados", "Push notifications", "Histórico de compras"]
    },
    {
      title: "Apps Corporativos",
      description: "Soluções internas para gestão e produtividade empresarial",
      features: ["Gestão de tarefas", "Relatórios mobile", "Sincronização offline", "Controle de acesso"]
    },
    {
      title: "Apps de Serviços",
      description: "Plataformas on-demand e marketplaces mobile",
      features: ["Sistema de agendamento", "Geolocalização", "Chat integrado", "Avaliações"]
    }
  ];

  const technologies = [
    "React Native", "Flutter", "Expo", "Firebase", "TypeScript", "Swift", "Kotlin"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Cheetah Solutions | Apps Mobile"
        description="Desenvolvemos aplicativos Android e iOS com foco em performance, usabilidade e experiência do usuário. Nativos ou híbridos."
        ogTitle="Apps Mobile | Cheetah Solutions"
        ogDescription="Apps que funcionam de verdade. Desenvolvemos aplicativos Android e iOS com foco em performance e usabilidade."
        ogUrl="/servicos/mobile"
      />
      <Header />
      
      {/* Hero - Asymmetric */}
      <section className="pt-28 pb-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <AnimatedSection className="lg:col-span-7">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">Apps Mobile</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
                Apps que <span className="text-primary">funcionam</span> de verdade
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Desenvolvemos aplicativos Android e iOS com foco em performance, 
                usabilidade e experiência do usuário. Nativos ou híbridos, conforme a necessidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/orcamento">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contato">
                  <Button variant="outline" className="border-border text-foreground hover:bg-secondary">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Falar com Especialista
                  </Button>
                </Link>
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
                  Apps mal desenvolvidos frustram usuários e prejudicam negócios. 
                  Lentidão, crashes e interfaces confusas fazem usuários abandonarem o app.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Muitas empresas precisam de presença mobile mas não sabem por onde começar. 
                  Escolher entre nativo e híbrido, definir funcionalidades essenciais e garantir 
                  publicação nas lojas exige conhecimento técnico específico.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Desenvolvemos apps com arquitetura sólida, testes automatizados e 
                  acompanhamos todo o processo de publicação na App Store e Google Play.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={150}>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Por que mobile importa</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Download className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Acesso direto</h4>
                      <p className="text-xs text-muted-foreground mt-1">Ícone na tela do usuário, sempre acessível</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Bell className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Push notifications</h4>
                      <p className="text-xs text-muted-foreground mt-1">Comunicação direta e engajamento ativo</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Wifi className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Modo offline</h4>
                      <p className="text-xs text-muted-foreground mt-1">Funcionamento mesmo sem internet</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Performance nativa</h4>
                      <p className="text-xs text-muted-foreground mt-1">Experiência rápida e fluida</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Tipos de Apps */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-2">
              Tipos de <span className="text-primary">aplicativos</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl">
              Desenvolvemos apps para diferentes segmentos e necessidades
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {appTypes.map((app, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-card border border-border rounded-xl p-8 h-full">
                  <h3 className="text-lg font-semibold mb-3">{app.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{app.description}</p>
                  <div className="space-y-2">
                    {app.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos Nativos */}
      <section className="py-16 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <AnimatedSection className="lg:col-span-4">
              <h2 className="text-2xl font-bold mb-4">
                Recursos <span className="text-primary">nativos</span>
              </h2>
              <p className="text-muted-foreground text-sm">
                Aproveitamos ao máximo as capacidades do dispositivo.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={150} className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { icon: Bell, label: "Notificações Push" },
                  { icon: MapPin, label: "Geolocalização" },
                  { icon: Camera, label: "Câmera e Galeria" },
                  { icon: CreditCard, label: "Pagamentos" },
                  { icon: Wifi, label: "Modo Offline" },
                  { icon: Zap, label: "Performance Nativa" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg">
                    <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Tecnologias */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-2">
              Tecnologias <span className="text-primary">mobile</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl">
              Escolhemos a stack mais adequada para cada projeto
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-secondary border border-border rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Processo */}
      <section className="py-16 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold mb-4">
                  Do conceito à <span className="text-primary">loja</span>
                </h2>
              </div>
              
              <div className="space-y-0">
                {[
                  { step: "01", title: "Análise e Planejamento", text: "Definimos requisitos, fluxos e escolhemos a melhor abordagem técnica." },
                  { step: "02", title: "Design UX/UI", text: "Interfaces intuitivas seguindo guidelines de cada plataforma." },
                  { step: "03", title: "Desenvolvimento", text: "Implementação com código limpo, testes e integração contínua." },
                  { step: "04", title: "Publicação", text: "Acompanhamos todo o processo de aprovação na App Store e Google Play." },
                ].map((item, index) => (
                  <AnimatedSection key={index} delay={index * 50}>
                    <div className="flex items-start gap-6 py-6 border-b border-border last:border-0">
                      <span className="text-primary font-bold text-lg w-12 shrink-0">{item.step}</span>
                      <div>
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.text}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Pronto para criar seu <span className="text-primary">app</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                Vamos conversar sobre seu projeto e encontrar a melhor solução mobile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/orcamento">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contato">
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

export default ServiceMobile;
