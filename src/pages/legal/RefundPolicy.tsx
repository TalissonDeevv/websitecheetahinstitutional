import { Banknote, Clock, CheckCircle, XCircle, FileText, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Banknote className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Política Financeira</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Política de <span className="text-primary">Reembolso</span></h1>
            <p className="text-xl text-muted-foreground">Condições, prazos e procedimentos para solicitação de reembolso.</p>
          </AnimatedSection>
        </div>
      </section>
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">1. Direito de Arrependimento</h2>
            <p className="text-muted-foreground mb-6">Conforme CDC, você tem 7 dias para desistir de contratação realizada online, com reembolso integral.</p>
            <h2 className="text-3xl font-bold mb-8 mt-12">2. Casos com Direito a Reembolso</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Card className="bg-card/50 border-green-500/30"><CardContent className="p-4"><CheckCircle className="w-5 h-5 text-green-500 mb-2" /><p className="text-sm text-muted-foreground">Arrependimento em 7 dias</p></CardContent></Card>
              <Card className="bg-card/50 border-green-500/30"><CardContent className="p-4"><CheckCircle className="w-5 h-5 text-green-500 mb-2" /><p className="text-sm text-muted-foreground">Serviço não prestado</p></CardContent></Card>
              <Card className="bg-card/50 border-green-500/30"><CardContent className="p-4"><CheckCircle className="w-5 h-5 text-green-500 mb-2" /><p className="text-sm text-muted-foreground">Cobrança indevida</p></CardContent></Card>
              <Card className="bg-card/50 border-green-500/30"><CardContent className="p-4"><CheckCircle className="w-5 h-5 text-green-500 mb-2" /><p className="text-sm text-muted-foreground">Descumprimento contratual</p></CardContent></Card>
            </div>
            <h2 className="text-3xl font-bold mb-8 mt-12">3. Casos SEM Direito a Reembolso</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Card className="bg-card/50 border-red-500/30"><CardContent className="p-4"><XCircle className="w-5 h-5 text-red-500 mb-2" /><p className="text-sm text-muted-foreground">Serviço já entregue e aprovado</p></CardContent></Card>
              <Card className="bg-card/50 border-red-500/30"><CardContent className="p-4"><XCircle className="w-5 h-5 text-red-500 mb-2" /><p className="text-sm text-muted-foreground">Desistência após início</p></CardContent></Card>
              <Card className="bg-card/50 border-red-500/30"><CardContent className="p-4"><XCircle className="w-5 h-5 text-red-500 mb-2" /><p className="text-sm text-muted-foreground">Violação de termos pelo cliente</p></CardContent></Card>
            </div>
            <h2 className="text-3xl font-bold mb-8 mt-12">4. Prazos</h2>
            <ul className="text-muted-foreground space-y-2">
              <li>• <strong>Análise:</strong> Até 5 dias úteis</li>
              <li>• <strong>Processamento:</strong> Até 10 dias úteis após aprovação</li>
              <li>• <strong>Método:</strong> Mesmo meio de pagamento original</li>
            </ul>
            <p className="text-muted-foreground mt-8"><strong>Solicitações:</strong> contatocheetahsolutions@gmail.com</p>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default RefundPolicy;