import { Briefcase, Code, Cloud, Layout, Settings, TestTube, Users, HeadphonesIcon, ExternalLink, Laptop, DollarSign, Zap, MessageCircle, Target, Shield, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { OrganizationJsonLd, WebPageJsonLd, FAQJsonLd } from "@/components/JsonLd";
import goodTeamSvg from "@/assets/good-team.svg";
const TALENT_FORM_URL =
  "https://docs.google.com/forms/d/1CtiCmGVmRhXX1YZrQXt78d_WDCnDpEnb6mTibvVmhiI";

const LINKEDIN_URL = "https://linkedin.com/company/cheetahnetwork";

const AREAS_DE_INTERESSE = [
  { name: "Desenvolvimento Web", icon: Code },
  { name: "Backend / APIs", icon: Settings },
  { name: "Full Stack", icon: Layout },
  { name: "UI/UX Design", icon: Layout },
  { name: "DevOps & Cloud", icon: Cloud },
  { name: "QA & Testes", icon: TestTube },
  { name: "Gestão de Projetos / Produto", icon: Users },
  { name: "Suporte", icon: HeadphonesIcon },
];

const BENEFICIOS = [
  {
    icon: Laptop,
    title: "100% Remoto",
    description: "Trabalhe de qualquer lugar do Brasil com total flexibilidade de horário e autonomia."
  },
  {
    icon: DollarSign,
    title: "Remuneração por Projeto",
    description: "Salário definido conforme o escopo e complexidade de cada projeto. Transparência total."
  },
  {
    icon: Zap,
    title: "Projetos Reais",
    description: "Atue em projetos diversos: sistemas web, APIs, automações, e-commerces e apps mobile."
  },
  {
    icon: MessageCircle,
    title: "Comunicação Direta",
    description: "Sem burocracia excessiva. Acesso direto à liderança técnica e decisões rápidas."
  },
  {
    icon: Target,
    title: "Foco em Resultado",
    description: "Valorizamos entregas de qualidade. Menos reuniões, mais código funcionando."
  },
  {
    icon: TrendingUp,
    title: "Crescimento Técnico",
    description: "Trabalhe com tecnologias modernas: React, Node.js, TypeScript, AWS, Docker e mais."
  }
];

const COMO_TRABALHAMOS = [
  {
    icon: Shield,
    title: "Processos Definidos",
    description: "Metodologias ágeis aplicadas de forma prática, sem cerimônias desnecessárias."
  },
  {
    icon: Clock,
    title: "Flexibilidade",
    description: "Horários flexíveis desde que as entregas sejam cumpridas com qualidade."
  },
  {
    icon: Users,
    title: "Equipe Enxuta",
    description: "Times pequenos e focados. Cada profissional tem impacto direto nos resultados."
  }
];

const FAQ_ITEMS = [
  {
    question: "Como funciona o processo seletivo da Cheetah Solutions?",
    answer: "O processo ocorre conforme demanda de projetos. Após inscrição no banco de talentos, perfis são analisados quando surgem oportunidades. Se houver compatibilidade técnica, entramos em contato para uma conversa inicial, avaliação técnica e alinhamento de expectativas."
  },
  {
    question: "A inscrição no banco de talentos garante contratação?",
    answer: "Não. A inscrição é um cadastro para futuras oportunidades. Todas as vagas efetivas são divulgadas exclusivamente pelo nosso LinkedIn oficial, e o processo segue critérios de alinhamento técnico e disponibilidade."
  },
  {
    question: "Como funciona a remuneração na Cheetah?",
    answer: "A remuneração é definida conforme o escopo e a complexidade de cada projeto. Trabalhamos com valores justos, alinhados ao mercado e transparentes desde o início da negociação."
  },
  {
    question: "Quais áreas têm mais demanda na Cheetah?",
    answer: "Desenvolvimento Full Stack, Backend com foco em APIs e integrações, e DevOps/Cloud são as áreas com maior frequência de demanda. Contudo, todas as áreas listadas recebem oportunidades conforme os projetos."
  },
  {
    question: "Vocês contratam remotamente?",
    answer: "Sim. A maior parte da equipe trabalha remotamente. Buscamos profissionais organizados, com boa comunicação e autonomia para atuar de qualquer lugar do Brasil."
  },
  {
    question: "Qual o perfil de profissional que vocês buscam?",
    answer: "Buscamos profissionais com excelência técnica, organização, boa comunicação e visão de produto. Valorizamos quem entrega com qualidade, cumpre prazos e se comunica de forma clara."
  },
  {
    question: "Quais tecnologias vocês utilizam?",
    answer: "Trabalhamos principalmente com React, Next.js, Node.js, TypeScript, Python, PostgreSQL, MongoDB, AWS, Docker e Kubernetes. O stack pode variar conforme o projeto."
  },
  {
    question: "Como acompanho as oportunidades abertas?",
    answer: "Todas as vagas são publicadas no nosso LinkedIn oficial. Recomendamos seguir a página e ativar notificações para não perder nenhuma oportunidade."
  }
];

const TrabalheConosco = () => {
  const title = "Trabalhe Conosco | Cheetah Solutions - Vagas para Desenvolvedores";
  const description =
    "Junte-se à equipe da Cheetah Solutions. Vagas remotas para desenvolvedores, designers e profissionais de tecnologia. Projetos reais, remuneração justa e crescimento técnico. Inscreva-se no banco de talentos.";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={title}
        description={description}
        ogTitle="Trabalhe Conosco | Cheetah Solutions"
        ogDescription="Vagas remotas para desenvolvedores e profissionais de tecnologia. Projetos reais, remuneração por projeto e crescimento técnico."
        ogUrl="/inscricoes"
        canonical="/inscricoes"
      />

      <OrganizationJsonLd />
      <WebPageJsonLd title={title} description={description} url="/inscricoes" />
      <FAQJsonLd questions={FAQ_ITEMS} />

      <Header />

      {/* Hero */}
      <AnimatedSection animation="fade-up">
        <section className="pt-28 pb-16 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
              <div className="max-w-3xl lg:flex-1">
                <p className="text-xs text-primary uppercase tracking-[0.2em] mb-6 font-medium">
                  Faça parte do time
                </p>
                <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-8">
                  Trabalhe Conosco
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Somos uma software house focada na criação de soluções digitais sob medida para negócios que exigem
                  eficiência, performance e escalabilidade. Buscamos profissionais alinhados com excelência técnica,
                  organização e visão de produto.
                </p>
              </div>
              <div className="hidden lg:flex lg:flex-shrink-0 lg:items-center lg:justify-center">
                <img 
                  src={goodTeamSvg} 
                  alt="Ilustração de equipe trabalhando juntos" 
                  className="w-72 xl:w-96 h-auto animate-fade-in"
                  style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Por que trabalhar na Cheetah - Benefícios */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-xl mb-16">
              <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                Diferenciais
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3">
                Por que trabalhar na Cheetah?
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Oferecemos um ambiente de trabalho focado em resultados, com flexibilidade e 
                oportunidades reais de crescimento técnico.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFICIOS.map((beneficio, index) => (
              <AnimatedSection key={beneficio.title} delay={index * 100}>
                <div className="bg-card border border-border rounded-xl p-6 h-full">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <beneficio.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{beneficio.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {beneficio.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Como Trabalhamos */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20">
              <div className="lg:w-1/3">
                <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  Cultura
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mt-3">
                  Como trabalhamos.
                </h2>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Valorizamos autonomia, entregas consistentes e comunicação clara. 
                  Menos burocracia, mais foco no que importa.
                </p>
              </div>
              
              <div className="lg:w-2/3">
                <div className="grid sm:grid-cols-3 gap-8">
                  {COMO_TRABALHAMOS.map((item, index) => (
                    <AnimatedSection key={item.title} delay={index * 100}>
                      <div className="border-l-2 border-primary/30 pl-6">
                        <item.icon className="h-5 w-5 text-primary mb-3" />
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Áreas de Interesse */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <AnimatedSection animation="fade-right">
                <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  Oportunidades
                </span>
                <h2 className="text-2xl font-bold mt-3 leading-tight">
                  Áreas de Interesse
                </h2>
                <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                  Profissionais de diferentes especialidades 
                  podem se inscrever em nosso banco de talentos.
                </p>
              </AnimatedSection>
            </div>
            
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {AREAS_DE_INTERESSE.map((area, index) => (
                  <AnimatedSection key={area.name} animation="fade-up" delay={index * 50}>
                    <div className="bg-card border border-border rounded-lg p-5 h-full">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                        <area.icon className="h-4 w-4 text-primary" />
                      </div>
                      <h3 className="font-medium text-sm">{area.name}</h3>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que buscamos */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-4">
              <div className="sticky top-32">
                <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  Perfil
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mt-3 leading-tight">
                  O que buscamos.
                </h2>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={100} className="lg:col-span-8">
              <div className="space-y-8">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Buscamos profissionais que compartilhem nosso compromisso com excelência técnica 
                  e entregas de qualidade. Não importa a senioridade — importa a atitude.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-semibold mb-3">Habilidades Técnicas</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                        Domínio de pelo menos uma linguagem/framework
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                        Conhecimento em versionamento (Git)
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                        Capacidade de aprender novas tecnologias
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                        Código limpo e documentado
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-semibold mb-3">Soft Skills</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                        Comunicação clara e objetiva
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                        Organização e gestão de tempo
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                        Autonomia para trabalho remoto
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                        Comprometimento com prazos
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Banco de Talentos */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-4">
              <div className="sticky top-32">
                <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  Inscrição
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mt-3 leading-tight">
                  Banco de Talentos
                </h2>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={100} className="lg:col-span-8">
              <div className="space-y-8">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Mantemos um banco de talentos para profissionais interessados em atuar conosco futuramente. 
                  A inscrição não garante contratação imediata, pois as oportunidades surgem conforme a demanda 
                  dos projetos e o alinhamento técnico de cada perfil.
                </p>
                
                <div className="pt-6">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <a href={TALENT_FORM_URL} target="_blank" rel="noopener noreferrer">
                      <Briefcase className="mr-2 h-4 w-4" />
                      Faça sua Inscrição
                    </a>
                  </Button>
                </div>
                
                <div className="pt-8 border-t border-border">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <ExternalLink className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Divulgação de Vagas</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          A disponibilidade deste formulário não significa que a Cheetah Solutions esteja 
                          contratando continuamente. Todas as oportunidades abertas são divulgadas 
                          exclusivamente por meio do nosso LinkedIn oficial.
                        </p>
                        <a
                          href={LINKEDIN_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-primary hover:underline underline-offset-4 font-medium"
                        >
                          Acompanhe no LinkedIn
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-xl mb-16">
              <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                Dúvidas frequentes
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3">
                Perguntas sobre o processo.
              </h2>
            </div>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl">
            {FAQ_ITEMS.map((item, index) => (
              <AnimatedSection key={index} delay={index * 50}>
                <div className="border-l-2 border-primary/30 pl-6 py-2">
                  <h3 className="font-semibold mb-2">{item.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection animation="fade-up">
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Quer fazer parte?
              </h2>
              <p className="text-muted-foreground mb-6">
                Cadastre-se em nosso banco de talentos e acompanhe as 
                oportunidades quando surgirem novos projetos.
              </p>
              <Button 
                asChild 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href={TALENT_FORM_URL} target="_blank" rel="noopener noreferrer">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Inscrever-se agora
                </a>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default TrabalheConosco;
