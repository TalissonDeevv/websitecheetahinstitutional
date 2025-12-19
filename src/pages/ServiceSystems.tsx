
import { Cpu, CheckCircle, MessageCircle, ArrowRight, Database, Settings, BarChart, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServiceSystems = () => {
  const systemTypes = [
    { 
      name: "CRM", 
      description: "Gestão de relacionamento com clientes",
      icon: Database,
      features: ["Gestão de leads e oportunidades", "Histórico de relacionamento", "Automação de vendas", "Relatórios comerciais"]
    },
    { 
      name: "ERP", 
      description: "Planejamento de recursos empresariais",
      icon: Settings,
      features: ["Gestão financeira integrada", "Controle de processos", "Módulos customizáveis", "Relatórios gerenciais"]
    },
    { 
      name: "Gestão de Estoque", 
      description: "Controle completo de inventário",
      icon: BarChart,
      features: ["Controle de entrada e saída", "Alertas de estoque baixo", "Rastreabilidade completa", "Integração com vendas"]
    },
    { 
      name: "Sistema de Vendas", 
      description: "Automação do processo comercial",
      icon: CheckCircle,
      features: ["Carrinho de compras", "Gestão de pedidos", "Controle de comissões", "Relatórios de vendas"]
    },
    { 
      name: "Dashboard Analítico", 
      description: "Visualização de dados e métricas",
      icon: BarChart,
      features: ["Gráficos interativos", "KPIs personalizados", "Relatórios automáticos", "Análise em tempo real"]
    },
    { 
      name: "Portal do Cliente", 
      description: "Interface para usuários finais",
      icon: Lock,
      features: ["Área restrita personalizada", "Histórico de interações", "Central de downloads", "Suporte integrado"]
    }
  ];

  const features = [
    "Análise de requisitos detalhada",
    "Arquitetura escalável e robusta",
    "Integração com banco de dados",
    "Painéis de controle avançados",
    "Relatórios e dashboards personalizados",
    "API REST para integrações",
    "Sistema de permissões e usuários",
    "Backup automático e segurança"
  ];

  const benefits = [
    {
      icon: Database,
      title: "Gestão Centralizada",
      description: "Centralize todas as informações do seu negócio em um sistema único e organizado."
    },
    {
      icon: Settings,
      title: "Automação de Processos",
      description: "Automatize tarefas repetitivas e otimize o fluxo de trabalho da sua equipe."
    },
    {
      icon: BarChart,
      title: "Relatórios Inteligentes",
      description: "Tenha acesso a relatórios detalhados e dashboards para tomar decisões estratégicas."
    },
    {
      icon: Lock,
      title: "Segurança Avançada",
      description: "Proteja seus dados com sistemas de segurança robustos e controle de acesso."
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
                <span className="text-white">Sistemas </span>
                <span className="text-[#0047ab]">Completos</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Desenvolvemos sistemas empresariais completos e personalizados para otimizar 
                seus processos de negócio. Soluções robustas, escaláveis e integradas.
              </p>
              <Link to="/orcamento">
                <Button className="bg-[#0047ab] hover:bg-[#0047ab]/80 text-white px-8 py-3 text-lg">
                  Solicitar Orçamento
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://i.ibb.co/SDq0g6h9/Website-Creator-rafiki.png" 
                alt="Sistemas Completos"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -left-4 bg-[#0047ab]/20 rounded-full w-24 h-24 flex items-center justify-center backdrop-blur-sm border border-[#0047ab]/30">
                <Cpu className="h-12 w-12 text-[#0047ab]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-12 text-center text-white">
            Por que Escolher Nossos Sistemas?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#0047ab]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-[#0047ab]/20">
                  <benefit.icon className="h-8 w-8 text-[#0047ab]" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Sistemas */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">
            Tipos de Sistemas que Desenvolvemos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {systemTypes.map((system, index) => (
              <Card key={index} className="group bg-gradient-to-br from-[#0047ab]/10 to-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="bg-[#0047ab]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-[#0047ab]/30">
                      <system.icon className="h-8 w-8 text-[#0047ab]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{system.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{system.description}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-[#0047ab] mb-3">Principais recursos:</h4>
                    {system.features.map((feature, featureIndex) => (
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

      {/* Recursos */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">
            Recursos e Funcionalidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#0047ab] flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">
            Vantagens dos Nossos Sistemas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#0047ab]/10 to-black/50 p-6 rounded-lg border border-[#0047ab]/20">
              <h3 className="text-lg font-semibold mb-3 text-white">Totalmente Personalizados</h3>
              <p className="text-gray-300 text-sm">
                Cada sistema é desenvolvido especificamente para suas necessidades e processos únicos.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0047ab]/10 to-black/50 p-6 rounded-lg border border-[#0047ab]/20">
              <h3 className="text-lg font-semibold mb-3 text-white">Escalabilidade Garantida</h3>
              <p className="text-gray-300 text-sm">
                Arquitetura preparada para crescer junto com seu negócio sem limitações.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0047ab]/10 to-black/50 p-6 rounded-lg border border-[#0047ab]/20">
              <h3 className="text-lg font-semibold mb-3 text-white">Segurança Avançada</h3>
              <p className="text-gray-300 text-sm">
                Implementamos as melhores práticas de segurança para proteger seus dados.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0047ab]/10 to-black/50 p-6 rounded-lg border border-[#0047ab]/20">
              <h3 className="text-lg font-semibold mb-3 text-white">Suporte Dedicado</h3>
              <p className="text-gray-300 text-sm">
                Equipe técnica especializada para suporte contínuo e evolutivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Pronto para Otimizar seus Processos?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Vamos desenvolver o sistema perfeito para automatizar e otimizar seus processos de negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#0047ab] hover:bg-[#0047ab]/80 text-white">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </Button>
            </a>
            <Link to="/orcamento">
              <Button size="lg" variant="outline" className="border-[#0047ab] text-[#0047ab] hover:bg-[#0047ab] hover:text-white">
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

export default ServiceSystems;
