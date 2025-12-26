import { Eye, Shield, Lock, Users, FileText, CheckCircle, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Eye className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">LGPD Compliant</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Política de <span className="text-primary">Privacidade</span></h1>
            <p className="text-xl text-muted-foreground">Como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD.</p>
          </AnimatedSection>
        </div>
      </section>
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">1. Dados Coletados</h2>
            <ul className="text-muted-foreground space-y-2 mb-8"><li>• Dados de identificação (nome, e-mail, telefone)</li><li>• Dados de navegação e uso</li><li>• Dados contratuais e financeiros</li></ul>
            <h2 className="text-3xl font-bold mb-8">2. Finalidades</h2>
            <ul className="text-muted-foreground space-y-2 mb-8"><li>• Prestação dos serviços contratados</li><li>• Comunicação e suporte</li><li>• Cumprimento de obrigações legais</li><li>• Melhoria dos serviços</li></ul>
            <h2 className="text-3xl font-bold mb-8">3. Compartilhamento</h2>
            <p className="text-muted-foreground mb-8">Dados podem ser compartilhados com prestadores de serviços essenciais, sempre com garantias contratuais de proteção.</p>
            <h2 className="text-3xl font-bold mb-8">4. Seus Direitos (LGPD)</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Card className="bg-card/50 border-border/50"><CardContent className="p-4 text-center"><CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" /><p className="text-sm">Acesso</p></CardContent></Card>
              <Card className="bg-card/50 border-border/50"><CardContent className="p-4 text-center"><CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" /><p className="text-sm">Correção</p></CardContent></Card>
              <Card className="bg-card/50 border-border/50"><CardContent className="p-4 text-center"><CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" /><p className="text-sm">Exclusão</p></CardContent></Card>
              <Card className="bg-card/50 border-border/50"><CardContent className="p-4 text-center"><CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" /><p className="text-sm">Portabilidade</p></CardContent></Card>
              <Card className="bg-card/50 border-border/50"><CardContent className="p-4 text-center"><CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" /><p className="text-sm">Revogação</p></CardContent></Card>
              <Card className="bg-card/50 border-border/50"><CardContent className="p-4 text-center"><CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" /><p className="text-sm">Oposição</p></CardContent></Card>
            </div>
            <p className="text-muted-foreground mt-8"><strong>DPO:</strong> dpo@cheetahnetwork.com.br</p>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default PrivacyPolicy;