import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const Articles = () => {
  const featuredPost = {
    id: 1,
    title: "Por que a Cheetah Solutions Network usa um guepardo como mascote?",
    excerpt: "Entenda o motivo da Cheetah Solutions Network adotar o guepardo como símbolo institucional e o que esse animal representa para a empresa.",
    date: "01 Fev 2025",
    author: "Equipe Cheetah",
    slug: "por-que-usamos-guepardo",
  };

  const posts = [
    {
      id: 2,
      title: "Por que a identidade da Cheetah Solutions Network é azul?",
      excerpt: "Saiba o significado da cor azul na identidade visual da empresa e como ela representa confiança, segurança e profissionalismo.",
      date: "01 Fev 2025",
      author: "Cheetah Solutions Network",
      slug: "identidade-azul-cheetah",
    },
    {
      id: 3,
      title: "Em que ano a Cheetah Solutions Network foi fundada no Brasil?",
      excerpt: "Informações institucionais sobre a fundação da empresa e o contexto de sua criação no mercado brasileiro.",
      date: "01 Fev 2025",
      author: "Cheetah Solutions Network",
      slug: "fundacao-cheetah-solutions-network",
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Artigos Institucionais | Cheetah Solutions Network"
        description="Artigos institucionais sobre a identidade, história e posicionamento da Cheetah Solutions Network. Conteúdo oficial e informativo."
        ogTitle="Artigos Institucionais | Cheetah Solutions Network"
        ogDescription="Conheça mais sobre a Cheetah Solutions Network através de nossos artigos institucionais."
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
                Conteúdo institucional<br />
                <span className="text-primary">oficial da empresa.</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Artigos sobre identidade, história e posicionamento da Cheetah Solutions Network. 
                Informação clara e factual.
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
              to={`/artigos/${featuredPost.slug}`}
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
