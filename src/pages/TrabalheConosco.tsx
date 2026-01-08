import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { OrganizationJsonLd, WebPageJsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

const TALENT_FORM_URL =
  "https://docs.google.com/forms/d/1CtiCmGVmRhXX1YZrQXt78d_WDCnDpEnb6mTibvVmhiI";

const LINKEDIN_URL = "https://linkedin.com/company/cheetahnetwork";

const AREAS_DE_INTERESSE = [
  "Desenvolvimento Web",
  "Backend / APIs",
  "Full Stack",
  "UI/UX Design",
  "DevOps & Cloud",
  "QA & Testes",
  "Gestão de Projetos / Produto",
  "Suporte",
];

export default function TrabalheConosco() {
  const title = "Cheetah Solutions | Trabalhe Conosco";
  const description =
    "Software house especializada em soluções digitais sob medida. Conheça as áreas de interesse, faça parte do nosso banco de talentos e acompanhe oportunidades técnicas na Cheetah Solutions.";

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
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

      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="px-4 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Trabalhe Conosco</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Somos uma software house focada na criação de soluções digitais sob medida para negócios que exigem
              eficiência, performance e escalabilidade. Buscamos profissionais alinhados com excelência técnica,
              organização e visão de produto.
            </p>
          </div>
        </section>

        {/* Áreas de Interesse */}
        <section className="mt-16 px-4 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Áreas de Interesse</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {AREAS_DE_INTERESSE.map((area) => (
                <Card key={area} className="border-border">
                  <CardContent className="p-6">
                    <p className="text-sm font-semibold text-foreground">{area}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Banco de Talentos */}
        <section className="mt-16 px-4 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Banco de Talentos</h2>
            <p className="mt-6 text-muted-foreground max-w-4xl leading-relaxed">
              Mantemos um banco de talentos para profissionais interessados em atuar conosco futuramente. A inscrição
              não garante contratação imediata, pois as oportunidades surgem conforme a demanda dos projetos e o
              alinhamento técnico de cada perfil.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href={TALENT_FORM_URL} target="_blank" rel="noopener noreferrer">
                  Faça sua Inscrição
                </a>
              </Button>
            </div>

            <Alert className="mt-8">
              <AlertDescription className="text-muted-foreground">
                A disponibilidade deste formulário não significa que a Cheetah Solutions esteja contratando
                continuamente. Todas as oportunidades abertas são divulgadas exclusivamente por meio do nosso{" "}
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4"
                >
                  LinkedIn oficial
                </a>
                .
              </AlertDescription>
            </Alert>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
