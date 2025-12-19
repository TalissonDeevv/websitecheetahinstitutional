
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MessageSquare, AlertTriangle, Lightbulb, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Management = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Sua mensagem foi enviada para a gestão. Retornaremos em breve.",
    });
    setFormData({ name: "", email: "", type: "", subject: "", message: "" });
  };

  const messageTypes = [
    {
      value: "feedback",
      label: "Feedback Direto",
      icon: MessageSquare,
      description: "Compartilhe sua opinião sobre nossos serviços"
    },
    {
      value: "suggestion",
      label: "Sugestão Interna",
      icon: Lightbulb,
      description: "Sugira melhorias ou novas ideias"
    },
    {
      value: "complaint",
      label: "Problema Sério",
      icon: AlertTriangle,
      description: "Relate problemas com atendimento ou equipe"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <section className="pt-28 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Fale com a </span>
              <span className="text-[#0047ab]">Gestão</span>
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Canal direto para feedbacks, sugestões e questões importantes. 
              Sua opinião é fundamental para nosso crescimento.
            </p>
          </div>

          <Card className="bg-black/50 border-[#0047ab]/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">
                Envie sua Mensagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-white mb-2 block">Nome *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-black/50 border-[#0047ab]/30 text-white"
                      required
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
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-white mb-4 block">Tipo de Mensagem *</Label>
                  <RadioGroup 
                    value={formData.type} 
                    onValueChange={(value) => setFormData({...formData, type: value})}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  >
                    {messageTypes.map((type) => (
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

                <div>
                  <Label htmlFor="subject" className="text-white mb-2 block">Assunto *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="bg-black/50 border-[#0047ab]/30 text-white"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-white mb-2 block">Mensagem *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-black/50 border-[#0047ab]/30 text-white min-h-[120px]"
                    placeholder="Descreva detalhadamente sua mensagem..."
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-[#0047ab] hover:bg-[#0047ab]/90 text-white py-4 text-lg font-semibold"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-white/70 text-sm">
              ⚡ Todas as mensagens são tratadas com confidencialidade e prioridade pela gestão
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Management;
