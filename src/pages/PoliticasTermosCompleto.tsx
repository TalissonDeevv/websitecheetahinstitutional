import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Shield, AlertTriangle, Clock, CreditCard, HardDrive, Lightbulb, Scale, RotateCcw, Eye, Users, Globe, MessageCircle, ExternalLink, BookOpen, CheckCircle, Cookie, Ban, RefreshCw, Gavel, Info } from "lucide-react";

const PoliticasTermosCompleto = () => {
  const [selectedPolicy, setSelectedPolicy] = useState("geral");

  const policies = [
    { id: "geral", name: "Política Geral de Serviços", icon: BookOpen },
    { id: "privacidade", name: "Política de Privacidade", icon: Shield },
    { id: "uso-aceitavel", name: "Política de Uso Aceitável", icon: Ban },
    { id: "seguranca", name: "Política de Segurança", icon: Shield },
    { id: "cookies", name: "Política de Cookies", icon: Cookie },
    { id: "backup", name: "Política de Backup e Recuperação", icon: HardDrive },
    { id: "atualizacao", name: "Política de Atualização", icon: RefreshCw },
    { id: "propriedade", name: "Propriedade Intelectual", icon: Scale },
    { id: "reembolso", name: "Política de Reembolso", icon: CreditCard },
    { id: "responsabilidade", name: "Termos de Responsabilidade", icon: Gavel },
    { id: "cancelamento", name: "Política de Cancelamento", icon: RotateCcw },
    { id: "atendimento", name: "Política de Atendimento", icon: Clock },
  ];

  const renderPolicyContent = () => {
    switch (selectedPolicy) {
      case "geral":
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-[#0047ab]/20 to-blue-600/10 p-6 rounded-lg border border-[#0047ab]/30">
              <h3 className="text-2xl font-bold text-[#0047ab] mb-4">1. POLÍTICA GERAL DE SERVIÇOS</h3>
              <p className="text-gray-300 leading-relaxed">
                Este documento estabelece os termos e condições gerais para a prestação de serviços da Cheetah Solutions Network LTDA, 
                regulamentando a relação comercial entre a empresa e seus clientes de forma transparente e abrangente.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">1.1 DEFINIÇÕES E CONCEITOS</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-lg font-semibold text-[#0047ab] mb-2">1.1.1 Partes Envolvidas</h5>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li><strong>Prestadora:</strong> Cheetah Solutions Network LTDA, pessoa jurídica de direito privado, inscrita no CNPJ sob o nº [a definir], com sede na [endereço a definir]</li>
                      <li><strong>Cliente/Contratante:</strong> Pessoa física ou jurídica que contrata os serviços da Cheetah Network</li>
                      <li><strong>Usuário Final:</strong> Pessoa que utiliza os sistemas desenvolvidos ou mantidos pela Cheetah Network</li>
                      <li><strong>Terceiros:</strong> Qualquer pessoa ou entidade não envolvida diretamente na relação contratual</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-[#0047ab] mb-2">1.1.2 Categorias de Serviços</h5>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li><strong>Desenvolvimento Web:</strong> Criação de sites, sistemas web, e-commerce e aplicações online personalizadas</li>
                      <li><strong>Desenvolvimento Mobile:</strong> Aplicativos nativos e híbridos para Android e iOS</li>
                      <li><strong>Bots e Automação:</strong> Desenvolvimento de chatbots, bots para Discord, Telegram, WhatsApp e automações diversas</li>
                      <li><strong>Cloud Solutions:</strong> Soluções em nuvem, hospedagem, infraestrutura e DevOps</li>
                      <li><strong>Dashboards e BI:</strong> Painéis de controle, relatórios e business intelligence</li>
                      <li><strong>Integrações:</strong> APIs, webhooks e integrações entre sistemas</li>
                      <li><strong>Consultoria:</strong> Assessoria técnica, arquitetura de software e planejamento tecnológico</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">1.2 DIREITOS E OBRIGAÇÕES</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-lg font-semibold text-green-400 mb-3">1.2.1 Direitos do Cliente</h5>
                    <ul className="list-decimal list-inside text-gray-300 space-y-2 text-sm">
                      <li>Receber os serviços conforme especificado no contrato</li>
                      <li>Ter acesso a relatórios de progresso e documentação</li>
                      <li>Solicitar modificações dentro do escopo acordado</li>
                      <li>Receber suporte técnico nos prazos estabelecidos</li>
                      <li>Ter propriedade sobre código personalizado desenvolvido</li>
                      <li>Migrar dados e sistemas para outros provedores</li>
                      <li>Solicitar backup e recuperação de dados</li>
                      <li>Cancelar serviços conforme política de cancelamento</li>
                      <li>Receber compensação por indisponibilidade não programada</li>
                      <li>Ter privacidade e confidencialidade garantidas</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-blue-400 mb-3">1.2.2 Obrigações do Cliente</h5>
                    <ul className="list-decimal list-inside text-gray-300 space-y-2 text-sm">
                      <li>Fornecer informações precisas e completas</li>
                      <li>Efetuar pagamentos nos prazos acordados</li>
                      <li>Participar ativamente do processo de desenvolvimento</li>
                      <li>Validar entregas conforme cronograma</li>
                      <li>Manter confidencialidade sobre informações técnicas</li>
                      <li>Respeitar direitos autorais de terceiros</li>
                      <li>Usar serviços de forma ética e legal</li>
                      <li>Comunicar problemas tempestivamente</li>
                      <li>Manter backup local de dados críticos</li>
                      <li>Seguir recomendações de segurança</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">1.3 CONDIÇÕES COMERCIAIS</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-lg font-semibold text-[#0047ab] mb-2">1.3.1 Formas de Pagamento</h5>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                      <li>PIX: Desconto de 5% para pagamentos à vista</li>
                      <li>Transferência Bancária: Prazo de até 2 dias úteis para compensação</li>
                      <li>Cartão de Crédito: Parcelamento em até 12x sem juros (conforme valor)</li>
                      <li>Boleto Bancário: Vencimento em até 10 dias corridos</li>
                      <li>Débito Automático: Para contratos de manutenção continuada</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-[#0047ab] mb-2">1.3.2 Política de Preços</h5>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                      <li>Preços válidos por 30 dias a partir da data da proposta</li>
                      <li>Reajustes anuais conforme IPCA ou acordo contratual</li>
                      <li>Custos adicionais por alterações de escopo serão pré-aprovados</li>
                      <li>Descontos progressivos para contratos de longo prazo</li>
                      <li>Valores expressos em Real (BRL), salvo acordo em contrário</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "privacidade":
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/10 p-6 rounded-lg border border-green-500/30">
              <h3 className="text-2xl font-bold text-green-400 mb-4">2. POLÍTICA DE PRIVACIDADE</h3>
              <p className="text-gray-300 leading-relaxed">
                Esta política descreve como a Cheetah Network coleta, usa, armazena e protege informações pessoais, 
                em conformidade com a Lei Geral de Proteção de Dados (LGPD) e regulamentações internacionais.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">2.1 COLETA DE DADOS</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-lg font-semibold text-[#0047ab] mb-2">2.1.1 Dados Coletados Diretamente</h5>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li><strong>Dados de Identificação:</strong> Nome completo, razão social, CPF/CNPJ, RG</li>
                      <li><strong>Dados de Contato:</strong> E-mail, telefone, endereço postal, site institucional</li>
                      <li><strong>Dados Profissionais:</strong> Cargo, empresa, área de atuação, experiência</li>
                      <li><strong>Dados Financeiros:</strong> Dados bancários, informações de cobrança, histórico de pagamentos</li>
                      <li><strong>Dados de Projeto:</strong> Requisitos técnicos, preferências, briefings, documentação</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-[#0047ab] mb-2">2.1.2 Dados Coletados Automaticamente</h5>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li><strong>Dados de Navegação:</strong> IP, browser, sistema operacional, páginas visitadas</li>
                      <li><strong>Dados de Uso:</strong> Tempo de sessão, cliques, downloads, interações</li>
                      <li><strong>Dados Técnicos:</strong> Logs de sistema, performance, erros, métricas de uso</li>
                      <li><strong>Dados de Geolocalização:</strong> País, estado, cidade (quando autorizado)</li>
                      <li><strong>Cookies:</strong> Preferências, sessões, analytics, marketing (conforme consentimento)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">2.2 DIREITOS DOS TITULARES</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-lg font-semibold text-green-400 mb-3">2.2.1 Direitos Fundamentais</h5>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                      <li><strong>Acesso:</strong> Obter informações sobre tratamento de dados</li>
                      <li><strong>Retificação:</strong> Correção de dados incompletos ou incorretos</li>
                      <li><strong>Anonimização:</strong> Conversão em dados anônimos</li>
                      <li><strong>Bloqueio:</strong> Suspensão temporária do tratamento</li>
                      <li><strong>Eliminação:</strong> Exclusão definitiva dos dados</li>
                      <li><strong>Portabilidade:</strong> Transferência para outro fornecedor</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-blue-400 mb-3">2.2.2 Como Exercer os Direitos</h5>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                      <li>Canal exclusivo: privacy@cheetah.network</li>
                      <li>Portal de privacidade disponível 24/7</li>
                      <li>Resposta em até 15 dias úteis</li>
                      <li>Atendimento gratuito</li>
                      <li>Comprovação de identidade necessária</li>
                      <li>Acompanhamento por ticket</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "cookies":
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-amber-600/20 to-yellow-600/10 p-6 rounded-lg border border-amber-500/30">
              <h3 className="text-2xl font-bold text-amber-400 mb-4">3. POLÍTICA DE COOKIES</h3>
              <p className="text-gray-300 leading-relaxed">
                Esta política explica como a Cheetah Network utiliza cookies e tecnologias similares 
                para melhorar a experiência do usuário e fornecer serviços personalizados.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">3.1 TIPOS DE COOKIES</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-900/20 p-4 rounded border border-blue-500/20">
                    <h6 className="font-semibold text-blue-400 mb-2">Cookies Essenciais</h6>
                    <p className="text-gray-300 text-sm">
                      Necessários para o funcionamento básico do site. Não podem ser desabilitados.
                    </p>
                  </div>
                  
                  <div className="bg-green-900/20 p-4 rounded border border-green-500/20">
                    <h6 className="font-semibold text-green-400 mb-2">Cookies de Performance</h6>
                    <p className="text-gray-300 text-sm">
                      Coletam informações sobre como você usa nosso site para melhorar a performance.
                    </p>
                  </div>
                  
                  <div className="bg-purple-900/20 p-4 rounded border border-purple-500/20">
                    <h6 className="font-semibold text-purple-400 mb-2">Cookies Funcionais</h6>
                    <p className="text-gray-300 text-sm">
                      Permitem que o site lembre de suas escolhas e forneça recursos personalizados.
                    </p>
                  </div>
                  
                  <div className="bg-orange-900/20 p-4 rounded border border-orange-500/20">
                    <h6 className="font-semibold text-orange-400 mb-2">Cookies de Marketing</h6>
                    <p className="text-gray-300 text-sm">
                      Usados para entregar anúncios relevantes. Requerem consentimento específico.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "uso-aceitavel":
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-red-600/20 to-pink-600/10 p-6 rounded-lg border border-red-500/30">
              <h3 className="text-2xl font-bold text-red-400 mb-4">4. POLÍTICA DE USO ACEITÁVEL</h3>
              <p className="text-gray-300 leading-relaxed">
                Esta política define as condutas permitidas e proibidas ao usar nossos serviços, 
                estabelecendo diretrizes para garantir um ambiente seguro e produtivo para todos.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">4.1 ATIVIDADES PERMITIDAS</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-lg font-semibold text-green-400 mb-3">4.1.1 Uso Comercial</h5>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                      <li>Desenvolvimento de aplicações comerciais</li>
                      <li>Hospedagem de sites corporativos e institucionais</li>
                      <li>E-commerce e marketplaces</li>
                      <li>APIs e integrações comerciais</li>
                      <li>Sistemas de gestão empresarial</li>
                      <li>Dashboards e business intelligence</li>
                      <li>Aplicativos mobile para fins comerciais</li>
                      <li>Automações e chatbots corporativos</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-blue-400 mb-3">4.1.2 Uso Educacional</h5>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                      <li>Plataformas de ensino online</li>
                      <li>Sistemas acadêmicos</li>
                      <li>Portfólios estudantis</li>
                      <li>Projetos de pesquisa</li>
                      <li>Ferramentas educacionais</li>
                      <li>Aplicações para instituições de ensino</li>
                      <li>Sistemas de avaliação e gestão escolar</li>
                      <li>Plataformas de EAD</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">4.2 ATIVIDADES PROIBIDAS</h4>
                <div className="space-y-4">
                  <div className="bg-red-900/20 p-4 rounded border border-red-500/20">
                    <h5 className="text-lg font-semibold text-red-400 mb-2">4.2.1 Atividades Ilegais</h5>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                      <li>Distribuição de conteúdo pirata ou com direitos autorais violados</li>
                      <li>Venda de substâncias controladas ou ilegais</li>
                      <li>Lavagem de dinheiro ou atividades financeiras fraudulentas</li>
                      <li>Pornografia infantil ou exploração de menores</li>
                      <li>Incitação à violência, terrorismo ou atividades criminosas</li>
                      <li>Violação de leis de privacidade e proteção de dados</li>
                    </ul>
                  </div>

                  <div className="bg-orange-900/20 p-4 rounded border border-orange-500/20">
                    <h5 className="text-lg font-semibold text-orange-400 mb-2">4.2.2 Atividades Maliciosas</h5>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                      <li>Desenvolvimento ou distribuição de malware, vírus ou ransomware</li>
                      <li>Ataques DDoS ou sobrecarga intencional de servidores</li>
                      <li>Tentativas de hacking, phishing ou engenharia social</li>
                      <li>Spam, envio de e-mails não solicitados em massa</li>
                      <li>Mineração de criptomoedas não autorizada</li>
                      <li>Exploração de vulnerabilidades de segurança</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">4.3 MONITORAMENTO E COMPLIANCE</h4>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    A Cheetah Network se reserva o direito de monitorar o uso de seus serviços para garantir 
                    o cumprimento desta política. O monitoramento é realizado através de:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Análise automatizada de tráfego e padrões de uso</li>
                    <li>Verificação de conformidade com políticas de segurança</li>
                    <li>Investigação de relatórios de abuso ou violação</li>
                    <li>Auditoria periódica de aplicações e conteúdo</li>
                    <li>Colaboração com autoridades quando necessário</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case "seguranca":
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/10 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">5. POLÍTICA DE SEGURANÇA</h3>
              <p className="text-gray-300 leading-relaxed">
                Nossa política de segurança estabelece as medidas técnicas e organizacionais implementadas 
                para proteger dados, sistemas e infraestrutura contra ameaças e vulnerabilidades.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">5.1 MEDIDAS TÉCNICAS DE SEGURANÇA</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-lg font-semibold text-purple-400 mb-3">5.1.1 Infraestrutura</h5>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                      <li>Servidores em datacenters Tier 3 certificados</li>
                      <li>Criptografia AES-256 para dados em repouso</li>
                      <li>TLS 1.3 para dados em trânsito</li>
                      <li>Firewalls de aplicação web (WAF)</li>
                      <li>Sistemas de detecção de intrusão (IDS/IPS)</li>
                      <li>Backup automatizado com replicação geográfica</li>
                      <li>Monitoramento 24/7 de infraestrutura</li>
                      <li>Patches de segurança automáticos</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-indigo-400 mb-3">5.1.2 Aplicações</h5>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                      <li>Autenticação multifator (MFA)</li>
                      <li>Controle de acesso baseado em função (RBAC)</li>
                      <li>Logs de auditoria completos</li>
                      <li>Testes de penetração regulares</li>
                      <li>Análise de código para vulnerabilidades</li>
                      <li>Sanitização de inputs e outputs</li>
                      <li>Rate limiting e proteção DDoS</li>
                      <li>Sessões seguras com timeout automático</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">5.2 GESTÃO DE INCIDENTES</h4>
                <div className="space-y-4">
                  <h5 className="text-lg font-semibold text-purple-400 mb-2">5.2.1 Processo de Resposta</h5>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-red-900/20 p-3 rounded border border-red-500/20">
                      <h6 className="font-semibold text-red-400 text-sm mb-2">1. Detecção</h6>
                      <p className="text-gray-300 text-xs">
                        Monitoramento contínuo e alertas automáticos
                      </p>
                    </div>
                    <div className="bg-orange-900/20 p-3 rounded border border-orange-500/20">
                      <h6 className="font-semibold text-orange-400 text-sm mb-2">2. Avaliação</h6>
                      <p className="text-gray-300 text-xs">
                        Análise de impacto e criticidade
                      </p>
                    </div>
                    <div className="bg-yellow-900/20 p-3 rounded border border-yellow-500/20">
                      <h6 className="font-semibold text-yellow-400 text-sm mb-2">3. Contenção</h6>
                      <p className="text-gray-300 text-xs">
                        Isolamento e mitigação imediata
                      </p>
                    </div>
                    <div className="bg-green-900/20 p-3 rounded border border-green-500/20">
                      <h6 className="font-semibold text-green-400 text-sm mb-2">4. Recuperação</h6>
                      <p className="text-gray-300 text-xs">
                        Restauração e lições aprendidas
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">5.3 COMPLIANCE E CERTIFICAÇÕES</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-900/20 p-4 rounded border border-blue-500/20">
                    <h6 className="font-semibold text-blue-400 mb-2">LGPD</h6>
                    <p className="text-gray-300 text-sm">
                      Conformidade total com Lei Geral de Proteção de Dados
                    </p>
                  </div>
                  <div className="bg-green-900/20 p-4 rounded border border-green-500/20">
                    <h6 className="font-semibold text-green-400 mb-2">ISO 27001</h6>
                    <p className="text-gray-300 text-sm">
                      Gestão de segurança da informação certificada
                    </p>
                  </div>
                  <div className="bg-purple-900/20 p-4 rounded border border-purple-500/20">
                    <h6 className="font-semibold text-purple-400 mb-2">SOC 2</h6>
                    <p className="text-gray-300 text-sm">
                      Controles de segurança auditados independentemente
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "backup":
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-cyan-600/20 to-teal-600/10 p-6 rounded-lg border border-cyan-500/30">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">6. POLÍTICA DE BACKUP E RECUPERAÇÃO</h3>
              <p className="text-gray-300 leading-relaxed">
                Esta política define nossos procedimentos de backup, recuperação de dados e continuidade 
                de negócios para garantir a integridade e disponibilidade das informações.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">6.1 ESTRATÉGIA DE BACKUP</h4>
                <div className="space-y-4">
                  <h5 className="text-lg font-semibold text-cyan-400 mb-2">6.1.1 Regra 3-2-1</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-900/20 p-4 rounded border border-blue-500/20">
                      <h6 className="font-semibold text-blue-400 mb-2">3 Cópias</h6>
                      <p className="text-gray-300 text-sm">
                        Dados originais + 2 backups redundantes
                      </p>
                    </div>
                    <div className="bg-green-900/20 p-4 rounded border border-green-500/20">
                      <h6 className="font-semibold text-green-400 mb-2">2 Mídias</h6>
                      <p className="text-gray-300 text-sm">
                        Armazenamento em tipos diferentes de mídia
                      </p>
                    </div>
                    <div className="bg-purple-900/20 p-4 rounded border border-purple-500/20">
                      <h6 className="font-semibold text-purple-400 mb-2">1 Offsite</h6>
                      <p className="text-gray-300 text-sm">
                        Pelo menos uma cópia em local remoto
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h5 className="text-lg font-semibold text-cyan-400 mb-2">6.1.2 Frequência de Backup</h5>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-gray-700/50 p-3 rounded">
                      <span className="text-white font-medium">Dados Críticos</span>
                      <span className="text-green-400">A cada 15 minutos</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-700/50 p-3 rounded">
                      <span className="text-white font-medium">Bancos de Dados</span>
                      <span className="text-blue-400">A cada hora</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-700/50 p-3 rounded">
                      <span className="text-white font-medium">Arquivos do Sistema</span>
                      <span className="text-purple-400">Diariamente</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-700/50 p-3 rounded">
                      <span className="text-white font-medium">Backup Completo</span>
                      <span className="text-orange-400">Semanalmente</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">6.2 PROCEDIMENTOS DE RECUPERAÇÃO</h4>
                <div className="space-y-4">
                  <h5 className="text-lg font-semibold text-cyan-400 mb-2">6.2.1 RTO e RPO</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h6 className="font-semibold text-green-400 mb-2">Recovery Time Objective (RTO)</h6>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                        <li>Sistemas críticos: 30 minutos</li>
                        <li>Aplicações principais: 2 horas</li>
                        <li>Sistemas secundários: 4 horas</li>
                        <li>Backup completo: 24 horas</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-semibold text-blue-400 mb-2">Recovery Point Objective (RPO)</h6>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                        <li>Dados transacionais: 15 minutos</li>
                        <li>Dados operacionais: 1 hora</li>
                        <li>Dados analíticos: 4 horas</li>
                        <li>Dados históricos: 24 horas</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h5 className="text-lg font-semibold text-cyan-400 mb-2">6.2.2 Processo de Recuperação</h5>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                      <div>
                        <h6 className="font-semibold text-white">Avaliação do Incidente</h6>
                        <p className="text-gray-300 text-sm">Determinação do escopo e impacto da perda de dados</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                      <div>
                        <h6 className="font-semibold text-white">Seleção do Backup</h6>
                        <p className="text-gray-300 text-sm">Escolha do ponto de recuperação mais apropriado</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                      <div>
                        <h6 className="font-semibold text-white">Restauração</h6>
                        <p className="text-gray-300 text-sm">Execução do processo de recuperação</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
                      <div>
                        <h6 className="font-semibold text-white">Validação</h6>
                        <p className="text-gray-300 text-sm">Verificação da integridade dos dados recuperados</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "atualizacao":
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-emerald-600/20 to-green-600/10 p-6 rounded-lg border border-emerald-500/30">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">7. POLÍTICA DE ATUALIZAÇÃO E MANUTENÇÃO</h3>
              <p className="text-gray-300 leading-relaxed">
                Esta política estabelece nossos procedimentos para atualizações de software, manutenção 
                de sistemas e comunicação de mudanças para garantir segurança e performance.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">7.1 TIPOS DE ATUALIZAÇÕES</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-lg font-semibold text-emerald-400 mb-3">7.1.1 Atualizações Críticas</h5>
                    <div className="space-y-3">
                      <div className="bg-red-900/20 p-3 rounded border border-red-500/20">
                        <h6 className="font-semibold text-red-400 text-sm mb-1">Segurança</h6>
                        <p className="text-gray-300 text-xs">Patches de segurança - Aplicados imediatamente</p>
                      </div>
                      <div className="bg-orange-900/20 p-3 rounded border border-orange-500/20">
                        <h6 className="font-semibold text-orange-400 text-sm mb-1">Bugs Críticos</h6>
                        <p className="text-gray-300 text-xs">Correções de falhas graves - 24-48h</p>
                      </div>
                      <div className="bg-yellow-900/20 p-3 rounded border border-yellow-500/20">
                        <h6 className="font-semibold text-yellow-400 text-sm mb-1">Performance</h6>
                        <p className="text-gray-300 text-xs">Otimizações críticas - 72h</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-blue-400 mb-3">7.1.2 Atualizações Programadas</h5>
                    <div className="space-y-3">
                      <div className="bg-blue-900/20 p-3 rounded border border-blue-500/20">
                        <h6 className="font-semibold text-blue-400 text-sm mb-1">Features</h6>
                        <p className="text-gray-300 text-xs">Novas funcionalidades - Mensalmente</p>
                      </div>
                      <div className="bg-green-900/20 p-3 rounded border border-green-500/20">
                        <h6 className="font-semibold text-green-400 text-sm mb-1">Melhorias</h6>
                        <p className="text-gray-300 text-xs">Aprimoramentos gerais - Quinzenalmente</p>
                      </div>
                      <div className="bg-purple-900/20 p-3 rounded border border-purple-500/20">
                        <h6 className="font-semibold text-purple-400 text-sm mb-1">Infraestrutura</h6>
                        <p className="text-gray-300 text-xs">Updates de sistema - Semanalmente</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">7.2 JANELAS DE MANUTENÇÃO</h4>
                <div className="space-y-4">
                  <h5 className="text-lg font-semibold text-emerald-400 mb-2">7.2.1 Horários Padrão</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-900/20 p-4 rounded border border-blue-500/20">
                      <h6 className="font-semibold text-blue-400 mb-2">Manutenção Regular</h6>
                      <p className="text-gray-300 text-sm">Domingos, 02:00 - 06:00 BRT</p>
                      <p className="text-gray-400 text-xs mt-1">Menor impacto no tráfego</p>
                    </div>
                    <div className="bg-orange-900/20 p-4 rounded border border-orange-500/20">
                      <h6 className="font-semibold text-orange-400 mb-2">Manutenção Urgente</h6>
                      <p className="text-gray-300 text-sm">Qualquer horário</p>
                      <p className="text-gray-400 text-xs mt-1">Apenas para correções críticas</p>
                    </div>
                    <div className="bg-green-900/20 p-4 rounded border border-green-500/20">
                      <h6 className="font-semibold text-green-400 mb-2">Manutenção Programada</h6>
                      <p className="text-gray-300 text-sm">Terças, 01:00 - 04:00 BRT</p>
                      <p className="text-gray-400 text-xs mt-1">Updates planejados</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h5 className="text-lg font-semibold text-emerald-400 mb-2">7.2.2 Comunicação</h5>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Notificação por e-mail com 48h de antecedência</li>
                    <li>Status page atualizada em tempo real</li>
                    <li>Avisos no dashboard do cliente</li>
                    <li>Notificações push para aplicações móveis</li>
                    <li>Relatório pós-manutenção detalhado</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case "propriedade":
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-violet-600/20 to-purple-600/10 p-6 rounded-lg border border-violet-500/30">
              <h3 className="text-2xl font-bold text-violet-400 mb-4">8. POLÍTICA DE PROPRIEDADE INTELECTUAL</h3>
              <p className="text-gray-300 leading-relaxed">
                Esta política define os direitos de propriedade intelectual, uso de software, 
                licenças e proteção de ativos intelectuais em nossos serviços.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">8.1 DIREITOS DE PROPRIEDADE</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-lg font-semibold text-violet-400 mb-3">8.1.1 Código Personalizado</h5>
                    <div className="space-y-3">
                      <div className="bg-green-900/20 p-3 rounded border border-green-500/20">
                        <h6 className="font-semibold text-green-400 text-sm mb-1">Cliente</h6>
                        <p className="text-gray-300 text-xs">Propriedade total do código desenvolvido especificamente</p>
                      </div>
                      <div className="bg-blue-900/20 p-3 rounded border border-blue-500/20">
                        <h6 className="font-semibold text-blue-400 text-sm mb-1">Documentação</h6>
                        <p className="text-gray-300 text-xs">Manuais e documentação técnica inclusos</p>
                      </div>
                      <div className="bg-purple-900/20 p-3 rounded border border-purple-500/20">
                        <h6 className="font-semibold text-purple-400 text-sm mb-1">Transferência</h6>
                        <p className="text-gray-300 text-xs">Direitos transferidos após pagamento integral</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-orange-400 mb-3">8.1.2 Cheetah Network</h5>
                    <div className="space-y-3">
                      <div className="bg-orange-900/20 p-3 rounded border border-orange-500/20">
                        <h6 className="font-semibold text-orange-400 text-sm mb-1">Frameworks</h6>
                        <p className="text-gray-300 text-xs">Tecnologias proprietárias e metodologias</p>
                      </div>
                      <div className="bg-red-900/20 p-3 rounded border border-red-500/20">
                        <h6 className="font-semibold text-red-400 text-sm mb-1">Know-how</h6>
                        <p className="text-gray-300 text-xs">Conhecimento técnico e processos internos</p>
                      </div>
                      <div className="bg-pink-900/20 p-3 rounded border border-pink-500/20">
                        <h6 className="font-semibold text-pink-400 text-sm mb-1">Marca</h6>
                        <p className="text-gray-300 text-xs">Logotipos, nomes e identidade visual</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">8.2 LICENÇAS DE SOFTWARE</h4>
                <div className="space-y-4">
                  <h5 className="text-lg font-semibold text-violet-400 mb-2">8.2.1 Tipos de Licenças</h5>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-green-900/20 p-3 rounded border border-green-500/20">
                      <h6 className="font-semibold text-green-400 text-sm mb-2">Open Source</h6>
                      <p className="text-gray-300 text-xs">MIT, Apache, GPL - Uso livre com atribuição</p>
                    </div>
                    <div className="bg-blue-900/20 p-3 rounded border border-blue-500/20">
                      <h6 className="font-semibold text-blue-400 text-sm mb-2">Comercial</h6>
                      <p className="text-gray-300 text-xs">Software pago com licenças específicas</p>
                    </div>
                    <div className="bg-purple-900/20 p-3 rounded border border-purple-500/20">
                      <h6 className="font-semibold text-purple-400 text-sm mb-2">Proprietário</h6>
                      <p className="text-gray-300 text-xs">Desenvolvido internamente pela Cheetah</p>
                    </div>
                    <div className="bg-orange-900/20 p-3 rounded border border-orange-500/20">
                      <h6 className="font-semibold text-orange-400 text-sm mb-2">SaaS</h6>
                      <p className="text-gray-300 text-xs">Serviços de terceiros integrados</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h5 className="text-lg font-semibold text-violet-400 mb-2">8.2.2 Responsabilidades</h5>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Manutenção de inventário de licenças atualizado</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Compliance com termos de uso de software terceirizado</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Auditoria regular de uso de software</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Documentação de direitos e restrições</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "reembolso":
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-teal-600/20 to-cyan-600/10 p-6 rounded-lg border border-teal-500/30">
              <h3 className="text-2xl font-bold text-teal-400 mb-4">9. POLÍTICA DE REEMBOLSO</h3>
              <p className="text-gray-300 leading-relaxed">
                Esta política estabelece as condições, prazos e procedimentos para solicitação 
                de reembolsos de valores pagos pelos nossos serviços.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">9.1 CONDIÇÕES PARA REEMBOLSO</h4>
                <div className="space-y-4">
                  <h5 className="text-lg font-semibold text-teal-400 mb-2">9.1.1 Serviços Elegíveis</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h6 className="font-semibold text-green-400 mb-2">Reembolso Total</h6>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                        <li>Cancelamento em até 7 dias após contratação</li>
                        <li>Falha técnica não resolvida em 30 dias</li>
                        <li>Não entrega conforme especificação acordada</li>
                        <li>Violação dos termos de SLA</li>
                        <li>Indisponibilidade superior a 10% no mês</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h6 className="font-semibold text-blue-400 mb-2">Reembolso Parcial</h6>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                        <li>Cancelamento após início do desenvolvimento</li>
                        <li>Alteração de escopo por parte do cliente</li>
                        <li>Entrega parcial com aceite do cliente</li>
                        <li>Problemas de performance resolvidos</li>
                        <li>Downtime programado não comunicado</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h5 className="text-lg font-semibold text-teal-400 mb-2">9.1.2 Condições que Invalidam Reembolso</h5>
                  <div className="bg-red-900/20 p-4 rounded border border-red-500/20">
                    <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                      <li>Uso indevido dos serviços ou violação dos termos</li>
                      <li>Tentativa de fraude ou chargeback indevido</li>
                      <li>Não cooperação durante o processo de desenvolvimento</li>
                      <li>Informações falsas fornecidas pelo cliente</li>
                      <li>Projeto concluído e entregue conforme especificação</li>
                      <li>Serviços consumidos por mais de 90 dias</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">9.2 PROCESSO DE SOLICITAÇÃO</h4>
                <div className="space-y-4">
                  <h5 className="text-lg font-semibold text-teal-400 mb-2">9.2.1 Passo a Passo</h5>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                      <div>
                        <h6 className="font-semibold text-white">Abertura de Ticket</h6>
                        <p className="text-gray-300 text-sm">Solicitação via e-mail ou portal do cliente com justificativa detalhada</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                      <div>
                        <h6 className="font-semibold text-white">Análise Técnica</h6>
                        <p className="text-gray-300 text-sm">Avaliação da solicitação pela equipe técnica em até 5 dias úteis</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                      <div>
                        <h6 className="font-semibold text-white">Aprovação</h6>
                        <p className="text-gray-300 text-sm">Comunicação da decisão e percentual aprovado para reembolso</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                      <div>
                        <h6 className="font-semibold text-white">Processamento</h6>
                        <p className="text-gray-300 text-sm">Execução do reembolso no prazo de 10 dias úteis</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h5 className="text-lg font-semibold text-teal-400 mb-2">9.2.2 Documentação Necessária</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h6 className="font-semibold text-white mb-2">Documentos Obrigatórios</h6>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                        <li>Comprovante de pagamento</li>
                        <li>Número do contrato ou pedido</li>
                        <li>Justificativa detalhada</li>
                        <li>Prints de tela (se aplicável)</li>
                        <li>Comunicações anteriores</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-semibold text-white mb-2">Dados Bancários</h6>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                        <li>Banco e agência</li>
                        <li>Conta corrente ou poupança</li>
                        <li>Titular da conta</li>
                        <li>CPF/CNPJ</li>
                        <li>Chave PIX (se preferir)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "responsabilidade":
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-slate-600/20 to-gray-600/10 p-6 rounded-lg border border-slate-500/30">
              <h3 className="text-2xl font-bold text-slate-300 mb-4">10. TERMOS DE RESPONSABILIDADE</h3>
              <p className="text-gray-300 leading-relaxed">
                Este documento define as responsabilidades, limitações de responsabilidade civil 
                e distribuição de riscos entre a Cheetah Network e seus clientes.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">10.1 RESPONSABILIDADES DA CHEETAH NETWORK</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-lg font-semibold text-blue-400 mb-3">10.1.1 Técnicas</h5>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                      <li>Desenvolvimento conforme especificações acordadas</li>
                      <li>Garantia de funcionamento por 90 dias pós-entrega</li>
                      <li>Correção de bugs identificados no período de garantia</li>
                      <li>Manutenção da segurança dos sistemas desenvolvidos</li>
                      <li>Backup e recuperação de dados quando contratado</li>
                      <li>Suporte técnico nos prazos estabelecidos</li>
                      <li>Documentação técnica adequada</li>
                      <li>Treinamento da equipe quando solicitado</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-green-400 mb-3">10.1.2 Legais</h5>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                      <li>Conformidade com LGPD e regulamentações</li>
                      <li>Proteção de dados pessoais tratados</li>
                      <li>Confidencialidade de informações do cliente</li>
                      <li>Uso de software licenciado adequadamente</li>
                      <li>Cumprimento de acordos de nível de serviço</li>
                      <li>Transparência em comunicações</li>
                      <li>Processo formal de gestão de mudanças</li>
                      <li>Relatórios de incidentes e status</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">10.2 RESPONSABILIDADES DO CLIENTE</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-lg font-semibold text-orange-400 mb-3">10.2.1 Operacionais</h5>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                      <li>Fornecimento de informações precisas e completas</li>
                      <li>Participação ativa no processo de desenvolvimento</li>
                      <li>Validação de entregas dentro dos prazos</li>
                      <li>Manutenção de backup local de dados críticos</li>
                      <li>Treinamento adequado de usuários finais</li>
                      <li>Comunicação tempestiva de problemas</li>
                      <li>Atualização de credenciais e acessos</li>
                      <li>Monitoramento de uso e performance</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-purple-400 mb-3">10.2.2 Financeiras</h5>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                      <li>Pagamento pontual conforme acordado</li>
                      <li>Aprovação prévia de custos adicionais</li>
                      <li>Manutenção de licenças de software próprias</li>
                      <li>Contratação de infraestrutura quando necessário</li>
                      <li>Renovação de certificados digitais</li>
                      <li>Pagamento de taxas de terceiros</li>
                      <li>Custos de integração com sistemas legados</li>
                      <li>Despesas de compliance setorial</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">10.3 LIMITAÇÕES DE RESPONSABILIDADE</h4>
                <div className="space-y-4">
                  <div className="bg-red-900/20 p-4 rounded border border-red-500/20">
                    <h5 className="text-lg font-semibold text-red-400 mb-2">10.3.1 Exclusões</h5>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                      <li>Danos indiretos, lucros cessantes ou perda de oportunidade</li>
                      <li>Falhas causadas por modificações não autorizadas</li>
                      <li>Problemas decorrentes de infraestrutura de terceiros</li>
                      <li>Incompatibilidade com sistemas não especificados</li>
                      <li>Ataques cibernéticos e força maior</li>
                      <li>Uso inadequado ou não conforme dos serviços</li>
                    </ul>
                  </div>

                  <div className="bg-blue-900/20 p-4 rounded border border-blue-500/20">
                    <h5 className="text-lg font-semibold text-blue-400 mb-2">10.3.2 Valores Máximos</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Danos diretos</span>
                        <span className="text-blue-400 font-semibold">Valor do contrato</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Perda de dados</span>
                        <span className="text-blue-400 font-semibold">Custo de recuperação</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Indisponibilidade</span>
                        <span className="text-blue-400 font-semibold">Créditos de SLA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "cancelamento":
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-rose-600/20 to-red-600/10 p-6 rounded-lg border border-rose-500/30">
              <h3 className="text-2xl font-bold text-rose-400 mb-4">11. POLÍTICA DE CANCELAMENTO</h3>
              <p className="text-gray-300 leading-relaxed">
                Esta política estabelece os procedimentos, prazos e condições para cancelamento 
                de serviços, garantindo transparência e justiça para ambas as partes.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">11.1 TIPOS DE CANCELAMENTO</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-900/20 p-4 rounded border border-green-500/20">
                    <h5 className="font-semibold text-green-400 mb-2">Imediato</h5>
                    <p className="text-gray-300 text-sm mb-3">Cancelamento sem ônus</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 text-xs">
                      <li>Primeiros 7 dias após contratação</li>
                      <li>Serviços não iniciados</li>
                      <li>Falha na entrega inicial</li>
                      <li>Acordo mútuo</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-900/20 p-4 rounded border border-orange-500/20">
                    <h5 className="font-semibold text-orange-400 mb-2">Programado</h5>
                    <p className="text-gray-300 text-sm mb-3">Cancelamento com aviso prévio</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 text-xs">
                      <li>30 dias de antecedência</li>
                      <li>Conclusão da fase atual</li>
                      <li>Entrega parcial acordada</li>
                      <li>Migração planejada</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-900/20 p-4 rounded border border-red-500/20">
                    <h5 className="font-semibold text-red-400 mb-2">Por Causa</h5>
                    <p className="text-gray-300 text-sm mb-3">Cancelamento justificado</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 text-xs">
                      <li>Violação contratual</li>
                      <li>Inadimplência</li>
                      <li>Uso indevido</li>
                      <li>Força maior</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">11.2 PROCESSO DE CANCELAMENTO</h4>
                <div className="space-y-4">
                  <h5 className="text-lg font-semibold text-rose-400 mb-2">11.2.1 Etapas do Processo</h5>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                      <div>
                        <h6 className="font-semibold text-white">Solicitação Formal</h6>
                        <p className="text-gray-300 text-sm">Envio por e-mail ou abertura de ticket com justificativa</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                      <div>
                        <h6 className="font-semibold text-white">Análise de Viabilidade</h6>
                        <p className="text-gray-300 text-sm">Verificação de status do projeto e impactos</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                      <div>
                        <h6 className="font-semibold text-white">Negociação</h6>
                        <p className="text-gray-300 text-sm">Discussão de alternativas e condições</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                      <div>
                        <h6 className="font-semibold text-white">Finalização</h6>
                        <p className="text-gray-300 text-sm">Formalização do cancelamento e acertos financeiros</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h5 className="text-lg font-semibold text-rose-400 mb-2">11.2.2 Documentação e Entregáveis</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h6 className="font-semibold text-white mb-2">O que é Entregue</h6>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                        <li>Código desenvolvido até a data</li>
                        <li>Documentação técnica atual</li>
                        <li>Credenciais e acessos</li>
                        <li>Backup de dados</li>
                        <li>Relatório de status final</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-semibold text-white mb-2">O que é Retido</h6>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                        <li>Metodologias proprietárias</li>
                        <li>Templates e frameworks internos</li>
                        <li>Know-how específico</li>
                        <li>Ferramentas de desenvolvimento</li>
                        <li>Licenças de software</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">11.3 IMPACTOS FINANCEIROS</h4>
                <div className="space-y-4">
                  <h5 className="text-lg font-semibold text-rose-400 mb-2">11.3.1 Cálculo de Valores</h5>
                  <div className="bg-gray-700/50 p-4 rounded">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                        <span className="text-gray-300">Trabalho realizado</span>
                        <span className="text-green-400 font-semibold">100% do valor</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                        <span className="text-gray-300">Trabalho iniciado</span>
                        <span className="text-yellow-400 font-semibold">50% do valor</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                        <span className="text-gray-300">Trabalho não iniciado</span>
                        <span className="text-red-400 font-semibold">0% do valor</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Custos de cancelamento</span>
                        <span className="text-orange-400 font-semibold">5-15% do total</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "atendimento":
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-indigo-600/20 to-blue-600/10 p-6 rounded-lg border border-indigo-500/30">
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">12. POLÍTICA DE ATENDIMENTO AO CLIENTE</h3>
              <p className="text-gray-300 leading-relaxed">
                Esta política define nossos padrões de atendimento, canais de comunicação, 
                tempos de resposta e procedimentos para garantir excelência no suporte.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">12.1 CANAIS DE ATENDIMENTO</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-green-900/20 p-4 rounded border border-green-500/20">
                    <h5 className="font-semibold text-green-400 mb-2">WhatsApp</h5>
                    <p className="text-gray-300 text-sm mb-2">Suporte rápido e direto</p>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>• Seg-Sex: 8h-18h</li>
                      <li>• Emergências: 24/7</li>
                      <li>• Resposta: 30min</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-900/20 p-4 rounded border border-blue-500/20">
                    <h5 className="font-semibold text-blue-400 mb-2">E-mail</h5>
                    <p className="text-gray-300 text-sm mb-2">Comunicação formal</p>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>• 24h por dia</li>
                      <li>• Histórico completo</li>
                      <li>• Resposta: 4h úteis</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-900/20 p-4 rounded border border-purple-500/20">
                    <h5 className="font-semibold text-purple-400 mb-2">Portal</h5>
                    <p className="text-gray-300 text-sm mb-2">Autoatendimento</p>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>• Acesso 24/7</li>
                      <li>• Base de conhecimento</li>
                      <li>• Status de tickets</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-900/20 p-4 rounded border border-orange-500/20">
                    <h5 className="font-semibold text-orange-400 mb-2">Telefone</h5>
                    <p className="text-gray-300 text-sm mb-2">Urgências e emergências</p>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>• Seg-Sex: 9h-17h</li>
                      <li>• Plantão: fins de semana</li>
                      <li>• Resposta: imediata</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">12.2 NÍVEIS DE PRIORIDADE</h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-red-900/20 p-4 rounded border border-red-500/20">
                      <h5 className="font-semibold text-red-400 mb-2">Crítica</h5>
                      <p className="text-gray-300 text-sm mb-2">Sistema indisponível</p>
                      <div className="text-xs text-gray-400">
                        <p>• Resposta: 15min</p>
                        <p>• Resolução: 2h</p>
                        <p>• Escalation: imediato</p>
                      </div>
                    </div>
                    
                    <div className="bg-orange-900/20 p-4 rounded border border-orange-500/20">
                      <h5 className="font-semibold text-orange-400 mb-2">Alta</h5>
                      <p className="text-gray-300 text-sm mb-2">Funcionalidade comprometida</p>
                      <div className="text-xs text-gray-400">
                        <p>• Resposta: 1h</p>
                        <p>• Resolução: 8h</p>
                        <p>• Escalation: 4h</p>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-900/20 p-4 rounded border border-yellow-500/20">
                      <h5 className="font-semibold text-yellow-400 mb-2">Média</h5>
                      <p className="text-gray-300 text-sm mb-2">Problema operacional</p>
                      <div className="text-xs text-gray-400">
                        <p>• Resposta: 4h</p>
                        <p>• Resolução: 24h</p>
                        <p>• Escalation: 12h</p>
                      </div>
                    </div>
                    
                    <div className="bg-green-900/20 p-4 rounded border border-green-500/20">
                      <h5 className="font-semibold text-green-400 mb-2">Baixa</h5>
                      <p className="text-gray-300 text-sm mb-2">Dúvida ou melhoria</p>
                      <div className="text-xs text-gray-400">
                        <p>• Resposta: 8h</p>
                        <p>• Resolução: 48h</p>
                        <p>• Escalation: 24h</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">12.3 QUALIDADE DO ATENDIMENTO</h4>
                <div className="space-y-4">
                  <h5 className="text-lg font-semibold text-indigo-400 mb-2">12.3.1 Indicadores de Performance</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-900/20 p-4 rounded border border-blue-500/20">
                      <h6 className="font-semibold text-blue-400 mb-2">Tempo de Resposta</h6>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-300 text-sm">Meta:</span>
                          <span className="text-green-400 text-sm">95% no SLA</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300 text-sm">Atual:</span>
                          <span className="text-blue-400 text-sm">98.2%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-900/20 p-4 rounded border border-green-500/20">
                      <h6 className="font-semibold text-green-400 mb-2">Satisfação</h6>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-300 text-sm">Meta:</span>
                          <span className="text-green-400 text-sm">4.5/5.0</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300 text-sm">Atual:</span>
                          <span className="text-green-400 text-sm">4.7/5.0</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-900/20 p-4 rounded border border-purple-500/20">
                      <h6 className="font-semibold text-purple-400 mb-2">Resolução</h6>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-300 text-sm">Meta:</span>
                          <span className="text-green-400 text-sm">90% 1º contato</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300 text-sm">Atual:</span>
                          <span className="text-purple-400 text-sm">92.5%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h5 className="text-lg font-semibold text-indigo-400 mb-2">12.3.2 Processo de Melhoria</h5>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Pesquisas de satisfação após cada atendimento</li>
                    <li>Análise mensal de métricas e tendências</li>
                    <li>Treinamento contínuo da equipe de suporte</li>
                    <li>Implementação de feedback dos clientes</li>
                    <li>Auditoria trimestral de qualidade</li>
                    <li>Certificações em atendimento ao cliente</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-gray-600/20 to-slate-600/10 p-6 rounded-lg border border-gray-500/30">
              <h3 className="text-2xl font-bold text-gray-300 mb-4">Em Desenvolvimento</h3>
              <p className="text-gray-300 leading-relaxed">
                Esta seção está sendo desenvolvida. Em breve, você encontrará aqui informações 
                detalhadas sobre esta política específica.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-8 sm:pb-16 px-4 animate-fade-in">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Políticas e </span>
            <span className="text-[#0047ab]">Termos Completos</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-4">
            Todas as nossas políticas e termos de serviço detalhados em um só lugar
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 sm:py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:hidden mb-6">
                <Select value={selectedPolicy} onValueChange={setSelectedPolicy}>
                  <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="Selecione uma política" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    {policies.map((policy) => {
                      const Icon = policy.icon;
                      return (
                        <SelectItem 
                          key={policy.id} 
                          value={policy.id}
                          className="text-white hover:bg-gray-700 focus:bg-gray-700"
                        >
                          <div className="flex items-center gap-2">
                            <Icon className="h-4 w-4" />
                            {policy.name}
                          </div>
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>

              <div className="hidden lg:block">
                <Card className="bg-gradient-to-br from-[#0047ab]/10 to-black/50 border-[#0047ab]/20 sticky top-8">
                  <CardHeader>
                    <CardTitle className="text-[#0047ab]">Políticas Disponíveis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {policies.map((policy) => {
                      const Icon = policy.icon;
                      return (
                        <button
                          key={policy.id}
                          onClick={() => setSelectedPolicy(policy.id)}
                          className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-200 ${
                            selectedPolicy === policy.id
                              ? 'bg-[#0047ab]/20 text-[#0047ab] border border-[#0047ab]/30'
                              : 'hover:bg-gray-800/50 text-gray-300'
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                          <span className="text-sm font-medium">{policy.name}</span>
                        </button>
                      );
                    })}
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-gray-700">
                <CardContent className="p-6 sm:p-8">
                  {renderPolicyContent()}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PoliticasTermosCompleto;