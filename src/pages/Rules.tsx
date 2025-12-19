
import { Shield, AlertTriangle, Users, Ban, Eye, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Rules = () => {
  const prohibitedContent = [
    {
      title: "Conteúdo +18",
      description: "Banners, imagens ou qualquer material com conteúdo adulto",
      severity: "high"
    },
    {
      title: "Links Maliciosos",
      description: "Divulgação de links para sites suspeitos, phishing ou malware",
      severity: "high"
    },
    {
      title: "Vendas Ilegais",
      description: "Grupos de vendas de Nitro falso, contas hackeadas ou produtos ilegais",
      severity: "high"
    },
    {
      title: "Spam e Flood",
      description: "Envio massivo de mensagens não solicitadas ou repetitivas",
      severity: "medium"
    },
    {
      title: "Conteúdo Ofensivo",
      description: "Discriminação, ódio, assédio ou qualquer forma de violência",
      severity: "high"
    },
    {
      title: "Pirataria",
      description: "Divulgação de software pirata, cracks ou violação de direitos autorais",
      severity: "high"
    }
  ];

  const communityRules = [
    {
      icon: Users,
      title: "Respeito Mútuo",
      description: "Trate todos os membros com respeito e cortesia",
      details: [
        "Evite linguagem ofensiva ou discriminatória",
        "Respeite opiniões diferentes",
        "Mantenha um ambiente acolhedor",
        "Seja construtivo em suas críticas"
      ]
    },
    {
      icon: Shield,
      title: "Segurança Digital",
      description: "Mantenha práticas seguras de uso da internet",
      details: [
        "Não compartilhe informações pessoais",
        "Desconfie de ofertas muito vantajosas",
        "Verificar sempre a autenticidade de links",
        "Reportar atividades suspeitas"
      ]
    },
    {
      icon: Eye,
      title: "Transparência",
      description: "Seja transparente em suas interações",
      details: [
        "Identifique-se adequadamente",
        "Seja claro sobre suas intenções",
        "Não use perfis falsos",
        "Mantenha comunicação honesta"
      ]
    }
  ];

  const consequences = [
    {
      level: "Advertência",
      description: "Primeira infração leve",
      actions: ["Notificação por DM", "Orientação sobre as regras", "Registro no sistema"]
    },
    {
      level: "Suspensão Temporária",
      description: "Infrações moderadas ou reincidência",
      actions: ["Suspensão de 7 a 30 dias", "Remoção do conteúdo", "Análise do histórico"]
    },
    {
      level: "Banimento Permanente",
      description: "Infrações graves ou múltiplas reincidências",
      actions: ["Banimento definitivo", "Bloqueio de novos cadastros", "Relatório às autoridades se necessário"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#0047ab] bg-clip-text text-transparent">
            Regras da Comunidade
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Diretrizes para uma convivência saudável e segura em nossa comunidade
          </p>
        </div>
      </section>

      {/* Important Alert */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Alert className="bg-red-900/20 border-red-500/50 text-white">
            <AlertTriangle className="h-4 w-4 text-red-500" />
            <AlertDescription className="text-red-100">
              <strong>ATENÇÃO:</strong> O descumprimento destas regras pode resultar em suspensão ou banimento permanente. 
              Todas as atividades são monitoradas e registradas.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Community Rules */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Regras Gerais da Comunidade
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityRules.map((rule, index) => (
              <Card key={index} className="bg-gray-900/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#0047ab]/10 rounded-lg p-3 border border-[#0047ab]/20">
                      <rule.icon className="h-6 w-6 text-[#0047ab]" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{rule.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{rule.description}</p>
                  <ul className="space-y-2">
                    {rule.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-300">
                        <div className="w-2 h-2 bg-[#0047ab] rounded-full mt-2 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Content */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Conteúdo Proibido
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prohibitedContent.map((content, index) => (
              <Card key={index} className={`border-2 ${content.severity === 'high' ? 'border-red-500/50 bg-red-900/20' : 'border-yellow-500/50 bg-yellow-900/20'}`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Ban className={`h-6 w-6 ${content.severity === 'high' ? 'text-red-500' : 'text-yellow-500'}`} />
                    <h3 className="text-lg font-semibold text-white">{content.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{content.description}</p>
                  <div className={`mt-3 px-2 py-1 rounded text-xs font-medium ${
                    content.severity === 'high' 
                      ? 'bg-red-500/20 text-red-300 border border-red-500/30' 
                      : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                  }`}>
                    {content.severity === 'high' ? 'GRAVIDADE ALTA' : 'GRAVIDADE MÉDIA'}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consequences */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Consequências e Penalidades
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consequences.map((consequence, index) => (
              <Card key={index} className="bg-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">{consequence.level}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{consequence.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-[#0047ab] font-medium text-sm">Ações Aplicadas:</h4>
                    <ul className="space-y-1">
                      {consequence.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-start gap-2 text-sm text-gray-300">
                          <div className="w-2 h-2 bg-[#0047ab] rounded-full mt-2 flex-shrink-0"></div>
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting System */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">
            Sistema de Denúncias
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-[#0047ab]/10 to-black/50 border-[#0047ab]/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Como Denunciar</h3>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#0047ab] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Colete evidências (screenshots, links, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#0047ab] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Entre em contato via WhatsApp ou e-mail</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#0047ab] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Forneça informações detalhadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#0047ab] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Aguarde resposta em até 24 horas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-[#0047ab]/10 to-black/50 border-[#0047ab]/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Garantias</h3>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Anonimato garantido quando solicitado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Proteção contra retaliações</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Investigação imparcial e justa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Feedback sobre ações tomadas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Reports */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#0047ab]/10 to-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Canal de Denúncias
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ajude-nos a manter nossa comunidade segura. Denuncie comportamentos inadequados
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-[#0047ab] hover:bg-[#0047ab]/80 text-white px-8 py-6 text-lg font-semibold rounded-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Denunciar via WhatsApp
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline"
              className="border-[#0047ab] text-[#0047ab] hover:bg-[#0047ab] hover:text-white px-8 py-6 text-lg font-semibold rounded-lg"
            >
              Enviar por E-mail
            </Button>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Denúncias anônimas são aceitas • Resposta em até 24 horas
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rules;
