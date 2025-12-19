import { Shield, AlertTriangle, Users, FileText, Phone, Lock, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AntiHarassment = () => {
  const protocolSections = [
    {
      icon: AlertTriangle,
      title: "1. Definição de Assédio",
      content: [
        "Qualquer conduta indesejada de caráter sexual, ofensivo, intimidador ou invasivo",
        "Comportamentos físicos inadequados como toques não consensuais",
        "Condutas verbais como comentários sexuais, piadas ofensivas ou ameaças",
        "Assédio digital através de mensagens, redes sociais, plataformas de jogos ou aplicativos",
        "Perseguição online ou offline de colaboradores",
        "Exposição não consentida de imagens ou informações pessoais",
        "Chantagem emocional ou tentativas de manipulação",
        "Discriminação baseada em gênero, orientação sexual, raça ou religião"
      ]
    },
    {
      icon: Users,
      title: "2. Abrangência e Aplicação",
      content: [
        "Aplica-se a todos os membros, colaboradores, estagiários e terceirizados da Cheetah Network",
        "Válido para situações dentro da empresa ou de seus canais oficiais (Discord, Telegram, etc.)",
        "Estende-se a situações externas quando envolvem colaboradores da empresa",
        "Inclui eventos corporativos, confraternizações e atividades relacionadas ao trabalho",
        "Abrange interações em redes sociais quando identificável a vinculação com a empresa",
        "Válido para clientes, fornecedores e parceiros em interação com colaboradores",
        "Protocolo ativo 24 horas por dia, 7 dias por semana",
        "Aplica-se independente de hierarquia ou posição na empresa"
      ]
    },
    {
      icon: Shield,
      title: "3. Procedimento - Apoio Imediato à Vítima",
      content: [
        "Escutar e acolher a vítima sem julgamentos ou questionamentos invasivos",
        "Garantir sigilo absoluto das informações compartilhadas",
        "Oferecer suporte emocional e psicológico imediato",
        "Informar sobre direitos legais e opções de denúncia",
        "Conectar com profissionais especializados quando necessário",
        "Garantir ambiente seguro e livre de retaliações",
        "Preservar a privacidade e dignidade da vítima durante todo o processo",
        "Priorizar o bem-estar e segurança da pessoa afetada"
      ]
    },
    {
      icon: FileText,
      title: "4. Registro e Documentação",
      content: [
        "Coletar detalhes como data, hora, local ou plataforma digital do incidente",
        "Documentar o contexto completo da situação ocorrida",
        "Preservar evidências como prints de tela, áudios, vídeos ou mensagens",
        "Registrar nomes de testemunhas quando aplicável",
        "Anotar impactos emocionais e profissionais relatados pela vítima",
        "Criar protocolo numerado para acompanhamento do caso",
        "Manter backup seguro de todas as evidências coletadas",
        "Documentar todas as ações tomadas pela empresa"
      ]
    },
    {
      icon: CheckCircle,
      title: "5. Orientações e Suporte à Vítima",
      content: [
        "Instruir sobre como bloquear e denunciar o agressor na plataforma onde ocorreu",
        "Orientar sobre o registro de Boletim de Ocorrência (B.O.) na delegacia",
        "Explicar direitos trabalhistas e proteções legais disponíveis",
        "Oferecer acompanhamento jurídico quando necessário",
        "Conectar com rede de apoio psicológico especializado",
        "Informar sobre medidas protetivas disponíveis na justiça",
        "Orientar sobre preservação de evidências digitais",
        "Oferecer flexibilidade de horários ou mudanças de ambiente quando possível"
      ]
    },
    {
      icon: AlertCircle,
      title: "6. Ações Organizacionais",
      content: [
        "Banimento imediato e definitivo se o agressor estiver em ambientes da Cheetah Network",
        "Contato com administradores de outras comunidades para relatar o caso",
        "Investigação interna completa com coleta de evidências adicionais",
        "Aplicação de medidas disciplinares conforme gravidade do caso",
        "Comunicação às autoridades competentes quando houver crime configurado",
        "Implementação de medidas preventivas para evitar reincidência",
        "Revisão de políticas internas quando necessário",
        "Treinamento adicional para equipes quando aplicável"
      ]
    },
    {
      icon: Lock,
      title: "7. Confidencialidade e Proteção",
      content: [
        "Todas as informações tratadas com confidencialidade absoluta",
        "Acesso restrito apenas à gestão autorizada e equipe de apoio",
        "Proibição total de divulgação pública dos detalhes sem autorização da vítima",
        "Proteção contra retaliações ou perseguições internas",
        "Anonimização de dados quando possível para proteção da identidade",
        "Comunicação externa apenas quando autorizada expressamente",
        "Armazenamento seguro de documentos com criptografia",
        "Política de retenção de dados conforme legislação aplicável"
      ]
    },
    {
      icon: Phone,
      title: "8. Canais de Denúncia e Contato",
      content: [
        "E-mail confidencial: denuncia.assedio@cheetahnetwork.com",
        "WhatsApp exclusivo para emergências: (11) 9999-9999",
        "Formulário anônimo disponível no site da empresa",
        "Contato direto com a gestão através de canais oficiais",
        "Possibilidade de denúncia através de terceiros de confiança",
        "Atendimento presencial mediante agendamento prévio",
        "Linha direta com advocacia especializada",
        "Parceria com organizações de apoio à vítima"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 animate-fade-in">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Protocolo Interno </span>
            <span className="text-[#0047ab]">Anti-Assédio</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
            Garantindo a segurança, integridade e bem-estar de todos os colaboradores
          </p>
          <div className="bg-[#0047ab]/10 border border-[#0047ab]/20 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-sm text-gray-300">
              <strong className="text-[#0047ab]">Vigência:</strong> Janeiro de 2025 |
              <strong className="text-[#0047ab]"> Versão:</strong> 1.0
            </p>
          </div>
        </div>
      </section>

      {/* Critical Notice */}
      <section className="py-8 px-4 bg-red-500/10 border-y border-red-500/20">
        <div className="container mx-auto max-w-4xl">
          <Alert className="bg-red-500/10 border-red-500/30">
            <AlertTriangle className="h-6 w-6 text-red-400" />
            <AlertDescription className="text-white/90">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-red-400 mb-2">
                  PROTOCOLO DE EMERGÊNCIA 24/7
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-red-400">Assédio é crime no Brasil</strong> e qualquer colaborador que se sentir 
                  ameaçado ou desconfortável deve comunicar imediatamente à gestão. Este protocolo está ativo 
                  24 horas por dia e se aplica a situações dentro ou fora da empresa.
                </p>
                <p className="text-red-400 font-medium text-sm">
                  Em emergências: WhatsApp (11) 9999-9999 | E-mail: denuncia.assedio@cheetahnetwork.com
                </p>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Objective Section */}
      <section className="py-16 px-4 bg-[#0047ab]/5">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-black/50 border-[#0047ab]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white text-2xl">
                <div className="bg-[#0047ab]/10 rounded-lg p-3 border border-[#0047ab]/20">
                  <Shield className="h-8 w-8 text-[#0047ab]" />
                </div>
                Objetivo do Protocolo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed text-lg">
                Garantir a <strong className="text-[#0047ab]">segurança, integridade e bem-estar</strong> de 
                todos os colaboradores da Cheetah Network, criando um ambiente de trabalho livre de 
                assédio e discriminação, mesmo em situações externas ao ambiente corporativo tradicional.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Protocol Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8">
            {protocolSections.map((section, index) => (
              <Card key={index} className="bg-gray-900/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white text-xl">
                    <div className="bg-[#0047ab]/10 rounded-lg p-3 border border-[#0047ab]/20">
                      <section.icon className="h-6 w-6 text-[#0047ab]" />
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-sm text-gray-300">
                        <div className="w-2 h-2 bg-[#0047ab] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consequences Section */}
      <section className="py-16 px-4 bg-red-500/5">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-black/50 border-red-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white text-2xl">
                <div className="bg-red-500/10 rounded-lg p-3 border border-red-500/20">
                  <AlertTriangle className="h-8 w-8 text-red-400" />
                </div>
                Consequências para o Agressor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-red-400">Banimento permanente</strong> de todos os canais, 
                    servidores e plataformas da Cheetah Network
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-red-400">Comunicação formal</strong> às autoridades competentes 
                    quando houver configuração de crime
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-red-400">Notificação a outras comunidades</strong> e 
                    organizações relevantes sobre o comportamento inadequado
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-red-400">Ações legais cabíveis</strong> conforme a 
                    gravidade do caso e legislação aplicável
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 px-4 bg-[#0047ab]/10">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-black/50 border-[#0047ab]/20">
            <CardContent className="p-8">
              <div className="text-center">
                <Phone className="h-12 w-12 text-[#0047ab] mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Canais de Emergência 24/7
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Se você está passando por uma situação de assédio, não hesite em nos contatar. 
                  Estamos aqui para apoiar e proteger você.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#0047ab]/10 rounded-lg p-4 border border-[#0047ab]/20">
                    <p className="text-white/80 text-sm">
                      <strong className="text-[#0047ab]">WhatsApp Emergência:</strong><br />
                      (11) 9999-9999
                    </p>
                  </div>
                  <div className="bg-[#0047ab]/10 rounded-lg p-4 border border-[#0047ab]/20">
                    <p className="text-white/80 text-sm">
                      <strong className="text-[#0047ab]">E-mail Confidencial:</strong><br />
                      denuncia.assedio@cheetahnetwork.com
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AntiHarassment;