import { Database, Shield, Clock, Server, RefreshCw, AlertTriangle, CheckCircle, HardDrive, Cloud, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const BackupPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Database className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Política Técnica</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Política de <span className="text-primary">Backup</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Estratégias, procedimentos e garantias para proteção e recuperação de dados, 
              assegurando a continuidade dos negócios e a integridade das informações.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Última atualização: Dezembro de 2024 | Versão 3.0
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 1: Visão Geral */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">1. Visão Geral</h2>
            
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Esta Política de Backup estabelece os procedimentos, frequências e responsabilidades 
                relacionadas à realização de cópias de segurança dos dados e sistemas gerenciados 
                pela Cheetah Solutions Network.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Objetivo</h3>
              <p className="text-muted-foreground leading-relaxed">
                Garantir a disponibilidade, integridade e recuperabilidade dos dados dos clientes 
                e sistemas internos, minimizando riscos de perda de informações e assegurando a 
                continuidade das operações em caso de incidentes.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Escopo</h3>
              <p className="text-muted-foreground leading-relaxed">
                Esta política aplica-se a todos os sistemas, aplicações, bancos de dados e arquivos 
                sob responsabilidade da Cheetah Solutions Network, incluindo ambientes de produção, 
                homologação e desenvolvimento.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Princípios</h3>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>Regularidade:</strong> Backups realizados em intervalos definidos e previsíveis</li>
                <li><strong>Redundância:</strong> Múltiplas cópias em locais geograficamente distintos</li>
                <li><strong>Testabilidade:</strong> Verificação periódica da integridade e recuperabilidade</li>
                <li><strong>Segurança:</strong> Criptografia e controle de acesso em todos os níveis</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 2: Tipos de Backup */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">2. Tipos de Backup</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-500/10 rounded-lg p-2">
                      <HardDrive className="w-5 h-5 text-green-500" />
                    </div>
                    <h3 className="text-lg font-semibold">Backup Completo (Full)</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    Cópia integral de todos os dados e sistemas. Realizado semanalmente 
                    como base para backups incrementais.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Frequência: Semanal (domingos, 02h)</li>
                    <li>• Retenção: 4 semanas</li>
                    <li>• Tempo de restauração: 2-4 horas</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-500/10 rounded-lg p-2">
                      <RefreshCw className="w-5 h-5 text-blue-500" />
                    </div>
                    <h3 className="text-lg font-semibold">Backup Incremental</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    Cópia apenas das alterações desde o último backup. 
                    Mais rápido e eficiente em termos de armazenamento.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Frequência: Diária (03h)</li>
                    <li>• Retenção: 7 dias</li>
                    <li>• Tempo de restauração: 1-2 horas</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-500/10 rounded-lg p-2">
                      <Database className="w-5 h-5 text-purple-500" />
                    </div>
                    <h3 className="text-lg font-semibold">Backup de Banco de Dados</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    Dumps específicos de bancos de dados com consistência transacional 
                    garantida.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Frequência: A cada 6 horas</li>
                    <li>• Retenção: 14 dias</li>
                    <li>• Tempo de restauração: 30min-1h</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-orange-500/10 rounded-lg p-2">
                      <Cloud className="w-5 h-5 text-orange-500" />
                    </div>
                    <h3 className="text-lg font-semibold">Backup Offsite</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    Replicação para datacenter secundário em região geográfica diferente 
                    para disaster recovery.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Frequência: Diária (sync às 04h)</li>
                    <li>• Retenção: 30 dias</li>
                    <li>• Localização: Datacenter secundário</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 3: Frequência e Retenção */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">3. Frequência e Período de Retenção</h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-semibold">Tipo de Dado</th>
                    <th className="text-left py-4 px-4 font-semibold">Frequência</th>
                    <th className="text-left py-4 px-4 font-semibold">Retenção</th>
                    <th className="text-left py-4 px-4 font-semibold">RPO*</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4">Dados de Produção</td>
                    <td className="py-4 px-4">6 horas</td>
                    <td className="py-4 px-4">30 dias</td>
                    <td className="py-4 px-4">6 horas</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4">Bancos de Dados</td>
                    <td className="py-4 px-4">6 horas</td>
                    <td className="py-4 px-4">14 dias</td>
                    <td className="py-4 px-4">6 horas</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4">Arquivos de Sistema</td>
                    <td className="py-4 px-4">Diária</td>
                    <td className="py-4 px-4">7 dias</td>
                    <td className="py-4 px-4">24 horas</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4">Logs de Aplicação</td>
                    <td className="py-4 px-4">Diária</td>
                    <td className="py-4 px-4">90 dias</td>
                    <td className="py-4 px-4">24 horas</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4">Configurações</td>
                    <td className="py-4 px-4">A cada alteração</td>
                    <td className="py-4 px-4">1 ano</td>
                    <td className="py-4 px-4">Imediato</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4">Código Fonte</td>
                    <td className="py-4 px-4">A cada commit</td>
                    <td className="py-4 px-4">Indefinido</td>
                    <td className="py-4 px-4">Imediato</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-muted-foreground">
              *RPO (Recovery Point Objective): Quantidade máxima de dados que pode ser perdida em caso de falha.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 4: Armazenamento e Segurança */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">4. Armazenamento e Segurança</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mb-4">Locais de Armazenamento</h3>
              <p className="text-muted-foreground leading-relaxed">
                Os backups são armazenados em múltiplas localizações para garantir disponibilidade 
                e proteção contra desastres:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4 text-center">
                    <Server className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">Primário</h4>
                    <p className="text-xs text-muted-foreground">São Paulo, Brasil</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4 text-center">
                    <Cloud className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">Secundário</h4>
                    <p className="text-xs text-muted-foreground">Rio de Janeiro, Brasil</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4 text-center">
                    <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">Offsite</h4>
                    <p className="text-xs text-muted-foreground">AWS S3 (Multi-region)</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">Criptografia</h3>
              <p className="text-muted-foreground leading-relaxed">
                Todos os backups são criptografados utilizando padrões de mercado:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>Em trânsito:</strong> TLS 1.3 para transferência de dados</li>
                <li><strong>Em repouso:</strong> AES-256 para dados armazenados</li>
                <li><strong>Chaves:</strong> Gerenciadas via AWS KMS com rotação automática</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Controle de Acesso</h3>
              <p className="text-muted-foreground leading-relaxed">
                O acesso aos backups é restrito e controlado:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Apenas pessoal autorizado da equipe de infraestrutura</li>
                <li>• Autenticação multifator obrigatória</li>
                <li>• Logs de acesso auditados e retidos por 1 ano</li>
                <li>• Princípio do menor privilégio aplicado</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 5: Recuperação */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">5. Procedimentos de Recuperação</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mb-4">Solicitação de Restauração</h3>
              <p className="text-muted-foreground leading-relaxed">
                Para solicitar restauração de dados, o cliente deve:
              </p>
              <ol className="text-muted-foreground space-y-2">
                <li>1. Abrir chamado técnico especificando os dados a serem restaurados</li>
                <li>2. Informar a data/hora de referência para restauração</li>
                <li>3. Confirmar ambiente de destino (produção, homologação)</li>
                <li>4. Aguardar aprovação e execução pela equipe técnica</li>
              </ol>

              <h3 className="text-xl font-semibold mt-8 mb-4">Tempos de Recuperação (RTO)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold">Cenário</th>
                      <th className="text-left py-3 px-4 font-semibold">RTO Estimado</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Restauração de arquivo individual</td>
                      <td className="py-3 px-4">15-30 minutos</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Restauração de banco de dados</td>
                      <td className="py-3 px-4">30 min - 2 horas</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Restauração de sistema completo</td>
                      <td className="py-3 px-4">2-4 horas</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Disaster Recovery completo</td>
                      <td className="py-3 px-4">4-8 horas</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">Testes de Recuperação</h3>
              <p className="text-muted-foreground leading-relaxed">
                Testes regulares de recuperação são realizados para garantir a eficácia dos backups:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Testes de integridade: Diários (automatizados)</li>
                <li>• Testes de restauração parcial: Mensais</li>
                <li>• Simulação de Disaster Recovery: Trimestral</li>
                <li>• Relatórios de testes disponíveis mediante solicitação</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 6: Responsabilidades */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">6. Responsabilidades</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Cheetah Solutions Network
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Executar backups conforme cronograma definido
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Garantir integridade e criptografia dos backups
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Manter infraestrutura de backup operacional
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Realizar testes periódicos de recuperação
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Notificar cliente sobre falhas de backup
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-primary" />
                  Cliente
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Manter backups próprios para dados críticos
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Informar alterações em requisitos de backup
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Solicitar restaurações com antecedência
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Validar dados restaurados
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Reportar problemas identificados
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 7: Limitações */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">7. Limitações e Exclusões</h2>

            <div className="p-6 bg-destructive/10 border border-destructive/20 rounded-xl mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Importante</h4>
                  <p className="text-muted-foreground">
                    A Cheetah Solutions Network não se responsabiliza por perda de dados nos seguintes casos:
                  </p>
                </div>
              </div>
            </div>

            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-destructive font-bold">•</span>
                Dados alterados ou excluídos pelo cliente após a última janela de backup
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive font-bold">•</span>
                Falhas decorrentes de ações do cliente que comprometam os backups
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive font-bold">•</span>
                Dados armazenados fora do escopo contratado
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive font-bold">•</span>
                Backups solicitados além do período de retenção
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive font-bold">•</span>
                Eventos de força maior que afetem todos os datacenters simultaneamente
              </li>
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BackupPolicy;