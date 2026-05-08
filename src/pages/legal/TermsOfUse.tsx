import { CheckCircle, Scale, FileText, Shield, AlertTriangle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PolicyLayout from "@/components/legal/PolicyLayout";

const TermsOfUse = () => {
  return (
    <PolicyLayout title="Termos de Uso" lastUpdated="Maio de 2026">
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
                <p><strong className="text-foreground">Fundamentos Legais:</strong> Lei nº 10.406/2002 (Código Civil) · Lei nº 8.078/1990 (Código de Defesa do Consumidor) · Lei nº 13.709/2018 (LGPD) · Lei nº 12.965/2014 (Marco Civil da Internet) · Decreto nº 8.771/2016 · Lei nº 9.609/1998 (Lei de Software) · Lei nº 9.610/1998 (Direitos Autorais).</p>
                <p><strong className="text-foreground">Versão:</strong> 4.0 · <strong className="text-foreground">Vigência:</strong> A partir de 01 de maio de 2026 · <strong className="text-foreground">Revisão programada:</strong> Semestral ou mediante alteração legislativa relevante.</p>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CAPÍTULO I  -  DISPOSIÇÕES PRELIMINARES                        */}
          {/* ============================================================ */}
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo I  -  Disposições Preliminares</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 1ª  -  Objeto e Aceitação</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              1.1. Os presentes Termos de Uso ("Termos") regulam as condições de acesso, navegação e utilização 
              de todos os serviços, plataformas, sistemas, aplicações, interfaces de programação (APIs), ferramentas 
              de comunicação e quaisquer outros canais digitais ou físicos operados pela Cheetah Solutions Network 
              ("Cheetah", "Controladora", "nós" ou "nosso").
            </p>
            <p>
              1.2. Ao acessar, navegar, cadastrar-se ou utilizar qualquer serviço, plataforma ou canal da Cheetah 
              Solutions Network, o Usuário declara ter lido, compreendido e concordado, de forma livre, expressa e 
              inequívoca, com a totalidade das disposições destes Termos, constituindo-se um contrato juridicamente 
              vinculante, nos termos dos arts. 421, 422 e 425 do Código Civil brasileiro.
            </p>
            <p>
              1.3. A aceitação destes Termos é condição indispensável para a utilização dos serviços. Caso o Usuário 
              não concorde com qualquer disposição, deverá cessar imediatamente a utilização e poderá exercer seus 
              direitos conforme previsto na Cláusula 14ª deste documento.
            </p>
            <p>
              1.4. Estes Termos devem ser interpretados em conjunto com a Política de Privacidade, Política de 
              Cookies, Política de Uso Aceitável, Política de Segurança da Informação e demais documentos 
              institucionais da Cheetah Solutions Network, que constituem corpo normativo integrado e complementar.
            </p>
            <p>
              1.5. A relação jurídica entre as partes será regida pelas leis da República Federativa do Brasil, 
              em especial pelo Código Civil (Lei nº 10.406/2002), Código de Defesa do Consumidor (Lei nº 8.078/1990, 
              quando aplicável), Lei Geral de Proteção de Dados (Lei nº 13.709/2018), Marco Civil da Internet 
              (Lei nº 12.965/2014) e Lei de Software (Lei nº 9.609/1998).
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">Cláusula 2ª  -  Definições</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>2.1. Para os fins destes Termos, consideram-se as seguintes definições, sem prejuízo daquelas previstas na legislação aplicável:</p>
            <div className="space-y-3 ml-4">
              <p><strong className="text-foreground">a) Usuário:</strong> Toda pessoa natural ou jurídica que acesse, navegue, cadastre-se ou utilize qualquer serviço, plataforma ou canal da Cheetah Solutions Network, incluindo visitantes, clientes, parceiros comerciais, fornecedores e seus prepostos.</p>
              <p><strong className="text-foreground">b) Serviços:</strong> Conjunto de soluções tecnológicas, plataformas digitais, sistemas de software, aplicações, consultoria em engenharia de software, arquitetura de sistemas, estruturação operacional, suporte técnico e quaisquer outras atividades executadas pela Cheetah Solutions Network no âmbito do Cheetah OPS Framework.</p>
              <p><strong className="text-foreground">c) Plataforma:</strong> Ambiente digital, website, sistema, aplicação web ou mobile, API ou interface desenvolvida, operada ou mantida pela Cheetah Solutions Network, incluindo, sem limitação, o website institucional (cheetahsolutions.com.br).</p>
              <p><strong className="text-foreground">d) Conteúdo:</strong> Todo e qualquer material, informação, dado, texto, imagem, código-fonte, código-objeto, documentação técnica, metodologia, framework, template, design, layout ou arquivo disponibilizado, gerado ou produzido no contexto dos serviços.</p>
              <p><strong className="text-foreground">e) Conta:</strong> Registro individual do Usuário que permite acesso a funcionalidades restritas da Plataforma, criado mediante processo de cadastro e autenticação.</p>
              <p><strong className="text-foreground">f) Credenciais:</strong> Conjunto de informações (login, senha, tokens, chaves de API) que permitem a autenticação e autorização do Usuário nos sistemas da Cheetah Solutions Network.</p>
              <p><strong className="text-foreground">g) Dados Pessoais:</strong> Informações relacionadas a pessoa natural identificada ou identificável, conforme art. 5º, I, da LGPD.</p>
              <p><strong className="text-foreground">h) Propriedade Intelectual:</strong> Direitos autorais, marcas registradas e não registradas, patentes, modelos de utilidade, desenhos industriais, segredos comerciais, know-how, metodologias proprietárias e quaisquer outros direitos de propriedade intelectual e industrial.</p>
              <p><strong className="text-foreground">i) SLA (Service Level Agreement):</strong> Acordo de nível de serviço que estabelece parâmetros de disponibilidade, desempenho e tempo de resposta para serviços contratados.</p>
              <p><strong className="text-foreground">j) Cheetah OPS Framework:</strong> Metodologia proprietária da Cheetah Solutions Network para estruturação tecnológica de operações que exigem performance, englobando diagnóstico operacional, arquitetura de software e implementação sob medida.</p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ============================================================ */}
      {/* CAPÍTULO II  -  CONDIÇÕES DE ACESSO E CADASTRO                 */}
      {/* ============================================================ */}
      <AnimatedSection delay={100}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo II  -  Condições de Acesso e Cadastro</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 3ª  -  Capacidade e Elegibilidade</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              3.1. Os serviços da Cheetah Solutions Network são destinados exclusivamente a pessoas naturais maiores 
              de 18 (dezoito) anos, civilmente capazes nos termos do art. 1º do Código Civil, e a pessoas jurídicas 
              devidamente constituídas e representadas por seus representantes legais ou mandatários com poderes 
              específicos.
            </p>
            <p>
              3.2. Menores de 18 (dezoito) anos não estão autorizados a utilizar os serviços, criar contas ou 
              fornecer dados pessoais à Cheetah Solutions Network. Caso a Controladora identifique que um menor 
              de idade utilizou indevidamente os serviços, a conta será suspensa imediatamente e os dados pessoais 
              serão eliminados nos termos do art. 14 da LGPD.
            </p>
            <p>
              3.3. O Usuário pessoa jurídica garante que o representante que aceita estes Termos possui poderes 
              legais e societários suficientes para vincular a organização às obrigações aqui previstas.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">Cláusula 4ª  -  Cadastro e Credenciais</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              4.1. O acesso a determinados serviços e funcionalidades poderá exigir cadastro prévio, mediante 
              fornecimento de informações verdadeiras, precisas, atuais e completas, sob responsabilidade 
              exclusiva do Usuário.
            </p>
            <p>
              4.2. O Usuário é integralmente responsável pela guarda, sigilo e uso de suas Credenciais de 
              acesso, comprometendo-se a: (i) criar senhas fortes, com no mínimo 8 caracteres, incluindo 
              letras maiúsculas, minúsculas, números e caracteres especiais; (ii) não compartilhar suas 
              Credenciais com terceiros; (iii) notificar imediatamente a Cheetah Solutions Network sobre 
              qualquer uso não autorizado ou suspeita de violação de segurança.
            </p>
            <p>
              4.3. A Cheetah Solutions Network reserva-se o direito de, a qualquer momento e sem necessidade 
              de aviso prévio: (i) recusar, suspender ou cancelar cadastros; (ii) solicitar documentação 
              complementar para verificação de identidade; (iii) implementar mecanismos adicionais de 
              autenticação, incluindo autenticação multifator (MFA).
            </p>
            <p>
              4.4. Todas as atividades realizadas por meio da Conta do Usuário serão de sua exclusiva 
              responsabilidade, nos termos do art. 927 do Código Civil, ressalvadas as hipóteses de culpa 
              exclusiva da Cheetah Solutions Network comprovada mediante processo investigativo.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* ============================================================ */}
      {/* CAPÍTULO III  -  SERVIÇOS                                       */}
      {/* ============================================================ */}
      <AnimatedSection delay={200}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo III  -  Descrição dos Serviços</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 5ª  -  Escopo dos Serviços</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              5.1. A Cheetah Solutions Network atua na estruturação tecnológica de operações que exigem performance, 
              por meio do Cheetah OPS Framework, oferecendo os seguintes serviços, sem se limitar a eles:
            </p>

            <div className="grid gap-4 mt-4">
              <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">a) Engenharia de Software e Arquitetura de Sistemas</h4>
                <p className="text-sm">Diagnóstico operacional, análise de requisitos, arquitetura de soluções, desenvolvimento de sistemas sob medida, APIs, microsserviços, integrações e automações. Inclui documentação técnica, testes e validação de entregas.</p>
              </div>
              <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">b) Infraestrutura e Cloud</h4>
                <p className="text-sm">Provisionamento, configuração e gerenciamento de ambientes cloud (AWS, GCP, Azure), containers, CI/CD, monitoramento de disponibilidade, performance e segurança. Inclui gestão de backups e planos de disaster recovery.</p>
              </div>
              <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">c) Segurança da Informação</h4>
                <p className="text-sm">Auditorias de segurança, pentests, hardening de aplicações e servidores, implementação de WAF, monitoramento de vulnerabilidades, resposta a incidentes e conformidade com padrões de segurança.</p>
              </div>
              <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">d) Inteligência de Dados e Automação</h4>
                <p className="text-sm">Painéis analíticos, dashboards, pipelines de dados, integrações com fontes externas, bots, automações de processos e inteligência operacional para tomada de decisão.</p>
              </div>
              <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">e) Suporte e Manutenção Contínua</h4>
                <p className="text-sm">Manutenção corretiva, evolutiva e preventiva, suporte técnico conforme SLA contratado, atualizações de segurança, otimizações de performance e monitoramento proativo.</p>
              </div>
            </div>

            <p>
              5.2. Os serviços específicos, escopo detalhado, prazos, entregáveis e condições comerciais serão 
              definidos em propostas comerciais e/ou contratos de prestação de serviços individuais, que 
              prevalecerão sobre estes Termos em caso de conflito, desde que não contrariem disposições legais 
              imperativas.
            </p>
            <p>
              5.3. A Cheetah Solutions Network reserva-se o direito de modificar, descontinuar ou suspender, 
              temporária ou permanentemente, qualquer serviço, funcionalidade ou recurso, mediante comunicação 
              prévia com antecedência mínima de 30 (trinta) dias, salvo em situações de emergência, caso 
              fortuito ou força maior (art. 393, Código Civil).
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* ============================================================ */}
      {/* CAPÍTULO IV  -  OBRIGAÇÕES DAS PARTES                          */}
      {/* ============================================================ */}
      <AnimatedSection delay={300}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo IV  -  Obrigações das Partes</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 6ª  -  Obrigações do Usuário</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>6.1. Constituem obrigações do Usuário, sem prejuízo de outras previstas nestes Termos e na legislação aplicável:</p>
            <div className="space-y-3 ml-4">
              <p><strong className="text-foreground">a)</strong> Fornecer informações verdadeiras, precisas, atuais e completas quando solicitado, mantendo-as permanentemente atualizadas, sob pena de suspensão ou cancelamento do acesso;</p>
              <p><strong className="text-foreground">b)</strong> Manter a confidencialidade e segurança de suas Credenciais de acesso, respondendo por toda e qualquer atividade realizada por meio de sua Conta;</p>
              <p><strong className="text-foreground">c)</strong> Utilizar os serviços em conformidade com a legislação aplicável, estes Termos, a Política de Uso Aceitável e as boas práticas de segurança da informação;</p>
              <p><strong className="text-foreground">d)</strong> Respeitar os direitos de Propriedade Intelectual da Cheetah Solutions Network, de seus licenciadores e de terceiros;</p>
              <p><strong className="text-foreground">e)</strong> Não praticar engenharia reversa, descompilação, desmontagem ou qualquer tentativa de obter o código-fonte de softwares proprietários, salvo nas hipóteses expressamente previstas na Lei nº 9.609/1998;</p>
              <p><strong className="text-foreground">f)</strong> Não utilizar os serviços para fins ilícitos, fraudulentos, difamatórios, discriminatórios ou que possam causar danos a terceiros ou à reputação da Cheetah Solutions Network;</p>
              <p><strong className="text-foreground">g)</strong> Não realizar ataques, tentativas de invasão, testes de vulnerabilidade não autorizados, engenharia social ou quaisquer atividades que comprometam a segurança ou disponibilidade dos serviços;</p>
              <p><strong className="text-foreground">h)</strong> Manter backups independentes de seus dados quando aplicável e recomendado, compreendendo que a Cheetah, embora adote medidas de proteção, não substitui a responsabilidade do Usuário sobre seus próprios dados;</p>
              <p><strong className="text-foreground">i)</strong> Comunicar tempestivamente qualquer problema, falha, vulnerabilidade ou incidente de segurança identificado;</p>
              <p><strong className="text-foreground">j)</strong> Cumprir pontualmente os prazos e condições estabelecidos em contratos específicos, incluindo obrigações de pagamento;</p>
              <p><strong className="text-foreground">k)</strong> Obter todas as autorizações, licenças e consentimentos necessários para o uso dos dados e conteúdos que fornecer à Cheetah Solutions Network.</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">Cláusula 7ª  -  Obrigações da Cheetah Solutions Network</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>7.1. Constituem obrigações da Cheetah Solutions Network:</p>
            <div className="space-y-3 ml-4">
              <p><strong className="text-foreground">a)</strong> Prestar os serviços contratados com diligência, competência técnica e profissionalismo, observando as melhores práticas de engenharia de software e os padrões de qualidade do mercado;</p>
              <p><strong className="text-foreground">b)</strong> Manter a confidencialidade das informações do Usuário conforme a Política de Privacidade e os contratos específicos de prestação de serviços;</p>
              <p><strong className="text-foreground">c)</strong> Implementar e manter medidas técnicas e organizacionais adequadas para proteção de dados pessoais e segurança da informação, em conformidade com a LGPD e as melhores práticas do setor;</p>
              <p><strong className="text-foreground">d)</strong> Fornecer suporte técnico dentro dos níveis de serviço acordados (SLA), mantendo canais de atendimento acessíveis e eficientes;</p>
              <p><strong className="text-foreground">e)</strong> Comunicar previamente, com antecedência mínima de 48 (quarenta e oito) horas, manutenções programadas que possam afetar a disponibilidade dos serviços, salvo em situações de emergência;</p>
              <p><strong className="text-foreground">f)</strong> Manter documentação técnica atualizada dos serviços prestados, incluindo especificações, guias de uso e registros de alterações;</p>
              <p><strong className="text-foreground">g)</strong> Notificar o Usuário sobre incidentes de segurança que possam afetar seus dados, nos prazos e condições previstos na LGPD;</p>
              <p><strong className="text-foreground">h)</strong> Cumprir integralmente a legislação aplicável, incluindo obrigações fiscais, trabalhistas, de proteção de dados e de propriedade intelectual.</p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ============================================================ */}
      {/* CAPÍTULO V  -  PROPRIEDADE INTELECTUAL                         */}
      {/* ============================================================ */}
      <AnimatedSection delay={400}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo V  -  Propriedade Intelectual</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 8ª  -  Direitos de Propriedade Intelectual</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              8.1. Todos os direitos de Propriedade Intelectual relacionados à Plataforma, aos Serviços e ao 
              Conteúdo produzido pela Cheetah Solutions Network, incluindo, sem limitação, marcas, logotipos, 
              identidade visual, nomes de domínio, design de interfaces, código-fonte proprietário, algoritmos, 
              arquiteturas de sistema, documentação técnica, metodologias (incluindo o Cheetah OPS Framework), 
              frameworks, templates, materiais educacionais e know-how, são de titularidade exclusiva da Cheetah 
              Solutions Network ou de seus licenciadores, protegidos pela Lei nº 9.610/1998 (Direitos Autorais), 
              Lei nº 9.609/1998 (Software), Lei nº 9.279/1996 (Propriedade Industrial) e tratados internacionais 
              dos quais o Brasil é signatário.
            </p>
            <p>
              8.2. O acesso e uso dos serviços não conferem ao Usuário qualquer direito de propriedade sobre 
              a Propriedade Intelectual da Cheetah Solutions Network. A utilização é concedida mediante licença 
              não exclusiva, intransferível, revogável e limitada ao escopo e duração do contrato de prestação 
              de serviços.
            </p>
            <p>
              8.3. <strong className="text-foreground">Desenvolvimento sob encomenda:</strong> O software desenvolvido sob encomenda segue as 
              disposições específicas do contrato de prestação de serviços. Na ausência de cláusula expressa 
              em contrário, nos termos do art. 4º da Lei nº 9.609/1998, os direitos patrimoniais sobre o 
              software pertencem exclusivamente ao empregador ou contratante, desde que: (i) o desenvolvimento 
              tenha sido objeto do contrato; (ii) haja pagamento integral do projeto; (iii) a transferência 
              esteja expressamente formalizada.
            </p>
            <p>
              8.4. <strong className="text-foreground">Componentes reutilizáveis:</strong> Bibliotecas, frameworks, ferramentas internas e 
              componentes de uso geral desenvolvidos pela Cheetah Solutions Network, mesmo quando utilizados 
              em projetos sob encomenda, permanecem de propriedade exclusiva da Cheetah, salvo acordo 
              expresso em contrário.
            </p>
            <p>
              8.5. É expressamente vedado ao Usuário: (i) reproduzir, modificar, distribuir, transmitir, 
              exibir, publicar, licenciar, criar obras derivadas ou explorar comercialmente qualquer 
              Propriedade Intelectual da Cheetah sem autorização prévia e expressa; (ii) remover, alterar 
              ou ocultar avisos de direitos autorais, marcas registradas ou outras indicações de propriedade; 
              (iii) utilizar a marca "Cheetah Solutions Network" ou marcas correlatas em materiais promocionais 
              sem autorização por escrito.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* ============================================================ */}
      {/* CAPÍTULO VI  -  CONDIÇÕES COMERCIAIS E PAGAMENTO               */}
      {/* ============================================================ */}
      <AnimatedSection delay={500}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo VI  -  Condições Comerciais e Pagamento</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 9ª  -  Preços, Pagamento e Tributação</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              9.1. Os preços dos serviços serão definidos em propostas comerciais individuais e/ou contratos 
              de prestação de serviços, podendo ser estruturados como: (i) preço fixo por projeto (escopo 
              fechado); (ii) preço por hora técnica (time & materials); (iii) mensalidade recorrente 
              (retainer); (iv) modelos híbridos combinando as modalidades anteriores.
            </p>
            <p>
              9.2. Os pagamentos deverão ser realizados nos prazos e condições estabelecidos no contrato 
              específico. O atraso no pagamento acarretará: (i) multa moratória de 2% (dois por cento) 
              sobre o valor em atraso; (ii) juros de mora de 1% (um por cento) ao mês, calculados pro 
              rata die; (iii) correção monetária pelo IPCA/IBGE ou índice que venha a substituí-lo; 
              (iv) possibilidade de suspensão dos serviços após 15 (quinze) dias de inadimplência, 
              mediante notificação prévia.
            </p>
            <p>
              9.3. Os preços indicados não incluem tributos, taxas ou contribuições que possam incidir sobre 
              a prestação de serviços, salvo disposição expressa em contrário no contrato específico. A 
              Cheetah Solutions Network emitirá os documentos fiscais cabíveis em conformidade com a 
              legislação tributária vigente.
            </p>
            <p>
              9.4. A Cheetah Solutions Network reserva-se o direito de reajustar anualmente os preços dos 
              serviços recorrentes, com base no índice IPCA/IBGE acumulado nos últimos 12 (doze) meses, 
              ou por índice substituto oficialmente adotado, mediante comunicação prévia de 30 (trinta) dias.
            </p>
            <p>
              9.5. Os direitos de cancelamento e reembolso seguem as disposições da Política de Cancelamento 
              e Política de Reembolso, disponíveis no hub de diretrizes da Cheetah Solutions Network.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* ============================================================ */}
      {/* CAPÍTULO VII  -  CONDUTAS PROIBIDAS                             */}
      {/* ============================================================ */}
      <AnimatedSection delay={600}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo VII  -  Condutas Proibidas e Sanções</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 10ª  -  Condutas Vedadas</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>10.1. É expressamente vedado ao Usuário, sem prejuízo de outras proibições previstas na legislação e nestes Termos:</p>
            <div className="space-y-3 ml-4">
              <p><strong className="text-foreground">a)</strong> Utilizar os serviços para fins ilícitos, incluindo, sem limitação, lavagem de dinheiro, financiamento de atividades ilegais, fraude, estelionato, falsidade ideológica ou qualquer outro ato tipificado como crime ou contravenção penal;</p>
              <p><strong className="text-foreground">b)</strong> Praticar ou incitar atos de discriminação, assédio, bullying, difamação, calúnia, injúria ou qualquer conduta que viole a dignidade humana;</p>
              <p><strong className="text-foreground">c)</strong> Transmitir, distribuir ou armazenar vírus, malware, ransomware, spyware, trojans ou qualquer código malicioso;</p>
              <p><strong className="text-foreground">d)</strong> Realizar scraping, crawling automatizado, mineração de dados ou extração massiva de informações sem autorização expressa;</p>
              <p><strong className="text-foreground">e)</strong> Tentar acessar áreas restritas, sistemas, dados ou funcionalidades para os quais não possui autorização;</p>
              <p><strong className="text-foreground">f)</strong> Sobrecarregar intencionalmente a infraestrutura dos serviços por meio de ataques DDoS, flood, spam ou técnicas similares;</p>
              <p><strong className="text-foreground">g)</strong> Sublicenciar, ceder, transferir ou comercializar o acesso aos serviços sem autorização prévia e expressa;</p>
              <p><strong className="text-foreground">h)</strong> Violar ou tentar contornar mecanismos de segurança, autenticação, criptografia ou controle de acesso;</p>
              <p><strong className="text-foreground">i)</strong> Utilizar os serviços para concorrer direta ou indiretamente com a Cheetah Solutions Network, incluindo a criação de produtos ou serviços substancialmente similares;</p>
              <p><strong className="text-foreground">j)</strong> Publicar ou distribuir conteúdo que infrinja direitos de propriedade intelectual de terceiros.</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">Cláusula 11ª  -  Sanções e Consequências</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              11.1. O descumprimento de qualquer disposição destes Termos poderá resultar, a critério exclusivo 
              da Cheetah Solutions Network, nas seguintes medidas, aplicáveis isolada ou cumulativamente, de 
              acordo com a gravidade da infração:
            </p>
            <div className="space-y-3 ml-4">
              <p><strong className="text-foreground">a) Advertência formal:</strong> Notificação por escrito com prazo para regularização;</p>
              <p><strong className="text-foreground">b) Suspensão temporária:</strong> Bloqueio do acesso aos serviços por prazo determinado;</p>
              <p><strong className="text-foreground">c) Suspensão definitiva:</strong> Cancelamento permanente da Conta e de todos os acessos;</p>
              <p><strong className="text-foreground">d) Rescisão contratual:</strong> Resolução imediata de contratos vigentes, sem direito a reembolso de valores já utilizados;</p>
              <p><strong className="text-foreground">e) Responsabilização civil:</strong> Ação indenizatória por perdas e danos materiais e morais;</p>
              <p><strong className="text-foreground">f) Comunicação às autoridades:</strong> Notificação a órgãos competentes (polícia, Ministério Público, ANPD) quando a conduta configurar infração penal ou administrativa.</p>
            </div>
            <p>
              11.2. A aplicação de qualquer sanção não exime o Usuário de responder civilmente pelos danos 
              causados, nos termos dos arts. 186, 187 e 927 do Código Civil.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* ============================================================ */}
      {/* CAPÍTULO VIII  -  LIMITAÇÃO DE RESPONSABILIDADE                */}
      {/* ============================================================ */}
      <AnimatedSection delay={700}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo VIII  -  Limitação de Responsabilidade e Garantias</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 12ª  -  Limitação de Responsabilidade</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              12.1. Na extensão máxima permitida pela legislação aplicável, a Cheetah Solutions Network NÃO 
              será responsável por danos indiretos, incidentais, especiais, consequenciais, exemplares ou 
              punitivos, incluindo, mas não se limitando a:
            </p>
            <div className="space-y-2 ml-4">
              <p>• Perda de lucros, receitas, economias esperadas ou oportunidades de negócio;</p>
              <p>• Perda ou corrupção de dados, exceto quando comprovada culpa exclusiva da Cheetah;</p>
              <p>• Interrupção de atividades empresariais;</p>
              <p>• Danos à reputação ou à imagem;</p>
              <p>• Custos de aquisição de produtos ou serviços substitutos;</p>
              <p>• Quaisquer outras perdas intangíveis.</p>
            </div>
            <p>
              12.2. A responsabilidade total e acumulada da Cheetah Solutions Network por todas as reclamações 
              relacionadas aos serviços será limitada ao maior valor entre: (i) o montante efetivamente pago 
              pelo Usuário nos 12 (doze) meses anteriores ao evento que deu origem à reclamação; ou 
              (ii) R$ 5.000,00 (cinco mil reais).
            </p>
            <p>
              12.3. As limitações previstas nesta cláusula não se aplicam a: (i) danos decorrentes de dolo ou 
              culpa grave comprovada; (ii) obrigações de indenizar por violação de dados pessoais nos termos 
              da LGPD; (iii) violação de direitos de propriedade intelectual; (iv) situações em que a limitação 
              seja proibida pela legislação aplicável, incluindo o Código de Defesa do Consumidor quando 
              aplicável à relação.
            </p>
            <p>
              12.4. A Cheetah Solutions Network não se responsabiliza por indisponibilidades decorrentes de: 
              (i) caso fortuito ou força maior (art. 393, Código Civil); (ii) falhas em infraestrutura de 
              terceiros (provedores de cloud, telecomunicações, energia elétrica); (iii) manutenções 
              programadas previamente comunicadas; (iv) atos ou omissões do Usuário ou de terceiros; 
              (v) ataques cibernéticos que superem as medidas de proteção razoavelmente implementadas.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">Cláusula 13ª  -  Garantias e Isenções</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              13.1. Os serviços são fornecidos "no estado em que se encontram" (as is) e "conforme 
              disponibilidade" (as available), na extensão máxima permitida pela legislação aplicável. 
              A Cheetah Solutions Network não oferece garantias implícitas de comercialização, adequação 
              a um fim específico ou não violação de direitos de terceiros, exceto as expressamente 
              previstas em contrato específico.
            </p>
            <p>
              13.2. A Cheetah Solutions Network não garante que os serviços serão ininterruptos, livres 
              de erros, completamente seguros ou que atenderão integralmente às expectativas do Usuário. 
              Entretanto, compromete-se a empregar esforços comercialmente razoáveis para manter a 
              disponibilidade, segurança e performance dos serviços.
            </p>
            <p>
              13.3. Quando aplicável o Código de Defesa do Consumidor (Lei nº 8.078/1990), prevalecerão 
              as garantias legais previstas nos arts. 18 a 25 e 30 a 38 do referido diploma, não podendo 
              ser afastadas ou reduzidas por disposição contratual.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* ============================================================ */}
      {/* CAPÍTULO IX  -  VIGÊNCIA, RESCISÃO E DISPOSIÇÕES TRANSITÓRIAS  */}
      {/* ============================================================ */}
      <AnimatedSection delay={800}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo IX  -  Vigência, Rescisão e Alterações</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 14ª  -  Vigência</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              14.1. Estes Termos entram em vigor na data de sua publicação e permanecem vigentes por prazo 
              indeterminado, aplicando-se a todos os Usuários a partir do momento de sua aceitação, expressa 
              ou tácita (pelo uso continuado dos serviços).
            </p>
            <p>
              14.2. As disposições relativas a Propriedade Intelectual (Cláusula 8ª), Confidencialidade, 
              Limitação de Responsabilidade (Cláusula 12ª) e Foro (Cláusula 17ª) sobreviverão à rescisão 
              ou término destes Termos, pelo prazo aplicável conforme a legislação vigente.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">Cláusula 15ª  -  Rescisão</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              15.1. O Usuário poderá rescindir estes Termos a qualquer momento, cessando a utilização dos 
              serviços e solicitando a exclusão de sua Conta, observadas as obrigações contratuais pendentes 
              e os direitos de retenção de dados previstos na Política de Privacidade.
            </p>
            <p>
              15.2. A Cheetah Solutions Network poderá rescindir estes Termos ou suspender o acesso do 
              Usuário, imediatamente e sem aviso prévio, nas seguintes hipóteses: (i) violação de qualquer 
              disposição destes Termos; (ii) prática de condutas vedadas na Cláusula 10ª; (iii) inadimplência 
              superior a 30 (trinta) dias; (iv) determinação judicial ou administrativa; (v) encerramento 
              das atividades da Cheetah Solutions Network.
            </p>
            <p>
              15.3. Em caso de rescisão, a Cheetah Solutions Network poderá: (i) reter dados do Usuário pelo 
              prazo legal aplicável; (ii) manter registros de logs conforme o Marco Civil da Internet; 
              (iii) exercer direito de retenção sobre trabalhos em andamento até quitação integral de 
              valores devidos.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">Cláusula 16ª  -  Alterações dos Termos</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              16.1. A Cheetah Solutions Network reserva-se o direito de modificar unilateralmente estes 
              Termos a qualquer momento, nos termos do art. 421 do Código Civil e observadas as limitações 
              do art. 51 do Código de Defesa do Consumidor, quando aplicável.
            </p>
            <p>
              16.2. Alterações substanciais serão comunicadas ao Usuário com antecedência mínima de 
              30 (trinta) dias, por meio de: (i) aviso na Plataforma; (ii) e-mail para o endereço 
              cadastrado; (iii) publicação no hub de diretrizes da Cheetah Solutions Network.
            </p>
            <p>
              16.3. O uso continuado dos serviços após a comunicação de alterações constitui aceitação 
              tácita dos novos termos. Caso o Usuário não concorde com as modificações, deverá cessar 
              o uso dos serviços e poderá rescindir estes Termos conforme previsto na Cláusula 15ª.
            </p>
            <p>
              16.4. A versão vigente dos Termos estará sempre disponível em 
              cheetahsolutions.com.br/diretrizes/termos-uso, com indicação da data da última atualização.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* ============================================================ */}
      {/* CAPÍTULO X  -  DISPOSIÇÕES FINAIS                              */}
      {/* ============================================================ */}
      <AnimatedSection delay={900}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo X  -  Disposições Finais</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Cláusula 17ª  -  Legislação Aplicável e Foro</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              17.1. Estes Termos de Uso são regidos integralmente pelas leis da República Federativa do 
              Brasil, independentemente de conflitos de leis ou princípios de direito internacional privado.
            </p>
            <p>
              17.2. Fica eleito o foro da Comarca de Recife, Estado de Pernambuco, Brasil, para dirimir 
              quaisquer controvérsias, litígios ou reclamações decorrentes destes Termos ou relacionados 
              à utilização dos serviços da Cheetah Solutions Network, com renúncia expressa a qualquer 
              outro, por mais privilegiado que seja, ressalvado o direito do consumidor de optar pelo 
              foro de seu domicílio, nos termos do art. 101, I, do Código de Defesa do Consumidor.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">Cláusula 18ª  -  Disposições Gerais</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              18.1. <strong className="text-foreground">Independência das Cláusulas (Severability):</strong> Caso qualquer disposição destes 
              Termos seja considerada inválida, nula ou inexequível por decisão judicial ou administrativa 
              transitada em julgado, as demais disposições permanecerão em pleno vigor e efeito, devendo 
              a cláusula inválida ser substituída por outra que preserve, na medida do possível, a intenção 
              original das partes.
            </p>
            <p>
              18.2. <strong className="text-foreground">Não Renúncia (No Waiver):</strong> A falha ou demora da Cheetah Solutions Network em 
              exercer qualquer direito, poder ou prerrogativa previstos nestes Termos não constituirá 
              renúncia a tal direito, nem impedirá seu exercício futuro, total ou parcial.
            </p>
            <p>
              18.3. <strong className="text-foreground">Cessão:</strong> O Usuário não poderá ceder, transferir ou sublicenciar seus direitos 
              ou obrigações sob estes Termos sem o consentimento prévio e expresso da Cheetah Solutions 
              Network. A Cheetah poderá ceder livremente seus direitos e obrigações a terceiros, mediante 
              notificação ao Usuário.
            </p>
            <p>
              18.4. <strong className="text-foreground">Integralidade:</strong> Estes Termos, em conjunto com a Política de Privacidade, 
              Política de Cookies, Política de Uso Aceitável e demais documentos referenciados, constituem 
              o acordo integral entre as partes sobre o assunto aqui tratado, substituindo quaisquer acordos, 
              entendimentos ou negociações anteriores, verbais ou escritos, ressalvados os contratos 
              específicos de prestação de serviços.
            </p>
            <p>
              18.5. <strong className="text-foreground">Comunicações:</strong> Todas as notificações e comunicações entre as partes deverão 
              ser realizadas por escrito, preferencialmente por meio eletrônico (e-mail), para os endereços 
              cadastrados. Comunicações enviadas pela Cheetah Solutions Network ao e-mail cadastrado pelo 
              Usuário serão consideradas válidas e eficazes para todos os efeitos legais.
            </p>
            <p>
              18.6. <strong className="text-foreground">Idioma:</strong> Estes Termos são redigidos em língua portuguesa (Brasil). Em caso 
              de tradução para outros idiomas, a versão em português prevalecerá em caso de divergência.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">Cláusula 19ª  -  Contato</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              19.1. Para questões, dúvidas, reclamações ou solicitações relacionadas a estes Termos de Uso, 
              o Usuário poderá entrar em contato pelos seguintes canais:
            </p>
            <div className="p-5 bg-card/50 rounded-lg border border-border/50 space-y-3">
              <p><strong className="text-foreground">Cheetah Solutions Network</strong></p>
              <p>E-mail Jurídico: <a href="mailto:contatocheetahsolutions@gmail.com" className="text-primary hover:underline">contatocheetahsolutions@gmail.com</a></p>
              <p>E-mail Institucional: <a href="mailto:contatocheetahsolutions@gmail.com" className="text-primary hover:underline">contatocheetahsolutions@gmail.com</a></p>
              <p>Sede Operacional: Recife, Pernambuco  -  Brasil</p>
              <p>Prazo de resposta: até 10 (dez) dias úteis</p>
              <p>Horário de atendimento: segunda a sexta-feira, das 09h às 18h (horário de Brasília)</p>
            </div>
            <p className="mt-4">
              19.2. O Usuário poderá, ainda, registrar reclamações junto aos órgãos de defesa do consumidor 
              (PROCON) ou perante o Poder Judiciário, nos termos da legislação aplicável.
            </p>
          </div>

          {/* Rodapé do documento */}
          <div className="mt-10 p-6 bg-card/30 rounded-lg border border-border/50">
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong className="text-foreground">Documento:</strong> Termos de Uso  -  Cheetah Solutions Network</p>
                <p><strong className="text-foreground">Versão:</strong> 4.0</p>
                <p><strong className="text-foreground">Data de Publicação:</strong> 01 de maio de 2026</p>
                <p><strong className="text-foreground">Próxima Revisão Programada:</strong> Novembro de 2026</p>
                <p><strong className="text-foreground">Classificação:</strong> Documento Público</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </PolicyLayout>
  );
};

export default TermsOfUse;
