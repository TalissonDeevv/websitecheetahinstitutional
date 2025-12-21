import { Users, Mail, Award, Star, Shield, Code, Headphones, UserCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Team = () => {
  const executiveLeadership = [
    {
      name: "Talisson Souza",
      role: "CEO - Chief Executive Officer",
      contact: {
        email: "talissondeveloper@gmail.com"
      },
      skills: ["Liderança", "Estratégia", "Inovação"],
      achievements: ["Fundador da Cheetah Network", "Liderou projetos de grande escala"]
    },
    {
      name: "Bruno Nugget",
      role: "CCO - Chief Commercial Officer",
      contact: {
        email: "snoows2marina@outlook.com"
      },
      skills: ["Vendas", "Marketing", "Negociação"],
      achievements: ["Aumentou as vendas em 50%", "Expandiu a base de clientes"]
    },
    {
      name: "Vitor Mapeli",
      role: "COO - Chief Operating Officer",
      contact: {
        email: "Indisponivel no momento"
      },
      skills: ["Operações", "Processos", "Gestão de Projetos"],
      achievements: ["Otimizou processos internos", "Reduziu custos operacionais"]
    },
    {
      name: "José Jorge",
      role: "CTO - Chief Technology Officer",
      contact: {
        email: "J.jfalasco77@gmail.com"
      },
      skills: ["Tecnologia", "Desenvolvimento", "Infraestrutura"],
      achievements: ["Implementou novas tecnologias", "Melhorou a infraestrutura de TI"]
    }
  ];

  const developmentTeam = [
    {
      name: "João Silva",
      role: "Desenvolvedor Front-end",
      contact: {
        email: "joao.silva@cheetah.net"
      },
      skills: ["React", "JavaScript", "HTML", "CSS"],
      achievements: ["Desenvolveu interfaces de usuário intuitivas", "Otimizou o desempenho do front-end"]
    },
    {
      name: "Maria Souza",
      role: "Desenvolvedora Back-end",
      contact: {
        email: "maria.souza@cheetah.net"
      },
      skills: ["Node.js", "Python", "SQL", "NoSQL"],
      achievements: ["Desenvolveu APIs robustas", "Otimizou o desempenho do back-end"]
    },
    {
      name: "Carlos Pereira",
      role: "Engenheiro de Dados",
      contact: {
        email: "carlos.pereira@cheetah.net"
      },
      skills: ["Big Data", "Machine Learning", "Data Science"],
      achievements: ["Implementou soluções de análise de dados", "Otimizou o processamento de dados"]
    }
  ];

  const supportTeam = [
    {
      name: "Ana Oliveira",
      role: "Analista de Suporte",
      contact: {
        email: "ana.oliveira@cheetah.net"
      },
      skills: ["Atendimento ao Cliente", "Resolução de Problemas", "Comunicação"],
      achievements: ["Resolveu problemas de clientes de forma eficiente", "Manteve altos níveis de satisfação do cliente"]
    },
    {
      name: "Pedro Santos",
      role: "Técnico de Suporte",
      contact: {
        email: "pedro.santos@cheetah.net"
      },
      skills: ["Suporte Técnico", "Manutenção de Hardware", "Redes"],
      achievements: ["Resolveu problemas técnicos de forma eficiente", "Manteve a infraestrutura de TI funcionando"]
    }
  ];

  const verificationBadges = [
    {
      icon: UserCheck,
      label: "Identidade Verificada",
      description: "A identidade desta pessoa foi verificada por nossa equipe."
    },
    {
      icon: Shield,
      label: "Experiência Comprovada",
      description: "Esta pessoa possui experiência comprovada na área."
    },
    {
      icon: Award,
      label: "Certificações",
      description: "Esta pessoa possui certificações relevantes para sua área de atuação."
    },
    {
      icon: Star,
      label: "Recomendada",
      description: "Esta pessoa é altamente recomendada por outros membros da equipe."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-[#0047ab] uppercase tracking-widest mb-3 font-medium">Profissionais</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Nossa </span>
            <span className="text-[#0047ab]">Equipe</span>
          </h1>
          <p className="text-base text-gray-400 max-w-xl mx-auto">
            Profissionais qualificados comprometidos com a excelência técnica
          </p>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-white mb-2">Liderança Executiva</h2>
            <p className="text-sm text-gray-500">Direção estratégica e operacional</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {executiveLeadership.map((member, index) => (
              <Card key={index} className="bg-gray-900/30 border-gray-800/50">
                <CardContent className="p-5">
                  <div className="text-base font-semibold text-white mb-1">{member.name}</div>
                  <div className="text-xs text-[#0047ab] mb-3">{member.role}</div>
                  <div className="text-xs text-gray-500 mb-2">
                    <strong className="text-gray-400">Competências:</strong> {member.skills.join(", ")}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Team */}
      <section className="py-12 px-4 bg-gray-900/20">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-white mb-2">Equipe Técnica</h2>
            <p className="text-sm text-gray-500">Desenvolvimento e engenharia</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {developmentTeam.map((member, index) => (
              <Card key={index} className="bg-gray-900/30 border-gray-800/50">
                <CardContent className="p-5">
                  <div className="text-base font-semibold text-white mb-1">{member.name}</div>
                  <div className="text-xs text-[#0047ab] mb-3">{member.role}</div>
                  <div className="flex flex-wrap gap-1">
                    {member.skills.slice(0, 3).map((skill, i) => (
                      <span key={i} className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-white mb-2">Equipe de Suporte</h2>
            <p className="text-sm text-gray-500">Atendimento e suporte técnico</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {supportTeam.map((member, index) => (
              <Card key={index} className="bg-gray-900/30 border-gray-800/50">
                <CardContent className="p-5">
                  <div className="text-base font-semibold text-white mb-1">{member.name}</div>
                  <div className="text-xs text-[#0047ab] mb-3">{member.role}</div>
                  <div className="flex flex-wrap gap-1">
                    {member.skills.slice(0, 2).map((skill, i) => (
                      <span key={i} className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-gray-900/20">
        <div className="container mx-auto text-center">
          <h2 className="text-xl font-semibold mb-3 text-white">
            Interessado em fazer parte da equipe?
          </h2>
          <p className="text-sm text-gray-400 mb-5 max-w-md mx-auto">
            Estamos sempre à procura de profissionais qualificados.
          </p>
          <Button size="lg" className="bg-[#0047ab] hover:bg-[#0047ab]/90 text-white px-6 py-3 font-medium rounded-lg">
            Entre em contato
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
