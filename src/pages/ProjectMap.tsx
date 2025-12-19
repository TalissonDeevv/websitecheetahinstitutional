
import { ExternalLink, Bot, Globe, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProjectMap = () => {
  const projects = [
    {
      id: 1,
      title: "Sistema E-commerce Plus",
      description: "Plataforma completa de e-commerce com painel administrativo avançado",
      type: "website",
      category: "E-commerce",
      technologies: ["React", "Node.js", "MongoDB"],
      status: "Ativo",
      link: "#",
      image: "/placeholder.svg",
      client: "Loja Virtual ABC"
    },
    {
      id: 2,
      title: "Bot Discord - Moderação Pro",
      description: "Bot avançado de moderação com sistema de levels e economia virtual",
      type: "bot",
      category: "Discord Bot",
      technologies: ["Python", "Discord.py", "PostgreSQL"],
      status: "Ativo",
      link: "#",
      image: "/placeholder.svg",
      client: "Servidor GameHub"
    },
    {
      id: 3,
      title: "Sistema CRM Empresarial",
      description: "CRM personalizado para gestão de clientes e vendas",
      type: "system",
      category: "CRM",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      status: "Ativo",
      link: "#",
      image: "/placeholder.svg",
      client: "Empresa Tech Solutions"
    },
    {
      id: 4,
      title: "Bot Telegram - Atendimento 24/7",
      description: "Bot inteligente para atendimento automatizado via Telegram",
      type: "bot",
      category: "Telegram Bot",
      technologies: ["Python", "Telegram API", "AI"],
      status: "Ativo",
      link: "#",
      image: "/placeholder.svg",
      client: "Clínica Saúde+"
    },
    {
      id: 5,
      title: "Portal Educacional",
      description: "Plataforma de ensino online com sistema de cursos e certificados",
      type: "website",
      category: "Educação",
      technologies: ["React", "Express", "PostgreSQL"],
      status: "Ativo",
      link: "#",
      image: "/placeholder.svg",
      client: "Instituto EduTech"
    },
    {
      id: 6,
      title: "API de Integração Financeira",
      description: "API robusta para integração com sistemas bancários e pagamento",
      type: "integration",
      category: "API/Integração",
      technologies: ["Node.js", "Express", "Redis"],
      status: "Ativo",
      link: "#",
      image: "/placeholder.svg",
      client: "FinTech StartUp"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "bot": return Bot;
      case "website": return Globe;
      case "system": return Users;
      case "integration": return Zap;
      default: return Globe;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "bot": return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      case "website": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "system": return "bg-green-500/20 text-green-300 border-green-500/30";
      case "integration": return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <section className="pt-28 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Mapa de </span>
              <span className="text-[#0047ab]">Projetos Públicos</span>
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Conheça alguns dos projetos desenvolvidos pela Cheetah Network. 
              Nossa vitrine de credibilidade e expertise técnica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const IconComponent = getIcon(project.type);
              return (
                <Card 
                  key={project.id} 
                  className="bg-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300 hover:scale-105 group backdrop-blur-sm"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={`${getTypeColor(project.type)} border`}>
                          <IconComponent className="h-3 w-3 mr-1" />
                          {project.category}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#0047ab] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/70 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="mb-4">
                        <p className="text-xs text-white/60 mb-2">Cliente:</p>
                        <p className="text-sm text-[#0047ab] font-medium">{project.client}</p>
                      </div>

                      <div className="mb-4">
                        <p className="text-xs text-white/60 mb-2">Tecnologias:</p>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, index) => (
                            <Badge 
                              key={index}
                              variant="outline" 
                              className="text-xs border-[#0047ab]/30 text-white/80"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button 
                        className="w-full bg-[#0047ab] hover:bg-[#0047ab]/80 text-white"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        Ver Projeto
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-[#0047ab]/5 rounded-3xl p-8 border border-[#0047ab]/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Seu Projeto Pode Estar Aqui
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Trabalhamos com transparência e orgulho dos resultados que entregamos. 
                Entre em contato e vamos criar algo incrível juntos!
              </p>
              <Button 
                size="lg"
                className="bg-[#0047ab] hover:bg-[#0047ab]/90 text-white px-8 py-4"
              >
                Iniciar Projeto
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectMap;
