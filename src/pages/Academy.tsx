import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Book, Clock, Users, Bot, Zap, Shield, MessageCircle, Play, Download, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoonToast from "@/components/ComingSoonToast";
import { useState } from "react";

const Academy = () => {
  const [showComingSoonToast, setShowComingSoonToast] = useState(false);

  const handleComingSoonClick = () => {
    setShowComingSoonToast(true);
  };

  const courses = [
    {
      id: 1,
      title: "Como usar bots no Discord e Telegram",
      description: "Aprenda desde a configuração básica até comandos avançados para otimizar seu servidor ou grupo",
      level: "Iniciante",
      duration: "2h 30min",
      icon: Bot,
      topics: [
        "Configuração inicial de bots",
        "Comandos básicos e avançados",
        "Moderação automática",
        "Sistema de levels e economia",
        "Integração com APIs externas"
      ],
      type: "Curso Completo"
    },
    {
      id: 2,
      title: "Introdução à Automação com API",
      description: "Descubra como conectar sistemas e automatizar processos usando APIs de forma prática",
      level: "Intermediário",
      duration: "3h 15min",
      icon: Zap,
      topics: [
        "Conceitos fundamentais de API",
        "Métodos HTTP e autenticação",
        "Integração de sistemas",
        "Webhooks e eventos em tempo real",
        "Tratamento de erros e logs"
      ],
      type: "Curso Técnico"
    },
    {
      id: 3,
      title: "Segurança Digital Básica",
      description: "Fundamentos essenciais para proteger seus dados e sistemas contra ameaças digitais",
      level: "Iniciante",
      duration: "1h 45min",
      icon: Shield,
      topics: [
        "Senhas seguras e 2FA",
        "Reconhecimento de phishing",
        "Backup e recuperação de dados",
        "Navegação segura na internet",
        "Proteção de redes Wi-Fi"
      ],
      type: "Guia Prático"
    },
    {
      id: 4,
      title: "Como Empreendedores podem usar o Atendefly",
      description: "Maximize seu atendimento ao cliente com automação inteligente e estratégias eficazes",
      level: "Iniciante",
      duration: "2h 00min",
      icon: MessageCircle,
      topics: [
        "Configuração do Atendefly",
        "Criação de fluxos de conversa",
        "Integração com CRM",
        "Métricas e relatórios",
        "Otimização de conversões"
      ],
      type: "Curso Prático"
    }
  ];

  const resources = [
    {
      title: "E-book: Guia Completo de Automação",
      description: "Manual com 50+ páginas sobre automação de processos empresariais",
      type: "PDF",
      icon: Download
    },
    {
      title: "Templates de Configuração",
      description: "Arquivos prontos para configurar bots e integrações rapidamente",
      type: "ZIP",
      icon: Download
    },
    {
      title: "Checklists de Segurança",
      description: "Listas de verificação para manter seus sistemas seguros",
      type: "PDF",
      icon: Download
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Iniciante":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "Intermediário":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "Avançado":
        return "bg-red-500/20 text-red-300 border-red-500/30";
      default:
        return "bg-blue-500/20 text-blue-300 border-blue-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {showComingSoonToast && (
        <ComingSoonToast 
          title="Conteúdo em Produção!"
          message="Estamos trabalhando para entregar uma experiência completa de aprendizado através da Cheetah Academy. Em breve todos os cursos estarão disponíveis!"
        />
      )}
      
      <section className="pt-28 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Production Notice Banner */}
          <div className="mb-8">
            <Card className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border-orange-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500/20 rounded-full p-2 flex-shrink-0">
                    <AlertCircle className="h-6 w-6 text-orange-400" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-orange-400">
                      Conteúdo em produção!
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      Estamos trabalhando para entregar uma experiência completa de aprendizado através da Cheetah Academy.
                    </p>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Em breve, todos os vídeos de minicursos, documentações, arquivos ZIP, materiais de apoio e outros recursos estarão disponíveis aqui, organizados e atualizados com a qualidade que você espera da Cheetah Network.
                    </p>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Toda a estrutura está em fase de produção, e muito em breve você poderá acessar conteúdos gratuitos e exclusivos para aprimorar seus conhecimentos sobre nossos sistemas, bots, plataformas e boas práticas.
                    </p>
                    <div className="pt-2">
                      <p className="text-orange-300 font-medium text-sm">
                        Agradecemos a sua paciência!<br />
                        Estamos preparando tudo com carinho para entregar o melhor.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-12">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-[#0047ab]/10 rounded-full flex items-center justify-center border-2 border-[#0047ab]">
                <Book className="h-8 w-8 text-[#0047ab]" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[#0047ab]">Cheetah</span>
              <span className="text-white"> Academy</span>
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Aprenda com os especialistas da Cheetah Network. Cursos gratuitos, 
              tutoriais práticos e recursos para acelerar seu conhecimento em tecnologia.
            </p>
          </div>

          {/* Featured Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#0047ab] mb-2">12+</div>
              <div className="text-white/80 text-sm">Cursos Disponíveis</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#0047ab] mb-2">0</div>
              <div className="text-white/80 text-sm">Alunos Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#0047ab] mb-2">15h</div>
              <div className="text-white/80 text-sm">Conteúdo Total</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#0047ab] mb-2">100%</div>
              <div className="text-white/80 text-sm">Gratuito</div>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center">
              Nossos <span className="text-[#0047ab]">Cursos</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {courses.map((course) => (
                <Card 
                  key={course.id} 
                  className="bg-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300 hover:scale-105 group backdrop-blur-sm"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-[#0047ab]/10 rounded-lg p-3 border border-[#0047ab]/20">
                        <course.icon className="h-6 w-6 text-[#0047ab]" />
                      </div>
                      <div className="flex gap-2">
                        <Badge className={getLevelColor(course.level)}>
                          {course.level}
                        </Badge>
                        <Badge variant="outline" className="border-[#0047ab]/30 text-white/80">
                          {course.type}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-[#0047ab] transition-colors">
                      {course.title}
                    </CardTitle>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {course.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-xs text-white/60 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {Math.floor(Math.random() * 100) + 50}+ alunos
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-sm text-white/80 font-medium mb-3">O que você vai aprender:</p>
                      <div className="space-y-2">
                        {course.topics.slice(0, 3).map((topic, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-[#0047ab] rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-white/70 text-xs">{topic}</p>
                          </div>
                        ))}
                        {course.topics.length > 3 && (
                          <p className="text-xs text-[#0047ab]">
                            +{course.topics.length - 3} tópicos adicionais
                          </p>
                        )}
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-[#0047ab] hover:bg-[#0047ab]/80 text-white"
                      onClick={handleComingSoonClick}
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Começar Curso
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center">
              Recursos <span className="text-[#0047ab]">Gratuitos</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="bg-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-[#0047ab]/10 rounded-lg p-4 w-fit mx-auto mb-4 border border-[#0047ab]/20">
                      <resource.icon className="h-8 w-8 text-[#0047ab]" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                    <p className="text-white/70 text-sm mb-4">{resource.description}</p>
                    <Badge variant="outline" className="border-[#0047ab]/30 text-[#0047ab] mb-4">
                      {resource.type}
                    </Badge>
                    <Button 
                      className="w-full bg-[#0047ab] hover:bg-[#0047ab]/80 text-white"
                      onClick={handleComingSoonClick}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-[#0047ab]/5 border-[#0047ab]/20">
            <CardContent className="p-8 text-center">
              <Book className="h-16 w-16 text-[#0047ab] mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Pronto para Aprender?
              </h3>
              <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
                Comece hoje mesmo sua jornada de aprendizado com conteúdo de qualidade, 
                criado por especialistas e totalmente gratuito.
              </p>
              <Button 
                size="lg"
                className="bg-[#0047ab] hover:bg-[#0047ab]/90 text-white px-8 py-4 text-lg font-semibold"
                onClick={handleComingSoonClick}
              >
                Explorar Todos os Cursos
                <Play className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Academy;
