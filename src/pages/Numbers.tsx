
import { useState, useEffect } from 'react';
import { TrendingUp, Users, Globe, Heart, Package } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Numbers = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    products: 0,
    clients: 0,
    countries: 0,
    team: 0
  });

  const finalValues = {
    projects: 120,
    products: 3,
    clients: 50,
    countries: 3,
    team: 1
  };

  const stats = [
    {
      key: 'projects',
      icon: Package,
      value: counts.projects,
      target: finalValues.projects,
      suffix: '+',
      label: 'Operações Estruturadas',
      description: 'Operações empresariais estruturadas com tecnologia'
    },
    {
      key: 'products',
      icon: TrendingUp,
      value: counts.products,
      target: finalValues.products,
      suffix: '',
      label: 'Produtos Ativos',
      description: 'Sistemas em funcionamento 24/7'
    },
    {
      key: 'clients',
      icon: Users,
      value: counts.clients,
      target: finalValues.clients,
      suffix: '+',
      label: 'Empresas Atendidas',
      description: 'Empresas que confiam na nossa engenharia'
    },
    {
      key: 'countries',
      icon: Globe,
      value: counts.countries,
      target: finalValues.countries,
      suffix: '',
      label: 'Países Alcançados',
      description: 'Presença internacional estabelecida'
    },
    {
      key: 'team',
      icon: Heart,
      value: counts.team,
      target: finalValues.team,
      suffix: '',
      label: 'Equipe Apaixonada',
      description: 'Por soluções tecnológicas inovadoras'
    }
  ];

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepTime = duration / steps;

    const intervals = Object.keys(finalValues).map(key => {
      const target = finalValues[key as keyof typeof finalValues];
      const increment = target / steps;
      let currentValue = 0;

      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= target) {
          currentValue = target;
          clearInterval(intervals.find(interval => interval === intervals[Object.keys(finalValues).indexOf(key)]));
        }
        
        setCounts(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }));
      }, stepTime);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Cheetah em </span>
            <span className="text-[#0047ab]">Números</span>
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Dados que comprovam nossa excelência e dedicação em transformar ideias em soluções tecnológicas de alto impacto
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={stat.key} 
                className="group bg-gradient-to-br from-[#0047ab]/10 to-black/50 border border-[#0047ab]/20 hover:border-[#0047ab]/50 rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-[#0047ab]/10 rounded-full flex items-center justify-center border-2 border-[#0047ab]/30 group-hover:border-[#0047ab] transition-all duration-300">
                    <stat.icon className="h-8 w-8 text-[#0047ab]" />
                  </div>
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-[#0047ab] mb-2">
                  {stat.value}{stat.suffix}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {stat.label}
                </h3>
                
                <p className="text-white/70 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-[#0047ab]/5">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Nossa <span className="text-[#0047ab]">Missão</span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Cada número representa nosso compromisso em entregar soluções tecnológicas que fazem a diferença. 
              Na Cheetah Network, combinamos velocidade, qualidade e inovação para acelerar o crescimento dos nossos clientes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0047ab] mb-2">Velocidade</div>
                <p className="text-white/70">Entrega ágil sem comprometer a qualidade</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0047ab] mb-2">Qualidade</div>
                <p className="text-white/70">Soluções robustas e bem estruturadas</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0047ab] mb-2">Inovação</div>
                <p className="text-white/70">Tecnologias modernas e práticas avançadas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Numbers;
