import { CheckCircle, Shield, Scale, FileText, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import PolicyLayout from "@/components/legal/PolicyLayout";

const PrivacyPolicyPage = () => {
  return (
    <PolicyLayout title="Política de Privacidade" lastUpdated="Maio de 2026">
      {/* Preâmbulo e Compliance */}
      <AnimatedSection>
        <section className="mb-12">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm text-green-500 font-medium">LGPD Compliant</span>
          </div>

          <div className="p-6 bg-card/30 rounded-lg border border-border/50 mb-8">
            <div className="flex items-start gap-3">
              <Scale className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong className="text-foreground">Fundamentos Legais:</strong> Lei nº 13.709/2018 (LGPD) · Lei nº 12.965/2014 (Marco Civil da Internet) · Decreto nº 8.771/2016 · Lei nº 8.078/1990 (Código de Defesa do Consumidor) · Lei nº 10.406/2002 (Código Civil) · Regulamento (UE) 2016/679 (GDPR), quando aplicável a titulares localizados no Espaço Econômico Europeu.</p>
                <p><strong className="text-foreground">Versão:</strong> 3.0 · <strong className="text-foreground">Vigência:</strong> A partir de 01 de maio de 2026 · <strong className="text-foreground">Revisão programada:</strong> Semestral ou mediante alteração legislativa relevante.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo I  -  Disposições Preliminares</h2>
          
          <h3 className="text-xl font-semibold mb-4 text-foreground">1. Introdução e Escopo</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              1.1. A presente Política de Privacidade ("Política") tem por objeto estabelecer, de forma transparente, 
              detalhada e em conformidade com o ordenamento jurídico brasileiro e as melhores práticas internacionais 
              de proteção de dados pessoais, as regras, condições e procedimentos adotados pela Cheetah Solutions Network 
              ("Controladora", "Cheetah", "nós" ou "nosso") para o tratamento de dados pessoais e dados pessoais 
              sensíveis de todas as pessoas naturais que interajam com nossos serviços, plataformas, sistemas, 
              aplicações, websites, interfaces de programação (APIs), ferramentas de comunicação e quaisquer outros 
              canais digitais ou físicos operados pela Controladora.
            </p>
            <p>
              1.2. Esta Política aplica-se a todos os titulares de dados pessoais ("Titulares", "Usuários" ou "Você"), 
              incluindo, sem limitação: (i) visitantes de nossos websites e plataformas digitais; (ii) clientes pessoas 
              físicas e jurídicas e seus representantes legais; (iii) potenciais clientes (leads); (iv) parceiros 
              comerciais, fornecedores e seus prepostos; (v) colaboradores, prestadores de serviço e candidatos a 
              vagas de trabalho; (vi) membros de comunidades, fóruns e programas administrados pela Cheetah; 
              (vii) qualquer pessoa natural cujos dados pessoais sejam tratados no contexto das atividades da Controladora.
            </p>
            <p>
              1.3. Ao acessar, navegar, utilizar ou interagir com qualquer serviço, plataforma ou canal da Cheetah 
              Solutions Network, o Titular reconhece ter lido, compreendido e concordado com os termos desta Política. 
              Caso não concorde com qualquer disposição aqui contida, o Titular deverá cessar imediatamente a utilização 
              dos serviços e poderá exercer seus direitos conforme previsto no Capítulo VII deste documento.
            </p>
            <p>
              1.4. Esta Política deve ser interpretada em conjunto com os Termos de Uso, Política de Cookies, 
              Política de Segurança da Informação e demais documentos institucionais da Cheetah Solutions Network, 
              que constituem um corpo normativo integrado e complementar.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">2. Definições</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>2.1. Para os fins desta Política, consideram-se as seguintes definições, sem prejuízo daquelas previstas na legislação aplicável:</p>
            <div className="space-y-3 ml-4">
              <p><strong className="text-foreground">a) Dado Pessoal:</strong> Toda informação relacionada a pessoa natural identificada ou identificável, nos termos do art. 5º, I, da LGPD, incluindo, mas não se limitando a, nome, CPF, endereço de e-mail, endereço IP, dados de geolocalização, identificadores de dispositivo, cookies e quaisquer outros elementos que, isolados ou combinados, permitam a identificação direta ou indireta do Titular.</p>
              <p><strong className="text-foreground">b) Dado Pessoal Sensível:</strong> Dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural, nos termos do art. 5º, II, da LGPD.</p>
              <p><strong className="text-foreground">c) Tratamento:</strong> Toda operação realizada com dados pessoais, como as que se referem à coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração (art. 5º, X, LGPD).</p>
              <p><strong className="text-foreground">d) Controlador:</strong> Pessoa natural ou jurídica, de direito público ou privado, a quem competem as decisões referentes ao tratamento de dados pessoais (art. 5º, VI, LGPD). Neste contexto, a Cheetah Solutions Network.</p>
              <p><strong className="text-foreground">e) Operador:</strong> Pessoa natural ou jurídica, de direito público ou privado, que realiza o tratamento de dados pessoais em nome do Controlador (art. 5º, VII, LGPD).</p>
              <p><strong className="text-foreground">f) Encarregado (DPO):</strong> Pessoa indicada pelo Controlador e pelo Operador para atuar como canal de comunicação entre o Controlador, os Titulares dos dados e a Autoridade Nacional de Proteção de Dados  -  ANPD (art. 5º, VIII, LGPD).</p>
              <p><strong className="text-foreground">g) Titular:</strong> Pessoa natural a quem se referem os dados pessoais que são objeto de tratamento (art. 5º, V, LGPD).</p>
              <p><strong className="text-foreground">h) Consentimento:</strong> Manifestação livre, informada e inequívoca pela qual o Titular concorda com o tratamento de seus dados pessoais para uma finalidade determinada (art. 5º, XII, LGPD).</p>
              <p><strong className="text-foreground">i) Anonimização:</strong> Utilização de meios técnicos razoáveis e disponíveis no momento do tratamento, por meio dos quais um dado perde a possibilidade de associação, direta ou indireta, a um indivíduo (art. 5º, XI, LGPD).</p>
              <p><strong className="text-foreground">j) Eliminação:</strong> Exclusão de dado ou de conjunto de dados armazenados em banco de dados, independentemente do procedimento empregado (art. 5º, XIV, LGPD).</p>
              <p><strong className="text-foreground">k) Incidente de Segurança:</strong> Qualquer evento adverso, confirmado ou sob suspeita, relacionado à violação na segurança de dados pessoais, tais como acesso não autorizado, destruição, perda, alteração ou vazamento de dados.</p>
              <p><strong className="text-foreground">l) Transferência Internacional de Dados:</strong> Transferência de dados pessoais para país estrangeiro ou organismo internacional do qual o país seja membro, nos termos dos arts. 33 a 36 da LGPD.</p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Controlador e DPO */}
      <AnimatedSection delay={100}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo II  -  Identificação do Controlador e do Encarregado</h2>
          
          <h3 className="text-xl font-semibold mb-4 text-foreground">3. Controlador de Dados</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              3.1. A Cheetah Solutions Network é a pessoa jurídica de direito privado que figura como Controladora 
              dos dados pessoais tratados no âmbito de suas atividades, nos termos do art. 5º, VI, da LGPD, sendo 
              responsável pelas decisões referentes ao tratamento de dados pessoais descritos nesta Política.
            </p>
            <div className="p-5 bg-card/50 rounded-lg border border-border/50 space-y-2">
              <p><strong className="text-foreground">Razão Social:</strong> Cheetah Solutions Network</p>
              <p><strong className="text-foreground">Sede Operacional:</strong> Recife, Pernambuco  -  Brasil</p>
              <p><strong className="text-foreground">E-mail Institucional:</strong> contatocheetahsolutions@gmail.com</p>
              <p><strong className="text-foreground">Website:</strong> https://cheetahnetwork.com.br</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">4. Encarregado de Proteção de Dados (DPO)</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              4.1. Em cumprimento ao disposto no art. 41 da LGPD, a Cheetah Solutions Network designou um 
              Encarregado de Proteção de Dados Pessoais (Data Protection Officer  -  DPO), cuja identidade e 
              informações de contato são divulgadas publicamente, conforme exigência legal.
            </p>
            <p>
              4.2. O Encarregado é responsável por: (i) aceitar reclamações e comunicações dos Titulares, prestar 
              esclarecimentos e adotar providências; (ii) receber comunicações da Autoridade Nacional de Proteção 
              de Dados (ANPD) e adotar providências; (iii) orientar os funcionários e contratados da entidade a 
              respeito das práticas a serem adotadas em relação à proteção de dados pessoais; (iv) executar as 
              demais atribuições determinadas pelo Controlador ou estabelecidas em normas complementares.
            </p>
            <div className="p-5 bg-card/50 rounded-lg border border-border/50 space-y-2">
              <p><strong className="text-foreground">Encarregado (DPO):</strong> Departamento de Proteção de Dados</p>
              <p><strong className="text-foreground">E-mail:</strong> dpo@cheetahnetwork.com.br</p>
              <p><strong className="text-foreground">Prazo de Resposta:</strong> Até 15 (quinze) dias úteis, prorrogáveis por igual período mediante justificativa fundamentada</p>
              <p><strong className="text-foreground">Horário de Atendimento:</strong> Segunda a sexta-feira, das 09h às 18h (horário de Brasília)</p>
            </div>
            <p>
              4.3. As comunicações dirigidas ao Encarregado devem ser realizadas preferencialmente por meio do 
              endereço eletrônico indicado acima, contendo: (i) identificação completa do Titular; (ii) descrição 
              detalhada da solicitação; (iii) documentação comprobatória, quando aplicável. A Cheetah reserva-se 
              o direito de solicitar informações adicionais para verificação de identidade e legitimidade da 
              solicitação, em conformidade com o princípio da segurança (art. 6º, VII, LGPD).
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Dados Coletados */}
      <AnimatedSection delay={200}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo III  -  Dados Pessoais Objeto de Tratamento</h2>
          
          <h3 className="text-xl font-semibold mb-4 text-foreground">5. Categorias de Dados Coletados</h3>
          <div className="space-y-6 text-muted-foreground">
            <p>
              5.1. A Cheetah Solutions Network coleta e trata dados pessoais estritamente necessários para as 
              finalidades descritas nesta Política, observando os princípios da finalidade, adequação e necessidade 
              previstos no art. 6º da LGPD. As categorias de dados tratados incluem, sem se limitar a:
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">5.1.1. Dados de Identificação Pessoal</h4>
                <ul className="space-y-2 ml-4">
                  <li>• Nome completo, nome social e razão social (quando aplicável)</li>
                  <li>• Número de CPF (Cadastro de Pessoas Físicas) e/ou CNPJ (Cadastro Nacional da Pessoa Jurídica)</li>
                  <li>• Número de RG (Registro Geral) e órgão expedidor</li>
                  <li>• Data de nascimento e nacionalidade</li>
                  <li>• Endereço de e-mail pessoal e/ou corporativo</li>
                  <li>• Número de telefone fixo e/ou celular, incluindo código de país e área</li>
                  <li>• Endereço completo (logradouro, número, complemento, bairro, cidade, estado, CEP)</li>
                  <li>• Fotografia, avatar ou imagem de perfil</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">5.1.2. Dados Profissionais e Corporativos</h4>
                <ul className="space-y-2 ml-4">
                  <li>• Cargo, função e departamento</li>
                  <li>• Nome da empresa ou organização a que se vincula</li>
                  <li>• Setor de atuação e porte da empresa</li>
                  <li>• Informações sobre necessidades operacionais e desafios tecnológicos</li>
                  <li>• Histórico de interações comerciais e projetos</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">5.1.3. Dados de Navegação e Técnicos</h4>
                <ul className="space-y-2 ml-4">
                  <li>• Endereço IP (Internet Protocol), incluindo IPv4 e IPv6</li>
                  <li>• Dados de geolocalização aproximada (derivados do endereço IP)</li>
                  <li>• Tipo, versão e configuração do navegador (User-Agent)</li>
                  <li>• Sistema operacional, resolução de tela e tipo de dispositivo</li>
                  <li>• Páginas visitadas, URLs de referência (referrer), tempo de permanência e sequência de navegação</li>
                  <li>• Identificadores únicos de dispositivo (Device ID, Advertising ID)</li>
                  <li>• Cookies, pixels de rastreamento, web beacons e tecnologias similares</li>
                  <li>• Dados de sessão, incluindo horário de acesso, frequência e padrões de uso</li>
                  <li>• Logs de acesso, conforme art. 15 do Marco Civil da Internet</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">5.1.4. Dados Contratuais e Financeiros</h4>
                <ul className="space-y-2 ml-4">
                  <li>• Histórico de contratação de serviços e propostas comerciais</li>
                  <li>• Dados de faturamento e informações fiscais</li>
                  <li>• Informações de pagamento (processadas exclusivamente por operadores de pagamento certificados PCI-DSS  -  a Cheetah não armazena dados de cartão de crédito)</li>
                  <li>• Registros de comunicações comerciais, suporte técnico e atendimento</li>
                  <li>• Termos contratuais aceitos e respectivas versões</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">5.1.5. Dados Obtidos de Fontes Públicas ou Terceiros</h4>
                <ul className="space-y-2 ml-4">
                  <li>• Dados disponíveis publicamente em redes sociais profissionais (LinkedIn, GitHub)</li>
                  <li>• Informações fornecidas por parceiros comerciais, com consentimento do Titular</li>
                  <li>• Dados de consultas em bases públicas (Receita Federal, Juntas Comerciais), quando necessário para cumprimento de obrigações legais ou execução contratual</li>
                </ul>
              </div>
            </div>

            <p>
              5.2. A Cheetah Solutions Network declara que NÃO coleta, de forma deliberada, dados pessoais sensíveis 
              conforme definidos no art. 5º, II, da LGPD, exceto quando estritamente necessário para cumprimento 
              de obrigação legal ou regulatória, e sempre mediante consentimento específico e destacado do Titular, 
              nos termos do art. 11 da LGPD.
            </p>
            <p>
              5.3. A Cheetah Solutions Network NÃO realiza, de forma deliberada, o tratamento de dados pessoais 
              de crianças e adolescentes menores de 18 (dezoito) anos. Nossos serviços são destinados exclusivamente 
              a pessoas maiores de idade e capazes. Caso a Controladora identifique que coletou dados de menor 
              de idade sem o consentimento específico e em destaque de pelo menos um dos pais ou responsável legal, 
              tais dados serão eliminados imediatamente, nos termos do art. 14 da LGPD.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Finalidades e Bases Legais */}
      <AnimatedSection delay={300}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo IV  -  Finalidades e Bases Legais do Tratamento</h2>
          
          <h3 className="text-xl font-semibold mb-4 text-foreground">6. Finalidades do Tratamento</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              6.1. Os dados pessoais coletados pela Cheetah Solutions Network são tratados para as seguintes 
              finalidades específicas e determinadas, observando-se o princípio da adequação entre o tratamento 
              e as finalidades informadas ao Titular:
            </p>

            <div className="grid gap-4 mt-6">
              <div className="p-5 bg-card/50 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">6.1.1. Prestação e Execução de Serviços</h4>
                <p className="text-sm">Gerenciar e executar os serviços contratados, incluindo diagnóstico operacional, arquitetura de sistemas, desenvolvimento de soluções tecnológicas, implementação de infraestrutura, suporte técnico continuado, gestão de projetos, comunicação sobre andamento de entregas e cumprimento de obrigações contratuais assumidas perante o cliente.</p>
              </div>
              <div className="p-5 bg-card/50 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">6.1.2. Comunicação Institucional e Comercial</h4>
                <p className="text-sm">Responder solicitações, dúvidas e reclamações; enviar informações relevantes sobre nossos serviços, atualizações de plataforma, novidades institucionais e conteúdo educacional (mediante consentimento prévio e expresso, quando exigido); realizar pesquisas de satisfação e feedback.</p>
              </div>
              <div className="p-5 bg-card/50 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">6.1.3. Cumprimento de Obrigações Legais e Regulatórias</h4>
                <p className="text-sm">Cumprir obrigações legais, fiscais, contábeis e regulatórias, incluindo emissão de notas fiscais, retenção de impostos, prestação de informações a autoridades competentes, atendimento a ordens judiciais e administrativas, cumprimento de obrigações trabalhistas e previdenciárias e guarda de registros de acesso conforme Marco Civil da Internet.</p>
              </div>
              <div className="p-5 bg-card/50 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">6.1.4. Segurança e Prevenção a Fraudes</h4>
                <p className="text-sm">Proteger a integridade e segurança de nossos sistemas, plataformas e dados; prevenir, detectar e investigar atividades fraudulentas, abusivas ou ilegais; implementar controles de acesso e autenticação; realizar auditorias de segurança; garantir a continuidade e disponibilidade dos serviços.</p>
              </div>
              <div className="p-5 bg-card/50 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">6.1.5. Melhoria Contínua e Análise</h4>
                <p className="text-sm">Analisar padrões de uso e comportamento de navegação (de forma agregada e anonimizada, sempre que possível) para aprimorar nossos serviços, personalizar experiências, desenvolver novas funcionalidades, realizar testes A/B, gerar relatórios internos de performance e fundamentar decisões estratégicas.</p>
              </div>
              <div className="p-5 bg-card/50 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">6.1.6. Exercício Regular de Direitos</h4>
                <p className="text-sm">Exercer direitos em processo judicial, administrativo ou arbitral, incluindo a produção de provas, defesa em litígios, cumprimento de decisões judiciais e proteção dos interesses legítimos da Controladora, nos termos do art. 7º, VI, da LGPD.</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">7. Bases Legais para o Tratamento</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>7.1. O tratamento de dados pessoais pela Cheetah Solutions Network é fundamentado nas seguintes bases legais previstas no art. 7º da LGPD, aplicáveis conforme a finalidade específica de cada operação de tratamento:</p>
            <ul className="space-y-4 ml-4">
              <li><strong className="text-foreground">a) Consentimento do Titular (Art. 7º, I):</strong> Para o envio de comunicações de marketing, newsletters, materiais promocionais e pesquisas de satisfação. O consentimento será coletado de forma livre, informada, inequívoca e para finalidade determinada, podendo ser revogado a qualquer tempo, sem ônus, mediante manifestação expressa do Titular.</li>
              <li><strong className="text-foreground">b) Cumprimento de Obrigação Legal ou Regulatória (Art. 7º, II):</strong> Para atendimento a obrigações fiscais (emissão de NF-e, retenção de tributos), trabalhistas, contábeis, regulatórias e para guarda de registros de acesso a aplicações de internet pelo prazo de 6 meses, conforme art. 15 do Marco Civil da Internet.</li>
              <li><strong className="text-foreground">c) Execução de Contrato ou Procedimentos Preliminares (Art. 7º, V):</strong> Para prestação dos serviços contratados, gestão do relacionamento comercial, elaboração de propostas, negociação de termos contratuais e cumprimento de obrigações decorrentes de contratos celebrados com o Titular.</li>
              <li><strong className="text-foreground">d) Exercício Regular de Direitos (Art. 7º, VI):</strong> Para defesa em processos judiciais, administrativos ou arbitrais, produção de provas e proteção de direitos legítimos da Controladora.</li>
              <li><strong className="text-foreground">e) Proteção do Crédito (Art. 7º, X):</strong> Para análise de crédito, cobrança de valores devidos e proteção dos interesses financeiros da Controladora, nos termos da legislação aplicável.</li>
              <li><strong className="text-foreground">f) Legítimo Interesse do Controlador (Art. 7º, IX):</strong> Para análises estatísticas e de mercado, melhoria de serviços e plataformas, personalização da experiência do usuário, prevenção de fraudes e garantia da segurança dos sistemas, sempre observados os direitos e liberdades fundamentais do Titular que exijam a proteção de dados pessoais, mediante avaliação de impacto quando necessário (Legitimate Interest Assessment  -  LIA).</li>
            </ul>
            <p>
              7.2. A Cheetah Solutions Network mantém registro atualizado das operações de tratamento de dados pessoais 
              realizadas, incluindo a indicação da base legal aplicável a cada finalidade, em conformidade com o 
              art. 37 da LGPD, disponível para apresentação à ANPD quando solicitado.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Compartilhamento */}
      <AnimatedSection delay={400}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo V  -  Compartilhamento, Transferência Internacional e Operadores</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">8. Compartilhamento de Dados com Terceiros</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              8.1. A Cheetah Solutions Network poderá compartilhar dados pessoais dos Titulares com terceiros 
              nas hipóteses abaixo descritas, sempre observando os princípios de finalidade, adequação e necessidade, 
              e exigindo dos destinatários o mesmo nível de proteção conferido por esta Política:
            </p>
            <ul className="space-y-4 ml-4">
              <li><strong className="text-foreground">a) Operadores e Suboperadores:</strong> Empresas e profissionais que prestam serviços em nome da Controladora, incluindo, sem limitação: provedores de hospedagem e infraestrutura em nuvem (cloud computing); processadores de pagamento certificados PCI-DSS; ferramentas de análise de dados e business intelligence; plataformas de comunicação e atendimento ao cliente; serviços de e-mail marketing e automação. Esses operadores atuam sob instruções contratuais específicas e estão vinculados por cláusulas de confidencialidade e proteção de dados.</li>
              <li><strong className="text-foreground">b) Parceiros Comerciais e de Tecnologia:</strong> Quando estritamente necessário para a execução dos serviços contratados pelo cliente, mediante consentimento prévio ou com base em outra hipótese legal aplicável, e sempre sob acordos de proteção de dados (Data Processing Agreements  -  DPAs).</li>
              <li><strong className="text-foreground">c) Autoridades Públicas e Órgãos Reguladores:</strong> Quando exigido por lei, regulamento, ordem judicial ou determinação de autoridade competente, incluindo a ANPD, Ministério Público, Poder Judiciário, autoridades tributárias e órgãos de fiscalização setorial.</li>
              <li><strong className="text-foreground">d) Assessores Jurídicos e Auditores:</strong> Para fins de assessoria jurídica, auditoria independente, due diligence ou cumprimento de obrigações de compliance, sob sigilo profissional.</li>
              <li><strong className="text-foreground">e) Reorganização Societária:</strong> Em caso de fusão, aquisição, cisão, incorporação ou qualquer outra forma de reorganização societária, os dados pessoais poderão ser transferidos ao sucessor ou adquirente, mantendo-se as garantias de proteção previstas nesta Política e com notificação prévia aos Titulares.</li>
            </ul>
            <p className="mt-4">
              <strong className="text-foreground">8.2. Declaração Expressa:</strong> A Cheetah Solutions Network 
              NÃO vende, aluga, comercializa, cede ou transfere dados pessoais a terceiros para finalidades 
              de marketing direto, publicidade comportamental ou qualquer outra finalidade comercial não 
              relacionada à prestação de seus serviços, salvo mediante consentimento específico e destacado do Titular.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">9. Transferência Internacional de Dados</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              9.1. Em razão da natureza de nossos serviços e da utilização de infraestrutura tecnológica global, 
              dados pessoais poderão ser transferidos para servidores localizados em outros países, incluindo, 
              mas não se limitando a, Estados Unidos da América e países do Espaço Econômico Europeu.
            </p>
            <p>
              9.2. Tais transferências serão realizadas exclusivamente nas hipóteses previstas nos arts. 33 a 36 
              da LGPD, incluindo: (i) transferência para países ou organismos internacionais que proporcionem 
              grau de proteção de dados pessoais adequado ao previsto na LGPD; (ii) quando o Controlador oferecer 
              e comprovar garantias de cumprimento dos princípios e direitos do Titular, mediante cláusulas 
              contratuais específicas, cláusulas-padrão contratuais ou normas corporativas globais; (iii) quando 
              a transferência for necessária para a execução de contrato ou procedimentos preliminares relacionados 
              a contrato do qual seja parte o Titular; (iv) quando a transferência for necessária para o cumprimento 
              de obrigação legal ou regulatória.
            </p>
            <p>
              9.3. A Cheetah exige de todos os operadores e parceiros internacionais a adoção de medidas de 
              segurança técnicas e administrativas equivalentes ou superiores àquelas praticadas pela Controladora, 
              formalizadas por meio de Data Processing Agreements (DPAs) e Standard Contractual Clauses (SCCs).
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Segurança e Retenção */}
      <AnimatedSection delay={500}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo VI  -  Segurança, Retenção e Eliminação de Dados</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">10. Medidas de Segurança</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              10.1. A Cheetah Solutions Network implementa e mantém medidas de segurança técnicas e administrativas 
              aptas a proteger os dados pessoais contra acessos não autorizados e situações acidentais ou ilícitas 
              de destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito, 
              em conformidade com o art. 46 da LGPD e as melhores práticas da indústria (ISO/IEC 27001, NIST 
              Cybersecurity Framework, CIS Controls).
            </p>
            <p>10.2. Entre as medidas de segurança adotadas, incluem-se:</p>
            <ul className="space-y-2 ml-4">
              <li>• Criptografia de dados em trânsito (TLS 1.2+) e em repouso (AES-256)</li>
              <li>• Controles de acesso baseados no princípio do menor privilégio (Principle of Least Privilege  -  PoLP) e autenticação multifator (MFA/2FA)</li>
              <li>• Segregação de ambientes (desenvolvimento, homologação e produção)</li>
              <li>• Monitoramento contínuo e em tempo real de sistemas, redes e aplicações</li>
              <li>• Testes periódicos de segurança, incluindo análise de vulnerabilidades e penetration testing</li>
              <li>• Registro e auditoria de logs de acesso e operações sobre dados pessoais</li>
              <li>• Políticas de senhas fortes e rotação periódica de credenciais</li>
              <li>• Firewall de aplicação web (WAF) e proteção contra DDoS</li>
              <li>• Treinamento regular de colaboradores em segurança da informação e proteção de dados</li>
              <li>• Plano de resposta a incidentes de segurança documentado e testado</li>
              <li>• Backup regular e testado de dados com armazenamento em localidade diversa</li>
              <li>• Revisão periódica de acessos e revogação imediata em caso de desligamento</li>
            </ul>
            <p>
              10.3. Apesar dos melhores esforços e das medidas técnicas e administrativas adotadas, a Cheetah 
              Solutions Network não pode garantir a segurança absoluta dos dados, uma vez que nenhum sistema de 
              transmissão ou armazenamento de dados é integralmente seguro. Em caso de incidente de segurança 
              que possa acarretar risco ou dano relevante aos Titulares, a Controladora comunicará a ocorrência 
              à ANPD e aos Titulares afetados em prazo razoável, nos termos do art. 48 da LGPD, informando: 
              (i) a descrição da natureza dos dados pessoais afetados; (ii) as informações sobre os Titulares 
              envolvidos; (iii) a indicação das medidas técnicas e de segurança utilizadas; (iv) os riscos 
              relacionados ao incidente; (v) as medidas que foram ou serão adotadas para reverter ou mitigar 
              os efeitos do prejuízo.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">11. Retenção e Eliminação de Dados</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              11.1. Os dados pessoais serão mantidos pela Cheetah Solutions Network pelo período estritamente 
              necessário para o cumprimento das finalidades para as quais foram coletados, respeitando-se os 
              seguintes critérios e prazos:
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border border-border/50 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-card/50">
                    <th className="text-left p-4 font-semibold text-foreground border-b border-border/50">Categoria de Dados</th>
                    <th className="text-left p-4 font-semibold text-foreground border-b border-border/50">Prazo de Retenção</th>
                    <th className="text-left p-4 font-semibold text-foreground border-b border-border/50">Fundamento Legal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/30">
                    <td className="p-4">Dados Contratuais e Comerciais</td>
                    <td className="p-4">Durante a vigência do contrato + 5 anos</td>
                    <td className="p-4">Art. 206, §5º, CC; Art. 16, I, LGPD</td>
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="p-4">Dados Fiscais e Contábeis</td>
                    <td className="p-4">Mínimo de 5 anos</td>
                    <td className="p-4">CTN, art. 173; legislação tributária</td>
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="p-4">Registros de Acesso a Aplicações</td>
                    <td className="p-4">6 meses</td>
                    <td className="p-4">Art. 15, Marco Civil da Internet</td>
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="p-4">Dados de Navegação e Analytics</td>
                    <td className="p-4">Até 24 meses (anonimização após 6 meses)</td>
                    <td className="p-4">Legítimo interesse, art. 7º, IX, LGPD</td>
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="p-4">Dados de Marketing (com consentimento)</td>
                    <td className="p-4">Até revogação pelo Titular</td>
                    <td className="p-4">Consentimento, art. 7º, I, LGPD</td>
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="p-4">Dados de Candidatos (RH)</td>
                    <td className="p-4">Até 2 anos após o processo seletivo</td>
                    <td className="p-4">Legítimo interesse; prevenção de litígios</td>
                  </tr>
                  <tr>
                    <td className="p-4">Dados para Exercício Regular de Direitos</td>
                    <td className="p-4">Até prescrição do direito (variável)</td>
                    <td className="p-4">Art. 16, II, LGPD; art. 7º, VI, LGPD</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              11.2. Decorrido o prazo de retenção ou cessada a finalidade que justificava o tratamento, os dados 
              pessoais serão eliminados de forma segura e definitiva, ou anonimizados irreversivelmente para fins 
              estatísticos, nos termos do art. 16 da LGPD. A eliminação abrangerá todas as cópias, backups e 
              réplicas dos dados, observados os prazos técnicos necessários para propagação da exclusão em 
              todos os sistemas e ambientes de armazenamento.
            </p>
            <p>
              11.3. O Titular poderá solicitar a eliminação antecipada de seus dados pessoais a qualquer momento, 
              ressalvadas as hipóteses de conservação previstas no art. 16 da LGPD (cumprimento de obrigação 
              legal, estudo por órgão de pesquisa, transferência a terceiro e uso exclusivo do controlador com 
              anonimização).
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Direitos do Titular */}
      <AnimatedSection delay={600}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo VII  -  Direitos do Titular</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">12. Direitos Garantidos pela LGPD</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              12.1. Em conformidade com os arts. 17 a 22 da LGPD, o Titular de dados pessoais tem os seguintes 
              direitos, que poderão ser exercidos mediante requisição formal dirigida ao Encarregado de Proteção 
              de Dados da Cheetah Solutions Network:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Confirmação e Acesso</p>
                      <p className="text-sm text-muted-foreground mt-1">Confirmar a existência de tratamento e obter acesso aos dados pessoais tratados (art. 18, I e II)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Correção</p>
                      <p className="text-sm text-muted-foreground mt-1">Solicitar a correção de dados incompletos, inexatos ou desatualizados (art. 18, III)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Anonimização, Bloqueio ou Eliminação</p>
                      <p className="text-sm text-muted-foreground mt-1">Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade (art. 18, IV)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Portabilidade</p>
                      <p className="text-sm text-muted-foreground mt-1">Solicitar a portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa (art. 18, V)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Eliminação com Consentimento</p>
                      <p className="text-sm text-muted-foreground mt-1">Solicitar a eliminação dos dados pessoais tratados com base no consentimento, exceto nas hipóteses do art. 16 (art. 18, VI)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Informação sobre Compartilhamento</p>
                      <p className="text-sm text-muted-foreground mt-1">Obter informação sobre entidades públicas e privadas com as quais o Controlador realizou uso compartilhado de dados (art. 18, VII)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Informação sobre Consentimento</p>
                      <p className="text-sm text-muted-foreground mt-1">Obter informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa (art. 18, VIII)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Revogação do Consentimento</p>
                      <p className="text-sm text-muted-foreground mt-1">Revogar o consentimento a qualquer momento, mediante manifestação expressa, por procedimento gratuito e facilitado (art. 18, IX)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="mt-6">
              12.2. As requisições dos Titulares serão atendidas no prazo de até 15 (quinze) dias úteis, contados 
              do recebimento da solicitação, podendo ser prorrogado por igual período, mediante justificativa 
              fundamentada, nos termos do art. 19 da LGPD. A Controladora poderá solicitar informações complementares 
              para verificação de identidade do requerente, a fim de prevenir fraudes e garantir a segurança do processo.
            </p>
            <p>
              12.3. O exercício dos direitos previstos neste Capítulo é gratuito, salvo nas hipóteses de 
              requisições manifestamente infundadas ou excessivas, especialmente em razão de seu caráter 
              repetitivo, caso em que a Controladora poderá cobrar taxa razoável, fundamentando a impossibilidade 
              de atendimento imediato, ou recusar o pedido, informando os motivos.
            </p>
            <p>
              12.4. Em caso de impossibilidade de atendimento imediato, a Cheetah informará ao Titular: (i) que 
              não é agente de tratamento dos dados e indicará, sempre que possível, o agente; ou (ii) as razões 
              de fato ou de direito que impedem a adoção imediata da providência.
            </p>
            <p>
              12.5. O Titular que considerar que seus direitos não foram adequadamente atendidos poderá apresentar 
              reclamação à Autoridade Nacional de Proteção de Dados (ANPD), nos termos do art. 18, §1º, da LGPD, 
              ou buscar a tutela de seus direitos perante o Poder Judiciário.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Decisões Automatizadas */}
      <AnimatedSection delay={700}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo VIII  -  Decisões Automatizadas e Profiling</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">13. Tratamento Automatizado de Dados</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              13.1. A Cheetah Solutions Network poderá utilizar processos de tratamento automatizado de dados 
              pessoais, incluindo técnicas de profiling, para as seguintes finalidades: (i) personalização da 
              experiência do usuário em nossas plataformas; (ii) análise de padrões de uso para melhoria de 
              serviços; (iii) detecção e prevenção de fraudes e atividades suspeitas; (iv) segmentação de 
              comunicações institucionais.
            </p>
            <p>
              13.2. O Titular tem o direito de solicitar a revisão de decisões tomadas unicamente com base em 
              tratamento automatizado de dados pessoais que afetem seus interesses, incluindo decisões destinadas 
              a definir seu perfil pessoal, profissional, de consumo e de crédito ou aspectos de sua personalidade, 
              nos termos do art. 20 da LGPD.
            </p>
            <p>
              13.3. A Controladora fornecerá, sempre que solicitado, informações claras e adequadas a respeito 
              dos critérios e procedimentos utilizados para a decisão automatizada, observados os segredos 
              comercial e industrial, nos termos do art. 20, §1º, da LGPD.
            </p>
            <p>
              13.4. Na hipótese de o Controlador não fornecer as informações referidas no item anterior com 
              base na observância de segredo comercial e industrial, a ANPD poderá realizar auditoria para 
              verificação de aspectos discriminatórios no tratamento automatizado de dados pessoais, nos termos 
              do art. 20, §2º, da LGPD.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Cookies */}
      <AnimatedSection delay={800}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo IX  -  Cookies e Tecnologias de Rastreamento</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">14. Utilização de Cookies</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              14.1. A Cheetah Solutions Network utiliza cookies e tecnologias similares (web beacons, pixels 
              de rastreamento, local storage, session storage) em seus websites e plataformas para garantir 
              o funcionamento adequado, melhorar a experiência do usuário e coletar dados analíticos.
            </p>
            <p>
              14.2. Para informações detalhadas sobre os tipos de cookies utilizados, suas finalidades, duração 
              e procedimentos para gerenciamento de preferências, consulte nossa Política de Cookies, disponível 
              em seção específica de nosso website, que integra e complementa esta Política de Privacidade.
            </p>
            <p>
              14.3. O consentimento para a utilização de cookies não essenciais será coletado mediante mecanismo 
              claro e acessível (banner de cookies), previamente à ativação de tais cookies, e poderá ser 
              revogado a qualquer tempo pelo Titular, por meio das configurações de seu navegador ou do painel 
              de gerenciamento de preferências de cookies disponibilizado em nossa plataforma.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Alterações */}
      <AnimatedSection delay={900}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Capítulo X  -  Alterações, Vigência e Disposições Finais</h2>

          <h3 className="text-xl font-semibold mb-4 text-foreground">15. Alterações desta Política</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              15.1. A Cheetah Solutions Network reserva-se o direito de modificar, atualizar ou revisar esta 
              Política de Privacidade a qualquer momento, unilateralmente, para refletir alterações em nossas 
              práticas de tratamento de dados, mudanças legislativas ou regulatórias, decisões judiciais ou 
              administrativas, orientações da ANPD, ou por razões operacionais, comerciais ou de segurança.
            </p>
            <p>
              15.2. Qualquer alteração material desta Política será comunicada aos Titulares por meio de: 
              (i) aviso destacado em nosso website; (ii) notificação por e-mail, quando dispusermos de endereço 
              eletrônico do Titular; (iii) banner ou pop-up informativo na plataforma; ou (iv) qualquer outro 
              meio de comunicação adequado e eficaz.
            </p>
            <p>
              15.3. A versão atualizada desta Política entrará em vigor na data indicada no cabeçalho do documento. 
              O uso continuado dos serviços da Cheetah após a publicação de alterações constituirá aceitação 
              tácita dos novos termos. Caso o Titular não concorde com as alterações, deverá cessar a utilização 
              dos serviços e poderá solicitar a eliminação de seus dados pessoais, nos termos desta Política.
            </p>
            <p>
              15.4. As versões anteriores desta Política serão mantidas em arquivo pela Controladora e poderão 
              ser disponibilizadas mediante solicitação do Titular.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">16. Legislação Aplicável e Foro</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              16.1. Esta Política de Privacidade é regida e interpretada de acordo com as leis da República 
              Federativa do Brasil, em especial a Lei nº 13.709/2018 (LGPD), a Lei nº 12.965/2014 (Marco 
              Civil da Internet), o Decreto nº 8.771/2016, a Lei nº 8.078/1990 (Código de Defesa do Consumidor) 
              e a Lei nº 10.406/2002 (Código Civil).
            </p>
            <p>
              16.2. Fica eleito o foro da Comarca de Recife, Estado de Pernambuco, Brasil, para dirimir 
              quaisquer controvérsias decorrentes desta Política, com renúncia expressa a qualquer outro, 
              por mais privilegiado que seja, ressalvado o foro do domicílio do consumidor, nos termos do 
              art. 101, I, do Código de Defesa do Consumidor.
            </p>
            <p>
              16.3. As partes concordam em buscar, preferencialmente, a resolução amigável de eventuais 
              divergências relacionadas a esta Política, incluindo mediação e conciliação, antes de recorrerem 
              ao Poder Judiciário.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">17. Contato</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              17.1. Para questões, dúvidas, reclamações ou solicitações relacionadas a esta Política de 
              Privacidade ou ao tratamento de seus dados pessoais, o Titular poderá entrar em contato com 
              o Encarregado de Proteção de Dados (DPO) pelos seguintes canais:
            </p>
            <div className="p-5 bg-card/50 rounded-lg border border-border/50 space-y-3">
              <p><strong className="text-foreground">Encarregado de Proteção de Dados (DPO)</strong></p>
              <p>E-mail: <a href="mailto:dpo@cheetahnetwork.com.br" className="text-primary hover:underline">dpo@cheetahnetwork.com.br</a></p>
              <p>E-mail Institucional: <a href="mailto:contatocheetahsolutions@gmail.com" className="text-primary hover:underline">contatocheetahsolutions@gmail.com</a></p>
              <p>Prazo de resposta: até 15 (quinze) dias úteis, prorrogáveis por igual período</p>
              <p>Horário de atendimento: segunda a sexta-feira, das 09h às 18h (horário de Brasília)</p>
            </div>
            <p className="mt-4">
              17.2. O Titular poderá, ainda, apresentar reclamação junto à Autoridade Nacional de Proteção 
              de Dados (ANPD), por meio do endereço eletrônico oficial da autoridade, caso considere que 
              seus direitos não foram adequadamente atendidos.
            </p>
          </div>

          <div className="mt-10 p-6 bg-card/30 rounded-lg border border-border/50">
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong className="text-foreground">Documento:</strong> Política de Privacidade  -  Cheetah Solutions Network</p>
                <p><strong className="text-foreground">Versão:</strong> 3.0</p>
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

export default PrivacyPolicyPage;
