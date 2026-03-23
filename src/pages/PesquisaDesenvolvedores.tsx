import { Search, Users, Target, Shield, ClipboardList, ArrowRight, ExternalLink, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const PesquisaDesenvolvedores = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Pesquisa com Desenvolvedores Freelancers | Cheetah Solutions"
        description="Participe da pesquisa da Cheetah sobre os desafios de desenvolvedores freelancers e profissionais independentes de tecnologia."
        ogTitle="Pesquisa com Desenvolvedores Freelancers"
        ogDescription="Entenda os principais desafios operacionais enfrentados por desenvolvedores freelancers e contribua com o estudo da Cheetah."
        ogUrl="/pesquisa-desenvolvedores-freelancers"
        canonical="/pesquisa-desenvolvedores-freelancers"
      />
      <Header />
      
      {/* Hero */}
      <AnimatedSection animation="fade-up">
        <section className="pt-28 pb-20 px-4 overflow-x-hidden overflow-y-visible">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <p className="text-xs text-primary uppercase tracking-[0.2em] mb-6 font-medium">
                Pesquisa de Mercado
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">
                Pesquisa de Mercado com{" "}
                <span className="text-primary">Desenvolvedores Freelancers</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Um estudo sobre os desafios operacionais enfrentados por profissionais independentes de tecnologia. Sua participação contribui para um entendimento mais claro sobre a realidade do trabalho freelancer no Brasil.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contexto */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-4">
              <div className="sticky top-32">
                <p className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  Contexto
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mt-3 leading-tight">
                  Por que essa<br />
                  pesquisa existe.
                </h2>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={100} className="lg:col-span-8">
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  A Cheetah Solutions Network atua com engenharia de software orientada à performance operacional. Na prática, isso significa analisar operações, identificar gargalos e desenvolver sistemas que organizam processos internos de empresas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ao longo dessa atuação, observamos um padrão recorrente: muitos desenvolvedores freelancers possuem alta capacidade técnica, mas enfrentam dificuldades operacionais que comprometem produtividade, rentabilidade e a qualidade da relação com seus clientes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Essa pesquisa nasce dessa observação. Queremos entender, com dados reais, como profissionais independentes de tecnologia estruturam suas operações e onde estão os principais pontos de atrito no dia a dia.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* O Problema Observado */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-xl mb-16">
              <p className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                Análise
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mt-3">
                O problema observado
              </h2>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ClipboardList,
                title: "Gestão de clientes e projetos",
                description: "Falta de processos definidos para acompanhamento de demandas, entregas e comunicação com clientes ao longo dos projetos."
              },
              {
                icon: BarChart3,
                title: "Negociação e precificação",
                description: "Dificuldade em definir preços coerentes, negociar escopos e estabelecer condições comerciais que protejam o profissional."
              },
              {
                icon: Target,
                title: "Organização operacional",
                description: "Ausência de padronização em processos internos, resultando em retrabalho, prazos inconsistentes e sobrecarga."
              },
              {
                icon: Users,
                title: "Processos informais",
                description: "Acordos verbais, ausência de documentação e fluxos de trabalho improvisados que geram riscos e ineficiência."
              },
              {
                icon: Search,
                title: "Ferramentas fragmentadas",
                description: "Uso de múltiplas ferramentas desconectadas que não se comunicam, gerando dados dispersos e perda de produtividade."
              },
              {
                icon: Shield,
                title: "Sustentabilidade do trabalho",
                description: "Dificuldade em manter uma operação estável e previsível, com ciclos de alta e baixa demanda sem planejamento."
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-card border border-border rounded-xl p-8 h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Objetivo da Pesquisa */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-4">
              <div className="sticky top-32">
                <p className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  Objetivo
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mt-3 leading-tight">
                  O que queremos<br />
                  entender.
                </h2>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={100} className="lg:col-span-8">
              <div className="space-y-8">
                {[
                  {
                    title: "Como desenvolvedores freelancers operam hoje",
                    text: "Entender a rotina operacional, desde a captação de clientes até a entrega final dos projetos, incluindo comunicação, documentação e acompanhamento."
                  },
                  {
                    title: "Quais ferramentas são utilizadas no dia a dia",
                    text: "Mapear o ecossistema de ferramentas adotadas para gestão de projetos, comunicação, versionamento, cobrança e organização pessoal."
                  },
                  {
                    title: "Onde estão os gargalos operacionais",
                    text: "Identificar os pontos de maior atrito na operação, como etapas que consomem mais tempo, geram mais retrabalho ou causam perda de clientes."
                  },
                  {
                    title: "Gerar insights estruturais para o mercado",
                    text: "Produzir uma análise que contribua para a compreensão do cenário freelancer em tecnologia no Brasil, com dados reais e aplicáveis."
                  },
                ].map((item, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-6">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Como Funciona + Privacidade */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-xl mb-16">
              <p className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                Participação
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mt-3">
                Como funciona
              </h2>
            </div>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <AnimatedSection delay={100}>
              <div className="bg-card border border-border rounded-xl p-8 h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <ClipboardList className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Pesquisa rápida e direta</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  O formulário leva entre 1 e 2 minutos para ser respondido. As perguntas são objetivas e não exigem nenhum tipo de preparo ou consulta prévia.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Basta responder com base na sua experiência real como profissional independente de tecnologia. Não existem respostas certas ou erradas.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={150}>
              <div className="bg-card border border-border rounded-xl p-8 h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Privacidade e uso dos dados</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Todas as respostas são anônimas. Não coletamos nome, e-mail ou qualquer informação que permita identificar individualmente os participantes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Os dados serão utilizados exclusivamente para fins de estudo e análise de mercado pela Cheetah Solutions Network. Nenhuma informação será compartilhada com terceiros.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xs text-primary uppercase tracking-[0.15em] font-medium mb-4">
                Contribua com o estudo
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sua experiência importa.
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Se você trabalha ou já trabalhou como desenvolvedor freelancer, sua perspectiva é fundamental para construir um panorama real sobre os desafios operacionais do mercado independente de tecnologia no Brasil.
              </p>
              <a 
                href="https://forms.gle/ttDBJ353npStyPsg8" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-base font-semibold">
                  Responder Pesquisa
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <p className="text-sm text-muted-foreground mt-6">
                Tempo estimado: 1 a 2 minutos. Respostas anônimas.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Encerramento */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-4">
              <div className="sticky top-32">
                <p className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  Agradecimento
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mt-3 leading-tight">
                  Obrigado pela<br />
                  participação.
                </h2>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={100} className="lg:col-span-8">
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Cada resposta contribui para um entendimento mais preciso sobre como desenvolvedores freelancers e profissionais independentes de tecnologia organizam suas operações.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A Cheetah Solutions Network acredita que estrutura operacional não é exclusividade de grandes empresas. Profissionais independentes também podem se beneficiar de processos organizados, ferramentas adequadas e uma operação preparada para crescer.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Se você conhece outros desenvolvedores freelancers que possam contribuir com esta pesquisa, compartilhe esta página. Quanto mais participações, mais representativo será o estudo.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PesquisaDesenvolvedores;
