import { Copyright, CheckCircle, Scale, Code, Lock, FileText, AlertTriangle, Shield } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PolicyLayout from "@/components/legal/PolicyLayout";
import SEO from "@/components/SEO";

const IntellectualPropertyPolicy = () => {
  return (
    <PolicyLayout title="Política de Propriedade Intelectual" lastUpdated="Maio de 2026">
      <SEO
        title="Política de Propriedade Intelectual - Cheetah Solutions Network"
        description="Política de Propriedade Intelectual da Cheetah Solutions Network. Titularidade, licenciamento, código-fonte, marcas e responsabilidades."
        canonical="/diretrizes/propriedade-intelectual"
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
                <p><strong className="text-foreground">Fundamentos Legais e Normativos:</strong> Lei n. 9.610/1998 (Lei de Direitos Autorais) · Lei n. 9.609/1998 (Lei do Software) · Lei n. 9.279/1996 (Lei da Propriedade Industrial) · Lei n. 13.709/2018 (LGPD) · Lei n. 12.965/2014 (Marco Civil da Internet) · Convenção de Berna · Acordo TRIPS/OMC · WIPO Copyright Treaty.</p>
                <p><strong className="text-foreground">Versão:</strong> 4.0 · <strong className="text-foreground">Vigência:</strong> A partir de 01 de maio de 2026 · <strong className="text-foreground">Revisão programada:</strong> Anual.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo I - Disposições Preliminares</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 1 - Objeto</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>1.1. Esta Política de Propriedade Intelectual disciplina a titularidade, licenciamento, uso e proteção dos ativos intelectuais desenvolvidos, utilizados ou licenciados pela Cheetah Solutions Network no contexto de suas atividades comerciais e operacionais.</p>
            <p>1.2. As disposições desta Política aplicam-se cumulativamente aos contratos celebrados entre a Cheetah e seus clientes, parceiros e colaboradores, prevalecendo as disposições contratuais específicas em caso de divergência expressa.</p>
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
                <tr><td className="border border-border/50 p-3 font-medium">Obra Sob Encomenda</td><td className="border border-border/50 p-3">Software ou solução desenvolvida especificamente para um cliente mediante contrato de prestação de serviços</td></tr>
                <tr><td className="border border-border/50 p-3 font-medium">Componente Pré-Existente</td><td className="border border-border/50 p-3">Frameworks, bibliotecas, módulos e metodologias desenvolvidos pela Cheetah anteriormente ou independentemente do projeto</td></tr>
                <tr><td className="border border-border/50 p-3 font-medium">Software de Terceiros</td><td className="border border-border/50 p-3">Componentes licenciados por terceiros, incluindo software livre, open source ou comercial</td></tr>
                <tr><td className="border border-border/50 p-3 font-medium">Marca</td><td className="border border-border/50 p-3">Sinais distintivos, logotipos, nomes comerciais e identidade visual da Cheetah Solutions Network</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo II - Titularidade</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 3 - Obras Sob Encomenda</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>3.1. Salvo disposição contratual em contrário, os códigos-fonte, sistemas e soluções desenvolvidos especificamente para um cliente são transferidos à titularidade do cliente após a quitação integral dos valores pactuados.</p>
            <p>3.2. A transferência de titularidade abrange a obra final entregue, não se estendendo a Componentes Pré-Existentes nem a metodologias internas da Cheetah utilizadas em sua produção.</p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 4 - Componentes Pré-Existentes</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>4.1. Frameworks, bibliotecas, componentes reutilizáveis e metodologias desenvolvidos pela Cheetah Solutions Network anteriormente ou independentemente do projeto permanecem de titularidade exclusiva da empresa.</p>
            <p>4.2. O uso de Componentes Pré-Existentes em projetos de clientes é concedido mediante licença de uso não-exclusiva, perpétua, intransferível e limitada ao escopo do projeto contratado.</p>
            <p>4.3. Melhorias, otimizações ou correções aplicadas a Componentes Pré-Existentes durante a execução de um projeto permanecem de titularidade da Cheetah, podendo ser incorporadas a outros projetos.</p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 5 - Marcas e Identidade Visual</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>5.1. As marcas, logotipos, nomes comerciais e elementos de identidade visual da Cheetah Solutions Network são protegidos pela Lei n. 9.279/1996 e seu uso é vedado sem autorização expressa por escrito.</p>
            <p>5.2. É permitida a menção nominal à Cheetah Solutions Network em contextos jornalísticos, acadêmicos ou de portfólio de cliente, vedada qualquer utilização que sugira parceria, endosso ou vínculo não existentes.</p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo III - Licenciamento</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 6 - Regime Geral de Licenciamento</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>6.1. O uso de software, plataformas e serviços da Cheetah é concedido mediante licença não-exclusiva, intransferível e revogável, observados os termos contratuais específicos e os limites desta Política.</p>
            <p>6.2. A licença não implica transferência de propriedade nem autorização para sublicenciamento, salvo estipulação contratual expressa.</p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 7 - Software de Terceiros</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>7.1. Soluções entregues podem incorporar componentes de terceiros sujeitos a licenças próprias (MIT, Apache 2.0, GPL, BSD, comerciais, entre outras), cujos termos devem ser observados pelo cliente.</p>
            <p>7.2. A Cheetah disponibiliza, mediante solicitação formal, a relação de componentes de terceiros utilizados em cada entrega e suas respectivas licenças.</p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 8 - Vedações</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>8.1. É vedado ao licenciado, salvo autorização expressa:</p>
            <ul className="space-y-2 ml-4">
              <li>a) Realizar engenharia reversa, descompilação ou desmontagem;</li>
              <li>b) Remover, alterar ou ocultar avisos de copyright e atribuição;</li>
              <li>c) Sublicenciar, ceder ou transferir a licença a terceiros;</li>
              <li>d) Utilizar a solução em finalidade diversa da contratada.</li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo IV - Conteúdo do Cliente e Terceiros</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 9 - Garantia de Titularidade pelo Cliente</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>9.1. O cliente declara e garante ser titular ou legítimo licenciado de todo conteúdo (textos, imagens, vídeos, marcas, dados) fornecido à Cheetah para integração em projetos.</p>
            <p>9.2. O cliente isenta a Cheetah de qualquer responsabilidade decorrente de violação de direitos de terceiros relativa a conteúdo por ele fornecido, respondendo integralmente pelos prejuízos eventualmente causados.</p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 10 - Notificação de Violações (Notice and Takedown)</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>10.1. Suposta violação de direitos de propriedade intelectual em ativos da Cheetah deve ser notificada formalmente, contendo:</p>
            <ul className="space-y-2 ml-4">
              <li>a) Identificação completa do titular do direito alegadamente violado;</li>
              <li>b) Descrição da obra protegida e prova de titularidade;</li>
              <li>c) Indicação precisa do conteúdo objeto da reclamação;</li>
              <li>d) Declaração de boa-fé e veracidade das informações.</li>
            </ul>
            <p>10.2. Notificações fundamentadas são analisadas no prazo de 10 dias úteis, observado o contraditório com o suposto infrator quando aplicável.</p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo V - Penalidades e Disposições Finais</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 11 - Consequências da Violação</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>11.1. A violação a esta Política ou a direitos de propriedade intelectual da Cheetah pode ensejar, isolada ou cumulativamente:</p>
            <ul className="space-y-2 ml-4">
              <li>a) Suspensão imediata da licença de uso;</li>
              <li>b) Rescisão contratual motivada;</li>
              <li>c) Notificação extrajudicial e judicial;</li>
              <li>d) Reparação por perdas e danos, inclusive morais e lucros cessantes;</li>
              <li>e) Adoção das medidas penais cabíveis nos termos das Leis n. 9.279/1996, 9.609/1998 e 9.610/1998.</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 12 - Foro</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>12.1. Controvérsias decorrentes desta Política serão dirimidas no foro estabelecido nos contratos específicos celebrados, prevalecendo o foro do domicílio da Cheetah Solutions Network na ausência de previsão contratual.</p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Cláusula 13 - Vigência e Atualização</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>13.1. Esta Política entra em vigor na data de sua publicação e será revisada anualmente.</p>
            <p>13.2. Notificações, autorizações e solicitações relacionadas a esta Política devem ser encaminhadas a <strong className="text-foreground">contatocheetahsolutions@gmail.com</strong>. Informações institucionais permanecem disponíveis em <strong className="text-foreground">https://cheetahsolutions.com.br</strong>.</p>
          </div>
        </section>
      </AnimatedSection>
    </PolicyLayout>
  );
};

export default IntellectualPropertyPolicy;
