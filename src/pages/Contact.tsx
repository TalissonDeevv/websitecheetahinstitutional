
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, User, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
    phone: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", subject: "", message: "", company: "", phone: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const managementTeam = [
    {
      name: "Talisson Souza",
      role: "CEO & Founder",
      email: "talissondeveloper@gmail.com",
      expertise: "Visão estratégica, liderança geral da empresa e tomada de decisões executivas"
    },
    {
      name: "José Jorge",
      role: "CTO",
      email: "J.jfalasco77@gmail.com", 
      expertise: "Gestão técnica, desenvolvimento de sistemas e definição de arquitetura de software"
    },
    {
      name: "Vitor Mapeli",
      role: "COO",
      email: "indisponivel no momento",
      expertise: "Operações internas, processos organizacionais e garantia de segurança da informação"
    },
    {
      name: "Bruno Nugget",
      role: "CCO",
      email: "snoows2marina@outlook.com",
      expertise: "Comunicação institucional, experiência do cliente e identidade visual da marca"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Entre em </span>
            <span className="text-[#0047ab]">Contato</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Estamos prontos para transformar suas ideias em realidade. Fale conosco!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="bg-gray-900/50 border-[#0047ab]/20 text-center">
              <CardContent className="p-6">
                <MapPin className="h-8 w-8 text-[#0047ab] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">Endereço</h3>
                <p className="text-gray-300 text-sm">
                  Recife, PE<br />
                  Brasil
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 border-[#0047ab]/20 text-center">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 text-[#0047ab] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">Telefone</h3>
                <p className="text-gray-300 text-sm">
                  Em breve
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 border-[#0047ab]/20 text-center">
              <CardContent className="p-6">
                <Mail className="h-8 w-8 text-[#0047ab] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">Email</h3>
                <p className="text-gray-300 text-sm">
                  contatocheetahsolutions@gmail.com
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 border-[#0047ab]/20 text-center">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-[#0047ab] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">Horário</h3>
                <p className="text-gray-300 text-sm">
                  Segunda - Sexta<br />
                  9:00 - 18:00
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-gray-900/50 border-[#0047ab]/20">
              <CardHeader>
                <CardTitle className="text-white">Envie sua mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-black/50 border-[#0047ab]/30 text-white"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Seu email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-black/50 border-[#0047ab]/30 text-white"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="company"
                        placeholder="Empresa (opcional)"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-black/50 border-[#0047ab]/30 text-white"
                      />
                    </div>
                    <div>
                      <Input
                        name="phone"
                        placeholder="Telefone (opcional)"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-black/50 border-[#0047ab]/30 text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      name="subject"
                      placeholder="Assunto"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-black/50 border-[#0047ab]/30 text-white"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Sua mensagem"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-black/50 border-[#0047ab]/30 text-white"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#0047ab] hover:bg-[#0047ab]/80">
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* WhatsApp Contact */}
            <div className="space-y-8">
              <Card className="bg-gray-900/50 border-[#0047ab]/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-[#0047ab]" />
                    WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Precisa de uma resposta mais rápida? Fale conosco diretamente pelo WhatsApp!
                  </p>
                  <a
                    href="Indisponivel no momento"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Conversar no WhatsApp
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-[#0047ab]/20">
                <CardHeader>
                  <CardTitle className="text-white">Por que escolher a Cheetah?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#0047ab] rounded-full mt-2"></div>
                      <span>Resposta em até 24 horas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#0047ab] rounded-full mt-2"></div>
                      <span>Consultoria gratuita</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#0047ab] rounded-full mt-2"></div>
                      <span>Orçamento sem compromisso</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#0047ab] rounded-full mt-2"></div>
                      <span>Equipe especializada</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team Section */}
      <section className="py-20 px-4 bg-[#0047ab]/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Fale com a </span>
              <span className="text-[#0047ab]">Gestão</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Contato direto com nossa liderança para projetos estratégicos e parcerias empresariais
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {managementTeam.map((member, index) => (
              <Card key={index} className="bg-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-[#0047ab]/10 rounded-full flex items-center justify-center border-2 border-[#0047ab]/30">
                      <User className="h-8 w-8 text-[#0047ab]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                  <p className="text-[#0047ab] font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">{member.expertise}</p>
                  
                  <div className="space-y-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center gap-2 text-gray-300 hover:text-[#0047ab] transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      <span className="text-sm">{member.email}</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
