import { Link } from "react-router-dom";
import { 
  Search, Layers, Rocket, TrendingUp, AlertTriangle, CheckCircle, 
  ArrowRight, Shield, BarChart3, Users, Target, Gauge, DollarSign,
  Lock, Eye, XCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const CheetahOPS = () => {
  const problems = [
    "Gargalos constantes na operação",
    "Processos manuais e retrabalho",
    "Falta de integração entre áreas",
    "Decisões baseadas em dados fragmentados",
    "Crescimento sem previsibilidade",
  ];

  const layers = [
    {
      step: "01",
      title: "Diagnóstico Operacional",
      description: "Mapeamento completo dos fluxos, gargalos e dependências da operação. Identificação dos pontos que geram perda de eficiência, retrabalho e custo invisível.",
      icon: Search,
    },
    {
      step: "02",
      title: "Arquitetura Estrutural",
      description: "Definição da estrutura tecnológica necessária para organizar a operação. O escopo técnico nasce da análise operacional, não de premissas genéricas.",
      icon: Layers,
    },
    {
      step: "03",
      title: "Implementação Controlada",
      description: "Desenvolvimento e implantação com entregas incrementais, validação contínua e comunicação direta com quem opera o negócio no dia a dia.",
      icon: Rocket,
    },
    {
      step: "04",
      title: "Estabilização e Evolução",
      description: "Monitoramento de resultados, ajustes na estrutura e evolução dos sistemas conforme a operação cresce e novas demandas surgem.",
      icon: TrendingUp,
    },
  ];

  const practicalImpacts = [
    { text: "Redução de retrabalho operacional", icon: CheckCircle },
    { text: "Diminuição de processos manuais", icon: CheckCircle },
    { text: "Aumento de previsibilidade na operação", icon: CheckCircle },
    { text: "Melhor tomada de decisão com dados confiáveis", icon: CheckCircle },
    { text: "Mais controle sobre a execução", icon: CheckCircle },
  ];

  const maturityLevels = [
    {
      level: "Reativo",
      description: "Operação apaga incêndios. Processos informais, decisões sem dados, alta dependência de pessoas específicas.",
    },
    {
      level: "Intermediário",
      description: "Alguns processos documentados, ferramentas isoladas, baixa integração entre áreas.",
    },
    {
      level: "Estruturado",
      description: "Processos padronizados, sistemas integrados, indicadores definidos, operação previsível.",
    },
    {
      level: "Escalável",
      description: "Estrutura preparada para crescimento. Automação consolidada, governança operacional, escala sem perda de controle.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Cheetah OPS Framework | Engenharia Operacional para Escala Empresarial"
        description="Metodologia de engenharia operacional para estruturar processos, reduzir perdas e preparar empresas para crescimento escalável."
        ogTitle="Cheetah OPS Framework | Engenharia Operacional para Escala Empresarial"
        ogDescription="Metodologia proprietária de engenharia operacional para estruturar processos, reduzir perdas e preparar empresas para crescimento escalável."
        ogUrl="/cheetah-ops"
        canonical="/cheetah-ops"
      />
      <Header />

      {/* 4.1 HERO */}
      <AnimatedSection animation="fade">
        <section className="pt-28 pb-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <p className="text-xs text-primary uppercase tracking-[0.2em] mb-6 font-medium">
                Metodologia Proprietária
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">
                Engenharia operacional para empresas que cresceram mais rápido que sua{" "}
                <span className="text-primary">estrutura.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10">
                A Cheetah OPS Framework estrutura operações, reduz perda de margem e cria base real para escala sustentável.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/orcamento">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                  >
                    Diagnosticar minha operação
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="#metodologia">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border text-muted-foreground hover:bg-secondary hover:text-foreground font-medium"
                  >
                    Entender a metodologia
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 4.2 O PROBLEMA */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <AnimatedSection animation="fade-right">
                <div className="sticky top-32">
                  <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                    O problema
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mt-3 leading-tight">
                    Empresas em crescimento<br />
                    enfrentam isso todos os dias.
                  </h2>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {problems.map((problem, index) => (
                  <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
                    <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-5 h-full">
                      <AlertTriangle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{problem}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
              <AnimatedSection animation="fade-up" delay={300}>
                <div className="mt-8 bg-card border-2 border-primary/30 rounded-xl p-6">
                  <p className="text-foreground font-semibold text-lg leading-relaxed">
                    Isso não é problema de ferramenta.
                  </p>
                  <p className="text-primary font-bold text-xl mt-1">
                    É problema de estrutura.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 4.3 TESE CENTRAL */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                Tese central
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-10">
                Crescimento sem estrutura gera consequências previsíveis.
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { text: "Perda de margem", icon: DollarSign },
                  { text: "Aumento de complexidade", icon: Gauge },
                  { text: "Limitação de escala", icon: Target },
                ].map((item, index) => (
                  <AnimatedSection key={index} animation="scale" delay={index * 100}>
                    <div className="bg-card border border-border rounded-xl p-6 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <p className="font-semibold text-foreground">{item.text}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 4.4 O QUE É A CHEETAH OPS */}
      <section id="metodologia" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-5">
              <div className="sticky top-32">
                <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  A metodologia
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mt-3 leading-tight">
                  O que é a<br />
                  Cheetah OPS Framework.
                </h2>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Metodologia proprietária de engenharia aplicada à operação. Integra diagnóstico, arquitetura e execução em um processo contínuo e controlado.
                </p>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  O desenvolvimento de software é consequência da arquitetura operacional definida. Não o ponto de partida.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150} className="lg:col-span-7">
              <div className="space-y-4">
                <p className="text-xs text-muted-foreground uppercase tracking-[0.15em] font-medium mb-4">
                  O que a Cheetah OPS não é
                </p>
                {[
                  { text: "Software pronto adaptado à força na operação", icon: XCircle },
                  { text: "Desenvolvimento isolado sem contexto operacional", icon: XCircle },
                  { text: "Consultoria que entrega relatório e não executa", icon: XCircle },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-card border border-border rounded-lg p-5">
                    <item.icon className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 4.5 COMO FUNCIONA — 4 Camadas */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  Como funciona
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mt-3">
                  As 4 camadas da Cheetah OPS Framework.
                </h2>
              </div>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

                <div className="space-y-8">
                  {layers.map((item, index) => (
                    <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                      <div className="flex gap-6 items-start">
                        <div className="relative z-10 flex-shrink-0">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                            {item.step}
                          </div>
                        </div>
                        <div className="flex-1 bg-card border border-border rounded-xl p-6 -mt-1">
                          <h3 className="font-semibold mb-2">{item.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.6 IMPACTO NA PRÁTICA */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-4">
              <div className="sticky top-32">
                <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  Resultados
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mt-3 leading-tight">
                  Impacto na prática.
                </h2>
              </div>
            </AnimatedSection>

            <div className="lg:col-span-8">
              <div className="space-y-4">
                {practicalImpacts.map((item, index) => (
                  <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
                    <div className="flex items-center gap-4 bg-card border border-border rounded-lg p-5">
                      <item.icon className="h-5 w-5 text-primary shrink-0" />
                      <p className="text-foreground font-medium">{item.text}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.7 DIFERENCIAÇÃO */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                Diferenciação
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3">
                O que separa a Cheetah OPS do mercado.
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection animation="fade-right" delay={100}>
              <div className="bg-card border border-border rounded-xl p-8 h-full">
                <p className="text-xs text-muted-foreground uppercase tracking-[0.15em] font-medium mb-6">
                  O mercado entrega
                </p>
                <ul className="space-y-4">
                  {[
                    "Softwares genéricos sem contexto operacional",
                    "Desenvolvimento sem diagnóstico prévio",
                    "Consultoria que entrega relatório, não execução",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={150}>
              <div className="bg-card border-2 border-primary/30 rounded-xl p-8 h-full">
                <p className="text-xs text-primary uppercase tracking-[0.15em] font-medium mb-6">
                  A Cheetah OPS entrega
                </p>
                <ul className="space-y-4">
                  {[
                    "Arquitetura operacional baseada em diagnóstico real",
                    "Sistemas alinhados à realidade da operação",
                    "Engenharia aplicada com execução e acompanhamento",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 4.8 PARA QUEM É */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-4">
              <div className="sticky top-32">
                <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  Perfil
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mt-3 leading-tight">
                  Para quem é a<br />
                  Cheetah OPS.
                </h2>
              </div>
            </AnimatedSection>

            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Empresas em crescimento", desc: "Que expandiram faturamento e equipe, mas a operação não acompanhou.", icon: TrendingUp },
                  { title: "Operações desorganizadas", desc: "Processos informais, planilhas dispersas e informação fragmentada.", icon: Layers },
                  { title: "Setores desconectados", desc: "Áreas que não se comunicam, gerando retrabalho e perda de informação.", icon: Users },
                  { title: "Busca por escala com controle", desc: "Crescer sem perder governança, margem e qualidade operacional.", icon: Shield },
                ].map((item, index) => (
                  <AnimatedSection key={index} animation="fade-up" delay={index * 80}>
                    <div className="bg-card border border-border rounded-xl p-6 h-full">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.9 MATURIDADE OPERACIONAL */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                Evolução
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3">
                Maturidade operacional.
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                A Cheetah OPS Framework conduz a operação do estágio reativo até a escalabilidade controlada.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {maturityLevels.map((item, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  <div className="bg-card border border-border rounded-xl p-6 h-full relative">
                    <div className="text-xs text-primary font-bold mb-3 uppercase tracking-wider">
                      Nível {index + 1}
                    </div>
                    <h3 className="font-semibold mb-2">{item.level}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                    {index < maturityLevels.length - 1 && (
                      <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4.10 IMPACTO FINANCEIRO */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-4">
              <div className="sticky top-32">
                <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  Financeiro
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mt-3 leading-tight">
                  Impacto financeiro<br />
                  da estruturação.
                </h2>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100} className="lg:col-span-8">
              <div className="space-y-4">
                {[
                  { title: "Redução de custo invisível", desc: "Retrabalho, falhas de comunicação e processos manuais consomem margem sem aparecer no balanço." },
                  { title: "Menos retrabalho", desc: "Processos padronizados e integrados eliminam tarefas repetitivas e erros operacionais." },
                  { title: "Mais eficiência sem aumentar equipe", desc: "Automação e integração permitem fazer mais com a mesma estrutura de pessoas." },
                  { title: "Proteção de margem", desc: "Operação estruturada reduz desperdício e preserva rentabilidade durante o crescimento." },
                ].map((item, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-6 py-2">
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 4.11 GOVERNANÇA E RISCO */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                Governança
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3">
                Governança e controle de risco.
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { text: "Menos dependência de pessoas-chave", icon: Users },
              { text: "Mais rastreabilidade de processos", icon: Eye },
              { text: "Controle interno estruturado", icon: Lock },
              { text: "Menos improviso operacional", icon: Shield },
            ].map((item, index) => (
              <AnimatedSection key={index} animation="scale" delay={index * 80}>
                <div className="bg-card border border-border rounded-xl p-6 text-center h-full">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4.12 FECHAMENTO + 4.13 CTA FINAL */}
      <AnimatedSection animation="fade-up">
        <section className="py-24 px-4 bg-secondary/30">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">Crescimento exige estrutura.</p>
              <p className="text-lg text-muted-foreground leading-relaxed">Estrutura exige arquitetura.</p>
              <p className="text-xl text-primary font-bold mt-2">Arquitetura exige engenharia.</p>
            </div>

            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Pronto para estruturar<br />
                <span className="text-primary">sua operação?</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Diagnóstico inicial sem compromisso. Identificamos os gargalos operacionais e apresentamos um plano de estruturação.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/orcamento">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                  >
                    Solicitar diagnóstico
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/atendimento">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border text-muted-foreground hover:bg-secondary hover:text-foreground font-medium"
                  >
                    Falar com especialista
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default CheetahOPS;
