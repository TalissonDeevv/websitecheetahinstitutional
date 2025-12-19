
import { Zap, CheckCircle, MessageCircle, ArrowRight, Link2, Cloud, Workflow, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServiceIntegrations = () => {
  const integrationTypes = [
    { 
      name: "CRM Systems", 
      description: "Salesforce, HubSpot, Pipedrive",
      icon: Link2,
      features: ["Sincronização de dados", "Automação de leads", "Integração bidirecional", "Webhooks personalizados"]
    },
    { 
      name: "E-commerce", 
      description: "Shopify, WooCommerce, Magento",
      icon: Cloud,
      features: ["Sincronização de produtos", "Gestão de pedidos", "Controle de estoque", "Relatórios unificados"]
    },
    { 
      name: "Payment Gateways", 
      description: "Stripe, PayPal, PagSeguro",
      icon: Shield,
      features: ["Processamento seguro", "Múltiplos métodos", "Reconciliação automática", "Controle de fraudes"]
    },
    { 
      name: "Social Media", 
      description: "Facebook, Instagram, Twitter API",
      icon: Workflow,
      features: ["Postagem automática", "Análise de engajamento", "Gerenciamento multicanal", "Relatórios sociais"]
    },
    { 
      name: "Cloud Services", 
      description: "AWS, Google Cloud, Azure",
      icon: Cloud,
      features: ["Deploy automatizado", "Escalabilidade automática", "Backup em nuvem", "Monitoramento avançado"]
    },
    { 
      name: "Communication", 
      description: "WhatsApp, Telegram, Slack",
      icon: Link2,
      features: ["Mensagens automáticas", "Bot de atendimento", "Notificações em tempo real", "Integração omnichannel"]
    }
  ];

  const features = [
    "Integração com APIs REST e GraphQL",
    "Webhooks e automações",
    "Sincronização de dados em tempo real",
    "Conectores personalizados",
    "Monitoramento e logs detalhados",
    "Tratamento de erros robusto",
    "Documentação técnica completa",
    "Testes automatizados"
  ];

  const benefits = [
    {
      icon: Link2,
      title: "Conexão Perfeita",
      description: "Conectamos sistemas diferentes de forma transparente e eficiente, eliminando silos de dados."
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Integrações modernas baseadas em cloud, garantindo escalabilidade e disponibilidade."
    },
    {
      icon: Workflow,
      title: "Automação Avançada",
      description: "Automatize fluxos complexos entre diferentes plataformas e sistemas empresariais."
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Todas as integrações seguem os mais altos padrões de segurança e conformidade."
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
                <span className="text-white">Integrações </span>
                <span className="text-[#0047ab]">API</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Conectamos diferentes sistemas e automatizamos processos complexos através de 
                integrações robustas e seguras. Sincronize dados e otimize operações.
              </p>
              <Link to="/orcamento">
                <Button className="bg-[#0047ab] hover:bg-[#0047ab]/80 text-white px-8 py-3 text-lg">
                  Solicitar Orçamento
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://i.ibb.co/xSvmb0X9/Software-integration-rafiki.png" 
                alt="Integrações de Sistemas"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -left-4 bg-[#0047ab]/20 rounded-full w-24 h-24 flex items-center justify-center backdrop-blur-sm border border-[#0047ab]/30">
                <Zap className="h-12 w-12 text-[#0047ab]" />
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
              <span className="text-white">Por que escolher nossas </span>
              <span className="text-[#0047ab]">Integrações?</span>
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

      {/* Integration Types Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-white">Principais </span>
              <span className="text-[#0047ab]">Integrações</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Conectamos seus sistemas com as principais plataformas do mercado
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationTypes.map((integration, index) => (
              <Card key={index} className="group bg-gradient-to-br from-[#0047ab]/10 to-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="bg-[#0047ab]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-[#0047ab]/30">
                      <integration.icon className="h-8 w-8 text-[#0047ab]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{integration.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{integration.description}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-[#0047ab] mb-3">Principais recursos:</h4>
                    {integration.features.map((feature, featureIndex) => (
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

      {/* Features Section */}
      <section className="py-16 px-4 bg-[#0047ab]/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-white">O que </span>
              <span className="text-[#0047ab]">Oferecemos</span>
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
              { icon: Link2, title: "Análise de Sistemas", desc: "Mapeamos seus sistemas e necessidades" },
              { icon: Workflow, title: "Planejamento", desc: "Criamos estratégia de integração" },
              { icon: Cloud, title: "Desenvolvimento", desc: "Implementamos integrações robustas" },
              { icon: Shield, title: "Monitoramento", desc: "Garantimos funcionamento contínuo" }
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
            <span className="text-[#0047ab]">Integrar seus Sistemas?</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Vamos conectar seus sistemas e automatizar seus processos para máxima eficiência
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/orcamento">
              <Button className="bg-[#0047ab] hover:bg-[#0047ab]/80 text-white px-8 py-3">
                Solicitar Orçamento
              </Button>
            </Link>
            <a
              href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20integração%20API"
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

export default ServiceIntegrations;
