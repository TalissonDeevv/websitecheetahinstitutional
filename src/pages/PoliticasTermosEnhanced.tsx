import { useState } from "react";
import { Eye, Shield, FileText, CreditCard, Users, Clock, Code, AlertTriangle, RotateCcw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticasTermosEnhanced = () => {
  const [selectedPolicy, setSelectedPolicy] = useState("geral");

  const policies = [
    { id: "geral", name: "Visão Geral", icon: Eye },
    { id: "atendimento", name: "Política de Atendimento", icon: Users },
    { id: "cancelamento", name: "Política de Cancelamento", icon: Clock },
    { id: "backup", name: "Política de Backup", icon: Shield },
    { id: "seguranca", name: "Política de Segurança", icon: Shield },
    { id: "uso", name: "Política de Uso Aceitável", icon: AlertTriangle },
    { id: "atualizacao", name: "Política de Atualização", icon: RotateCcw },
    { id: "propriedade", name: "Propriedade Intelectual", icon: Code },
    { id: "responsabilidade", name: "Política de Responsabilidade", icon: FileText },
    { id: "reembolso", name: "Política de Reembolso", icon: CreditCard },
  ];

  const renderPolicyContent = () => {
    switch (selectedPolicy) {
      case "geral":
        return (
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#0047ab] mb-4">Termos de Uso – Cheetah Solutions Network LTDA</h2>
              <p className="text-sm text-gray-400 mb-6">Última atualização: 15 de agosto de 2025</p>
              
              <div className="space-y-6 text-white/80">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">1. Aceitação dos Termos</h3>
                  <div className="space-y-2">
                    <p>1.1 Ao acessar, utilizar ou contratar quaisquer serviços oferecidos pela Cheetah Solutions Network LTDA ("Cheetah Solutions Network", "nós", "nosso" ou "empresa"), o usuário declara que leu, entendeu e concorda integralmente com as disposições aqui estabelecidas.</p>
                    <p>1.2 Estes Termos aplicam-se a todos os visitantes, clientes e usuários de nossos serviços, incluindo, mas não se limitando a, plataformas digitais, bots para Discord, websites desenvolvidos, consultorias técnicas e qualquer outro produto ou serviço oferecido.</p>
                    <p>1.3 Caso não concorde com alguma cláusula, o usuário deverá abster-se imediatamente de utilizar nossos serviços.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">2. Objeto</h3>
                  <div className="space-y-2">
                    <p>2.1 Este documento regula a prestação de serviços digitais, englobando, mas não se limitando a:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Desenvolvimento e programação de bots para Discord.</li>
                      <li>Criação, manutenção e hospedagem de websites e sistemas online.</li>
                      <li>Produção de identidade visual e design gráfico.</li>
                      <li>Consultoria técnica e suporte especializado.</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">3. Uso Permitido</h3>
                  <div className="space-y-2">
                    <p>3.1 O usuário compromete-se a utilizar os serviços exclusivamente para fins lícitos e de acordo com a legislação brasileira vigente, bem como com as normas internacionais aplicáveis.</p>
                    <p>3.2 É expressamente proibido:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Utilizar os serviços para práticas ilegais ou que violem direitos de terceiros.</li>
                      <li>Publicar, transmitir ou armazenar conteúdo ofensivo, difamatório, discriminatório, pornográfico ou que viole direitos de imagem.</li>
                      <li>Distribuir vírus, malware, ransomware ou qualquer outro código nocivo.</li>
                      <li>Copiar, modificar, reproduzir, criar trabalhos derivados ou explorar comercialmente qualquer parte dos serviços sem autorização expressa por escrito da empresa.</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">4. Propriedade Intelectual</h3>
                  <div className="space-y-2">
                    <p>4.1 Todos os materiais, códigos, layouts, marcas, logotipos, conteúdos e demais elementos produzidos ou disponibilizados pela Cheetah Solutions Network são protegidos por leis nacionais e internacionais de direitos autorais e de propriedade industrial.</p>
                    <p>4.2 Qualquer uso não autorizado poderá resultar em medidas judiciais, incluindo ações cíveis e criminais, além da obrigação de indenizar por perdas e danos.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">5. Contratação e Pagamentos</h3>
                  <div className="space-y-2">
                    <p>5.1 A contratação será formalizada por meio de proposta comercial, contrato ou confirmação escrita por canais oficiais.</p>
                    <p>5.2 O cliente compromete-se a efetuar o pagamento nos prazos e valores acordados.</p>
                    <p>5.3 O não pagamento autoriza a suspensão imediata dos serviços, sem prejuízo da cobrança judicial dos valores devidos.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">6. Cancelamento e Reembolso</h3>
                  <div className="space-y-2">
                    <p>6.1 Cancelamentos deverão ser solicitados por escrito.</p>
                    <p>6.2 Reembolsos serão analisados individualmente, considerando o estágio de execução do serviço.</p>
                    <p>6.3 Em caso de cancelamento imotivado pelo cliente após o início da execução, a empresa reserva-se o direito de reter os valores já pagos.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">7. Garantias e Responsabilidades</h3>
                  <div className="space-y-2">
                    <p>7.1 A Cheetah Solutions Network não garante que os serviços serão ininterruptos, livres de erros ou totalmente seguros contra ameaças cibernéticas.</p>
                    <p>7.2 Não nos responsabilizamos por perdas de dados, lucros cessantes ou qualquer dano decorrente de uso inadequado ou falha de terceiros.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">8. Modificações</h3>
                  <div className="space-y-2">
                    <p>8.1 A empresa poderá alterar estes Termos a qualquer momento, publicando a nova versão em seus canais oficiais.</p>
                    <p>8.2 O uso contínuo dos serviços após as alterações constitui aceitação tácita das novas condições.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">9. Foro</h3>
                  <p>9.1 As partes elegem o foro da comarca de São Paulo/SP, com renúncia a qualquer outro, para resolver quaisquer litígios decorrentes destes Termos.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0047ab] mb-4">Política de Privacidade – Cheetah Solutions Network LTDA</h2>
              <p className="text-sm text-gray-400 mb-6">Última atualização: 15 de agosto de 2025</p>
              
              <div className="space-y-6 text-white/80">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">1. Introdução</h3>
                  <p>1.1 A Cheetah Solutions Network LTDA valoriza e respeita a privacidade dos seus usuários, clientes e visitantes, comprometendo-se com a proteção dos dados pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">2. Dados Coletados</h3>
                  <p>2.1 Coletamos:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Informações pessoais: nome, e-mail, telefone, CPF/CNPJ.</li>
                    <li>Dados de pagamento: informações de cartão, comprovantes de transferência, etc.</li>
                    <li>Dados técnicos: endereço IP, tipo de navegador, sistema operacional, dispositivo utilizado.</li>
                    <li>Registros de interações: mensagens, solicitações de suporte, histórico de uso.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">3. Finalidade do Tratamento</h3>
                  <p>3.1 Utilizamos os dados para:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Executar e gerenciar contratos e serviços.</li>
                    <li>Processar pagamentos.</li>
                    <li>Enviar comunicações e atualizações importantes.</li>
                    <li>Cumprir obrigações legais e regulatórias.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">4. Compartilhamento de Dados</h3>
                  <div className="space-y-2">
                    <p>4.1 Os dados poderão ser compartilhados com:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Prestadores de serviço terceirizados estritamente necessários à execução do contrato.</li>
                      <li>Autoridades judiciais ou administrativas, mediante requisição legal.</li>
                    </ul>
                    <p>4.2 Não vendemos nem alugamos dados pessoais a terceiros.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">5. Segurança da Informação</h3>
                  <p>5.1 Adotamos medidas técnicas e organizacionais adequadas para proteger os dados contra acesso não autorizado, destruição, perda, alteração ou divulgação indevida.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">6. Direitos do Titular</h3>
                  <p>6.1 O titular pode solicitar:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Confirmação da existência de tratamento de seus dados.</li>
                    <li>Acesso aos dados.</li>
                    <li>Correção de informações incorretas ou desatualizadas.</li>
                    <li>Exclusão dos dados, salvo quando houver obrigação legal de mantê-los.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">7. Retenção de Dados</h3>
                  <p>7.1 Os dados serão retidos pelo período necessário para cumprimento das finalidades, obrigações legais ou exercício de direitos da empresa.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">8. Alterações</h3>
                  <p>8.1 Esta política poderá ser atualizada periodicamente, sendo a nova versão publicada em nossos canais oficiais.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0047ab] mb-4">Política de Cookies – Cheetah Solutions Network LTDA</h2>
              <p className="text-sm text-gray-400 mb-6">Última atualização: 15 de agosto de 2025</p>
              
              <div className="space-y-6 text-white/80">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">1. Definição</h3>
                  <p>1.1 Cookies são pequenos arquivos de texto enviados ao dispositivo do usuário para melhorar a experiência de navegação e fornecer funcionalidades adicionais.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">2. Tipos de Cookies Utilizados</h3>
                  <p>2.1 Utilizamos:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="bg-[#0047ab]/10 p-4 rounded-lg border border-[#0047ab]/20">
                      <h5 className="font-semibold text-white mb-2">Cookies Essenciais</h5>
                      <p className="text-gray-300 text-sm">Necessários para funcionamento básico do site.</p>
                    </div>
                    <div className="bg-[#0047ab]/10 p-4 rounded-lg border border-[#0047ab]/20">
                      <h5 className="font-semibold text-white mb-2">Cookies Analíticos</h5>
                      <p className="text-gray-300 text-sm">Coletam dados de navegação para otimização.</p>
                    </div>
                    <div className="bg-[#0047ab]/10 p-4 rounded-lg border border-[#0047ab]/20">
                      <h5 className="font-semibold text-white mb-2">Cookies Funcionais</h5>
                      <p className="text-gray-300 text-sm">Armazenam preferências do usuário.</p>
                    </div>
                    <div className="bg-[#0047ab]/10 p-4 rounded-lg border border-[#0047ab]/20">
                      <h5 className="font-semibold text-white mb-2">Cookies de Publicidade</h5>
                      <p className="text-gray-300 text-sm">Usados para exibir anúncios relevantes (quando aplicável).</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">3. Gerenciamento de Cookies</h3>
                  <p>3.1 O usuário pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade dos serviços.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">4. Alterações</h3>
                  <p>4.1 Esta política pode ser atualizada a qualquer momento.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0047ab] mb-4">Isenção de Responsabilidade – Cheetah Solutions Network LTDA</h2>
              <p className="text-sm text-gray-400 mb-6">Última atualização: 15 de agosto de 2025</p>
              
              <div className="space-y-6 text-white/80">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">1. Natureza das Informações</h3>
                  <p>1.1 Os serviços e informações fornecidos pela Cheetah Solutions Network LTDA são disponibilizados "como estão" e "conforme disponíveis", sem garantias expressas ou implícitas.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">2. Uso Indevido</h3>
                  <p>2.1 Não nos responsabilizamos por danos diretos ou indiretos decorrentes de:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Uso inadequado dos serviços.</li>
                    <li>Conteúdo publicado por terceiros.</li>
                    <li>Falhas de segurança decorrentes de má utilização pelo cliente.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">3. Links Externos</h3>
                  <p>3.1 Nossos serviços podem conter links para sites de terceiros, sobre os quais não temos controle. Não nos responsabilizamos por seu conteúdo ou políticas.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">4. Limitação de Garantia</h3>
                  <p>4.1 Não garantimos que nossos serviços funcionarão sem interrupções ou erros, ou que estarão livres de ameaças cibernéticas.</p>
                </div>
              </div>
            </section>
          </div>
        );

      case "atendimento":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#0047ab] mb-4">Política de Atendimento e Suporte</h2>
            <div className="space-y-6 text-white/80">
              <section>
                <h3 className="text-lg font-semibold text-white mb-3">1. Canais de Atendimento</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Email: suporte@cheetahcode.com.br</li>
                  <li>WhatsApp: +55 (11) 99999-9999</li>
                  <li>Formulário de contato no site</li>
                  <li>Sistema de tickets interno</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">2. Horários de Funcionamento</h3>
                <div className="bg-[#0047ab]/10 p-4 rounded-lg border border-[#0047ab]/20">
                  <p><strong>Segunda a Sexta:</strong> 09:00 às 18:00</p>
                  <p><strong>Sábados:</strong> 09:00 às 13:00</p>
                  <p><strong>Domingos e Feriados:</strong> Apenas emergências críticas</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">3. Tempos de Resposta</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                    <h4 className="font-semibold text-green-400 mb-2">Crítico</h4>
                    <p className="text-sm">Até 2 horas</p>
                  </div>
                  <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/20">
                    <h4 className="font-semibold text-yellow-400 mb-2">Alto</h4>
                    <p className="text-sm">Até 8 horas</p>
                  </div>
                  <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                    <h4 className="font-semibold text-blue-400 mb-2">Normal</h4>
                    <p className="text-sm">Até 24 horas</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">4. Tipos de Suporte</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span><strong>Gratuito:</strong> Correção de bugs, esclarecimentos sobre funcionalidades</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span><strong>Pago:</strong> Novas funcionalidades, treinamentos personalizados</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        );

      case "cancelamento":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#0047ab] mb-4">Política de Cancelamento de Serviços</h2>
            <div className="space-y-6 text-white/80">
              <section>
                <h3 className="text-lg font-semibold text-white mb-3">1. Cancelamento Durante o Desenvolvimento</h3>
                <div className="space-y-3">
                  <p><strong>Até 25% do projeto:</strong> Reembolso de 75% do valor pago</p>
                  <p><strong>Entre 25% e 50%:</strong> Reembolso de 50% do valor pago</p>
                  <p><strong>Entre 50% e 75%:</strong> Reembolso de 25% do valor pago</p>
                  <p><strong>Acima de 75%:</strong> Sem direito a reembolso</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">2. Prazos para Cancelamento</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Solicitação deve ser feita por escrito</li>
                  <li>Prazo de 7 dias úteis para análise</li>
                  <li>Reembolso processado em até 30 dias</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">3. Condições Especiais</h3>
                <div className="bg-[#0047ab]/10 p-4 rounded-lg border border-[#0047ab]/20">
                  <p>Cancelamentos por justa causa (não cumprimento de prazos por nossa parte) garantem reembolso integral.</p>
                </div>
              </section>
            </div>
          </div>
        );

      case "backup":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#0047ab] mb-4">Política de Backup e Recuperação</h2>
            <div className="space-y-6 text-white/80">
              <section>
                <h3 className="text-lg font-semibold text-white mb-3">1. Frequência de Backups</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#0047ab]/10 p-4 rounded-lg border border-[#0047ab]/20">
                    <h4 className="font-semibold text-white mb-2">Diário</h4>
                    <p className="text-sm">Dados críticos e bancos de dados</p>
                  </div>
                  <div className="bg-[#0047ab]/10 p-4 rounded-lg border border-[#0047ab]/20">
                    <h4 className="font-semibold text-white mb-2">Semanal</h4>
                    <p className="text-sm">Arquivos de sistema e configurações</p>
                  </div>
                  <div className="bg-[#0047ab]/10 p-4 rounded-lg border border-[#0047ab]/20">
                    <h4 className="font-semibold text-white mb-2">Mensal</h4>
                    <p className="text-sm">Backup completo do sistema</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">2. Localização dos Backups</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Múltiplas localizações geográficas</li>
                  <li>Criptografia AES-256 para todos os backups</li>
                  <li>Redundância em diferentes provedores de nuvem</li>
                  <li>Testes de integridade regulares</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">3. Tempo de Recuperação</h3>
                <div className="space-y-3">
                  <p><strong>RTO (Recovery Time Objective):</strong> Até 4 horas para serviços críticos</p>
                  <p><strong>RPO (Recovery Point Objective):</strong> Perda máxima de 1 hora de dados</p>
                </div>
              </section>
            </div>
          </div>
        );

      case "seguranca":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#0047ab] mb-4">Política de Segurança da Informação</h2>
            <div className="space-y-6 text-white/80">
              <section>
                <h3 className="text-lg font-semibold text-white mb-3">1. Medidas de Proteção</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Criptografia end-to-end para todas as comunicações</li>
                  <li>Autenticação multifator obrigatória</li>
                  <li>Monitoramento 24/7 de atividades suspeitas</li>
                  <li>Auditorias de segurança trimestrais</li>
                  <li>Treinamento regular da equipe em segurança</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">2. Responsabilidades do Cliente</h3>
                <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/20">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Manter credenciais seguras e confidenciais</li>
                    <li>Reportar imediatamente atividades suspeitas</li>
                    <li>Manter software e sistemas atualizados</li>
                    <li>Seguir boas práticas de segurança recomendadas</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">3. Resposta a Incidentes</h3>
                <div className="space-y-3">
                  <p><strong>Detecção:</strong> Sistemas automatizados de detecção de ameaças</p>
                  <p><strong>Contenção:</strong> Isolamento imediato de sistemas comprometidos</p>
                  <p><strong>Recuperação:</strong> Restauração segura dos serviços</p>
                  <p><strong>Comunicação:</strong> Notificação imediata aos clientes afetados</p>
                </div>
              </section>
            </div>
          </div>
        );

      case "uso":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#0047ab] mb-4">Política de Uso Aceitável</h2>
            <div className="space-y-6 text-white/80">
              <section>
                <h3 className="text-lg font-semibold text-white mb-3">1. Usos Permitidos</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Atividades comerciais legítimas</li>
                  <li>Aplicações educacionais e acadêmicas</li>
                  <li>Projetos pessoais não comerciais</li>
                  <li>Desenvolvimento e testes de software</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">2. Usos Proibidos</h3>
                <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Conteúdo ilegal, difamatório ou prejudicial</li>
                    <li>Spam, phishing ou outras práticas fraudulentas</li>
                    <li>Violação de direitos autorais ou propriedade intelectual</li>
                    <li>Ataques a outros sistemas ou redes</li>
                    <li>Distribuição de malware ou vírus</li>
                    <li>Atividades que violem leis locais ou internacionais</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">3. Consequências</h3>
                <div className="space-y-3">
                  <p><strong>Primeira violação:</strong> Advertência formal por escrito</p>
                  <p><strong>Segunda violação:</strong> Suspensão temporária dos serviços</p>
                  <p><strong>Violações graves:</strong> Rescisão imediata do contrato</p>
                </div>
              </section>
            </div>
          </div>
        );

      case "atualizacao":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#0047ab] mb-4">Política de Atualização e Manutenção</h2>
            <div className="space-y-6 text-white/80">
              <section>
                <h3 className="text-lg font-semibold text-white mb-3">1. Tipos de Atualizações</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                    <h4 className="font-semibold text-green-400 mb-2">Segurança</h4>
                    <p className="text-sm">Aplicadas imediatamente</p>
                  </div>
                  <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                    <h4 className="font-semibold text-blue-400 mb-2">Funcionalidade</h4>
                    <p className="text-sm">Agendadas com 48h de antecedência</p>
                  </div>
                  <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/20">
                    <h4 className="font-semibold text-purple-400 mb-2">Infraestrutura</h4>
                    <p className="text-sm">Agendadas com 7 dias de antecedência</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">2. Janelas de Manutenção</h3>
                <div className="bg-[#0047ab]/10 p-4 rounded-lg border border-[#0047ab]/20">
                  <p><strong>Horário padrão:</strong> Domingos, 02:00 às 06:00 (horário de Brasília)</p>
                  <p><strong>Manutenções emergenciais:</strong> Podem ocorrer a qualquer momento</p>
                  <p><strong>Notificação:</strong> Enviada por email com pelo menos 48h de antecedência</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">3. Rollback</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Procedimento automático em caso de falhas críticas</li>
                  <li>Tempo máximo de 30 minutos para rollback</li>
                  <li>Comunicação imediata aos clientes afetados</li>
                </ul>
              </section>
            </div>
          </div>
        );

      case "propriedade":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#0047ab] mb-4">Política de Propriedade Intelectual</h2>
            <div className="space-y-6 text-white/80">
              <section>
                <h3 className="text-lg font-semibold text-white mb-3">1. Direitos do Cliente</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Código-fonte desenvolvido especificamente para o cliente</li>
                  <li>Designs e interfaces criados sob demanda</li>
                  <li>Documentação técnica personalizada</li>
                  <li>Bancos de dados e estruturas de dados específicas</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">2. Direitos da CheetahCode</h3>
                <div className="bg-[#0047ab]/10 p-4 rounded-lg border border-[#0047ab]/20">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Frameworks e bibliotecas proprietárias</li>
                    <li>Metodologias e processos de desenvolvimento</li>
                    <li>Templates e componentes reutilizáveis</li>
                    <li>Ferramentas internas de desenvolvimento</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">3. Licenças de Terceiros</h3>
                <div className="space-y-3">
                  <p><strong>Software Open Source:</strong> Respeitamos todas as licenças aplicáveis</p>
                  <p><strong>Bibliotecas Proprietárias:</strong> Cliente assume responsabilidade por licenciamento</p>
                  <p><strong>Assets e Mídia:</strong> Apenas conteúdo licenciado ou próprio do cliente</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">4. Transferência de Direitos</h3>
                <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                  <p>A transferência completa dos direitos ocorre mediante quitação integral do projeto.</p>
                </div>
              </section>
            </div>
          </div>
        );

      case "responsabilidade":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#0047ab] mb-4">Política de Responsabilidade</h2>
            <div className="space-y-6 text-white/80">
              <section>
                <h3 className="text-lg font-semibold text-white mb-3">1. Limitações de Responsabilidade</h3>
                <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/20">
                  <p>Nossa responsabilidade é limitada ao valor pago pelo serviço específico que causou o dano.</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">2. Exclusões</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Danos indiretos, incidentais ou consequenciais</li>
                  <li>Perda de receita ou oportunidades de negócio</li>
                  <li>Danos causados por terceiros</li>
                  <li>Falhas em serviços de terceiros integrados</li>
                  <li>Uso inadequado dos sistemas entregues</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">3. Garantias</h3>
                <div className="space-y-3">
                  <p><strong>Período:</strong> 90 dias após entrega para correção de bugs</p>
                  <p><strong>Escopo:</strong> Funcionalidades conforme especificação original</p>
                  <p><strong>Exclusões:</strong> Modificações realizadas pelo cliente ou terceiros</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">4. Seguro</h3>
                <div className="bg-[#0047ab]/10 p-4 rounded-lg border border-[#0047ab]/20">
                  <p>Mantemos seguro de responsabilidade civil profissional com cobertura de R$ 1.000.000,00.</p>
                </div>
              </section>
            </div>
          </div>
        );

      case "reembolso":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#0047ab] mb-4">Política de Reembolso</h2>
            <div className="space-y-6 text-white/80">
              <section>
                <h3 className="text-lg font-semibold text-white mb-3">1. Condições para Reembolso</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                    <h4 className="font-semibold text-green-400 mb-2">Reembolso Total</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Cancelamento em até 7 dias</li>
                      <li>• Não cumprimento de prazos (nossa responsabilidade)</li>
                      <li>• Não entrega conforme especificação</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/20">
                    <h4 className="font-semibold text-yellow-400 mb-2">Reembolso Parcial</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Cancelamento após início do desenvolvimento</li>
                      <li>• Mudança significativa no escopo</li>
                      <li>• Interrupção por motivos do cliente</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">2. Processo de Reembolso</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#0047ab] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-white">Solicitação</h4>
                      <p className="text-sm">Envie solicitação por escrito com justificativa</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#0047ab] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-white">Análise</h4>
                      <p className="text-sm">Avaliação da solicitação em até 7 dias úteis</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#0047ab] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-white">Processamento</h4>
                      <p className="text-sm">Reembolso processado em até 30 dias corridos</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">3. Resumo Simplificado</h3>
                <div className="bg-[#0047ab]/10 p-6 rounded-lg border border-[#0047ab]/20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#0047ab] mb-2">7 dias</div>
                      <div className="text-sm">Prazo para solicitar reembolso total</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#0047ab] mb-2">100%</div>
                      <div className="text-sm">Reembolso por falha nossa</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#0047ab] mb-2">30 dias</div>
                      <div className="text-sm">Prazo para processamento</div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-3">4. Casos Especiais</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span><strong>Sem reembolso:</strong> Projetos concluídos e aprovados pelo cliente</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span><strong>Análise especial:</strong> Casos de força maior ou circunstâncias extraordinárias</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span><strong>Garantia estendida:</strong> Disponível mediante contrato específico</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        );

      default:
        return <div>Selecione uma política para visualizar o conteúdo.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="bg-[#0047ab]/10 border border-[#0047ab]/30 rounded-full px-6 py-2 backdrop-blur-sm">
                <span className="text-[#0047ab] text-sm font-medium">Legal</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Políticas e <span className="text-[#0047ab]">Termos</span>
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Informações completas sobre nossos termos de serviço, políticas de privacidade e diretrizes operacionais
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-black/50 border border-[#0047ab]/20 sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Selecionar Política</h3>
                  
                  {/* Mobile Select */}
                  <div className="lg:hidden mb-4">
                    <Select value={selectedPolicy} onValueChange={setSelectedPolicy}>
                      <SelectTrigger className="w-full bg-black/50 border-[#0047ab]/30">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {policies.map((policy) => (
                          <SelectItem key={policy.id} value={policy.id}>
                            {policy.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Desktop Menu */}
                  <div className="hidden lg:block space-y-2">
                    {policies.map((policy) => {
                      const IconComponent = policy.icon;
                      return (
                        <button
                          key={policy.id}
                          onClick={() => setSelectedPolicy(policy.id)}
                          className={`w-full text-left p-3 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                            selectedPolicy === policy.id
                              ? 'bg-[#0047ab] text-white'
                              : 'text-white/70 hover:text-white hover:bg-[#0047ab]/10'
                          }`}
                        >
                          <IconComponent className="h-4 w-4 flex-shrink-0" />
                          <span className="text-sm">{policy.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <Card className="bg-black/50 border border-[#0047ab]/20">
                <CardContent className="p-8">
                  {renderPolicyContent()}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PoliticasTermosEnhanced;