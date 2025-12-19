
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Calculator, Settings, CheckCircle, Send, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BudgetTermsAccordion from "@/components/BudgetTermsAccordion";

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
    { name: "Bot Discord/Telegram", basePrice: 500, multiplier: 1 },
    { name: "Website Básico", basePrice: 800, multiplier: 1.2 },
    { name: "Website Avançado", basePrice: 1500, multiplier: 1.5 },
    { name: "Sistema Completo", basePrice: 2500, multiplier: 2 },
    { name: "Integração API", basePrice: 600, multiplier: 1.3 },
    { name: "E-commerce", basePrice: 2000, multiplier: 1.8 }
  ];

  const projectFeatures = [
    "Dashboard Administrativo",
    "Sistema de Pagamento",
    "Integração com WhatsApp",
    "Sistema de Usuários",
    "Relatórios Avançados",
    "Backup Automático",
    "SSL e Segurança",
    "SEO Otimizado",
    "Sistema de Login",
    "Base de Dados Avançada",
    "Notificações Push",
    "Multi-idioma",
    "Design Responsivo",
    "Chat ao Vivo",
    "Integração com Redes Sociais",
    "Sistema de Comentários",
    "Painel de Analytics",
    "Integração com Google Maps",
    "Sistema de Upload de Arquivos",
    "Certificados SSL",
    "Sistema de Reviews",
    "Integração com YouTube",
    "Sistema de Newsletter",
    "Otimização para Mobile",
    "Sistema de Cupons",
    "Integração com Instagram",
    "Sistema de Afiliados",
    "Modo Dark/Light",
    "Sistema de Tickets",
    "Integração com Mercado Pago"
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

📋 *Dados do Cliente:*
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
${formData.company ? `Empresa: ${formData.company}` : ''}

🛠️ *Serviço Solicitado:*
${formData.service}

📝 *Descrição do Projeto:*
${formData.description}

💰 *Orçamento Disponível:*
${formData.budget}

⏰ *Prazo Desejado:*
${formData.timeline}

${formData.features.length > 0 ? `🔧 *Recursos Solicitados:*
${formData.features.map(f => `• ${f}`).join('\n')}` : ''}

Aguardo retorno!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511999999999?text=${encodedMessage}`, '_blank');
  };

  const handleSubmitQuote = () => {
    const subject = encodeURIComponent("Solicitação de Orçamento - Cheetah Network");
    const body = encodeURIComponent(`Olá,

Gostaria de solicitar um orçamento com as seguintes informações:

DADOS DO CLIENTE:
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
${formData.company ? `Empresa: ${formData.company}` : ''}

DETALHES DO PROJETO:
Serviço: ${formData.service}
Descrição: ${formData.description}
Orçamento Disponível: ${formData.budget}
Prazo Desejado: ${formData.timeline}

${formData.features.length > 0 ? `RECURSOS SOLICITADOS:
${formData.features.map(f => `• ${f}`).join('\n')}` : ''}

Aguardo retorno.

Atenciosamente,
${formData.name}`);

    window.open(`mailto:contato@cheetahnetwork.com?subject=${subject}&body=${body}`);
  };

  const isFormValid = formData.name && formData.email && formData.phone && formData.service && formData.description && acceptTerms;

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Faça seu </span>
            <span className="text-[#0047ab]">Orçamento</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Faça seu orçamento personalizado e receba uma proposta detalhada
          </p>
        </div>
      </section>

      {/* Budget Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <Card className="bg-gray-900/50 border-[#0047ab]/20">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                  <Calculator className="h-6 w-6 text-[#0047ab]" />
                  Dados do Projeto
                </h2>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                        className="bg-black/50 border-[#0047ab]/20 text-white"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                        className="bg-black/50 border-[#0047ab]/20 text-white"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                        className="bg-black/50 border-[#0047ab]/20 text-white"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Empresa (opcional)</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({...prev, company: e.target.value}))}
                        className="bg-black/50 border-[#0047ab]/20 text-white"
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Tipo de Serviço *</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({...prev, service: value}))}>
                      <SelectTrigger className="bg-black/50 border-[#0047ab]/20 text-white">
                        <SelectValue placeholder="Selecione o serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.name} value={service.name}>
                            {service.name} - A partir de R$ {service.basePrice}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="description">Descrição do Projeto *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({...prev, description: e.target.value}))}
                      className="bg-black/50 border-[#0047ab]/20 text-white min-h-[100px]"
                      placeholder="Descreva detalhadamente o que você precisa..."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="budget">Orçamento Disponível</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({...prev, budget: value}))}>
                        <SelectTrigger className="bg-black/50 border-[#0047ab]/20 text-white">
                          <SelectValue placeholder="Faixa de orçamento" />
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
                      <Label htmlFor="timeline">Prazo Desejado</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({...prev, timeline: value}))}>
                        <SelectTrigger className="bg-black/50 border-[#0047ab]/20 text-white">
                          <SelectValue placeholder="Prazo esperado" />
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
              </CardContent>
            </Card>

            {/* Features Selection */}
            <Card className="bg-gray-900/50 border-[#0047ab]/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                  <Settings className="h-5 w-5 text-[#0047ab]" />
                  Recursos Desejados
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Selecione os recursos que você gostaria no seu projeto:
                </p>
                <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                  {projectFeatures.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Checkbox
                        id={feature}
                        onCheckedChange={(checked) => handleFeatureChange(feature, checked as boolean)}
                        className="bg-black/50 border-[#0047ab]/20"
                      />
                      <label htmlFor={feature} className="text-gray-300 text-sm cursor-pointer">
                        {feature}
                      </label>
                    </div>
                  ))}
                </div>
                {formData.features.length > 0 && (
                  <div className="mt-4 p-3 bg-[#0047ab]/20 rounded-lg">
                    <p className="text-white text-sm font-medium mb-2">
                      Recursos Selecionados ({formData.features.length}):
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {formData.features.map((feature) => (
                        <span key={feature} className="text-xs bg-[#0047ab] text-white px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Terms and Submit Section */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-br from-[#0047ab]/10 to-black/50 border-[#0047ab]/50">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-6 text-white">
                Finalizar Solicitação
              </h3>
              
              <BudgetTermsAccordion 
                acceptTerms={acceptTerms}
                setAcceptTerms={setAcceptTerms}
              />

              <div className="space-y-3 mt-6">
                <Button
                  onClick={handleSubmitQuote}
                  disabled={!isFormValid}
                  className="w-full bg-[#0047ab] hover:bg-[#0047ab]/80 text-white disabled:opacity-50"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Orçamento por E-mail
                </Button>
                
                <Button
                  onClick={generateWhatsAppMessage}
                  disabled={!isFormValid}
                  variant="outline"
                  className="w-full border-[#0047ab] text-[#0047ab] hover:bg-[#0047ab] hover:text-white disabled:opacity-50"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Orçamento Rápido via WhatsApp
                </Button>
              </div>

              <p className="text-center text-gray-400 text-xs mt-4">
                *Preencha todos os campos obrigatórios e aceite os termos para continuar
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">
            Informações Importantes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-black/50 border-[#0047ab]/20 text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-8 w-8 text-[#0047ab] mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-white">Orçamento Gratuito</h3>
                <p className="text-gray-300 text-sm">
                  Análise completa sem custos
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-[#0047ab]/20 text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-8 w-8 text-[#0047ab] mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-white">Resposta Rápida</h3>
                <p className="text-gray-300 text-sm">
                  Retorno em até 48 horas
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-[#0047ab]/20 text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-8 w-8 text-[#0047ab] mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-white">Sem Compromisso</h3>
                <p className="text-gray-300 text-sm">
                  Você decide se quer prosseguir
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Budget;
