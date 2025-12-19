
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, Shield, Target, Heart, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsExplained = () => {
  const sections = [
    {
      icon: XCircle,
      title: "❌ O que você NÃO pode fazer",
      items: [
        "Usar nossos serviços para atividades ilegais ou prejudiciais",
        "Tentar hackear, quebrar ou comprometer nossos sistemas",
        "Compartilhar suas credenciais de acesso com terceiros",
        "Usar nossos bots para spam ou atividades maliciosas",
        "Reproduzir ou revender nossos produtos sem autorização",
        "Fazer engenharia reversa dos nossos códigos proprietários"
      ],
      color: "red"
    },
    {
      icon: CheckCircle,
      title: "✅ O que você PODE fazer",
      items: [
        "Usar todos os recursos incluídos no seu plano contratado",
        "Solicitar suporte técnico e customizações",
        "Integrar nossos sistemas com suas plataformas",
        "Fazer backups dos seus próprios dados",
        "Cancelar o serviço a qualquer momento",
        "Sugerir melhorias e novas funcionalidades"
      ],
      color: "green"
    },
    {
      icon: Shield,
      title: "🔐 Como seus dados são PROTEGIDOS",
      items: [
        "Criptografia de ponta a ponta em todas as comunicações",
        "Servidores seguros com certificações internacionais",
        "Backups automáticos e redundância de dados",
        "Acesso restrito apenas à equipe autorizada",
        "Monitoramento 24/7 contra ameaças",
        "Conformidade com LGPD e regulamentações internacionais"
      ],
      color: "blue"
    },
    {
      icon: Target,
      title: "🎯 Como a Cheetah se COMPROMETE com transparência",
      items: [
        "Relatórios mensais sobre uptime e performance",
        "Comunicação clara sobre atualizações e mudanças",
        "Preços justos sem taxas ocultas",
        "Processo transparente de resolução de problemas",
        "Feedback constante sobre melhorias implementadas",
        "Acesso direto à equipe de desenvolvimento"
      ],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "red":
        return "border-red-500/30 bg-red-500/5";
      case "green":
        return "border-green-500/30 bg-green-500/5";
      case "blue":
        return "border-blue-500/30 bg-blue-500/5";
      case "purple":
        return "border-purple-500/30 bg-purple-500/5";
      default:
        return "border-[#0047ab]/30 bg-[#0047ab]/5";
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case "red":
        return "text-red-400";
      case "green":
        return "text-green-400";
      case "blue":
        return "text-blue-400";
      case "purple":
        return "text-purple-400";
      default:
        return "text-[#0047ab]";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <section className="pt-28 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-[#0047ab]/10 rounded-full flex items-center justify-center border-2 border-[#0047ab]">
                <BookOpen className="h-8 w-8 text-[#0047ab]" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Nossos Termos </span>
              <span className="text-[#0047ab]">Explicados</span>
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Versão humanizada dos nossos termos jurídicos. 
              Transparência e clareza são valores fundamentais da Cheetah Network.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {sections.map((section, index) => (
              <Card 
                key={index} 
                className={`${getColorClasses(section.color)} border-2 backdrop-blur-sm hover:scale-105 transition-all duration-300`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl text-white">
                    <section.icon className={`h-6 w-6 ${getIconColor(section.color)}`} />
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-white/80 text-sm leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-[#0047ab]/5 border-[#0047ab]/20 mb-8">
            <CardContent className="p-8">
              <div className="text-center">
                <Heart className="h-12 w-12 text-[#0047ab] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Nosso Compromisso com Você
                </h3>
                <p className="text-white/80 text-lg leading-relaxed max-w-4xl mx-auto">
                  Acreditamos que relacionamentos comerciais saudáveis são construídos sobre 
                  transparência, confiança mútua e comunicação clara. Por isso, criamos esta 
                  versão simplificada dos nossos termos, para que você entenda exatamente 
                  seus direitos e responsabilidades ao trabalhar conosco.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-black/50 border-[#0047ab]/20 text-center">
              <CardContent className="p-6">
                <Shield className="h-10 w-10 text-[#0047ab] mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Ética</h4>
                <p className="text-white/70 text-sm">
                  Conduzimos nossos negócios com os mais altos padrões éticos
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-black/50 border-[#0047ab]/20 text-center">
              <CardContent className="p-6">
                <Target className="h-10 w-10 text-[#0047ab] mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Transparência</h4>
                <p className="text-white/70 text-sm">
                  Comunicação clara e honesta em todas as nossas interações
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-black/50 border-[#0047ab]/20 text-center">
              <CardContent className="p-6">
                <Heart className="h-10 w-10 text-[#0047ab] mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Confiabilidade</h4>
                <p className="text-white/70 text-sm">
                  Cumprimos nossos compromissos e mantemos a qualidade prometida
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsExplained;
