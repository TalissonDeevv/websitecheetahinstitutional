import { AlertTriangle, Shield, FileText, MessageSquare, Lock, CheckCircle, Users, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const DisclaimerPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <AlertTriangle className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Aviso Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Política de <span className="text-primary">Isenção</span></h1>
            <p className="text-xl text-muted-foreground leading-relaxed">Isenções de responsabilidade, disclaimers e avisos importantes sobre limitações dos serviços.</p>
          </AnimatedSection>
        </div>
      </section>
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">1. Avisos Gerais</h2>
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-muted-foreground">Os serviços são fornecidos "como estão" (as is), sem garantias implícitas de adequação a fins específicos ou comercialização.</p>
              <p className="text-muted-foreground">A Cheetah Solutions Network não garante resultados comerciais específicos, ausência total de erros ou disponibilidade ininterrupta.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">2. Limitações Técnicas</h2>
            <ul className="text-muted-foreground space-y-3">
              <li>• Software pode conter bugs não identificados durante testes</li>
              <li>• Performance depende de infraestrutura e ambiente de uso</li>
              <li>• Integrações com terceiros estão sujeitas a suas próprias limitações</li>
              <li>• Atualizações podem alterar comportamentos existentes</li>
            </ul>
          </AnimatedSection>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">3. Isenções Específicas</h2>
            <div className="space-y-4">
              <Card className="bg-card/50 border-border/50"><CardContent className="p-4"><h4 className="font-semibold mb-2">Decisões de Negócio</h4><p className="text-sm text-muted-foreground">Não somos responsáveis por decisões tomadas com base em dados ou relatórios gerados pelos sistemas.</p></CardContent></Card>
              <Card className="bg-card/50 border-border/50"><CardContent className="p-4"><h4 className="font-semibold mb-2">Conteúdo de Terceiros</h4><p className="text-sm text-muted-foreground">Links e integrações externas são de responsabilidade de seus respectivos fornecedores.</p></CardContent></Card>
              <Card className="bg-card/50 border-border/50"><CardContent className="p-4"><h4 className="font-semibold mb-2">Uso Indevido</h4><p className="text-sm text-muted-foreground">Não nos responsabilizamos por uso dos serviços em desacordo com termos e políticas.</p></CardContent></Card>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default DisclaimerPolicy;