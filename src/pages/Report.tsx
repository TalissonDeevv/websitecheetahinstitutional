
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertTriangle, FileText, Shield, Users, Send, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Report = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reportType: "",
    category: "",
    subject: "",
    description: "",
    evidence: "",
    anonymous: false
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Denúncia enviada!",
      description: "Sua denúncia foi registrada. Analisaremos o caso e retornaremos em breve.",
    });
    setFormData({ 
      name: "", 
      email: "", 
      phone: "", 
      reportType: "", 
      category: "", 
      subject: "", 
      description: "", 
      evidence: "", 
      anonymous: false 
    });
  };

  const reportTypes = [
    {
      value: "abuse",
      label: "Abuso ou Assédio",
      icon: AlertTriangle,
      description: "Comportamento abusivo, assédio ou intimidação"
    },
    {
      value: "fraud",
      label: "Fraude ou Golpe",
      icon: Shield,
      description: "Atividades fraudulentas ou tentativas de golpe"
    },
    {
      value: "inappropriate",
      label: "Conteúdo Inapropriado",
      icon: FileText,
      description: "Conteúdo ofensivo, discriminatório ou inadequado"
    },
    {
      value: "other",
      label: "Outros",
      icon: Users,
      description: "Outras violações ou comportamentos inadequados"
    }
  ];

  const categories = [
    "Assédio Sexual",
    "Discriminação",
    "Ameaças",
    "Bullying",
    "Fraude Financeira",
    "Golpe Online",
    "Conteúdo Ofensivo",
    "Spam",
    "Violação de Privacidade",
    "Outros"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <section className="pt-28 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Reportar </span>
              <span className="text-[#0047ab]">Abuso</span>
              <span className="text-white"> ou </span>
              <span className="text-[#0047ab]">Denúncia</span>
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Utilize este canal para reportar qualquer tipo de abuso, comportamento inadequado 
              ou violação. Todas as denúncias são tratadas com seriedade e confidencialidade.
            </p>
          </div>

          <Alert className="mb-8 bg-red-900/20 border-red-500/30">
            <AlertCircle className="h-4 w-4 text-red-400" />
            <AlertDescription className="text-red-100">
              <strong>Importante:</strong> Se você está em situação de perigo imediato, 
              entre em contato com as autoridades locais (190 - Polícia, 180 - Central de Atendimento à Mulher).
            </AlertDescription>
          </Alert>

          <Card className="bg-black/50 border-[#0047ab]/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">
                Formulário de Denúncia
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Dados Pessoais */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#0047ab] mb-4">Dados do Denunciante</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-white mb-2 block">Nome Completo</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-black/50 border-[#0047ab]/30 text-white"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white mb-2 block">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-black/50 border-[#0047ab]/30 text-white"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-white mb-2 block">Telefone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-black/50 border-[#0047ab]/30 text-white"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="anonymous"
                      checked={formData.anonymous}
                      onChange={(e) => setFormData({...formData, anonymous: e.target.checked})}
                      className="w-4 h-4 text-[#0047ab] bg-black/50 border-[#0047ab]/30 rounded focus:ring-[#0047ab]"
                    />
                    <Label htmlFor="anonymous" className="text-white text-sm">
                      Denúncia anônima (seus dados não serão divulgados)
                    </Label>
                  </div>
                </div>

                {/* Tipo de Denúncia */}
                <div>
                  <Label className="text-white mb-4 block">Tipo de Denúncia *</Label>
                  <RadioGroup 
                    value={formData.reportType} 
                    onValueChange={(value) => setFormData({...formData, reportType: value})}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {reportTypes.map((type) => (
                      <div key={type.value} className="relative">
                        <RadioGroupItem 
                          value={type.value} 
                          id={type.value}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={type.value}
                          className="flex flex-col items-center justify-center p-6 bg-black/30 border-2 border-[#0047ab]/20 rounded-lg cursor-pointer hover:border-[#0047ab]/50 peer-checked:border-[#0047ab] peer-checked:bg-[#0047ab]/10 transition-all"
                        >
                          <type.icon className="h-8 w-8 text-[#0047ab] mb-3" />
                          <span className="font-semibold text-white mb-2">{type.label}</span>
                          <span className="text-xs text-white/70 text-center">{type.description}</span>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Categoria */}
                <div>
                  <Label htmlFor="category" className="text-white mb-2 block">Categoria Específica</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                    <SelectTrigger className="bg-black/50 border-[#0047ab]/30 text-white">
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-[#0047ab]/30">
                      {categories.map((category) => (
                        <SelectItem key={category} value={category} className="text-white hover:bg-[#0047ab]/20">
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Detalhes da Denúncia */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#0047ab] mb-4">Detalhes da Denúncia</h3>
                  
                  <div>
                    <Label htmlFor="subject" className="text-white mb-2 block">Assunto *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="bg-black/50 border-[#0047ab]/30 text-white"
                      placeholder="Resumo da denúncia"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-white mb-2 block">Descrição Detalhada *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      className="bg-black/50 border-[#0047ab]/30 text-white min-h-[150px]"
                      placeholder="Descreva detalhadamente o ocorrido, incluindo datas, horários, local e pessoas envolvidas..."
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="evidence" className="text-white mb-2 block">Evidências ou Provas</Label>
                    <Textarea
                      id="evidence"
                      value={formData.evidence}
                      onChange={(e) => setFormData({...formData, evidence: e.target.value})}
                      className="bg-black/50 border-[#0047ab]/30 text-white min-h-[100px]"
                      placeholder="Descreva as evidências que você possui (prints, documentos, testemunhas, etc.)"
                    />
                  </div>
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-[#0047ab] hover:bg-[#0047ab]/90 text-white py-4 text-lg font-semibold"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Denúncia
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 space-y-4">
            <Alert className="bg-[#0047ab]/10 border-[#0047ab]/30">
              <Shield className="h-4 w-4 text-[#0047ab]" />
              <AlertDescription className="text-white/90">
                <strong>Confidencialidade:</strong> Todas as denúncias são tratadas com total confidencialidade. 
                Seus dados pessoais serão protegidos conforme nossa política de privacidade.
              </AlertDescription>
            </Alert>

            <div className="text-center">
              <p className="text-white/70 text-sm">
                ⚡ Analisamos todas as denúncias em até 48 horas úteis
              </p>
              <p className="text-white/70 text-sm mt-2">
                📞 Para casos urgentes, entre em contato pelo WhatsApp: (11) 99999-9999
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Report;
