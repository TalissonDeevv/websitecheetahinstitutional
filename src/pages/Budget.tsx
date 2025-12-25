import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Send, MessageCircle, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BudgetTermsAccordion from "@/components/BudgetTermsAccordion";
import AnimatedSection from "@/components/AnimatedSection";

const Budget = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    description: "",
    budget: "",
    timeline: "",
    features: [] as string[]
  });

  const [acceptTerms, setAcceptTerms] = useState(false);

  const services = [
    { name: "Bot Discord/Telegram", price: "A partir de R$ 500" },
    { name: "Website", price: "A partir de R$ 800" },
    { name: "Sistema Web", price: "A partir de R$ 2.500" },
    { name: "E-commerce", price: "A partir de R$ 2.000" },
    { name: "Integração API", price: "A partir de R$ 600" },
    { name: "App Mobile", price: "A partir de R$ 3.000" }
  ];

  const features = [
    "Dashboard Administrativo",
    "Sistema de Pagamento",
    "Sistema de Usuários",
    "Relatórios",
    "SEO Otimizado",
    "Design Responsivo",
    "Integração WhatsApp",
    "Chat ao Vivo",
    "Multi-idioma",
    "Analytics"
  ];

  const handleFeatureChange = (featureName: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      features: checked 
        ? [...prev.features, featureName]
        : prev.features.filter(f => f !== featureName)
    }));
  };

  const generateWhatsAppMessage = () => {
    const message = `Olá! Gostaria de solicitar um orçamento:

Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
${formData.company ? `Empresa: ${formData.company}` : ''}

Serviço: ${formData.service}
Descrição: ${formData.description}
Orçamento: ${formData.budget}
Prazo: ${formData.timeline}
${formData.features.length > 0 ? `\nRecursos: ${formData.features.join(', ')}` : ''}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511999999999?text=${encodedMessage}`, '_blank');
  };

  const handleSubmitEmail = () => {
    const subject = encodeURIComponent("Solicitação de Orçamento - Cheetah Network");
    const body = encodeURIComponent(`Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
${formData.company ? `Empresa: ${formData.company}` : ''}

Serviço: ${formData.service}
Descrição: ${formData.description}
Orçamento: ${formData.budget}
Prazo: ${formData.timeline}
${formData.features.length > 0 ? `\nRecursos: ${formData.features.join(', ')}` : ''}`);

    window.open(`mailto:contato@cheetahnetwork.com?subject=${subject}&body=${body}`);
  };

  const isFormValid = formData.name && formData.email && formData.phone && formData.service && formData.description && acceptTerms;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero */}
      <AnimatedSection animation="fade-up">
        <section className="pt-28 pb-12 px-4">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <p className="text-xs text-primary uppercase tracking-[0.2em] mb-6 font-medium">
                Orçamento
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
                Solicite uma<br />
                <span className="text-primary">proposta.</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Preencha o formulário com as informações do seu projeto. 
                Retornamos em até 48 horas com uma proposta detalhada.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
            {/* Main Form */}
            <div className="lg:col-span-7">
              <AnimatedSection animation="fade-up" delay={100}>
                <div className="bg-card border border-border rounded-xl p-8">
                  <h2 className="text-lg font-semibold mb-6">Dados do projeto</h2>
                  
                  <div className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-xs text-muted-foreground">Nome *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                          className="bg-secondary border-border mt-1.5"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-xs text-muted-foreground">E-mail *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                          className="bg-secondary border-border mt-1.5"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-xs text-muted-foreground">Telefone *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                          className="bg-secondary border-border mt-1.5"
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-xs text-muted-foreground">Empresa</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData(prev => ({...prev, company: e.target.value}))}
                          className="bg-secondary border-border mt-1.5"
                          placeholder="Opcional"
                        />
                      </div>
                    </div>

                    <div>
                      <Label className="text-xs text-muted-foreground">Tipo de serviço *</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({...prev, service: value}))}>
                        <SelectTrigger className="bg-secondary border-border mt-1.5">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.name} value={service.name}>
                              {service.name} — {service.price}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="description" className="text-xs text-muted-foreground">Descrição do projeto *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData(prev => ({...prev, description: e.target.value}))}
                        className="bg-secondary border-border mt-1.5 min-h-[100px] resize-none"
                        placeholder="Descreva o que você precisa..."
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-xs text-muted-foreground">Orçamento disponível</Label>
                        <Select onValueChange={(value) => setFormData(prev => ({...prev, budget: value}))}>
                          <SelectTrigger className="bg-secondary border-border mt-1.5">
                            <SelectValue placeholder="Faixa" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ate-1000">Até R$ 1.000</SelectItem>
                            <SelectItem value="1000-2500">R$ 1.000 - R$ 2.500</SelectItem>
                            <SelectItem value="2500-5000">R$ 2.500 - R$ 5.000</SelectItem>
                            <SelectItem value="5000-10000">R$ 5.000 - R$ 10.000</SelectItem>
                            <SelectItem value="acima-10000">Acima de R$ 10.000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">Prazo desejado</Label>
                        <Select onValueChange={(value) => setFormData(prev => ({...prev, timeline: value}))}>
                          <SelectTrigger className="bg-secondary border-border mt-1.5">
                            <SelectValue placeholder="Prazo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="flexivel">Flexível</SelectItem>
                            <SelectItem value="30-dias">Até 30 dias</SelectItem>
                            <SelectItem value="rapido">15 dias (+20%)</SelectItem>
                            <SelectItem value="urgente">7 dias (+50%)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              <AnimatedSection animation="fade-left" delay={150}>
                {/* Features */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-sm font-semibold mb-4">Recursos desejados</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Checkbox
                          id={feature}
                          onCheckedChange={(checked) => handleFeatureChange(feature, checked as boolean)}
                          className="border-border"
                        />
                        <label htmlFor={feature} className="text-xs text-muted-foreground cursor-pointer">
                          {feature}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-left" delay={200}>
                {/* Terms & Submit */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <BudgetTermsAccordion 
                    acceptTerms={acceptTerms}
                    setAcceptTerms={setAcceptTerms}
                  />

                  <div className="space-y-3 mt-6">
                    <Button
                      onClick={handleSubmitEmail}
                      disabled={!isFormValid}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Enviar por e-mail
                    </Button>
                    
                    <Button
                      onClick={generateWhatsAppMessage}
                      disabled={!isFormValid}
                      variant="outline"
                      className="w-full border-border disabled:opacity-50"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Enviar via WhatsApp
                    </Button>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-left" delay={250}>
                {/* Info */}
                <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Orçamento gratuito</p>
                    <p className="text-xs text-muted-foreground">Sem compromisso. Você decide se quer prosseguir.</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Budget;
