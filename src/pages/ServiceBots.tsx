
import { Bot, CheckCircle, MessageCircle, ArrowRight, Zap, Shield, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServiceBots = () => {
  const platforms = [
    { name: "Discord", description: "Bots para gerenciamento de servidores, moderação e entretenimento" },
    { name: "Telegram", description: "Bots para automação de grupos e canais" },
    { name: "WhatsApp", description: "Bots para atendimento e automação comercial" },
    { name: "Slack", description: "Bots para produtividade e integração empresarial" }
  ];

  const features = [
    "Comandos personalizados",
    "Sistemas de moderação automática",
    "Integração com APIs externas",
    "Dashboards de gerenciamento",
    "Sistemas de economia virtual",
    "Auto-roles e verificação",
    "Logs e relatórios detalhados",
    "Suporte multiplataforma"
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Automação Inteligente",
      description: "Automatize tarefas repetitivas e libere tempo para focar no que realmente importa para sua comunidade."
    },
    {
      icon: Users,
      title: "Engajamento da Comunidade",
      description: "Crie experiências interativas que mantêm seus usuários engajados e ativos em suas plataformas."
    },
    {
      icon: Shield,
      title: "Moderação Avançada",
      description: "Proteja sua comunidade com sistemas de moderação inteligentes e personalizáveis."
    },
    {
      icon: Clock,
      title: "Disponibilidade 24/7",
      description: "Seus bots trabalham ininterruptamente, fornecendo suporte e funcionalidades a qualquer hora."
    }
  ];

  const useCases = [
    {
      title: "Comunidades Gaming",
      description: "Sistemas de ranking, torneios automáticos, integração com jogos e economia virtual."
    },
    {
      title: "Empresas e Negócios",
      description: "Atendimento automatizado, gestão de leads, integração com CRM e relatórios de vendas."
    },
    {
      title: "Educação",
      description: "Distribuição de conteúdo, quizzes interativos, gestão de turmas e acompanhamento de progresso."
    },
    {
      title: "E-commerce",
      description: "Notificações de produtos, suporte ao cliente, processamento de pedidos e análises de vendas."
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
                <span className="text-white">Bots </span>
                <span className="text-[#0047ab]">Automatizados</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Desenvolvemos bots inteligentes para Discord, Telegram, WhatsApp e outras plataformas, 
                automatizando tarefas e melhorando a experiência dos usuários.
              </p>
              <Link to="/orcamento">
                <Button className="bg-[#0047ab] hover:bg-[#0047ab]/80 text-white px-8 py-3 text-lg">
                  Solicitar Orçamento
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://i.ibb.co/nskDq5wN/people-using-robots-pana.png" 
                alt="Desenvolvimento de Bots"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -left-4 bg-[#0047ab]/20 rounded-full w-24 h-24 flex items-center justify-center backdrop-blur-sm border border-[#0047ab]/30">
                <Bot className="h-12 w-12 text-[#0047ab]" />
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
              <span className="text-white">Por que escolher nossos </span>
              <span className="text-[#0047ab]">Bots?</span>
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

      {/* Plataformas Suportadas */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">
            Plataformas Suportadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="bg-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2 text-white">{platform.name}</h3>
                  <p className="text-gray-300 text-sm">{platform.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">
            Casos de Uso
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="py-16 px-4">
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

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Pronto para Automatizar?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e vamos criar o bot perfeito para suas necessidades
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

export default ServiceBots;
