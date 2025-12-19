import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileText, Shield, AlertTriangle, Clock, CreditCard, HardDrive, Lightbulb, Scale, RotateCcw, Eye, Users, Globe, MessageCircle, ExternalLink, BookOpen, CheckCircle } from "lucide-react";

const PoliticasTermos = () => {
  const sections = [
    {
      id: "termos-explicados",
      title: "Termos Explicados",
      icon: FileText,
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed text-lg">
            Esta seção explica de forma simplificada os principais termos utilizados em nossos contratos e políticas, 
            facilitando o entendimento dos nossos clientes sobre os serviços prestados pela Cheetah Network.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-[#0047ab]/10 p-4 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-3">Bot / Chatbot</h4>
                <p className="text-gray-300 leading-relaxed">
                  Software automatizado que realiza tarefas específicas em plataformas como Discord, Telegram, WhatsApp ou sites. 
                  Pode responder automaticamente, executar comandos, processar dados e interagir com usuários 24/7.
                </p>
              </div>
              
              <div className="bg-[#0047ab]/10 p-4 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-3">Sistema Web</h4>
                <p className="text-gray-300 leading-relaxed">
                  Aplicação online acessível através de navegadores web, desenvolvida sob medida para atender necessidades 
                  específicas do cliente. Inclui painéis administrativos, dashboards, e-commerce, sistemas de gestão, etc.
                </p>
              </div>
              
              <div className="bg-[#0047ab]/10 p-4 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-3">API (Interface de Programação)</h4>
                <p className="text-gray-300 leading-relaxed">
                  Interface que permite a comunicação entre diferentes sistemas e softwares. Facilita a integração 
                  entre plataformas, automatização de processos e troca de dados entre aplicações.
                </p>
              </div>
              
              <div className="bg-[#0047ab]/10 p-4 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-3">Deploy / Publicação</h4>
                <p className="text-gray-300 leading-relaxed">
                  Processo de publicação e disponibilização de um sistema ou aplicação na internet, 
                  tornando-o acessível aos usuários finais através de serviços de nuvem.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#0047ab]/10 p-4 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-3">LGPD (Lei Geral de Proteção de Dados)</h4>
                <p className="text-gray-300 leading-relaxed">
                  Legislação brasileira que regula o tratamento de dados pessoais, garantindo maior 
                  privacidade e controle aos titulares sobre suas informações pessoais.
                </p>
              </div>
              
              <div className="bg-[#0047ab]/10 p-4 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-3">Cloud Solutions</h4>
                <p className="text-gray-300 leading-relaxed">
                  Soluções em nuvem que garantem escalabilidade, disponibilidade e performance. 
                  Inclui hospedagem, armazenamento, backup e monitoramento contínuo.
                </p>
              </div>
              
              <div className="bg-[#0047ab]/10 p-4 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-3">Dashboard / BI</h4>
                <p className="text-gray-300 leading-relaxed">
                  Painéis de controle que apresentam dados de forma visual e interativa, 
                  facilitando a tomada de decisões através de gráficos, métricas e relatórios em tempo real.
                </p>
              </div>
              
              <div className="bg-[#0047ab]/10 p-4 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-3">Mobile App</h4>
                <p className="text-gray-300 leading-relaxed">
                  Aplicativo desenvolvido para dispositivos móveis (Android/iOS), 
                  podendo ser nativo ou híbrido, com funcionalidades otimizadas para smartphones e tablets.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "seguranca",
      title: "Política de Segurança da Informação",
      icon: Shield,
      content: (
        <div className="space-y-8">
          <p className="text-gray-300 leading-relaxed text-lg">
            A Cheetah Network adota rigorosas medidas de segurança para proteger os dados e sistemas de nossos clientes, 
            seguindo as melhores práticas internacionais de cibersegurança.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-4 flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Medidas de Proteção Técnica
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-3">
                  <li>Criptografia AES-256 para dados sensíveis em trânsito e armazenamento</li>
                  <li>Autenticação multifator (MFA) para acesso a sistemas críticos</li>
                  <li>Monitoramento contínuo de segurança 24/7 com alertas automáticos</li>
                  <li>Backups automáticos criptografados em múltiplas localizações</li>
                  <li>Controle de acesso baseado em funções (RBAC)</li>
                  <li>Firewalls avançados e detecção de intrusão (IDS/IPS)</li>
                  <li>Certificados SSL/TLS para todas as comunicações</li>
                  <li>Análise de vulnerabilidades e testes de penetração regulares</li>
                </ul>
              </div>
              
              <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-4 flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Controles Administrativos
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-3">
                  <li>Política de senhas fortes e rotação periódica</li>
                  <li>Treinamento regular da equipe em segurança cibernética</li>
                  <li>Procedimentos de resposta a incidentes documentados</li>
                  <li>Auditoria de logs e atividades do sistema</li>
                  <li>Contratos de confidencialidade (NDAs) com toda equipe</li>
                  <li>Política de mesa limpa e tela limpa</li>
                  <li>Revisão periódica de permissões de acesso</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-4 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Responsabilidades do Cliente
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-3">
                  <li>Manter credenciais de acesso seguras e confidenciais</li>
                  <li>Reportar incidentes de segurança imediatamente</li>
                  <li>Seguir boas práticas de segurança em suas operações</li>
                  <li>Não compartilhar dados de acesso com terceiros</li>
                  <li>Manter sistemas locais atualizados e protegidos</li>
                  <li>Realizar backup regular de dados críticos</li>
                  <li>Comunicar mudanças em sua infraestrutura</li>
                </ul>
              </div>
              
              <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-4 flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  Procedimentos de Emergência
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-3">
                  <li>Resposta a incidentes em até 30 minutos para casos críticos</li>
                  <li>Isolamento automático de sistemas comprometidos</li>
                  <li>Notificação imediata a clientes afetados</li>
                  <li>Investigação forense detalhada quando necessário</li>
                  <li>Relatório pós-incidente com lições aprendidas</li>
                  <li>Plano de continuidade de negócios ativo</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h4 className="text-xl font-semibold text-white mb-4">Certificações e Conformidade</h4>
            <p className="text-gray-300 leading-relaxed">
              Estamos em processo de certificação ISO 27001 e seguimos as diretrizes da LGPD, GDPR e outros 
              frameworks de segurança reconhecidos internacionalmente. Realizamos auditorias trimestrais 
              internas e anuais por terceiros especializados.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "cookies",
      title: "Política de Cookies",
      icon: AlertTriangle,
      content: (
        <div className="space-y-8">
          <p className="text-gray-300 leading-relaxed text-lg">
            Esta política explica como utilizamos cookies e tecnologias similares em nosso site para melhorar 
            sua experiência de navegação e análise de tráfego.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-4">O que são Cookies?</h4>
                <p className="text-gray-300 leading-relaxed">
                  Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você visita um site. 
                  Eles nos ajudam a lembrar suas preferências, melhorar a funcionalidade do site e entender 
                  como você interage com nosso conteúdo.
                </p>
              </div>
              
              <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-4">Tipos de Cookies que Utilizamos</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-white mb-2">Cookies Essenciais</h5>
                    <p className="text-gray-300 text-sm">Necessários para o funcionamento básico do site, autenticação e segurança.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Cookies Analíticos</h5>
                    <p className="text-gray-300 text-sm">Coletam informações sobre como os visitantes usam o site para melhorias.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Cookies Funcionais</h5>
                    <p className="text-gray-300 text-sm">Lembram preferências e configurações do usuário para personalização.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Cookies de Marketing</h5>
                    <p className="text-gray-300 text-sm">Utilizados para exibir anúncios relevantes e medir eficácia de campanhas.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-4">Finalidades de Uso</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Manter sessões de usuário ativas</li>
                  <li>Lembrar preferências de idioma e tema</li>
                  <li>Analisar padrões de tráfego e uso</li>
                  <li>Melhorar performance e velocidade</li>
                  <li>Personalizar conteúdo e experiência</li>
                  <li>Detectar e prevenir fraudes</li>
                  <li>Medir eficácia de campanhas de marketing</li>
                </ul>
              </div>
              
              <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-4">Gerenciamento de Cookies</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do site. 
                  A maioria dos navegadores permite gerenciar cookies através das configurações de privacidade.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-400"><strong>Chrome:</strong> Configurações {`>`} Privacidade e segurança {`>`} Cookies</p>
                  <p className="text-sm text-gray-400"><strong>Firefox:</strong> Configurações {`>`} Privacidade e segurança</p>
                  <p className="text-sm text-gray-400"><strong>Safari:</strong> Preferências {`>`} Privacidade</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h4 className="text-xl font-semibold text-white mb-4">Consentimento e Transparência</h4>
            <p className="text-gray-300 leading-relaxed">
              Solicitamos seu consentimento para cookies não essenciais e fornecemos informações claras sobre 
              quais dados coletamos e como os utilizamos. Você pode retirar seu consentimento a qualquer momento 
              através das configurações do site ou entrando em contato conosco.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "atendimento",
      title: "Política de Atendimento / Suporte",
      icon: Clock,
      content: (
        <div className="space-y-8">
          <p className="text-gray-300 leading-relaxed text-lg">
            Nossa política de atendimento define como oferecemos suporte aos nossos clientes, 
            garantindo respostas rápidas e soluções eficazes para suas necessidades.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-4 flex items-center">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Canais de Atendimento
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-white mb-2">WhatsApp Business</h5>
                    <p className="text-gray-300 text-sm">Atendimento comercial, suporte básico e urgências. Disponível 24/7 para emergências críticas.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Discord Especializado</h5>
                    <p className="text-gray-300 text-sm">Suporte técnico detalhado, comunidade de desenvolvedores e documentação interativa.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Email Corporativo</h5>
                    <p className="text-gray-300 text-sm">Questões formais, contratos, documentação oficial e relatórios detalhados.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Portal do Cliente</h5>
                    <p className="text-gray-300 text-sm">Acesso a projetos, tickets de suporte, documentação e recursos exclusivos.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-4 flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  Prazos de Resposta
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white">Emergências Críticas:</span>
                    <span className="text-[#0047ab] font-semibold">Até 2 horas</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Suporte Técnico:</span>
                    <span className="text-[#0047ab] font-semibold">Até 24 horas</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Dúvidas Comerciais:</span>
                    <span className="text-[#0047ab] font-semibold">Até 12 horas</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Questões Administrativas:</span>
                    <span className="text-[#0047ab] font-semibold">Até 48 horas</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-4">Níveis de Suporte</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-semibold text-green-400 mb-2">Suporte Gratuito (30 dias pós-entrega)</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Correção de bugs e falhas técnicas</li>
                      <li>• Esclarecimentos sobre funcionalidades</li>
                      <li>• Pequenos ajustes e otimizações</li>
                      <li>• Orientações de uso e configuração</li>
                      <li>• Suporte para deploy inicial</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-[#0047ab] pl-4">
                    <h5 className="font-semibold text-[#0047ab] mb-2">Suporte Premium (Pago)</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Novas funcionalidades e recursos</li>
                      <li>• Modificações significativas no sistema</li>
                      <li>• Suporte estendido além de 30 dias</li>
                      <li>• Consultoria especializada</li>
                      <li>• Prioridade no atendimento</li>
                      <li>• Suporte dedicado via chat privado</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-4">Horários de Atendimento</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-white mb-2">Horário Comercial</h5>
                    <p className="text-gray-300 text-sm">Segunda a Sexta: 8h às 18h (horário de Brasília)</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Suporte Estendido</h5>
                    <p className="text-gray-300 text-sm">Segunda a Sábado: 8h às 22h para clientes Premium</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Emergências</h5>
                    <p className="text-gray-300 text-sm">24/7 para sistemas críticos em produção</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h4 className="text-xl font-semibold text-white mb-4">Qualidade e Melhoria Contínua</h4>
            <p className="text-gray-300 leading-relaxed">
              Monitoramos constantemente a qualidade do nosso atendimento através de pesquisas de satisfação, 
              análise de tempos de resposta e feedback dos clientes. Nossa equipe passa por treinamentos regulares 
              para garantir excelência no suporte técnico e atendimento personalizado.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "cancelamento",
      title: "Política de Cancelamento de Serviços",
      icon: RotateCcw,
      content: (
        <div className="space-y-8">
          <p className="text-gray-300 leading-relaxed text-lg">
            Esta política estabelece as condições, prazos e procedimentos para cancelamento de serviços 
            contratados, garantindo transparência e fairness para ambas as partes.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-4">Condições Gerais para Cancelamento</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-3">
                  <li>Solicitação formal por escrito via email oficial ou Discord</li>
                  <li>Justificativa detalhada do motivo do cancelamento</li>
                  <li>Identificação clara do projeto ou serviço a ser cancelado</li>
                  <li>Confirmação de ciência sobre valores devidos</li>
                  <li>Definição do destino dos arquivos e códigos desenvolvidos</li>
                  <li>Acordo sobre transferência de propriedade intelectual</li>
                </ul>
              </div>
              
              <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-4">Prazos e Fases do Projeto</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-semibold text-green-400 mb-2">Antes do Início do Desenvolvimento</h5>
                    <p className="text-gray-300 text-sm">Cancelamento sem custos adicionais, com devolução integral dos valores pagos.</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h5 className="font-semibold text-yellow-400 mb-2">Durante o Desenvolvimento (0-50%)</h5>
                    <p className="text-gray-300 text-sm">Cobrança de 25% do valor total mais custos de trabalho já executado.</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h5 className="font-semibold text-orange-400 mb-2">Durante o Desenvolvimento (50-80%)</h5>
                    <p className="text-gray-300 text-sm">Cobrança de 50% do valor total mais custos de trabalho já executado.</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h5 className="font-semibold text-red-400 mb-2">Desenvolvimento Avançado (80%+)</h5>
                    <p className="text-gray-300 text-sm">Cobrança de 75% do valor total, com opção de entrega parcial.</p>
                  </div>
                  <div className="border-l-4 border-gray-500 pl-4">
                    <h5 className="font-semibold text-gray-400 mb-2">Após Entrega e Aprovação</h5>
                    <p className="text-gray-300 text-sm">Sem direito a cancelamento ou reembolso, sujeito apenas a políticas de garantia.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-4">Procedimentos de Cancelamento</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-white mb-2">1. Solicitação Formal</h5>
                    <p className="text-gray-300 text-sm">Envio de solicitação via email oficial com todas as informações necessárias.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">2. Análise e Avaliação</h5>
                    <p className="text-gray-300 text-sm">Nossa equipe avalia a solicitação e calcula valores devidos em até 48 horas.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">3. Proposta de Acordo</h5>
                    <p className="text-gray-300 text-sm">Apresentação de proposta detalhada com valores, prazos e condições.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">4. Finalização</h5>
                    <p className="text-gray-300 text-sm">Após acordo, processamento em até 5 dias úteis com entrega de materiais desenvolvidos.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-4">Casos Especiais</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-white mb-2">Cancelamento por Nossa Parte</h5>
                    <p className="text-gray-300 text-sm">Reembolso integral ou realocação para outro projeto, sem custos adicionais.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Problemas Técnicos Insuperáveis</h5>
                    <p className="text-gray-300 text-sm">Análise caso a caso com possibilidade de cancelamento sem penalidades.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Mudança de Escopo Significativa</h5>
                    <p className="text-gray-300 text-sm">Renegociação de contrato ou opção de cancelamento com condições especiais.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h4 className="text-xl font-semibold text-white mb-4">Proteção e Entrega de Materiais</h4>
            <p className="text-gray-300 leading-relaxed">
              Todos os códigos, documentações e materiais desenvolvidos até o momento do cancelamento serão entregues 
              ao cliente mediante quitação dos valores devidos. Garantimos a propriedade intelectual do trabalho 
              realizado e fornecemos documentação completa para facilitar eventual continuidade por terceiros.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "backup",
      title: "Política de Backup e Recuperação",
      icon: HardDrive,
      content: (
        <div className="space-y-8">
          <p className="text-gray-300 leading-relaxed text-lg">
            Nossa política de backup garante a proteção e recuperação de dados críticos dos clientes, 
            implementando múltiplas camadas de segurança e redundância.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-4 flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  Frequência de Backups
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-white mb-2">Códigos-fonte e Repositórios</h5>
                    <p className="text-gray-300 text-sm">Backup automático a cada commit/push, com sincronização instantânea em múltiplas plataformas (GitHub, GitLab, Bitbucket).</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Bancos de Dados</h5>
                    <p className="text-gray-300 text-sm">Backup incremental a cada 2 horas durante horário comercial e backup completo diário às 2h da manhã.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Arquivos e Mídias</h5>
                    <p className="text-gray-300 text-sm">Backup automático diário com sincronização em tempo real para arquivos críticos.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Configurações de Sistema</h5>
                    <p className="text-gray-300 text-sm">Backup semanal de configurações, variáveis de ambiente e scripts de deploy.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-4 flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Segurança e Criptografia
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-3">
                  <li>Criptografia AES-256 para todos os backups</li>
                  <li>Chaves de criptografia rotacionadas mensalmente</li>
                  <li>Autenticação multifator para acesso aos backups</li>
                  <li>Logs de auditoria para todas as operações</li>
                  <li>Testes de integridade automáticos semanais</li>
                  <li>Segregação de ambientes (produção, homologação, desenvolvimento)</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-4 flex items-center">
                  <Globe className="mr-2 h-5 w-5" />
                  Armazenamento Distribuído
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-white mb-2">Localizações Geográficas</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Primário: São Paulo, Brasil (AWS SA-East-1)</li>
                      <li>• Secundário: Norte da Virgínia, EUA (AWS US-East-1)</li>
                      <li>• Terciário: Frankfurt, Alemanha (AWS EU-Central-1)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Políticas de Retenção</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Backups diários: 30 dias</li>
                      <li>• Backups semanais: 12 semanas</li>
                      <li>• Backups mensais: 12 meses</li>
                      <li>• Backups anuais: 7 anos</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-4">Procedimentos de Recuperação</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-white mb-2">Tempo de Recuperação (RTO)</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Arquivos críticos: até 1 hora</li>
                      <li>• Bancos de dados: até 4 horas</li>
                      <li>• Sistema completo: até 24 horas</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Ponto de Recuperação (RPO)</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Dados críticos: máximo 2 horas de perda</li>
                      <li>• Dados gerais: máximo 24 horas de perda</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-semibold text-white mb-4">Testes e Validação</h4>
              <p className="text-gray-300 leading-relaxed">
                Realizamos testes mensais de recuperação de dados em ambiente isolado para validar a integridade 
                e velocidade dos backups. Todos os testes são documentados e relatórios são compartilhados com clientes Premium.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-semibold text-white mb-4">Responsabilidades do Cliente</h4>
              <p className="text-gray-300 leading-relaxed">
                Clientes devem informar sobre dados sensíveis especiais, manter backups locais para dados críticos 
                e participar de testes de recuperação quando solicitado para validar a eficácia do processo.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "uso-aceitavel",
      title: "Política de Uso Aceitável",
      icon: AlertTriangle,
      content: (
        <div className="space-y-8">
          <p className="text-gray-300 leading-relaxed text-lg">
            Esta política estabelece as regras claras para o uso adequado dos nossos serviços, 
            protegendo todos os usuários e mantendo a integridade da plataforma.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-red-900/20 p-6 rounded-lg border border-red-500/30">
                <h4 className="text-xl font-semibold text-red-400 mb-4 flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  Usos Estritamente Proibidos
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-white mb-2">Conteúdo Ilegal</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Material com direitos autorais violados</li>
                      <li>• Conteúdo pornográfico ou sexual explícito</li>
                      <li>• Material que incentive violência ou discriminação</li>
                      <li>• Informações falsas ou fraudulentas</li>
                      <li>• Conteúdo relacionado a drogas ilegais</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Atividades Maliciosas</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Spam ou comunicações não solicitadas em massa</li>
                      <li>• Ataques DDoS ou tentativas de invasão</li>
                      <li>• Distribuição de malware, vírus ou códigos maliciosos</li>
                      <li>• Phishing ou tentativas de roubo de dados</li>
                      <li>• Mineração de criptomoedas sem autorização</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-4">Uso Responsável de Recursos</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-3">
                  <li>Não exceder limites de largura de banda estabelecidos</li>
                  <li>Evitar consumo excessivo de CPU ou memória</li>
                  <li>Não implementar loops infinitos ou processos descontrolados</li>
                  <li>Respeitar limites de armazenamento e transfer</li>
                  <li>Não criar múltiplas contas para contornar limitações</li>
                  <li>Usar APIs de forma responsável respeitando rate limits</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-4">Proteção de Dados e Privacidade</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-3">
                  <li>Não coletar dados pessoais sem consentimento explícito</li>
                  <li>Implementar medidas adequadas de proteção de dados</li>
                  <li>Respeitar direitos de privacidade de terceiros</li>
                  <li>Não compartilhar credenciais de acesso</li>
                  <li>Reportar vazamentos de dados imediatamente</li>
                  <li>Seguir regulamentações como LGPD e GDPR</li>
                </ul>
              </div>
              
              <div className="bg-yellow-900/20 p-6 rounded-lg border border-yellow-500/30">
                <h4 className="text-xl font-semibold text-yellow-400 mb-4 flex items-center">
                  <Scale className="mr-2 h-5 w-5" />
                  Consequências e Penalidades
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-white mb-2">Infrações Leves</h5>
                    <p className="text-gray-300 text-sm">Advertência formal e orientação sobre uso correto. Monitoramento aumentado por 30 dias.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Infrações Moderadas</h5>
                    <p className="text-gray-300 text-sm">Suspensão temporária do serviço por 7-30 dias. Revisão obrigatória antes da reativação.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Infrações Graves</h5>
                    <p className="text-gray-300 text-sm">Cancelamento imediato do contrato sem reembolso. Possíveis ações legais e reportes às autoridades.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-semibold text-white mb-4">Monitoramento e Detecção</h4>
              <p className="text-gray-300 leading-relaxed">
                Utilizamos sistemas automatizados para detectar atividades suspeitas, análise de padrões de tráfego 
                e monitoramento de recursos. Investigações são conduzidas de forma transparente e com direito de defesa.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-semibold text-white mb-4">Reportar Violações</h4>
              <p className="text-gray-300 leading-relaxed">
                Encorajamos usuários a reportar violações desta política através dos nossos canais oficiais. 
                Todas as denúncias são investigadas e a identidade do denunciante é protegida.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "atualizacao",
      title: "Política de Atualização e Manutenção",
      icon: Lightbulb,
      content: (
        <div className="space-y-8">
          <p className="text-gray-300 leading-relaxed text-lg">
            Nossa política de atualizações garante que os sistemas permaneçam seguros, eficientes e atualizados 
            com as melhores práticas tecnológicas do mercado.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-4 flex items-center">
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Tipos de Atualizações
                </h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h5 className="font-semibold text-red-400 mb-2">Críticas/Emergenciais</h5>
                    <p className="text-gray-300 text-sm">Correções de segurança aplicadas imediatamente, com notificação posterior. Podem causar breve indisponibilidade.</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h5 className="font-semibold text-yellow-400 mb-2">Funcionais</h5>
                    <p className="text-gray-300 text-sm">Melhorias e novas funcionalidades agendadas mensalmente, com aprovação prévia do cliente.</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-semibold text-green-400 mb-2">Preventivas</h5>
                    <p className="text-gray-300 text-sm">Manutenção regular e otimizações realizadas semanalmente em horários de menor movimento.</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-semibold text-blue-400 mb-2">Dependências</h5>
                    <p className="text-gray-300 text-sm">Atualizações de bibliotecas e frameworks realizadas trimestralmente após testes rigorosos.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-4">Cronograma de Manutenções</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-white mb-2">Manutenções Programadas</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Toda segunda-feira às 2h (horário de Brasília)</li>
                      <li>• Duração típica: 30 minutos a 2 horas</li>
                      <li>• Primeiro domingo do mês: manutenção estendida</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Janelas de Manutenção</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Sistemas críticos: Domingo 00h às 06h</li>
                      <li>• Sistemas gerais: Segunda a quinta 02h às 05h</li>
                      <li>• Bancos de dados: Diariamente 01h às 03h</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-4 flex items-center">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Comunicação e Notificações
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-white mb-2">Antecedência de Aviso</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Manutenções programadas: 7 dias de antecedência</li>
                      <li>• Atualizações funcionais: 48 horas de antecedência</li>
                      <li>• Manutenções de emergência: notificação imediata</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Canais de Comunicação</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Email direto para contatos principais</li>
                      <li>• Status page com atualizações em tempo real</li>
                      <li>• Notificações via WhatsApp para urgências</li>
                      <li>• Discord para acompanhamento técnico</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-4">Testes e Validação</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-white mb-2">Ambiente de Testes</h5>
                    <p className="text-gray-300 text-sm">Todas as atualizações são testadas em ambiente idêntico à produção antes da implementação.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Rollback Automático</h5>
                    <p className="text-gray-300 text-sm">Sistema de reversão automática em caso de problemas detectados durante a atualização.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Monitoramento Pós-Atualização</h5>
                    <p className="text-gray-300 text-sm">Monitoramento intensivo por 24h após cada atualização para detectar possíveis problemas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-semibold text-white mb-4">Responsabilidades da Cheetah</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Atualizações de segurança e infraestrutura</li>
                <li>• Manutenção preventiva dos sistemas</li>
                <li>• Backup antes de atualizações críticas</li>
                <li>• Comunicação transparente sobre mudanças</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-semibold text-white mb-4">Responsabilidades do Cliente</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Aprovação de mudanças funcionais significativas</li>
                <li>• Teste de funcionalidades após atualizações</li>
                <li>• Feedback sobre problemas encontrados</li>
                <li>• Manutenção de dados e configurações locais</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-semibold text-white mb-4">SLA de Disponibilidade</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Uptime garantido: 99.5% mensal</li>
                <li>• Tempo máximo de manutenção: 4h mensais</li>
                <li>• Compensação por indisponibilidade excessiva</li>
                <li>• Relatórios mensais de disponibilidade</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "propriedade",
      title: "Política de Propriedade Intelectual",
      icon: FileText,
      content: (
        <div className="space-y-8">
          <p className="text-gray-300 leading-relaxed text-lg">
            Esta política esclarece os direitos e responsabilidades relacionados à propriedade intelectual 
            de códigos, conteúdos e soluções desenvolvidas pela Cheetah Network.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-green-900/20 p-6 rounded-lg border border-green-500/30">
                <h4 className="text-xl font-semibold text-green-400 mb-4 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Direitos do Cliente
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-white mb-2">Código Personalizado</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Propriedade total do código desenvolvido especificamente</li>
                      <li>• Direitos de modificação e distribuição</li>
                      <li>• Código-fonte completo e documentação</li>
                      <li>• Licença perpétua de uso comercial</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Dados e Conteúdos</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Propriedade de todos os dados inseridos</li>
                      <li>• Conteúdos, imagens e textos fornecidos</li>
                      <li>• Configurações e personalizações</li>
                      <li>• Relatórios e analytics gerados</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Transferência e Uso</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Direito de transferir para outros desenvolvedores</li>
                      <li>• Uso em múltiplos ambientes (dev, test, prod)</li>
                      <li>• Criação de backups e cópias de segurança</li>
                      <li>• Hospedagem em provedores de sua escolha</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-4 flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Direitos da Cheetah Network
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-white mb-2">Propriedade Intelectual</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Frameworks e bibliotecas proprietárias</li>
                      <li>• Metodologias e processos internos</li>
                      <li>• Templates e componentes reutilizáveis</li>
                      <li>• Algoritmos e lógicas genéricas</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Direitos de Portfólio</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Uso em portfólio com autorização prévia</li>
                      <li>• Screenshots e descrições técnicas</li>
                      <li>• Case studies anonimizados</li>
                      <li>• Demonstrações de capacidade técnica</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Know-how e Experiência</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Experiência adquirida durante o projeto</li>
                      <li>• Técnicas e soluções desenvolvidas</li>
                      <li>• Melhorias de processo implementadas</li>
                      <li>• Aprendizados e inovações técnicas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-yellow-900/20 p-6 rounded-lg border border-yellow-500/30">
              <h4 className="text-xl font-semibold text-yellow-400 mb-4 flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Limitações e Restrições
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-white mb-2">Uso Comercial</h5>
                  <p className="text-gray-300 text-sm">
                    Cliente não pode revender, redistribuir ou licenciar o código para terceiros sem autorização expressa por escrito.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-2">Escopo de Negócio</h5>
                  <p className="text-gray-300 text-sm">
                    Uso comercial restrito ao negócio original do contratante. Expansões significativas requerem nova licença.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-2">Engenharia Reversa</h5>
                  <p className="text-gray-300 text-sm">
                    Proibida a engenharia reversa de componentes proprietários para criação de produtos concorrentes.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
              <h4 className="text-xl font-semibold text-[#0047ab] mb-4">Licenças de Terceiros</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-white mb-2">Open Source</h5>
                  <p className="text-gray-300 text-sm">
                    Bibliotecas e frameworks open source mantêm suas licenças originais (MIT, Apache, GPL, etc.).
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-2">APIs e Serviços</h5>
                  <p className="text-gray-300 text-sm">
                    Integrações com APIs externas sujeitas aos termos dos respectivos provedores.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-2">Recursos Premium</h5>
                  <p className="text-gray-300 text-sm">
                    Componentes premium de terceiros podem requerer licenças adicionais por parte do cliente.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h4 className="text-xl font-semibold text-white mb-4">Resolução de Conflitos</h4>
            <p className="text-gray-300 leading-relaxed">
              Em caso de disputas sobre propriedade intelectual, priorizamos a resolução amigável através de mediação. 
              Todos os projetos incluem documentação clara sobre componentes proprietários vs. personalizados. 
              Mantemos registros detalhados de desenvolvimento para esclarecer origens de código e propriedade.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "responsabilidade",
      title: "Política de Responsabilidade",
      icon: Scale,
      content: (
        <div className="space-y-8">
          <p className="text-gray-300 leading-relaxed text-lg">
            Esta política define claramente os limites de responsabilidade da Cheetah Network, 
            garantindo transparência sobre nossas obrigações e limitações.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-4 flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Garantias Oferecidas
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-white mb-2">Garantia de Funcionamento</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• 30 dias de garantia pós-entrega para correção de bugs</li>
                      <li>• Funcionamento conforme especificações acordadas</li>
                      <li>• Compatibilidade com navegadores modernos</li>
                      <li>• Performance dentro dos parâmetros estabelecidos</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Garantia de Qualidade</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Código limpo e bem documentado</li>
                      <li>• Seguimento de melhores práticas de desenvolvimento</li>
                      <li>• Testes básicos de funcionalidade incluídos</li>
                      <li>• Estrutura escalável e manutenível</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Disponibilidade</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• SLA de 99% para sistemas hospedados por nós</li>
                      <li>• Monitoramento 24/7 para serviços críticos</li>
                      <li>• Backup automático e recuperação de dados</li>
                      <li>• Suporte técnico dentro dos prazos estabelecidos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-red-900/20 p-6 rounded-lg border border-red-500/30">
                <h4 className="text-xl font-semibold text-red-400 mb-4 flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  Limitações de Responsabilidade
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-white mb-2">Limites Financeiros</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Responsabilidade limitada ao valor pago pelo serviço</li>
                      <li>• Máximo de 100% do valor do contrato por projeto</li>
                      <li>• Exclusão de danos indiretos ou consequenciais</li>
                      <li>• Não responsabilidade por lucros cessantes</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Ações de Terceiros</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Falhas em serviços de terceiros (APIs, hospedagem)</li>
                      <li>• Ataques cibernéticos externos</li>
                      <li>• Decisões de plataformas (Google, Apple, Facebook)</li>
                      <li>• Mudanças em regulamentações governamentais</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Força Maior</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Desastres naturais e catástrofes</li>
                      <li>• Guerras, conflitos e instabilidade política</li>
                      <li>• Pandemias e crises de saúde pública</li>
                      <li>• Falhas generalizadas de infraestrutura</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <ExternalLink className="mr-2 h-5 w-5" />
                Exclusões de Responsabilidade
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-white mb-2">Uso Inadequado</h5>
                  <p className="text-gray-300 text-sm">
                    Não nos responsabilizamos por problemas decorrentes de uso inadequado, 
                    modificações não autorizadas ou violação das políticas de uso.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-2">Decisões Comerciais</h5>
                  <p className="text-gray-300 text-sm">
                    Resultados de negócio dependem de múltiplos fatores externos. 
                    Não garantimos resultados comerciais específicos.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-2">Infraestrutura Externa</h5>
                  <p className="text-gray-300 text-sm">
                    Problemas em serviços de hospedagem, CDNs, APIs de terceiros 
                    ou outros provedores externos estão fora do nosso controle.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
              <h4 className="text-xl font-semibold text-[#0047ab] mb-4">Procedimentos para Reclamações</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-white mb-2">Prazo para Reclamação</h5>
                  <p className="text-gray-300 text-sm">
                    Reclamações devem ser feitas em até 30 dias após a identificação do problema, 
                    com documentação detalhada do ocorrido.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-2">Processo de Análise</h5>
                  <p className="text-gray-300 text-sm">
                    Todas as reclamações são analisadas tecnicamente em até 72 horas, 
                    com proposta de solução ou esclarecimento da responsabilidade.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-2">Resolução</h5>
                  <p className="text-gray-300 text-sm">
                    Priorizamos soluções técnicas antes de discussões financeiras. 
                    Mediação externa pode ser sugerida para casos complexos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h4 className="text-xl font-semibold text-white mb-4">Seguro e Proteção</h4>
            <p className="text-gray-300 leading-relaxed">
              Mantemos seguro de responsabilidade profissional para cobrir eventuais danos causados por nossa negligência. 
              Também adotamos políticas rigorosas de backup, controle de qualidade e testes para minimizar riscos. 
              Nossa equipe é regularmente treinada em melhores práticas para garantir máxima qualidade e segurança.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "reembolso",
      title: "Política de Reembolso",
      icon: CreditCard,
      content: (
        <div className="space-y-8">
          <p className="text-gray-300 leading-relaxed text-lg">
            Nossa política de reembolso é transparente e justa, estabelecendo condições claras 
            para diferentes situações que podem ocorrer durante o desenvolvimento de projetos.
          </p>
          
          <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20 mb-8">
            <h4 className="text-xl font-semibold text-[#0047ab] mb-4 flex items-center">
              <Eye className="mr-2 h-5 w-5" />
              Resumo Simples da Política
            </h4>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h5 className="font-semibold text-white mb-3">Em palavras simples:</h5>
              <div className="space-y-2 text-gray-300">
                <p>✅ <strong>Antes de começar:</strong> Devolvemos 100% se cancelar antes do desenvolvimento iniciar</p>
                <p>⚠️ <strong>Durante desenvolvimento:</strong> Reembolso parcial baseado no trabalho não executado</p>
                <p>❌ <strong>Projeto entregue e aprovado:</strong> Sem reembolso (apenas garantia de correção de bugs)</p>
                <p>🛡️ <strong>Problemas por nossa culpa:</strong> Sempre assumimos responsabilidade e oferecemos reembolso</p>
                <p>⏰ <strong>Prazo:</strong> Você tem 7 dias para solicitar reembolso após qualquer problema</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-green-900/20 p-6 rounded-lg border border-green-500/30">
                <h4 className="text-xl font-semibold text-green-400 mb-4 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Condições para Reembolso Total
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-white mb-2">Cancelamento Pré-Desenvolvimento</h5>
                    <p className="text-gray-300 text-sm">
                      Se o projeto for cancelado antes do início efetivo do desenvolvimento, 
                      garantimos reembolso de 100% dos valores pagos.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Falhas da Nossa Parte</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Não entrega conforme especificações acordadas</li>
                      <li>• Falhas críticas não corrigidas em 30 dias</li>
                      <li>• Cancelamento justificado por nossa incapacidade técnica</li>
                      <li>• Violação grave dos prazos acordados sem justificativa</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Problemas Técnicos Insuperáveis</h5>
                    <p className="text-gray-300 text-sm">
                      Quando impossibilidades técnicas genuínas impedem a conclusão do projeto, 
                      após tentativas documentadas de solução.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                <h4 className="text-xl font-semibold text-[#0047ab] mb-4">Situações de Desenvolvimento</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-semibold text-green-400 mb-2">Fase de Planejamento (0-10%)</h5>
                    <p className="text-gray-300 text-sm">Reembolso de 90% dos valores pagos, descontando apenas custos de análise inicial.</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h5 className="font-semibold text-yellow-400 mb-2">Desenvolvimento Inicial (10-30%)</h5>
                    <p className="text-gray-300 text-sm">Reembolso de 70% dos valores pagos, considerando trabalho de setup e estruturação.</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h5 className="font-semibold text-orange-400 mb-2">Desenvolvimento Médio (30-70%)</h5>
                    <p className="text-gray-300 text-sm">Reembolso proporcional ao trabalho não executado, mínimo de 30% do valor total.</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h5 className="font-semibold text-red-400 mb-2">Desenvolvimento Avançado (70%+)</h5>
                    <p className="text-gray-300 text-sm">Entrega do trabalho realizado + reembolso de 10-20% dependendo da situação.</p>
                  </div>
                  <div className="border-l-4 border-gray-500 pl-4">
                    <h5 className="font-semibold text-gray-400 mb-2">Pós-Entrega Aprovada</h5>
                    <p className="text-gray-300 text-sm">Sem direito a reembolso, mas garantia de 30 dias para correção de bugs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-yellow-900/20 p-6 rounded-lg border border-yellow-500/30">
              <h4 className="text-xl font-semibold text-yellow-400 mb-4 flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                Prazos e Procedimentos
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-white mb-2">Prazo para Solicitação</h5>
                  <p className="text-gray-300 text-sm">
                    Solicitações de reembolso devem ser feitas por escrito em até 7 dias 
                    após o evento que motivou a solicitação.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-2">Análise da Solicitação</h5>
                  <p className="text-gray-300 text-sm">
                    Nossa equipe analisa cada caso em até 72 horas, considerando 
                    todo o histórico do projeto e documentação disponível.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-2">Processamento</h5>
                  <p className="text-gray-300 text-sm">
                    Reembolsos aprovados são processados em até 30 dias úteis, 
                    utilizando o mesmo método de pagamento original.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-2">Documentação Necessária</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Solicitação formal por escrito</li>
                    <li>• Justificativa detalhada com evidências</li>
                    <li>• Histórico de comunicações relevantes</li>
                    <li>• Comprovantes de pagamento originais</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-red-900/20 p-6 rounded-lg border border-red-500/30">
              <h4 className="text-xl font-semibold text-red-400 mb-4 flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Situações Sem Direito a Reembolso
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-white mb-2">Mudança de Requisitos</h5>
                  <p className="text-gray-300 text-sm">
                    Cancelamentos devido a mudanças nos requisitos ou necessidades 
                    do cliente após início do desenvolvimento.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-2">Problemas Externos</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Mudanças em APIs de terceiros</li>
                    <li>• Alterações em políticas de plataformas</li>
                    <li>• Problemas financeiros do cliente</li>
                    <li>• Decisões estratégicas do negócio</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-2">Projetos Entregues</h5>
                  <p className="text-gray-300 text-sm">
                    Projetos entregues conforme especificações e aprovados formalmente 
                    pelo cliente não são elegíveis para reembolso.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-2">Falta de Colaboração</h5>
                  <p className="text-gray-300 text-sm">
                    Quando o cliente não fornece informações necessárias ou 
                    feedback dentro dos prazos estabelecidos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h4 className="text-xl font-semibold text-white mb-4">Mediação e Resolução de Conflitos</h4>
            <p className="text-gray-300 leading-relaxed">
              Em casos de divergência sobre reembolsos, priorizamos sempre o diálogo e a busca por soluções 
              que beneficiem ambas as partes. Oferecemos mediação através de terceiros neutros quando necessário. 
              Nosso objetivo é manter relacionamentos transparentes e duradouros, sempre agindo com boa-fé e 
              priorizando a satisfação do cliente dentro dos limites comerciais viáveis.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-white">Políticas e </span>
              <span className="text-[#0047ab]">Termos</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Documentação completa sobre nossos termos, políticas e diretrizes. 
              Transparência e clareza em todos os aspectos dos nossos serviços.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 px-4 bg-[#0047ab]/5">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Navegação Rápida</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="bg-[#0047ab]/10 border border-[#0047ab]/20 rounded-lg p-4 text-center hover:border-[#0047ab]/50 transition-all duration-300 hover:scale-105 group"
                >
                  <section.icon className="h-6 w-6 text-[#0047ab] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-white text-sm font-medium">{section.title}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto space-y-16">
            {sections.map((section, index) => (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <Card className="bg-black/50 border border-[#0047ab]/20 hover:border-[#0047ab]/40 transition-all duration-300">
                  <CardHeader className="pb-6">
                    <CardTitle className="flex items-center text-2xl md:text-3xl font-bold">
                      <section.icon className="h-8 w-8 text-[#0047ab] mr-4" />
                      <span className="text-white">{section.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    {section.content}
                  </CardContent>
                </Card>
                {index < sections.length - 1 && (
                  <Separator className="my-16 bg-[#0047ab]/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 px-4 bg-[#0047ab]/5 border-t border-[#0047ab]/20">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              Dúvidas sobre nossos <span className="text-[#0047ab]">Termos</span>?
            </h2>
            <p className="text-gray-300 mb-6">
              Nossa equipe está disponível para esclarecer qualquer questão sobre nossas políticas e termos de serviço
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#0047ab] hover:bg-[#0047ab]/80 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Falar no WhatsApp
              </a>
              <a
                href="mailto:contato@cheetahnetwork.com.br"
                className="inline-flex items-center justify-center border border-[#0047ab] text-[#0047ab] hover:bg-[#0047ab] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Enviar Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PoliticasTermos;