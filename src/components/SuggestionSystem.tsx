
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageSquare, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { suggestionSystemSchema } from "@/lib/validations";
import { useRateLimit } from "@/hooks/useRateLimit";

const SuggestionSystem = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const { isLimited, remainingTime, checkLimit } = useRateLimit({ maxAttempts: 3, windowMs: 60000 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = suggestionSystemSchema.safeParse({ name, email, suggestion });
    if (!result.success) {
      toast({
        title: "Erro",
        description: result.error.errors[0]?.message || "Dados inválidos.",
        variant: "destructive",
      });
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

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      toast({
        title: "Sugestão enviada!",
        description: "Obrigado pelo seu feedback. Analisaremos sua sugestão.",
      });
      
      setTimeout(() => {
        setName("");
        setEmail("");
        setSuggestion("");
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <Card className="bg-green-500/10 border-green-500/30">
        <CardContent className="p-6 text-center">
          <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-green-400 mb-2">
            Sugestão Enviada!
          </h3>
          <p className="text-green-300 text-sm">
            Obrigado pelo seu feedback. Nossa equipe analisará sua sugestão.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-black/50 border-[#0047ab]/20">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-[#0047ab]" />
          Envie uma Sugestão
        </CardTitle>
        <p className="text-gray-300 text-sm">
          Ajude-nos a melhorar! Compartilhe suas ideias e sugestões.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-white">
                Nome (opcional)
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-black/30 border-[#0047ab]/30 text-white focus:border-[#0047ab]"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-white">
                E-mail (opcional)
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-black/30 border-[#0047ab]/30 text-white focus:border-[#0047ab]"
                placeholder="seu@email.com"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="suggestion" className="text-white">
              Sua Sugestão *
            </Label>
            <Textarea
              id="suggestion"
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              className="bg-black/30 border-[#0047ab]/30 text-white focus:border-[#0047ab] min-h-[100px]"
              placeholder="Compartilhe sua ideia, sugestão de melhoria, nova funcionalidade ou qualquer feedback..."
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#0047ab] hover:bg-[#0047ab]/90 text-white"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Enviando...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Enviar Sugestão
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SuggestionSystem;
