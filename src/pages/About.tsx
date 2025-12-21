
import { Users, Target, Award, Zap, Shield, Heart, TrendingUp, Globe, Code, Cpu, MessageCircle, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Zap,
      title: "Agilidade",
      description: "Entregamos soluções rápidas sem comprometer a qualidade"
    },
    {
      icon: Shield,
      title: "Confiabilidade",
      description: "Segurança e estabilidade em todos os nossos projetos"
    },
    {
      icon: Heart,
      title: "Paixão",
      description: "Amor pelo que fazemos reflete na qualidade das entregas"
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Trabalhamos em equipe para alcançar os melhores resultados"
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Fundação da Cheetah",
      description: "Início das operações com foco em automação e bots"
    },
    {
      year: "2021", 
      title: "Expansão dos Serviços",
      description: "Adição de desenvolvimento web e sistemas personalizados"
    },
    {
      year: "2022",
      title: "Marcos de Crescimento",
      description: "50+ projetos entregues e consolidação no mercado"
    },
    {
      year: "2023",
      title: "Inovação Contínua", 
      description: "Lançamento do Atendefly e novos produtos"
    },
    {
      year: "2024",
      title: "Liderança no Setor",
      description: "100+ projetos e reconhecimento como referência"
    },
    {
      year: "2025",
      title: "Futuro Promissor",
      description: "Expansão internacional e novas tecnologias"
    }
  ];

  const numbers = [
    {
      number: "120+",
      label: "Projetos Entregues",
      description: "Soluções desenvolvidas e implementadas com sucesso"
    },
    {
      number: "50+", 
      label: "Clientes Atendidos",
      description: "Empresas que confiam em nossas soluções"
    },
    {
      number: "99.9%",
      label: "Uptime Médio",
      description: "Disponibilidade garantida em nossos sistemas"
    },
    {
      number: "24/7",
      label: "Suporte Técnico", 
      description: "Atendimento disponível todos os dias"
    },
    {
      number: "5+",
      label: "Anos de Mercado",
      description: "Experiência consolidada em tecnologia"
    },
    {
      number: "11+",
      label: "Especialistas",
      description: "Profissionais qualificados em nossa equipe"
    },
    {
      number: "15+",
      label: "Tecnologias",
      description: "Ferramentas e frameworks dominados"
    },
    {
      number: "100%",
      label: "Satisfação",
      description: "Compromisso com a excelência em cada projeto"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Excelência em Desenvolvimento",
      description: "Reconhecimento pela qualidade técnica de nossas soluções"
    },
    {
      icon: TrendingUp,
      title: "Crescimento Sustentável", 
      description: "Expansão constante mantendo os padrões de qualidade"
    },
    {
      icon: Globe,
      title: "Impacto Global",
      description: "Clientes satisfeitos em diferentes regiões e segmentos"
    },
    {
      icon: CheckCircle,
      title: "Projetos 100% Entregues",
      description: "Histórico perfeito de conclusão de projetos no prazo"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-[#0047ab] uppercase tracking-widest mb-3 font-medium">Software House</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
            <span className="text-white">Sobre a </span>
            <span className="text-[#0047ab]">Cheetah Network</span>
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Desenvolvimento de software sob medida, com foco em qualidade, performance e resultados tangíveis para o seu negócio.
          </p>
        </div>
      </section>

      {/* About Company */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-gray-900/30 border-gray-800/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Quem Somos</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Somos uma software house especializada no desenvolvimento de sistemas, aplicações web, automações e integrações. Atuamos desde 2020 transformando desafios complexos em soluções digitais escaláveis.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/30 border-gray-800/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">O Que Fazemos</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Desenvolvemos software personalizado: plataformas web, sistemas de gestão, bots, APIs e integrações. Nossa equipe entrega soluções que funcionam e geram valor real para os negócios dos nossos clientes.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-gray-900/30 border-gray-800/50">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-lg font-semibold text-white mb-4">Nossa Abordagem</h3>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm">
                  <p>
                    Combinamos expertise técnica com entendimento profundo das necessidades de cada cliente. Trabalhamos de forma colaborativa, com comunicação transparente e entregas incrementais.
                  </p>
                  <p>
                    Cada projeto é tratado com a atenção e o rigor que merece. Não oferecemos soluções genéricas — desenvolvemos software que resolve problemas reais e se adapta à evolução do seu negócio.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-gray-900/30 border-gray-800/50">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-[#0047ab]/10 rounded-lg flex items-center justify-center">
                    <Target className="h-5 w-5 text-[#0047ab]" />
                  </div>
                </div>
                <h3 className="text-base font-semibold mb-3 text-white text-center">Missão</h3>
                <p className="text-gray-400 text-sm leading-relaxed text-center">
                  Desenvolver software que resolve problemas reais, entregando valor mensurável para cada cliente.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/30 border-gray-800/50">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-[#0047ab]/10 rounded-lg flex items-center justify-center">
                    <Award className="h-5 w-5 text-[#0047ab]" />
                  </div>
                </div>
                <h3 className="text-base font-semibold mb-3 text-white text-center">Visão</h3>
                <p className="text-gray-400 text-sm leading-relaxed text-center">
                  Ser referência em desenvolvimento de software personalizado, reconhecida pela qualidade técnica.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/30 border-gray-800/50">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-[#0047ab]/10 rounded-lg flex items-center justify-center">
                    <Code className="h-5 w-5 text-[#0047ab]" />
                  </div>
                </div>
                <h3 className="text-base font-semibold mb-3 text-white text-center">Princípio</h3>
                <p className="text-gray-400 text-sm leading-relaxed text-center">
                  Código limpo, processos transparentes e compromisso com resultados concretos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-gray-900/20">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              <span className="text-white">Nossos </span>
              <span className="text-[#0047ab]">Valores</span>
            </h2>
            <p className="text-sm text-gray-400 max-w-xl mx-auto">
              Os princípios que orientam nosso trabalho diário
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="bg-gray-900/30 border-gray-800/50 text-center">
                <CardContent className="p-5">
                  <div className="mb-3 flex justify-center">
                    <value.icon className="h-5 w-5 text-[#0047ab]" />
                  </div>
                  <h3 className="text-sm font-semibold mb-2 text-white">{value.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Números e Trajetória */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              <span className="text-white">Cheetah em </span>
              <span className="text-[#0047ab]">Números</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {numbers.slice(0, 4).map((item, index) => (
              <Card key={index} className="bg-gray-900/30 border-gray-800/50 text-center">
                <CardContent className="p-5">
                  <div className="text-2xl font-bold text-[#0047ab] mb-1">{item.number}</div>
                  <h3 className="text-xs font-medium text-white mb-1">{item.label}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline compacta */}
      <section className="py-16 px-4 bg-gray-900/20">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              <span className="text-white">Nossa </span>
              <span className="text-[#0047ab]">Trajetória</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {timeline.map((item, index) => (
                <Card key={index} className="bg-gray-900/30 border-gray-800/50">
                  <CardContent className="p-4">
                    <div className="text-lg font-bold text-[#0047ab] mb-1">{item.year}</div>
                    <h3 className="text-sm font-medium text-white mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-xs">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Vamos conversar sobre seu <span className="text-[#0047ab]">projeto?</span>
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              Entre em contato para discutir como podemos ajudar sua empresa
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contato">
                <Button 
                  size="lg" 
                  className="bg-[#0047ab] hover:bg-[#0047ab]/90 text-white px-6 py-3 font-medium rounded-lg"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Falar Conosco
                </Button>
              </Link>
              <Link to="/equipe">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white px-6 py-3 font-medium rounded-lg"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Conhecer a Equipe
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
