
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
      description: "Bot completo para comunidade de jogos com sistema de ranking, economia virtual e eventos automáticos. Mais de 10.000 membros ativos.",
      tech: ["Discord.js", "Node.js", "MongoDB", "Redis"],
      year: "2024",
      image: "placeholder"
    },
    {
      title: "TechCorp Website",
      category: "Website",
      description: "Site institucional moderno para empresa de tecnologia com dashboard administrativo e sistema de blog integrado.",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      year: "2024",
      image: "placeholder"
    },
    {
      title: "Identidade Visual - StartupX",
      category: "Design",
      description: "Criação completa de identidade visual para startup de tecnologia, incluindo logo, paleta de cores e guidelines.",
      tech: ["Adobe Illustrator", "Figma", "Photoshop"],
      year: "2024",
      image: "placeholder"
    },
    {
      title: "E-commerce AutoParts",
      category: "Website",
      description: "Plataforma completa de e-commerce para venda de peças automotivas com integração de pagamento e estoque.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      year: "2023",
      image: "placeholder"
    },
    {
      title: "ModerationPro Bot",
      category: "Bot Discord",
      description: "Sistema avançado de moderação automática com IA para detecção de spam, toxic behavior e auto-ban inteligente.",
      tech: ["Python", "Discord.py", "TensorFlow", "Docker"],
      year: "2023",
      image: "placeholder"
    },
    {
      title: "CRM Integration Suite",
      category: "Integração",
      description: "Suite de integrações conectando CRM, ERP e sistemas de marketing automation para empresa de médio porte.",
      tech: ["Node.js", "REST APIs", "GraphQL", "AWS"],
      year: "2023",
      image: "placeholder"
    }
  ];

  const categories = ["Todos", "Bot Discord", "Website", "Design", "Integração"];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Nosso </span>
            <span className="text-[#0047ab]">Portfólio</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos com excelência e inovação
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={
                  index === 0 
                    ? "bg-[#0047ab] hover:bg-[#0047ab]/80 text-white" 
                    : "border-[#0047ab] text-[#0047ab] hover:bg-[#0047ab] hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-0">
                  {/* Project Image Placeholder */}
                  <div className="bg-gradient-to-br from-[#0047ab]/10 to-black/50 h-48 rounded-t-lg flex items-center justify-center border-b border-[#0047ab]/20">
                    <div className="text-center">
                      <ExternalLink className="h-16 w-16 text-[#0047ab] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-400 text-sm">Projeto Preview</span>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="bg-[#0047ab]/10 rounded-full px-3 py-1 border border-[#0047ab]/20">
                        <span className="text-[#0047ab] text-sm font-medium">{project.category}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <Calendar className="h-4 w-4" />
                        {project.year}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#0047ab] transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Tag className="h-4 w-4 text-[#0047ab]" />
                        <span className="text-gray-400 text-sm">Tecnologias:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#0047ab] mb-2">150+</div>
              <div className="text-gray-300">Projetos Concluídos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0047ab] mb-2">500+</div>
              <div className="text-gray-300">Servidores Discord</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0047ab] mb-2">50+</div>
              <div className="text-gray-300">Websites Desenvolvidos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0047ab] mb-2">98%</div>
              <div className="text-gray-300">Satisfação dos Clientes</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#0047ab]/10 to-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Pronto para ser o Próximo Projeto?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Vamos criar algo incrível juntos. Entre em contato e vamos discutir seu projeto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-[#0047ab] hover:bg-[#0047ab]/80 text-white px-8 py-6 text-lg font-semibold rounded-lg"
              >
                Iniciar Projeto
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline"
              className="border-[#0047ab] text-[#0047ab] hover:bg-[#0047ab] hover:text-white px-8 py-6 text-lg font-semibold rounded-lg"
            >
              Ver Mais Projetos
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
