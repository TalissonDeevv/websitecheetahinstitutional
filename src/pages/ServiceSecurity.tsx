import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight, MessageCircle, FileCheck, Database, Key, Server, Fingerprint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const ServiceSecurity = () => {
  const securityServices = [
    {
      title: "Autenticação e Autorização",
      description: "Sistemas robustos de login, controle de acesso e gerenciamento de permissões",
      icon: Lock,
      features: ["JWT e OAuth2", "Autenticação multifator (MFA)", "Single Sign-On (SSO)", "Controle granular de permissões"]
    },
    {
      title: "Proteção contra Ataques",
      description: "Prevenção de vulnerabilidades e ameaças cibernéticas",
      icon: Shield,
      features: ["Proteção DDoS", "Prevenção SQL Injection", "Proteção XSS/CSRF", "Rate limiting e firewall"]
    },
    {
      title: "Conformidade LGPD",
      description: "Adequação completa à Lei Geral de Proteção de Dados",
      icon: FileCheck,
      features: ["Auditoria de dados", "Gestão de consentimento", "Relatórios de conformidade", "Anonimização de dados"]
    }
  ];

  const technologies = [
    "JWT", "OAuth2", "OpenID Connect", "SAML", "SSL/TLS", "bcrypt", "Argon2", "AES-256"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero - Asymmetric */}
      <section className="pt-28 pb-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <AnimatedSection className="lg:col-span-7">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">Segurança Digital</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
                Proteção que <span className="text-primary">você pode confiar</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Segurança não é opcional. Desenvolvemos sistemas com autenticação robusta, 
                proteção contra ataques e conformidade com LGPD desde o primeiro dia.
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
                  Sistemas expostos são alvos fáceis. Vazamentos de dados, acessos não autorizados 
                  e multas por não conformidade com a LGPD são riscos reais que afetam empresas de todos os tamanhos.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Muitas aplicações são desenvolvidas sem considerar segurança desde o início, 
                  criando vulnerabilidades que só são descobertas após um incidente.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Implementamos segurança como parte fundamental da arquitetura, não como algo 
                  adicionado depois. Isso reduz custos e riscos significativamente.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={150}>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Nossa abordagem</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Key className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Security by Design</h4>
                      <p className="text-xs text-muted-foreground mt-1">Segurança integrada desde a concepção do projeto</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Database className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Criptografia avançada</h4>
                      <p className="text-xs text-muted-foreground mt-1">Dados sensíveis protegidos em repouso e em trânsito</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Eye className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Monitoramento contínuo</h4>
                      <p className="text-xs text-muted-foreground mt-1">Detecção de ameaças e anomalias em tempo real</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Fingerprint className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Autenticação forte</h4>
                      <p className="text-xs text-muted-foreground mt-1">Múltiplos fatores e biometria quando necessário</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Serviços de Segurança */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-2">
              Soluções de <span className="text-primary">segurança</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl">
              Proteção completa para suas aplicações e dados
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {securityServices.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-card border border-border rounded-xl p-8 h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
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

      {/* Tecnologias */}
      <section className="py-16 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-2">
              Tecnologias de <span className="text-primary">segurança</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl">
              Utilizamos padrões e protocolos reconhecidos pela indústria
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Processo */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold mb-4">
                  Nosso <span className="text-primary">processo</span>
                </h2>
              </div>
              
              <div className="space-y-0">
                {[
                  { step: "01", title: "Análise de Vulnerabilidades", text: "Identificamos riscos e pontos fracos na arquitetura atual ou planejada." },
                  { step: "02", title: "Planejamento de Segurança", text: "Definimos estratégias e controles adequados para cada cenário." },
                  { step: "03", title: "Implementação", text: "Aplicamos as melhores práticas de segurança no código e infraestrutura." },
                  { step: "04", title: "Testes e Validação", text: "Testes de penetração e auditoria para garantir a eficácia das proteções." },
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
      <section className="py-20 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Precisa proteger sua <span className="text-primary">aplicação</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                Vamos analisar sua situação e propor as melhores soluções de segurança.
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

export default ServiceSecurity;
