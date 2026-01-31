import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const WhyCheetah = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Por que a Cheetah Solutions Network usa um guepardo como mascote"
        description="Entenda o motivo da Cheetah Solutions Network usar um guepardo como mascote e o que esse símbolo representa para a empresa."
        ogTitle="Por que a Cheetah Solutions Network usa um guepardo como mascote"
        ogUrl="/por-que-usamos-guepardo"
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
                Por que a Cheetah Solutions Network usa um guepardo como mascote?
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-medium">
                A Cheetah Solutions Network adota o guepardo como mascote porque ele representa os valores fundamentais da empresa: velocidade de execução, precisão técnica e alta performance em cada projeto desenvolvido.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <div className="text-muted-foreground leading-relaxed space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">
                    Velocidade na execução
                  </h2>
                  <p>
                    O guepardo é reconhecido como o animal terrestre mais rápido do mundo, podendo atingir velocidades superiores a 100 km/h em poucos segundos. Essa característica reflete diretamente a metodologia de trabalho da Cheetah Solutions Network, que prioriza entregas ágeis sem comprometer a qualidade. A empresa estrutura seus processos para reduzir tempo de desenvolvimento e acelerar a implementação de soluções digitais.
                  </p>

                  <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">
                    Precisão técnica
                  </h2>
                  <p>
                    Além da velocidade, o guepardo é conhecido por sua precisão durante a caça. Cada movimento é calculado com exatidão para garantir o resultado esperado. Na Cheetah Solutions Network, esse atributo se traduz em desenvolvimento técnico criterioso, código limpo, arquitetura bem planejada e atenção aos detalhes em cada etapa do projeto.
                  </p>

                  <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">
                    Alta performance
                  </h2>
                  <p>
                    A performance do guepardo não se limita à velocidade máxima, mas também à sua capacidade de manter eficiência em diferentes condições. A empresa aplica esse conceito ao desenvolver sistemas escaláveis, otimizados e preparados para suportar demandas crescentes sem perda de desempenho.
                  </p>

                  <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">
                    Eficiência estratégica
                  </h2>
                  <p>
                    O guepardo não desperdiça energia. Ele analisa o cenário, identifica a melhor oportunidade e age no momento certo. Essa abordagem estratégica é aplicada pela Cheetah Solutions Network no planejamento de projetos, na definição de escopo e na alocação de recursos, garantindo que cada decisão agregue valor ao resultado final.
                  </p>

                  <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">
                    Tomada de decisão rápida
                  </h2>
                  <p>
                    Em um mercado de tecnologia em constante transformação, a capacidade de tomar decisões rápidas e assertivas é fundamental. O guepardo simboliza essa agilidade decisória, representando a postura da empresa frente a desafios técnicos e mudanças de cenário durante o desenvolvimento de projetos.
                  </p>

                  <div className="mt-12 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      A escolha do guepardo como mascote não é meramente estética. Ela representa um compromisso institucional com os valores que orientam a atuação da Cheetah Solutions Network no mercado de tecnologia brasileiro.
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

export default WhyCheetah;
