import { XCircle, Clock, FileText, AlertTriangle, CheckCircle, Ban, RefreshCw, Database, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const CancellationPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <XCircle className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Política Corporativa</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Política de <span className="text-primary">Cancelamento</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Procedimentos, prazos e condições para cancelamento de serviços, garantindo transparência 
              e clareza sobre direitos e obrigações de ambas as partes.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Última atualização: Dezembro de 2024 | Versão 2.0
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 1: Disposições Gerais */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">1. Disposições Gerais</h2>
            
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Esta Política de Cancelamento estabelece os procedimentos, prazos e condições aplicáveis 
                ao encerramento de contratos de prestação de serviços entre a Cheetah Solutions Network 
                e seus clientes.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Aplicabilidade</h3>
              <p className="text-muted-foreground leading-relaxed">
                Esta política aplica-se a todos os contratos de prestação de serviços firmados com a 
                Cheetah Solutions Network, incluindo, mas não se limitando a: desenvolvimento de software, 
                manutenção de sistemas, hospedagem, suporte técnico e serviços de consultoria.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Definições</h3>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>Cancelamento:</strong> Encerramento definitivo do contrato de prestação de serviços.</li>
                <li><strong>Suspensão:</strong> Interrupção temporária dos serviços, com possibilidade de reativação.</li>
                <li><strong>Data de Efetivação:</strong> Data em que o cancelamento produz seus efeitos.</li>
                <li><strong>Aviso Prévio:</strong> Período de antecedência obrigatório para solicitação de cancelamento.</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 2: Tipos de Cancelamento */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">2. Tipos de Cancelamento</h2>

            <div className="space-y-6">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500/10 rounded-lg p-3">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Cancelamento por Conveniência</h3>
                      <p className="text-muted-foreground mb-4">
                        Qualquer das partes pode solicitar o cancelamento do contrato sem necessidade de 
                        justificativa, mediante cumprimento do aviso prévio estabelecido.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Aviso prévio: 30 dias</li>
                        <li>• Multa rescisória: Conforme contrato</li>
                        <li>• Reembolso: Proporcional aos serviços não prestados</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-500/10 rounded-lg p-3">
                      <Ban className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Cancelamento por Justa Causa</h3>
                      <p className="text-muted-foreground mb-4">
                        Cancelamento motivado por descumprimento contratual, violação de políticas ou 
                        inadimplência. Não requer aviso prévio.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Aviso prévio: Não aplicável</li>
                        <li>• Multa rescisória: Pode ser aplicada à parte infratora</li>
                        <li>• Reembolso: Sujeito a análise caso a caso</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-500/10 rounded-lg p-3">
                      <RefreshCw className="w-6 h-6 text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Cancelamento por Término Natural</h3>
                      <p className="text-muted-foreground mb-4">
                        Ocorre automaticamente ao final do período contratado, caso não haja renovação 
                        expressa ou automática prevista.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Aviso prévio: Não aplicável</li>
                        <li>• Multa rescisória: Não aplicável</li>
                        <li>• Comunicação: 15 dias antes do término</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 3: Procedimento de Cancelamento */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">3. Procedimento de Cancelamento</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mb-4">Solicitação Formal</h3>
              <p className="text-muted-foreground leading-relaxed">
                O cancelamento deve ser solicitado formalmente através de e-mail para 
                cancelamento@cheetahnetwork.com.br, contendo as seguintes informações:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Identificação completa do contratante (razão social/nome, CNPJ/CPF)</li>
                <li>• Número do contrato ou identificador do serviço</li>
                <li>• Data pretendida para efetivação do cancelamento</li>
                <li>• Motivo do cancelamento (opcional, mas recomendado)</li>
                <li>• Dados bancários para eventual reembolso</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Confirmação</h3>
              <p className="text-muted-foreground leading-relaxed">
                Após recebimento da solicitação, a Cheetah Solutions Network enviará confirmação em até 
                2 dias úteis, contendo o protocolo de cancelamento e as condições aplicáveis, incluindo 
                eventuais valores a pagar ou a receber.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Período de Transição</h3>
              <p className="text-muted-foreground leading-relaxed">
                Durante o período de aviso prévio, os serviços continuam sendo prestados normalmente. 
                O cliente deve providenciar a migração de dados e sistemas para outro provedor, se aplicável. 
                A Cheetah Solutions Network fornecerá suporte técnico para exportação de dados conforme 
                procedimentos estabelecidos.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 4: Prazos e Avisos */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">4. Prazos de Aviso Prévio</h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-semibold">Tipo de Serviço</th>
                    <th className="text-left py-4 px-4 font-semibold">Aviso Prévio</th>
                    <th className="text-left py-4 px-4 font-semibold">Observações</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4">Desenvolvimento de Software</td>
                    <td className="py-4 px-4">30 dias</td>
                    <td className="py-4 px-4 text-sm">Aplicável após entrega de marcos</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4">Manutenção e Suporte</td>
                    <td className="py-4 px-4">30 dias</td>
                    <td className="py-4 px-4 text-sm">Para contratos mensais</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4">Hospedagem e Cloud</td>
                    <td className="py-4 px-4">15 dias</td>
                    <td className="py-4 px-4 text-sm">Tempo para migração de dados</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4">Consultoria</td>
                    <td className="py-4 px-4">15 dias</td>
                    <td className="py-4 px-4 text-sm">Para projetos em andamento</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4">Bots e Automações</td>
                    <td className="py-4 px-4">7 dias</td>
                    <td className="py-4 px-4 text-sm">Para serviços recorrentes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Contagem de Prazos</h4>
                  <p className="text-sm text-muted-foreground">
                    Os prazos são contados em dias corridos, a partir da data de recebimento da 
                    solicitação formal. Caso o término do prazo caia em dia não útil, a efetivação 
                    ocorrerá no próximo dia útil.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 5: Retenção de Dados */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">5. Retenção e Exclusão de Dados</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mb-4">Exportação de Dados</h3>
              <p className="text-muted-foreground leading-relaxed">
                O cliente tem direito a solicitar exportação completa de seus dados antes da efetivação 
                do cancelamento. A exportação será disponibilizada em formato padrão de mercado (JSON, CSV, 
                SQL) em até 5 dias úteis após a solicitação.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Período de Retenção</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Database className="w-5 h-5 text-primary" />
                      <span className="font-semibold">Dados do Cliente</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Retidos por 30 dias após cancelamento para eventual recuperação
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="w-5 h-5 text-primary" />
                      <span className="font-semibold">Documentos Fiscais</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Retidos por 5 anos conforme legislação tributária
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">Exclusão Definitiva</h3>
              <p className="text-muted-foreground leading-relaxed">
                Após o período de retenção, todos os dados do cliente serão excluídos de forma permanente 
                e irrecuperável. Esta exclusão inclui backups, logs de acesso e quaisquer cópias secundárias. 
                O cliente será notificado antes da exclusão definitiva.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 6: Multas e Penalidades */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">6. Multas e Penalidades</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mb-4">Multa Rescisória</h3>
              <p className="text-muted-foreground leading-relaxed">
                Em caso de cancelamento antecipado sem justa causa, aplica-se multa rescisória conforme 
                estabelecido no contrato específico, geralmente correspondente a:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Contratos anuais: 20% do valor restante do contrato</li>
                <li>• Contratos semestrais: 15% do valor restante do contrato</li>
                <li>• Contratos trimestrais: 10% do valor restante do contrato</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Isenções</h3>
              <p className="text-muted-foreground leading-relaxed">
                A multa rescisória não será aplicada nos seguintes casos:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Descumprimento contratual comprovado por parte da Cheetah Solutions Network</li>
                <li>• Cancelamento nos primeiros 7 dias (direito de arrependimento)</li>
                <li>• Força maior ou caso fortuito devidamente comprovado</li>
                <li>• Acordo mútuo entre as partes</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Débitos Pendentes</h3>
              <p className="text-muted-foreground leading-relaxed">
                Eventuais débitos pendentes devem ser quitados para efetivação do cancelamento. 
                Débitos não quitados serão encaminhados para cobrança judicial após 90 dias.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 7: Após o Cancelamento */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">7. Após o Cancelamento</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mb-4">Obrigações do Cliente</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Realizar backup de todos os dados antes da data de efetivação</li>
                <li>• Remover integrações e acessos de sistemas terceiros</li>
                <li>• Devolver credenciais e acessos fornecidos</li>
                <li>• Quitar eventuais débitos pendentes</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">7.2. Obrigações da Cheetah Solutions Network</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Fornecer exportação de dados mediante solicitação</li>
                <li>• Emitir declaração de encerramento contratual</li>
                <li>• Processar eventuais reembolsos devidos</li>
                <li>• Revogar todos os acessos concedidos ao cliente</li>
                <li>• Excluir dados conforme política de retenção</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">7.3. Recontratação</h3>
              <p className="text-muted-foreground leading-relaxed">
                Clientes que cancelaram serviços podem recontratar a qualquer momento, sujeitos às 
                condições comerciais vigentes. Dados previamente excluídos não poderão ser recuperados.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Mail className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-4">Contato para Cancelamento</h3>
                    <p className="text-muted-foreground mb-4">
                      Para iniciar o processo de cancelamento ou esclarecer dúvidas sobre esta política:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li><strong>E-mail:</strong> cancelamento@cheetahnetwork.com.br</li>
                      <li><strong>WhatsApp:</strong> +55 (XX) XXXXX-XXXX</li>
                      <li><strong>Horário:</strong> Segunda a Sexta, 9h às 18h</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CancellationPolicy;