import { AlertTriangle, Shield, MessageSquare, Lock, CheckCircle, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const ReportPage = () => {
  const [formData, setFormData] = useState({ type: "", description: "", anonymous: true, contact: "" });
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <AlertTriangle className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Canal de Denúncias</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Canal de <span className="text-primary">Denúncias</span></h1>
            <p className="text-xl text-muted-foreground">Reporte irregularidades, violações ou comportamentos inadequados de forma segura e confidencial.</p>
          </AnimatedSection>
        </div>
      </section>
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-card/50 border-border/50"><CardContent className="p-6 text-center"><Shield className="w-8 h-8 text-primary mx-auto mb-3" /><h3 className="font-semibold mb-2">Confidencial</h3><p className="text-sm text-muted-foreground">Sua identidade é protegida</p></CardContent></Card>
              <Card className="bg-card/50 border-border/50"><CardContent className="p-6 text-center"><Lock className="w-8 h-8 text-primary mx-auto mb-3" /><h3 className="font-semibold mb-2">Seguro</h3><p className="text-sm text-muted-foreground">Dados criptografados</p></CardContent></Card>
              <Card className="bg-card/50 border-border/50"><CardContent className="p-6 text-center"><CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" /><h3 className="font-semibold mb-2">Investigado</h3><p className="text-sm text-muted-foreground">Cada denúncia é analisada</p></CardContent></Card>
            </div>
            <Card className="bg-card/50 border-border/50"><CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Fazer uma Denúncia</h2>
              <form className="space-y-6">
                <div><label className="block text-sm font-medium mb-2">Tipo de Denúncia</label><select className="w-full bg-background border border-border rounded-lg p-3"><option>Violação de Política</option><option>Assédio</option><option>Fraude</option><option>Segurança</option><option>Outro</option></select></div>
                <div><label className="block text-sm font-medium mb-2">Descrição</label><textarea className="w-full bg-background border border-border rounded-lg p-3 h-32" placeholder="Descreva a situação..."></textarea></div>
                <div><label className="flex items-center gap-2"><input type="checkbox" defaultChecked className="rounded" /><span className="text-sm">Enviar anonimamente</span></label></div>
                <button type="button" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-medium">Enviar Denúncia</button>
              </form>
            </CardContent></Card>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default ReportPage;