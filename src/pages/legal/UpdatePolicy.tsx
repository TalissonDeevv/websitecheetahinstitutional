import { RefreshCw, Clock, Bell, CheckCircle, AlertTriangle, Calendar, Server, FileText, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const UpdatePolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <RefreshCw className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Política Técnica</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Política de <span className="text-primary">Atualização</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Procedimentos para atualizações de sistemas, manutenções programadas, 
              comunicação prévia e garantia de continuidade dos serviços.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Última atualização: Dezembro de 2024 | Versão 2.0
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 1: Tipos de Atualização */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">1. Tipos de Atualização</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-500/10 rounded-lg p-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <h3 className="text-lg font-semibold">Atualizações de Segurança</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    Correções críticas de vulnerabilidades que podem comprometer a 
                    segurança dos sistemas e dados.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Prioridade: Crítica</li>
                    <li>• Aviso prévio: 24 horas (quando possível)</li>
                    <li>• Janela: Imediata em casos críticos</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-500/10 rounded-lg p-2">
                      <RefreshCw className="w-5 h-5 text-blue-500" />
                    </div>
                    <h3 className="text-lg font-semibold">Atualizações de Funcionalidade</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    Novas funcionalidades, melhorias de performance e otimizações 
                    que agregam valor ao produto.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Prioridade: Normal</li>
                    <li>• Aviso prévio: 7 dias</li>
                    <li>• Janela: Horário programado</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-orange-500/10 rounded-lg p-2">
                      <Server className="w-5 h-5 text-orange-500" />
                    </div>
                    <h3 className="text-lg font-semibold">Manutenção de Infraestrutura</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    Atualizações de servidores, rede, storage e outros componentes 
                    de infraestrutura.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Prioridade: Variável</li>
                    <li>• Aviso prévio: 14 dias</li>
                    <li>• Janela: Madrugada/final de semana</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-500/10 rounded-lg p-2">
                      <FileText className="w-5 h-5 text-purple-500" />
                    </div>
                    <h3 className="text-lg font-semibold">Atualizações de Política</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    Alterações em termos de uso, políticas de privacidade e 
                    outros documentos legais.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Prioridade: Normal</li>
                    <li>• Aviso prévio: 30 dias</li>
                    <li>• Vigência: Após período de aviso</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 2: Janelas de Manutenção */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">2. Janelas de Manutenção</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mb-4">Horários Padrão</h3>
              <p className="text-muted-foreground leading-relaxed">
                As manutenções programadas são realizadas preferencialmente em horários de 
                menor impacto:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold">Tipo</th>
                      <th className="text-left py-3 px-4 font-semibold">Dia</th>
                      <th className="text-left py-3 px-4 font-semibold">Horário</th>
                      <th className="text-left py-3 px-4 font-semibold">Duração Máx.</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Manutenção Regular</td>
                      <td className="py-3 px-4">Terças e Quintas</td>
                      <td className="py-3 px-4">02:00 - 06:00</td>
                      <td className="py-3 px-4">4 horas</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Manutenção Extensa</td>
                      <td className="py-3 px-4">Domingos</td>
                      <td className="py-3 px-4">00:00 - 06:00</td>
                      <td className="py-3 px-4">6 horas</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Emergencial</td>
                      <td className="py-3 px-4">Qualquer dia</td>
                      <td className="py-3 px-4">Qualquer horário</td>
                      <td className="py-3 px-4">Variável</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-muted-foreground">
                * Todos os horários são em horário de Brasília (BRT/BRST).
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Impacto nos Serviços</h3>
              <p className="text-muted-foreground leading-relaxed">
                Classificamos o impacto das manutenções da seguinte forma:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>Sem impacto:</strong> Atualizações em background, sem interrupção perceptível</li>
                <li><strong>Impacto mínimo:</strong> Degradação temporária de performance (até 30%)</li>
                <li><strong>Impacto parcial:</strong> Algumas funcionalidades indisponíveis temporariamente</li>
                <li><strong>Indisponibilidade:</strong> Sistema completamente indisponível durante a janela</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 3: Comunicação */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">3. Comunicação de Atualizações</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mb-4">Canais de Notificação</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Bell className="w-5 h-5 text-primary" />
                      <span className="font-semibold">E-mail</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Notificação principal para todos os contatos cadastrados
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="font-semibold">Status Page</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Calendário público de manutenções programadas
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">Cronograma de Avisos</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold">Tipo de Manutenção</th>
                      <th className="text-left py-3 px-4 font-semibold">Aviso Inicial</th>
                      <th className="text-left py-3 px-4 font-semibold">Lembrete</th>
                      <th className="text-left py-3 px-4 font-semibold">Aviso Final</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Emergencial/Segurança</td>
                      <td className="py-3 px-4">Imediato</td>
                      <td className="py-3 px-4">-</td>
                      <td className="py-3 px-4">Início da manutenção</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Regular</td>
                      <td className="py-3 px-4">7 dias</td>
                      <td className="py-3 px-4">24 horas</td>
                      <td className="py-3 px-4">1 hora</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Extensa/Infraestrutura</td>
                      <td className="py-3 px-4">14 dias</td>
                      <td className="py-3 px-4">7 dias / 24 horas</td>
                      <td className="py-3 px-4">1 hora</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Políticas/Termos</td>
                      <td className="py-3 px-4">30 dias</td>
                      <td className="py-3 px-4">15 dias / 7 dias</td>
                      <td className="py-3 px-4">1 dia</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">Conteúdo das Notificações</h3>
              <p className="text-muted-foreground leading-relaxed">
                Todas as notificações de manutenção incluem:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Data e horário da manutenção</li>
                <li>• Duração estimada</li>
                <li>• Sistemas e serviços afetados</li>
                <li>• Nível de impacto esperado</li>
                <li>• Ações necessárias por parte do cliente (se aplicável)</li>
                <li>• Contato para dúvidas ou emergências</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 4: Processo de Atualização */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">4. Processo de Atualização</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-card/50 rounded-lg border border-border/50">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Planejamento</h4>
                  <p className="text-sm text-muted-foreground">
                    Definição do escopo, análise de riscos, preparação de rollback e validação em ambiente de testes
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card/50 rounded-lg border border-border/50">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Comunicação</h4>
                  <p className="text-sm text-muted-foreground">
                    Envio de notificações conforme cronograma, atualização do status page
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card/50 rounded-lg border border-border/50">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Execução</h4>
                  <p className="text-sm text-muted-foreground">
                    Aplicação das atualizações seguindo procedimentos documentados e checklist de validação
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card/50 rounded-lg border border-border/50">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Validação</h4>
                  <p className="text-sm text-muted-foreground">
                    Testes de funcionalidade, monitoramento intensivo nas primeiras horas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card/50 rounded-lg border border-border/50">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  5
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Conclusão</h4>
                  <p className="text-sm text-muted-foreground">
                    Atualização do status page, comunicação de conclusão, documentação das alterações
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 5: Rollback */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">5. Procedimentos de Rollback</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Em caso de problemas durante ou após uma atualização, mantemos procedimentos 
                de rollback para restaurar o estado anterior:
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">5.1. Critérios para Rollback</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Falha crítica que impacta a disponibilidade do serviço</li>
                <li>• Bugs graves que comprometem funcionalidades essenciais</li>
                <li>• Problemas de segurança introduzidos pela atualização</li>
                <li>• Degradação significativa de performance (&gt; 50%)</li>
                <li>• Perda de dados ou corrupção de informações</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">5.2. Tempo de Rollback</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold">Tipo de Sistema</th>
                      <th className="text-left py-3 px-4 font-semibold">Tempo Máximo</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Aplicações Web</td>
                      <td className="py-3 px-4">15 minutos</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Bancos de Dados</td>
                      <td className="py-3 px-4">30 minutos</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Infraestrutura</td>
                      <td className="py-3 px-4">1 hora</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl mt-8">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Garantia de Continuidade</h4>
                    <p className="text-sm text-muted-foreground">
                      Todas as atualizações são precedidas por backup completo e validação 
                      do procedimento de rollback. Em caso de necessidade, a restauração 
                      é prioridade máxima.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 6: Versionamento */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">6. Versionamento e Changelog</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mb-4">6.1. Padrão de Versionamento</h3>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos o padrão Semantic Versioning (SemVer) para identificar versões:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>MAJOR (X.0.0):</strong> Mudanças incompatíveis com versões anteriores</li>
                <li><strong>MINOR (0.X.0):</strong> Novas funcionalidades compatíveis</li>
                <li><strong>PATCH (0.0.X):</strong> Correções de bugs e patches de segurança</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">6.2. Changelog</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mantemos um registro detalhado de todas as alterações:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Descrição das alterações implementadas</li>
                <li>• Bugs corrigidos com referência ao ticket</li>
                <li>• Novas funcionalidades adicionadas</li>
                <li>• Breaking changes e instruções de migração</li>
                <li>• Contribuidores e responsáveis</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">6.3. Suporte a Versões Anteriores</h3>
              <p className="text-muted-foreground leading-relaxed">
                Para versões MAJOR, mantemos suporte limitado por período determinado:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Suporte total: 6 meses após lançamento da nova versão</li>
                <li>• Suporte de segurança: 12 meses adicionais (apenas patches críticos)</li>
                <li>• Fim de vida: Após 18 meses, sem suporte ou atualizações</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-4">Problemas com Atualizações?</h3>
                    <p className="text-muted-foreground mb-4">
                      Se identificar problemas após uma atualização, entre em contato imediatamente:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li><strong>Suporte Técnico:</strong> suporte@cheetahnetwork.com.br</li>
                      <li><strong>Emergências:</strong> +55 (XX) XXXXX-XXXX (24/7)</li>
                      <li><strong>Status Page:</strong> status.cheetahnetwork.com.br</li>
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

export default UpdatePolicy;