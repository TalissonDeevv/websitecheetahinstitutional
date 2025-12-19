
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Como Escolher o Bot Ideal para seu Servidor Discord",
      excerpt: "Descubra os critérios essenciais para escolher o bot perfeito que vai transformar seu servidor Discord em uma comunidade engajada e ativa.",
      date: "25 de Janeiro, 2025",
      author: "Equipe Cheetah",
      slug: "como-escolher-bot-ideal",
    },
    {
      id: 2,
      title: "Tendências em Desenvolvimento Web para 2025",
      excerpt: "Explore as principais tecnologias e frameworks que estão moldando o futuro do desenvolvimento web, incluindo React 19, Next.js 15 e TypeScript avançado.",
      date: "20 de Janeiro, 2025",
      author: "Talisson Souza",
      slug: "tendencias-desenvolvimento-web-2025",
    },
    {
      id: 3,
      title: "Automação de Processos com Sistemas Personalizados",
      excerpt: "Como sistemas sob medida podem revolucionar a eficiência operacional da sua empresa através da automação inteligente e integração de APIs.",
      date: "18 de Janeiro, 2025",
      author: "José Jorge",
      slug: "automacao-processos-sistemas",
    },
    {
      id: 4,
      title: "Segurança Digital: Protegendo Dados em 2025",
      excerpt: "Aprenda as melhores práticas de segurança digital para proteger informações sensíveis em um mundo cada vez mais conectado.",
      date: "15 de Janeiro, 2025",
      author: "Vitor Mapeli",
      slug: "seguranca-digital-2025",
    },
    {
      id: 5,
      title: "Integrações de API: Conectando Sistemas Diferentes",
      excerpt: "Guia completo sobre como integrar diferentes sistemas através de APIs REST, GraphQL e webhooks para criar soluções robustas.",
      date: "12 de Janeiro, 2025",
      author: "Guilherme Garrido",
      slug: "integracoes-api-sistemas",
    },
    {
      id: 6,
      title: "Design UX/UI: Criando Experiências Memoráveis",
      excerpt: "Descubra como criar interfaces intuitivas e experiências de usuário que convertem visitantes em clientes fiéis.",
      date: "10 de Janeiro, 2025",
      author: "Bruno Nugget",
      slug: "design-ux-ui-experiencias",
    },
    {
      id: 7,
      title: "Monitoramento e Analytics: Medindo o Sucesso",
      excerpt: "Implementação de sistemas de monitoramento e análise de dados para otimizar performance e tomar decisões baseadas em dados.",
      date: "8 de Janeiro, 2025",
      author: "Ruan",
      slug: "monitoramento-analytics-sucesso",
    },
    {
      id: 8,
      title: "Migração para Cloud: Quando e Como Fazer",
      excerpt: "Estratégias para migrar seus sistemas para a nuvem de forma segura e eficiente, maximizando benefícios e minimizando riscos.",
      date: "5 de Janeiro, 2025",
      author: "Equipe Cheetah",
      slug: "migracao-cloud-estrategias",
    },
    {
      id: 9,
      title: "Chatbots Inteligentes: IA no Atendimento ao Cliente",
      excerpt: "Como implementar chatbots com inteligência artificial para melhorar o atendimento ao cliente e reduzir custos operacionais.",
      date: "3 de Janeiro, 2025",
      author: "Talisson Souza",
      slug: "chatbots-ia-atendimento",
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-8 sm:pb-16 px-4 animate-fade-in">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Nosso </span>
            <span className="text-[#0047ab]">Blog</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-4">
            Insights, dicas e novidades do mundo da tecnologia para manter você sempre atualizado
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-8 sm:py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="group bg-gradient-to-br from-[#0047ab]/10 to-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300 hover:scale-105 mobile-card">
                <CardContent className="p-4 sm:p-6">
                  <div className="bg-[#0047ab]/10 rounded-lg p-3 w-fit mb-4 border border-[#0047ab]/20">
                    <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-[#0047ab]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white group-hover:text-[#0047ab] transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                  </div>
                  <Link to={`/blog/${post.slug}`} className="block">
                    <Button className="bg-[#0047ab] hover:bg-[#0047ab]/80 text-white w-full group text-sm min-h-[44px]">
                      Ler Artigo
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
