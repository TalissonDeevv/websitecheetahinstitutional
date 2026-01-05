import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const Team = () => {
  const leadership = [
    {
      name: "Talisson Souza",
      role: "CEO",
      description: "Fundador. Define a visão estratégica e lidera a operação.",
      email: "talissondeveloper@gmail.com"
    },
    {
      name: "José Jorge",
      role: "CTO",
      description: "Responsável pela arquitetura técnica e decisões de tecnologia.",
      email: "J.jfalasco77@gmail.com"
    },
    {
      name: "Vitor Mapeli",
      role: "COO",
      description: "Gestão de operações, processos internos e entrega de projetos.",
      email: null
    },
    {
      name: "Bruno Nugget",
      role: "CCO",
      description: "Comunicação, relacionamento com clientes e identidade de marca.",
      email: "snoows2marina@outlook.com"
    },
    {
      name: "Ruan Oliveira",
      role: "SSO",
      description: "Administração, Moderação e Gerenciamento.",
      email: null
    }
  ];

  const devTeam = [
    { name: "Caio Frederico", role: "Back-end Developer", stack: ["Java", "SpringBoot", "PostgreSQL", "Docker", "AWS"] },
    { name: "Kleber Laranjeira", role: "Full Stack Developer", stack: ["JavaScript", "React", "Java", "Node.js", "TypeScript", "Python", "Kotlin"] },
    { name: "Matheus Yuri", role: "Back-end Developer / DevOps e Arquiteto Cloud", stack: ["Java", "Python", "Shellscript", "framework Springboot"] }
  ];

  const supportTeam = [
    { name: "Camile Vitória Barros", role: "Assistente de Suporte Adminstrativo" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Cheetah Solutions | Equipes Técnicas"
        description="Conheça a equipe técnica da Cheetah Solutions: desenvolvedores, liderança e profissionais de suporte comprometidos com excelência."
        ogTitle="Equipes Técnicas | Cheetah Solutions"
        ogDescription="Uma equipe técnica com foco em resultado. Profissionais que entendem de código e de negócio."
        ogUrl="/equipe"
      />
      <Header />
      
      {/* Hero */}
      <AnimatedSection animation="fade-up">
        <section className="pt-28 pb-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <p className="text-xs text-primary uppercase tracking-[0.2em] mb-6 font-medium">
                Quem faz acontecer
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-8">
                Uma equipe técnica<br />
                <span className="text-primary">com foco em resultado.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Profissionais que entendem de código e de negócio. 
                Sem hierarquia desnecessária, com comunicação direta.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Leadership */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="mb-12">
              <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                Liderança
              </span>
              <h2 className="text-2xl font-bold mt-3">
                Direção executiva.
              </h2>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {leadership.map((member, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="border-l-2 border-primary/30 pl-6 py-4">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <span className="text-primary text-sm font-medium">{member.role}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {member.description}
                  </p>
                  {member.email && (
                    <a 
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-3 w-3" />
                      {member.email}
                    </a>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Dev Team */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <AnimatedSection animation="fade-right">
                <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  Desenvolvimento
                </span>
                <h2 className="text-2xl font-bold mt-3 leading-tight">
                  Equipe técnica.
                </h2>
                <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                  Desenvolvedores especializados em diferentes stacks 
                  para atender qualquer tipo de projeto.
                </p>
              </AnimatedSection>
            </div>
            
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-3 gap-6">
                {devTeam.map((member, index) => (
                  <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                    <div className="bg-card border border-border rounded-lg p-6 h-full">
                      <h3 className="font-semibold mb-1">{member.name}</h3>
                      <p className="text-primary text-sm mb-4">{member.role}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {member.stack.map((tech, i) => (
                          <span 
                            key={i} 
                            className="text-xs bg-secondary text-muted-foreground px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl">
            <AnimatedSection animation="fade-up">
              <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                Suporte
              </span>
              <h2 className="text-2xl font-bold mt-3 mb-8">
                Atendimento ao cliente.
              </h2>
            </AnimatedSection>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {supportTeam.map((member, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  <div className="flex items-center gap-4 bg-card border border-border rounded-lg p-5">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection animation="fade-up">
        <section className="py-20 px-4 bg-secondary/30">
          <div className="container mx-auto">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Quer fazer parte?
              </h2>
              <p className="text-muted-foreground mb-6">
                Estamos sempre procurando pessoas qualificadas que compartilham 
                nosso compromisso com qualidade técnica.
              </p>
              <Link to="/contato">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Entrar em contato
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Team;
