
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Lightbulb, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Sugestão enviada com sucesso!",
        description: "Obrigado por sua contribuição. Analisaremos sua sugestão em breve.",
      });
      
      // Reset form
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
    { value: "atendimento", label: "Atendimento ao Cliente" },
    { value: "tecnologia", label: "Tecnologia" },
    { value: "geral", label: "Sugestão Geral" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="bg-[#0047ab]/10 rounded-lg p-3 border border-[#0047ab]/20">
                  <Lightbulb className="h-8 w-8 text-[#0047ab]" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">
                  Sugestões
                </h1>
              </div>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Sua opinião é muito importante para nós! Compartilhe suas ideias e sugestões 
                para tornarmos nossos serviços ainda melhores.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Suggestion Form */}
              <div className="lg:col-span-2">
                <Card className="bg-gray-900/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Send className="h-5 w-5 text-[#0047ab]" />
                      Enviar Sugestão
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Preencha o formulário abaixo com sua sugestão detalhada
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-white">
                            Nome *
                          </Label>
                          <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-gray-800 border-gray-600 text-white"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-white">
                            E-mail *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-gray-800 border-gray-600 text-white"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="category" className="text-white">
                          Categoria *
                        </Label>
                        <Select value={category} onValueChange={setCategory} required>
                          <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                            <SelectValue placeholder="Selecione uma categoria" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-600">
                            {categories.map((cat) => (
                              <SelectItem 
                                key={cat.value} 
                                value={cat.value}
                                className="text-white hover:bg-gray-700"
                              >
                                {cat.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="suggestion" className="text-white">
                          Sua Sugestão *
                        </Label>
                        <Textarea
                          id="suggestion"
                          value={suggestion}
                          onChange={(e) => setSuggestion(e.target.value)}
                          placeholder="Descreva sua sugestão de forma detalhada..."
                          className="bg-gray-800 border-gray-600 text-white min-h-[120px]"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#0047ab] hover:bg-[#0047ab]/80 text-white"
                      >
                        {isSubmitting ? (
                          "Enviando..."
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Enviar Sugestão
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Info Sidebar */}
              <div className="space-y-6">
                <Card className="bg-gray-900/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      Por que sugerir?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-gray-300 space-y-3">
                      <p className="text-sm">
                        • Ajude-nos a melhorar nossos serviços
                      </p>
                      <p className="text-sm">
                        • Contribua para o desenvolvimento de novas funcionalidades
                      </p>
                      <p className="text-sm">
                        • Participe ativamente da evolução da Cheetah Network
                      </p>
                      <p className="text-sm">
                        • Torne nossa plataforma mais útil para todos
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white text-sm">
                      Tempo de Resposta
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm">
                      Analisamos todas as sugestões recebidas. 
                      O tempo médio de resposta é de 3-5 dias úteis.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Suggestions;
