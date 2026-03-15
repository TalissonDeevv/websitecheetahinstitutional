import { Layers, Settings, Code, Globe, Database, ArrowRight, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { WebPageJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

const Services = () => {
  const capabilities = [
    {
      title: "Estruturação de Sistemas Operacionais",
      description: "Desenvolvimento de sistemas internos sob medida para organizar fluxos críticos da empresa e eliminar dependência de processos manuais.",
      forWho: "Empresas com processos manuais excessivos, planilhas desorganizadas ou sistemas que não atendem a operação",
      icon: Layers,
    },
    {
      title: "Automação de Processos Estratégicos",
      description: "Automação de rotinas operacionais e integração de dados para reduzir retrabalho e aumentar eficiência da operação.",
      forWho: "Operações com tarefas repetitivas, geração manual de relatórios ou fluxos que dependem de intervenção humana constante",
      icon: Settings,
    },
    {
      title: "Integração de Sistemas e Departamentos",
      description: "Conexão entre plataformas, bancos de dados e ferramentas para permitir fluxo consistente de informação dentro da empresa.",
      forWho: "Empresas com dados fragmentados entre ferramentas, setores desconectados ou sistemas que não se comunicam",
      icon: Code,
    },
    {
      title: "Plataformas Digitais Escaláveis",
      description: "Aplicações web e sistemas preparados para suportar crescimento de usuários, dados e complexidade operacional.",
      forWho: "Negócios em crescimento que precisam de plataformas robustas, portais de clientes ou aplicações com alto volume de acesso",
      icon: Globe,
    },
    {
      title: "Inteligência Operacional e Dashboards",
      description: "Centralização de dados estratégicos em painéis que permitem tomada de decisão baseada em informação confiável.",
      forWho: "Gestores que precisam de visibilidade sobre a operação, métricas consolidadas e relatórios automatizados",
      icon: Database,
    },
  ];

  const problems = [
    "Gargalos operacionais recorrentes que impedem o crescimento",
    "Retrabalho constante por falta de sistemas adequados",
    "Processos manuais excessivos que consomem tempo da equipe",
    "Sistemas que não se comunicam entre si",
    "Dados fragmentados entre planilhas e ferramentas isoladas",
    "Baixa previsibilidade operacional por falta de indicadores",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Cheetah Solutions Network | Estruturação Tecnológica de Operações"
        description="Estruturamos operações empresariais por meio de arquitetura tecnológica. Sistemas sob medida, automação de processos, integração de sistemas e dashboards para empresas em crescimento."
        ogTitle="Estruturação Tecnológica | Cheetah Solutions Network"
        ogDescription="Estruturamos operações empresariais por meio de arquitetura tecnológica. Diagnóstico operacional, sistemas sob medida e automação de processos."
        ogUrl="/servicos"
      />
      <WebPageJsonLd 
        title="Estruturação Tecnológica | Cheetah Solutions Network"
        description="Estruturamos operações empresariais por meio de arquitetura tecnológica."
        url="/servicos"
      />
      <BreadcrumbJsonLd 
        items={[
          { name: "Home", url: "/" },
          { name: "Serviços", url: "/servicos" }
        ]}
      />
      <Header />
      
      {/* Hero */}
      <AnimatedSection animation="fade">
        <section className="pt-28 pb-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <p className="text-xs text-primary uppercase tracking-[0.2em] mb-6 font-medium">
                Como atuamos
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">
                Estruturação tecnológica de<br />
                <span className="text-primary">operações empresariais.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Analisamos a operação, identificamos gargalos estruturais e desenvolvemos 
                a arquitetura tecnológica necessária para organizar processos e preparar 
                a empresa para crescimento.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* O Problema */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <AnimatedSection animation="fade-right">
                <div className="sticky top-32">
                  <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                    O problema
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mt-3 leading-tight">
                    Por que empresas<br />
                    travam no crescimento.
                  </h2>
                  <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                    A maioria das empresas em crescimento enfrenta problemas operacionais 
                    que poderiam ser resolvidos com estruturação tecnológica adequada.
                  </p>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {problems.map((problem, index) => (
                  <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
                    <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-5 h-full">
                      <AlertTriangle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{problem}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capacidades */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="mb-12">
              <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                Capacidades
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3">
                Como estruturamos operações.
              </h2>
            </div>
          </AnimatedSection>
          
          <div className="space-y-6">
            {capabilities.map((cap, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors">
                  <div className="grid lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-1">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <cap.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="lg:col-span-7">
                      <h3 className="text-xl font-semibold mb-3">{cap.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{cap.description}</p>
                    </div>
                    <div className="lg:col-span-4">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Indicado para:</span>
                      <p className="text-sm text-foreground/80 mt-1 leading-relaxed">{cap.forWho}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Cheetah OPS Framework */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <p className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  Metodologia
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mt-3">
                  Cheetah OPS Framework
                </h2>
                <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
                  Metodologia proprietária para estruturação tecnológica de operações.
                  O desenvolvimento de software é consequência da arquitetura operacional definida.
                </p>
              </div>
            </AnimatedSection>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
                
                <div className="space-y-8">
                  {[
                    { step: "01", title: "Diagnóstico Operacional", text: "Mapeamos a operação, identificamos gargalos estruturais e documentamos os fluxos que precisam de intervenção tecnológica." },
                    { step: "02", title: "Arquitetura Tecnológica", text: "Definimos a estrutura de sistemas, integrações e automações necessárias. O escopo técnico nasce da análise operacional." },
                    { step: "03", title: "Implementação Estruturada", text: "Desenvolvemos e implantamos os sistemas com entregas incrementais, validação constante e comunicação direta com a operação." },
                    { step: "04", title: "Acompanhamento e Evolução", text: "Monitoramos resultados, ajustamos a estrutura e evoluímos os sistemas conforme a operação cresce e novas necessidades surgem." },
                  ].map((item, index) => (
                    <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                      <div className="flex gap-6 items-start">
                        <div className="relative z-10 flex-shrink-0">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                            {item.step}
                          </div>
                        </div>
                        <div className="flex-1 bg-card border border-border rounded-xl p-6 -mt-1">
                          <h3 className="font-semibold mb-2">{item.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
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
                Sua operação tem gargalos?<br />
                <span className="text-primary">Vamos avaliar juntos.</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Diagnóstico inicial sem compromisso. Identificamos os pontos críticos
                da operação e apresentamos uma proposta de estruturação.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/orcamento">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                  >
                    Solicitar diagnóstico
                  </Button>
                </Link>
                <Link to="/atendimento">
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