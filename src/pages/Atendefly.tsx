
import { MessageCircle, Users, Clock, BarChart3, Shield, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Atendefly = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Respostas Automáticas Inteligentes",
      description: "Sistema de IA que compreende o contexto e oferece respostas personalizadas"
    },
    {
      icon: Users,
      title: "Gerenciamento Multiusuário",
      description: "Equipe completa pode gerenciar conversas de forma colaborativa"
    },
    {
      icon: Clock,
      title: "Atendimento 24/7",
      description: "Seus clientes são atendidos a qualquer hora, mesmo fora do horário comercial"
    },
    {
      icon: BarChart3,
      title: "Relatórios Detalhados",
      description: "Analytics completo sobre desempenho, satisfação e métricas de atendimento"
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Criptografia de ponta a ponta e conformidade com LGPD"
    },
    {
      icon: Zap,
      title: "Integrações Poderosas",
      description: "Conecte com CRM, ERP e outros sistemas da sua empresa"
    }
  ];

  const benefits = [
    "Redução de 70% no tempo de resposta",
    "Aumento de 45% na satisfação do cliente",
    "Economia de até 60% em custos operacionais",
    "Disponibilidade 24 horas por dia",
    "Escalabilidade automática",
    "ROI positivo em 30 dias"
  ];

  const screenshots = [
    {
      title: "Dashboard Principal",
      description: "Visão geral completa de todas as conversas ativas"
    },
    {
      title: "Chat Interface",
      description: "Interface intuitiva para gerenciar conversas em tempo real"
    },
    {
      title: "Relatórios",
      description: "Analytics detalhado com métricas de performance"
    },
    {
      title: "Configurações",
      description: "Personalize respostas automáticas e fluxos de conversa"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-[#0047ab] bg-clip-text text-transparent">
                  Atendefly
                </span>
                <br />
                <span className="text-white">Sistema de Atendimento</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Revolucione o atendimento ao cliente com nossa plataforma inteligente de WhatsApp. 
                Automatize processos, melhore a experiência do cliente e aumente suas vendas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    className="bg-[#0047ab] hover:bg-[#0047ab]/80 text-white px-8 py-6 text-lg font-semibold rounded-lg w-full sm:w-auto"
                  >
                    Solicitar Demo Gratuita
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-[#0047ab] text-[#0047ab] hover:bg-[#0047ab] hover:text-white px-8 py-6 text-lg font-semibold rounded-lg w-full sm:w-auto"
                >
                  Ver Demonstração
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#0047ab]/10 to-black/50 rounded-lg p-8 border border-[#0047ab]/20">
              <div className="text-center">
                <MessageCircle className="h-32 w-32 text-[#0047ab] mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-white">Interface Intuitiva</h3>
                <p className="text-gray-300">
                  Dashboard completo para gerenciar todos os aspectos do seu atendimento de forma simples e eficiente
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Recursos Poderosos
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Tudo que você precisa para oferecer um atendimento excepcional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#0047ab]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-[#0047ab]/20">
                    <feature.icon className="h-8 w-8 text-[#0047ab]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Resultados Comprovados
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Empresas que utilizam o Atendefly experimentam melhorias significativas 
                em seus indicadores de atendimento e satisfação do cliente.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-[#0047ab] flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#0047ab]/10 to-black/50 rounded-lg p-8 border border-[#0047ab]/20">
              <div className="text-center">
                <BarChart3 className="h-24 w-24 text-[#0047ab] mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-white">Analytics Avançado</h3>
                <p className="text-gray-300 mb-4">
                  Acompanhe métricas detalhadas e tome decisões baseadas em dados
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-black/30 rounded-lg p-3">
                    <div className="text-2xl font-bold text-[#0047ab]">98%</div>
                    <div className="text-sm text-gray-300">Satisfação</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3">
                    <div className="text-2xl font-bold text-[#0047ab]">30s</div>
                    <div className="text-sm text-gray-300">Tempo Médio</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Interface do Sistema
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Conheça a interface intuitiva e moderna do Atendefly
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {screenshots.map((screenshot, index) => (
              <Card key={index} className="bg-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-[#0047ab]/10 to-black/50 rounded-lg h-48 mb-4 flex items-center justify-center border border-[#0047ab]/20">
                    <div className="text-center">
                      <MessageCircle className="h-16 w-16 text-[#0047ab] mx-auto mb-2" />
                      <span className="text-gray-400 text-sm">Screenshot Preview</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{screenshot.title}</h3>
                  <p className="text-gray-300 text-sm">{screenshot.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#0047ab]/10 to-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Transforme seu Atendimento
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de empresas que já revolucionaram seu atendimento com o Atendefly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-[#0047ab] hover:bg-[#0047ab]/80 text-white px-8 py-6 text-lg font-semibold rounded-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Solicitar Demonstração
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline"
              className="border-[#0047ab] text-[#0047ab] hover:bg-[#0047ab] hover:text-white px-8 py-6 text-lg font-semibold rounded-lg"
            >
              Falar com Especialista
            </Button>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Teste gratuito por 14 dias • Sem compromisso • Suporte incluído
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Atendefly;
