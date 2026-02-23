import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const Articles = () => {
  const technicalPosts = [
    {
      id: 101,
      title: "Arquitetura de software sob medida: quando e por que investir",
      excerpt: "Como decisões arquiteturais no início de um projeto impactam diretamente a escalabilidade, manutenção e custo operacional a longo prazo.",
      date: "23 Fev 2025",
      author: "Talisson Souza",
      slug: "arquitetura-sob-medida",
    },
    {
      id: 102,
      title: "Performance em aplicações web: fundamentos e boas práticas",
      excerpt: "Técnicas de otimização de performance que aplicamos em projetos reais, desde carregamento inicial até interações complexas.",
      date: "23 Fev 2025",
      author: "Talisson Souza",
      slug: "performance-web",
    },
    {
      id: 103,
      title: "Integração de sistemas: desafios e abordagens técnicas",
      excerpt: "Como conectar sistemas distintos de forma confiável, segura e escalável em ambientes corporativos.",
      date: "23 Fev 2025",
      author: "Talisson Souza",
      slug: "integracao-sistemas",
    },
    {
      id: 104,
      title: "Cloud computing para empresas: infraestrutura e decisões técnicas",
      excerpt: "Critérios técnicos para escolha de infraestrutura cloud e como isso afeta o desempenho e o custo de operação.",
      date: "23 Fev 2025",
      author: "Talisson Souza",
      slug: "cloud-computing-empresas",
    },
    {
      id: 105,
      title: "Governança técnica em projetos de software",
      excerpt: "Como estruturar padrões, documentação e processos para manter qualidade em projetos de longa duração.",
      date: "23 Fev 2025",
      author: "Talisson Souza",
      slug: "governanca-tecnica",
    },
    {
      id: 106,
      title: "Desenvolvimento sob medida vs. soluções prontas: análise técnica",
      excerpt: "Comparação objetiva entre construir software personalizado e utilizar plataformas prontas para diferentes contextos de negócio.",
      date: "23 Fev 2025",
      author: "Talisson Souza",
      slug: "sob-medida-vs-prontas",
    },
  ];

  const institutionalPosts = [
    {
      id: 1,
      title: "O que é a Cheetah Solutions Network e como a empresa atua",
      excerpt: "Entenda o que é a Cheetah Solutions Network, como a empresa surgiu e de que forma atua no mercado brasileiro de tecnologia.",
      date: "01 Fev 2025",
      author: "Talisson Souza",
      slug: "atuacao",
    },
    {
      id: 2,
      title: "Qual é a missão, visão e valores da Cheetah Solutions Network",
      excerpt: "Conheça os princípios que orientam a atuação da empresa no mercado de tecnologia.",
      date: "01 Fev 2025",
      author: "Talisson Souza",
      slug: "missao",
    },
    {
      id: 3,
      title: "Como funciona o ecossistema de projetos da Cheetah Solutions Network",
      excerpt: "Entenda como a empresa organiza seus projetos próprios, experimentações e soluções internas.",
      date: "01 Fev 2025",
      author: "Talisson Souza",
      slug: "ecossistema",
    },
    {
      id: 4,
      title: "Qual é o posicionamento da Cheetah Solutions Network no mercado",
      excerpt: "Saiba como a empresa se posiciona no mercado de tecnologia brasileiro.",
      date: "01 Fev 2025",
      author: "Talisson Souza",
      slug: "posicionamento",
    },
    {
      id: 5,
      title: "Por que a Cheetah Solutions Network não atua como agência tradicional",
      excerpt: "Entenda as diferenças entre uma software house e uma agência tradicional.",
      date: "01 Fev 2025",
      author: "Talisson Souza",
      slug: "agencia-tradicional",
    },
    {
      id: 6,
      title: "Por que a Cheetah Solutions Network usa um guepardo como mascote?",
      excerpt: "Entenda o motivo da Cheetah Solutions Network adotar o guepardo como símbolo institucional.",
      date: "01 Fev 2025",
      author: "Talisson Souza",
      slug: "guepardo",
    },
    {
      id: 7,
      title: "Por que a identidade da Cheetah Solutions Network é azul?",
      excerpt: "Saiba o significado da cor azul na identidade visual da empresa.",
      date: "01 Fev 2025",
      author: "Talisson Souza",
      slug: "identidade",
    },
    {
      id: 8,
      title: "Em que ano a Cheetah Solutions Network foi fundada no Brasil?",
      excerpt: "Informações institucionais sobre a fundação da empresa no mercado brasileiro.",
      date: "01 Fev 2025",
      author: "Talisson Souza",
      slug: "fundacao",
    },
  ];

  const featuredTechnical = technicalPosts[0];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Blog de Tecnologia e Engenharia de Software | Cheetah Solutions Network"
        description="Artigos sobre arquitetura de software, desenvolvimento sob medida, performance, sistemas complexos e tecnologia empresarial. Conteúdo técnico e institucional da Cheetah Solutions Network."
        ogTitle="Blog de Tecnologia e Engenharia de Software | Cheetah Solutions Network"
        ogDescription="Artigos sobre arquitetura de software, desenvolvimento sob medida, performance, escalabilidade e tecnologia empresarial."
        ogUrl="/artigos"
      />
      <Header />
      
      {/* Hero */}
      <AnimatedSection animation="fade-up">
        <section className="pt-28 pb-12 px-4">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <p className="text-xs text-primary uppercase tracking-[0.2em] mb-6 font-medium">
                Artigos
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
                Artigos e insights sobre<br />
                <span className="text-primary">tecnologia e engenharia.</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Conteúdos técnicos, estratégicos e institucionais da Cheetah Solutions Network. 
                Arquitetura de software, performance, escalabilidade e boas práticas de desenvolvimento.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Featured Technical Post */}
      <AnimatedSection animation="fade-up" delay={100}>
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <Link 
              to={`/artigos/${featuredTechnical.slug}`}
              className="block group"
            >
              <div className="bg-card border border-border rounded-xl p-8 md:p-12 hover:border-primary/50 transition-colors max-w-4xl">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span>{featuredTechnical.date}</span>
                  <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                  <span>{featuredTechnical.author}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {featuredTechnical.title}
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl leading-relaxed">
                  {featuredTechnical.excerpt}
                </p>
                <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-3 gap-2 transition-all">
                  Ler artigo
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      </AnimatedSection>

      {/* Technical Posts Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="mb-10">
              <h2 className="text-xl font-semibold">Artigos Técnicos e Estratégicos</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Engenharia de software, arquitetura, performance, cloud e boas práticas de desenvolvimento.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalPosts.slice(1).map((post, index) => (
              <AnimatedSection key={post.id} animation="fade-up" delay={index * 50}>
                <Link 
                  to={`/artigos/${post.slug}`}
                  className="group block h-full"
                >
                  <article className="bg-card border border-border rounded-lg p-6 h-full hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                      <span>{post.author}</span>
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Posts Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="mb-10">
              <h2 className="text-xl font-semibold">Conteúdo Institucional</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Informações oficiais sobre identidade, posicionamento e estrutura da empresa.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {institutionalPosts.map((post, index) => (
              <AnimatedSection key={post.id} animation="fade-up" delay={index * 50}>
                <Link 
                  to={`/artigos/${post.slug}`}
                  className="group block h-full"
                >
                  <article className="bg-card border border-border rounded-lg p-6 h-full hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                      <span>{post.author}</span>
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Articles;
