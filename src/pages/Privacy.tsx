import { Shield, Eye, Database, Lock, Users, FileText, Settings, AlertTriangle, CheckCircle, Globe, Clock, Scale, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  const privacySections = [
    {
      icon: FileText,
      title: "1. Introdução e Compromisso",
      content: [
        "A Cheetah Network está comprometida com a proteção da sua privacidade",
        "Esta política descreve como coletamos, usamos e protegemos seus dados pessoais",
        "Cumprimos integralmente a LGPD (Lei 13.709/2018) e regulamentações internacionais",
        "Seus dados são tratados com máxima segurança e transparência",
        "Esta política se aplica a todos os nossos serviços, websites e aplicações",
        "Atualizações desta política serão comunicadas com antecedência mínima de 15 dias"
      ]
    },
    {
      icon: Database,
      title: "2. Dados Coletados",
      content: [
        "DADOS DE IDENTIFICAÇÃO: Nome completo, CPF/CNPJ, RG, data de nascimento",
        "DADOS DE CONTATO: E-mail, telefone, endereço residencial e comercial",
        "DADOS PROFISSIONAIS: Empresa, cargo, área de atuação, experiência",
        "DADOS FINANCEIROS: Informações de pagamento, histórico de transações",
        "DADOS TÉCNICOS: Endereço IP, tipo de navegador, sistema operacional",
        "DADOS DE USO: Páginas visitadas, tempo de sessão, funcionalidades utilizadas",
        "DADOS DE LOCALIZAÇÃO: Localização aproximada baseada em IP",
        "DADOS DE COMUNICAÇÃO: E-mails, mensagens, chamadas telefônicas registradas"
      ]
    },
    {
      icon: Eye,
      title: "3. Finalidades do Tratamento",
      content: [
        "PRESTAÇÃO DE SERVIÇOS: Desenvolvimento, entrega e suporte dos serviços contratados",
        "COMUNICAÇÃO: Envio de informações técnicas, comerciais e de suporte",
        "COBRANÇA: Processamento de pagamentos, emissão de faturas e controle financeiro",
        "MELHORIA: Análise de uso para aprimoramento de produtos e serviços",
        "MARKETING: Envio de ofertas, novidades e conteúdo relevante (com opt-out)",
        "COMPLIANCE: Cumprimento de obrigações legais e regulatórias",
        "SEGURANÇA: Prevenção de fraudes, ataques e uso indevido da plataforma",
        "ANALYTICS: Estatísticas de uso, relatórios de performance e métricas"
      ]
    },
    {
      icon: Scale,
      title: "4. Base Legal para Tratamento",
      content: [
        "EXECUÇÃO DE CONTRATO: Para cumprir obrigações contratuais assumidas",
        "CONSENTIMENTO: Quando você autoriza expressamente o tratamento",
        "INTERESSE LEGÍTIMO: Para melhorar serviços e prevenir fraudes",
        "CUMPRIMENTO LEGAL: Para atender exigências de órgãos reguladores",
        "PROTEÇÃO DA VIDA: Em situações que envolvam risco à saúde ou segurança",
        "EXERCÍCIO DE DIREITOS: Para defender direitos em processos judiciais",
        "PROTEÇÃO DO CRÉDITO: Para análise de risco e concessão de crédito"
      ]
    },
    {
      icon: Users,
      title: "5. Compartilhamento de Dados",
      content: [
        "PRESTADORES DE SERVIÇO: Empresas que nos auxiliam na prestação de serviços",
        "PARCEIROS COMERCIAIS: Quando expressamente autorizado pelo usuário",
        "ÓRGÃOS REGULADORES: Quando exigido por lei ou determinação judicial",
        "PROCESSADORES DE PAGAMENTO: Para viabilizar transações financeiras",
        "SERVIÇOS DE CLOUD: Para armazenamento e processamento de dados",
        "TODOS compartilhamentos são regidos por contratos de confidencialidade",
        "NUNCA vendemos ou alugamos dados pessoais para terceiros",
        "Compartilhamento apenas com consentimento ou base legal válida"
      ]
    },
    {
      icon: Shield,
      title: "6. Medidas de Segurança",
      content: [
        "CRIPTOGRAFIA: Dados protegidos por criptografia AES-256 em repouso e em trânsito",
        "CONTROLE DE ACESSO: Autenticação multi-fator e princípio do menor privilégio",
        "MONITORAMENTO: Sistemas de detecção de intrusão e análise de comportamento",
        "BACKUPS: Cópias de segurança automáticas e testadas regularmente",
        "AUDITORIA: Logs de acesso e atividades mantidos por período legal",
        "TREINAMENTO: Equipe capacitada em práticas de segurança e privacidade",
        "CERTIFICAÇÕES: Conformidade com padrões ISO 27001 e outras normas",
        "TESTES: Pentests e avaliações de vulnerabilidade periódicas"
      ]
    },
    {
      icon: Globe,
      title: "7. Transferência Internacional",
      content: [
        "Alguns dados podem ser processados em servidores fora do Brasil",
        "Transferências realizadas apenas para países com nível adequado de proteção",
        "Contratos com cláusulas contratuais padrão para proteção de dados",
        "Usuário pode optar por processamento exclusivamente no Brasil",
        "Principais destinos: Estados Unidos (certificação Privacy Shield), União Europeia",
        "Dados sensíveis preferencialmente processados em território nacional",
        "Notificação prévia sobre mudanças na localização de processamento"
      ]
    },
    {
      icon: Clock,
      title: "8. Retenção de Dados",
      content: [
        "DADOS CONTRATUAIS: Mantidos durante vigência do contrato + 5 anos",
        "DADOS FISCAIS: Preservados por período exigido pela Receita Federal",
        "DADOS DE MARKETING: Retidos até revogação do consentimento",
        "LOGS DE SEGURANÇA: Armazenados por 6 meses para auditoria",
        "DADOS INATIVOS: Exclusão automática após 2 anos sem atividade",
        "BACKUP DE SEGURANÇA: Mantidos por até 90 dias após exclusão principal",
        "Cronograma de exclusão automática implementado em todos os sistemas"
      ]
    },
    {
      icon: CheckCircle,
      title: "9. Seus Direitos (LGPD)",
      content: [
        "ACESSO: Saber quais dados pessoais tratamos sobre você",
        "CORREÇÃO: Atualizar dados incompletos, inexatos ou desatualizados",
        "EXCLUSÃO: Solicitar eliminação de dados desnecessários ou tratados indevidamente",
        "PORTABILIDADE: Receber seus dados em formato estruturado e interoperável",
        "OPOSIÇÃO: Opor-se ao tratamento em casos de interesse legítimo",
        "REVOGAÇÃO: Retirar consentimento a qualquer momento",
        "INFORMAÇÃO: Obter esclarecimentos sobre tratamento e compartilhamento",
        "REVISÃO: Solicitar revisão de decisões automatizadas"
      ]
    },
    {
      icon: Settings,
      title: "10. Exercendo Seus Direitos",
      content: [
        "Solicitações podem ser feitas através do portal de privacidade online",
        "E-mail específico: privacidade@cheetahnetwork.com",
        "Telefone: +55 (11) 9999-9999 (horário comercial)",
        "Identificação necessária para verificação de identidade",
        "Prazo de resposta: até 15 dias úteis conforme LGPD",
        "Gratuidade para primeira solicitação por tipo de direito ao ano",
        "Possibilidade de recurso ao nosso Encarregado de Proteção de Dados"
      ]
    },
    {
      icon: AlertTriangle,
      title: "11. Incidentes de Segurança",
      content: [
        "Notificação à ANPD em até 72 horas quando aplicável",
        "Comunicação aos titulares afetados quando houver risco aos direitos",
        "Detalhamento das informações comprometidas e medidas adotadas",
        "Orientações sobre medidas de proteção que podem ser tomadas",
        "Acompanhamento contínuo dos impactos e medidas corretivas",
        "Relatório de investigação disponível quando solicitado",
        "Canal dedicado para dúvidas relacionadas a incidentes"
      ]
    },
    {
      icon: Lock,
      title: "12. Encarregado de Proteção de Dados (DPO)",
      content: [
        "NOME: [Nome do DPO] - Certificado em Proteção de Dados",
        "E-MAIL: dpo@cheetahnetwork.com",
        "FUNÇÃO: Orientar funcionários, atender titulares, interagir com ANPD",
        "DISPONIBILIDADE: Segunda a sexta, 9h às 18h",
        "Canal direto para questões específicas sobre proteção de dados",
        "Responsável por avaliar compliance e implementar melhorias",
        "Ponto de contato oficial com autoridades reguladoras"
      ]
    }
  ];

  const cookiesInfo = [
    {
      type: "Essenciais",
      description: "Necessários para funcionamento básico do site",
      examples: "Autenticação, segurança, preferências de idioma"
    },
    {
      type: "Analytics",
      description: "Coletam informações sobre uso do site",
      examples: "Google Analytics, Hotjar, estatísticas de acesso"
    },
    {
      type: "Marketing",
      description: "Personalizam anúncios e conteúdo",
      examples: "Facebook Pixel, Google Ads, remarketing"
    },
    {
      type: "Funcionais",
      description: "Melhoram experiência e funcionalidades",
      examples: "Chat online, vídeos incorporados, mapas"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 animate-fade-in">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Política de </span>
            <span className="text-[#0047ab]">Privacidade</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
            Como coletamos, utilizamos e protegemos suas informações pessoais de forma transparente e segura
          </p>
          <div className="bg-[#0047ab]/10 border border-[#0047ab]/20 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-sm text-gray-300">
              <strong className="text-[#0047ab]">Última atualização:</strong> Janeiro de 2025 |
              <strong className="text-[#0047ab]"> Versão:</strong> 3.2 |
              <strong className="text-[#0047ab]"> Conformidade:</strong> LGPD, GDPR
            </p>
          </div>
        </div>
      </section>

      {/* LGPD Compliance Badge */}
      <section className="py-8 px-4 bg-green-500/10 border-y border-green-500/20">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-4">
            <Shield className="h-8 w-8 text-green-400" />
            <div className="text-center">
              <h3 className="text-lg font-bold text-green-400 mb-1">
                100% CONFORME COM A LGPD
              </h3>
              <p className="text-gray-300 text-sm">
                Esta política está alinhada com a Lei Geral de Proteção de Dados (Lei 13.709/2018) 
                e regulamentações internacionais de privacidade
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8">
            {privacySections.map((section, index) => (
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

      {/* Cookies Section */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Política de Cookies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {cookiesInfo.map((cookie, index) => (
              <Card key={index} className="bg-black/50 border-[#0047ab]/20">
                <CardContent className="p-6">
                  <h3 className="font-bold text-[#0047ab] mb-2">{cookie.type}</h3>
                  <p className="text-gray-300 text-sm mb-3">{cookie.description}</p>
                  <p className="text-gray-400 text-xs">
                    <strong>Exemplos:</strong> {cookie.examples}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-[#0047ab]/5 border-[#0047ab]/20">
            <CardContent className="p-6 text-center">
              <p className="text-gray-300 text-sm">
                Você pode gerenciar suas preferências de cookies através das configurações do seu navegador 
                ou através do nosso centro de preferências. Cookies essenciais não podem ser desabilitados 
                pois são necessários para o funcionamento básico do site.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-br from-[#0047ab]/10 to-purple-500/10 border-[#0047ab]/20">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Shield className="h-12 w-12 text-[#0047ab] mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Dúvidas sobre Privacidade?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Nossa equipe de privacidade está disponível para esclarecer dúvidas, 
                  receber solicitações e ajudar você a exercer seus direitos.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-black/30 rounded-lg p-4 border border-[#0047ab]/20 text-center">
                  <Mail className="h-6 w-6 text-[#0047ab] mx-auto mb-2" />
                  <p className="text-white/80 text-sm">
                    <strong className="text-[#0047ab]">E-mail Geral</strong><br />
                    privacidade@cheetahnetwork.com
                  </p>
                </div>
                
                <div className="bg-black/30 rounded-lg p-4 border border-[#0047ab]/20 text-center">
                  <Users className="h-6 w-6 text-[#0047ab] mx-auto mb-2" />
                  <p className="text-white/80 text-sm">
                    <strong className="text-[#0047ab]">DPO Direto</strong><br />
                    dpo@cheetahnetwork.com
                  </p>
                </div>
                
                <div className="bg-black/30 rounded-lg p-4 border border-[#0047ab]/20 text-center">
                  <AlertTriangle className="h-6 w-6 text-[#0047ab] mx-auto mb-2" />
                  <p className="text-white/80 text-sm">
                    <strong className="text-[#0047ab]">Incidentes</strong><br />
                    contatocheetahsolutions@gmail.com
                  </p>
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

export default Privacy;
