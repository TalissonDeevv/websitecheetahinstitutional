import { CheckCircle, Shield, Scale, Lock, Eye, Key, Server, AlertTriangle, Users, FileText, Fingerprint, Wifi, Database, Monitor, Globe, HardDrive, Bug, Settings, Clock, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import PolicyLayout from "@/components/legal/PolicyLayout";

const SecurityPolicy = () => {
  return (
    <PolicyLayout title="Política de Segurança da Informação" lastUpdated="Maio de 2026">
      {/* Preâmbulo e Compliance */}
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
                <p><strong className="text-foreground">Fundamentos Legais:</strong> Lei nº 13.709/2018 (LGPD) · Lei nº 12.965/2014 (Marco Civil da Internet) · Decreto nº 8.771/2016 · Lei nº 12.737/2012 (Lei Carolina Dieckmann) · Lei nº 9.983/2000 (Crimes contra a Administração Pública) · Norma ABNT NBR ISO/IEC 27001:2022 · Norma ABNT NBR ISO/IEC 27002:2022 · NIST Cybersecurity Framework 2.0 · CIS Controls v8 · PCI DSS v4.0 · Regulamento (UE) 2016/679 (GDPR), quando aplicável.</p>
                <p><strong className="text-foreground">Versão:</strong> 5.0 · <strong className="text-foreground">Vigência:</strong> A partir de 01 de maio de 2026 · <strong className="text-foreground">Revisão programada:</strong> Semestral ou mediante alteração legislativa, normativa ou tecnológica relevante.</p>
              </div>
            </div>
          </div>

          {/* CAPÍTULO I */}
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo I - Disposições Preliminares e Princípios Fundamentais</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 1ª - Objeto, Escopo e Aplicabilidade</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              1.1. A presente Política de Segurança da Informação ("Política") tem por objeto estabelecer as diretrizes,
              responsabilidades, controles técnicos e organizacionais, procedimentos operacionais e padrões mínimos de
              segurança adotados pela Cheetah Solutions Network ("Cheetah", "Controladora", "nós" ou "nosso") para a
              proteção de informações, dados pessoais, sistemas, infraestrutura tecnológica, redes, aplicações e quaisquer
              ativos de informação sob custódia ou responsabilidade da organização.
            </p>
            <p>
              1.2. Esta Política aplica-se a todos os colaboradores, prestadores de serviço, estagiários, terceirizados,
              fornecedores, parceiros comerciais, clientes e quaisquer outras pessoas, naturais ou jurídicas, que acessem,
              utilizem, processem, armazenem, transmitam ou de qualquer forma interajam com os ativos de informação da
              Cheetah Solutions Network, independentemente da localização geográfica, do meio de acesso (físico ou digital)
              ou do tipo de vínculo contratual.
            </p>
            <p>
              1.3. O escopo desta Política abrange, sem se limitar a: (i) informações em formato digital ou físico;
              (ii) sistemas de informação, aplicações, APIs e microsserviços; (iii) infraestrutura de rede, servidores,
              containers e ambientes cloud; (iv) dispositivos de endpoint, incluindo estações de trabalho, notebooks,
              dispositivos móveis e IoT; (v) dados pessoais e dados pessoais sensíveis conforme definidos pela LGPD;
              (vi) propriedade intelectual, segredos comerciais e informações estratégicas; (vii) comunicações eletrônicas,
              incluindo e-mail, mensageria instantânea e videoconferência.
            </p>
            <p>
              1.4. Esta Política integra o corpo normativo institucional da Cheetah Solutions Network e deve ser
              interpretada em conjunto com os Termos de Uso, Política de Privacidade, Política de Uso Aceitável,
              Política de Backup, Política de Resposta a Incidentes e demais documentos complementares.
            </p>
            <p>
              1.5. A Cheetah Solutions Network reconhece a segurança da informação como elemento estratégico
              fundamental para a continuidade dos negócios, proteção da reputação institucional, conformidade
              regulatória e preservação da confiança de clientes e parceiros.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">Cláusula 2ª - Princípios Fundamentais</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>2.1. A gestão de segurança da informação na Cheetah Solutions Network é norteada pelos seguintes princípios fundamentais, alinhados à tríade CIA (Confidentiality, Integrity, Availability) e às normas ISO/IEC 27001 e ISO/IEC 27002:</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-blue-500" />
                  </div>
                  <h4 className="font-semibold mb-2">Confidencialidade</h4>
                  <p className="text-sm text-muted-foreground">
                    Garantia de que informações são acessíveis exclusivamente por pessoas, processos e sistemas
                    devidamente autorizados, em conformidade com a classificação de segurança atribuída
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="font-semibold mb-2">Integridade</h4>
                  <p className="text-sm text-muted-foreground">
                    Proteção contra modificações, alterações, exclusões ou corrupções não autorizadas em dados,
                    sistemas e configurações, assegurando a precisão e completude das informações
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Server className="w-8 h-8 text-purple-500" />
                  </div>
                  <h4 className="font-semibold mb-2">Disponibilidade</h4>
                  <p className="text-sm text-muted-foreground">
                    Sistemas, dados e serviços acessíveis e operacionais quando necessário, dentro dos
                    níveis de serviço acordados (SLA), com resiliência e tolerância a falhas
                  </p>
                </CardContent>
              </Card>
            </div>

            <p>2.2. Princípios complementares que orientam todas as decisões de segurança:</p>
            <div className="space-y-3 ml-4">
              <p><strong className="text-foreground">a) Defesa em Profundidade (Defense in Depth):</strong> Implementação de múltiplas camadas de controles de segurança independentes e complementares, de modo que a falha de uma camada não comprometa a segurança global do sistema.</p>
              <p><strong className="text-foreground">b) Menor Privilégio (Principle of Least Privilege):</strong> Todo acesso é concedido com o nível mínimo de permissões estritamente necessário para a execução das atividades atribuídas, pelo menor período de tempo possível.</p>
              <p><strong className="text-foreground">c) Necessidade de Conhecer (Need to Know):</strong> Informações classificadas são disponibilizadas apenas para indivíduos que necessitam efetivamente delas para o desempenho de suas funções.</p>
              <p><strong className="text-foreground">d) Segregação de Funções (Separation of Duties):</strong> Operações críticas requerem a participação de mais de um indivíduo, evitando concentração de poderes e reduzindo riscos de fraude ou erro.</p>
              <p><strong className="text-foreground">e) Segurança por Design (Security by Design):</strong> A segurança é considerada desde a concepção de novos sistemas, processos e serviços, e não apenas como camada adicional posterior.</p>
              <p><strong className="text-foreground">f) Zero Trust:</strong> Nenhuma entidade, interna ou externa, é considerada confiável por padrão. Toda solicitação de acesso é verificada, autenticada e autorizada continuamente, independentemente da origem.</p>
              <p><strong className="text-foreground">g) Responsabilização (Accountability):</strong> Todas as ações realizadas em sistemas são rastreáveis e atribuíveis a indivíduos ou processos identificáveis, mediante logs auditáveis e trilhas de auditoria.</p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CAPÍTULO II */}
      <AnimatedSection delay={100}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo II - Classificação de Informações e Ativos</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 3ª - Classificação da Informação</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              3.1. Toda informação tratada pela Cheetah Solutions Network é classificada de acordo com seu nível de
              sensibilidade, criticidade e impacto potencial em caso de divulgação não autorizada, modificação
              indevida ou indisponibilidade, conforme os seguintes níveis:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Nível</th>
                    <th className="text-left py-3 px-4 font-semibold">Classificação</th>
                    <th className="text-left py-3 px-4 font-semibold">Descrição</th>
                    <th className="text-left py-3 px-4 font-semibold">Exemplos</th>
                    <th className="text-left py-3 px-4 font-semibold">Controles Mínimos</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground text-sm">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">
                      <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs">C4</span>
                    </td>
                    <td className="py-3 px-4 font-medium">Ultrassecreta</td>
                    <td className="py-3 px-4">Divulgação causa dano excepcional e irreversível à organização</td>
                    <td className="py-3 px-4">Chaves de criptografia master, credenciais de produção, segredos comerciais estratégicos</td>
                    <td className="py-3 px-4">Criptografia AES-256, HSM, acesso restrito com MFA + biometria, logs imutáveis</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">
                      <span className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-xs">C3</span>
                    </td>
                    <td className="py-3 px-4 font-medium">Secreta</td>
                    <td className="py-3 px-4">Divulgação causa dano grave à organização ou a terceiros</td>
                    <td className="py-3 px-4">Dados pessoais sensíveis, código-fonte proprietário, contratos confidenciais</td>
                    <td className="py-3 px-4">Criptografia em repouso e trânsito, RBAC, auditoria completa</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">
                      <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">C2</span>
                    </td>
                    <td className="py-3 px-4 font-medium">Restrita</td>
                    <td className="py-3 px-4">Divulgação causa dano moderado, uso interno controlado</td>
                    <td className="py-3 px-4">Documentação interna, relatórios financeiros, dados de clientes não sensíveis</td>
                    <td className="py-3 px-4">Controle de acesso por função, criptografia em trânsito, backup regular</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">
                      <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">C1</span>
                    </td>
                    <td className="py-3 px-4 font-medium">Pública</td>
                    <td className="py-3 px-4">Informação aprovada para divulgação externa, sem impacto</td>
                    <td className="py-3 px-4">Conteúdo do website, materiais de marketing, documentação pública</td>
                    <td className="py-3 px-4">Controle de integridade, versionamento, aprovação antes de publicação</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              3.2. A classificação é obrigatória para toda informação criada, processada, armazenada ou transmitida
              no âmbito da Cheetah Solutions Network. O responsável pela classificação é o proprietário (owner) da
              informação, com apoio e orientação da equipe de segurança.
            </p>
            <p>
              3.3. A reclassificação deve ocorrer sempre que houver mudança na sensibilidade, finalidade de uso ou
              requisito legal aplicável. Informações que deixem de ser necessárias devem ser descartadas de forma
              segura, em conformidade com a Cláusula 14ª desta Política.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">Cláusula 4ª - Inventário e Gestão de Ativos</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              4.1. A Cheetah Solutions Network mantém inventário completo e atualizado de todos os ativos de informação,
              incluindo, sem se limitar a: (i) ativos de hardware (servidores, estações de trabalho, dispositivos móveis,
              equipamentos de rede); (ii) ativos de software (sistemas operacionais, aplicações, bibliotecas, frameworks);
              (iii) ativos de dados (bancos de dados, repositórios, arquivos, backups); (iv) ativos de serviço (APIs,
              microsserviços, serviços cloud, integrações de terceiros); (v) ativos de rede (firewalls, switches, roteadores,
              VPNs, balanceadores de carga).
            </p>
            <p>
              4.2. Cada ativo possui um proprietário designado (asset owner), responsável por: (i) garantir a classificação
              adequada; (ii) definir e revisar permissões de acesso; (iii) assegurar a aplicação dos controles de segurança
              correspondentes à classificação; (iv) participar de revisões periódicas de segurança.
            </p>
            <p>
              4.3. O inventário de ativos é revisado trimestralmente e atualizado sempre que houver aquisição,
              descomissionamento, transferência ou alteração significativa em qualquer ativo.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* CAPÍTULO III */}
      <AnimatedSection delay={200}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo III - Controles de Acesso e Gestão de Identidades</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 5ª - Autenticação e Autorização</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              5.1. Todo acesso aos sistemas, plataformas, infraestrutura e dados da Cheetah Solutions Network requer
              autenticação positiva e autorização prévia, sem exceção. Os seguintes controles de autenticação são
              implementados:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Key className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Política de Senhas</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Mínimo 14 caracteres para contas administrativas, 12 para contas padrão. Complexidade obrigatória
                    (maiúsculas, minúsculas, números, caracteres especiais). Rotação a cada 90 dias. Histórico das
                    últimas 12 senhas. Bloqueio após 5 tentativas falhas consecutivas.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Fingerprint className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Autenticação Multifator (MFA)</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Obrigatória para todos os acessos administrativos, VPN, consoles cloud, repositórios de código
                    e sistemas de produção. Suporte a TOTP (RFC 6238), FIDO2/WebAuthn, push notifications e
                    hardware tokens (YubiKey).
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-semibold">SSO e Federação</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Single Sign-On (SSO) corporativo via SAML 2.0 e OpenID Connect. Integração com provedores
                    de identidade (IdP) para gestão centralizada de autenticação. Políticas de sessão configuráveis.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Eye className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Monitoramento de Acessos</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Detecção em tempo real de tentativas de acesso suspeitas, login de localizações anômalas,
                    brute force, credential stuffing e account takeover. Bloqueio automatizado e alertas
                    para a equipe de segurança.
                  </p>
                </CardContent>
              </Card>
            </div>

            <p>
              5.2. O modelo de autorização implementado é baseado em Role-Based Access Control (RBAC) com suporte
              a Attribute-Based Access Control (ABAC) para cenários que exijam granularidade adicional. As permissões
              são definidas conforme as seguintes diretrizes:
            </p>
            <ul className="space-y-2 ml-4">
              <li>• Princípio do menor privilégio aplicado em todos os níveis (rede, aplicação, dados)</li>
              <li>• Segregação de funções para operações sensíveis (aprovação de deploy, acesso a produção, gestão de chaves)</li>
              <li>• Revisão trimestral obrigatória de todas as permissões e acessos (User Access Review)</li>
              <li>• Revogação imediata de acessos em caso de desligamento, mudança de função ou encerramento contratual</li>
              <li>• Contas de serviço com escopo restrito, secrets rotacionados automaticamente e sem acesso interativo</li>
              <li>• Proibição de contas compartilhadas ou genéricas para qualquer finalidade</li>
            </ul>

            <p>
              5.3. Acessos privilegiados (administradores de sistema, DBAs, DevOps) são gerenciados por solução de
              Privileged Access Management (PAM) com: (i) sessões gravadas e auditáveis; (ii) acesso just-in-time
              (JIT) com aprovação prévia; (iii) rotação automática de credenciais; (iv) isolamento de sessões
              privilegiadas.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">Cláusula 6ª - Ciclo de Vida de Identidades</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>6.1. A gestão de identidades segue processo formal e documentado para todo o ciclo de vida:</p>
            <div className="space-y-3 ml-4">
              <p><strong className="text-foreground">a) Provisionamento:</strong> Criação de identidade digital mediante solicitação formal, aprovação do gestor responsável e validação pela equipe de segurança. Contas são criadas com o mínimo de permissões necessárias.</p>
              <p><strong className="text-foreground">b) Modificação:</strong> Alterações de permissões seguem processo de aprovação formal com justificativa documentada. Elevações de privilégio temporárias requerem aprovação adicional e prazo definido.</p>
              <p><strong className="text-foreground">c) Revisão:</strong> Revisão trimestral obrigatória de todas as contas e permissões ativas. Contas inativas por mais de 30 dias são suspensas automaticamente. Contas inativas por mais de 90 dias são desabilitadas permanentemente.</p>
              <p><strong className="text-foreground">d) Desprovisionamento:</strong> Revogação imediata de todos os acessos em caso de desligamento ou encerramento contratual. Processo automatizado integrado ao sistema de RH. Verificação de que nenhum dado corporativo permanece em dispositivos pessoais.</p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CAPÍTULO IV */}
      <AnimatedSection delay={300}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo IV - Criptografia e Proteção de Dados</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 7ª - Padrões Criptográficos</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              7.1. A Cheetah Solutions Network implementa controles criptográficos em conformidade com as melhores
              práticas internacionais e recomendações do NIST (SP 800-175B), assegurando a proteção de dados em
              todas as fases do seu ciclo de vida.
            </p>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">7.1.1. Dados em Trânsito</h4>
            <ul className="space-y-2 ml-4">
              <li><strong className="text-foreground">TLS 1.3:</strong> Protocolo padrão obrigatório para todas as conexões HTTPS. Versões anteriores (TLS 1.0, 1.1, 1.2 com cipher suites fracas) são explicitamente desabilitadas.</li>
              <li><strong className="text-foreground">HSTS (HTTP Strict Transport Security):</strong> Cabeçalho configurado com max-age mínimo de 31536000 (1 ano), incluindo includeSubDomains e preload.</li>
              <li><strong className="text-foreground">Certificate Pinning:</strong> Pinning de certificados implementado em aplicações móveis e clientes API para proteção contra ataques man-in-the-middle.</li>
              <li><strong className="text-foreground">Perfect Forward Secrecy (PFS):</strong> Cipher suites com suporte a PFS são obrigatórias, garantindo que comprometimento futuro de chaves privadas não afete comunicações passadas.</li>
              <li><strong className="text-foreground">mTLS (Mutual TLS):</strong> Autenticação mútua via certificados implementada para comunicação entre microsserviços e integrações de alto privilégio.</li>
            </ul>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">7.1.2. Dados em Repouso</h4>
            <ul className="space-y-2 ml-4">
              <li><strong className="text-foreground">AES-256-GCM:</strong> Padrão para criptografia de dados em repouso em bancos de dados, sistemas de arquivos e storage objects.</li>
              <li><strong className="text-foreground">Envelope Encryption:</strong> Dados criptografados com Data Encryption Key (DEK), que por sua vez é criptografada com Key Encryption Key (KEK) gerenciada por HSM.</li>
              <li><strong className="text-foreground">HSM (Hardware Security Modules):</strong> Módulos de segurança hardware FIPS 140-2 Level 3 para geração, armazenamento e operações com chaves criptográficas críticas.</li>
              <li><strong className="text-foreground">Key Rotation:</strong> Rotação automática de chaves criptográficas a cada 365 dias para DEKs e 730 dias para KEKs, com capacidade de rotação emergencial.</li>
            </ul>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">7.1.3. Dados Sensíveis</h4>
            <ul className="space-y-2 ml-4">
              <li>• Tokenização de dados de pagamento em conformidade com PCI DSS v4.0</li>
              <li>• Hashing de senhas com Argon2id (RFC 9106), com parâmetros de memória, iterações e paralelismo ajustados conforme recomendações OWASP</li>
              <li>• Mascaramento de dados em logs, ambientes de desenvolvimento, staging e testes</li>
              <li>• Pseudonimização e anonimização conforme requisitos da LGPD (art. 13) e GDPR (art. 4º, 5)</li>
              <li>• Destruição segura de dados e chaves criptográficas conforme NIST SP 800-88 (Guidelines for Media Sanitization)</li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

      {/* CAPÍTULO V */}
      <AnimatedSection delay={400}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo V - Segurança de Rede e Infraestrutura</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 8ª - Arquitetura de Segurança de Rede</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              8.1. A infraestrutura de rede da Cheetah Solutions Network é projetada com múltiplas camadas de
              proteção, seguindo o modelo Zero Trust e os controles CIS v8 para segurança perimetral,
              segmentação e monitoramento.
            </p>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">8.1.1. Proteção Perimetral</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="font-semibold">WAF (Web Application Firewall)</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Regras OWASP Top 10, proteção contra SQL Injection, XSS, CSRF, Command Injection, Path Traversal.
                    Integração com Cloudflare para mitigação de DDoS em camadas 3, 4 e 7. Rate limiting configurável
                    por endpoint.
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
                    Sistemas de detecção e prevenção de intrusões com análise de tráfego em tempo real.
                    Assinaturas atualizadas automaticamente. Detecção baseada em anomalias comportamentais
                    e machine learning para identificação de ameaças desconhecidas (zero-day).
                  </p>
                </CardContent>
              </Card>
            </div>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">8.1.2. Segmentação de Rede</h4>
            <p>A infraestrutura é segmentada em zonas de segurança distintas com comunicação controlada por políticas de firewall:</p>
            <ul className="space-y-2 ml-4">
              <li>• <strong className="text-foreground">DMZ (Zona Desmilitarizada):</strong> Para serviços expostos à internet (reverse proxies, CDN origins, APIs públicas)</li>
              <li>• <strong className="text-foreground">Rede de Aplicações:</strong> Isolada, sem acesso direto à internet, comunicação via service mesh (Istio/Linkerd)</li>
              <li>• <strong className="text-foreground">Rede de Dados:</strong> Segregada com acesso restrito exclusivamente a serviços autorizados via firewall rules</li>
              <li>• <strong className="text-foreground">Rede de Gestão:</strong> Dedicada para administração de infraestrutura, acessível apenas via VPN com MFA</li>
              <li>• <strong className="text-foreground">Microsegmentação:</strong> Políticas de rede ao nível de workload/container via Network Policies (Kubernetes) e Security Groups</li>
            </ul>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">8.1.3. Monitoramento e Detecção</h4>
            <ul className="space-y-2 ml-4">
              <li>• SIEM centralizado para correlação de eventos de segurança, com retenção mínima de 12 meses</li>
              <li>• UEBA (User and Entity Behavior Analytics) para detecção de comportamentos anômalos</li>
              <li>• NDR (Network Detection and Response) para análise de tráfego e identificação de movimentação lateral</li>
              <li>• SOC (Security Operations Center) com capacidade de resposta 24/7</li>
              <li>• Dashboards em tempo real com métricas de segurança, alertas automatizados e playbooks de resposta</li>
              <li>• Threat Intelligence integrada com feeds de indicadores de comprometimento (IoCs)</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">Cláusula 9ª - Segurança Cloud e Containers</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>9.1. A Cheetah Solutions Network opera primariamente em ambientes cloud (AWS, GCP, Azure), implementando os seguintes controles:</p>
            <ul className="space-y-2 ml-4">
              <li>• Cloud Security Posture Management (CSPM) para monitoramento contínuo de configurações</li>
              <li>• Cloud Workload Protection Platform (CWPP) para proteção de workloads em tempo de execução</li>
              <li>• Infrastructure as Code (IaC) com scanning de segurança integrado (tfsec, Checkov, Terrascan)</li>
              <li>• Container Image Scanning em todos os estágios do pipeline (build, registry, runtime)</li>
              <li>• Pod Security Standards (PSS) e Security Contexts restritivos no Kubernetes</li>
              <li>• Secrets Management via soluções dedicadas (HashiCorp Vault, AWS Secrets Manager) com rotação automática</li>
              <li>• Service Mesh com mTLS automático para comunicação inter-serviços</li>
              <li>• Immutable Infrastructure: containers em produção são read-only, sem shell interativo</li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

      {/* CAPÍTULO VI */}
      <AnimatedSection delay={500}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo VI - Desenvolvimento Seguro (DevSecOps)</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 10ª - Ciclo de Desenvolvimento Seguro (SDLC)</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              10.1. A segurança é integrada em todas as fases do ciclo de vida de desenvolvimento de software (SDLC),
              conforme as práticas DevSecOps e as diretrizes OWASP Software Assurance Maturity Model (SAMM):
            </p>

            <div className="space-y-4 my-6">
              <div className="flex items-start gap-4 p-4 bg-card/50 rounded-lg border border-border/50">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                <div>
                  <h4 className="font-semibold mb-1">Requisitos e Design</h4>
                  <p className="text-sm text-muted-foreground">
                    Modelagem de ameaças (STRIDE, DREAD), requisitos de segurança por user story, análise de riscos,
                    revisão de arquitetura de segurança, definição de controles por classificação de dados.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card/50 rounded-lg border border-border/50">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                <div>
                  <h4 className="font-semibold mb-1">Desenvolvimento</h4>
                  <p className="text-sm text-muted-foreground">
                    Code review obrigatório com checklist de segurança. SAST (Static Application Security Testing)
                    integrado ao CI/CD com gates de qualidade. Dependency scanning para vulnerabilidades em bibliotecas
                    de terceiros (SCA). Secrets scanning para prevenção de vazamento de credenciais em repositórios.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card/50 rounded-lg border border-border/50">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                <div>
                  <h4 className="font-semibold mb-1">Testes de Segurança</h4>
                  <p className="text-sm text-muted-foreground">
                    DAST (Dynamic Application Security Testing) automatizado em ambientes de staging. IAST (Interactive
                    Application Security Testing) em tempo de execução. Testes de penetração por equipe especializada.
                    Fuzzing para identificação de vulnerabilidades de parsing e input handling.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card/50 rounded-lg border border-border/50">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                <div>
                  <h4 className="font-semibold mb-1">Deploy e Release</h4>
                  <p className="text-sm text-muted-foreground">
                    Verificação de configurações de segurança (hardening baseline). Container image signing e
                    verification. Deployment gates com aprovação de segurança para releases críticas. Canary
                    deployments com monitoramento de segurança.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card/50 rounded-lg border border-border/50">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">5</div>
                <div>
                  <h4 className="font-semibold mb-1">Operação e Monitoramento</h4>
                  <p className="text-sm text-muted-foreground">
                    Runtime Application Self-Protection (RASP). Monitoramento contínuo de vulnerabilidades em produção.
                    Patching automatizado com janelas de manutenção definidas. Resposta a incidentes de segurança
                    com playbooks predefinidos.
                  </p>
                </div>
              </div>
            </div>

            <p>
              10.2. Toda vulnerabilidade identificada é classificada conforme CVSS (Common Vulnerability Scoring System)
              v4.0 e tratada conforme os seguintes SLAs de remediação:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">CVSS Score</th>
                    <th className="text-left py-3 px-4 font-semibold">Severidade</th>
                    <th className="text-left py-3 px-4 font-semibold">Prazo de Remediação</th>
                    <th className="text-left py-3 px-4 font-semibold">Escalation</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground text-sm">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">9.0 - 10.0</td>
                    <td className="py-3 px-4"><span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs">Crítica</span></td>
                    <td className="py-3 px-4">24 horas</td>
                    <td className="py-3 px-4">Imediata para CTO e equipe de segurança</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">7.0 - 8.9</td>
                    <td className="py-3 px-4"><span className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-xs">Alta</span></td>
                    <td className="py-3 px-4">72 horas</td>
                    <td className="py-3 px-4">Líder de segurança em 24h</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">4.0 - 6.9</td>
                    <td className="py-3 px-4"><span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">Média</span></td>
                    <td className="py-3 px-4">30 dias</td>
                    <td className="py-3 px-4">Sprint planning regular</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">0.1 - 3.9</td>
                    <td className="py-3 px-4"><span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">Baixa</span></td>
                    <td className="py-3 px-4">90 dias</td>
                    <td className="py-3 px-4">Backlog priorizado</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CAPÍTULO VII */}
      <AnimatedSection delay={600}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo VII - Resposta a Incidentes de Segurança</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 11ª - Classificação de Incidentes</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              11.1. A Cheetah Solutions Network mantém plano formal de Resposta a Incidentes de Segurança (Security
              Incident Response Plan - SIRP) baseado no NIST SP 800-61 Rev. 2 e nas orientações da ANPD para
              comunicação de incidentes envolvendo dados pessoais.
            </p>
            <p>11.2. Os incidentes de segurança são classificados conforme a seguinte matriz de severidade:</p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Severidade</th>
                    <th className="text-left py-3 px-4 font-semibold">Descrição</th>
                    <th className="text-left py-3 px-4 font-semibold">Tempo de Resposta</th>
                    <th className="text-left py-3 px-4 font-semibold">Notificação</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground text-sm">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">
                      <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs">P1 - Crítico</span>
                    </td>
                    <td className="py-3 px-4">Vazamento de dados pessoais confirmado, invasão de sistemas de produção, ransomware, comprometimento de chaves criptográficas</td>
                    <td className="py-3 px-4">Imediato (15 min)</td>
                    <td className="py-3 px-4">CTO, DPO, clientes afetados, ANPD (quando aplicável, em até 72h)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">
                      <span className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-xs">P2 - Alto</span>
                    </td>
                    <td className="py-3 px-4">Tentativa de invasão com evidências de comprometimento parcial, vulnerabilidade crítica explorada, DDoS de grande escala</td>
                    <td className="py-3 px-4">1 hora</td>
                    <td className="py-3 px-4">Líder de segurança, equipe de resposta, clientes potencialmente afetados</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">
                      <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">P3 - Médio</span>
                    </td>
                    <td className="py-3 px-4">Comportamento anômalo significativo, malware detectado e contido, violação de política de acesso</td>
                    <td className="py-3 px-4">4 horas</td>
                    <td className="py-3 px-4">Equipe de segurança, gestor da área afetada</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">
                      <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">P4 - Baixo</span>
                    </td>
                    <td className="py-3 px-4">Tentativa de phishing, scan de portas, acesso suspeito bloqueado automaticamente</td>
                    <td className="py-3 px-4">24 horas</td>
                    <td className="py-3 px-4">Registro no sistema de tickets de segurança</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">Cláusula 12ª - Processo de Resposta</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>12.1. O processo de resposta a incidentes segue as seguintes fases, conforme NIST SP 800-61:</p>
            <div className="space-y-3 ml-4">
              <p><strong className="text-foreground">Fase 1 - Preparação:</strong> Manutenção de playbooks atualizados para cenários conhecidos, treinamento regular da equipe de resposta (CSIRT), ferramentas e ambientes de investigação preparados, canais de comunicação de emergência testados.</p>
              <p><strong className="text-foreground">Fase 2 - Detecção e Análise:</strong> Triagem do alerta, confirmação do incidente, classificação de severidade, determinação do escopo e impacto, preservação de evidências forenses, ativação do time de resposta conforme severidade.</p>
              <p><strong className="text-foreground">Fase 3 - Contenção:</strong> Contenção imediata (curto prazo) para estancar o dano. Contenção de longo prazo com soluções temporárias enquanto a correção definitiva é desenvolvida. Isolamento de sistemas comprometidos sem destruir evidências.</p>
              <p><strong className="text-foreground">Fase 4 - Erradicação:</strong> Remoção completa da ameaça, correção de vulnerabilidades exploradas, verificação de que não há persistência do atacante, aplicação de patches e hardening adicional.</p>
              <p><strong className="text-foreground">Fase 5 - Recuperação:</strong> Restauração de sistemas e dados a partir de backups verificados, monitoramento intensificado por período mínimo de 30 dias, validação de integridade dos dados restaurados.</p>
              <p><strong className="text-foreground">Fase 6 - Lições Aprendidas:</strong> Post-mortem documentado dentro de 5 dias úteis após resolução. Identificação de root cause, timeline do incidente, ações corretivas e preventivas. Atualização de playbooks, controles e treinamentos.</p>
            </div>

            <p>
              12.2. Em caso de incidentes envolvendo dados pessoais, a comunicação à ANPD e aos titulares afetados
              será realizada pelo Encarregado (DPO) dentro do prazo de 72 (setenta e duas) horas, contendo, no mínimo:
              (i) descrição da natureza dos dados pessoais afetados; (ii) informações sobre os titulares envolvidos;
              (iii) indicação das medidas técnicas e de segurança utilizadas para a proteção dos dados;
              (iv) riscos relacionados ao incidente; (v) medidas que foram ou serão adotadas para reverter ou mitigar
              os efeitos do prejuízo, conforme art. 48 da LGPD.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* CAPÍTULO VIII */}
      <AnimatedSection delay={700}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo VIII - Continuidade de Negócios e Recuperação de Desastres</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 13ª - Plano de Continuidade de Negócios (BCP)</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              13.1. A Cheetah Solutions Network mantém Plano de Continuidade de Negócios (Business Continuity Plan - BCP)
              e Plano de Recuperação de Desastres (Disaster Recovery Plan - DRP) formais, testados e atualizados, com o
              objetivo de garantir a continuidade operacional e a recuperação de serviços críticos em cenários adversos.
            </p>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">13.1.1. Objetivos de Recuperação</h4>
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Serviço</th>
                    <th className="text-left py-3 px-4 font-semibold">RTO (Recovery Time Objective)</th>
                    <th className="text-left py-3 px-4 font-semibold">RPO (Recovery Point Objective)</th>
                    <th className="text-left py-3 px-4 font-semibold">SLA de Disponibilidade</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground text-sm">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">Sistemas de produção (críticos)</td>
                    <td className="py-3 px-4">4 horas</td>
                    <td className="py-3 px-4">1 hora</td>
                    <td className="py-3 px-4">99,9% (uptime anual)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">APIs e microsserviços</td>
                    <td className="py-3 px-4">2 horas</td>
                    <td className="py-3 px-4">30 minutos</td>
                    <td className="py-3 px-4">99,9%</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">Bancos de dados</td>
                    <td className="py-3 px-4">4 horas</td>
                    <td className="py-3 px-4">15 minutos</td>
                    <td className="py-3 px-4">99,95%</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">Serviços de suporte (internos)</td>
                    <td className="py-3 px-4">8 horas</td>
                    <td className="py-3 px-4">4 horas</td>
                    <td className="py-3 px-4">99,5%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">13.1.2. Estratégia de Backup</h4>
            <ul className="space-y-2 ml-4">
              <li>• Backups automatizados seguindo a regra 3-2-1 (3 cópias, 2 mídias diferentes, 1 off-site)</li>
              <li>• Backups de bancos de dados a cada 15 minutos (point-in-time recovery) com retenção de 30 dias</li>
              <li>• Backups completos diários com retenção de 90 dias e backups mensais com retenção de 12 meses</li>
              <li>• Backups criptografados com AES-256 em repouso e durante transferência</li>
              <li>• Testes de restauração realizados mensalmente com validação de integridade (checksum)</li>
              <li>• Armazenamento georredundante em regiões cloud distintas (mínimo 2 regiões geográficas)</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">Cláusula 14ª - Descarte Seguro de Dados e Ativos</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              14.1. O descarte de informações, dados pessoais, mídias de armazenamento e equipamentos segue
              procedimentos formais de destruição segura, em conformidade com o NIST SP 800-88 (Guidelines for
              Media Sanitization) e os requisitos da LGPD para eliminação de dados pessoais:
            </p>
            <ul className="space-y-2 ml-4">
              <li>• <strong className="text-foreground">Dados digitais:</strong> Crypto-shredding (destruição da chave de criptografia) ou sobrescrita com múltiplas passagens conforme padrão DoD 5220.22-M</li>
              <li>• <strong className="text-foreground">Mídias físicas:</strong> Desmagnetização (degaussing) ou destruição física com certificado de destruição emitido por empresa especializada</li>
              <li>• <strong className="text-foreground">Equipamentos:</strong> Sanitização completa antes de descarte, doação ou reciclagem, com registro auditável</li>
              <li>• <strong className="text-foreground">Dados em cloud:</strong> Exclusão via API do provedor com confirmação, revogação de chaves de criptografia e verificação de que dados não persistem em caches ou snapshots</li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

      {/* CAPÍTULO IX */}
      <AnimatedSection delay={800}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo IX - Conformidade, Auditoria e Treinamento</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 15ª - Conformidade Regulatória</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              15.1. A Cheetah Solutions Network mantém programa contínuo de conformidade com as seguintes normas,
              regulamentos e frameworks:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6 text-center">
                  <FileText className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">LGPD / GDPR</h4>
                  <p className="text-sm text-muted-foreground">
                    Conformidade com a Lei Geral de Proteção de Dados e Regulamento Geral de Proteção de Dados da UE, incluindo Relatório de Impacto (RIPD/DPIA)
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6 text-center">
                  <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">ISO 27001 / 27002</h4>
                  <p className="text-sm text-muted-foreground">
                    Práticas alinhadas ao Sistema de Gestão de Segurança da Informação (SGSI) e aos controles de segurança do padrão internacional
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6 text-center">
                  <Database className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">PCI DSS v4.0</h4>
                  <p className="text-sm text-muted-foreground">
                    Conformidade para processamento, armazenamento e transmissão de dados de cartão de crédito e pagamento
                  </p>
                </CardContent>
              </Card>
            </div>

            <p>15.2. Frameworks e padrões adicionais observados:</p>
            <ul className="space-y-2 ml-4">
              <li>• NIST Cybersecurity Framework 2.0 (Identify, Protect, Detect, Respond, Recover, Govern)</li>
              <li>• CIS Controls v8 (Center for Internet Security)</li>
              <li>• OWASP Top 10, OWASP API Security Top 10, OWASP Mobile Top 10</li>
              <li>• Marco Civil da Internet (Lei nº 12.965/2014) e Decreto nº 8.771/2016</li>
              <li>• Lei nº 12.737/2012 (crimes cibernéticos)</li>
              <li>• SOC 2 Type II (princípios de segurança, disponibilidade, integridade de processamento, confidencialidade e privacidade)</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">Cláusula 16ª - Auditorias e Testes de Segurança</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>16.1. A Cheetah Solutions Network realiza as seguintes atividades de auditoria e teste de segurança de forma regular:</p>

            <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl">
              <div className="flex items-start gap-3">
                <Bug className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-3">Calendário de Auditorias e Testes</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong className="text-foreground">Pentest externo:</strong> Anual, conduzido por empresa independente certificada (CREST, OSCP), abrangendo rede, aplicações web, APIs e infraestrutura cloud</li>
                    <li>• <strong className="text-foreground">Red Team Exercise:</strong> Anual, simulação de ataque realístico com escopo amplo, incluindo engenharia social e acesso físico</li>
                    <li>• <strong className="text-foreground">Análise de vulnerabilidades:</strong> Mensal automatizada (Qualys, Nessus, Nuclei) com cobertura de toda a superfície de ataque exposta</li>
                    <li>• <strong className="text-foreground">Auditoria interna de segurança:</strong> Semestral, cobrindo controles de acesso, configurações, políticas e procedimentos</li>
                    <li>• <strong className="text-foreground">Revisão de código de segurança:</strong> Contínua via SAST/SCA no CI/CD, com revisão manual para componentes críticos</li>
                    <li>• <strong className="text-foreground">Tabletop exercises:</strong> Trimestral, simulação de cenários de incidente com participação da liderança</li>
                    <li>• <strong className="text-foreground">Bug Bounty:</strong> Programa ativo para pesquisadores de segurança, com escopo definido e recompensas proporcionais à severidade</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">Cláusula 17ª - Treinamento e Conscientização</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              17.1. A Cheetah Solutions Network mantém programa contínuo de treinamento e conscientização em segurança
              da informação para todos os colaboradores, prestadores de serviço e parceiros com acesso a sistemas:
            </p>
            <ul className="space-y-2 ml-4">
              <li>• Treinamento de integração (onboarding) obrigatório sobre políticas de segurança, classificação de informações e uso aceitável</li>
              <li>• Treinamentos específicos por função (desenvolvedores, operações, suporte, gestão)</li>
              <li>• Simulações de phishing mensais com métricas de taxa de clique e reporte</li>
              <li>• Workshops trimestrais sobre ameaças emergentes, novas regulamentações e lições aprendidas</li>
              <li>• Certificação anual obrigatória com avaliação de conhecimento</li>
              <li>• Canal confidencial para reporte de suspeitas de violação de segurança ou de políticas</li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

      {/* CAPÍTULO X */}
      <AnimatedSection delay={900}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo X - Disposições Finais</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 18ª - Responsabilidades e Sanções</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              18.1. Todos os colaboradores, prestadores de serviço e terceiros com acesso aos ativos de informação
              da Cheetah Solutions Network são responsáveis por conhecer, cumprir e fazer cumprir as disposições
              desta Política e dos documentos complementares.
            </p>
            <p>
              18.2. O descumprimento desta Política pode resultar nas seguintes sanções, aplicadas conforme a
              gravidade da violação, o grau de culpa e o impacto causado:
            </p>
            <ul className="space-y-2 ml-4">
              <li>• <strong className="text-foreground">Advertência formal:</strong> Para violações de baixa gravidade, sem comprometimento efetivo de dados ou sistemas</li>
              <li>• <strong className="text-foreground">Suspensão de acesso:</strong> Revogação temporária de permissões até conclusão de investigação interna</li>
              <li>• <strong className="text-foreground">Rescisão contratual:</strong> Para violações graves ou reincidentes, sem prejuízo de indenização por danos</li>
              <li>• <strong className="text-foreground">Responsabilização civil e criminal:</strong> Encaminhamento às autoridades competentes quando a violação configurar ilícito penal (Lei nº 12.737/2012, Lei nº 9.983/2000) ou responsabilidade civil (arts. 186 e 927 do Código Civil)</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">Cláusula 19ª - Alterações e Atualizações</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              19.1. A Cheetah Solutions Network reserva-se o direito de alterar, atualizar ou revisar esta Política a
              qualquer momento, sem necessidade de consentimento prévio, garantindo que as partes interessadas serão
              notificadas sobre alterações materiais com antecedência mínima de 30 (trinta) dias.
            </p>
            <p>
              19.2. As alterações entram em vigor na data de publicação da versão atualizada, salvo disposição em
              contrário. A continuidade do acesso aos sistemas e serviços após a publicação constitui aceitação
              tácita das alterações realizadas.
            </p>
            <p>
              19.3. As versões anteriores desta Política ficam arquivadas e disponíveis para consulta mediante
              solicitação fundamentada à equipe de segurança.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">Cláusula 20ª - Legislação Aplicável e Foro</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              20.1. Esta Política é regida pelas leis da República Federativa do Brasil, em especial pela Lei Geral
              de Proteção de Dados (Lei nº 13.709/2018), Marco Civil da Internet (Lei nº 12.965/2014), Decreto
              nº 8.771/2016, Lei nº 12.737/2012 e Código Civil (Lei nº 10.406/2002).
            </p>
            <p>
              20.2. Fica eleito o Foro da Comarca de Recife, Estado de Pernambuco, para dirimir quaisquer questões
              oriundas desta Política, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">Cláusula 21ª - Contato</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>21.1. Para dúvidas, sugestões, comunicação de incidentes ou solicitações relacionadas à segurança da informação:</p>
            <div className="p-5 bg-card/50 rounded-lg border border-border/50 space-y-2">
              <p><strong className="text-foreground">Cheetah Solutions Network</strong></p>
              <p>Sede Operacional: Recife, Pernambuco - Brasil</p>
              <p><strong className="text-foreground">E-mail de Segurança:</strong> security@cheetahnetwork.com.br</p>
              <p><strong className="text-foreground">E-mail Institucional:</strong> contatocheetahsolutions@gmail.com</p>
              <p><strong className="text-foreground">DPO:</strong> dpo@cheetahnetwork.com.br</p>
              <p><strong className="text-foreground">Website:</strong> https://cheetahnetwork.com.br</p>
            </div>
          </div>

          {/* Rodapé do documento */}
          <div className="mt-12 p-6 bg-card/30 rounded-lg border border-border/50">
            <div className="text-center space-y-2 text-sm text-muted-foreground">
              <p><strong className="text-foreground">Documento:</strong> Política de Segurança da Informação - Cheetah Solutions Network</p>
              <p><strong className="text-foreground">Versão:</strong> 5.0 · <strong className="text-foreground">Classificação:</strong> C1 - Pública</p>
              <p><strong className="text-foreground">Vigência:</strong> A partir de 01 de maio de 2026</p>
              <p><strong className="text-foreground">Próxima Revisão:</strong> Novembro de 2026</p>
              <p className="mt-4 text-xs">
                Este documento integra o corpo normativo institucional da Cheetah Solutions Network.
                Reprodução parcial ou total sem autorização prévia é expressamente vedada.
                © 2024-2026 Cheetah Solutions Network. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </PolicyLayout>
  );
};

export default SecurityPolicy;
