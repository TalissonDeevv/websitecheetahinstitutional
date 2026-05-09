import { Headphones, Clock, Mail, CheckCircle, AlertTriangle, Users, FileText, Scale, Shield, Layers, BarChart3, Settings } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PolicyLayout from "@/components/legal/PolicyLayout";
import SEO from "@/components/SEO";

const ServicePolicy = () => {
  return (
    <PolicyLayout title="Política de Atendimento e Suporte Técnico" lastUpdated="Maio de 2026">
      <SEO
        title="Política de Atendimento - Cheetah Solutions Network"
        description="Política de Atendimento e Suporte Técnico da Cheetah Solutions Network. Canais oficiais, SLAs, priorização e escalonamento."
        canonical="/diretrizes/atendimento"
      />

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
                <p><strong className="text-foreground">Fundamentos Legais e Normativos:</strong> Lei n. 8.078/1990 (Código de Defesa do Consumidor) · Lei n. 13.709/2018 (LGPD) · Lei n. 12.965/2014 (Marco Civil da Internet) · Decreto n. 7.962/2013 (Comércio Eletrônico) · Norma ABNT NBR ISO/IEC 20000-1:2020 (Gestão de Serviços de TI) · ITIL 4 Foundation · ISO/IEC 27001:2022.</p>
                <p><strong className="text-foreground">Versão:</strong> 4.0 · <strong className="text-foreground">Vigência:</strong> A partir de 01 de maio de 2026 · <strong className="text-foreground">Revisão programada:</strong> Semestral.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo I - Disposições Preliminares</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 1 - Objeto e Finalidade</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>1.1. Esta Política de Atendimento e Suporte Técnico estabelece as diretrizes, canais oficiais, prazos e procedimentos adotados pela Cheetah Solutions Network para o atendimento de clientes ativos, parceiros e usuários de seus serviços.</p>
            <p>1.2. O atendimento técnico é destinado exclusivamente a clientes com contratos vigentes ou projetos ativos junto à Cheetah Solutions Network. Solicitações comerciais e novos orçamentos devem ser direcionados aos canais comerciais correspondentes.</p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 2 - Definições</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border/50 text-sm">
              <thead>
                <tr className="bg-card/50">
                  <th className="border border-border/50 p-3 text-left font-semibold">Termo</th>
                  <th className="border border-border/50 p-3 text-left font-semibold">Definição</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr><td className="border border-border/50 p-3 font-medium">SLA</td><td className="border border-border/50 p-3">Service Level Agreement: acordo formal de nível de serviço com prazos máximos de resposta e resolução</td></tr>
                <tr><td className="border border-border/50 p-3 font-medium">Tempo de Resposta</td><td className="border border-border/50 p-3">Intervalo entre a abertura do chamado e a primeira manifestação técnica oficial</td></tr>
                <tr><td className="border border-border/50 p-3 font-medium">Tempo de Resolução</td><td className="border border-border/50 p-3">Intervalo entre a abertura do chamado e a entrega da solução definitiva ou contorno aprovado</td></tr>
                <tr><td className="border border-border/50 p-3 font-medium">Severidade</td><td className="border border-border/50 p-3">Classificação do impacto técnico e operacional do incidente reportado</td></tr>
                <tr><td className="border border-border/50 p-3 font-medium">Escalonamento</td><td className="border border-border/50 p-3">Procedimento de elevação hierárquica de um chamado por descumprimento de SLA ou complexidade técnica</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo II - Canais Oficiais de Atendimento</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 3 - Canais Reconhecidos</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>3.1. São considerados canais oficiais de atendimento da Cheetah Solutions Network, com validade técnica e contratual:</p>
            <ul className="space-y-2 ml-4">
              <li>a) <strong className="text-foreground">E-mail institucional:</strong> contatocheetahsolutions@gmail.com, utilizado como canal primário e meio de registro formal de demandas;</li>
              <li>b) <strong className="text-foreground">Portal do Cliente:</strong> ambiente autenticado para abertura, acompanhamento e histórico de chamados;</li>
              <li>c) <strong className="text-foreground">Canais privados de projeto:</strong> servidores ou grupos dedicados estabelecidos contratualmente com cada cliente.</li>
            </ul>
            <p>3.2. Solicitações realizadas por meios não oficiais (redes sociais públicas, mensagens diretas a colaboradores, comentários em postagens) não geram obrigação de atendimento e não são contabilizadas para fins de SLA.</p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 4 - Horário de Funcionamento</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>4.1. O atendimento padrão funciona de segunda a sexta-feira, das 9h00 às 18h00 (horário de Brasília, UTC-3), excetuando-se feriados nacionais oficiais.</p>
            <p>4.2. Demandas registradas fora do horário comercial são protocoladas automaticamente e iniciam o cômputo de SLA no próximo dia útil, salvo nos casos de Severidade Crítica (Cláusula 6), que possuem regime de plantão técnico.</p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo III - Classificação e SLA</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 5 - Matriz de Severidade</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border/50 text-sm">
              <thead>
                <tr className="bg-card/50">
                  <th className="border border-border/50 p-3 text-left font-semibold">Nível</th>
                  <th className="border border-border/50 p-3 text-left font-semibold">Descrição</th>
                  <th className="border border-border/50 p-3 text-left font-semibold">Resposta</th>
                  <th className="border border-border/50 p-3 text-left font-semibold">Resolução</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr><td className="border border-border/50 p-3 font-medium">S1 - Crítica</td><td className="border border-border/50 p-3">Sistema produtivo indisponível ou comprometimento de segurança</td><td className="border border-border/50 p-3">Até 1h</td><td className="border border-border/50 p-3">Até 8h</td></tr>
                <tr><td className="border border-border/50 p-3 font-medium">S2 - Alta</td><td className="border border-border/50 p-3">Funcionalidade essencial indisponível, sem contorno viável</td><td className="border border-border/50 p-3">Até 4h úteis</td><td className="border border-border/50 p-3">Até 24h úteis</td></tr>
                <tr><td className="border border-border/50 p-3 font-medium">S3 - Média</td><td className="border border-border/50 p-3">Falha pontual com contorno operacional disponível</td><td className="border border-border/50 p-3">Até 8h úteis</td><td className="border border-border/50 p-3">Até 5 dias úteis</td></tr>
                <tr><td className="border border-border/50 p-3 font-medium">S4 - Baixa</td><td className="border border-border/50 p-3">Dúvidas, melhorias e ajustes não críticos</td><td className="border border-border/50 p-3">Até 24h úteis</td><td className="border border-border/50 p-3">Conforme planejamento</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 6 - Plantão de Severidade Crítica</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>6.1. Clientes com contratos que prevejam suporte estendido podem acionar plantão técnico para incidentes de Severidade S1 fora do horário comercial, mediante uso do canal de emergência designado contratualmente.</p>
            <p>6.2. O acionamento indevido do plantão (incidentes que não se enquadrem em S1) poderá ensejar reclassificação do chamado e cobrança adicional conforme tabela vigente.</p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo IV - Procedimentos e Escalonamento</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 7 - Abertura de Chamado</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>7.1. Para abertura formal de chamado, o cliente deverá fornecer:</p>
            <ul className="space-y-2 ml-4">
              <li>a) Identificação do projeto ou ambiente afetado;</li>
              <li>b) Descrição objetiva do comportamento observado e do comportamento esperado;</li>
              <li>c) Passos para reprodução, quando aplicável;</li>
              <li>d) Evidências (logs, capturas de tela, horários e usuários afetados);</li>
              <li>e) Indicação de severidade percebida.</li>
            </ul>
            <p>7.2. A Cheetah Solutions Network reserva-se o direito de reclassificar a severidade do chamado mediante análise técnica fundamentada.</p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 8 - Escalonamento</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>8.1. O cliente poderá solicitar escalonamento nas seguintes hipóteses:</p>
            <ul className="space-y-2 ml-4">
              <li>a) Descumprimento de SLA de resposta ou resolução;</li>
              <li>b) Insatisfação fundamentada com a condução técnica do chamado;</li>
              <li>c) Necessidade de revisão de prioridade por evento superveniente.</li>
            </ul>
            <p>8.2. O escalonamento é processado em até 1 dia útil pela liderança técnica, com retorno formal sobre o plano de ação adotado.</p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 9 - Encerramento e Reabertura</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>9.1. O chamado será encerrado mediante confirmação expressa do cliente ou após 5 dias úteis de inatividade do solicitante, contados da última manifestação técnica.</p>
            <p>9.2. Chamados encerrados podem ser reabertos em até 15 dias corridos, desde que relacionados ao mesmo escopo originário.</p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo V - Disposições Finais</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 10 - Limitações de Atendimento</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>10.1. O suporte técnico não contempla, salvo previsão contratual específica:</p>
            <ul className="space-y-2 ml-4">
              <li>a) Treinamento contínuo de usuários finais;</li>
              <li>b) Manutenção corretiva de alterações realizadas pelo cliente fora do escopo entregue;</li>
              <li>c) Integrações com sistemas de terceiros não previstas no projeto;</li>
              <li>d) Recuperação de dados de ambientes não geridos pela Cheetah.</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 11 - Confidencialidade</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>11.1. Todas as informações compartilhadas durante o atendimento são tratadas em regime de confidencialidade, observados os termos da Política de Privacidade e da Política de Segurança da Informação.</p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 12 - Vigência e Atualização</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>12.1. Esta Política entra em vigor na data de sua publicação e poderá ser revisada semestralmente ou mediante alteração relevante nos serviços prestados.</p>
            <p>12.2. Dúvidas sobre esta Política devem ser encaminhadas a <strong className="text-foreground">contatocheetahsolutions@gmail.com</strong>. Informações institucionais permanecem disponíveis em <strong className="text-foreground">https://cheetahsolutions.com.br</strong>.</p>
          </div>
        </section>
      </AnimatedSection>
    </PolicyLayout>
  );
};

export default ServicePolicy;
