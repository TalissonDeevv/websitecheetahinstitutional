import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogContent from "@/components/blog/BlogContent";
import SEO from "@/components/SEO";
import guepardoMascote from "@/assets/guepardo-mascote.png";

const ArticlePost = () => {
  const { slug } = useParams();

  const articles: Record<string, {
    title: string;
    date: string;
    author: string;
    readTime: string;
    seoTitle: string;
    seoDescription: string;
    content: React.ReactNode;
  }> = {
    "por-que-usamos-guepardo": {
      title: "Por que a Cheetah Solutions Network usa um guepardo como mascote?",
      date: "01 de Fevereiro, 2025",
      author: "Talisson Souza",
      readTime: "5 min de leitura",
      seoTitle: "Por que a Cheetah Solutions Network usa um guepardo como mascote",
      seoDescription: "Entenda o motivo da Cheetah Solutions Network usar um guepardo como mascote e o que esse símbolo representa para a empresa.",
      content: (
        <>
          <p className="text-lg font-medium text-foreground">
            A Cheetah Solutions Network adota o guepardo como mascote porque ele representa os valores fundamentais da empresa: velocidade de execução, precisão técnica e alta performance em cada projeto desenvolvido.
          </p>

          <div className="my-8 flex justify-center">
            <img 
              src={guepardoMascote} 
              alt="Guepardo, mascote da Cheetah Solutions Network"
              className="w-full max-w-2xl h-auto rounded-lg"
            />
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Velocidade na execução</h2>
          <p>
            O guepardo é reconhecido como o animal terrestre mais rápido do mundo, podendo atingir velocidades superiores a 100 km/h em poucos segundos. Essa característica reflete diretamente a metodologia de trabalho da Cheetah Solutions Network, que prioriza entregas ágeis sem comprometer a qualidade. A empresa estrutura seus processos para reduzir tempo de desenvolvimento e acelerar a implementação de soluções digitais.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Precisão técnica</h2>
          <p>
            Além da velocidade, o guepardo é conhecido por sua precisão durante a caça. Cada movimento é calculado com exatidão para garantir o resultado esperado. Na Cheetah Solutions Network, esse atributo se traduz em desenvolvimento técnico criterioso, código limpo, arquitetura bem planejada e atenção aos detalhes em cada etapa do projeto.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Alta performance</h2>
          <p>
            A performance do guepardo não se limita à velocidade máxima, mas também à sua capacidade de manter eficiência em diferentes condições. A empresa aplica esse conceito ao desenvolver sistemas escaláveis, otimizados e preparados para suportar demandas crescentes sem perda de desempenho.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Eficiência estratégica</h2>
          <p>
            O guepardo não desperdiça energia. Ele analisa o cenário, identifica a melhor oportunidade e age no momento certo. Essa abordagem estratégica é aplicada pela Cheetah Solutions Network no planejamento de projetos, na definição de escopo e na alocação de recursos, garantindo que cada decisão agregue valor ao resultado final.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Tomada de decisão rápida</h2>
          <p>
            Em um mercado de tecnologia em constante transformação, a capacidade de tomar decisões rápidas e assertivas é fundamental. O guepardo simboliza essa agilidade decisória, representando a postura da empresa frente a desafios técnicos e mudanças de cenário durante o desenvolvimento de projetos.
          </p>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              A escolha do guepardo como mascote não é meramente estética. Ela representa um compromisso institucional com os valores que orientam a atuação da Cheetah Solutions Network no mercado de tecnologia brasileiro.
            </p>
          </div>
        </>
      )
    },
    "identidade-azul-cheetah": {
      title: "Por que a identidade da Cheetah Solutions Network é azul?",
      date: "01 de Fevereiro, 2025",
      author: "Talisson Souza",
      readTime: "4 min de leitura",
      seoTitle: "Por que a identidade da Cheetah Solutions Network é azul",
      seoDescription: "Saiba por que a identidade visual da Cheetah Solutions Network é azul e o significado dessa cor para a empresa.",
      content: (
        <>
          <p className="text-lg font-medium text-foreground">
            A Cheetah Solutions Network adota o azul como cor institucional porque ele transmite confiança, segurança e profissionalismo, valores essenciais para uma empresa de tecnologia que desenvolve soluções digitais para o mercado corporativo.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Confiança</h2>
          <p>
            O azul é historicamente associado à confiança em diversas culturas e contextos empresariais. Empresas de tecnologia, instituições financeiras e organizações que lidam com dados sensíveis frequentemente adotam essa cor em suas identidades visuais. Para a Cheetah Solutions Network, o azul representa o compromisso com a entrega de projetos dentro do prazo, com qualidade técnica e transparência na comunicação com os clientes.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Segurança</h2>
          <p>
            A cor azul também está diretamente ligada à percepção de segurança. Em um setor onde a proteção de dados e a integridade de sistemas são prioridades, a escolha dessa cor reforça o posicionamento da empresa em relação às boas práticas de desenvolvimento seguro. A Cheetah Solutions Network aplica padrões de segurança em todas as etapas de seus projetos, desde a arquitetura inicial até a entrega final.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Tecnologia</h2>
          <p>
            O azul é amplamente utilizado no setor de tecnologia. Grandes empresas globais de software, hardware e serviços digitais adotam variações dessa cor em suas marcas. Ao alinhar sua identidade visual com esse padrão, a Cheetah Solutions Network comunica de forma imediata sua atuação no mercado de desenvolvimento de software e soluções digitais.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Estabilidade institucional</h2>
          <p>
            A cor azul transmite estabilidade e solidez. Diferente de cores mais vibrantes ou agressivas, o azul sugere uma empresa madura, organizada e preparada para projetos de longo prazo. Essa percepção é importante para clientes que buscam parceiros confiáveis para o desenvolvimento de sistemas críticos e plataformas digitais que exigem manutenção contínua.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Profissionalismo</h2>
          <p>
            O azul é tradicionalmente associado ao ambiente corporativo e à seriedade profissional. A Cheetah Solutions Network utiliza essa cor para reforçar seu posicionamento como uma software house que atende empresas com demandas técnicas complexas, oferecendo processos estruturados, documentação adequada e suporte técnico qualificado.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Relação com a atuação da empresa</h2>
          <p>
            A escolha do azul institucional está diretamente conectada ao tipo de serviço prestado pela Cheetah Solutions Network. A empresa desenvolve sistemas web, aplicativos mobile, integrações entre plataformas, automações e dashboards analíticos para empresas que exigem confiabilidade e performance. A identidade visual azul reforça esses atributos de forma consistente em todos os pontos de contato com o mercado.
          </p>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              A identidade visual azul da Cheetah Solutions Network foi definida de forma estratégica para comunicar os valores da empresa e facilitar o reconhecimento da marca no mercado de tecnologia brasileiro.
            </p>
          </div>
        </>
      )
    },
    "fundacao-cheetah-solutions-network": {
      title: "Em que ano a Cheetah Solutions Network foi fundada no Brasil?",
      date: "01 de Fevereiro, 2025",
      author: "Talisson Souza",
      readTime: "4 min de leitura",
      seoTitle: "Ano de fundação da Cheetah Solutions Network no Brasil",
      seoDescription: "Veja em que ano a Cheetah Solutions Network foi fundada no Brasil e informações institucionais da empresa.",
      content: (
        <>
          <p className="text-lg font-medium text-foreground">
            A Cheetah Solutions Network foi fundada no Brasil, em 2020, na cidade de Recife – Pernambuco, conforme registro institucional da empresa. A fundação marcou o início das operações de uma software house focada em desenvolvimento de soluções digitais sob medida para o mercado corporativo brasileiro.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Contexto da fundação</h2>
          <p>
            A Cheetah Solutions Network surgiu em um momento de crescente demanda por soluções digitais no mercado brasileiro. Empresas de diversos segmentos passaram a buscar parceiros técnicos capazes de desenvolver sistemas personalizados, integrações entre plataformas e automações que atendessem necessidades específicas de negócio.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Propósito inicial</h2>
          <p>
            Desde sua fundação, a empresa foi estruturada com o objetivo de oferecer desenvolvimento de software sob medida para empresas que necessitam de soluções técnicas que softwares prontos não conseguem atender. O foco sempre esteve em qualidade de código, arquitetura escalável e entregas dentro do prazo.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Modelo de atuação</h2>
          <p>
            A Cheetah Solutions Network foi concebida como uma software house que combina expertise técnica com processos de gestão estruturados. Desde o início, a empresa adotou metodologias que permitem transparência na comunicação com clientes, acompanhamento de progresso e documentação adequada de cada projeto.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Áreas de atuação desde a fundação</h2>
          <p>
            Desde 2024, a empresa atua no desenvolvimento de sistemas web, aplicativos mobile, bots para plataformas de comunicação, integrações entre sistemas, dashboards analíticos e soluções de e-commerce. Cada área foi incorporada ao portfólio com base na demanda identificada no mercado e na capacidade técnica da equipe.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Sede e operação</h2>
          <p>
            A Cheetah Solutions Network opera no Brasil com uma estrutura que permite atendimento remoto a clientes de diferentes regiões do país. O modelo de trabalho adotado desde a fundação prioriza comunicação eficiente, entregas incrementais e flexibilidade para atender projetos de diferentes portes e complexidades.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Evolução desde a fundação</h2>
          <p>
            Desde 2024, a empresa expandiu seu portfólio de serviços, ampliou sua equipe técnica e consolidou parcerias com clientes de diferentes segmentos. O crescimento foi orientado pela demanda do mercado e pela capacidade de manter os padrões de qualidade estabelecidos no momento da fundação.
          </p>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              A fundação da Cheetah Solutions Network em 2024 representa o início de uma trajetória focada em oferecer soluções digitais de qualidade para empresas brasileiras que buscam parceiros técnicos confiáveis.
            </p>
          </div>
        </>
      )
    }
  };

  const article = articles[slug || ""];

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
