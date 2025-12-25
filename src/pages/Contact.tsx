import { useState } from "react";
import { MapPin, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

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
      title: "Mensagem enviada",
      description: "Retornaremos em breve.",
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
    { name: "Talisson Souza", role: "CEO", email: "talissondeveloper@gmail.com" },
    { name: "José Jorge", role: "CTO", email: "J.jfalasco77@gmail.com" },
    { name: "Bruno Nugget", role: "CCO", email: "snoows2marina@outlook.com" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero */}
      <AnimatedSection animation="fade-up">
        <section className="pt-28 pb-12 px-4">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <p className="text-xs text-primary uppercase tracking-[0.2em] mb-6 font-medium">
                Contato
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
                Vamos conversar<br />
                <span className="text-primary">sobre seu projeto.</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Sem compromisso. Conte o que precisa e avaliamos 
                se faz sentido trabalharmos juntos.
              </p>
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
                          <p className="text-sm">Seg - Sex, 9:00 - 18:00</p>
                        </div>
                      </div>
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
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Entrar no Discord
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
            {/* Form Column */}
            <div className="lg:col-span-8">
              <AnimatedSection animation="fade-up" delay={100}>
                <div className="bg-card border border-border rounded-xl p-8 max-w-xl">
                  <h2 className="text-lg font-semibold mb-6">Envie uma mensagem</h2>
                  
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
                      placeholder="Assunto"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-secondary border-border"
                    />
                    <Textarea
                      name="message"
                      placeholder="Descreva seu projeto ou dúvida..."
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
                      Enviar mensagem
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
