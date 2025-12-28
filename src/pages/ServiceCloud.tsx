import { Cloud, Server, Monitor, ArrowRight, CheckCircle, Zap, Shield, BarChart3, Rocket, Building2, Network } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServiceCloud = () => {
  const technologies = [
    "AWS", "Vercel", "Firebase", "Railway", "Docker", "Kubernetes", "Jenkins"
  ];

  const features = [
    "Deploy em AWS, Vercel, Firebase, Railway e outros",
    "Monitoramento contínuo e manutenção",
    "Escalabilidade para qualquer tipo de projeto",
    "Backup automático e recuperação",
    "SSL/TLS e segurança avançada",
    "CDN para performance global",
    "Configuração de CI/CD"
  ];

  const benefits = [
    {
      icon: Cloud,
      title: "Deploy Simplificado",
      description: "Publique suas aplicações com facilidade em diversas plataformas."
    },
    {
      icon: Zap,
      title: "Performance Otimizada",
      description: "Aplicações rápidas e responsivas com CDN global."
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Proteção avançada com SSL, backups e monitoramento."
    },
    {
      icon: BarChart3,
      title: "Escalabilidade Automática",
      description: "Recursos que se ajustam automaticamente à demanda."
    }
  ];

  const cloudTypes = [
    {
      title: "Deploy para Startups",
      description: "Soluções ágeis e econômicas para projetos em crescimento",
      icon: Rocket,
      features: ["Deploy automatizado", "Escalabilidade automática", "Monitoramento básico", "Backup diário"]
    },
    {
      title: "Infraestrutura Corporativa",
      description: "Soluções robustas e escaláveis para grandes empresas",
      icon: Building2,
      features: ["Alta disponibilidade", "Load balancing", "Disaster recovery", "Suporte 24/7"]
    },
    {
      title: "Microserviços e APIs",
      description: "Arquiteturas modernas com containers e orquestração",
      icon: Network,
      features: ["Containers Docker", "Kubernetes", "API Gateway", "Service mesh"]
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
                <span className="text-white">Cloud Solutions & </span>
                <span className="text-[#0047ab]">Deploy</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Garanta performance, escalabilidade e disponibilidade com soluções modernas em nuvem. Deploy profissional com monitoramento contínuo e manutenção especializada.
              </p>
              <Link to="/orcamento">
                <Button className="bg-[#0047ab] hover:bg-[#0047ab]/80 text-white px-8 py-3 text-lg">
                  Solicitar Orçamento
                </Button>
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#0047ab]/10 to-black/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-white">Por que escolher nosso </span>
              <span className="text-[#0047ab]">Cloud?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-gradient-to-br from-[#0047ab]/10 to-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#0047ab]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-[#0047ab]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Types Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-white">Tipos de </span>
              <span className="text-[#0047ab]">Soluções Cloud</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Oferecemos soluções cloud personalizadas para diferentes necessidades e portes de projeto
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cloudTypes.map((type, index) => (
              <Card key={index} className="group bg-gradient-to-br from-[#0047ab]/10 to-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="bg-[#0047ab]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-[#0047ab]/30">
                      <type.icon className="h-8 w-8 text-[#0047ab]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{type.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{type.description}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-[#0047ab] mb-3">Principais recursos:</h4>
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#0047ab] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 bg-[#0047ab]/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-white">Plataformas </span>
              <span className="text-[#0047ab]">Suportadas</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Trabalhamos com as principais plataformas cloud do mercado
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#0047ab]/10 to-black/50 border border-[#0047ab]/20 rounded-lg p-4 text-center hover:border-[#0047ab]/50 transition-all duration-300"
              >
                <p className="text-white font-medium text-sm">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-white">Recursos </span>
              <span className="text-[#0047ab]">Inclusos</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-gradient-to-r from-[#0047ab]/10 to-transparent p-4 rounded-lg border border-[#0047ab]/20">
                <CheckCircle className="h-5 w-5 text-[#0047ab] flex-shrink-0" />
                <span className="text-white">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#0047ab]/10 to-black/30">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            <span className="text-white">Nosso </span>
            <span className="text-[#0047ab]">Processo</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Server, title: "Análise de Infraestrutura", desc: "Avaliamos as necessidades do projeto" },
              { icon: Cloud, title: "Configuração", desc: "Configuramos ambiente e ferramentas" },
              { icon: Zap, title: "Deploy", desc: "Publicamos e configuramos aplicação" },
              { icon: Monitor, title: "Monitoramento", desc: "Acompanhamento contínuo e manutenção" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#0047ab]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-[#0047ab]" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#0047ab]/20 to-black/50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-white">Pronto para </span>
            <span className="text-[#0047ab]">Escalar?</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos levar sua aplicação para a nuvem
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/orcamento">
              <Button className="bg-[#0047ab] hover:bg-[#0047ab]/80 text-white px-8 py-3">
                Solicitar Orçamento
              </Button>
            </Link>
            <a
              href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20cloud%20e%20deploy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="border-[#0047ab] text-[#0047ab] hover:bg-[#0047ab] hover:text-white px-8 py-3">
                Falar no WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceCloud;
