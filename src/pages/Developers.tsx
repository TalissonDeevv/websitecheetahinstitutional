import { 
  Users, Code, Brain, Database, Globe, Smartphone, 
  Shield, Bot, Server, Cog, BookOpen, MessageCircle,
  Lightbulb, Award, Target, Heart, Zap, GraduationCap,
  ArrowRight, ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import pairProgrammingSvg from "@/assets/pair-programming.svg";

const Developers = () => {
  const technicalAreas = [
    {
      title: "Inteligência Artificial",
      description: "Machine Learning, Deep Learning, NLP, Computer Vision e desenvolvimento de soluções inteligentes.",
      icon: Brain,
    },
    {
      title: "Ciência de Dados",
      description: "Análise de dados, estatística aplicada, visualização de dados e insights para tomada de decisão.",
      icon: Database,
    },
    {
      title: "Front-End",
      description: "React, Vue, Angular, TypeScript, CSS moderno e construção de interfaces responsivas e acessíveis.",
      icon: Globe,
    },
    {
      title: "Back-End",
      description: "Node.js, Python, Java, APIs REST/GraphQL, arquitetura de microsserviços e escalabilidade.",
      icon: Server,
    },
    {
      title: "Mobile",
      description: "React Native, Flutter, Swift, Kotlin e desenvolvimento de aplicações nativas e híbridas.",
      icon: Smartphone,
    },
    {
      title: "Bancos de Dados",
      description: "SQL, NoSQL, PostgreSQL, MongoDB, Redis, modelagem de dados e otimização de queries.",
      icon: Database,
    },
    {
      title: "Automação",
      description: "Scripts, RPA, integração de sistemas, workflows automatizados e eliminação de tarefas manuais.",
      icon: Cog,
    },
    {
      title: "Infraestrutura",
      description: "AWS, Azure, GCP, Docker, Kubernetes, CI/CD, DevOps e arquitetura em nuvem.",
      icon: Server,
    },
    {
      title: "Segurança",
      description: "Cibersegurança, análise de vulnerabilidades, OWASP, pentest e proteção de sistemas.",
      icon: Shield,
    },
    {
      title: "Bots e Discord",
      description: "Desenvolvimento de bots para Discord, Telegram, automação de comunidades e integrações.",
      icon: Bot,
    },
  ];

  const benefits = [
    {
      title: "Suporte Colaborativo",
      description: "Tire dúvidas, compartilhe conhecimento e evolua junto com outros desenvolvedores.",
      icon: MessageCircle,
    },
    {
      title: "Materiais Educacionais",
      description: "Acesso gratuito a conteúdos, tutoriais e materiais de estudo organizados pela comunidade.",
      icon: BookOpen,
    },
    {
      title: "Troca de Experiências",
      description: "Aprenda com casos reais, desafios práticos e experiências de outros membros.",
      icon: Lightbulb,
    },
    {
      title: "Mentorias Informais",
      description: "Orientação de membros mais experientes para acelerar seu desenvolvimento técnico.",
      icon: GraduationCap,
    },
    {
      title: "Workshops Técnicos",
      description: "Sessões práticas sobre tecnologias, ferramentas e metodologias atuais do mercado.",
      icon: Code,
    },
    {
      title: "Hackathons",
      description: "Desafios de programação para praticar habilidades e construir projetos reais.",
      icon: Zap,
    },
    {
      title: "Desafios Práticos",
      description: "Exercícios e projetos para aplicar conhecimento e fortalecer o aprendizado.",
      icon: Target,
    },
    {
      title: "Eventos Temáticos",
      description: "Encontros sobre temas específicos, novas tecnologias e tendências do setor.",
      icon: Award,
    },
    {
      title: "Construção de Portfólio",
      description: "Oportunidade de desenvolver projetos que fortalecem seu currículo técnico.",
      icon: Heart,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <AnimatedSection animation="fade-up">
        <section className="pt-28 pb-20 px-4 overflow-hidden">
          <div className="container mx-auto">
            <div className="flex items-center justify-between gap-8">
              <div className="max-w-3xl">
                <p className="text-xs text-primary uppercase tracking-[0.2em] mb-6 font-medium">
                  Programa de Comunidade Oficial
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
                  Cheetah Developers<br />
                  <span className="text-primary">Brasil</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
                  Onde desenvolvedores evoluem juntos.
                </p>
                <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-10">
                  Um programa de comunidade oficial da Cheetah Solutions Network, criado para reunir 
                  pessoas apaixonadas por programação, tecnologia e inovação em um ambiente público, 
                  colaborativo e orientado ao aprendizado contínuo e à evolução técnica coletiva.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://discord.gg/rY3HUQpECS" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                    >
                      Entrar para a Comunidade
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <a href="#areas-tecnicas">
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="border-border text-muted-foreground hover:bg-secondary hover:text-foreground font-medium"
                    >
                      Conhecer as Áreas Técnicas
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
              
              {/* Pair Programming SVG - Right Side (Desktop) */}
              <div className="hidden lg:flex items-center justify-center flex-shrink-0">
                <img 
                  src={pairProgrammingSvg} 
                  alt="Pair programming illustration" 
                  className="w-[420px] h-[420px] xl:w-[480px] xl:h-[480px]"
                />
              </div>
            </div>
            
            {/* Pair Programming SVG - Mobile/Tablet */}
            <div className="flex lg:hidden items-center justify-center mt-8">
              <img 
                src={pairProgrammingSvg} 
                alt="Pair programming illustration" 
                className="w-64 h-64 sm:w-80 sm:h-80"
              />
            </div>
            </div>
        </section>
      </AnimatedSection>

      {/* Sobre a Comunidade */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-4">
              <div className="sticky top-32">
                <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  Sobre a Comunidade
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mt-3 leading-tight">
                  Um espaço público<br />
                  para evoluir junto.
                </h2>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={100} className="lg:col-span-8">
              <div className="space-y-8">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  A Cheetah Developers Brasil é um programa de comunidade oficial da Cheetah Solutions Network, 
                  criado para fortalecer o ecossistema de tecnologia no Brasil por meio da colaboração, do 
                  aprendizado contínuo e do desenvolvimento de talentos em programação e inovação digital.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Trata-se de uma comunidade pública e acessível, aberta a qualquer pessoa interessada em 
                  tecnologia, independentemente de vínculo com a empresa ou nível de experiência. Nosso 
                  objetivo é criar um ambiente seguro, organizado e colaborativo, onde o conhecimento é 
                  compartilhado de forma genuína e o aprendizado acontece de maneira prática e orientada.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Acreditamos que a evolução técnica é potencializada quando acontece em grupo. Por isso, 
                  incentivamos a troca de experiências reais, a discussão de desafios do dia a dia e a 
                  construção coletiva de soluções. Cada membro contribui e aprende, formando um ciclo 
                  virtuoso de crescimento técnico e profissional.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A comunidade é estruturada em torno de áreas técnicas específicas, permitindo que cada 
                  participante encontre seu espaço de interesse e se aprofunde nos temas que mais fazem 
                  sentido para sua trajetória. Não há barreiras de entrada: basta interesse genuíno em 
                  aprender e vontade de contribuir para um ambiente saudável e produtivo.
                </p>
                
                <div className="pt-8 border-t border-border">
                  <div className="grid sm:grid-cols-3 gap-8">
                    <div>
                      <span className="text-3xl font-bold text-primary">10+</span>
                      <p className="text-sm text-muted-foreground mt-1">áreas técnicas</p>
                    </div>
                    <div>
                      <span className="text-3xl font-bold text-primary">100%</span>
                      <p className="text-sm text-muted-foreground mt-1">público e gratuito</p>
                    </div>
                    <div>
                      <span className="text-3xl font-bold text-primary">24/7</span>
                      <p className="text-sm text-muted-foreground mt-1">comunidade ativa</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Áreas Técnicas */}
      <section id="areas-tecnicas" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-xl mb-16">
              <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                Áreas Técnicas
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3">
                Encontre seu espaço<br />
                e aprofunde-se.
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                A comunidade é organizada em áreas técnicas específicas, permitindo que você 
                se conecte com pessoas que compartilham os mesmos interesses.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {technicalAreas.map((area, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors h-full">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <area.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* O que a Comunidade Oferece */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <AnimatedSection animation="fade-right">
                <div className="sticky top-32">
                  <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                    Benefícios
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mt-3 leading-tight">
                    O que a comunidade<br />
                    oferece.
                  </h2>
                  <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                    Um ambiente completo para você evoluir como desenvolvedor, 
                    com recursos, eventos e oportunidades de aprendizado contínuo.
                  </p>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
                    <div className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors h-full">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                        <benefit.icon className="h-4 w-4 text-primary" />
                      </div>
                      <h3 className="font-semibold text-sm mb-2">{benefit.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem é a Comunidade */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20">
              <div className="lg:w-1/3">
                <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  Para Quem
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mt-3">
                  Uma comunidade<br />
                  para todos os níveis.
                </h2>
              </div>
              
              <div className="lg:w-2/3">
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
                  <div className="border-l-2 border-primary/30 pl-6">
                    <GraduationCap className="h-5 w-5 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Iniciantes</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Começando na programação? Aqui você encontra orientação, 
                      materiais de estudo e suporte de quem já passou pelo mesmo caminho.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-primary/30 pl-6">
                    <BookOpen className="h-5 w-5 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Estudantes</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Cursando tecnologia? Complemente sua formação acadêmica 
                      com experiências práticas e networking com profissionais.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-primary/30 pl-6">
                    <Code className="h-5 w-5 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Profissionais</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Já atua no mercado? Troque experiências com outros devs, 
                      mantenha-se atualizado e contribua com seu conhecimento.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-primary/30 pl-6">
                    <Heart className="h-5 w-5 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Entusiastas</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Apaixonado por tecnologia? Participe, aprenda e faça parte 
                      de uma comunidade que valoriza curiosidade e inovação.
                    </p>
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-card border border-border rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Comunidade Pública e Acessível</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Não há barreiras de entrada, exigência de vínculo com a empresa ou nível 
                        técnico mínimo. Qualquer pessoa interessada em tecnologia pode participar. 
                        O foco é aprendizado contínuo e evolução coletiva.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Como Participar */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                Como Participar
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-6">
                Entre para a comunidade.
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                A Cheetah Developers Brasil está presente no Discord. É simples: basta entrar no 
                servidor, escolher suas áreas de interesse e começar a interagir com outros membros. 
                Sem burocracia, sem formulários longos.
              </p>
              
              <div className="bg-card border border-border rounded-xl p-8 mb-8">
                <p className="text-sm text-muted-foreground mb-4">Link oficial da comunidade:</p>
                <a 
                  href="https://discord.gg/rY3HUQpECS" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 font-medium text-lg break-all"
                >
                  https://discord.gg/rY3HUQpECS
                </a>
              </div>
              
              <a 
                href="https://discord.gg/rY3HUQpECS" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                >
                  Entrar no Discord
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Final */}
      <AnimatedSection animation="fade-up">
        <section className="py-24 px-4 bg-secondary/30">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Faça parte de um programa de comunidade público, estruturado e mantido por uma 
                empresa de tecnologia, onde o aprendizado é contínuo e a evolução acontece de forma coletiva.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Cheetah Developers Brasil
              </h2>
              <p className="text-xl text-primary font-medium mb-10">
                Onde desenvolvedores evoluem juntos.
              </p>
              <a 
                href="https://discord.gg/rY3HUQpECS" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                >
                  Entrar para a Comunidade (Discord)
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Developers;
