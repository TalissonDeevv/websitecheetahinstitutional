import { Smartphone, Tablet, Code, ArrowRight, CheckCircle, Zap, Users, Star, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServiceMobile = () => {
  const technologies = [
    "React Native", "Flutter", "Swift", "Kotlin", "Expo", "Firebase", "TypeScript"
  ];

  const features = [
    "Apps nativos e híbridos",
    "UI/UX otimizada para usabilidade e performance",
    "Integração com APIs, bancos de dados e serviços externos",
    "Notificações push",
    "Sincronização offline",
    "Pagamentos integrados",
    "Publicação nas lojas"
  ];

  const benefits = [
    {
      icon: Smartphone,
      title: "Apps Nativos",
      description: "Desenvolvimento nativo para máxima performance e experiência."
    },
    {
      icon: Zap,
      title: "Performance Otimizada",
      description: "Apps rápidos e responsivos em qualquer dispositivo."
    },
    {
      icon: Users,
      title: "UX Excepcional",
      description: "Interfaces intuitivas focadas na experiência do usuário."
    },
    {
      icon: Star,
      title: "Qualidade Premium",
      description: "Desenvolvimento seguindo as melhores práticas do mercado."
    }
  ];

  const mobileTypes = [
    {
      title: "Apps para E-commerce",
      description: "Aplicativos de vendas com carrinho, pagamentos e gestão",
      icon: Smartphone,
      features: ["Carrinho de compras", "Pagamentos integrados", "Gestão de pedidos", "Notificações push"]
    },
    {
      title: "Apps Corporativos",
      description: "Soluções internas para gestão e produtividade empresarial",
      icon: Building2,
      features: ["Gestão de funcionários", "Controle de tarefas", "Relatórios móveis", "Sincronização offline"]
    },
    {
      title: "Apps de Serviços",
      description: "Plataformas de serviços sob demanda e marketplace",
      icon: Users,
      features: ["Sistema de agendamento", "Avaliações e reviews", "Chat integrado", "Geolocalização"]
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
                <span className="text-[#0047ab]">Mobile</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Desenvolvimento de aplicativos Android e iOS com design moderno e funcionalidades sob medida. Crie experiências móveis excepcionais para seus usuários.
              </p>
              <Link to="/orcamento">
                <Button className="bg-[#0047ab] hover:bg-[#0047ab]/80 text-white px-8 py-3 text-lg">
                  Solicitar Orçamento
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://i.ibb.co/TDJNfRVb/Payment-Information-rafiki.png" 
                alt="Desenvolvimento Mobile"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -left-4 bg-[#0047ab]/20 rounded-full w-24 h-24 flex items-center justify-center backdrop-blur-sm border border-[#0047ab]/30">
                <Smartphone className="h-12 w-12 text-[#0047ab]" />
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
              <span className="text-white">Por que escolher nosso </span>
              <span className="text-[#0047ab]">Desenvolvimento Mobile?</span>
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

      {/* Mobile Types Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-white">Tipos de </span>
              <span className="text-[#0047ab]">Aplicativos</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Desenvolvemos aplicativos móveis personalizados para diferentes segmentos e necessidades
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mobileTypes.map((type, index) => (
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
              <span className="text-white">Tecnologias </span>
              <span className="text-[#0047ab]">Mobile</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Utilizamos as tecnologias mais modernas para desenvolvimento mobile
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
              { icon: Users, title: "Análise de Requisitos", desc: "Entendemos as necessidades do projeto" },
              { icon: Tablet, title: "Design UX/UI", desc: "Criamos interfaces intuitivas e atrativas" },
              { icon: Code, title: "Desenvolvimento", desc: "Implementamos funcionalidades nativas" },
              { icon: Star, title: "Publicação", desc: "Lançamos nas lojas oficiais" }
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
            <span className="text-[#0047ab]">Criar seu App?</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos transformar sua ideia em um aplicativo de sucesso
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/orcamento">
              <Button className="bg-[#0047ab] hover:bg-[#0047ab]/80 text-white px-8 py-3">
                Solicitar Orçamento
              </Button>
            </Link>
            <a
              href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20desenvolvimento%20mobile"
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

export default ServiceMobile;
