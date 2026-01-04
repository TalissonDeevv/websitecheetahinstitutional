import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "Como Escolher o Bot Ideal para seu Servidor Discord",
    excerpt: "Critérios práticos para escolher o bot certo que vai transformar seu servidor em uma comunidade ativa e engajada.",
    date: "25 Jan 2025",
    author: "Equipe Cheetah",
    slug: "como-escolher-bot-ideal",
  };

  const posts = [
    {
      id: 2,
      title: "Tendências em Desenvolvimento Web para 2025",
      excerpt: "React 19, Next.js 15 e as tecnologias que estão moldando o futuro do desenvolvimento.",
      date: "20 Jan 2025",
      author: "Talisson Souza",
      slug: "tendencias-desenvolvimento-web-2025",
    },
    {
      id: 3,
      title: "Automação de Processos com Sistemas Personalizados",
      excerpt: "Como sistemas sob medida revolucionam a eficiência operacional.",
      date: "18 Jan 2025",
      author: "José Jorge",
      slug: "automacao-processos-sistemas",
    },
    {
      id: 4,
      title: "Segurança Digital: Protegendo Dados em 2025",
      excerpt: "Melhores práticas para proteger informações sensíveis.",
      date: "15 Jan 2025",
      author: "Vitor Mapeli",
      slug: "seguranca-digital-2025",
    },
    {
      id: 5,
      title: "Integrações de API: Conectando Sistemas",
      excerpt: "Guia sobre REST, GraphQL e webhooks para integrações robustas.",
      date: "12 Jan 2025",
      author: "Guilherme Garrido",
      slug: "integracoes-api-sistemas",
    },
    {
      id: 6,
      title: "Design UX/UI: Experiências que Convertem",
      excerpt: "Como criar interfaces intuitivas que transformam visitantes em clientes.",
      date: "10 Jan 2025",
      author: "Bruno Nugget",
      slug: "design-ux-ui-experiencias",
    },
    {
      id: 7,
      title: "Monitoramento e Analytics",
      excerpt: "Implementação de sistemas de análise para decisões baseadas em dados.",
      date: "8 Jan 2025",
      author: "Ruan",
      slug: "monitoramento-analytics-sucesso",
    },
    {
      id: 8,
      title: "Migração para Cloud: Estratégias",
      excerpt: "Como migrar para a nuvem de forma segura e eficiente.",
      date: "5 Jan 2025",
      author: "Equipe Cheetah",
      slug: "migracao-cloud-estrategias",
    },
    {
      id: 9,
      title: "Chatbots com IA no Atendimento",
      excerpt: "Como IA pode melhorar o atendimento e reduzir custos.",
      date: "3 Jan 2025",
      author: "Talisson Souza",
      slug: "chatbots-ia-atendimento",
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Cheetah Solutions | Blogs e Artigos"
        description="Artigos sobre desenvolvimento de software, tecnologia e boas práticas. Conteúdo técnico direto ao ponto."
        ogTitle="Blogs e Artigos"
        ogDescription="Conteúdo técnico sobre desenvolvimento, tecnologia e boas práticas. Direto ao ponto."
        ogUrl="/blog"
      />
      <Header />
      
      {/* Hero */}
      <AnimatedSection animation="fade-up">
        <section className="pt-28 pb-12 px-4">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <p className="text-xs text-primary uppercase tracking-[0.2em] mb-6 font-medium">
                Blog
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
                Conteúdo técnico<br />
                <span className="text-primary">sem enrolação.</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Artigos sobre desenvolvimento, tecnologia e boas práticas. 
                Direto ao ponto.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Featured Post */}
      <AnimatedSection animation="fade-up" delay={100}>
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <Link 
              to={`/blog/${featuredPost.slug}`}
              className="block group"
            >
              <div className="bg-card border border-border rounded-xl p-8 md:p-12 hover:border-primary/50 transition-colors max-w-4xl">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span>{featuredPost.date}</span>
                  <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                  <span>{featuredPost.author}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl leading-relaxed">
                  {featuredPost.excerpt}
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

      {/* Posts Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="mb-10">
              <h2 className="text-xl font-semibold">Todos os artigos</h2>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <AnimatedSection key={post.id} animation="fade-up" delay={index * 50}>
                <Link 
                  to={`/blog/${post.slug}`}
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

export default Blog;
