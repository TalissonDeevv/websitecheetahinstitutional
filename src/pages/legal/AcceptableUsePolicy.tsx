import { Users, Ban, CheckCircle, Shield, Scale, MessageSquare, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import PolicyLayout from "@/components/legal/PolicyLayout";
import SEO from "@/components/SEO";

const AcceptableUsePolicy = () => {
  return (
    <PolicyLayout title="Política de Uso Aceitável" lastUpdated="Janeiro de 2025">
      <SEO
        title="Política de Uso Aceitável - Cheetah Solutions Network"
        description="Política de Uso Aceitável da Cheetah Solutions Network. Diretrizes de conduta, atividades proibidas, sanções e responsabilidades."
        canonical="/diretrizes/uso-aceitavel"
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
                <p><strong className="text-foreground">Fundamentos Legais:</strong> Lei n. 13.709/2018 (LGPD) · Lei n. 12.965/2014 (Marco Civil da Internet) · Lei n. 12.737/2012 (Lei Carolina Dieckmann) · Lei n. 9.609/1998 (Lei de Software) · Lei n. 9.610/1998 (Lei de Direitos Autorais) · Código Civil (Lei n. 10.406/2002) · CDC (Lei n. 8.078/1990) · ISO/IEC 27001:2022 · ISO/IEC 27002:2022.</p>
                <p><strong className="text-foreground">Versão:</strong> 3.0 · <strong className="text-foreground">Vigência:</strong> A partir de 01 de janeiro de 2025 · <strong className="text-foreground">Revisão programada:</strong> Semestral ou mediante alteração legislativa relevante.</p>
              </div>
            </div>
          </div>

          {/* CAPÍTULO I */}
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo I - Disposições Preliminares</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 1 - Objeto e Finalidade</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              1.1. A presente Política de Uso Aceitável (PUA) estabelece as normas de conduta,
              limites operacionais e obrigações aplicáveis a todos os usuários dos serviços,
              plataformas e canais de comunicação da Cheetah Solutions Network.
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 2 - Escopo de Aplicação</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              2.1. Esta política aplica-se a todas as pessoas físicas e jurídicas que utilizem,
              acessem ou interajam com os serviços da Cheetah Solutions Network, incluindo:
            </p>
            <ul className="space-y-2 ml-4">
              <li>a) Clientes contratantes de serviços de desenvolvimento, consultoria ou infraestrutura;</li>
              <li>b) Usuários finais de sistemas, plataformas e aplicações desenvolvidas;</li>
              <li>c) Participantes de canais de comunicação oficiais, incluindo Discord e plataformas afiliadas;</li>
              <li>d) Visitantes do website institucional e subdomínios;</li>
              <li>e) Membros da comunidade e colaboradores do ecossistema Cheetah.</li>
            </ul>
            <p>
              2.2. Ao acessar ou utilizar qualquer serviço da Cheetah Solutions Network, o usuário
              declara ter lido, compreendido e aceito integralmente os termos desta política.
              O desconhecimento das normas aqui estabelecidas não exime o usuário de suas obrigações
              e das consequências decorrentes de eventuais violações.
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 3 - Definições</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border/50 text-sm">
              <thead>
                <tr className="bg-card/50">
                  <th className="border border-border/50 p-3 text-left font-semibold">Termo</th>
                  <th className="border border-border/50 p-3 text-left font-semibold">Definição</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr><td className="border border-border/50 p-3 font-medium">Usuário</td><td className="border border-border/50 p-3">Qualquer pessoa que acesse, utilize ou interaja com os serviços</td></tr>
                <tr><td className="border border-border/50 p-3 font-medium">Serviços</td><td className="border border-border/50 p-3">Conjunto de soluções oferecidas via Cheetah OPS Framework</td></tr>
                <tr><td className="border border-border/50 p-3 font-medium">Plataforma</td><td className="border border-border/50 p-3">Sistemas, websites e aplicações operados pela Cheetah Solutions Network</td></tr>
                <tr><td className="border border-border/50 p-3 font-medium">Conteúdo</td><td className="border border-border/50 p-3">Qualquer material publicado, transmitido ou armazenado nos serviços</td></tr>
                <tr><td className="border border-border/50 p-3 font-medium">Incidente</td><td className="border border-border/50 p-3">Qualquer evento que viole ou ameace violar as diretrizes desta política</td></tr>
                <tr><td className="border border-border/50 p-3 font-medium">Abuso</td><td className="border border-border/50 p-3">Uso dos serviços de forma contrária às normas, leis ou boas práticas</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </AnimatedSection>

      {/* CAPÍTULO II */}
      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo II - Usos Permitidos</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 4 - Atividades Autorizadas</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              4.1. Os serviços da Cheetah Solutions Network podem ser utilizados exclusivamente para
              finalidades lícitas, éticas e compatíveis com os objetivos para os quais foram contratados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <Card className="bg-card/50 border-green-500/30">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-semibold text-foreground">Operações Comerciais Legítimas</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Operação de negócios, e-commerce, SaaS e serviços digitais conforme legislação aplicável
                  e escopo contratual definido
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-green-500/30">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-semibold text-foreground">Desenvolvimento de Software</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Criação, teste, deploy e manutenção de aplicações, APIs e integrações dentro dos
                  parâmetros de recursos contratados
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-green-500/30">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-semibold text-foreground">Armazenamento de Dados</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Dados próprios ou de terceiros com base legal adequada (consentimento, contrato
                  ou legítimo interesse), respeitando classificação e retenção
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-green-500/30">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-semibold text-foreground">Comunicação e Colaboração</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Interação respeitosa e construtiva através dos canais oficiais, troca de
                  conhecimento técnico e networking profissional
                </p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 5 - Limites de Utilização</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              5.1. O uso dos serviços está condicionado aos limites de recursos definidos
              contratualmente, incluindo capacidade de processamento, armazenamento, largura
              de banda e número de requisições.
            </p>
            <p>
              5.2. A Cheetah Solutions Network reserva-se o direito de implementar mecanismos
              de rate limiting, throttling e fair use para garantir a estabilidade operacional
              e a qualidade de serviço para todos os usuários.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* CAPÍTULO III */}
      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo III - Condutas Proibidas</h2>

          <div className="p-6 bg-destructive/10 border border-destructive/20 rounded-xl mb-8">
            <div className="flex items-start gap-3">
              <Ban className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Advertência Legal</h4>
                <p className="text-muted-foreground text-sm">
                  As atividades listadas neste capítulo constituem violações graves e poderão
                  resultar em suspensão imediata dos serviços, rescisão contratual,
                  responsabilização civil e criminal, além de comunicação às autoridades competentes,
                  nos termos do art. 7 do Marco Civil da Internet e art. 52 da LGPD.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 6 - Atividades Ilícitas</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>6.1. É expressamente proibida a utilização dos serviços para:</p>
            <ul className="space-y-2 ml-4">
              <li>a) Prática de qualquer ato contrário à legislação federal, estadual ou municipal brasileira;</li>
              <li>b) Fraude, estelionato, lavagem de capitais ou financiamento de atividades ilícitas (Lei n. 9.613/1998);</li>
              <li>c) Distribuição, armazenamento ou facilitação de acesso a conteúdo ilegal, incluindo material de exploração infantil (ECA - Lei n. 8.069/1990);</li>
              <li>d) Violação de propriedade intelectual, incluindo pirataria, contrafação, reprodução não autorizada de software ou conteúdo protegido;</li>
              <li>e) Acesso não autorizado a sistemas, redes ou dados de terceiros (art. 154-A do Código Penal);</li>
              <li>f) Interceptação ilícita de comunicações ou dados (Lei n. 9.296/1996).</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 7 - Abuso de Recursos e Infraestrutura</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>7.1. São vedadas as seguintes práticas:</p>
            <ul className="space-y-2 ml-4">
              <li>a) Mineração de criptomoedas ou execução de processos de computação intensiva sem autorização prévia e formal;</li>
              <li>b) Ataques de negação de serviço (DoS/DDoS), amplificação DNS, SYN flood ou qualquer técnica de saturação de recursos;</li>
              <li>c) Envio de spam, phishing, e-mails não solicitados ou comunicações fraudulentas;</li>
              <li>d) Utilização de recursos para comprometer, escanear ou atacar sistemas de terceiros;</li>
              <li>e) Consumo abusivo de recursos que impacte negativamente a performance para outros clientes;</li>
              <li>f) Engenharia reversa, decompilação, desassemblagem ou tentativa de acesso ao código-fonte dos sistemas proprietários;</li>
              <li>g) Criação de contas múltiplas para burlar limites de recursos ou políticas de fair use;</li>
              <li>h) Uso de bots automatizados sem autorização prévia.</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 8 - Conteúdo Inadequado e Condutas Antiéticas</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>8.1. É proibida a publicação, transmissão ou armazenamento de:</p>
            <ul className="space-y-2 ml-4">
              <li>a) Discurso de ódio, discriminação por raça, gênero, orientação sexual, religião, nacionalidade ou qualquer outra característica protegida;</li>
              <li>b) Assédio, bullying, stalking, intimidação ou ameaças;</li>
              <li>c) Conteúdo sexualmente explícito ou pornográfico sem as devidas autorizações legais;</li>
              <li>d) Desinformação deliberada (fake news) com potencial de causar danos a terceiros ou à ordem pública;</li>
              <li>e) Conteúdo que viole direitos de imagem, honra, privacidade ou intimidade de terceiros;</li>
              <li>f) Material que incite violência, automutilação ou atividades perigosas.</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 9 - Violações de Segurança da Informação</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>9.1. Constituem violações graves:</p>
            <ul className="space-y-2 ml-4">
              <li>a) Tentativas de escalação de privilégios ou acesso não autorizado a dados e sistemas;</li>
              <li>b) Distribuição de malware, ransomware, spyware, rootkits ou qualquer código malicioso;</li>
              <li>c) Engenharia social, phishing, pretexting ou qualquer técnica de manipulação para obter informações confidenciais;</li>
              <li>d) Compartilhamento, venda ou exposição de credenciais de acesso;</li>
              <li>e) Bypass, desativação ou circumvenção de controles de segurança;</li>
              <li>f) Exploração de vulnerabilidades conhecidas ou zero-day sem notificação responsável;</li>
              <li>g) Exfiltração de dados ou cópia não autorizada de informações confidenciais.</li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

      {/* CAPÍTULO IV */}
      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo IV - Regime Sancionatório</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 10 - Classificação de Infrações</h3>
          <div className="space-y-4 text-muted-foreground mb-6">
            <p>10.1. As infrações a esta política são classificadas conforme a seguinte escala de gravidade:</p>
          </div>

          <div className="space-y-4 mb-8">
            <Card className="bg-card/50 border-yellow-500/30">
              <CardContent className="p-4">
                <h4 className="font-semibold text-yellow-500 mb-2">Nível 1 - Infração Leve</h4>
                <p className="text-sm text-muted-foreground">
                  Advertência formal por escrito. Prazo de 48 (quarenta e oito) horas para correção
                  da conduta. Primeira ocorrência de violações de baixo impacto que não comprometam
                  a segurança ou a integridade dos serviços.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-orange-500/30">
              <CardContent className="p-4">
                <h4 className="font-semibold text-orange-500 mb-2">Nível 2 - Infração Moderada</h4>
                <p className="text-sm text-muted-foreground">
                  Suspensão temporária de 7 (sete) a 30 (trinta) dias corridos. Aplicável em caso
                  de reincidência ou violações que afetem parcialmente a operação. Reativação
                  condicionada à assinatura de termo de compromisso.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-red-500/30">
              <CardContent className="p-4">
                <h4 className="font-semibold text-red-500 mb-2">Nível 3 - Infração Grave</h4>
                <p className="text-sm text-muted-foreground">
                  Suspensão imediata sem aviso prévio. Instauração de processo interno de apuração
                  com prazo de 15 (quinze) dias úteis. Violações que comprometam a segurança,
                  integridade ou disponibilidade dos serviços.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-destructive/30">
              <CardContent className="p-4">
                <h4 className="font-semibold text-destructive mb-2">Nível 4 - Infração Gravíssima</h4>
                <p className="text-sm text-muted-foreground">
                  Rescisão contratual imediata e definitiva, sem direito a reembolso proporcional.
                  Comunicação às autoridades competentes (Polícia Federal, Ministério Público, ANPD).
                  Reserva de direito de ação judicial para reparação de danos.
                </p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 11 - Processo Administrativo de Apuração</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>11.1. O processo de apuração de infrações seguirá as seguintes etapas:</p>
            <ol className="space-y-2 ml-4">
              <li>I - Detecção: Identificação por monitoramento automatizado, denúncia ou auditoria interna;</li>
              <li>II - Registro: Documentação da ocorrência com coleta e preservação de evidências digitais;</li>
              <li>III - Notificação: Comunicação formal ao usuário com descrição da infração identificada;</li>
              <li>IV - Defesa: Prazo de 5 (cinco) dias úteis para apresentação de defesa escrita;</li>
              <li>V - Deliberação: Análise das evidências e defesa por comitê interno de compliance;</li>
              <li>VI - Decisão: Aplicação da sanção proporcional à gravidade da infração;</li>
              <li>VII - Recurso: Possibilidade de recurso em instância superior no prazo de 10 (dez) dias úteis.</li>
            </ol>
            <p>
              11.2. Em casos de infrações de Nível 3 e 4, a Cheetah Solutions Network poderá adotar
              medidas cautelares imediatas, incluindo suspensão preventiva dos serviços, independentemente
              da conclusão do processo administrativo, nos termos do art. 300 do CPC.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* CAPÍTULO V */}
      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo V - Responsabilidades do Usuário</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 12 - Segurança de Credenciais</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>12.1. O usuário é integralmente responsável pela guarda e sigilo de suas credenciais de acesso e obriga-se a:</p>
            <ul className="space-y-2 ml-4">
              <li>a) Utilizar senhas com complexidade mínima de 12 caracteres, combinando letras maiúsculas, minúsculas, números e caracteres especiais;</li>
              <li>b) Ativar autenticação multifator (MFA) sempre que disponível;</li>
              <li>c) Não reutilizar senhas entre serviços distintos;</li>
              <li>d) Notificar imediatamente a Cheetah Solutions Network em caso de suspeita de comprometimento;</li>
              <li>e) Não compartilhar contas, tokens de acesso ou chaves de API com terceiros sem autorização;</li>
              <li>f) Realizar rotação periódica de credenciais conforme recomendação de segurança.</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 13 - Responsabilidade sobre Conteúdo</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>13.1. O usuário assume responsabilidade integral pelo conteúdo que publica, transmite, armazena ou disponibiliza através dos serviços, obrigando-se a:</p>
            <ul className="space-y-2 ml-4">
              <li>a) Garantir conformidade com a legislação de propriedade intelectual e direitos autorais;</li>
              <li>b) Obter consentimentos e bases legais necessárias para tratamento de dados pessoais de terceiros;</li>
              <li>c) Manter backups atualizados de dados críticos sob sua responsabilidade;</li>
              <li>d) Classificar adequadamente a sensibilidade dos dados armazenados;</li>
              <li>e) Implementar controles de acesso compatíveis com o nível de classificação dos dados.</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 14 - Uso Razoável de Recursos</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>14.1. O usuário compromete-se a utilizar os recursos computacionais de forma eficiente e razoável, incluindo:</p>
            <ul className="space-y-2 ml-4">
              <li>a) Respeitar os limites de recursos definidos no plano contratado;</li>
              <li>b) Não explorar vulnerabilidades, bugs ou falhas de configuração;</li>
              <li>c) Reportar imediatamente qualquer vulnerabilidade identificada (disclosure responsável);</li>
              <li>d) Seguir as melhores práticas de desenvolvimento seguro (OWASP Top 10, SANS Top 25);</li>
              <li>e) Não utilizar os serviços como proxy, relay ou ponto de redistribuição não autorizado.</li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

      {/* CAPÍTULO VI */}
      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo VI - Monitoramento e Fiscalização</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 15 - Direito de Monitoramento</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              15.1. A Cheetah Solutions Network reserva-se o direito de monitorar o uso dos serviços
              para garantir conformidade com esta política, nos termos do art. 15 do Marco Civil da
              Internet e em conformidade com o art. 7 da LGPD.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <Card className="bg-card/50 border-primary/20">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Eye className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">Dados Monitorados</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Logs de acesso e autenticação</li>
                  <li>• Consumo de recursos (CPU, RAM, banda, I/O)</li>
                  <li>• Padrões de tráfego e volumetria de requisições</li>
                  <li>• Alertas de sistemas SIEM e IDS/IPS</li>
                  <li>• Eventos de segurança e anomalias</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-green-500/20">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="font-semibold text-foreground">Dados Não Monitorados</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Conteúdo de comunicações privadas</li>
                  <li>• Dados pessoais de clientes (exceto em investigações formais)</li>
                  <li>• Código-fonte proprietário do cliente</li>
                  <li>• Informações protegidas por sigilo profissional</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 16 - Transparência e Relatórios</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              16.1. A Cheetah Solutions Network compromete-se a publicar relatórios anuais de
              transparência contendo dados agregados sobre incidentes de segurança, ações corretivas
              adotadas e métricas de conformidade, preservando a privacidade e o sigilo dos envolvidos.
            </p>
            <p>
              16.2. O usuário poderá solicitar, mediante requisição formal, informações sobre o
              monitoramento de suas atividades, nos termos do art. 18 da LGPD.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* CAPÍTULO VII */}
      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo VII - Canal de Denúncias</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 17 - Procedimento para Denúncias</h3>

          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <MessageSquare className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-4 text-foreground">Reporte de Violações</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Qualquer pessoa que identificar condutas em violação a esta política deve reportar imediatamente:</p>
                    <ul className="space-y-2">
                      <li><strong className="text-foreground">E-mail:</strong> contatocheetahsolutions@gmail.com</li>
                      <li><strong className="text-foreground">Assunto obrigatório:</strong> [ABUSE] - Descrição breve da violação</li>
                      <li><strong className="text-foreground">SLA de resposta:</strong> Até 48 (quarenta e oito) horas úteis</li>
                      <li><strong className="text-foreground">SLA de resolução:</strong> Até 15 (quinze) dias úteis</li>
                    </ul>
                    <p className="text-sm mt-4">
                      17.2. Denúncias podem ser realizadas de forma anônima. A Cheetah Solutions Network
                      garante proteção integral contra retaliação para denunciantes de boa-fé.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </AnimatedSection>

      {/* CAPÍTULO VIII */}
      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo VIII - Propriedade Intelectual e Licenciamento</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 18 - Direitos de Propriedade</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              18.1. Todos os sistemas, metodologias, frameworks, documentação técnica e materiais
              produzidos pela Cheetah Solutions Network, incluindo o Cheetah OPS Framework, são
              de propriedade exclusiva da empresa, protegidos pela Lei n. 9.609/1998 (Lei de Software)
              e Lei n. 9.610/1998 (Lei de Direitos Autorais).
            </p>
            <p>
              18.2. A utilização dos serviços não confere ao usuário qualquer direito de propriedade
              sobre a tecnologia subjacente, algoritmos, designs, marcas ou know-how da Cheetah Solutions Network.
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 19 - Licença de Uso</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              19.1. A Cheetah Solutions Network concede ao usuário uma licença limitada, não exclusiva,
              intransferível e revogável para utilização dos serviços durante a vigência contratual,
              exclusivamente para as finalidades acordadas.
            </p>
            <p>
              19.2. É vedada a sublicença, cessão ou transferência da licença de uso sem autorização
              prévia e expressa por escrito.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* CAPÍTULO IX */}
      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo IX - Limitação de Responsabilidade</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 20 - Exclusões de Responsabilidade</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>20.1. A Cheetah Solutions Network não se responsabiliza por:</p>
            <ul className="space-y-2 ml-4">
              <li>a) Conteúdo publicado, transmitido ou armazenado pelo usuário nos serviços;</li>
              <li>b) Danos decorrentes do uso indevido das credenciais de acesso pelo usuário;</li>
              <li>c) Perdas resultantes de falhas em serviços de terceiros integrados pelo usuário;</li>
              <li>d) Interrupções decorrentes de caso fortuito, força maior ou manutenções programadas previamente comunicadas;</li>
              <li>e) Decisões comerciais ou operacionais tomadas com base em dados processados pelos serviços.</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 21 - Indenização</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>21.1. O usuário concorda em indenizar e isentar a Cheetah Solutions Network de quaisquer perdas, danos, custos e despesas (incluindo honorários advocatícios) decorrentes de:</p>
            <ul className="space-y-2 ml-4">
              <li>a) Violação desta Política de Uso Aceitável;</li>
              <li>b) Reclamações de terceiros relacionadas ao conteúdo ou conduta do usuário;</li>
              <li>c) Uso dos serviços em desacordo com a legislação aplicável;</li>
              <li>d) Violação de direitos de propriedade intelectual de terceiros.</li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

      {/* CAPÍTULO X */}
      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo X - Disposições Finais</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 22 - Atualizações e Vigência</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              22.1. Esta política poderá ser atualizada periodicamente, a critério exclusivo da
              Cheetah Solutions Network. Alterações substanciais serão comunicadas com antecedência
              mínima de 15 (quinze) dias através dos canais oficiais.
            </p>
            <p>
              22.2. A continuidade do uso dos serviços após a publicação de alterações constitui
              aceitação tácita dos novos termos, nos termos do art. 111 do Código Civil.
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 23 - Prevalência e Independência</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              23.1. Em caso de conflito entre esta política e o contrato de prestação de serviços,
              prevalecerão as disposições do contrato, salvo quando a presente política estabelecer
              condições mais restritivas em matéria de segurança da informação.
            </p>
            <p>
              23.2. A eventual invalidade ou nulidade de qualquer cláusula não comprometerá a validade
              e eficácia das demais disposições (princípio da preservação contratual).
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 24 - Foro Competente</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              24.1. Fica eleito o foro da Comarca de Recife, Estado de Pernambuco, para dirimir
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
              <Scale className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Contato para Questões sobre esta Política</h3>
              <div className="text-muted-foreground space-y-2">
                <p>Para dúvidas, esclarecimentos ou solicitações, entre em contato:</p>
                <p><strong className="text-foreground">E-mail:</strong> contatocheetahsolutions@gmail.com</p>
                <p><strong className="text-foreground">Website:</strong> https://cheetahsolutions.com.br</p>
                <p className="text-sm mt-4">
                  Nosso Encarregado de Proteção de Dados (DPO) está à disposição para atender
                  todas as solicitações relacionadas a privacidade, segurança e conduta.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </AnimatedSection>
    </PolicyLayout>
  );
};

export default AcceptableUsePolicy;
