import { Shield, Lock, CheckCircle, ArrowRight, Eye, AlertTriangle, Users, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServiceSecurity = () => {
  const technologies = [
    "JWT", "OAuth2", "OpenID Connect", "SAML", "SSL/TLS", "bcrypt", "Argon2"
  ];

  const features = [
    "Sistemas de autenticação (JWT, OAuth2)",
    "Proteção contra DDoS, SQL Injection, XSS e outros ataques",
    "Consultoria especializada em conformidade com a LGPD",
    "Criptografia de dados sensíveis",
    "Auditoria de segurança",
    "Monitoramento em tempo real",
    "Backup seguro e recuperação"
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Proteção Avançada",
      description: "Implementamos as melhores práticas de segurança para proteger seus dados e sistemas."
    },
    {
      icon: Lock,
      title: "Conformidade LGPD",
      description: "Garantimos que sua aplicação esteja em conformidade com a Lei Geral de Proteção de Dados."
    },
    {
      icon: Eye,
      title: "Monitoramento 24/7",
      description: "Monitoramento contínuo para detectar e prevenir ameaças em tempo real."
    },
    {
      icon: Users,
      title: "Consultoria Especializada",
      description: "Nossa equipe oferece consultoria completa em segurança digital e proteção de dados."
    }
  ];

  const securityTypes = [
    {
      title: "Autenticação e Autorização",
      description: "Sistemas robustos de login e controle de acesso",
      icon: Lock,
      features: ["JWT e OAuth2", "Controle de permissões", "Autenticação multifator", "Single Sign-On (SSO)"]
    },
    {
      title: "Proteção contra Ataques",
      description: "Prevenção de DDoS, SQL Injection, XSS e outras vulnerabilidades",
      icon: Shield,
      features: ["Firewall avançado", "Detecção de intrusão", "Análise de tráfego", "Bloqueio automático"]
    },
    {
      title: "Compliance LGPD",
      description: "Adequação completa à Lei Geral de Proteção de Dados",
      icon: Eye,
      features: ["Auditoria de dados", "Consentimento explícito", "Relatórios de conformidade", "Anonimização de dados"]
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
                <span className="text-white">Segurança Digital e </span>
                <span className="text-[#0047ab]">Proteção de Dados</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Garanta a segurança de suas aplicações com autenticação robusta, prevenção contra ataques e adequação à LGPD. Proteja seus dados e sistemas com soluções de segurança de alta qualidade.
              </p>
              <Link to="/orcamento">
                <Button className="bg-[#0047ab] hover:bg-[#0047ab]/80 text-white px-8 py-3 text-lg">
                  Solicitar Orçamento
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://i.ibb.co/DDjvZNbM/Security-On-pana.png" 
                alt="Segurança Digital"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -left-4 bg-[#0047ab]/20 rounded-full w-24 h-24 flex items-center justify-center backdrop-blur-sm border border-[#0047ab]/30">
                <Shield className="h-12 w-12 text-[#0047ab]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#0047ab]/10 to-black/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-white">Por que escolher nossa </span>
              <span className="text-[#0047ab]">Segurança Digital?</span>
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

      {/* Security Types Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-white">Tipos de </span>
              <span className="text-[#0047ab]">Segurança</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Oferecemos soluções completas de segurança para proteger seus sistemas e dados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityTypes.map((type, index) => (
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
              <span className="text-white">Tecnologias de </span>
              <span className="text-[#0047ab]">Segurança</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Utilizamos as tecnologias mais avançadas e confiáveis do mercado
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
              { icon: AlertTriangle, title: "Análise de Vulnerabilidades", desc: "Identificamos pontos fracos e riscos" },
              { icon: Shield, title: "Implementação", desc: "Aplicamos as melhores práticas de segurança" },
              { icon: Eye, title: "Monitoramento", desc: "Acompanhamento contínuo da segurança" },
              { icon: Code, title: "Manutenção", desc: "Atualizações e melhorias constantes" }
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
            <span className="text-[#0047ab]">Proteger seu Negócio?</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos proteger seus sistemas e dados
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/orcamento">
              <Button className="bg-[#0047ab] hover:bg-[#0047ab]/80 text-white px-8 py-3">
                Solicitar Orçamento
              </Button>
            </Link>
            <a
              href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20segurança%20digital"
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

export default ServiceSecurity;
