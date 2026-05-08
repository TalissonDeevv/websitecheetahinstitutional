import { Database, Shield, Clock, Server, RefreshCw, AlertTriangle, CheckCircle, HardDrive, Cloud, Lock, Scale, Eye, Settings, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import PolicyLayout from "@/components/legal/PolicyLayout";
import SEO from "@/components/SEO";

const BackupPolicy = () => {
  return (
    <PolicyLayout title="Política de Backup e Recuperação de Dados" lastUpdated="Maio de 2026">
      <SEO
        title="Política de Backup - Cheetah Solutions Network"
        description="Política de Backup e Recuperação de Dados da Cheetah Solutions Network. Estratégias, RPO/RTO, retenção e continuidade de negócios."
        canonical="/diretrizes/backup"
      />

      {/* Preâmbulo */}
      <AnimatedSection>
        <section className="mb-12">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm text-green-500 font-medium">Documento Vigente</span>
          </div>

          <div className="p-6 bg-card/30 rounded-lg border border-border/50 mb-8">
            <div className="flex items-start gap-3">
              <Scale className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong className="text-foreground">Fundamentos Legais e Normativos:</strong> Lei n. 13.709/2018 (LGPD, art. 46 e 49) · Lei n. 12.965/2014 (Marco Civil da Internet) · Decreto n. 8.771/2016 · Norma ABNT NBR ISO/IEC 27001:2022 (A.8.13, A.8.14) · ISO/IEC 27002:2022 (cláusula 8.13) · ISO 22301:2019 (Continuidade de Negócios) · NIST SP 800-34 Rev. 1 (Contingency Planning) · NIST SP 800-184 (Cyber Event Recovery) · CIS Controls v8 (Controle 11).</p>
                <p><strong className="text-foreground">Versão:</strong> 4.0 · <strong className="text-foreground">Vigência:</strong> A partir de 01 de maio de 2026 · <strong className="text-foreground">Revisão programada:</strong> Semestral ou mediante alteração tecnológica ou normativa relevante.</p>
              </div>
            </div>
          </div>

          {/* CAPÍTULO I */}
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo I - Disposições Preliminares e Princípios</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 1 - Objeto e Finalidade</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              1.1. A presente Política de Backup e Recuperação de Dados estabelece as diretrizes, procedimentos,
              responsabilidades e controles técnicos adotados pela Cheetah Solutions Network para a realização de
              cópias de segurança, armazenamento, retenção, teste e restauração de dados, visando garantir a
              disponibilidade, integridade e recuperabilidade das informações.
            </p>
            <p>
              1.2. Esta política integra o Sistema de Gestão de Segurança da Informação (SGSI) e o Plano de
              Continuidade de Negócios (PCN) da Cheetah Solutions Network, devendo ser interpretada em conjunto
              com a Política de Segurança da Informação, Política de Privacidade e demais documentos normativos.
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 2 - Escopo de Aplicação</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>2.1. Esta política aplica-se a todos os ativos de informação sob responsabilidade da Cheetah Solutions Network, incluindo:</p>
            <ul className="space-y-2 ml-4">
              <li>a) Bancos de dados relacionais e não-relacionais em ambientes de produção, homologação e staging;</li>
              <li>b) Sistemas de arquivos, repositórios de código-fonte e artefatos de build;</li>
              <li>c) Configurações de infraestrutura, secrets, certificados digitais e chaves criptográficas;</li>
              <li>d) Dados de clientes armazenados em sistemas gerenciados pela Cheetah;</li>
              <li>e) Logs de auditoria, registros de acesso e evidências de compliance;</li>
              <li>f) Imagens de containers, snapshots de VMs e configurações de orquestração;</li>
              <li>g) Documentação técnica, manuais operacionais e runbooks.</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 3 - Definições Técnicas</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border/50 text-sm">
              <thead>
                <tr className="bg-card/50">
                  <th className="border border-border/50 p-3 text-left font-semibold">Termo</th>
                  <th className="border border-border/50 p-3 text-left font-semibold">Definição</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr><td className="border border-border/50 p-3 font-medium">RPO (Recovery Point Objective)</td><td className="border border-border/50 p-3">Quantidade máxima de dados que pode ser perdida, medida em tempo</td></tr>
                <tr><td className="border border-border/50 p-3 font-medium">RTO (Recovery Time Objective)</td><td className="border border-border/50 p-3">Tempo máximo tolerável para restauração de um serviço após incidente</td></tr>
                <tr><td className="border border-border/50 p-3 font-medium">Backup Full</td><td className="border border-border/50 p-3">Cópia completa de todos os dados do escopo definido</td></tr>
                <tr><td className="border border-border/50 p-3 font-medium">Backup Incremental</td><td className="border border-border/50 p-3">Cópia apenas dos dados alterados desde o último backup (full ou incremental)</td></tr>
                <tr><td className="border border-border/50 p-3 font-medium">Backup Diferencial</td><td className="border border-border/50 p-3">Cópia dos dados alterados desde o último backup full</td></tr>
                <tr><td className="border border-border/50 p-3 font-medium">Snapshot</td><td className="border border-border/50 p-3">Imagem instantânea do estado de um sistema em um ponto no tempo</td></tr>
                <tr><td className="border border-border/50 p-3 font-medium">PITR</td><td className="border border-border/50 p-3">Point-in-Time Recovery: restauração para qualquer momento dentro da janela de retenção</td></tr>
                <tr><td className="border border-border/50 p-3 font-medium">Retenção</td><td className="border border-border/50 p-3">Período durante o qual os backups são mantidos antes da destruição segura</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </AnimatedSection>

      {/* CAPÍTULO II */}
      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo II - Classificação e Estratégia de Backup</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 4 - Classificação de Dados para Backup</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>4.1. Os dados são classificados em tiers conforme criticidade, determinando a frequência, retenção e prioridade de restauração:</p>
          </div>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse border border-border/50 text-sm">
              <thead>
                <tr className="bg-card/50">
                  <th className="border border-border/50 p-3 text-left font-semibold">Tier</th>
                  <th className="border border-border/50 p-3 text-left font-semibold">Classificação</th>
                  <th className="border border-border/50 p-3 text-left font-semibold">RPO</th>
                  <th className="border border-border/50 p-3 text-left font-semibold">RTO</th>
                  <th className="border border-border/50 p-3 text-left font-semibold">Frequência</th>
                  <th className="border border-border/50 p-3 text-left font-semibold">Retenção</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr>
                  <td className="border border-border/50 p-3 font-medium text-red-400">T1</td>
                  <td className="border border-border/50 p-3">Crítico (Produção, dados de clientes)</td>
                  <td className="border border-border/50 p-3">1 hora</td>
                  <td className="border border-border/50 p-3">2 horas</td>
                  <td className="border border-border/50 p-3">Incremental: 1h / Full: diário</td>
                  <td className="border border-border/50 p-3">90 dias + PITR</td>
                </tr>
                <tr>
                  <td className="border border-border/50 p-3 font-medium text-orange-400">T2</td>
                  <td className="border border-border/50 p-3">Alto (Homologação, configs, secrets)</td>
                  <td className="border border-border/50 p-3">4 horas</td>
                  <td className="border border-border/50 p-3">4 horas</td>
                  <td className="border border-border/50 p-3">Incremental: 4h / Full: diário</td>
                  <td className="border border-border/50 p-3">60 dias</td>
                </tr>
                <tr>
                  <td className="border border-border/50 p-3 font-medium text-yellow-400">T3</td>
                  <td className="border border-border/50 p-3">Moderado (Desenvolvimento, docs)</td>
                  <td className="border border-border/50 p-3">24 horas</td>
                  <td className="border border-border/50 p-3">8 horas</td>
                  <td className="border border-border/50 p-3">Full: diário</td>
                  <td className="border border-border/50 p-3">30 dias</td>
                </tr>
                <tr>
                  <td className="border border-border/50 p-3 font-medium text-muted-foreground">T4</td>
                  <td className="border border-border/50 p-3">Baixo (Logs operacionais, cache)</td>
                  <td className="border border-border/50 p-3">48 horas</td>
                  <td className="border border-border/50 p-3">24 horas</td>
                  <td className="border border-border/50 p-3">Full: semanal</td>
                  <td className="border border-border/50 p-3">14 dias</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 5 - Estratégia de Backup (Regra 3-2-1-1-0)</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>5.1. A Cheetah Solutions Network adota a estratégia de backup 3-2-1-1-0:</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
            <Card className="bg-card/50 border-primary/20">
              <CardContent className="p-4 text-center">
                <span className="text-3xl font-bold text-primary">3</span>
                <p className="text-sm text-muted-foreground mt-2">Cópias dos dados (1 original + 2 backups)</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-primary/20">
              <CardContent className="p-4 text-center">
                <span className="text-3xl font-bold text-primary">2</span>
                <p className="text-sm text-muted-foreground mt-2">Tipos de mídia de armazenamento diferentes</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-primary/20">
              <CardContent className="p-4 text-center">
                <span className="text-3xl font-bold text-primary">1</span>
                <p className="text-sm text-muted-foreground mt-2">Cópia offsite (região geográfica distinta)</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-primary/20">
              <CardContent className="p-4 text-center">
                <span className="text-3xl font-bold text-primary">1</span>
                <p className="text-sm text-muted-foreground mt-2">Cópia air-gapped ou imutável (WORM)</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-green-500/20">
              <CardContent className="p-4 text-center">
                <span className="text-3xl font-bold text-green-500">0</span>
                <p className="text-sm text-muted-foreground mt-2">Zero erros verificados em testes de restauração</p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 6 - Tipos de Backup Implementados</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>6.1. A Cheetah Solutions Network implementa os seguintes tipos de backup conforme a natureza dos dados:</p>
            <ul className="space-y-2 ml-4">
              <li>a) <strong className="text-foreground">Backup Full:</strong> Cópia completa executada em janelas de baixa utilização, servindo como base para restaurações;</li>
              <li>b) <strong className="text-foreground">Backup Incremental:</strong> Cópia das alterações desde o último backup, otimizando tempo e armazenamento;</li>
              <li>c) <strong className="text-foreground">Backup Diferencial:</strong> Utilizado em cenários específicos onde a velocidade de restauração é prioritária;</li>
              <li>d) <strong className="text-foreground">Snapshots:</strong> Imagens instantâneas de volumes e instâncias para recuperação rápida;</li>
              <li>e) <strong className="text-foreground">PITR (Point-in-Time Recovery):</strong> Restauração granular para bancos de dados críticos (Tier 1), permitindo recuperação para qualquer segundo dentro da janela de retenção;</li>
              <li>f) <strong className="text-foreground">Backup de Configuração:</strong> Versionamento de infraestrutura como código (IaC), secrets e certificados.</li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

      {/* CAPÍTULO III */}
      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo III - Segurança e Criptografia</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 7 - Criptografia de Backups</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>7.1. Todos os backups são protegidos por criptografia em conformidade com os seguintes padrões:</p>
            <ul className="space-y-2 ml-4">
              <li>a) <strong className="text-foreground">Em repouso:</strong> AES-256-GCM para todos os dados armazenados;</li>
              <li>b) <strong className="text-foreground">Em trânsito:</strong> TLS 1.3 para transferências entre sistemas e regiões;</li>
              <li>c) <strong className="text-foreground">Chaves de criptografia:</strong> Gerenciadas via KMS (Key Management Service) com rotação automática a cada 90 dias;</li>
              <li>d) <strong className="text-foreground">Envelope encryption:</strong> Chaves de dados criptografadas por chaves mestras (CMK) com segregação por ambiente;</li>
              <li>e) <strong className="text-foreground">Integridade:</strong> Checksums SHA-256 calculados antes e após cada operação de backup para verificação de integridade.</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 8 - Controle de Acesso aos Backups</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>8.1. O acesso aos backups é restrito e controlado conforme o princípio do menor privilégio:</p>
            <ul className="space-y-2 ml-4">
              <li>a) Acesso limitado exclusivamente à equipe de infraestrutura e segurança autorizada;</li>
              <li>b) Autenticação multifator (MFA) obrigatória para qualquer operação de restauração;</li>
              <li>c) Registro em log de auditoria de todas as operações (criação, acesso, restauração, exclusão);</li>
              <li>d) Segregação de ambientes: backups de produção isolados dos ambientes de desenvolvimento;</li>
              <li>e) Aprovação dual (four-eyes principle) para restaurações em ambiente de produção;</li>
              <li>f) Revisão trimestral de permissões de acesso com revogação de acessos desnecessários.</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 9 - Proteção contra Ransomware</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>9.1. Medidas específicas de proteção contra ameaças de ransomware:</p>
            <ul className="space-y-2 ml-4">
              <li>a) Backups imutáveis (WORM - Write Once Read Many) para dados Tier 1 e Tier 2;</li>
              <li>b) Air-gap lógico entre ambientes de produção e armazenamento de backup;</li>
              <li>c) Detecção de anomalias no volume de alterações que possam indicar criptografia maliciosa;</li>
              <li>d) Testes periódicos de restauração a partir de backups imutáveis;</li>
              <li>e) Plano de resposta específico para incidentes de ransomware com procedimentos de recuperação documentados.</li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

      {/* CAPÍTULO IV */}
      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo IV - Armazenamento e Retenção</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 10 - Política de Retenção</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>10.1. Os períodos de retenção são definidos conforme a classificação dos dados e as obrigações legais aplicáveis:</p>
          </div>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse border border-border/50 text-sm">
              <thead>
                <tr className="bg-card/50">
                  <th className="border border-border/50 p-3 text-left font-semibold">Tipo de Dado</th>
                  <th className="border border-border/50 p-3 text-left font-semibold">Retenção Mínima</th>
                  <th className="border border-border/50 p-3 text-left font-semibold">Base Legal</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr><td className="border border-border/50 p-3">Dados pessoais de clientes</td><td className="border border-border/50 p-3">Vigência contratual + 5 anos</td><td className="border border-border/50 p-3">LGPD art. 16 / Código Civil art. 206</td></tr>
                <tr><td className="border border-border/50 p-3">Registros de acesso (aplicação)</td><td className="border border-border/50 p-3">6 meses</td><td className="border border-border/50 p-3">Marco Civil art. 15</td></tr>
                <tr><td className="border border-border/50 p-3">Registros de conexão</td><td className="border border-border/50 p-3">1 ano</td><td className="border border-border/50 p-3">Marco Civil art. 13</td></tr>
                <tr><td className="border border-border/50 p-3">Dados financeiros e fiscais</td><td className="border border-border/50 p-3">5 anos</td><td className="border border-border/50 p-3">CTN art. 173 / Lei n. 8.212/1991</td></tr>
                <tr><td className="border border-border/50 p-3">Logs de auditoria de segurança</td><td className="border border-border/50 p-3">2 anos</td><td className="border border-border/50 p-3">ISO 27001 A.8.15 / NIST</td></tr>
                <tr><td className="border border-border/50 p-3">Código-fonte e artefatos</td><td className="border border-border/50 p-3">Vigência contratual + 2 anos</td><td className="border border-border/50 p-3">Lei de Software art. 2</td></tr>
                <tr><td className="border border-border/50 p-3">Backups de configuração</td><td className="border border-border/50 p-3">12 meses</td><td className="border border-border/50 p-3">ISO 27001 / Boas práticas</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 11 - Armazenamento Geográfico</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>11.1. Os backups são armazenados em conformidade com requisitos de localização e redundância:</p>
            <ul className="space-y-2 ml-4">
              <li>a) <strong className="text-foreground">Região primária:</strong> Data centers localizados em território brasileiro (São Paulo - SP);</li>
              <li>b) <strong className="text-foreground">Região secundária:</strong> Réplica em região geográfica distinta (mínimo 500km de distância);</li>
              <li>c) <strong className="text-foreground">Transferência internacional:</strong> Quando aplicável, em conformidade com o Capítulo V da LGPD e cláusulas contratuais padrão;</li>
              <li>d) <strong className="text-foreground">Soberania de dados:</strong> Dados classificados como Tier 1 permanecem exclusivamente em território nacional, salvo determinação contratual diversa.</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 12 - Descarte Seguro</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>12.1. Ao término do período de retenção, os backups são destruídos de forma segura e irreversível:</p>
            <ul className="space-y-2 ml-4">
              <li>a) <strong className="text-foreground">Mídias digitais:</strong> Sobrescrita criptográfica conforme NIST SP 800-88 Rev. 1 (método Clear ou Purge);</li>
              <li>b) <strong className="text-foreground">Armazenamento em nuvem:</strong> Exclusão via API com confirmação de destruição pelo provedor;</li>
              <li>c) <strong className="text-foreground">Registro:</strong> Certificado de destruição com data, método, responsável e hash de verificação;</li>
              <li>d) <strong className="text-foreground">Chaves de criptografia:</strong> Destruição das chaves associadas, tornando os dados permanentemente irrecuperáveis.</li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

      {/* CAPÍTULO V */}
      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo V - Testes e Validação</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 13 - Programa de Testes de Restauração</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>13.1. A Cheetah Solutions Network mantém um programa estruturado de testes de restauração:</p>
          </div>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse border border-border/50 text-sm">
              <thead>
                <tr className="bg-card/50">
                  <th className="border border-border/50 p-3 text-left font-semibold">Tipo de Teste</th>
                  <th className="border border-border/50 p-3 text-left font-semibold">Frequência</th>
                  <th className="border border-border/50 p-3 text-left font-semibold">Escopo</th>
                  <th className="border border-border/50 p-3 text-left font-semibold">Critério de Sucesso</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr>
                  <td className="border border-border/50 p-3 font-medium">Verificação de integridade</td>
                  <td className="border border-border/50 p-3">A cada backup</td>
                  <td className="border border-border/50 p-3">Checksum SHA-256</td>
                  <td className="border border-border/50 p-3">Hash compatível 100%</td>
                </tr>
                <tr>
                  <td className="border border-border/50 p-3 font-medium">Restauração parcial</td>
                  <td className="border border-border/50 p-3">Semanal</td>
                  <td className="border border-border/50 p-3">Amostra aleatória de objetos</td>
                  <td className="border border-border/50 p-3">Restauração dentro do RTO</td>
                </tr>
                <tr>
                  <td className="border border-border/50 p-3 font-medium">Restauração completa</td>
                  <td className="border border-border/50 p-3">Mensal</td>
                  <td className="border border-border/50 p-3">Ambiente completo (Tier 1)</td>
                  <td className="border border-border/50 p-3">Funcionalidade validada end-to-end</td>
                </tr>
                <tr>
                  <td className="border border-border/50 p-3 font-medium">Simulação de desastre (DR)</td>
                  <td className="border border-border/50 p-3">Trimestral</td>
                  <td className="border border-border/50 p-3">Failover para região secundária</td>
                  <td className="border border-border/50 p-3">RTO e RPO dentro dos SLAs</td>
                </tr>
                <tr>
                  <td className="border border-border/50 p-3 font-medium">Teste de ransomware recovery</td>
                  <td className="border border-border/50 p-3">Semestral</td>
                  <td className="border border-border/50 p-3">Restauração de backup imutável</td>
                  <td className="border border-border/50 p-3">Recuperação total sem pagamento</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 14 - Documentação e Evidências</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>14.1. Cada teste de restauração gera um relatório formal contendo:</p>
            <ul className="space-y-2 ml-4">
              <li>a) Data, hora de início e término da operação;</li>
              <li>b) Tipo de teste realizado e escopo coberto;</li>
              <li>c) Tempo efetivo de restauração (comparação com RTO definido);</li>
              <li>d) Volume de dados restaurados e integridade verificada;</li>
              <li>e) Incidências, falhas e ações corretivas adotadas;</li>
              <li>f) Responsável pela execução e aprovador do resultado;</li>
              <li>g) Recomendações de melhoria para o próximo ciclo.</li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

      {/* CAPÍTULO VI */}
      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo VI - Procedimentos de Recuperação</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 15 - Processo de Restauração</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>15.1. O processo de restauração de dados segue o seguinte fluxo operacional:</p>
            <ol className="space-y-2 ml-4">
              <li>I - Solicitação formal de restauração com justificativa e escopo;</li>
              <li>II - Validação de autorização pelo gestor responsável (four-eyes para produção);</li>
              <li>III - Identificação do backup mais recente e adequado ao cenário;</li>
              <li>IV - Restauração em ambiente isolado para validação prévia;</li>
              <li>V - Verificação de integridade e consistência dos dados restaurados;</li>
              <li>VI - Promoção para ambiente de destino após validação;</li>
              <li>VII - Documentação da operação e registro em log de auditoria.</li>
            </ol>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 16 - Cenários de Recuperação</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>16.1. Cenários previstos e procedimentos específicos:</p>
          </div>
          <div className="space-y-4 my-6">
            <Card className="bg-card/50 border-red-500/30">
              <CardContent className="p-4">
                <h4 className="font-semibold text-red-400 mb-2">Cenário 1 - Perda Total de Ambiente (Disaster Recovery)</h4>
                <p className="text-sm text-muted-foreground">
                  Ativação do site secundário com failover automático. Restauração completa a partir
                  de backups offsite. RTO máximo: 2 horas para Tier 1. Comunicação ao cliente em até
                  30 minutos após detecção.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-orange-500/30">
              <CardContent className="p-4">
                <h4 className="font-semibold text-orange-400 mb-2">Cenário 2 - Corrupção de Dados</h4>
                <p className="text-sm text-muted-foreground">
                  Utilização de PITR para restauração ao ponto anterior à corrupção. Análise forense
                  para identificação da causa raiz. Restauração parcial para minimizar impacto.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-yellow-500/30">
              <CardContent className="p-4">
                <h4 className="font-semibold text-yellow-400 mb-2">Cenário 3 - Exclusão Acidental</h4>
                <p className="text-sm text-muted-foreground">
                  Restauração seletiva do objeto ou registro específico a partir do backup incremental
                  mais recente. Soft-delete implementado em sistemas críticos com período de recuperação de 30 dias.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-destructive/30">
              <CardContent className="p-4">
                <h4 className="font-semibold text-destructive mb-2">Cenário 4 - Ataque de Ransomware</h4>
                <p className="text-sm text-muted-foreground">
                  Isolamento imediato do ambiente comprometido. Restauração exclusiva a partir de
                  backups imutáveis (WORM). Análise forense completa antes da reconexão. Notificação
                  à ANPD e titulares conforme LGPD art. 48.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </AnimatedSection>

      {/* CAPÍTULO VII */}
      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo VII - Responsabilidades e Governança</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 17 - Matriz de Responsabilidades</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>17.1. As responsabilidades relacionadas a backup e recuperação são distribuídas conforme a matriz RACI:</p>
            <ul className="space-y-2 ml-4">
              <li>a) <strong className="text-foreground">Equipe de Infraestrutura:</strong> Execução, monitoramento e manutenção dos processos de backup;</li>
              <li>b) <strong className="text-foreground">Equipe de Segurança:</strong> Definição de requisitos de criptografia, controle de acesso e auditoria;</li>
              <li>c) <strong className="text-foreground">Gestor de Projetos:</strong> Classificação de dados e definição de RPO/RTO por cliente;</li>
              <li>d) <strong className="text-foreground">DPO / Encarregado:</strong> Supervisão de conformidade com LGPD e políticas de retenção;</li>
              <li>e) <strong className="text-foreground">Cliente:</strong> Comunicação de requisitos específicos e validação de restaurações solicitadas.</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 18 - Responsabilidade do Cliente</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>18.1. O cliente é responsável por:</p>
            <ul className="space-y-2 ml-4">
              <li>a) Informar formalmente sobre dados que requeiram tratamento diferenciado de backup;</li>
              <li>b) Manter cópias independentes de dados críticos sob sua responsabilidade;</li>
              <li>c) Comunicar imediatamente a necessidade de restauração, indicando o escopo e ponto desejado;</li>
              <li>d) Validar a integridade dos dados após restaurações solicitadas;</li>
              <li>e) A Cheetah Solutions Network não se responsabiliza por dados não incluídos no escopo de backup contratado.</li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

      {/* CAPÍTULO VIII */}
      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo VIII - Monitoramento e Alertas</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 19 - Sistema de Monitoramento</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>19.1. O ambiente de backup é monitorado continuamente (24/7) com os seguintes controles:</p>
            <ul className="space-y-2 ml-4">
              <li>a) Alertas automáticos para falhas de execução de backup;</li>
              <li>b) Monitoramento de capacidade de armazenamento com threshold de 80%;</li>
              <li>c) Verificação automática de integridade pós-backup;</li>
              <li>d) Dashboard de status com métricas de RPO/RTO efetivos;</li>
              <li>e) Alertas de anomalia para variações significativas no volume de dados;</li>
              <li>f) Notificação imediata para falhas em backups Tier 1 (máximo 15 minutos).</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 20 - Indicadores de Performance (KPIs)</h3>
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse border border-border/50 text-sm">
              <thead>
                <tr className="bg-card/50">
                  <th className="border border-border/50 p-3 text-left font-semibold">Indicador</th>
                  <th className="border border-border/50 p-3 text-left font-semibold">Meta</th>
                  <th className="border border-border/50 p-3 text-left font-semibold">Frequência de Medição</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr><td className="border border-border/50 p-3">Taxa de sucesso de backups</td><td className="border border-border/50 p-3">≥ 99,5%</td><td className="border border-border/50 p-3">Diária</td></tr>
                <tr><td className="border border-border/50 p-3">RPO efetivo vs. RPO definido</td><td className="border border-border/50 p-3">≤ RPO contratual</td><td className="border border-border/50 p-3">Contínua</td></tr>
                <tr><td className="border border-border/50 p-3">RTO efetivo em testes</td><td className="border border-border/50 p-3">≤ RTO definido</td><td className="border border-border/50 p-3">Mensal</td></tr>
                <tr><td className="border border-border/50 p-3">Taxa de sucesso de restauração</td><td className="border border-border/50 p-3">100%</td><td className="border border-border/50 p-3">A cada teste</td></tr>
                <tr><td className="border border-border/50 p-3">Tempo médio de detecção de falha</td><td className="border border-border/50 p-3">≤ 15 minutos</td><td className="border border-border/50 p-3">Contínua</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </AnimatedSection>

      {/* CAPÍTULO IX */}
      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo IX - Disposições Finais</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 21 - Atualizações e Revisões</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              21.1. Esta política será revisada semestralmente ou sempre que houver alteração
              significativa na infraestrutura, nas ameaças identificadas ou na legislação aplicável.
            </p>
            <p>
              21.2. Alterações substanciais serão comunicadas com antecedência mínima de 15 (quinze)
              dias aos clientes impactados.
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 22 - Foro Competente</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              22.1. Fica eleito o foro da Comarca de Recife, Estado de Pernambuco, para dirimir
              quaisquer controvérsias oriundas desta política, com renúncia expressa a qualquer outro,
              por mais privilegiado que seja, ressalvado o foro do domicílio do consumidor nos
              termos do art. 101, I, do Código de Defesa do Consumidor.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Contato Final */}
      <AnimatedSection>
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <Database className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Contato para Questões sobre Backup e Recuperação</h3>
              <div className="text-muted-foreground space-y-2">
                <p>Para dúvidas, solicitações de restauração ou esclarecimentos sobre esta política:</p>
                <p><strong className="text-foreground">E-mail:</strong> contatocheetahsolutions@gmail.com</p>
                <p><strong className="text-foreground">Website:</strong> https://cheetahsolutions.com.br</p>
                <p className="text-sm mt-4">
                  Nosso Encarregado de Proteção de Dados (DPO) e a equipe de infraestrutura estão
                  à disposição para atender todas as solicitações.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </AnimatedSection>
    </PolicyLayout>
  );
};

export default BackupPolicy;
