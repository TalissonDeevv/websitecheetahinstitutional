import { FileText, Shield, Users, CheckCircle, AlertTriangle, Scale } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Documento Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Termos de <span className="text-primary">Uso</span></h1>
            <p className="text-xl text-muted-foreground">Condições gerais de utilização dos serviços da Cheetah Solutions Network.</p>
            <p className="text-sm text-muted-foreground mt-4">Última atualização: Dezembro de 2024</p>
          </AnimatedSection>
        </div>
      </section>
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground mb-6">Ao utilizar nossos serviços, você concorda integralmente com estes termos. Se não concordar, não utilize os serviços.</p>
            <h2 className="text-3xl font-bold mb-8 mt-12">2. Serviços Oferecidos</h2>
            <ul className="text-muted-foreground space-y-2">
              <li>• Desenvolvimento de software sob demanda</li>
              <li>• Manutenção e suporte de sistemas</li>
              <li>• Consultoria em tecnologia</li>
              <li>• Hospedagem e infraestrutura</li>
            </ul>
            <h2 className="text-3xl font-bold mb-8 mt-12">3. Obrigações do Usuário</h2>
            <ul className="text-muted-foreground space-y-2">
              <li>• Fornecer informações verdadeiras</li>
              <li>• Manter credenciais seguras</li>
              <li>• Cumprir legislação aplicável</li>
              <li>• Respeitar propriedade intelectual</li>
            </ul>
            <h2 className="text-3xl font-bold mb-8 mt-12">4. Propriedade Intelectual</h2>
            <p className="text-muted-foreground">Todo conteúdo, marcas e tecnologias são protegidos por direitos de propriedade intelectual conforme política específica.</p>
            <h2 className="text-3xl font-bold mb-8 mt-12">5. Vigência</h2>
            <p className="text-muted-foreground">Estes termos vigoram por tempo indeterminado, podendo ser atualizados mediante aviso prévio de 30 dias.</p>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default TermsOfUse;