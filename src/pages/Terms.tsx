import { FileText, Scale, Shield, AlertCircle, CheckCircle, Users, Gavel, Book, Clock, Globe, Ban, CreditCard, Cookie, Eye, UserX } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  // Documentos principais completos e destacados
  const mainDocuments = [
    {
      icon: FileText,
      title: "Termos de Serviço",
      description: "Condições gerais para utilização dos nossos serviços",
      content: [
        "Termos de Uso – Cheetah Solutions Network LTDA",
        "",
        "Última atualização: 15 de agosto de 2025",
        "",
        "1. Aceitação dos Termos",
        "",
        "1.1 Ao acessar, utilizar ou contratar quaisquer serviços oferecidos pela Cheetah Solutions Network LTDA (\"Cheetah Solutions Network\", \"nós\", \"nosso\" ou \"empresa\"), o usuário declara que leu, entendeu e concorda integralmente com as disposições aqui estabelecidas.",
        "1.2 Estes Termos aplicam-se a todos os visitantes, clientes e usuários de nossos serviços, incluindo, mas não se limitando a, plataformas digitais, bots para Discord, websites desenvolvidos, consultorias técnicas e qualquer outro produto ou serviço oferecido.",
        "1.3 Caso não concorde com alguma cláusula, o usuário deverá abster-se imediatamente de utilizar nossos serviços.",
        "",
        "2. Objeto",
        "",
        "2.1 Este documento regula a prestação de serviços digitais, englobando, mas não se limitando a:",
        "a) Desenvolvimento e programação de bots para Discord.",
        "b) Criação, manutenção e hospedagem de websites e sistemas online.",
        "c) Produção de identidade visual e design gráfico.",
        "d) Consultoria técnica e suporte especializado.",
        "",
        "3. Uso Permitido",
        "",
        "3.1 O usuário compromete-se a utilizar os serviços exclusivamente para fins lícitos e de acordo com a legislação brasileira vigente, bem como com as normas internacionais aplicáveis.",
        "3.2 É expressamente proibido:",
        "a) Utilizar os serviços para práticas ilegais ou que violem direitos de terceiros.",
        "b) Publicar, transmitir ou armazenar conteúdo ofensivo, difamatório, discriminatório, pornográfico ou que viole direitos de imagem.",
        "c) Distribuir vírus, malware, ransomware ou qualquer outro código nocivo.",
        "d) Copiar, modificar, reproduzir, criar trabalhos derivados ou explorar comercialmente qualquer parte dos serviços sem autorização expressa por escrito da empresa.",
        "",
        "4. Propriedade Intelectual",
        "",
        "4.1 Todos os materiais, códigos, layouts, marcas, logotipos, conteúdos e demais elementos produzidos ou disponibilizados pela Cheetah Solutions Network são protegidos por leis nacionais e internacionais de direitos autorais e de propriedade industrial.",
        "4.2 Qualquer uso não autorizado poderá resultar em medidas judiciais, incluindo ações cíveis e criminais, além da obrigação de indenizar por perdas e danos.",
        "",
        "5. Contratação e Pagamentos",
        "",
        "5.1 A contratação será formalizada por meio de proposta comercial, contrato ou confirmação escrita por canais oficiais.",
        "5.2 O cliente compromete-se a efetuar o pagamento nos prazos e valores acordados.",
        "5.3 O não pagamento autoriza a suspensão imediata dos serviços, sem prejuízo da cobrança judicial dos valores devidos.",
        "",
        "6. Cancelamento e Reembolso",
        "",
        "6.1 Cancelamentos deverão ser solicitados por escrito.",
        "6.2 Reembolsos serão analisados individualmente, considerando o estágio de execução do serviço.",
        "6.3 Em caso de cancelamento imotivado pelo cliente após o início da execução, a empresa reserva-se o direito de reter os valores já pagos.",
        "",
        "7. Garantias e Responsabilidades",
        "",
        "7.1 A Cheetah Solutions Network não garante que os serviços serão ininterruptos, livres de erros ou totalmente seguros contra ameaças cibernéticas.",
        "7.2 Não nos responsabilizamos por perdas de dados, lucros cessantes ou qualquer dano decorrente de uso inadequado ou falha de terceiros.",
        "",
        "8. Modificações",
        "",
        "8.1 A empresa poderá alterar estes Termos a qualquer momento, publicando a nova versão em seus canais oficiais.",
        "8.2 O uso contínuo dos serviços após as alterações constitui aceitação tácita das novas condições.",
        "",
        "9. Foro",
        "",
        "9.1 As partes elegem o foro da comarca de São Paulo/SP, com renúncia a qualquer outro, para resolver quaisquer litígios decorrentes destes Termos."
      ]
    },
    {
      icon: Shield,
      title: "Política de Privacidade",
      description: "Como coletamos, usamos e protegemos seus dados pessoais",
      content: [
        "Política de Privacidade – Cheetah Solutions Network LTDA",
        "",
        "Última atualização: 15 de agosto de 2025",
        "",
        "1. Introdução",
        "",
        "1.1 A Cheetah Solutions Network LTDA valoriza e respeita a privacidade dos seus usuários, clientes e visitantes, comprometendo-se com a proteção dos dados pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).",
        "",
        "2. Dados Coletados",
        "",
        "2.1 Coletamos:",
        "a) Informações pessoais: nome, e-mail, telefone, CPF/CNPJ.",
        "b) Dados de pagamento: informações de cartão, comprovantes de transferência, etc.",
        "c) Dados técnicos: endereço IP, tipo de navegador, sistema operacional, dispositivo utilizado.",
        "d) Registros de interações: mensagens, solicitações de suporte, histórico de uso.",
        "",
        "3. Finalidade do Tratamento",
        "",
        "3.1 Utilizamos os dados para:",
        "a) Executar e gerenciar contratos e serviços.",
        "b) Processar pagamentos.",
        "c) Enviar comunicações e atualizações importantes.",
        "d) Cumprir obrigações legais e regulatórias.",
        "",
        "4. Compartilhamento de Dados",
        "",
        "4.1 Os dados poderão ser compartilhados com:",
        "a) Prestadores de serviço terceirizados estritamente necessários à execução do contrato.",
        "b) Autoridades judiciais ou administrativas, mediante requisição legal.",
        "4.2 Não vendemos nem alugamos dados pessoais a terceiros.",
        "",
        "5. Segurança da Informação",
        "",
        "5.1 Adotamos medidas técnicas e organizacionais adequadas para proteger os dados contra acesso não autorizado, destruição, perda, alteração ou divulgação indevida.",
        "",
        "6. Direitos do Titular",
        "",
        "6.1 O titular pode solicitar:",
        "a) Confirmação da existência de tratamento de seus dados.",
        "b) Acesso aos dados.",
        "c) Correção de informações incorretas ou desatualizadas.",
        "d) Exclusão dos dados, salvo quando houver obrigação legal de mantê-los.",
        "",
        "7. Retenção de Dados",
        "",
        "7.1 Os dados serão retidos pelo período necessário para cumprimento das finalidades, obrigações legais ou exercício de direitos da empresa.",
        "",
        "8. Alterações",
        "",
        "8.1 Esta política poderá ser atualizada periodicamente, sendo a nova versão publicada em nossos canais oficiais."
      ]
    },
    {
      icon: AlertCircle,
      title: "Isenção de Responsabilidade",
      description: "Limitações e exclusões de responsabilidade legal",
      content: [
        "Isenção de Responsabilidade – Cheetah Solutions Network LTDA",
        "",
        "Última atualização: 15 de agosto de 2025",
        "",
        "1. Natureza das Informações",
        "",
        "1.1 Os serviços e informações fornecidos pela Cheetah Solutions Network LTDA são disponibilizados \"como estão\" e \"conforme disponíveis\", sem garantias expressas ou implícitas.",
        "",
        "2. Uso Indevido",
        "",
        "2.1 Não nos responsabilizamos por danos diretos ou indiretos decorrentes de:",
        "a) Uso inadequado dos serviços.",
        "b) Conteúdo publicado por terceiros.",
        "c) Falhas de segurança decorrentes de má utilização pelo cliente.",
        "",
        "3. Links Externos",
        "",
        "3.1 Nossos serviços podem conter links para sites de terceiros, sobre os quais não temos controle. Não nos responsabilizamos por seu conteúdo ou políticas.",
        "",
        "4. Limitação de Garantia",
        "",
        "4.1 Não garantimos que nossos serviços funcionarão sem interrupções ou erros, ou que estarão livres de ameaças cibernéticas."
      ]
    },
    {
      icon: Cookie,
      title: "Política de Cookies",
      description: "Como utilizamos cookies e tecnologias similares",
      content: [
        "Política de Cookies – Cheetah Solutions Network LTDA",
        "",
        "Última atualização: 15 de agosto de 2025",
        "",
        "1. Definição",
        "",
        "1.1 Cookies são pequenos arquivos de texto enviados ao dispositivo do usuário para melhorar a experiência de navegação e fornecer funcionalidades adicionais.",
        "",
        "2. Tipos de Cookies Utilizados",
        "",
        "2.1 Utilizamos:",
        "a) Cookies essenciais: necessários para funcionamento básico do site.",
        "b) Cookies analíticos: coletam dados de navegação para otimização.",
        "c) Cookies funcionais: armazenam preferências do usuário.",
        "d) Cookies de publicidade: usados para exibir anúncios relevantes (quando aplicável).",
        "",
        "3. Gerenciamento de Cookies",
        "",
        "3.1 O usuário pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade dos serviços.",
        "",
        "4. Alterações",
        "",
        "4.1 Esta política pode ser atualizada a qualquer momento."
      ]
    },
    {
      icon: UserX,
      title: "Protocolo Anti-Assédio",
      description: "Política de tolerância zero contra assédio e discriminação",
      content: [
        "PROTOCOLO INTERNO ANTI-ASSÉDIO – CHEETAH NETWORK",
        "",
        "OBJETIVO PRINCIPAL:",
        "Garantir a segurança, integridade e bem-estar de todos os colaboradores, parceiros e usuários, mesmo em situações externas ao ambiente de trabalho direto da empresa.",
        "",
        "1. DEFINIÇÃO ABRANGENTE DE ASSÉDIO",
        "",
        "Para este protocolo, considera-se assédio QUALQUER conduta indesejada de caráter:",
        "• Sexual: comentários, gestos, propostas ou contato físico não consensual",
        "• Psicológico: intimidação, humilhação, perseguição ou constrangimento",
        "• Discriminatório: baseado em gênero, raça, religião, orientação sexual ou outras características",
        "• Digital: através de mensagens, redes sociais, plataformas de jogos, e-mails ou qualquer meio eletrônico",
        "• Verbal: comentários ofensivos, piadas inadequadas, xingamentos ou ameaças",
        "• Físico: contato não autorizado, gestos obscenos ou invasão de espaço pessoal",
        "",
        "2. ABRANGÊNCIA TOTAL DO PROTOCOLO",
        "",
        "Este protocolo se aplica INTEGRALMENTE a:",
        "• Todos os colaboradores diretos da Cheetah Network",
        "• Freelancers, consultores e prestadores de serviço",
        "• Parceiros comerciais e fornecedores",
        "• Clientes e usuários das plataformas",
        "• Participantes de eventos e treinamentos",
        "",
        "SITUAÇÕES COBERTAS:",
        "• Dentro das instalações físicas da empresa",
        "• Em todos os canais oficiais de comunicação",
        "• Durante eventos, reuniões ou confraternizações",
        "• Em ambiente de trabalho remoto ou home office",
        "• Fora da empresa, quando envolver colaboradores",
        "• Redes sociais pessoais com conexão profissional",
        "",
        "3. PROCEDIMENTO DETALHADO EM CASOS DE ASSÉDIO",
        "",
        "ETAPA 1 – ACOLHIMENTO IMEDIATO DA VÍTIMA:",
        "• Escuta ativa e acolhimento sem julgamentos ou questionamentos",
        "• Garantia de sigilo absoluto de todas as informações compartilhadas",
        "• Avaliação imediata da necessidade de proteção urgente",
        "• Orientação sobre direitos legais e opções disponíveis",
        "• Suporte psicológico profissional quando necessário",
        "• Garantia de que não haverá retaliação ou consequências negativas",
        "",
        "ETAPA 2 – DOCUMENTAÇÃO COMPLETA DO INCIDENTE:",
        "• Registro detalhado com data, hora, local específico e contexto completo",
        "• Coleta e preservação de todas as evidências disponíveis:",
        "  - Screenshots de mensagens ou publicações",
        "  - Gravações de áudio ou vídeo quando disponíveis",
        "  - Documentos, e-mails ou qualquer comunicação relevante",
        "  - Identificação de testemunhas presenciais",
        "• Catalogação organizada em sistema seguro e confidencial",
        "",
        "ETAPA 3 – ORIENTAÇÕES ESPECIALIZADAS À VÍTIMA:",
        "• Instruções detalhadas sobre como bloquear e denunciar o agressor na plataforma específica",
        "• Apoio e acompanhamento para registro de Boletim de Ocorrência (B.O.)",
        "• Orientação jurídica gratuita através de parceiros especializados",
        "• Suporte para acompanhamento médico e psicológico quando necessário",
        "• Orientações sobre medidas protetivas legais disponíveis",
        "• Acompanhamento contínuo durante todo o processo",
        "",
        "ETAPA 4 – AÇÕES EMPRESARIAIS IMEDIATAS:",
        "• Se o agressor estiver vinculado à Cheetah Network:",
        "  - Suspensão imediata e investigação interna rigorosa",
        "  - Banimento definitivo de todos os canais e ambientes da empresa",
        "  - Rescisão de contratos de trabalho ou prestação de serviços",
        "  - Acionamento do departamento jurídico para medidas cabíveis",
        "",
        "• Se o agressor pertencer a outra organização:",
        "  - Comunicação formal à organização responsável pelo indivíduo",
        "  - Compartilhamento de evidências quando autorizado pela vítima",
        "  - Solicitação de medidas disciplinares adequadas",
        "  - Acompanhamento das ações tomadas pela outra organização",
        "",
        "ETAPA 5 – REGISTRO E ACOMPANHAMENTO INTERNO:",
        "• Arquivo confidencial permanente em sistema seguro com acesso restrito",
        "• Acompanhamento regular do bem-estar da vítima por período determinado",
        "• Análise de padrões para prevenção de novos episódios similares",
        "• Implementação de medidas preventivas adicionais quando identificadas",
        "• Relatório anual anônimo sobre efetividade das políticas implementadas",
        "",
        "4. GARANTIAS DE SIGILO E PROTEÇÃO INTEGRAL",
        "",
        "CONFIDENCIALIDADE ABSOLUTA:",
        "• Todas as informações tratadas com máximo sigilo profissional",
        "• Acesso restrito apenas à gestão autorizada e equipe especializada",
        "• Proibição total de divulgação pública sem autorização expressa da vítima",
        "• Sistemas de segurança avançada para proteção de dados sensíveis",
        "• Acordo de confidencialidade assinado por todos os envolvidos no processo",
        "",
        "PROTEÇÃO CONTRA RETALIAÇÃO:",
        "• Política de tolerância zero para qualquer forma de retaliação",
        "• Monitoramento ativo para identificar possíveis represálias",
        "• Medidas disciplinares severas para quem tentar retaliar a vítima",
        "• Canais anônimos para reportar tentativas de retaliação",
        "",
        "5. CONSEQUÊNCIAS PARA AGRESSORES",
        "",
        "MEDIDAS DISCIPLINARES PROGRESSIVAS:",
        "• Primeira ocorrência: advertência formal, treinamento obrigatório",
        "• Reincidência: suspensão, mudança de função ou departamento",
        "• Casos graves: demissão por justa causa imediata",
        "• Casos criminosos: banimento definitivo e acionamento das autoridades",
        "",
        "AÇÕES LEGAIS:",
        "• Comunicação obrigatória às autoridades competentes quando houver crime",
        "• Cooperação total com investigações policiais e judiciais",
        "• Suporte legal completo para a vítima durante processo judicial",
        "• Acompanhamento das consequências legais impostas ao agressor",
        "",
        "6. CANAIS DE DENÚNCIA E SUPORTE 24/7",
        "",
        "CANAIS SEMPRE DISPONÍVEIS:",
        "• E-mail confidencial: assedio@cheetahnetwork.com",
        "• WhatsApp exclusivo: (11) 99999-9999 (24 horas)",
        "• Formulário anônimo online na intranet da empresa",
        "• Conversa presencial com qualquer membro da gestão",
        "• Canal de terceiros independente para casos envolvendo gestão",
        "",
        "7. TREINAMENTO E PREVENÇÃO CONTÍNUA",
        "",
        "PROGRAMA EDUCACIONAL OBRIGATÓRIO:",
        "• Treinamento anual sobre prevenção de assédio para todos os colaboradores",
        "• Workshops específicos para liderança e gestão de pessoas",
        "• Campanhas de conscientização regulares em todos os canais",
        "• Material educativo sempre disponível e atualizado",
        "• Simulações e estudos de caso para prática de procedimentos",
        "",
        "8. COMPROMISSO LEGAL DA EMPRESA",
        "",
        "DECLARAÇÃO FORMAL:",
        "A Cheetah Network reforça publicamente que assédio é CRIME no Brasil (artigos 146, 147, 213-A do Código Penal e Lei 14.540/23) e que QUALQUER colaborador, parceiro ou usuário que se sentir ameaçado, desconfortável ou prejudicado deve comunicar IMEDIATAMENTE à gestão através dos canais disponibilizados.",
        "",
        "COMPROMISSO EXECUTIVO:",
        "• Tolerância absoluta zero para qualquer forma de assédio ou discriminação",
        "• Investimento contínuo em treinamento e sistemas de proteção",
        "• Revisão e atualização anual deste protocolo",
        "• Transparência total sobre ações tomadas (respeitando privacidade das vítimas)",
        "• Cooperação integral com autoridades e organizações de proteção"
      ]
    }
  ];

  // Outras seções complementares
  const additionalSections = [
    {
      icon: Scale,
      title: "1. Definições e Interpretação Técnica",
      content: [
        "Cheetah Network, CheetahNet, Empresa, Nós: refere-se à Cheetah Network LTDA, CNPJ XX.XXX.XXX/0001-XX",
        "Conta: perfil de acesso criado pelo usuário em nossa plataforma",
        "Propriedade Intelectual: direitos autorais, marcas, patentes e segredos comerciais",
        "SLA: Service Level Agreement ou Acordo de Nível de Serviço estabelecido contratualmente",
        "Força Maior: eventos imprevisíveis como desastres naturais, guerras, pandemias"
      ]
    },
    {
      icon: CreditCard,
      title: "2. Política de Reembolso Detalhada",
      content: [
        "Reembolsos aplicáveis apenas em casos específicos previstos nesta política",
        "Serviços de desenvolvimento: reembolso parcial até 72 horas se não iniciados",
        "Projetos em andamento não elegíveis para reembolso após aprovação do escopo",
        "Cancelamento voluntário: deve ser solicitado por escrito com 30 dias de antecedência",
        "Licenças de software: não reembolsáveis após ativação e início de uso"
      ]
    },
    {
      icon: Globe,
      title: "3. Compliance Internacional",
      content: [
        "Conformidade total com LGPD (Lei Geral de Proteção de Dados) brasileira",
        "Adequação ao GDPR europeu para clientes internacionais",
        "Cumprimento da CCPA para usuários da Califórnia",
        "Observância das diretrizes ISO 27001 para segurança da informação",
        "Conformidade com PCI DSS para processamento de dados de pagamento"
      ]
    },
    {
      icon: AlertCircle,
      title: "4. Gestão de Riscos e Continuidade",
      content: [
        "Plano de continuidade de negócios ativo com testes trimestrais",
        "Backup redundante em múltiplas localizações com criptografia avançada",
        "Seguro de responsabilidade civil profissional para cobertura de danos",
        "Análise contínua de riscos operacionais, tecnológicos e de mercado",
        "Equipe de resposta a crises disponível 24/7 para situações críticas"
      ]
    },
    {
      icon: Users,
      title: "5. Relacionamento com Terceiros",
      content: [
        "Contratos rigorosos de confidencialidade com todos os parceiros",
        "Due diligence completa antes do estabelecimento de parcerias",
        "Auditoria regular de parceiros para garantia de conformidade",
        "Política de conflito de interesses para prevenir situações comprometedoras",
        "Acordos de nível de serviço específicos com todos os fornecedores"
      ]
    },
    {
      icon: Clock,
      title: "6. Prazos e Gestão de Projetos",
      content: [
        "Metodologia ágil (Scrum/Kanban) para todos os projetos de desenvolvimento",
        "Cliente tem 48 horas para aprovação de entregas",
        "Mudanças de escopo impactam cronograma e valores conforme análise técnica",
        "Reuniões semanais obrigatórias para acompanhamento de progresso",
        "Buffer de 20% incluído em cronogramas para contingências"
      ]
    },
    {
      icon: Book,
      title: "7. Propriedade Intelectual Expandida",
      content: [
        "Todo código fonte desenvolvido permanece como propriedade da Cheetah Network",
        "Cliente recebe licença perpétua de uso, mas não propriedade do código",
        "Customizações específicas podem ter direitos compartilhados mediante acordo",
        "Biblioteca interna de componentes não é compartilhada com clientes",
        "Registro de patentes para inovações desenvolvidas internamente"
      ]
    },
    {
      icon: Gavel,
      title: "8. Resolução de Disputas e Mediação",
      content: [
        "Tentativa obrigatória de mediação antes de qualquer ação judicial",
        "Centro de Arbitragem da Câmara de Comércio como instância preferencial",
        "Prazo máximo de 90 dias para resolução através de mediação",
        "Foro da comarca de São Paulo/SP para questões não resolvidas",
        "Possibilidade de acordos de pagamento parcelado em casos específicos"
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
            <span className="text-white">Políticas e </span>
            <span className="text-[#0047ab]">Termos</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
            Condições gerais completas para utilização dos nossos serviços e produtos
          </p>
          <div className="bg-[#0047ab]/10 border border-[#0047ab]/20 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-sm text-gray-300">
              <strong className="text-[#0047ab]">Última atualização:</strong> Janeiro de 2025 |
              <strong className="text-[#0047ab]"> Versão:</strong> 2.1
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 px-4 bg-red-500/10 border-y border-red-500/20">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-red-400 mb-2">
                AVISO IMPORTANTE - LEIA COM ATENÇÃO
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Estes termos constituem um acordo legal vinculativo. Ao utilizar nossos serviços, 
                você concorda com todas as cláusulas aqui estabelecidas. Se não concordar com 
                qualquer parte destes termos, não utilize nossos serviços. Em caso de dúvidas, 
                consulte um advogado antes de prosseguir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections - Highlighted */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-white">Principais </span>
              <span className="text-[#0047ab]">Políticas e Termos</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Seções principais que regem o uso dos nossos serviços e proteção de dados
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12">
            {mainDocuments.map((section, index) => (
              <Card key={index} className="bg-gradient-to-br from-[#0047ab]/20 to-black/50 border-[#0047ab]/30 hover:border-[#0047ab]/60 transition-all duration-300 shadow-2xl">
                <CardHeader className="border-b border-[#0047ab]/20 pb-6">
                  <CardTitle className="flex items-center gap-4 text-white text-2xl">
                    <div className="bg-[#0047ab]/20 rounded-full p-4 border-2 border-[#0047ab]/40">
                      <section.icon className="h-8 w-8 text-[#0047ab]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{section.title}</h3>
                      <p className="text-sm text-gray-300 mt-1 font-normal">{section.description}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="text-sm text-gray-300">
                        {item === "" ? (
                          <div className="h-2"></div>
                        ) : item.startsWith("•") || item.includes(":") ? (
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#0047ab] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{item}</span>
                          </div>
                        ) : (
                          <div className="leading-relaxed font-medium text-white/90">{item}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-16 px-4 bg-[#0047ab]/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-white">Seções </span>
              <span className="text-[#0047ab]">Complementares</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Informações adicionais e detalhadas sobre aspectos específicos dos termos
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {additionalSections.map((section, index) => (
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

      {/* Contact for Legal Questions */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-black/50 border-[#0047ab]/20">
            <CardContent className="p-8">
              <div className="text-center">
                <Gavel className="h-12 w-12 text-[#0047ab] mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Dúvidas Jurídicas ou Contratuais?
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Para esclarecimentos sobre estes termos, questões contratuais ou suporte jurídico, 
                  entre em contato com nosso departamento legal através dos canais oficiais.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#0047ab]/10 rounded-lg p-4 border border-[#0047ab]/20">
                    <p className="text-white/80 text-sm">
                      <strong className="text-[#0047ab]">E-mail Legal:</strong><br />
                      contatocheetahsolutions@gmail.com
                    </p>
                  </div>
                  <div className="bg-[#0047ab]/10 rounded-lg p-4 border border-[#0047ab]/20">
                    <p className="text-white/80 text-sm">
                      <strong className="text-[#0047ab]">Telefone:</strong><br />
                      Indisponível no momento!
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

export default Terms;