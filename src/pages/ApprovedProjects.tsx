import { useState } from "react";
import { ExternalLink, Award, Bot, Globe, CreditCard, Code2, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { WebPageJsonLd } from "@/components/JsonLd";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

// Filtros disponíveis
const categoryFilters: { label: string; value: ProjectCategory | "all"; icon: React.ComponentType<{ className?: string }> }[] = [
  { label: "Todos", value: "all", icon: LayoutGrid },
  { label: "Bot", value: "Bot", icon: Bot },
  { label: "Plataforma", value: "Plataforma", icon: Globe },
  { label: "Gateway", value: "Gateway", icon: CreditCard },
  { label: "Framework", value: "Framework", icon: Code2 },
];

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
];

const ApprovedProjects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">("all");

  const filteredProjects = activeFilter === "all" 
    ? approvedProjects 
    : approvedProjects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Projetos Aprovados | Cheetah Solutions Network"
        description="Conheça os projetos aprovados e desenvolvidos dentro da Cheetah Solutions Network, com soluções digitais focadas em performance, escalabilidade e inovação."
        ogTitle="Projetos Aprovados | Cheetah Solutions Network"
        ogDescription="Conheça os projetos aprovados e desenvolvidos dentro da Cheetah Solutions Network, com soluções digitais focadas em performance, escalabilidade e inovação."
        ogUrl="/developers/projetos"
        canonical="/developers/projetos"
      />
      <WebPageJsonLd 
        title="Projetos Aprovados | Cheetah Solutions Network"
        description="Conheça os projetos aprovados e desenvolvidos dentro da Cheetah Solutions Network, com soluções digitais focadas em performance, escalabilidade e inovação."
        url="/developers/projetos"
      />
      
      <Header />

      {/* Hero Section */}
      <AnimatedSection animation="fade-up">
        <section className="pt-28 pb-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <span className="text-xs text-primary uppercase tracking-[0.2em] mb-6 font-medium block">
                Cheetah Developers Brasil
              </span>
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
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div className="max-w-xl">
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

              {/* Filtros por categoria */}
              <div className="flex flex-wrap gap-2">
                {categoryFilters.map((filter) => {
                  const FilterIcon = filter.icon;
                  const isActive = activeFilter === filter.value;
                  return (
                    <Button
                      key={filter.value}
                      variant={isActive ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveFilter(filter.value)}
                      className={`transition-all ${
                        isActive 
                          ? "bg-primary text-primary-foreground" 
                          : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                      }`}
                    >
                      <FilterIcon className="h-4 w-4 mr-2" />
                      {filter.label}
                    </Button>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>

          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => {
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
          ) : (
            <AnimatedSection animation="fade-up">
              <div className="text-center py-16">
                <p className="text-muted-foreground">
                  Nenhum projeto encontrado para esta categoria.
                </p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApprovedProjects;
