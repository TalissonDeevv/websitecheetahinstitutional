import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FoundingYear = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Ano de fundação da Cheetah Solutions Network no Brasil"
        description="Veja em que ano a Cheetah Solutions Network foi fundada no Brasil e informações institucionais da empresa."
        ogTitle="Ano de fundação da Cheetah Solutions Network no Brasil"
        ogUrl="/fundacao-cheetah-solutions-network"
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
                Em que ano a Cheetah Solutions Network foi fundada no Brasil?
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-medium">
                A Cheetah Solutions Network foi fundada no Brasil em 2024, conforme registro institucional da empresa. A fundação marcou o início das operações de uma software house focada em desenvolvimento de soluções digitais sob medida para o mercado corporativo brasileiro.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <div className="text-muted-foreground leading-relaxed space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">
                    Contexto da fundação
                  </h2>
                  <p>
                    A Cheetah Solutions Network surgiu em um momento de crescente demanda por soluções digitais no mercado brasileiro. Empresas de diversos segmentos passaram a buscar parceiros técnicos capazes de desenvolver sistemas personalizados, integrações entre plataformas e automações que atendessem necessidades específicas de negócio.
                  </p>

                  <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">
                    Propósito inicial
                  </h2>
                  <p>
                    Desde sua fundação, a empresa foi estruturada com o objetivo de oferecer desenvolvimento de software sob medida para empresas que necessitam de soluções técnicas que softwares prontos não conseguem atender. O foco sempre esteve em qualidade de código, arquitetura escalável e entregas dentro do prazo.
                  </p>

                  <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">
                    Modelo de atuação
                  </h2>
                  <p>
                    A Cheetah Solutions Network foi concebida como uma software house que combina expertise técnica com processos de gestão estruturados. Desde o início, a empresa adotou metodologias que permitem transparência na comunicação com clientes, acompanhamento de progresso e documentação adequada de cada projeto.
                  </p>

                  <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">
                    Áreas de atuação desde a fundação
                  </h2>
                  <p>
                    Desde 2024, a empresa atua no desenvolvimento de sistemas web, aplicativos mobile, bots para plataformas de comunicação, integrações entre sistemas, dashboards analíticos e soluções de e-commerce. Cada área foi incorporada ao portfólio com base na demanda identificada no mercado e na capacidade técnica da equipe.
                  </p>

                  <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">
                    Sede e operação
                  </h2>
                  <p>
                    A Cheetah Solutions Network opera no Brasil com uma estrutura que permite atendimento remoto a clientes de diferentes regiões do país. O modelo de trabalho adotado desde a fundação prioriza comunicação eficiente, entregas incrementais e flexibilidade para atender projetos de diferentes portes e complexidades.
                  </p>

                  <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">
                    Evolução desde a fundação
                  </h2>
                  <p>
                    Desde 2024, a empresa expandiu seu portfólio de serviços, ampliou sua equipe técnica e consolidou parcerias com clientes de diferentes segmentos. O crescimento foi orientado pela demanda do mercado e pela capacidade de manter os padrões de qualidade estabelecidos no momento da fundação.
                  </p>

                  <div className="mt-12 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      A fundação da Cheetah Solutions Network em 2024 representa o início de uma trajetória focada em oferecer soluções digitais de qualidade para empresas brasileiras que buscam parceiros técnicos confiáveis.
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

export default FoundingYear;
