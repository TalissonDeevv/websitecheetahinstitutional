import { Bot, Brain, MessageSquare, ArrowRight, CheckCircle, Zap, Users, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServiceAI = () => {
  const technologies = [
    "OpenAI/GPT", "Dialogflow", "Rasa", "LangChain", "Hugging Face", "TensorFlow", "PyTorch"
  ];

  const features = [
    "Chatbots com OpenAI/GPT, Dialogflow, Rasa e outros",
    "Suporte automatizado para sites, apps e redes sociais",
    "Bots com compreensão de linguagem natural (NLP)",
    "Integração com sistemas existentes",
    "Análise de sentimentos",
    "Automação de atendimento 24/7",
    "Treinamento personalizado"
  ];

  const benefits = [
    {
      icon: Bot,
      title: "Automação Inteligente",
      description: "Automatize atendimentos com tecnologia de ponta em inteligência artificial."
    },
    {
      icon: Brain,
      title: "Linguagem Natural",
      description: "Bots que compreendem e respondem como humanos."
    },
    {
      icon: MessageSquare,
      title: "Atendimento 24/7",
      description: "Suporte contínuo para seus clientes sem interrupções."
    },
    {
      icon: Zap,
      title: "Respostas Rápidas",
      description: "Respostas instantâneas e precisas para qualquer consulta."
    }
  ];

  const aiTypes = [
    {
      title: "Chatbots para Atendimento",
      description: "Bots inteligentes para suporte ao cliente e vendas",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop"
    },
    {
      title: "Assistentes Virtuais",
      description: "IA personalizada para automação de tarefas específicas",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop"
    },
    {
      title: "Bots para Redes Sociais",
      description: "Automação inteligente para Instagram, Facebook e WhatsApp",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
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
                <span className="text-white">Inteligência Artificial e </span>
                <span className="text-[#0047ab]">Bots Avançados</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Automatize atendimentos e otimize experiências com bots baseados em IA e linguagem natural. Transforme seu atendimento com tecnologia de ponta.
              </p>
              <Link to="/orcamento">
                <Button className="bg-[#0047ab] hover:bg-[#0047ab]/80 text-white px-8 py-3 text-lg">
                  Solicitar Orçamento
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://i.ibb.co/mCL6wdbD/Android-amico.png" 
                alt="Inteligência Artificial"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -left-4 bg-[#0047ab]/20 rounded-full w-24 h-24 flex items-center justify-center backdrop-blur-sm border border-[#0047ab]/30">
                <Brain className="h-12 w-12 text-[#0047ab]" />
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
              <span className="text-[#0047ab]">IA?</span>
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

      {/* AI Types Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-white">Tipos de </span>
              <span className="text-[#0047ab]">Soluções IA</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Desenvolvemos soluções de inteligência artificial personalizadas para diferentes necessidades
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiTypes.map((type, index) => (
              <Card key={index} className="group bg-gradient-to-br from-[#0047ab]/10 to-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={type.image} 
                    alt={type.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{type.title}</h3>
                  <p className="text-gray-300 text-sm">{type.description}</p>
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
              <span className="text-[#0047ab]">IA</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Utilizamos as mais avançadas tecnologias de inteligência artificial e machine learning
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
              { icon: Users, title: "Análise de Necessidades", desc: "Entendemos seus requisitos e objetivos" },
              { icon: Brain, title: "Design da IA", desc: "Criamos a arquitetura de inteligência artificial" },
              { icon: Code, title: "Desenvolvimento", desc: "Implementamos e treinamos o sistema" },
              { icon: Zap, title: "Otimização", desc: "Melhorias contínuas e ajustes finos" }
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
            <span className="text-[#0047ab]">Automatizar?</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como a inteligência artificial pode revolucionar seu atendimento
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/orcamento">
              <Button className="bg-[#0047ab] hover:bg-[#0047ab]/80 text-white px-8 py-3">
                Solicitar Orçamento
              </Button>
            </Link>
            <a
              href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20IA%20e%20bots"
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

export default ServiceAI;
