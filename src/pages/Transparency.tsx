
import { Eye, TrendingUp, Users, Award, Shield, DollarSign, FileText, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Transparency = () => {
  const transparencyPillars = [
    {
      icon: Eye,
      title: "Transparência Operacional",
      description: "Processos claros e comunicação aberta sobre nossas operações",
      details: [
        "Metodologia de trabalho documentada",
        "Prazos e custos claramente definidos",
        "Comunicação regular sobre andamento dos projetos",
        "Relatórios de progresso detalhados"
      ]
    },
    {
      icon: Shield,
      title: "Transparência Ética",
      description: "Conduta ética em todas as nossas relações comerciais",
      details: [
        "Código de conduta interno rigoroso",
        "Política anti-corrupção",
        "Tratamento justo e igualitário",
        "Respeito aos direitos humanos e trabalhistas"
      ]
    },
    {
      icon: FileText,
      title: "Transparência Financeira",
      description: "Clareza total sobre aspectos financeiros e comerciais",
      details: [
        "Contratos claros e detalhados",
        "Sem taxas ocultas ou surpresas",
        "Demonstrações financeiras organizadas",
        "Política de reembolsos transparente"
      ]
    }
  ];

  const metrics = [
    {
      icon: Users,
      value: "150+",
      label: "Projetos Entregues",
      description: "Desde nossa fundação"
    },
    {
      icon: Award,
      value: "98%",
      label: "Satisfação",
      description: "Índice de satisfação dos clientes"
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Entregas no Prazo",
      description: "Projetos entregues dentro do cronograma"
    },
    {
      icon: Shield,
      value: "0",
      label: "Incidentes de Segurança",
      description: "Violações de dados reportadas"
    }
  ];

  const organizationalStructure = [
    {
      department: "Liderança Executiva",
      members: [
        { name: "Talisson Souza", role: "CEO - Chief Executive Officer" },
        { name: "Bruno Nugget", role: "CCO - Chief Commercial Officer" },
        { name: "Vitor Mapeli", role: "COO - Chief Operating Officer" },
        { name: "José Jorge", role: "CTO - Chief Technology Officer" }
      ]
    }
  ];

  const complaintHandling = [
    {
      step: "1. Recebimento",
      description: "Denúncia recebida e protocolada",
      timeframe: "Imediato"
    },
    {
      step: "2. Análise Inicial",
      description: "Avaliação preliminar da denúncia",
      timeframe: "24 horas"
    },
    {
      step: "3. Investigação",
      description: "Investigação detalhada dos fatos",
      timeframe: "5-15 dias"
    },
    {
      step: "4. Resolução",
      description: "Ações corretivas implementadas",
      timeframe: "30 dias"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#0047ab] to-blue-400 bg-clip-text text-transparent">Transparência</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nosso compromisso com a transparência, ética e responsabilidade em todos os aspectos do negócio
          </p>
        </div>
      </section>

      {/* Transparency Pillars */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Pilares da Transparência
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transparencyPillars.map((pillar, index) => (
              <Card key={index} className="bg-gray-900/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#0047ab]/10 rounded-lg p-3 border border-[#0047ab]/20">
                      <pillar.icon className="h-6 w-6 text-[#0047ab]" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{pillar.description}</p>
                  <ul className="space-y-2">
                    {pillar.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-300">
                        <div className="w-2 h-2 bg-[#0047ab] rounded-full mt-2 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Métricas de Desempenho
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="bg-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="bg-[#0047ab]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-[#0047ab]/20">
                    <metric.icon className="h-8 w-8 text-[#0047ab]" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold text-[#0047ab] mb-1">{metric.label}</div>
                  <div className="text-sm text-gray-300">{metric.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Estrutura Organizacional
          </h2>
          
          {organizationalStructure.map((department, index) => (
            <Card key={index} className="bg-gradient-to-br from-[#0047ab]/10 to-black/50 border-[#0047ab]/20 mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-white">{department.department}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {department.members.map((member, memberIndex) => (
                    <div key={memberIndex} className="text-center">
                      <div className="bg-[#0047ab]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 border-2 border-[#0047ab]/20">
                        <Users className="h-8 w-8 text-[#0047ab]" />
                      </div>
                      <h4 className="font-semibold text-white mb-1">{member.name}</h4>
                      <p className="text-sm text-gray-300">{member.role}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Complaint Handling */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Tratamento de Denúncias
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complaintHandling.map((step, index) => (
              <Card key={index} className="bg-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#0047ab]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-[#0047ab]/20">
                    <span className="text-2xl font-bold text-[#0047ab]">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{step.step}</h3>
                  <p className="text-gray-300 text-sm mb-3">{step.description}</p>
                  <div className="bg-[#0047ab]/10 rounded px-3 py-1 inline-block border border-[#0047ab]/20">
                    <span className="text-[#0047ab] text-xs font-medium">{step.timeframe}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Reports */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">
            Relatórios Futuros
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-[#0047ab]/10 to-black/50 border-[#0047ab]/20">
              <CardContent className="p-6">
                <DollarSign className="h-8 w-8 text-[#0047ab] mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">Relatórios Financeiros</h3>
                <p className="text-gray-300 mb-4">
                  Planejamos publicar relatórios financeiros anuais para maior transparência com stakeholders.
                </p>
                <div className="text-sm text-gray-400">
                  <strong>Status:</strong> Em desenvolvimento
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-[#0047ab]/10 to-black/50 border-[#0047ab]/20">
              <CardContent className="p-6">
                <TrendingUp className="h-8 w-8 text-[#0047ab] mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">Métricas de Impacto</h3>
                <p className="text-gray-300 mb-4">
                  Relatórios sobre nosso impacto social, ambiental e contribuição para a comunidade tech.
                </p>
                <div className="text-sm text-gray-400">
                  <strong>Status:</strong> Planejado para 2025
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Transparency */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#0047ab]/10 to-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Dúvidas sobre Transparência?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Estamos abertos a questionamentos e sugestões sobre nossos processos e transparência
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:contatocheetahsolutions@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-[#0047ab] hover:bg-[#0047ab]/80 text-white px-8 py-6 text-lg font-semibold rounded-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar Conosco
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Transparency;
