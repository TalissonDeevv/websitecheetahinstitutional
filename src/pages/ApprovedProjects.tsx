import { ArrowLeft, ExternalLink, Award, Bot, Globe, CreditCard, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { WebPageJsonLd } from "@/components/JsonLd";

// Categorias disponíveis para projetos
type ProjectCategory = "Bot" | "Plataforma" | "Sistema Web" | "Gateway" | "Framework" | "Outro";

// Estrutura escalável para projetos aprovados
interface ApprovedProject {
  id: string;
  name: string;
  description: string;
  category: ProjectCategory;
  link?: string;
  image?: string;
  featured?: boolean;
}

// Ícone baseado na categoria
const getCategoryIcon = (category: ProjectCategory) => {
  switch (category) {
    case "Bot":
      return Bot;
    case "Plataforma":
      return Globe;
    case "Gateway":
      return CreditCard;
    case "Framework":
      return Code2;
    case "Sistema Web":
      return Globe;
    default:
      return Globe;
  }
};

// Lista centralizada de projetos aprovados
const approvedProjects: ApprovedProject[] = [
  {
    id: "nex-dev",
    name: "NexDev",
    description: "A NexDev é uma rede social de conexões entre desenvolvedores, projetada para unir pessoas dos mesmos interesses e criar pontes de comunicação. Com ele, você pode conversar por meio de posts por meio de uma rede social robusta de pessoas que são apaixonadas por programação.",
    category: "Plataforma",
    link: "https://nexdev.social",
    image: "https://i.ibb.co/yctNJzWQ/image.png",
  },
  {
    id: "quack-pay",
    name: "Quack Pay",
    description: "A Quack Pay é um gateway de pagamento criado para oferecer eficiência e transparência, com taxa fixa de R$ 0,80 por transação via PIX (entrada e saída), garantindo previsibilidade e controle financeiro para o seu negócio.",
    category: "Gateway",
    link: "https://quackpay.com.br",
    image: "https://i.ibb.co/ZpbgCWjg/image.png",
    featured: true,
  },
  {
    id: "bix-bot",
    name: "Brix Bot",
    description: "Brix é um bot para Discord que traz a experiência de ter um Pokémon vivo no servidor, interagindo, organizando e animando a comunidade com comandos úteis, automações, personalização, entretenimento e integração com IA, tornando o ambiente mais dinâmico e divertido.",
    category: "Bot",
    link: "https://brixbot.xyz",
    image: "https://i.ibb.co/N63z0jt3/image.png",
  },
  {
    id: "azura-js",
    name: "Azura JS",
    description: "O AzuraJS é um framework moderno para criação de APIs, TypeScript-first e zero dependências, criado com foco total em performance, segurança e experiência do desenvolvedor.",
    category: "Framework",
    link: "https://azura.js.org/",
    image: "https://i.ibb.co/svp2w6sV/image.png",
    featured: true,
  },
];

const ApprovedProjects = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Projetos Aprovados | Cheetah Solutions Network"
        description="Conheça os projetos aprovados e desenvolvidos dentro da Cheetah Solutions Network, com soluções digitais focadas em performance, escalabilidade e inovação."
        ogTitle="Projetos Aprovados | Cheetah Solutions Network"
        ogDescription="Conheça os projetos aprovados e desenvolvidos dentro da Cheetah Solutions Network, com soluções digitais focadas em performance, escalabilidade e inovação."
        ogUrl="/developers/projetos-aprovados"
        canonical="/developers/projetos-aprovados"
      />
      <WebPageJsonLd 
        title="Projetos Aprovados | Cheetah Solutions Network"
        description="Conheça os projetos aprovados e desenvolvidos dentro da Cheetah Solutions Network, com soluções digitais focadas em performance, escalabilidade e inovação."
        url="/developers/projetos-aprovados"
      />

      {/* Hero Section */}
      <AnimatedSection animation="fade-up">
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <p className="text-xs text-primary uppercase tracking-[0.2em] mb-6 font-medium">
                Cheetah Developers Brasil
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
                Projetos<br />
                <span className="text-primary">Aprovados</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Conheça os projetos que foram aprovados dentro da Cheetah Solutions Network. 
                Soluções digitais desenvolvidas por membros da nossa comunidade, com foco em 
                performance, escalabilidade e inovação técnica.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Projetos Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-xl mb-12">
              <h2 className="text-2xl md:text-3xl font-bold">
                Soluções desenvolvidas<br />
                pela comunidade.
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Cada projeto listado passou por um processo de aprovação interno, 
                garantindo qualidade técnica e alinhamento com os valores da 
                Cheetah Solutions Network.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approvedProjects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category);
              return (
                <AnimatedSection key={project.id} animation="fade-up" delay={index * 100}>
                  <article className={`group bg-card border rounded-xl overflow-hidden transition-colors h-full flex flex-col relative ${project.featured ? 'border-primary ring-2 ring-primary/20' : 'border-border hover:border-primary/50'}`}>
                    {project.featured && (
                      <div className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                        <Award className="h-3 w-3" />
                        Recomendado
                      </div>
                    )}
                    {project.image && (
                      <div className="aspect-video overflow-hidden bg-secondary/50">
                        <img 
                          src={project.image} 
                          alt={`${project.name} - Projeto aprovado da Cheetah Solutions Network`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center">
                          <CategoryIcon className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-3">{project.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-4">
                        {project.description}
                      </p>
                      {project.link && (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                        >
                          Conhecer solução
                          <ExternalLink className="ml-2 h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Back Button Section */}
      <AnimatedSection animation="fade-up">
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="flex justify-center">
              <Link to="/developers">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-border text-muted-foreground hover:bg-secondary hover:text-foreground font-medium"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar para Developers
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default ApprovedProjects;
