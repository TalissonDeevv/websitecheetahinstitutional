import { Zap, ArrowRight, MessageCircle, Link2, Cloud, Workflow, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const ServiceIntegrations = () => {
  const integrationTypes = [
    { name: "CRM", description: "Salesforce, HubSpot, Pipedrive, RD Station" },
    { name: "E-commerce", description: "Shopify, WooCommerce, VTEX, Magento" },
    { name: "Pagamentos", description: "Stripe, PagSeguro, Mercado Pago, PayPal" },
    { name: "Cloud", description: "AWS, Google Cloud, Azure, Vercel" },
    { name: "Comunicação", description: "WhatsApp, Telegram, Slack, Discord" },
    { name: "ERP", description: "TOTVS, SAP, Omie, Bling" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Cheetah Solutions | APIs e Integrações"
        description="Conectamos diferentes sistemas e automatizamos fluxos complexos. Eliminamos silos de dados e criamos processos integrados e eficientes."
        ogTitle="APIs e Integrações | Cheetah Solutions"
        ogDescription="Sistemas que conversam. Conectamos diferentes sistemas e automatizamos fluxos complexos."
        ogUrl="/servicos/integracoes"
      />
      <Header />
      
      {/* Hero - Asymmetric */}
      <section className="pt-28 pb-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <AnimatedSection className="lg:col-span-7">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">APIs & Integrações</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
                Sistemas que <span className="text-primary">conversam</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Conectamos diferentes sistemas e automatizamos fluxos complexos. 
                Eliminamos silos de dados e criamos processos integrados e eficientes.
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
                  Empresas usam múltiplos sistemas que não conversam entre si. 
                  Dados ficam fragmentados e equipes perdem tempo com trabalho manual.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Exportar planilhas, copiar dados e sincronizar informações manualmente 
                  gera erros, retrabalho e decisões baseadas em dados desatualizados.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Criamos integrações robustas que sincronizam dados automaticamente, 
                  disparam ações em tempo real e eliminam processos manuais.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={150}>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Nossa abordagem técnica</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Link2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">APIs REST e GraphQL</h4>
                      <p className="text-xs text-muted-foreground mt-1">Padrões modernos para comunicação entre sistemas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Workflow className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Webhooks e eventos</h4>
                      <p className="text-xs text-muted-foreground mt-1">Ações disparadas automaticamente em tempo real</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Cloud className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Arquitetura cloud</h4>
                      <p className="text-xs text-muted-foreground mt-1">Escalabilidade e alta disponibilidade garantidas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Segurança avançada</h4>
                      <p className="text-xs text-muted-foreground mt-1">Autenticação, criptografia e logs de auditoria</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Tipos de Integrações */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-2">
              Principais <span className="text-primary">integrações</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl">
              Conectamos seus sistemas com as principais plataformas do mercado
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrationTypes.map((integration, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="p-6 border border-border rounded-lg bg-card h-full">
                  <h3 className="text-lg font-semibold mb-2">{integration.name}</h3>
                  <p className="text-sm text-muted-foreground">{integration.description}</p>
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
                Cada integração é entregue com recursos completos para operação profissional.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={150} className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Integração com APIs REST e GraphQL",
                  "Webhooks e automações",
                  "Sincronização em tempo real",
                  "Tratamento de erros robusto",
                  "Monitoramento e alertas",
                  "Logs e auditoria",
                  "Documentação técnica",
                  "Suporte contínuo"
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

      {/* Exemplos */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-8">
              Exemplos de <span className="text-primary">aplicação</span>
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedSection delay={100}>
              <div className="p-5 border-l-2 border-primary bg-card/50">
                <h3 className="text-base font-semibold mb-2">E-commerce → ERP</h3>
                <p className="text-sm text-muted-foreground">
                  Pedidos sincronizados automaticamente, estoque atualizado em tempo real, 
                  notas fiscais emitidas sem intervenção manual.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={150}>
              <div className="p-5 border-l-2 border-primary bg-card/50">
                <h3 className="text-base font-semibold mb-2">CRM → Marketing</h3>
                <p className="text-sm text-muted-foreground">
                  Leads qualificados enviados automaticamente para campanhas de nutrição, 
                  scores atualizados com base em interações.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="p-5 border-l-2 border-primary bg-card/50">
                <h3 className="text-base font-semibold mb-2">Pagamentos → Sistema interno</h3>
                <p className="text-sm text-muted-foreground">
                  Confirmações de pagamento disparam liberação de acessos, 
                  notificações e atualização de status automaticamente.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={250}>
              <div className="p-5 border-l-2 border-primary bg-card/50">
                <h3 className="text-base font-semibold mb-2">Suporte → Comunicação</h3>
                <p className="text-sm text-muted-foreground">
                  Tickets criados a partir de mensagens, respostas enviadas 
                  automaticamente pelo canal de origem do cliente.
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
                Pronto para <span className="text-primary">conectar</span> seus sistemas?
              </h2>
              <p className="text-muted-foreground mb-8">
                Vamos discutir seu projeto e criar a integração ideal para sua operação.
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

export default ServiceIntegrations;
