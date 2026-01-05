import { ShoppingCart, ArrowRight, MessageCircle, CreditCard, Package, BarChart3, CheckCircle, Store, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const ServiceEcommerce = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Cheetah Solutions | E-commerce"
        description="Desenvolvemos e-commerces completos, otimizados para conversão e preparados para escalar. Da loja básica ao marketplace."
        ogTitle="E-commerce | Cheetah Solutions"
        ogDescription="Lojas virtuais que vendem. E-commerces completos, otimizados para conversão e preparados para escalar."
        ogUrl="/servicos/ecommerce"
      />
      <Header />
      
      {/* Hero - Asymmetric */}
      <section className="pt-28 pb-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <AnimatedSection className="lg:col-span-7">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">E-commerce</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
                Lojas virtuais que <span className="text-primary">vendem</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Desenvolvemos e-commerces completos, otimizados para conversão e preparados 
                para escalar. Da loja básica ao marketplace, criamos soluções que geram vendas.
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
                  Muitas lojas virtuais têm alto tráfego mas baixa conversão. 
                  Checkout complicado, site lento e falta de confiança afastam compradores.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Plataformas genéricas limitam crescimento e cobram taxas que corroem margens. 
                  A gestão fica fragmentada entre múltiplas ferramentas desconectadas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Criamos e-commerces sob medida: rápidos, seguros e com gestão integrada. 
                  Checkout otimizado, integração com pagamentos e logística automatizada.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={150}>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Nossa abordagem técnica</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CreditCard className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Checkout otimizado</h4>
                      <p className="text-xs text-muted-foreground mt-1">Processo de compra simples que maximiza conversões</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Package className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Gestão de estoque integrada</h4>
                      <p className="text-xs text-muted-foreground mt-1">Controle em tempo real de produtos e variações</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Truck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Logística automatizada</h4>
                      <p className="text-xs text-muted-foreground mt-1">Integração com Correios, transportadoras e fulfillment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BarChart3 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Analytics de vendas</h4>
                      <p className="text-xs text-muted-foreground mt-1">Relatórios detalhados para otimizar performance</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Tipos de E-commerce */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-2">
              Tipos de <span className="text-primary">e-commerce</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl">
              Desenvolvemos soluções para diferentes modelos de negócio
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedSection delay={100}>
              <div className="p-6 border border-border rounded-lg bg-card h-full">
                <ShoppingCart className="h-6 w-6 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3">Loja Virtual</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Solução completa para vender online com gestão simplificada e foco em conversão.
                </p>
                <div className="text-xs text-muted-foreground">
                  <span className="text-primary font-medium">Para quem:</span> Pequenas e médias empresas
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={150}>
              <div className="p-6 border border-border rounded-lg bg-card h-full">
                <Store className="h-6 w-6 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3">Marketplace</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Plataforma para múltiplos vendedores com sistema de comissões e gestão centralizada.
                </p>
                <div className="text-xs text-muted-foreground">
                  <span className="text-primary font-medium">Para quem:</span> Empresas que conectam vendedores
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="p-6 border border-border rounded-lg bg-card h-full">
                <Package className="h-6 w-6 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3">E-commerce Corporativo</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Solução enterprise com integrações ERP, B2B/B2C e alto volume de transações.
                </p>
                <div className="text-xs text-muted-foreground">
                  <span className="text-primary font-medium">Para quem:</span> Grandes operações de e-commerce
                </div>
              </div>
            </AnimatedSection>
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
                Cada e-commerce inclui funcionalidades essenciais para vender online.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={150} className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Painel administrativo completo",
                  "Integração com pagamentos",
                  "Gestão de estoque e pedidos",
                  "Cálculo de frete automático",
                  "Sistema de cupons e promoções",
                  "SEO otimizado para vendas",
                  "Relatórios de desempenho",
                  "Integração com marketplaces"
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

      {/* Integrações */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-2">
              Integrações <span className="text-primary">disponíveis</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              Conectamos seu e-commerce com as principais plataformas do mercado
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <div className="flex flex-wrap gap-3">
              {["Stripe", "PagSeguro", "Mercado Pago", "Correios", "Melhor Envio", "Google Analytics", "Meta Pixel", "RD Station"].map((tech, index) => (
                <span 
                  key={index}
                  className="bg-card text-foreground px-4 py-2 rounded-lg border border-border text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Pronto para <span className="text-primary">vender online</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                Vamos discutir seu projeto e criar a loja virtual ideal para seu negócio.
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

export default ServiceEcommerce;
