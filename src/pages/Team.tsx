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
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Nossa </span>
            <span className="text-[#0047ab]">Equipe</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça os profissionais dedicados que fazem a Cheetah Network funcionar
          </p>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Liderança Executiva</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {executiveLeadership.map((member, index) => (
              <Card key={index} className="bg-gray-900/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-xl font-semibold mb-2">{member.name}</div>
                  <div className="text-gray-300 mb-3">{member.role}</div>
                  <div className="text-sm text-gray-400 mb-2">
                    <Mail className="inline-block mr-1 h-4 w-4" /> 
                    <a href={`mailto:${member.contact.email}`} className="hover:text-[#0047ab] transition-colors">
                      {member.contact.email}
                    </a>
                  </div>
                  <div className="text-sm text-gray-400 mb-2">
                    <strong>Habilidades:</strong> {member.skills.join(", ")}
                  </div>
                  <div className="text-sm text-gray-400">
                    <strong>Conquistas:</strong> {member.achievements.join(", ")}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Team */}
      <section className="py-12 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Equipe de Desenvolvimento</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentTeam.map((member, index) => (
              <Card key={index} className="bg-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-xl font-semibold mb-2">{member.name}</div>
                  <div className="text-gray-300 mb-3">{member.role}</div>
                  <div className="text-sm text-gray-400 mb-2">
                    <Mail className="inline-block mr-1 h-4 w-4" /> 
                    <a href={`mailto:${member.contact.email}`} className="hover:text-[#0047ab] transition-colors">
                      {member.contact.email}
                    </a>
                  </div>
                  <div className="text-sm text-gray-400 mb-2">
                    <strong>Habilidades:</strong> {member.skills.join(", ")}
                  </div>
                  <div className="text-sm text-gray-400">
                    <strong>Conquistas:</strong> {member.achievements.join(", ")}
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
          <h2 className="text-3xl font-bold mb-8 text-center">Equipe de Suporte</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportTeam.map((member, index) => (
              <Card key={index} className="bg-gray-900/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-xl font-semibold mb-2">{member.name}</div>
                  <div className="text-gray-300 mb-3">{member.role}</div>
                  <div className="text-sm text-gray-400 mb-2">
                    <Mail className="inline-block mr-1 h-4 w-4" /> 
                    <a href={`mailto:${member.contact.email}`} className="hover:text-[#0047ab] transition-colors">
                      {member.contact.email}
                    </a>
                  </div>
                  <div className="text-sm text-gray-400 mb-2">
                    <strong>Habilidades:</strong> {member.skills.join(", ")}
                  </div>
                  <div className="text-sm text-gray-400">
                    <strong>Conquistas:</strong> {member.achievements.join(", ")}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Verification Badges */}
      <section className="py-12 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Verificação da Equipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {verificationBadges.map((badge, index) => (
              <Card key={index} className="bg-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="bg-[#0047ab]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-[#0047ab]/20">
                    <badge.icon className="h-8 w-8 text-[#0047ab]" />
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">{badge.label}</div>
                  <div className="text-sm text-gray-300">{badge.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Interessado em fazer parte da nossa equipe?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Estamos sempre à procura de talentos apaixonados para se juntarem à Cheetah Network.
          </p>
          <Button size="lg" className="bg-[#0047ab] hover:bg-[#0047ab]/80 text-white px-8 py-6 text-lg font-semibold rounded-lg">
            Entre em contato
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
