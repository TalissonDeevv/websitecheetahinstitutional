import { Briefcase, Code, Cloud, Layout, Settings, TestTube, Users, HeadphonesIcon, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { OrganizationJsonLd, WebPageJsonLd } from "@/components/JsonLd";

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

const TrabalheConosco = () => {
  const title = "Cheetah Solutions | Trabalhe Conosco";
  const description =
    "Software house especializada em soluções digitais sob medida. Conheça as áreas de interesse, faça parte do nosso banco de talentos e acompanhe oportunidades técnicas na Cheetah Solutions.";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={title}
        description={description}
        ogTitle="Trabalhe Conosco | Cheetah Solutions"
        ogDescription="Conheça as áreas de atuação da Cheetah Solutions, inscreva-se em nosso banco de talentos e acompanhe futuras oportunidades técnicas."
        ogUrl="/trabalhe-conosco"
        canonical="/trabalhe-conosco"
      />

      <OrganizationJsonLd />
      <WebPageJsonLd title={title} description={description} url="/trabalhe-conosco" />

      <Header />

      {/* Hero */}
      <AnimatedSection animation="fade-up">
        <section className="pt-28 pb-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl">
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
          </div>
        </section>
      </AnimatedSection>

      {/* Áreas de Interesse */}
      <section className="py-20 px-4 bg-secondary/30">
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

      {/* Banco de Talentos */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left column */}
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
            
            {/* Right column */}
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

      {/* CTA */}
      <AnimatedSection animation="fade-up">
        <section className="py-20 px-4 bg-secondary/30">
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
