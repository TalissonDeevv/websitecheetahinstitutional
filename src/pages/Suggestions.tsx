import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, CheckCircle, MessageSquare, Lightbulb, Star, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { suggestionSchema } from "@/lib/validations";
import { useRateLimit } from "@/hooks/useRateLimit";

const Suggestions = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();
  const { isLimited, remainingTime, checkLimit } = useRateLimit({ maxAttempts: 3, windowMs: 60000 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = suggestionSchema.safeParse({ name, email, category, suggestion });
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

    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Sugestão enviada",
        description: "Obrigado pela sua contribuição. Analisaremos em breve.",
      });
      setName("");
      setEmail("");
      setCategory("");
      setSuggestion("");
      setIsSubmitting(false);
    }, 1000);
  };

  const categories = [
    { value: "servicos", label: "Novos Serviços" },
    { value: "website", label: "Melhorias no Website" },
    { value: "atendimento", label: "Atendimento" },
    { value: "processos", label: "Processos de Trabalho" },
    { value: "geral", label: "Sugestão Geral" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Cheetah Solutions Network | Sugestões e Melhorias"
        description="Envie suas sugestões para a Cheetah Solutions Network. Sua opinião é fundamental para nossa evolução e melhoria contínua dos serviços."
        ogTitle="Sugestões e Melhorias | Cheetah Solutions Network"
        ogDescription="Envie suas sugestões para a Cheetah Solutions Network. Sua opinião é fundamental para nossa evolução e melhoria contínua dos serviços."
        ogUrl="/sugestoes"
        canonical="/sugestoes"
      />
      <Header />
      
      {/* Hero - Asymmetric like other pages */}
      <section className="pt-28 pb-20 px-4">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-5xl">
              <p className="text-xs text-primary uppercase tracking-[0.2em] mb-6 font-medium">
                Feedback
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">
                Sugestões e<br />
                <span className="text-primary">Melhorias</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Sua opinião é fundamental para nossa evolução. 
                Compartilhe ideias, críticas construtivas ou sugestões de melhoria.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left column - Form */}
            <AnimatedSection className="lg:col-span-7">
              <div className="bg-card border border-border rounded-xl p-8 md:p-10">
                <h2 className="text-xl font-semibold mb-6">Envie sua sugestão</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">Nome</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => { setName(e.target.value); if (errors.name) setErrors(p => ({ ...p, name: "" })); }}
                        placeholder="Seu nome"
                        className="bg-background border-border"
                        maxLength={100}
                        required
                      />
                      {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">E-mail</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors(p => ({ ...p, email: "" })); }}
                        placeholder="seu@email.com"
                        className="bg-background border-border"
                        maxLength={255}
                        required
                      />
                      {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-sm font-medium">Categoria</Label>
                    <Select value={category} onValueChange={(v) => { setCategory(v); if (errors.category) setErrors(p => ({ ...p, category: "" })); }} required>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat.value} value={cat.value}>
                            {cat.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.category && <p className="text-xs text-destructive">{errors.category}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="suggestion" className="text-sm font-medium">Sua Sugestão</Label>
                    <Textarea
                      id="suggestion"
                      value={suggestion}
                      onChange={(e) => { setSuggestion(e.target.value); if (errors.suggestion) setErrors(p => ({ ...p, suggestion: "" })); }}
                      placeholder="Descreva sua sugestão com o máximo de detalhes possível..."
                      className="bg-background border-border min-h-[160px] resize-none"
                      maxLength={2000}
                      required
                    />
                    {errors.suggestion && <p className="text-xs text-destructive">{errors.suggestion}</p>}
                    <p className="text-xs text-muted-foreground">
                      Quanto mais detalhes, melhor poderemos avaliar sua sugestão.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || isLimited}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6"
                  >
                    {isLimited ? `Aguarde ${remainingTime}s` : isSubmitting ? "Enviando..." : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Enviar Sugestão
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Right column - Info */}
            <AnimatedSection delay={100} className="lg:col-span-5">
              <div className="sticky top-32 space-y-8">
                <div>
                  <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                    Por que sugerir?
                  </span>
                  <h3 className="text-xl font-semibold mt-3 mb-4">
                    Sua contribuição importa
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Valorizamos feedback de clientes, parceiros e visitantes. 
                    Cada sugestão é analisada pela equipe e pode influenciar 
                    diretamente nossos processos e serviços.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Lightbulb className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Novas ideias</h4>
                      <p className="text-xs text-muted-foreground">
                        Sugestões de serviços ou funcionalidades
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Star className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Melhorias</h4>
                      <p className="text-xs text-muted-foreground">
                        Ajustes em processos ou experiências existentes
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Feedback geral</h4>
                      <p className="text-xs text-muted-foreground">
                        Críticas construtivas e observações
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-2">Tempo médio de resposta</p>
                  <p className="font-medium">3-5 dias úteis</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Prefere falar diretamente?
              </h2>
              <p className="text-muted-foreground mb-6">
                Se sua sugestão for urgente ou precisar de mais contexto, 
                entre em contato diretamente com nossa equipe.
              </p>
              <a href="/atendimento">
                <Button 
                  variant="outline"
                  className="border-border text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  Ir para Contato
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Suggestions;
