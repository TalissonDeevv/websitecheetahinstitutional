
import { ExternalLink, Calendar, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Portfolio = () => {
  const projects = [
    {
      title: "GameHub Discord Bot",
      category: "Bot Discord",
      problem: "Comunidade de jogos precisava de engajamento e organização",
      solution: "Bot completo com ranking, economia virtual e eventos automáticos",
      result: "Mais de 10.000 membros ativos engajados",
      tech: ["Discord.js", "Node.js", "MongoDB"],
      year: "2024"
    },
    {
      title: "TechCorp Website",
      category: "Website",
      problem: "Empresa de tecnologia sem presença digital profissional",
      solution: "Site institucional com dashboard e blog integrado",
      result: "Aumento de 40% em leads qualificados",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      year: "2024"
    },
    {
      title: "E-commerce AutoParts",
      category: "E-commerce",
      problem: "Loja de autopeças com processo de venda manual",
      solution: "Plataforma completa com pagamento e gestão de estoque",
      result: "Operação 100% digitalizada",
      tech: ["React", "Node.js", "PostgreSQL"],
      year: "2023"
    },
    {
      title: "ModerationPro Bot",
      category: "Bot Discord",
      problem: "Servidores grandes com moderação manual ineficiente",
      solution: "Sistema de moderação automática com IA",
      result: "Redução de 80% em trabalho manual",
      tech: ["Python", "Discord.py", "TensorFlow"],
      year: "2023"
    },
    {
      title: "CRM Integration Suite",
      category: "Integração",
      problem: "Sistemas desconectados gerando retrabalho",
      solution: "Suite conectando CRM, ERP e marketing automation",
      result: "Processos unificados e automatizados",
      tech: ["Node.js", "REST APIs", "AWS"],
      year: "2023"
    },
    {
      title: "Identidade Visual StartupX",
      category: "Design",
      problem: "Startup sem identidade visual definida",
      solution: "Branding completo: logo, paleta e guidelines",
      result: "Marca profissional e consistente",
      tech: ["Illustrator", "Figma"],
      year: "2024"
    }
  ];

  const categories = ["Todos", "Bot Discord", "Website", "E-commerce", "Design", "Integração"];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-[#0047ab] uppercase tracking-widest mb-3 font-medium">Trabalhos</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Nosso </span>
            <span className="text-[#0047ab]">Portfólio</span>
          </h1>
          <p className="text-base text-gray-400 max-w-xl mx-auto">
            Projetos desenvolvidos com foco em resultados concretos
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={
                  index === 0 
                    ? "bg-[#0047ab] hover:bg-[#0047ab]/90 text-white text-xs" 
                    : "border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white text-xs"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-gray-900/30 border-gray-800/50 hover:border-gray-700/50 transition-all duration-200"
              >
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-[#0047ab] font-medium">{project.category}</span>
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <Calendar className="h-3 w-3" />
                      {project.year}
                    </div>
                  </div>
                  
                  <h3 className="text-base font-semibold mb-3 text-white">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div>
                      <span className="text-xs text-gray-500">Problema:</span>
                      <p className="text-xs text-gray-400">{project.problem}</p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500">Solução:</span>
                      <p className="text-xs text-gray-400">{project.solution}</p>
                    </div>
                    <div>
                      <span className="text-xs text-[#0047ab]">Resultado:</span>
                      <p className="text-xs text-gray-300">{project.result}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-800 text-gray-400 px-2 py-0.5 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-gray-900/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-3xl mx-auto">
            <div>
              <div className="text-2xl font-bold text-[#0047ab] mb-1">120+</div>
              <div className="text-xs text-gray-400">Projetos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#0047ab] mb-1">50+</div>
              <div className="text-xs text-gray-400">Clientes</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#0047ab] mb-1">5+</div>
              <div className="text-xs text-gray-400">Anos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#0047ab] mb-1">98%</div>
              <div className="text-xs text-gray-400">Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-xl font-semibold mb-3 text-white">
            Pronto para seu próximo projeto?
          </h2>
          <p className="text-sm text-gray-400 mb-5 max-w-md mx-auto">
            Vamos discutir como podemos ajudar seu negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              size="lg" 
              className="bg-[#0047ab] hover:bg-[#0047ab]/90 text-white px-6 py-3 font-medium rounded-lg"
            >
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
