import { Target, Code, Zap, Shield, Users, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero - Asymmetric */}
      <section className="pt-28 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl">
            <p className="text-xs text-primary uppercase tracking-[0.2em] mb-6 font-medium">
              Software House desde 2020
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">
              Construímos software<br />
              <span className="text-primary">que funciona.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Sem promessas vazias. Código limpo, entregas no prazo, 
              e soluções que resolvem problemas reais.
            </p>
          </div>
        </div>
      </section>

      {/* Quem Somos - Full width asymmetric */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left column - narrower */}
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  Quem Somos
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mt-3 leading-tight">
                  Uma equipe técnica<br />
                  que entende de negócio.
                </h2>
              </div>
            </div>
            
            {/* Right column - wider, content heavy */}
            <div className="lg:col-span-8">
              <div className="space-y-8">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  A Cheetah Network nasceu da frustração com o mercado de software brasileiro. 
                  Projetos atrasados, código mal feito, comunicação inexistente. 
                  Decidimos fazer diferente.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Desde 2020, desenvolvemos sistemas, aplicações web, automações e integrações 
                  para empresas que precisam de tecnologia que funcione — não apenas que pareça bonita 
                  em uma apresentação.
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
            </div>
          </div>
        </div>
      </section>

      {/* O que fazemos - Cards com variação */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-xl mb-16">
            <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
              O que fazemos
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mt-3">
              Desenvolvimento sob medida,<br />
              não templates genéricos.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card maior - destaque */}
            <div className="lg:col-span-2 bg-card border border-border rounded-xl p-8 md:p-10">
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
            
            {/* Card menor */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Automações</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Bots, integrações entre sistemas, workflows automatizados. 
                Eliminamos trabalho manual repetitivo.
              </p>
            </div>
            
            {/* Card menor */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">APIs e Integrações</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Conectamos sistemas legados, ERPs, CRMs e qualquer ferramenta 
                que sua operação precise usar.
              </p>
            </div>
            
            {/* Card maior - segundo destaque */}
            <div className="lg:col-span-2 bg-card border border-border rounded-xl p-8 md:p-10">
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
          </div>
        </div>
      </section>

      {/* Valores - Layout horizontal diferenciado */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
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
        </div>
      </section>

      {/* Timeline - Minimalista */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                Trajetória
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3">
                5 anos construindo software sério.
              </h2>
            </div>
            
            <div className="space-y-0">
              {[
                { year: "2020", text: "Fundação. Foco inicial em automações e bots para Discord." },
                { year: "2021", text: "Expansão para desenvolvimento web. Primeiros sistemas completos." },
                { year: "2022", text: "50 projetos entregues. Consolidação como software house." },
                { year: "2023", text: "Lançamento de produtos próprios. Equipe técnica expandida." },
                { year: "2024", text: "100+ projetos. Reconhecimento no mercado B2B." },
                { year: "2025", text: "Expansão de serviços. Foco em empresas em crescimento." },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-6 py-6 border-b border-border last:border-0"
                >
                  <span className="text-primary font-bold text-lg w-16 shrink-0">{item.year}</span>
                  <p className="text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Simples e direto */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
