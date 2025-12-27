import AnimatedSection from "@/components/AnimatedSection";
import PolicyLayout from "@/components/legal/PolicyLayout";

const TermsOfUse = () => {
  return (
    <PolicyLayout title="Termos de Uso" lastUpdated="Dezembro de 2024">
      <AnimatedSection>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">1. Aceitação dos Termos</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Ao acessar, navegar ou utilizar qualquer serviço, plataforma, sistema ou solução desenvolvida, 
              mantida ou fornecida pela Cheetah Solutions Network LTDA ("Cheetah", "nós", "nosso"), você 
              ("Usuário", "Cliente", "Contratante") reconhece ter lido, compreendido e concordado integralmente 
              com os presentes Termos de Uso.
            </p>
            <p>
              A utilização de nossos serviços implica na aceitação tácita e expressa de todas as disposições 
              aqui contidas, bem como de quaisquer políticas complementares referenciadas neste documento. 
              Caso não concorde com qualquer termo ou condição, solicitamos que não utilize nossos serviços.
            </p>
            <p>
              Estes Termos de Uso constituem um contrato juridicamente vinculante entre você e a Cheetah 
              Solutions Network, regido pelas leis da República Federativa do Brasil, em especial pelo 
              Código Civil, Código de Defesa do Consumidor (quando aplicável), Lei Geral de Proteção de 
              Dados (Lei nº 13.709/2018) e Marco Civil da Internet (Lei nº 12.965/2014).
            </p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">2. Definições</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>Para fins destes Termos de Uso, considera-se:</p>
            <ul className="space-y-3 ml-4">
              <li><strong className="text-foreground">Serviços:</strong> Conjunto de soluções tecnológicas, plataformas digitais, sistemas, aplicações, consultoria técnica e suporte oferecidos pela Cheetah Solutions Network.</li>
              <li><strong className="text-foreground">Usuário:</strong> Pessoa física ou jurídica que acessa, utiliza ou contrata os serviços da Cheetah Solutions Network.</li>
              <li><strong className="text-foreground">Plataforma:</strong> Ambiente digital, website, sistema ou aplicação desenvolvida ou mantida pela Cheetah Solutions Network.</li>
              <li><strong className="text-foreground">Conteúdo:</strong> Todo e qualquer material, informação, dado, texto, imagem, código, documentação ou arquivo disponibilizado através de nossos serviços.</li>
              <li><strong className="text-foreground">Dados Pessoais:</strong> Informações relacionadas a pessoa natural identificada ou identificável, conforme definição da LGPD.</li>
              <li><strong className="text-foreground">Propriedade Intelectual:</strong> Direitos autorais, marcas, patentes, segredos comerciais, know-how e quaisquer outros direitos de propriedade intelectual.</li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">3. Serviços Oferecidos</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>A Cheetah Solutions Network oferece os seguintes serviços, sujeitos a termos específicos:</p>
            <div className="grid gap-4 mt-6">
              <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">Desenvolvimento de Software</h4>
                <p className="text-sm">Criação de sistemas, aplicações web, mobile e soluções personalizadas conforme especificações do cliente, incluindo análise de requisitos, arquitetura, implementação, testes e documentação.</p>
              </div>
              <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">Manutenção e Suporte</h4>
                <p className="text-sm">Serviços contínuos de manutenção corretiva, evolutiva e preventiva, incluindo correção de bugs, atualizações de segurança, otimizações de performance e suporte técnico.</p>
              </div>
              <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">Consultoria Técnica</h4>
                <p className="text-sm">Serviços de consultoria em arquitetura de sistemas, migração de plataformas, auditoria de código, análise de segurança e recomendações estratégicas de tecnologia.</p>
              </div>
              <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">Hospedagem e Infraestrutura</h4>
                <p className="text-sm">Serviços de hospedagem, gerenciamento de servidores, configuração de ambientes cloud, monitoramento de disponibilidade e backup de dados.</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={300}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">4. Obrigações do Usuário</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>Ao utilizar nossos serviços, você se compromete a:</p>
            <ul className="space-y-3 ml-4">
              <li>• Fornecer informações verdadeiras, precisas, atuais e completas quando solicitado</li>
              <li>• Manter a confidencialidade de suas credenciais de acesso e notificar imediatamente qualquer uso não autorizado</li>
              <li>• Utilizar os serviços em conformidade com a legislação aplicável e as políticas da Cheetah Solutions Network</li>
              <li>• Respeitar os direitos de propriedade intelectual da Cheetah e de terceiros</li>
              <li>• Não utilizar os serviços para fins ilícitos, fraudulentos ou que possam causar danos</li>
              <li>• Manter backups de seus dados quando aplicável e recomendado</li>
              <li>• Comunicar tempestivamente qualquer problema, falha ou vulnerabilidade identificada</li>
              <li>• Cumprir os prazos e condições estabelecidos em contratos específicos de prestação de serviços</li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={400}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">5. Obrigações da Cheetah Solutions Network</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>A Cheetah Solutions Network se compromete a:</p>
            <ul className="space-y-3 ml-4">
              <li>• Prestar os serviços contratados com diligência, qualidade e profissionalismo</li>
              <li>• Manter a confidencialidade das informações do cliente conforme política de privacidade</li>
              <li>• Implementar medidas de segurança adequadas para proteção de dados e sistemas</li>
              <li>• Fornecer suporte técnico dentro dos níveis de serviço acordados</li>
              <li>• Comunicar previamente manutenções programadas que possam afetar a disponibilidade</li>
              <li>• Manter documentação atualizada dos serviços prestados</li>
              <li>• Cumprir a legislação aplicável, especialmente em matéria de proteção de dados</li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={500}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">6. Propriedade Intelectual</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Todos os direitos de propriedade intelectual relacionados aos nossos serviços, incluindo mas não 
              se limitando a marcas, logotipos, design, código-fonte proprietário, documentação, metodologias 
              e know-how, são de propriedade exclusiva da Cheetah Solutions Network ou de seus licenciadores.
            </p>
            <p>
              O desenvolvimento de software sob encomenda segue as disposições do contrato específico de 
              prestação de serviços, podendo prever a cessão de direitos autorais patrimoniais ao cliente 
              mediante pagamento integral do projeto.
            </p>
            <p>
              É expressamente vedado ao Usuário reproduzir, modificar, distribuir, transmitir, exibir, 
              publicar, licenciar, criar obras derivadas ou explorar comercialmente qualquer conteúdo 
              protegido sem autorização prévia e expressa da Cheetah Solutions Network.
            </p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={600}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">7. Limitação de Responsabilidade</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              A Cheetah Solutions Network não será responsável por danos indiretos, incidentais, especiais, 
              consequenciais ou punitivos, incluindo, mas não se limitando a, perda de lucros, dados, uso, 
              goodwill ou outras perdas intangíveis, resultantes do uso ou impossibilidade de uso dos serviços.
            </p>
            <p>
              Nossa responsabilidade total por quaisquer reclamações relacionadas aos serviços será limitada 
              ao valor efetivamente pago pelo cliente nos últimos 12 (doze) meses anteriores ao evento que 
              deu origem à reclamação.
            </p>
            <p>
              As limitações de responsabilidade estabelecidas nesta seção aplicam-se na extensão máxima 
              permitida pela legislação aplicável.
            </p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={700}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">8. Vigência e Rescisão</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Estes Termos de Uso entram em vigor na data de aceitação e permanecem válidos por tempo 
              indeterminado, até que sejam atualizados ou rescindidos por qualquer das partes.
            </p>
            <p>
              A Cheetah Solutions Network reserva-se o direito de atualizar estes Termos de Uso a qualquer 
              momento, mediante comunicação prévia com antecedência mínima de 30 (trinta) dias, através de 
              e-mail ou aviso em nossa plataforma.
            </p>
            <p>
              O uso continuado dos serviços após a comunicação de alterações constitui aceitação tácita 
              dos novos termos. Caso não concorde com as alterações, você deve cessar o uso dos serviços.
            </p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={800}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">9. Disposições Gerais</h2>
          <div className="space-y-4 text-muted-foreground">
            <p><strong className="text-foreground">Legislação Aplicável:</strong> Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil.</p>
            <p><strong className="text-foreground">Foro:</strong> Fica eleito o foro da comarca de Recife, Estado de Pernambuco, para dirimir quaisquer controvérsias decorrentes destes Termos de Uso, com renúncia expressa a qualquer outro, por mais privilegiado que seja.</p>
            <p><strong className="text-foreground">Independência das Cláusulas:</strong> Caso qualquer disposição destes Termos seja considerada inválida ou inexequível, as demais disposições permanecerão em pleno vigor e efeito.</p>
            <p><strong className="text-foreground">Não Renúncia:</strong> A falha da Cheetah Solutions Network em exercer qualquer direito previsto nestes Termos não constituirá renúncia a tal direito.</p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={900}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">10. Contato</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>Para dúvidas, solicitações ou reclamações relacionadas a estes Termos de Uso, entre em contato:</p>
            <div className="p-4 bg-card/50 rounded-lg border border-border/50 space-y-2">
              <p><strong className="text-foreground">Cheetah Solutions Network LTDA</strong></p>
              <p>E-mail: juridico@cheetahnetwork.com.br</p>
              <p>E-mail geral: contatocheetahsolutions@gmail.com</p>
              <p>Localização: Recife, PE — Brasil</p>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </PolicyLayout>
  );
};

export default TermsOfUse;