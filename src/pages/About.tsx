
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
      <section className="pt-28 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Sobre a </span>
            <span className="text-[#0047ab]">Cheetah Network</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Conheça nossa história, valores e o que nos move a criar soluções tecnológicas excepcionais
          </p>
        </div>
      </section>

      {/* About Company */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <Card className="bg-gray-900/50 border-[#0047ab]/20">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                  <p>
                    A Cheetah Network é uma empresa inovadora fundada com o compromisso de impulsionar o cenário digital por meio de soluções tecnológicas eficientes e personalizadas. Nosso foco é o desenvolvimento de websites, aplicações, sistemas e bots para plataformas como Discord e Telegram, oferecendo serviços de alta qualidade que atendem às demandas de empreendedores, comunidades e projetos independentes.
                  </p>
                  <p>
                    Desde o início, nossa expertise foi consolidada na automação e no desenvolvimento de ferramentas digitais que otimizam processos e elevam a experiência online. Evoluindo constantemente, nos tornamos referência na criação de soluções inteligentes e adaptadas às necessidades específicas de cada cliente.
                  </p>
                  <p>
                    Nossa equipe é composta por profissionais qualificados e apaixonados por tecnologia, comprometidos em entregar serviços inovadores que superem expectativas. Além disso, contamos com designers fixos na empresa, garantindo uma identidade visual forte e alinhada com nossa proposta.
                  </p>
                  <p>
                    A Cheetah Solutions Network não apenas acompanha as tendências do mercado, mas também as redefine. Nosso compromisso é com a excelência, a inovação e a total satisfação dos clientes, trabalhando lado a lado para transformar ideias em soluções digitais impactantes.
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="bg-gray-900/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-[#0047ab]/10 rounded-full flex items-center justify-center border-2 border-[#0047ab]/30">
                    <Target className="h-8 w-8 text-[#0047ab]" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white text-center">Nossa Missão</h3>
                <p className="text-gray-300 leading-relaxed text-center">
                  Transformar ideias em soluções tecnológicas inovadoras, 
                  capacitando empresas a alcançarem seu máximo potencial através 
                  da automação e desenvolvimento de sistemas personalizados.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-[#0047ab]/10 rounded-full flex items-center justify-center border-2 border-[#0047ab]/30">
                    <Award className="h-8 w-8 text-[#0047ab]" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white text-center">Nossa Visão</h3>
                <p className="text-gray-300 leading-relaxed text-center">
                  Ser reconhecida como a principal referência em soluções 
                  tecnológicas personalizadas, sendo a primeira escolha de 
                  empresas que buscam inovação e excelência técnica.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-[#0047ab]/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Nossos </span>
              <span className="text-[#0047ab]">Valores</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Os princípios que guiam cada decisão e ação em nossa empresa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="bg-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300 hover:scale-105 text-center">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 bg-[#0047ab]/10 rounded-full flex items-center justify-center border border-[#0047ab]/30">
                      <value.icon className="h-6 w-6 text-[#0047ab]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Por que o Guepardo Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            {/* Logo da Cheetah */}
            <div className="mb-8 flex justify-center">
              <div className="w-32 h-32 bg-[#0047ab]/10 rounded-full flex items-center justify-center border-4 border-[#0047ab]/30 hover:border-[#0047ab]/50 transition-all duration-300 p-4">
                <img 
                  src="/lovable-uploads/8ba6863f-f36c-468c-84c5-40394ed9618b.png" 
                  alt="Cheetah Network Logo" 
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Por que o </span>
              <span className="text-[#0047ab]">Guepardo?</span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-900/50 border-[#0047ab]/20">
              <CardContent className="p-8">
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    O guepardo é conhecido como o animal mais rápido do mundo, atingindo velocidades impressionantes de até 120 km/h em curtos períodos. Sua agilidade, precisão e eficiência na caça o tornam um símbolo de destreza e foco. Além de ser um predador veloz, o guepardo também representa a capacidade de adaptação e resiliência, movendo-se com estratégia para garantir sua sobrevivência em ambientes desafiadores.
                  </p>
                  <p>
                    A logo da Cheetah Network foi inspirada nesse ícone da natureza. Assim como o guepardo, nossa empresa se destaca pela rapidez e precisão na entrega de soluções digitais. Cada projeto é tratado com o mesmo foco e eficiência, garantindo que nossos clientes alcancem seus objetivos com agilidade e qualidade. O guepardo, em nossa marca, simboliza a velocidade com a qual ajudamos empresas a prosperarem no ambiente online, oferecendo suporte ágil, estratégias inovadoras e resultados excepcionais.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cheetah em Números */}
      <section className="py-20 px-4 bg-[#0047ab]/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Cheetah em </span>
              <span className="text-[#0047ab]">Números</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Dados que demonstram nosso crescimento e impacto no mercado de tecnologia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
            {numbers.map((item, index) => (
              <Card key={index} className="bg-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300 hover:scale-105 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold text-[#0047ab] mb-2">{item.number}</div>
                  <h3 className="text-lg font-bold mb-2 text-white">{item.label}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 bg-[#0047ab]/10 rounded-full flex items-center justify-center border border-[#0047ab]/30">
                      <achievement.icon className="h-6 w-6 text-[#0047ab]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white">{achievement.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Nossa </span>
              <span className="text-[#0047ab]">Trajetória</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A evolução da Cheetah Network ao longo dos anos
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#0047ab]/30"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className="bg-gray-900/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-[#0047ab] mb-2">{item.year}</div>
                        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#0047ab] rounded-full border-4 border-black"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#0047ab]/5">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
              Quer fazer parte da nossa <span className="text-[#0047ab]">história?</span>
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Entre em contato conosco e descubra como podemos ajudar sua empresa 
              a alcançar novos patamares com tecnologia de ponta
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato">
                <Button 
                  size="lg" 
                  className="bg-[#0047ab] hover:bg-[#0047ab]/90 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar Conosco
                </Button>
              </Link>
              <Link to="/equipe">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-[#0047ab] text-[#0047ab] hover:bg-[#0047ab] hover:text-white px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  <Users className="mr-2 h-5 w-5" />
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
