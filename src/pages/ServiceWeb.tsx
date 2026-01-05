import { Globe, ArrowRight, MessageCircle, Code, Smartphone, Search, Shield, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const ServiceWeb = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Cheetah Solutions | Desenvolvimento Web"
        description="Desenvolvemos websites modernos, rápidos e otimizados para SEO. Do site institucional ao e-commerce, criamos soluções que geram resultados reais."
        ogTitle="Desenvolvimento Web | Cheetah Solutions"
        ogDescription="Websites que funcionam e convertem. Desenvolvemos soluções web modernas, rápidas e otimizadas para SEO."
        ogUrl="/servicos/web"
      />
      <Header />
      
      {/* Hero - Asymmetric */}
      <section className="pt-28 pb-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <AnimatedSection className="lg:col-span-7">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">Desenvolvimento Web</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
                Websites que <span className="text-primary">funcionam</span> e convertem
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Desenvolvemos websites modernos, rápidos e otimizados para SEO. Do site institucional ao e-commerce, 
                criamos soluções que geram resultados reais para seu negócio.
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
                  Muitas empresas ainda não têm presença digital adequada, ou possuem sites ultrapassados 
                  que não representam a qualidade do seu trabalho.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Sites lentos, mal otimizados e sem foco em conversão afastam clientes potenciais 
                  e prejudicam a credibilidade da marca.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nosso trabalho é criar websites que funcionam como ferramenta de negócio: 
                  atraem visitantes, transmitem confiança e geram resultados mensuráveis.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={150}>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Nossa abordagem técnica</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Code className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Código limpo e performático</h4>
                      <p className="text-xs text-muted-foreground mt-1">React, Next.js e tecnologias modernas que garantem velocidade</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Search className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">SEO otimizado desde o início</h4>
                      <p className="text-xs text-muted-foreground mt-1">Estrutura técnica que facilita indexação e ranqueamento</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Smartphone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Mobile-first obrigatório</h4>
                      <p className="text-xs text-muted-foreground mt-1">Design responsivo que funciona em qualquer dispositivo</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Segurança integrada</h4>
                      <p className="text-xs text-muted-foreground mt-1">SSL, proteção contra ataques e boas práticas de segurança</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Tipos de Projetos */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-2">
              Tipos de <span className="text-primary">projetos</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl">
              Desenvolvemos diferentes formatos de websites, cada um com foco específico
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedSection delay={100}>
              <div className="p-6 border border-border rounded-lg bg-card h-full">
                <h3 className="text-lg font-semibold mb-3">Sites Institucionais</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Apresentação profissional da sua empresa com foco em credibilidade e conversão de leads.
                </p>
                <div className="text-xs text-muted-foreground">
                  <span className="text-primary font-medium">Para quem:</span> Empresas que precisam de presença digital sólida
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={150}>
              <div className="p-6 border border-border rounded-lg bg-card h-full">
                <h3 className="text-lg font-semibold mb-3">Landing Pages</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Páginas focadas em conversão para campanhas, lançamentos ou captação de leads.
                </p>
                <div className="text-xs text-muted-foreground">
                  <span className="text-primary font-medium">Para quem:</span> Campanhas de marketing e vendas
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="p-6 border border-border rounded-lg bg-card h-full">
                <h3 className="text-lg font-semibold mb-3">Portais e Blogs</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Plataformas de conteúdo otimizadas para SEO e gestão editorial simplificada.
                </p>
                <div className="text-xs text-muted-foreground">
                  <span className="text-primary font-medium">Para quem:</span> Empresas com estratégia de conteúdo
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={250}>
              <div className="p-6 border border-border rounded-lg bg-card h-full">
                <h3 className="text-lg font-semibold mb-3">Aplicações Web</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Sistemas web completos com funcionalidades avançadas e painéis administrativos.
                </p>
                <div className="text-xs text-muted-foreground">
                  <span className="text-primary font-medium">Para quem:</span> Negócios que precisam de funcionalidades específicas
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
                Cada projeto inclui elementos essenciais para garantir qualidade e resultados.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={150} className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Design responsivo e moderno",
                  "Otimização para SEO",
                  "Certificado SSL gratuito",
                  "Painel administrativo",
                  "Integração com analytics",
                  "Hospedagem configurada",
                  "Backup automático",
                  "Suporte pós-lançamento"
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

      {/* Tecnologias */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-2">
              Tecnologias <span className="text-primary">utilizadas</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              Stack moderna e consolidada para garantir performance e manutenibilidade
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "WordPress", "Vercel", "AWS"].map((tech, index) => (
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
                Pronto para ter um website que <span className="text-primary">funciona</span>?
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

export default ServiceWeb;
