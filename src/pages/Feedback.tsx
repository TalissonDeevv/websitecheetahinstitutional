
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MessageSquare, Star, Heart, Send, ThumbsUp, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { feedbackSchema } from "@/lib/validations";
import { useRateLimit } from "@/hooks/useRateLimit";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    rating: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();
  const { isLimited, remainingTime, checkLimit } = useRateLimit({ maxAttempts: 3, windowMs: 60000 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = feedbackSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    if (!checkLimit()) {
      toast({
        title: "Limite atingido",
        description: `Aguarde ${remainingTime}s antes de enviar novamente.`,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Feedback enviado!",
      description: "Obrigado pelo seu feedback! Sua opinião é muito importante para nós.",
    });
    setFormData({ name: "", email: "", type: "", rating: "", message: "" });
  };

  const feedbackTypes = [
    {
      value: "compliment",
      label: "Elogio",
      icon: Heart,
      description: "Conte o que mais gostou"
    },
    {
      value: "suggestion",
      label: "Sugestão",
      icon: Lightbulb,
      description: "Compartilhe suas ideias"
    },
    {
      value: "complaint",
      label: "Reclamação",
      icon: MessageSquare,
      description: "Relate problemas encontrados"
    }
  ];

  const ratings = [
    { value: "5", label: "Excelente", icon: "⭐⭐⭐⭐⭐" },
    { value: "4", label: "Muito Bom", icon: "⭐⭐⭐⭐" },
    { value: "3", label: "Bom", icon: "⭐⭐⭐" },
    { value: "2", label: "Regular", icon: "⭐⭐" },
    { value: "1", label: "Ruim", icon: "⭐" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <section className="pt-28 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Sua opinião é </span>
              <span className="text-[#0047ab]">fundamental</span>
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Compartilhe conosco sua experiência com nossos serviços. 
              Cada feedback nos ajuda a melhorar e oferecer soluções ainda melhores.
            </p>
          </div>

          {/* Seção de Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-black/50 border-[#0047ab]/20 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <ThumbsUp className="h-8 w-8 text-[#0047ab] mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">98%</div>
                <div className="text-white/70 text-sm">Satisfação dos Clientes</div>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-[#0047ab]/20 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <Star className="h-8 w-8 text-[#0047ab] mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">4.9</div>
                <div className="text-white/70 text-sm">Avaliação Média</div>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-[#0047ab]/20 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <MessageSquare className="h-8 w-8 text-[#0047ab] mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">500+</div>
                <div className="text-white/70 text-sm">Feedbacks Recebidos</div>
              </CardContent>
            </Card>
          </div>

          {/* Formulário de Feedback */}
          <Card className="bg-black/50 border-[#0047ab]/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">
                Envie seu Feedback
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
                  <Label className="text-white mb-4 block">Tipo de Feedback *</Label>
                  <RadioGroup 
                    value={formData.type} 
                    onValueChange={(value) => setFormData({...formData, type: value})}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  >
                    {feedbackTypes.map((type) => (
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
                  <Label className="text-white mb-4 block">Avaliação Geral *</Label>
                  <RadioGroup 
                    value={formData.rating} 
                    onValueChange={(value) => setFormData({...formData, rating: value})}
                    className="grid grid-cols-1 md:grid-cols-5 gap-3"
                  >
                    {ratings.map((rating) => (
                      <div key={rating.value} className="relative">
                        <RadioGroupItem 
                          value={rating.value} 
                          id={`rating-${rating.value}`}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={`rating-${rating.value}`}
                          className="flex flex-col items-center justify-center p-4 bg-black/30 border-2 border-[#0047ab]/20 rounded-lg cursor-pointer hover:border-[#0047ab]/50 peer-checked:border-[#0047ab] peer-checked:bg-[#0047ab]/10 transition-all"
                        >
                          <span className="text-2xl mb-1">{rating.icon}</span>
                          <span className="text-xs text-white/70 text-center">{rating.label}</span>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="message" className="text-white mb-2 block">Sua Mensagem *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-black/50 border-[#0047ab]/30 text-white min-h-[120px]"
                    placeholder="Conte-nos sobre sua experiência, sugestões ou qualquer comentário que queira compartilhar..."
                    required
                  />
                </div>

                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                {errors.type && <p className="text-xs text-destructive mt-1">{errors.type}</p>}
                {errors.rating && <p className="text-xs text-destructive mt-1">{errors.rating}</p>}
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}

                <Button 
                  type="submit"
                  size="lg"
                  disabled={isLimited}
                  className="w-full bg-[#0047ab] hover:bg-[#0047ab]/90 text-white py-4 text-lg font-semibold"
                >
                  {isLimited ? `Aguarde ${remainingTime}s` : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Feedback
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-white/70 text-sm">
              💙 Todos os feedbacks são lidos e analisados pela nossa equipe
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Feedback;
