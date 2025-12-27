import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import PolicyLayout from "@/components/legal/PolicyLayout";

const PrivacyPolicyPage = () => {
  return (
    <PolicyLayout title="Política de Privacidade" lastUpdated="Dezembro de 2024">
      <AnimatedSection>
        <section className="mb-12">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm text-green-500 font-medium">LGPD Compliant</span>
          </div>
          
          <h2 className="text-2xl font-bold mb-6 text-foreground">1. Introdução</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              A Cheetah Solutions Network LTDA ("Cheetah", "nós", "nosso") tem como prioridade a proteção 
              da privacidade e dos dados pessoais de seus clientes, usuários, parceiros e colaboradores. 
              Esta Política de Privacidade descreve como coletamos, usamos, armazenamos, compartilhamos 
              e protegemos seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados 
              (Lei nº 13.709/2018 - LGPD) e demais legislações aplicáveis.
            </p>
            <p>
              Ao utilizar nossos serviços, acessar nossas plataformas ou fornecer seus dados pessoais, 
              você reconhece ter lido e compreendido esta política. Recomendamos a leitura integral 
              deste documento antes de prosseguir.
            </p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">2. Controlador de Dados</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              A Cheetah Solutions Network LTDA é a controladora dos dados pessoais tratados através de 
              seus serviços e plataformas. Como controladora, somos responsáveis pelas decisões referentes 
              ao tratamento de seus dados pessoais.
            </p>
            <div className="p-4 bg-card/50 rounded-lg border border-border/50 space-y-2">
              <p><strong className="text-foreground">Razão Social:</strong> Cheetah Solutions Network LTDA</p>
              <p><strong className="text-foreground">Localização:</strong> Recife, PE — Brasil</p>
              <p><strong className="text-foreground">E-mail DPO:</strong> dpo@cheetahnetwork.com.br</p>
              <p><strong className="text-foreground">E-mail Geral:</strong> contatocheetahsolutions@gmail.com</p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">3. Dados Coletados</h2>
          <div className="space-y-6 text-muted-foreground">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">3.1. Dados de Identificação</h3>
              <ul className="space-y-2 ml-4">
                <li>• Nome completo e razão social (quando aplicável)</li>
                <li>• Endereço de e-mail</li>
                <li>• Número de telefone e celular</li>
                <li>• CPF/CNPJ</li>
                <li>• Endereço completo</li>
                <li>• Dados profissionais (cargo, empresa)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">3.2. Dados de Navegação</h3>
              <ul className="space-y-2 ml-4">
                <li>• Endereço IP e localização aproximada</li>
                <li>• Tipo e versão do navegador</li>
                <li>• Sistema operacional e dispositivo</li>
                <li>• Páginas visitadas e tempo de permanência</li>
                <li>• Origem do tráfego (referrer)</li>
                <li>• Cookies e identificadores de sessão</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">3.3. Dados Contratuais e Financeiros</h3>
              <ul className="space-y-2 ml-4">
                <li>• Histórico de contratação de serviços</li>
                <li>• Informações de pagamento (processadas por gateways seguros)</li>
                <li>• Dados de faturamento</li>
                <li>• Comunicações comerciais e suporte</li>
              </ul>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={300}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">4. Finalidades do Tratamento</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>Os dados pessoais coletados são utilizados para as seguintes finalidades:</p>
            
            <div className="grid gap-4 mt-6">
              <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">Prestação de Serviços</h4>
                <p className="text-sm">Executar os serviços contratados, gerenciar projetos, fornecer suporte técnico e manter comunicação sobre o andamento dos trabalhos.</p>
              </div>
              <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">Comunicação</h4>
                <p className="text-sm">Responder solicitações, enviar informações relevantes sobre nossos serviços, atualizações e novidades (com consentimento).</p>
              </div>
              <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">Obrigações Legais</h4>
                <p className="text-sm">Cumprir obrigações legais, fiscais e regulatórias, incluindo emissão de notas fiscais e atendimento a ordens judiciais.</p>
              </div>
              <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">Melhoria de Serviços</h4>
                <p className="text-sm">Analisar padrões de uso para aprimorar nossos serviços, personalizar experiências e desenvolver novas funcionalidades.</p>
              </div>
              <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">Segurança</h4>
                <p className="text-sm">Proteger contra fraudes, acessos não autorizados e garantir a segurança de nossos sistemas e plataformas.</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={400}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">5. Bases Legais</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>O tratamento de dados pessoais pela Cheetah Solutions Network é fundamentado nas seguintes bases legais previstas na LGPD:</p>
            <ul className="space-y-3 ml-4">
              <li><strong className="text-foreground">Execução de Contrato (Art. 7º, V):</strong> Para prestação dos serviços contratados e gerenciamento da relação comercial.</li>
              <li><strong className="text-foreground">Consentimento (Art. 7º, I):</strong> Para envio de comunicações de marketing e newsletters, quando aplicável.</li>
              <li><strong className="text-foreground">Obrigação Legal (Art. 7º, II):</strong> Para cumprimento de obrigações fiscais, contábeis e regulatórias.</li>
              <li><strong className="text-foreground">Legítimo Interesse (Art. 7º, IX):</strong> Para análises estatísticas, melhoria de serviços e prevenção de fraudes.</li>
              <li><strong className="text-foreground">Exercício Regular de Direitos (Art. 7º, VI):</strong> Para defesa em processos judiciais ou administrativos.</li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={500}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">6. Compartilhamento de Dados</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              A Cheetah Solutions Network pode compartilhar dados pessoais com terceiros nas seguintes situações:
            </p>
            <ul className="space-y-3 ml-4">
              <li><strong className="text-foreground">Prestadores de Serviços:</strong> Empresas que prestam serviços em nosso nome (hospedagem, processamento de pagamentos, análise de dados), sempre com garantias contratuais de proteção.</li>
              <li><strong className="text-foreground">Parceiros de Negócios:</strong> Quando necessário para execução dos serviços contratados pelo cliente, com consentimento prévio.</li>
              <li><strong className="text-foreground">Autoridades Públicas:</strong> Quando exigido por lei, ordem judicial ou determinação de autoridade competente.</li>
              <li><strong className="text-foreground">Proteção de Direitos:</strong> Para proteger nossos direitos, segurança ou propriedade, e de nossos clientes e usuários.</li>
            </ul>
            <p className="mt-6">
              <strong className="text-foreground">Importante:</strong> Não vendemos, alugamos ou comercializamos dados pessoais para terceiros com finalidades de marketing.
            </p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={600}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">7. Seus Direitos (LGPD)</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>A LGPD garante aos titulares de dados pessoais os seguintes direitos:</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-4 text-center">
                  <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Acesso</p>
                  <p className="text-xs text-muted-foreground mt-1">Saber quais dados possuímos sobre você</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-4 text-center">
                  <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Correção</p>
                  <p className="text-xs text-muted-foreground mt-1">Corrigir dados incompletos ou desatualizados</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-4 text-center">
                  <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Exclusão</p>
                  <p className="text-xs text-muted-foreground mt-1">Solicitar a eliminação de seus dados</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-4 text-center">
                  <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Portabilidade</p>
                  <p className="text-xs text-muted-foreground mt-1">Transferir dados para outro fornecedor</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-4 text-center">
                  <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Revogação</p>
                  <p className="text-xs text-muted-foreground mt-1">Revogar consentimento a qualquer momento</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-4 text-center">
                  <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Oposição</p>
                  <p className="text-xs text-muted-foreground mt-1">Opor-se a tratamento em certas situações</p>
                </CardContent>
              </Card>
            </div>

            <p className="mt-6">
              Para exercer qualquer desses direitos, entre em contato com nosso Encarregado de Proteção 
              de Dados (DPO) através do e-mail <a href="mailto:dpo@cheetahnetwork.com.br" className="text-primary hover:underline">dpo@cheetahnetwork.com.br</a>.
            </p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={700}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">8. Retenção de Dados</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Os dados pessoais são mantidos pelo tempo necessário para cumprir as finalidades para as quais 
              foram coletados, incluindo obrigações legais, contratuais ou requisitos regulatórios:
            </p>
            <ul className="space-y-3 ml-4">
              <li><strong className="text-foreground">Dados Contratuais:</strong> Mantidos durante a vigência do contrato e por 5 (cinco) anos após seu término para fins legais.</li>
              <li><strong className="text-foreground">Dados Fiscais:</strong> Mantidos por no mínimo 5 (cinco) anos conforme legislação tributária.</li>
              <li><strong className="text-foreground">Dados de Navegação:</strong> Mantidos por até 6 (seis) meses para fins de análise e segurança.</li>
              <li><strong className="text-foreground">Dados de Marketing:</strong> Mantidos até a revogação do consentimento pelo titular.</li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={800}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">9. Segurança dos Dados</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados pessoais 
              contra acesso não autorizado, alteração, divulgação ou destruição. Estas medidas incluem:
            </p>
            <ul className="space-y-2 ml-4">
              <li>• Criptografia de dados em trânsito e em repouso</li>
              <li>• Controles de acesso baseados em funções (RBAC)</li>
              <li>• Monitoramento contínuo de sistemas e logs</li>
              <li>• Treinamento de equipe em segurança da informação</li>
              <li>• Avaliações periódicas de vulnerabilidades</li>
              <li>• Planos de resposta a incidentes</li>
            </ul>
            <p className="mt-4">
              Para mais detalhes sobre nossas medidas de segurança, consulte nossa Política de Segurança.
            </p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={900}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">10. Contato</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Para questões relacionadas a esta Política de Privacidade ou ao tratamento de seus dados pessoais, 
              entre em contato com nosso Encarregado de Proteção de Dados (DPO):
            </p>
            <div className="p-4 bg-card/50 rounded-lg border border-border/50 space-y-2">
              <p><strong className="text-foreground">DPO - Encarregado de Proteção de Dados</strong></p>
              <p>E-mail: dpo@cheetahnetwork.com.br</p>
              <p>E-mail geral: contatocheetahsolutions@gmail.com</p>
              <p>Prazo de resposta: até 15 (quinze) dias úteis</p>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </PolicyLayout>
  );
};

export default PrivacyPolicyPage;