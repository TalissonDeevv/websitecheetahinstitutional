import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Send, 
  MessageCircle, 
  CheckCircle, 
  AlertCircle,
  FileText,
  MessageSquare,
  Rocket,
  Shield,
  Clock,
  Headphones,
  Code,
  Zap
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BudgetTermsAccordion from "@/components/BudgetTermsAccordion";
import AnimatedSection from "@/components/AnimatedSection";
import { useBudgetForm } from "@/hooks/useBudgetForm";
import { toast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";

const processSteps = [
  {
    step: "01",
    title: "Contato Inicial",
    description: "Você descreve os desafios operacionais da sua empresa",
    icon: FileText
  },
  {
    step: "02",
    title: "Diagnóstico",
    description: "Avaliamos a operação e identificamos gargalos estruturais",
    icon: MessageSquare
  },
  {
    step: "03",
    title: "Proposta",
    description: "Enviamos proposta com arquitetura e cronograma em até 48h",
    icon: Clock
  },
  {
    step: "04",
    title: "Implementação",
    description: "Após aprovação, iniciamos a estruturação com acompanhamento",
    icon: Rocket
  }
];

const benefits = [
  {
    title: "Diagnóstico incluso",
    description: "Mapeamento operacional antes de qualquer desenvolvimento",
    icon: Code
  },
  {
    title: "Acompanhamento dedicado",
    description: "Comunicação direta com a equipe de engenharia",
    icon: Headphones
  },
  {
    title: "Entrega estruturada",
    description: "Compromisso com prazos, qualidade e resultado operacional",
    icon: Shield
  },
  {
    title: "Sistemas preparados para crescer",
    description: "Arquitetura escalável definida desde o diagnóstico",
    icon: Zap
  }
];

const faqItems = [
  {
    question: "O diagnóstico é gratuito?",
    answer: "A análise inicial e proposta são gratuitas e sem compromisso. Você decide se quer prosseguir após receber nossa avaliação e cronograma."
  },
  {
    question: "Qual o prazo para receber a proposta?",
    answer: "Retornamos em até 48 horas úteis com uma proposta que inclui diagnóstico preliminar, arquitetura sugerida e cronograma. Operações mais complexas podem necessitar de prazo adicional."
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Trabalhamos com pagamento estruturado: entrada na aprovação e parcelas conforme entregas. Aceitamos PIX, boleto e cartão."
  },
  {
    question: "Oferecem acompanhamento após a implantação?",
    answer: "Sim, 30 dias de acompanhamento incluso para ajustes e validação. Planos de manutenção contínua estão disponíveis para monitoramento e evolução."
  },
  {
    question: "Posso acompanhar o andamento?",
    answer: "Sim, você terá acesso a ambiente de homologação para acompanhar o progresso e validar cada etapa antes da implantação final."
  },
  {
    question: "E se o escopo precisar mudar?",
    answer: "Mudanças de escopo são avaliadas com base no impacto na arquitetura. Apresentamos um adendo transparente antes de qualquer alteração."
  }
];

const Budget = () => {
  const {
    formData,
    updateField,
    acceptTerms,
    setAcceptTerms,
    handleFeatureChange,
    getSuggestedFeatures,
    getDescriptionValidation,
    getLeadQualification,
    isPhoneValid,
    isFormValid,
    submitted,
    markAsSubmitted
  } = useBudgetForm();

  const services = [
    { name: "Estruturação de Sistemas", price: "A partir de R$ 2.500" },
    { name: "Automação de Processos", price: "A partir de R$ 1.500" },
    { name: "Integração de Sistemas", price: "A partir de R$ 1.000" },
    { name: "Plataforma Digital", price: "A partir de R$ 3.000" },
    { name: "Dashboard Operacional", price: "A partir de R$ 2.000" },
    { name: "Diagnóstico Operacional", price: "A partir de R$ 800" }
  ];

  const features = [
    "Dashboard Administrativo",
    "Automação de Processos",
    "Integração entre Sistemas",
    "Relatórios Operacionais",
    "Controle de Usuários",
    "Painel de Métricas",
    "Integração com APIs",
    "Notificações Automáticas",
    "Multi-departamento",
    "Monitoramento em Tempo Real"
  ];

  const suggestedFeatures = getSuggestedFeatures();
  const descriptionValidation = getDescriptionValidation();

  const generateWhatsAppMessage = () => {
    // Obter qualificação interna para incluir na mensagem (não visível para usuário)
    const qualification = getLeadQualification();
    
    const message = `Olá! Gostaria de solicitar um orçamento:

Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
${formData.company ? `Empresa: ${formData.company}` : ''}

Serviço: ${formData.service}
Descrição: ${formData.description}
Orçamento: ${formData.budget}
Prazo: ${formData.timeline}
${formData.features.length > 0 ? `\nRecursos: ${formData.features.join(', ')}` : ''}

[Lead: ${qualification}]`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511999999999?text=${encodedMessage}`, '_blank');
    
    markAsSubmitted();
    toast({
      title: "Solicitação enviada",
      description: "Redirecionando para o WhatsApp...",
    });
  };

  const handleSubmitEmail = () => {
    // Obter qualificação interna para incluir na mensagem (não visível para usuário)
    const qualification = getLeadQualification();
    
    const subject = encodeURIComponent("Solicitação de Orçamento - Cheetah Network");
    const body = encodeURIComponent(`Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
${formData.company ? `Empresa: ${formData.company}` : ''}

Serviço: ${formData.service}
Descrição: ${formData.description}
Orçamento: ${formData.budget}
Prazo: ${formData.timeline}
${formData.features.length > 0 ? `\nRecursos: ${formData.features.join(', ')}` : ''}

[Lead: ${qualification}]`);

    window.open(`mailto:contato@cheetahnetwork.com?subject=${subject}&body=${body}`);
    
    markAsSubmitted();
    toast({
      title: "Solicitação enviada",
      description: "Abrindo seu cliente de e-mail...",
    });
  };

  const canSubmit = isFormValid();
  const canUseWhatsApp = canSubmit && isPhoneValid();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Cheetah Solutions Network | Iniciar Projeto"
        description="Descreva os desafios operacionais da sua empresa. Retornamos em até 48 horas com diagnóstico preliminar e proposta de estruturação."
        ogTitle="Iniciar Projeto | Cheetah Solutions Network"
        ogDescription="Descreva os desafios operacionais da sua empresa. Retornamos em até 48 horas com diagnóstico preliminar e proposta estruturada."
        ogUrl="/orcamento"
      />
      <Header />
      
      {/* Success feedback */}
      {submitted && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in">
          <CheckCircle className="h-5 w-5" />
          <span>Solicitação enviada com sucesso!</span>
        </div>
      )}
      
      {/* Hero */}
      <AnimatedSection animation="fade-up">
        <section className="pt-28 pb-12 px-4">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <p className="text-xs text-primary uppercase tracking-[0.2em] mb-6 font-medium">
                Orçamento
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
                Iniciar<br />
                <span className="text-primary">projeto.</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Descreva os desafios operacionais da sua empresa. 
                Retornamos em até 48 horas com diagnóstico preliminar e proposta.
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
                <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                  <h2 className="text-lg font-semibold mb-6 text-card-foreground">Dados do projeto</h2>
                  
                  <div className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-xs text-muted-foreground font-medium">Nome *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => updateField("name", e.target.value)}
                          className="bg-secondary border-border mt-1.5 text-secondary-foreground placeholder:text-muted-foreground/60"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-xs text-muted-foreground font-medium">E-mail *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          className="bg-secondary border-border mt-1.5 text-secondary-foreground placeholder:text-muted-foreground/60"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-xs text-muted-foreground font-medium">Telefone *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => updateField("phone", e.target.value)}
                          className="bg-secondary border-border mt-1.5 text-secondary-foreground placeholder:text-muted-foreground/60"
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-xs text-muted-foreground font-medium">Empresa</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => updateField("company", e.target.value)}
                          className="bg-secondary border-border mt-1.5 text-secondary-foreground placeholder:text-muted-foreground/60"
                          placeholder="Opcional"
                        />
                      </div>
                    </div>

                    <div>
                      <Label className="text-xs text-muted-foreground font-medium">Tipo de serviço *</Label>
                      <Select 
                        value={formData.service} 
                        onValueChange={(value) => updateField("service", value)}
                      >
                        <SelectTrigger className="bg-secondary border-border mt-1.5 text-secondary-foreground">
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
                      <Label htmlFor="description" className="text-xs text-muted-foreground font-medium">Descrição do projeto *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => updateField("description", e.target.value)}
                        className="bg-secondary border-border mt-1.5 min-h-[100px] resize-none text-secondary-foreground placeholder:text-muted-foreground/60"
                        placeholder="Descreva o que você precisa..."
                      />
                      {descriptionValidation.message && (
                        <p className="text-xs text-muted-foreground mt-1.5 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {descriptionValidation.message}
                        </p>
                      )}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-xs text-muted-foreground font-medium">Orçamento disponível</Label>
                        <Select 
                          value={formData.budget}
                          onValueChange={(value) => updateField("budget", value)}
                        >
                          <SelectTrigger className="bg-secondary border-border mt-1.5 text-secondary-foreground">
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
                        <Label className="text-xs text-muted-foreground font-medium">Prazo desejado</Label>
                        <Select 
                          value={formData.timeline}
                          onValueChange={(value) => updateField("timeline", value)}
                        >
                          <SelectTrigger className="bg-secondary border-border mt-1.5 text-secondary-foreground">
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
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                  <h3 className="text-sm font-semibold mb-4 text-card-foreground">Recursos desejados</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {features.map((feature) => {
                      const isSuggested = suggestedFeatures.includes(feature);
                      const isChecked = formData.features.includes(feature);
                      
                      return (
                        <div 
                          key={feature} 
                          className={`flex items-center gap-2 ${isSuggested && !isChecked ? 'opacity-100' : ''}`}
                        >
                          <Checkbox
                            id={feature}
                            checked={isChecked}
                            onCheckedChange={(checked) => handleFeatureChange(feature, checked as boolean)}
                            className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                          />
                          <label 
                            htmlFor={feature} 
                            className={`text-xs cursor-pointer ${
                              isSuggested && !isChecked 
                                ? 'text-primary font-medium' 
                                : 'text-muted-foreground'
                            }`}
                          >
                            {feature}
                            {isSuggested && !isChecked && (
                              <span className="text-[10px] ml-1 text-primary/70">•</span>
                            )}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                  {suggestedFeatures.length > 0 && formData.service && (
                    <p className="text-[10px] text-muted-foreground mt-3 border-t border-border pt-3">
                      Recursos destacados são comuns para {formData.service}
                    </p>
                  )}
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-left" delay={200}>
                {/* Terms & Submit */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                  <BudgetTermsAccordion 
                    acceptTerms={acceptTerms}
                    setAcceptTerms={setAcceptTerms}
                  />

                  <div className="space-y-3 mt-6">
                    <Button
                      onClick={handleSubmitEmail}
                      disabled={!canSubmit}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Enviar por e-mail
                    </Button>
                    
                    <Button
                      onClick={generateWhatsAppMessage}
                      disabled={!canUseWhatsApp}
                      variant="outline"
                      className="w-full border-border text-foreground hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
                      title={!isPhoneValid() && formData.phone ? "Informe um telefone válido para usar WhatsApp" : ""}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Enviar via WhatsApp
                    </Button>
                    
                    {!isPhoneValid() && formData.phone.length > 0 && (
                      <p className="text-xs text-muted-foreground text-center">
                        Telefone inválido para WhatsApp
                      </p>
                    )}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-left" delay={250}>
                {/* Info */}
                <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg border border-border">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Orçamento gratuito</p>
                    <p className="text-xs text-muted-foreground">Sem compromisso. Você decide se quer prosseguir.</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <p className="text-xs text-primary uppercase tracking-[0.2em] mb-4 font-medium">
                Processo
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Como funciona
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <AnimatedSection key={item.step} animation="fade-up" delay={index * 100}>
                <div className="bg-card border border-border rounded-xl p-6 text-center h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs text-primary font-medium">{item.step}</span>
                  <h3 className="text-foreground font-semibold mt-1 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <p className="text-xs text-primary uppercase tracking-[0.2em] mb-4 font-medium">
                Diferenciais
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Por que escolher a Cheetah
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} animation="fade-up" delay={index * 100}>
                <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <p className="text-xs text-primary uppercase tracking-[0.2em] mb-4 font-medium">
                Dúvidas
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Perguntas frequentes
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:bg-card"
                >
                  <AccordionTrigger className="text-foreground hover:text-primary text-left py-4 text-sm font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Budget;
