import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogContent from "@/components/blog/BlogContent";
import SEO from "@/components/SEO";
import { articlesData } from "@/data/articlesData";

const ArticlePost = () => {
  const { slug } = useParams();

  const article = articlesData[slug || ""];

  if (!article) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
          <p className="text-muted-foreground">O artigo que você procura não existe.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={article.seoTitle}
        description={article.seoDescription}
        ogTitle={article.seoTitle}
        ogDescription={article.seoDescription}
        ogUrl={`/artigos/${slug}`}
      />
      <Header />
      <BlogHeader 
        title={article.title}
        date={article.date}
        author={article.author}
        readTime={article.readTime}
      />
      <BlogContent>{article.content}</BlogContent>
      <Footer />
    </div>
  );
};

export default ArticlePost;