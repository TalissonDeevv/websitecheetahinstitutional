import { RefreshCw, CheckCircle, Scale, Bell, Calendar, Shield, AlertTriangle, GitBranch } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PolicyLayout from "@/components/legal/PolicyLayout";
import SEO from "@/components/SEO";

const UpdatePolicy = () => {
  return (
    <PolicyLayout title="Política de Atualização e Gestão de Mudanças" lastUpdated="Maio de 2026">
      <SEO
        title="Política de Atualização - Cheetah Solutions Network"
        description="Política de Atualização e Gestão de Mudanças da Cheetah Solutions Network. Versionamento, janelas de manutenção, comunicação e rollback."
        canonical="/diretrizes/atualizacao"
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
                <p><strong className="text-foreground">Fundamentos Legais e Normativos:</strong> Lei n. 13.709/2018 (LGPD) · Lei n. 12.965/2014 (Marco Civil da Internet) · ISO/IEC 20000-1:2020 · ISO/IEC 27001:2022 (A.8.32 Gestão de Mudanças) · ITIL 4 (Change Enablement) · NIST SP 800-128 (Security-Focused Configuration Management) · Semantic Versioning 2.0.0.</p>
                <p><strong className="text-foreground">Versão:</strong> 4.0 · <strong className="text-foreground">Vigência:</strong> A partir de 01 de maio de 2026 · <strong className="text-foreground">Revisão programada:</strong> Semestral.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo I - Disposições Preliminares</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 1 - Objeto</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>1.1. Esta Política de Atualização e Gestão de Mudanças estabelece os critérios, classificações, prazos de comunicação e procedimentos operacionais aplicáveis à evolução dos sistemas, plataformas e serviços mantidos pela Cheetah Solutions Network.</p>
            <p>1.2. A presente Política integra o Sistema de Gestão de Segurança da Informação (SGSI) e o Plano de Continuidade de Negócios, devendo ser interpretada conjuntamente com a Política de Segurança, Política de Backup e Política de Atendimento.</p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 2 - Princípios Norteadores</h3>
          <div className="space-y-4 text-muted-foreground">
            <ul className="space-y-2 ml-4">
              <li>a) <strong className="text-foreground">Previsibilidade:</strong> mudanças planejadas são comunicadas com antecedência razoável;</li>
              <li>b) <strong className="text-foreground">Reversibilidade:</strong> toda alteração relevante deve possuir plano de rollback documentado;</li>
              <li>c) <strong className="text-foreground">Mínimo impacto:</strong> janelas de manutenção priorizam horários de baixa utilização;</li>
              <li>d) <strong className="text-foreground">Auditabilidade:</strong> registros de mudança preservados para fins de rastreabilidade.</li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo II - Classificação das Atualizações</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 3 - Tipologia</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border/50 text-sm">
              <thead>
                <tr className="bg-card/50">
                  <th className="border border-border/50 p-3 text-left font-semibold">Tipo</th>
                  <th className="border border-border/50 p-3 text-left font-semibold">Descrição</th>
                  <th className="border border-border/50 p-3 text-left font-semibold">Aviso Prévio</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr><td className="border border-border/50 p-3 font-medium">Emergencial</td><td className="border border-border/50 p-3">Correção crítica de segurança ou indisponibilidade ativa</td><td className="border border-border/50 p-3">Sem aviso prévio obrigatório</td></tr>
                <tr><td className="border border-border/50 p-3 font-medium">Corretiva</td><td className="border border-border/50 p-3">Correção de bugs sem impacto funcional relevante</td><td className="border border-border/50 p-3">24 a 72 horas</td></tr>
                <tr><td className="border border-border/50 p-3 font-medium">Evolutiva</td><td className="border border-border/50 p-3">Novas funcionalidades, melhorias e otimizações</td><td className="border border-border/50 p-3">7 dias corridos</td></tr>
                <tr><td className="border border-border/50 p-3 font-medium">Estrutural</td><td className="border border-border/50 p-3">Mudanças de arquitetura, migração de infraestrutura ou breaking changes</td><td className="border border-border/50 p-3">15 a 30 dias corridos</td></tr>
                <tr><td className="border border-border/50 p-3 font-medium">Depreciação</td><td className="border border-border/50 p-3">Remoção planejada de funcionalidade ou versão</td><td className="border border-border/50 p-3">Mínimo 60 dias</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 4 - Versionamento Semântico</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>4.1. As releases obedecem ao padrão MAJOR.MINOR.PATCH, conforme Semantic Versioning 2.0.0:</p>
            <ul className="space-y-2 ml-4">
              <li>a) <strong className="text-foreground">MAJOR:</strong> alterações incompatíveis com a versão anterior;</li>
              <li>b) <strong className="text-foreground">MINOR:</strong> adição de funcionalidades preservando compatibilidade;</li>
              <li>c) <strong className="text-foreground">PATCH:</strong> correções de defeitos sem alteração funcional.</li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo III - Janelas de Manutenção</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 5 - Janela Padrão</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>5.1. Manutenções planejadas são realizadas preferencialmente entre 02h00 e 06h00 (horário de Brasília), em dias úteis ou finais de semana, conforme a natureza da intervenção.</p>
            <p>5.2. Para mudanças com impacto potencial em ambientes produtivos críticos, a Cheetah pode adotar estratégias de zero-downtime, blue-green deployment ou canary release.</p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 6 - Comunicação</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>6.1. As comunicações de atualização são realizadas por:</p>
            <ul className="space-y-2 ml-4">
              <li>a) E-mail institucional aos responsáveis técnicos cadastrados;</li>
              <li>b) Avisos no Portal do Cliente;</li>
              <li>c) Status page para serviços com SLA contratado;</li>
              <li>d) Canais privados de projeto, quando aplicável.</li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo IV - Procedimentos Operacionais</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 7 - Ciclo de Vida da Mudança</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>7.1. Toda mudança classificada percorre as fases de: solicitação, análise de impacto, aprovação, planejamento, implementação, validação pós-implantação e encerramento.</p>
            <p>7.2. Mudanças de classificação Estrutural são submetidas a CAB (Change Advisory Board) interno antes da execução.</p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 8 - Rollback e Contingência</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>8.1. Toda mudança em ambiente produtivo deve possuir plano de reversão pré-validado, com critérios objetivos de acionamento.</p>
            <p>8.2. Em caso de falha durante a execução, o rollback é prioritário sobre a tentativa de correção em produção.</p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 9 - Validação Pós-Implantação</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>9.1. Após cada implantação, são executados testes de fumaça, verificações de integridade e monitoramento intensivo durante o período de hypercare definido por classificação da mudança.</p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo V - Disposições Finais</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 10 - Atualizações de Segurança</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>10.1. Correções de vulnerabilidades classificadas como Críticas ou Altas pelo CVSS v3.1 são tratadas em regime emergencial, podendo ser aplicadas a qualquer tempo.</p>
            <p>10.2. A não aplicação de patches recomendados por solicitação do cliente exonera a Cheetah de responsabilidade por incidentes decorrentes da vulnerabilidade não corrigida.</p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 11 - Vigência</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>11.1. Esta Política entra em vigor na data de publicação e será revisada semestralmente.</p>
            <p>11.2. Solicitações relacionadas a esta Política devem ser encaminhadas a <strong className="text-foreground">contatocheetahsolutions@gmail.com</strong>. Informações institucionais permanecem disponíveis em <strong className="text-foreground">https://cheetahsolutions.com.br</strong>.</p>
          </div>
        </section>
      </AnimatedSection>
    </PolicyLayout>
  );
};

export default UpdatePolicy;
