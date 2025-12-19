
import { Globe, CheckCircle, MessageCircle, ArrowRight, Smartphone, Search, Palette, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServiceWeb = () => {
  const technologies = [
    "React", "Next.js", "Vue.js", "Angular", "Node.js", "PHP", "Python", "WordPress"
  ];

  const features = [
    "Design responsivo e moderno",
    "Otimização para mecanismos de busca (SEO)",
    "Integração com sistemas de pagamento",
    "Painéis administrativos",
    "E-commerce completo",
    "Hospedagem e manutenção",
    "Certificado SSL gratuito",
    "Backup automático"
  ];

  const benefits = [
    {
      icon: Smartphone,
      title: "Design Responsivo",
      description: "Seus usuários terão uma experiência perfeita em qualquer dispositivo, desde smartphones até desktops."
    },
    {
      icon: Search,
      title: "SEO Otimizado",
      description: "Otimizamos seu site para aparecer no topo dos resultados de busca do Google e outros buscadores."
    },
    {
      icon: Palette,
      title: "Design Personalizado",
      description: "Criamos layouts únicos que refletem a identidade visual da sua marca e conquistam seus clientes."
    },
    {
      icon: Code,
      title: "Código Limpo",
      description: "Desenvolvemos com as melhores práticas, garantindo performance, segurança e facilidade de manutenção."
    }
  ];

  const projectTypes = [
    {
      title: "Sites Institucionais",
      description: "Apresente sua empresa de forma profissional com páginas que convertem visitantes em clientes."
    },
    {
      title: "E-commerce",
      description: "Venda online com plataformas completas de comércio eletrônico, integradas com gateways de pagamento."
    },
    {
      title: "Portais e Blogs",
      description: "Compartilhe conteúdo e construa audiência com portais dinâmicos e blogs otimizados para SEO."
    },
    {
      title: "Aplicações Web",
      description: "Sistemas complexos e aplicações web personalizadas para automatizar processos do seu negócio."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 animate-fade-in">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Desenvolvimento </span>
                <span className="text-primary">Web</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Criamos websites modernos, responsivos e otimizados para performance máxima. 
                Do site institucional ao e-commerce completo, desenvolvemos soluções web que convertem.
              </p>
              <Link to="/orcamento">
                <Button className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-3 text-lg">
                  Solicitar Orçamento
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://i.ibb.co/sJXqD4Dh/Website-setup-cuate.png" 
                alt="Desenvolvimento Web"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -left-4 bg-primary/20 rounded-full w-24 h-24 flex items-center justify-center backdrop-blur-sm border border-primary/30">
                <Globe className="h-12 w-12 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-white">Por que escolher nossos </span>
              <span className="text-primary">Websites?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Projetos */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center text-foreground">
            <span className="text-white">Tipos de </span>
            <span className="text-primary">Projetos</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectTypes.map((project, index) => (
              <Card key={index} className="group bg-card border-border hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologias */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center text-foreground">
            <span className="text-white">Tecnologias que </span>
            <span className="text-primary">Utilizamos</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="bg-card text-card-foreground px-4 py-2 rounded-full border border-border hover:border-primary/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center text-foreground">
            <span className="text-white">O que está </span>
            <span className="text-primary">Incluído</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center text-foreground">
            <span className="text-white">Nosso Processo de </span>
            <span className="text-primary">Desenvolvimento</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Briefing", desc: "Entendemos suas necessidades e objetivos" },
              { step: "2", title: "Design", desc: "Criamos protótipos e layouts personalizados" },
              { step: "3", title: "Desenvolvimento", desc: "Codificamos com as melhores práticas" },
              { step: "4", title: "Entrega", desc: "Testamos, otimizamos e colocamos online" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 border-2 border-primary/30">
                  <span className="text-lg font-bold text-primary">{process.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            <span className="text-white">Pronto para Criar seu </span>
            <span className="text-primary">Website?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Vamos transformar sua presença digital com um website profissional que realmente converte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </Button>
            </a>
            <Link to="/orcamento">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Calcular Orçamento
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceWeb;
