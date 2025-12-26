import { MessageSquare, Clock, Phone, Mail, CheckCircle, AlertCircle, Users, Headphones, FileText, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const ServicePolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Headphones className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Política Corporativa</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Política de <span className="text-primary">Atendimento</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Nosso compromisso com a excelência no atendimento ao cliente, estabelecendo padrões claros 
              de comunicação, prazos e qualidade em todas as interações.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Última atualização: Dezembro de 2024 | Versão 2.0
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 1: Princípios do Atendimento */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">1. Princípios Fundamentais do Atendimento</h2>
            
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                A Cheetah Solutions Network fundamenta seu atendimento em princípios que garantem a satisfação 
                do cliente e a manutenção de relacionamentos comerciais duradouros e produtivos.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">1.1. Compromisso com a Qualidade</h3>
              <p className="text-muted-foreground leading-relaxed">
                Todos os colaboradores da Cheetah Solutions Network são treinados para oferecer atendimento 
                de alta qualidade, com foco na resolução efetiva de problemas e na comunicação clara e objetiva. 
                Nossa equipe passa por treinamentos contínuos para garantir atualização técnica e aprimoramento 
                das habilidades de atendimento.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">1.2. Respeito e Profissionalismo</h3>
              <p className="text-muted-foreground leading-relaxed">
                O tratamento respeitoso e profissional é obrigatório em todas as interações. Esperamos que 
                nossos clientes também mantenham conduta adequada durante o atendimento. Casos de desrespeito, 
                assédio ou comportamento inadequado serão documentados e podem resultar em suspensão do atendimento, 
                conforme previsto em nossa Política de Uso Aceitável.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">1.3. Transparência nas Informações</h3>
              <p className="text-muted-foreground leading-relaxed">
                Comprometemo-nos a fornecer informações precisas e completas sobre nossos serviços, prazos, 
                custos e limitações. Em caso de impossibilidade técnica ou limitação de escopo, o cliente 
                será informado de forma clara e antecipada, com apresentação de alternativas quando possível.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 2: Canais de Atendimento */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">2. Canais de Atendimento</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 rounded-lg p-2">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">E-mail</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">
                    Canal principal para solicitações formais, documentação de projetos e comunicações que 
                    necessitam de registro.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Suporte Geral:</strong> suporte@cheetahnetwork.com.br</li>
                    <li>• <strong>Comercial:</strong> comercial@cheetahnetwork.com.br</li>
                    <li>• <strong>Financeiro:</strong> financeiro@cheetahnetwork.com.br</li>
                    <li>• <strong>Jurídico:</strong> juridico@cheetahnetwork.com.br</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-500/10 rounded-lg p-2">
                      <Phone className="w-5 h-5 text-green-500" />
                    </div>
                    <h3 className="text-lg font-semibold">WhatsApp Business</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">
                    Canal para comunicação rápida, acompanhamento de projetos e suporte em tempo real 
                    durante horário comercial.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Número:</strong> +55 (XX) XXXXX-XXXX</li>
                    <li>• <strong>Horário:</strong> Segunda a Sexta, 9h às 18h</li>
                    <li>• <strong>Tempo médio de resposta:</strong> Até 2 horas</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-500/10 rounded-lg p-2">
                      <MessageSquare className="w-5 h-5 text-purple-500" />
                    </div>
                    <h3 className="text-lg font-semibold">Discord</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">
                    Comunidade oficial para clientes, com canais dedicados por tipo de serviço e 
                    suporte técnico especializado.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Acesso:</strong> Mediante convite para clientes ativos</li>
                    <li>• <strong>Canais:</strong> Suporte, Desenvolvimento, Comunidade</li>
                    <li>• <strong>Moderação:</strong> Equipe dedicada</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-orange-500/10 rounded-lg p-2">
                      <FileText className="w-5 h-5 text-orange-500" />
                    </div>
                    <h3 className="text-lg font-semibold">Sistema de Tickets</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">
                    Plataforma oficial para abertura e acompanhamento de chamados técnicos, com 
                    histórico completo e SLA definido.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Acesso:</strong> Portal do cliente</li>
                    <li>• <strong>Rastreamento:</strong> Número único por chamado</li>
                    <li>• <strong>Priorização:</strong> Automática por tipo e urgência</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 3: Tempos de Resposta */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">3. Tempos de Resposta (SLA)</h2>

            <div className="prose prose-invert max-w-none space-y-6 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                Os tempos de resposta abaixo são aplicáveis durante o horário comercial (segunda a sexta-feira, 
                das 9h às 18h, horário de Brasília), exceto feriados nacionais. Solicitações recebidas fora 
                deste horário serão processadas no próximo dia útil.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-semibold">Prioridade</th>
                    <th className="text-left py-4 px-4 font-semibold">Primeira Resposta</th>
                    <th className="text-left py-4 px-4 font-semibold">Resolução</th>
                    <th className="text-left py-4 px-4 font-semibold">Exemplos</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4">
                      <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-sm font-medium">Crítica</span>
                    </td>
                    <td className="py-4 px-4">Até 1 hora</td>
                    <td className="py-4 px-4">Até 4 horas</td>
                    <td className="py-4 px-4 text-sm">Sistema fora do ar, falha de segurança</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4">
                      <span className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-sm font-medium">Alta</span>
                    </td>
                    <td className="py-4 px-4">Até 4 horas</td>
                    <td className="py-4 px-4">Até 24 horas</td>
                    <td className="py-4 px-4 text-sm">Funcionalidade crítica com erro</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4">
                      <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-sm font-medium">Média</span>
                    </td>
                    <td className="py-4 px-4">Até 8 horas</td>
                    <td className="py-4 px-4">Até 72 horas</td>
                    <td className="py-4 px-4 text-sm">Bug não crítico, ajustes menores</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4">
                      <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-sm font-medium">Baixa</span>
                    </td>
                    <td className="py-4 px-4">Até 24 horas</td>
                    <td className="py-4 px-4">Até 5 dias úteis</td>
                    <td className="py-4 px-4 text-sm">Dúvidas, sugestões, melhorias</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-xl">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Observações sobre SLA</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Os tempos de resolução podem variar dependendo da complexidade técnica do problema</li>
                    <li>• Clientes com contratos de suporte premium possuem SLAs diferenciados</li>
                    <li>• O tempo de resolução é pausado quando aguardamos informações do cliente</li>
                    <li>• Relatórios de cumprimento de SLA estão disponíveis mediante solicitação</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 4: Processo de Atendimento */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">4. Processo de Atendimento</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Abertura do Chamado</h3>
                  <p className="text-muted-foreground">
                    O cliente registra sua solicitação através de um dos canais oficiais, fornecendo 
                    informações detalhadas sobre o problema ou necessidade. Um número de protocolo 
                    é gerado automaticamente para rastreamento.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Triagem e Classificação</h3>
                  <p className="text-muted-foreground">
                    Nossa equipe de suporte analisa a solicitação, classifica a prioridade e 
                    direciona para o especialista adequado. O cliente recebe confirmação do 
                    recebimento com prazo estimado de atendimento.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Análise e Diagnóstico</h3>
                  <p className="text-muted-foreground">
                    O especialista designado realiza análise detalhada do problema, podendo 
                    solicitar informações adicionais ao cliente quando necessário. O diagnóstico 
                    é documentado no sistema.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Resolução e Validação</h3>
                  <p className="text-muted-foreground">
                    A solução é implementada e o cliente é notificado para validação. O chamado 
                    só é encerrado após confirmação de que o problema foi resolvido satisfatoriamente.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Feedback e Melhoria Contínua</h3>
                  <p className="text-muted-foreground">
                    Após o encerramento, o cliente é convidado a avaliar o atendimento. 
                    Os feedbacks são analisados para identificação de oportunidades de melhoria 
                    em nossos processos.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 5: Escalação */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">5. Procedimento de Escalação</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Caso o cliente não esteja satisfeito com o atendimento recebido ou o problema não 
                seja resolvido dentro do SLA estabelecido, existe um processo formal de escalação:
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">5.1. Níveis de Escalação</h3>
              
              <div className="space-y-4">
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Nível 1 - Supervisão de Suporte</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Primeiro nível de escalação. Prazo de resposta: 4 horas úteis.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Nível 2 - Coordenação Técnica</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Problemas não resolvidos no Nível 1. Prazo de resposta: 8 horas úteis.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Nível 3 - Diretoria</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Casos excepcionais e reclamações formais. Prazo de resposta: 24 horas úteis.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">5.2. Como Solicitar Escalação</h3>
              <p className="text-muted-foreground leading-relaxed">
                Para solicitar escalação, o cliente deve enviar e-mail para escalacao@cheetahnetwork.com.br 
                informando o número do chamado original, descrição do problema e motivo da insatisfação. 
                A equipe de qualidade analisará o caso e providenciará o encaminhamento adequado.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 6: Direitos e Deveres */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">6. Direitos e Deveres</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Direitos do Cliente
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Receber atendimento respeitoso e profissional
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Ser informado sobre prazos e status das solicitações
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Solicitar escalação em caso de insatisfação
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Acessar histórico completo de atendimentos
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Receber comunicações claras e objetivas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Avaliar a qualidade do atendimento recebido
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Deveres do Cliente
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Fornecer informações precisas e completas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Manter conduta respeitosa durante o atendimento
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Responder solicitações de informações adicionais
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Validar soluções implementadas em tempo hábil
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Utilizar os canais oficiais de atendimento
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Manter dados de contato atualizados
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 7: Disposições Finais */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">7. Disposições Finais</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mb-4">7.1. Vigência</h3>
              <p className="text-muted-foreground leading-relaxed">
                Esta política entra em vigor na data de sua publicação e permanece válida por tempo 
                indeterminado, podendo ser atualizada a qualquer momento mediante comunicação prévia 
                aos clientes.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">7.2. Alterações</h3>
              <p className="text-muted-foreground leading-relaxed">
                A Cheetah Solutions Network reserva-se o direito de alterar esta política a qualquer 
                momento. Alterações significativas serão comunicadas com antecedência mínima de 15 dias 
                através dos canais oficiais de comunicação.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">7.3. Contato</h3>
              <p className="text-muted-foreground leading-relaxed">
                Para dúvidas sobre esta política, entre em contato através do e-mail 
                atendimento@cheetahnetwork.com.br ou através dos demais canais oficiais de atendimento.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePolicy;