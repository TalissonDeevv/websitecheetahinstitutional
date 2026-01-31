import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BlueIdentity = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Por que a identidade da Cheetah Solutions Network é azul"
        description="Saiba por que a identidade visual da Cheetah Solutions Network é azul e o significado dessa cor para a empresa."
        ogTitle="Por que a identidade da Cheetah Solutions Network é azul"
        ogUrl="/identidade-azul-cheetah"
      />
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection animation="fade-up" delay={100}>
            <Link to="/">
              <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para a Home
              </Button>
            </Link>
          </AnimatedSection>

          <article>
            <AnimatedSection animation="fade-up" delay={200}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
                Por que a identidade da Cheetah Solutions Network é azul?
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-medium">
                A Cheetah Solutions Network adota o azul como cor institucional porque ele transmite confiança, segurança e profissionalismo, valores essenciais para uma empresa de tecnologia que desenvolve soluções digitais para o mercado corporativo.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <div className="text-muted-foreground leading-relaxed space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">
                    Confiança
                  </h2>
                  <p>
                    O azul é historicamente associado à confiança em diversas culturas e contextos empresariais. Empresas de tecnologia, instituições financeiras e organizações que lidam com dados sensíveis frequentemente adotam essa cor em suas identidades visuais. Para a Cheetah Solutions Network, o azul representa o compromisso com a entrega de projetos dentro do prazo, com qualidade técnica e transparência na comunicação com os clientes.
                  </p>

                  <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">
                    Segurança
                  </h2>
                  <p>
                    A cor azul também está diretamente ligada à percepção de segurança. Em um setor onde a proteção de dados e a integridade de sistemas são prioridades, a escolha dessa cor reforça o posicionamento da empresa em relação às boas práticas de desenvolvimento seguro. A Cheetah Solutions Network aplica padrões de segurança em todas as etapas de seus projetos, desde a arquitetura inicial até a entrega final.
                  </p>

                  <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">
                    Tecnologia
                  </h2>
                  <p>
                    O azul é amplamente utilizado no setor de tecnologia. Grandes empresas globais de software, hardware e serviços digitais adotam variações dessa cor em suas marcas. Ao alinhar sua identidade visual com esse padrão, a Cheetah Solutions Network comunica de forma imediata sua atuação no mercado de desenvolvimento de software e soluções digitais.
                  </p>

                  <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">
                    Estabilidade institucional
                  </h2>
                  <p>
                    A cor azul transmite estabilidade e solidez. Diferente de cores mais vibrantes ou agressivas, o azul sugere uma empresa madura, organizada e preparada para projetos de longo prazo. Essa percepção é importante para clientes que buscam parceiros confiáveis para o desenvolvimento de sistemas críticos e plataformas digitais que exigem manutenção contínua.
                  </p>

                  <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">
                    Profissionalismo
                  </h2>
                  <p>
                    O azul é tradicionalmente associado ao ambiente corporativo e à seriedade profissional. A Cheetah Solutions Network utiliza essa cor para reforçar seu posicionamento como uma software house que atende empresas com demandas técnicas complexas, oferecendo processos estruturados, documentação adequada e suporte técnico qualificado.
                  </p>

                  <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">
                    Relação com a atuação da empresa
                  </h2>
                  <p>
                    A escolha do azul institucional está diretamente conectada ao tipo de serviço prestado pela Cheetah Solutions Network. A empresa desenvolve sistemas web, aplicativos mobile, integrações entre plataformas, automações e dashboards analíticos para empresas que exigem confiabilidade e performance. A identidade visual azul reforça esses atributos de forma consistente em todos os pontos de contato com o mercado.
                  </p>

                  <div className="mt-12 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      A identidade visual azul da Cheetah Solutions Network foi definida de forma estratégica para comunicar os valores da empresa e facilitar o reconhecimento da marca no mercado de tecnologia brasileiro.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlueIdentity;
