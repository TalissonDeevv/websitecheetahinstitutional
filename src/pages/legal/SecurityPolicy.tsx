import { Shield, Lock, Eye, Key, Server, AlertTriangle, CheckCircle, Users, FileText, Fingerprint, Wifi, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const SecurityPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Política Técnica</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Política de <span className="text-primary">Segurança</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Medidas técnicas e organizacionais implementadas para proteção de dados, 
              sistemas e informações, garantindo confidencialidade, integridade e disponibilidade.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Última atualização: Dezembro de 2024 | Versão 4.0
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 1: Princípios de Segurança */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">1. Princípios de Segurança da Informação</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="font-semibold mb-2">Confidencialidade</h3>
                  <p className="text-sm text-muted-foreground">
                    Garantia de que informações são acessíveis apenas por pessoas autorizadas
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="font-semibold mb-2">Integridade</h3>
                  <p className="text-sm text-muted-foreground">
                    Proteção contra modificações não autorizadas em dados e sistemas
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Server className="w-8 h-8 text-purple-500" />
                  </div>
                  <h3 className="font-semibold mb-2">Disponibilidade</h3>
                  <p className="text-sm text-muted-foreground">
                    Sistemas e dados acessíveis quando necessário por usuários autorizados
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                A Cheetah Solutions Network implementa um Sistema de Gestão de Segurança da Informação (SGSI) 
                baseado nas melhores práticas de mercado, incluindo frameworks como ISO 27001, NIST e CIS Controls, 
                adaptados à realidade e necessidades de nossos clientes.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 2: Controles de Acesso */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">2. Controles de Acesso</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mb-4">Autenticação</h3>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos múltiplas camadas de autenticação para garantir que apenas usuários 
                legítimos acessem os sistemas:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Key className="w-5 h-5 text-primary" />
                      <span className="font-semibold">Senhas Fortes</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Mínimo 12 caracteres, complexidade obrigatória, rotação periódica
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Fingerprint className="w-5 h-5 text-primary" />
                      <span className="font-semibold">MFA Obrigatório</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Autenticação multifator para todos os acessos administrativos
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="font-semibold">SSO Corporativo</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Single Sign-On integrado com provedores de identidade
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Eye className="w-5 h-5 text-primary" />
                      <span className="font-semibold">Monitoramento</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Detecção de tentativas suspeitas e bloqueio automático
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">Autorização</h3>
              <p className="text-muted-foreground leading-relaxed">
                O acesso a recursos é controlado através do princípio do menor privilégio:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• RBAC (Role-Based Access Control) para definição de permissões</li>
                <li>• Segregação de funções para operações sensíveis</li>
                <li>• Revisão trimestral de acessos e permissões</li>
                <li>• Revogação imediata de acessos em casos de desligamento</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Gestão de Identidades</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ciclo de vida completo de identidades digitais:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Provisionamento automatizado de contas</li>
                <li>• Processo formal de aprovação para novos acessos</li>
                <li>• Desprovisionamento automático após período de inatividade</li>
                <li>• Auditoria completa de alterações em identidades</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 3: Criptografia */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">3. Criptografia e Proteção de Dados</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mb-4">Dados em Trânsito</h3>
              <p className="text-muted-foreground leading-relaxed">
                Toda comunicação entre sistemas e usuários é protegida:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>TLS 1.3:</strong> Protocolo padrão para todas as conexões HTTPS</li>
                <li><strong>HSTS:</strong> Forçar uso de HTTPS em todas as requisições</li>
                <li><strong>Certificate Pinning:</strong> Validação adicional de certificados</li>
                <li><strong>Perfect Forward Secrecy:</strong> Proteção contra comprometimento futuro de chaves</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Dados em Repouso</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dados armazenados são protegidos com criptografia forte:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>AES-256:</strong> Padrão para criptografia de arquivos e bancos de dados</li>
                <li><strong>Envelope Encryption:</strong> Múltiplas camadas de criptografia</li>
                <li><strong>HSM:</strong> Hardware Security Modules para gestão de chaves críticas</li>
                <li><strong>Key Rotation:</strong> Rotação automática de chaves conforme política</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Dados Sensíveis</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tratamento especial para dados que requerem proteção adicional:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Tokenização de dados de pagamento (PCI DSS)</li>
                <li>• Hashing com salt para senhas (bcrypt/Argon2)</li>
                <li>• Mascaramento de dados em logs e ambientes de teste</li>
                <li>• Pseudonimização conforme requisitos da LGPD</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 4: Segurança de Rede */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">4. Segurança de Rede e Infraestrutura</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mb-4">Proteção Perimetral</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-5 h-5 text-primary" />
                      <span className="font-semibold">WAF</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Web Application Firewall com regras OWASP e proteção contra DDoS
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Wifi className="w-5 h-5 text-primary" />
                      <span className="font-semibold">IDS/IPS</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Detecção e prevenção de intrusões em tempo real
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">Segmentação de Rede</h3>
              <p className="text-muted-foreground leading-relaxed">
                A infraestrutura é segmentada em zonas de segurança distintas:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• DMZ para serviços expostos à internet</li>
                <li>• Rede interna isolada para aplicações</li>
                <li>• Rede de dados segregada para bancos de dados</li>
                <li>• Rede de gestão dedicada para administração</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Monitoramento Contínuo</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sistemas de monitoramento 24/7:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• SIEM centralizado para correlação de eventos</li>
                <li>• Análise comportamental de tráfego (UEBA)</li>
                <li>• Alertas automatizados para anomalias</li>
                <li>• Dashboards em tempo real para SOC</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 5: Desenvolvimento Seguro */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">5. Desenvolvimento Seguro (DevSecOps)</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                A segurança é integrada em todas as fases do ciclo de desenvolvimento:
              </p>

              <div className="space-y-4 my-6">
                <div className="flex items-start gap-4 p-4 bg-card/50 rounded-lg border border-border/50">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Planejamento</h4>
                    <p className="text-sm text-muted-foreground">
                      Modelagem de ameaças, requisitos de segurança, análise de riscos
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card/50 rounded-lg border border-border/50">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Desenvolvimento</h4>
                    <p className="text-sm text-muted-foreground">
                      Code review obrigatório, SAST integrado ao CI/CD, bibliotecas verificadas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card/50 rounded-lg border border-border/50">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Testes</h4>
                    <p className="text-sm text-muted-foreground">
                      DAST automatizado, testes de penetração, análise de vulnerabilidades
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card/50 rounded-lg border border-border/50">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Deploy</h4>
                    <p className="text-sm text-muted-foreground">
                      Verificação de configurações, hardening de servidores, secrets management
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card/50 rounded-lg border border-border/50">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Operação</h4>
                    <p className="text-sm text-muted-foreground">
                      Monitoramento contínuo, patching automatizado, resposta a incidentes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 6: Resposta a Incidentes */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">6. Resposta a Incidentes de Segurança</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mb-4">6.1. Classificação de Incidentes</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold">Severidade</th>
                      <th className="text-left py-3 px-4 font-semibold">Descrição</th>
                      <th className="text-left py-3 px-4 font-semibold">Tempo de Resposta</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">
                        <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-sm">Crítico</span>
                      </td>
                      <td className="py-3 px-4 text-sm">Vazamento de dados, invasão confirmada</td>
                      <td className="py-3 px-4">Imediato (15 min)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">
                        <span className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-sm">Alto</span>
                      </td>
                      <td className="py-3 px-4 text-sm">Tentativa de invasão, vulnerabilidade ativa</td>
                      <td className="py-3 px-4">1 hora</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">
                        <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-sm">Médio</span>
                      </td>
                      <td className="py-3 px-4 text-sm">Comportamento anômalo, malware detectado</td>
                      <td className="py-3 px-4">4 horas</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">
                        <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-sm">Baixo</span>
                      </td>
                      <td className="py-3 px-4 text-sm">Política violada, acesso suspeito</td>
                      <td className="py-3 px-4">24 horas</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">6.2. Processo de Resposta</h3>
              <ol className="text-muted-foreground space-y-2">
                <li><strong>1. Detecção:</strong> Identificação automatizada ou manual do incidente</li>
                <li><strong>2. Contenção:</strong> Isolamento de sistemas afetados para evitar propagação</li>
                <li><strong>3. Erradicação:</strong> Remoção da ameaça e correção de vulnerabilidades</li>
                <li><strong>4. Recuperação:</strong> Restauração de sistemas e dados afetados</li>
                <li><strong>5. Lições Aprendidas:</strong> Análise post-mortem e melhorias</li>
              </ol>

              <h3 className="text-xl font-semibold mt-8 mb-4">6.3. Comunicação</h3>
              <p className="text-muted-foreground leading-relaxed">
                Clientes afetados serão notificados conforme requisitos legais (LGPD) e contratuais, 
                incluindo natureza do incidente, dados potencialmente afetados e medidas tomadas.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 7: Conformidade */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">7. Conformidade e Certificações</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6 text-center">
                  <FileText className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">LGPD</h3>
                  <p className="text-sm text-muted-foreground">
                    Conformidade com a Lei Geral de Proteção de Dados
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6 text-center">
                  <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">ISO 27001</h3>
                  <p className="text-sm text-muted-foreground">
                    Práticas alinhadas ao padrão internacional
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6 text-center">
                  <Database className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">PCI DSS</h3>
                  <p className="text-sm text-muted-foreground">
                    Segurança para dados de pagamento
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Auditorias e Testes</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Pentest externo: Anual, por empresa independente</li>
                    <li>• Análise de vulnerabilidades: Mensal automatizada</li>
                    <li>• Auditoria interna: Semestral</li>
                    <li>• Bug Bounty: Programa ativo para pesquisadores</li>
                  </ul>
                </div>
              </div>
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
                  <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-4">Reportar Vulnerabilidade</h3>
                    <p className="text-muted-foreground mb-4">
                      Identificou uma vulnerabilidade em nossos sistemas? Entre em contato de forma responsável:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li><strong>E-mail:</strong> security@cheetahnetwork.com.br</li>
                      <li><strong>PGP Key:</strong> Disponível em nosso site</li>
                      <li><strong>Bug Bounty:</strong> Programa com recompensas para vulnerabilidades válidas</li>
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

export default SecurityPolicy;