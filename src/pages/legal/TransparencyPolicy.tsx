import { Eye, CheckCircle, Scale, BarChart3, Users, FileText, Shield, MessageSquare } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PolicyLayout from "@/components/legal/PolicyLayout";
import SEO from "@/components/SEO";

const TransparencyPolicy = () => {
  return (
    <PolicyLayout title="Política de Transparência e Governança" lastUpdated="Maio de 2026">
      <SEO
        title="Política de Transparência - Cheetah Solutions Network"
        description="Política de Transparência e Governança da Cheetah Solutions Network. Compromissos de divulgação, governança ética e prestação de contas."
        canonical="/diretrizes/transparencia"
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
                <p><strong className="text-foreground">Fundamentos Legais e Normativos:</strong> Lei n. 12.527/2011 (LAI, princípios análogos) · Lei n. 13.709/2018 (LGPD, art. 6, VI) · Lei n. 12.846/2013 (Lei Anticorrupção) · Lei n. 12.965/2014 (Marco Civil da Internet) · ISO 26000:2010 (Responsabilidade Social) · ISO 37001:2016 (Antissuborno) · Princípios do Pacto Global da ONU.</p>
                <p><strong className="text-foreground">Versão:</strong> 4.0 · <strong className="text-foreground">Vigência:</strong> A partir de 01 de maio de 2026 · <strong className="text-foreground">Revisão programada:</strong> Anual.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo I - Disposições Preliminares</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 1 - Objeto e Escopo</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>1.1. Esta Política de Transparência e Governança formaliza os compromissos da Cheetah Solutions Network quanto à divulgação responsável de informações operacionais, à conduta ética nas relações comerciais e à prestação de contas perante clientes, parceiros, colaboradores e a comunidade.</p>
            <p>1.2. A transparência é tratada como princípio estruturante da atuação institucional, observados os limites legais de confidencialidade contratual, sigilo comercial e proteção de dados pessoais.</p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 2 - Princípios</h3>
          <div className="space-y-4 text-muted-foreground">
            <ul className="space-y-2 ml-4">
              <li>a) <strong className="text-foreground">Clareza:</strong> linguagem objetiva e acessível em comunicações institucionais;</li>
              <li>b) <strong className="text-foreground">Veracidade:</strong> divulgação de informações verificáveis e tecnicamente fundamentadas;</li>
              <li>c) <strong className="text-foreground">Tempestividade:</strong> comunicação no prazo adequado a cada tipo de fato;</li>
              <li>d) <strong className="text-foreground">Equidade:</strong> tratamento isonômico de stakeholders;</li>
              <li>e) <strong className="text-foreground">Responsabilidade:</strong> assunção de consequências por atos e omissões.</li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo II - Pilares da Transparência</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 3 - Transparência Operacional</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>3.1. A Cheetah Solutions Network compromete-se a:</p>
            <ul className="space-y-2 ml-4">
              <li>a) Documentar metodologias de trabalho aplicáveis a cada projeto;</li>
              <li>b) Definir prazos, escopo e custos de forma inequívoca em propostas comerciais;</li>
              <li>c) Manter comunicação periódica sobre o andamento de projetos ativos;</li>
              <li>d) Disponibilizar relatórios de progresso quando previsto contratualmente.</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 4 - Transparência Ética</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>4.1. A conduta ética é regida pelos seguintes compromissos:</p>
            <ul className="space-y-2 ml-4">
              <li>a) Cumprimento integral da Lei n. 12.846/2013 (Lei Anticorrupção);</li>
              <li>b) Vedação a pagamentos, presentes ou benefícios indevidos a agentes públicos ou privados;</li>
              <li>c) Tratamento justo e isonômico de fornecedores, parceiros e colaboradores;</li>
              <li>d) Respeito a direitos humanos, trabalhistas e à diversidade.</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 5 - Transparência Financeira e Comercial</h3>
          <div className="space-y-4 text-muted-foreground">
            <ul className="space-y-2 ml-4">
              <li>a) Contratos celebrados em linguagem clara, sem cláusulas abusivas;</li>
              <li>b) Inexistência de taxas ocultas ou cobranças não previstas em contrato;</li>
              <li>c) Política de reembolso e cancelamento publicamente disponível;</li>
              <li>d) Faturamento detalhado e auditável.</li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo III - Governança</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 6 - Estrutura Organizacional</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>6.1. A estrutura de liderança da Cheetah Solutions Network é composta por funções executivas com responsabilidades definidas (CEO, CCO, COO, CTO), com segregação de funções operacionais, técnicas e comerciais para mitigação de conflitos de interesse.</p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 7 - Conflito de Interesses</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>7.1. Colaboradores e lideranças devem declarar potenciais conflitos de interesse, abstendo-se de decisões em que figurem como parte interessada direta ou indireta.</p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 8 - Canal de Denúncias</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>8.1. A Cheetah mantém canal específico para recebimento de denúncias relativas a violações desta Política, com garantia de confidencialidade ao denunciante e proteção contra retaliações.</p>
            <p>8.2. O fluxo de tratamento observa as etapas de recebimento, análise preliminar, investigação, decisão e comunicação de retorno, conforme detalhado na Diretriz específica de Denúncias.</p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo IV - Prestação de Contas</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 9 - Indicadores Públicos</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>9.1. A Cheetah Solutions Network divulga, em seu portal institucional, indicadores agregados de operação, observada a confidencialidade contratual e a proteção de dados pessoais.</p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 10 - Comunicação de Incidentes</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>10.1. Incidentes relevantes que afetem clientes ou usuários são comunicados nos prazos previstos pela LGPD e pelas Políticas de Segurança e de Atendimento, com descrição objetiva do ocorrido, medidas adotadas e orientações de mitigação.</p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 11 - Limites da Transparência</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>11.1. A divulgação de informações observa, cumulativamente:</p>
            <ul className="space-y-2 ml-4">
              <li>a) Sigilo contratual e cláusulas de confidencialidade;</li>
              <li>b) Proteção de dados pessoais nos termos da LGPD;</li>
              <li>c) Proteção de segredos industriais e propriedade intelectual;</li>
              <li>d) Proteção da segurança operacional dos sistemas.</li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo V - Disposições Finais</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 12 - Vigência e Atualização</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>12.1. Esta Política entra em vigor na data de sua publicação e será revisada anualmente.</p>
            <p>12.2. Solicitações de informação, esclarecimentos ou denúncias devem ser encaminhadas a <strong className="text-foreground">contatocheetahsolutions@gmail.com</strong>. Informações institucionais permanecem disponíveis em <strong className="text-foreground">https://cheetahsolutions.com.br</strong>.</p>
          </div>
        </section>
      </AnimatedSection>
    </PolicyLayout>
  );
};

export default TransparencyPolicy;
