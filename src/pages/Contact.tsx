import { useState } from "react";
import { MapPin, Mail, Clock, Send, MessageCircle, Wrench, FolderKanban, CreditCard, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { WebPageJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitação enviada",
      description: "Sua demanda foi registrada. Retornaremos em breve.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const leadership = [
    { name: "Talisson Souza", role: "CEO", email: "talinhodev@gmail.com" },
    { name: "Bruno Nugget", role: "CCO", email: "snoows2marina@outlook.com" },
  ];

  const categories = [
    {
      icon: Wrench,
      title: "Suporte Técnico",
      description: "Correções, ajustes, melhorias técnicas e resolução de incidentes em projetos ativos.",
    },
    {
      icon: FolderKanban,
      title: "Acompanhamento de Projeto",
      description: "Consultas sobre status, etapas de desenvolvimento e alinhamentos sobre entregas.",
    },
    {
      icon: CreditCard,
      title: "Financeiro",
      description: "Questões sobre pagamentos, prazos de faturamento e confirmações financeiras.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Central de Atendimento | Cheetah Solutions Network"
        description="Central de atendimento da Cheetah Solutions Network. Suporte técnico especializado, acompanhamento de projetos e atendimento para clientes ativos."
        ogTitle="Central de Atendimento | Cheetah Solutions Network"
        ogDescription="Suporte técnico especializado e acompanhamento de projetos para clientes ativos da Cheetah Solutions Network."
        ogUrl="/contato"
      />
      <WebPageJsonLd 
        title="Central de Atendimento | Cheetah Solutions Network"
        description="Central de atendimento digital da Cheetah Solutions Network. Suporte técnico e acompanhamento de projetos."
        url="/contato"
      />
      <BreadcrumbJsonLd 
        items={[
          { name: "Home", url: "/" },
          { name: "Central de Atendimento", url: "/contato" }
        ]}
      />
      <Header />
      
      {/* Hero */}
      <AnimatedSection animation="fade-up">
        <section className="pt-28 pb-12 px-4">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <p className="text-xs text-primary uppercase tracking-[0.2em] mb-6 font-medium">
                Atendimento
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
                Central de Atendimento<br />
                <span className="text-primary">Cheetah Solutions</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Canal oficial para clientes com projetos ativos. Suporte técnico, 
                acompanhamento de entregas e resolução de demandas operacionais.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Orientação inicial */}
      <AnimatedSection animation="fade-up" delay={50}>
        <section className="px-4 pb-12">
          <div className="container mx-auto">
            <div className="max-w-2xl bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-4 w-4 text-primary mt-1 shrink-0" />
                <div className="space-y-2">
                  <p className="text-sm leading-relaxed">
                    Esta central é destinada exclusivamente a clientes com projetos em andamento. 
                    Solicitações comerciais e novos orçamentos devem ser feitas pela página{" "}
                    <Link to="/orcamento" className="text-primary hover:underline font-medium">
                      Iniciar Projeto
                    </Link>.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    As demandas são organizadas por prioridade. Incidentes críticos recebem tratamento prioritário.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Categorias de atendimento */}
      <AnimatedSection animation="fade-up" delay={100}>
        <section className="px-4 pb-16">
          <div className="container mx-auto">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
              Categorias de atendimento
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {categories.map((cat, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6">
                  <cat.icon className="h-5 w-5 text-primary mb-3" />
                  <h3 className="text-sm font-semibold mb-2">{cat.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{cat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Info + Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Info Column */}
            <div className="lg:col-span-4">
              <AnimatedSection animation="fade-right">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                      Informações
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-primary mt-1 shrink-0" />
                        <div>
                          <p className="text-sm">Recife, PE</p>
                          <p className="text-xs text-muted-foreground">Brasil</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="h-4 w-4 text-primary mt-1 shrink-0" />
                        <div>
                          <p className="text-sm">contatocheetahsolutions@gmail.com</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-4 w-4 text-primary mt-1 shrink-0" />
                        <div>
                          <p className="text-sm">Seg a Sex, 9:00 às 18:00</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Compromisso de resposta */}
                  <div className="pt-6 border-t border-border">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                      Prazos de resposta
                    </h3>
                    <div className="space-y-3 text-sm">
                      <p className="text-muted-foreground leading-relaxed">
                        O prazo médio de resposta é de até 24 horas úteis. 
                        O atendimento funciona de segunda a sexta em horário comercial.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        Incidentes críticos que afetem sistemas em produção são priorizados 
                        e tratados com urgência pela equipe técnica.
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                      Contato direto
                    </h3>
                    <div className="space-y-3">
                      {leadership.map((person, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium">{person.name}</p>
                            <p className="text-xs text-primary">{person.role}</p>
                          </div>
                          <a 
                            href={`mailto:${person.email}`}
                            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Mail className="h-4 w-4" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <a
                      href="https://discord.gg/63qjkQwKmf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="w-full">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Servidor de Suporte no Discord
                      </Button>
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
            {/* Form Column */}
            <div className="lg:col-span-8">
              <AnimatedSection animation="fade-up" delay={100}>
                <div className="bg-card border border-border rounded-xl p-8 max-w-xl">
                  <h2 className="text-lg font-semibold mb-2">Abrir solicitação</h2>
                  <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
                    Descreva sua demanda com clareza. Informe o projeto relacionado 
                    e inclua links ou referências que ajudem na análise.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input
                        name="name"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-secondary border-border"
                      />
                      <Input
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-secondary border-border"
                      />
                    </div>
                    <Input
                      name="subject"
                      placeholder="Projeto ou assunto relacionado"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-secondary border-border"
                    />
                    <Textarea
                      name="message"
                      placeholder="Descreva o problema, ajuste ou solicitação..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-secondary border-border resize-none"
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Enviar solicitação
                    </Button>
                  </form>
                  
                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    Resposta em até 24 horas úteis
                  </p>
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

export default Contact;
