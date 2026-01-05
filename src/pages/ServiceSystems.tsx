import { Cpu, ArrowRight, MessageCircle, Database, Settings, BarChart, Lock, CheckCircle, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const ServiceSystems = () => {
  const systemTypes = [
    { 
      name: "CRM", 
      description: "Gestão de relacionamento com clientes e pipeline comercial",
      icon: Database,
    },
    { 
      name: "ERP", 
      description: "Planejamento de recursos e gestão empresarial integrada",
      icon: Settings,
    },
    { 
      name: "Gestão de Estoque", 
      description: "Controle de inventário com rastreabilidade completa",
      icon: BarChart,
    },
    { 
      name: "Dashboard Analítico", 
      description: "Visualização de dados e métricas em tempo real",
      icon: BarChart,
    },
    { 
      name: "Portal do Cliente", 
      description: "Interface dedicada para usuários finais",
      icon: Lock,
    },
    { 
      name: "Sistema de Vendas", 
      description: "Automação do processo comercial completo",
      icon: Workflow,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Cheetah Solutions | Sistemas Personalizados"
        description="Desenvolvemos sistemas sob medida: CRM, ERP, gestão de estoque, dashboards e portais. Soluções completas para seu negócio."
        ogTitle="Sistemas Personalizados | Cheetah Solutions"
        ogDescription="Sistemas sob medida para empresas. CRM, ERP, gestão de estoque, dashboards analíticos e portais de clientes."
        ogUrl="/servicos/sistemas"
      />
      <Header />
      
      {/* Hero - Asymmetric */}
      <section className="pt-28 pb-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <AnimatedSection className="lg:col-span-7">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">Sistemas Web</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
                Sistemas <span className="text-primary">sob medida</span> para seu negócio
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Desenvolvemos sistemas empresariais personalizados que automatizam processos, 
                centralizam informações e aumentam a eficiência operacional.
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
                  Empresas perdem tempo e dinheiro com processos manuais, planilhas desconectadas 
                  e sistemas genéricos que não atendem suas necessidades específicas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A falta de integração entre setores gera retrabalho, erros e decisões 
                  baseadas em dados desatualizados ou incompletos.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Criamos sistemas que refletem exatamente como sua empresa opera, 
                  automatizando tarefas repetitivas e fornecendo dados precisos para decisões estratégicas.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={150}>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Nossa abordagem técnica</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Database className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Arquitetura escalável</h4>
                      <p className="text-xs text-muted-foreground mt-1">Sistemas preparados para crescer com seu negócio</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Settings className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Processos automatizados</h4>
                      <p className="text-xs text-muted-foreground mt-1">Eliminação de tarefas manuais e repetitivas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BarChart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Relatórios inteligentes</h4>
                      <p className="text-xs text-muted-foreground mt-1">Dados em tempo real para tomada de decisão</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Segurança avançada</h4>
                      <p className="text-xs text-muted-foreground mt-1">Controle de acesso e proteção de dados</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Tipos de Sistemas */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-2">
              Tipos de <span className="text-primary">sistemas</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl">
              Desenvolvemos diferentes tipos de sistemas, sempre personalizados para cada cliente
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemTypes.map((system, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="p-6 border border-border rounded-lg bg-card h-full">
                  <system.icon className="h-6 w-6 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{system.name}</h3>
                  <p className="text-sm text-muted-foreground">{system.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* O que entregamos */}
      <section className="py-16 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <AnimatedSection className="lg:col-span-4">
              <h2 className="text-2xl font-bold mb-4">
                O que está <span className="text-primary">incluído</span>
              </h2>
              <p className="text-muted-foreground text-sm">
                Cada projeto inclui elementos essenciais para garantir qualidade e resultados.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={150} className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Análise de requisitos detalhada",
                  "Arquitetura escalável e robusta",
                  "Painéis administrativos",
                  "Relatórios e dashboards",
                  "API REST para integrações",
                  "Sistema de permissões",
                  "Backup automático",
                  "Documentação técnica"
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

      {/* Diferenciais */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-8">
              Por que escolher a <span className="text-primary">Cheetah</span>
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedSection delay={100}>
              <div className="p-5 border-l-2 border-primary bg-card/50">
                <h3 className="text-base font-semibold mb-2">Totalmente Personalizado</h3>
                <p className="text-sm text-muted-foreground">
                  Cada sistema é desenvolvido do zero para suas necessidades específicas, 
                  não usamos templates ou soluções genéricas.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={150}>
              <div className="p-5 border-l-2 border-primary bg-card/50">
                <h3 className="text-base font-semibold mb-2">Escalabilidade Garantida</h3>
                <p className="text-sm text-muted-foreground">
                  Arquitetura preparada para crescer junto com seu negócio, 
                  sem necessidade de refazer o sistema.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="p-5 border-l-2 border-primary bg-card/50">
                <h3 className="text-base font-semibold mb-2">Suporte Dedicado</h3>
                <p className="text-sm text-muted-foreground">
                  Equipe técnica disponível para suporte contínuo, 
                  correções e evolução do sistema.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={250}>
              <div className="p-5 border-l-2 border-primary bg-card/50">
                <h3 className="text-base font-semibold mb-2">Integração Completa</h3>
                <p className="text-sm text-muted-foreground">
                  Conectamos seu sistema com outras ferramentas e plataformas 
                  que você já utiliza.
                </p>
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
                Pronto para <span className="text-primary">otimizar</span> seus processos?
              </h2>
              <p className="text-muted-foreground mb-8">
                Vamos discutir seu projeto e encontrar a melhor solução para suas necessidades.
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

export default ServiceSystems;
