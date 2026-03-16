import { Briefcase, Code, Cloud, Layout, Settings, TestTube, Users, HeadphonesIcon, ExternalLink, Laptop, DollarSign, Zap, MessageCircle, Target, Shield, Clock, TrendingUp, FileText, Search, UserCheck, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { OrganizationJsonLd, WebPageJsonLd, FAQJsonLd } from "@/components/JsonLd";
import goodTeamSvg from "@/assets/good-team.svg";

const TALENT_FORM_URL =
  "https://docs.google.com/forms/d/1CtiCmGVmRhXX1YZrQXt78d_WDCnDpEnb6mTibvVmhiI";

const ETAPAS_PROCESSO = [
  {
    step: 1,
    title: "Inscrição no Banco de Talentos",
    description: "Preencha o formulário de inscrição com suas informações profissionais, áreas de interesse e portfólio.",
    icon: FileText,
  },
  {
    step: 2,
    title: "Análise de Perfil",
    description: "Quando surgem projetos compatíveis, nossa equipe analisa os perfis cadastrados buscando alinhamento técnico.",
    icon: Search,
  },
  {
    step: 3,
    title: "Conversa Inicial",
    description: "Se houver compatibilidade, entramos em contato para uma conversa sobre expectativas, disponibilidade e escopo.",
    icon: MessageCircle,
  },
  {
    step: 4,
    title: "Avaliação Técnica",
    description: "Dependendo do projeto, pode haver um teste técnico ou análise de código/portfólio para validar as habilidades.",
    icon: UserCheck,
  },
  {
    step: 5,
    title: "Alinhamento e Início",
    description: "Com tudo alinhado, definimos valores, prazos e iniciamos o projeto com comunicação direta e objetiva.",
    icon: Handshake,
  },
];

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
    description: "Atue em projetos de estruturação operacional: sistemas internos, automações, integrações e dashboards."
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
    description: "Trabalhe com tecnologias consolidadas: React, Node.js, TypeScript, AWS, Docker e PostgreSQL."
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

const FAQ_CATEGORIES = [
  {
    title: "Processo Seletivo",
    items: [
      {
        question: "Como funciona o processo seletivo da Cheetah Solutions?",
        answer: "O processo ocorre conforme demanda de projetos. Após inscrição no banco de talentos, perfis são analisados quando surgem oportunidades. Se houver compatibilidade técnica, entramos em contato para uma conversa inicial, avaliação técnica e alinhamento de expectativas."
      },
      {
        question: "A inscrição no banco de talentos garante contratação?",
        answer: "Não. A inscrição é um cadastro para futuras oportunidades. Todas as vagas efetivas são divulgadas exclusivamente pelo nosso LinkedIn oficial, e o processo segue critérios de alinhamento técnico e disponibilidade."
      },
      {
        question: "Como acompanho as oportunidades abertas?",
        answer: "Todas as vagas são publicadas no nosso LinkedIn oficial. Recomendamos seguir a página e ativar notificações para não perder nenhuma oportunidade."
      }
    ]
  },
  {
    title: "Remuneração e Contratação",
    items: [
      {
        question: "Como funciona a remuneração na Cheetah?",
        answer: "A remuneração é definida conforme o escopo e a complexidade de cada projeto. Trabalhamos com valores justos, alinhados ao mercado e transparentes desde o início da negociação."
      },
      {
        question: "Vocês contratam remotamente?",
        answer: "Sim. A maior parte da equipe trabalha remotamente. Buscamos profissionais organizados, com boa comunicação e autonomia para atuar de qualquer lugar do Brasil."
      }
    ]
  },
  {
    title: "Perfil e Tecnologias",
    items: [
      {
        question: "Quais áreas têm mais demanda na Cheetah?",
        answer: "Desenvolvimento Full Stack, Backend com foco em APIs e integrações, e DevOps/Cloud são as áreas com maior frequência de demanda. Contudo, todas as áreas listadas recebem oportunidades conforme os projetos."
      },
      {
        question: "Qual o perfil de profissional que vocês buscam?",
        answer: "Buscamos profissionais com excelência técnica, organização, boa comunicação e visão de produto. Valorizamos quem entrega com qualidade, cumpre prazos e se comunica de forma clara."
      },
      {
        question: "Quais tecnologias vocês utilizam?",
        answer: "Trabalhamos principalmente com React, Next.js, Node.js, TypeScript, Python, PostgreSQL, MongoDB, AWS, Docker e Kubernetes. O stack pode variar conforme o projeto."
      }
    ]
  }
];

const TrabalheConosco = () => {
  const title = "Trabalhe Conosco | Cheetah Solutions Network";
  const description =
    "Junte-se à equipe da Cheetah Solutions Network. Vagas remotas para desenvolvedores, designers e profissionais de tecnologia. Projetos reais, remuneração justa e crescimento técnico. Inscreva-se no banco de talentos.";

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO
        title={title}
        description={description}
        ogTitle="Trabalhe Conosco | Cheetah Solutions Network"
        ogDescription="Vagas remotas para desenvolvedores e profissionais de tecnologia. Projetos reais, remuneração por projeto e crescimento técnico."
        ogUrl="/inscricoes"
        canonical="/inscricoes"
      />

      <OrganizationJsonLd />
      <WebPageJsonLd title={title} description={description} url="/inscricoes" />
      <FAQJsonLd questions={FAQ_CATEGORIES.flatMap(cat => cat.items.map(item => ({ question: item.question, answer: item.answer })))} />

      <Header />

      {/* Hero - Same style as Developers/Solidária */}
      <AnimatedSection animation="fade-up">
        <section className="pt-28 pb-20 px-4 overflow-hidden">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="flex-1 min-w-0">
                <div className="max-w-2xl">
                  <p className="text-xs text-primary uppercase tracking-[0.2em] mb-6 font-medium">
                    Faça parte do time
                  </p>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">
                    Trabalhe<br />
                    <span className="text-primary">Conosco</span>
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                    Somos uma empresa de engenharia de software orientada à performance operacional. Estruturamos 
                    operações empresariais por meio de arquitetura tecnológica. Buscamos profissionais alinhados 
                    com excelência técnica, visão operacional e compromisso com resultado.
                  </p>
                </div>
              </div>
              
              {/* SVG Illustration - Desktop */}
              <div className="hidden lg:flex items-center justify-center flex-shrink-0">
                <div className="w-[420px] h-[420px] xl:w-[480px] xl:h-[480px] overflow-hidden contain-paint">
                  <img 
                    src={goodTeamSvg} 
                    alt="Ilustração de equipe trabalhando juntos" 
                    width={480}
                    height={480}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            
            {/* SVG Illustration - Mobile/Tablet */}
            <div className="flex lg:hidden items-center justify-center mt-8">
              <div className="w-64 h-64 sm:w-80 sm:h-80 overflow-hidden contain-paint">
                <img 
                  src={goodTeamSvg} 
                  alt="Ilustração de equipe trabalhando juntos" 
                  width={320}
                  height={320}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Etapas do Processo - Timeline */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-xl mb-16">
              <p className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                Processo Seletivo
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mt-3">
                Etapas do processo.
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Conheça as etapas do nosso processo seletivo, da inscrição até o início do projeto.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="max-w-4xl">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
              
              <div className="space-y-8">
                {ETAPAS_PROCESSO.map((etapa, index) => (
                  <AnimatedSection key={etapa.step} animation="fade-up" delay={index * 100}>
                    <div className="flex gap-6 items-start">
                      {/* Step Number/Icon */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                          {etapa.step}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 bg-card border border-border rounded-xl p-6 -mt-1">
                        <div className="flex items-center gap-3 mb-2">
                          <etapa.icon className="h-5 w-5 text-primary" />
                          <h3 className="font-semibold text-lg">{etapa.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {etapa.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que trabalhar na Cheetah - Benefícios */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-xl mb-16">
              <p className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                Diferenciais
              </p>
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
                <p className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  Cultura
                </p>
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
                <p className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  Oportunidades
                </p>
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
                  e entregas de qualidade. Não importa a senioridade, importa a atitude.
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

      {/* FAQ Section - Accordion Style */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection>
            <div className="max-w-2xl mb-12">
              <p className="text-xs text-primary uppercase tracking-[0.2em] mb-6 font-medium">
                Dúvidas frequentes
              </p>
              <h2 className="text-2xl md:text-3xl font-bold leading-[1.1] mb-4">
                Perguntas sobre<br />
                <span className="text-primary">o processo.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Respostas diretas para as dúvidas mais comuns sobre 
                nosso processo seletivo e forma de trabalho.
              </p>
            </div>
          </AnimatedSection>
          
          {FAQ_CATEGORIES.map((category, categoryIndex) => (
            <AnimatedSection key={categoryIndex} animation="fade-up" delay={categoryIndex * 100}>
              <div className={categoryIndex === 0 ? "mb-6" : "mt-10 mb-6"}>
                <h3 className="text-lg font-semibold mb-6 pb-3 border-b border-border">
                  {category.title}
                </h3>
                
                <Accordion type="single" collapsible className="space-y-2">
                  {category.items.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${categoryIndex}-${index}`}
                      className="border border-border rounded-lg overflow-hidden bg-card"
                    >
                      <AccordionTrigger className="text-left px-5 py-4 hover:bg-secondary/50 text-sm font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-5 pb-4 text-muted-foreground text-sm leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </AnimatedSection>
          ))}
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
