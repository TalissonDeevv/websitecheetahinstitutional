import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Suggestions = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
    { value: "geral", label: "Sugestão Geral" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero */}
      <section className="pt-28 pb-12 px-4 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Feedback</span>
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              Sugestões
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Sua opinião nos ajuda a melhorar. Compartilhe ideias, críticas ou sugestões.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form */}
      <section className="pb-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={100} className="lg:col-span-2">
              <div className="p-6 border border-border rounded-lg bg-card">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-background border-border"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-background border-border"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Categoria</Label>
                    <Select value={category} onValueChange={setCategory} required>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat.value} value={cat.value}>
                            {cat.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="suggestion">Sua Sugestão</Label>
                    <Textarea
                      id="suggestion"
                      value={suggestion}
                      onChange={(e) => setSuggestion(e.target.value)}
                      placeholder="Descreva sua sugestão..."
                      className="bg-background border-border min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {isSubmitting ? "Enviando..." : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Enviar Sugestão
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="p-6 border border-border rounded-lg bg-card">
                <CheckCircle className="h-6 w-6 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3">Por que sugerir?</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Ajude-nos a melhorar nossos serviços</li>
                  <li>• Contribua para novas funcionalidades</li>
                  <li>• Participe da evolução da Cheetah</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    Tempo médio de resposta: 3-5 dias úteis
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Suggestions;
