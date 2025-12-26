import { AlertTriangle, Shield, Scale, FileText, Ban, CheckCircle, XCircle, Clock, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const LiabilityPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Scale className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Política Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Política de <span className="text-primary">Responsabilidade</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Definição clara de responsabilidades, limitações, garantias e alocação de riscos 
              entre a Cheetah Solutions Network e seus clientes.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Última atualização: Dezembro de 2024 | Versão 2.0
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 1: Escopo */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">1. Escopo de Responsabilidade</h2>
            
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Esta política define os limites de responsabilidade da Cheetah Solutions Network 
                em relação aos serviços prestados, estabelecendo um equilíbrio justo entre as 
                partes contratantes.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">1.1. Princípios Gerais</h3>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>Boa-fé:</strong> Atuação baseada em honestidade e transparência</li>
                <li><strong>Proporcionalidade:</strong> Responsabilidade proporcional ao valor contratado</li>
                <li><strong>Razoabilidade:</strong> Expectativas alinhadas com padrões de mercado</li>
                <li><strong>Mitigação:</strong> Dever de ambas as partes de minimizar danos</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">1.2. Aplicabilidade</h3>
              <p className="text-muted-foreground leading-relaxed">
                Esta política aplica-se a todos os contratos de prestação de serviços, salvo 
                quando houver disposição específica em contrato individual que prevaleça 
                sobre estas disposições gerais.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 2: Garantias */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">2. Garantias Oferecidas</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-card/50 border-green-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <h3 className="text-lg font-semibold">O que Garantimos</h3>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Conformidade com especificações acordadas</li>
                    <li>• Qualidade técnica dentro dos padrões de mercado</li>
                    <li>• Correção de defeitos no período de garantia</li>
                    <li>• Suporte técnico conforme contratado</li>
                    <li>• Sigilo de informações confidenciais</li>
                    <li>• Cumprimento de prazos acordados</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-red-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <XCircle className="w-5 h-5 text-red-500" />
                    <h3 className="text-lg font-semibold">O que NÃO Garantimos</h3>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Resultados comerciais específicos</li>
                    <li>• Funcionamento em ambientes não homologados</li>
                    <li>• Compatibilidade com todas as plataformas</li>
                    <li>• Ausência total de bugs ou erros</li>
                    <li>• Disponibilidade 100% ininterrupta</li>
                    <li>• Adequação para fins não especificados</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mt-8 mb-4">2.1. Período de Garantia</h3>
              <p className="text-muted-foreground leading-relaxed">
                Os serviços possuem garantia de funcionamento conforme especificado em contrato, 
                geralmente:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Desenvolvimento de software: 90 dias após entrega final</li>
                <li>• Correções de bugs: Durante todo o período contratual</li>
                <li>• Suporte técnico: Conforme plano contratado</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">2.2. Exclusões de Garantia</h3>
              <p className="text-muted-foreground leading-relaxed">
                A garantia não cobre problemas decorrentes de:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Modificações não autorizadas no software</li>
                <li>• Uso inadequado ou fora das especificações</li>
                <li>• Integração com sistemas não homologados</li>
                <li>• Falhas de infraestrutura do cliente</li>
                <li>• Eventos de força maior</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 3: Limitações */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">3. Limitações de Responsabilidade</h2>

            <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Cláusula Importante</h4>
                  <p className="text-muted-foreground">
                    As limitações abaixo são aplicadas na máxima extensão permitida por lei. 
                    Leia atentamente e consulte assessoria jurídica se necessário.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mb-4">3.1. Limite Monetário</h3>
              <p className="text-muted-foreground leading-relaxed">
                Em nenhuma hipótese a responsabilidade total da Cheetah Solutions Network 
                excederá o valor efetivamente pago pelo cliente nos 12 meses anteriores ao 
                evento que gerou a reclamação.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">3.2. Danos Excluídos</h3>
              <p className="text-muted-foreground leading-relaxed">
                A Cheetah Solutions Network não será responsável por:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>Lucros cessantes:</strong> Perda de negócios ou oportunidades</li>
                <li><strong>Danos indiretos:</strong> Consequências não imediatas do problema</li>
                <li><strong>Danos punitivos:</strong> Penalidades além da compensação real</li>
                <li><strong>Perda de dados:</strong> Quando não há backup contratado</li>
                <li><strong>Danos morais:</strong> Exceto em casos de dolo comprovado</li>
                <li><strong>Danos a terceiros:</strong> Resultantes do uso do software pelo cliente</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">3.3. Exclusões Absolutas</h3>
              <p className="text-muted-foreground leading-relaxed">
                A Cheetah Solutions Network está isenta de responsabilidade em casos de:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Força maior (desastres naturais, guerras, pandemias)</li>
                <li>• Atos governamentais que impeçam a prestação</li>
                <li>• Falhas de serviços de terceiros não controlados</li>
                <li>• Uso ilegal ou não autorizado dos serviços</li>
                <li>• Negligência ou dolo do cliente</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 4: Responsabilidades do Cliente */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">4. Responsabilidades do Cliente</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mb-4">4.1. Obrigações Gerais</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Fornecer informações precisas e completas sobre requisitos</li>
                <li>• Disponibilizar acessos e recursos necessários</li>
                <li>• Validar entregas dentro dos prazos acordados</li>
                <li>• Manter backups de dados críticos</li>
                <li>• Comunicar problemas tempestivamente</li>
                <li>• Cumprir com obrigações de pagamento</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">4.2. Uso dos Serviços</h3>
              <p className="text-muted-foreground leading-relaxed">
                O cliente é integralmente responsável por:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Conteúdo publicado através dos sistemas desenvolvidos</li>
                <li>• Conformidade com leis e regulamentos aplicáveis ao seu negócio</li>
                <li>• Gestão de usuários e controle de acessos</li>
                <li>• Decisões de negócio baseadas em dados dos sistemas</li>
                <li>• Tratamento de dados pessoais de seus clientes</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">4.3. Indenização</h3>
              <p className="text-muted-foreground leading-relaxed">
                O cliente concorda em indenizar a Cheetah Solutions Network por quaisquer 
                perdas, danos, custos ou despesas decorrentes de:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Violação desta política ou dos termos de uso</li>
                <li>• Uso ilegal ou não autorizado dos serviços</li>
                <li>• Violação de direitos de terceiros</li>
                <li>• Informações falsas ou enganosas fornecidas</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 5: Resolução de Disputas */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">5. Resolução de Disputas</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mb-4">5.1. Procedimento</h3>
              <p className="text-muted-foreground leading-relaxed">
                Em caso de controvérsia, as partes comprometem-se a buscar solução amigável 
                antes de qualquer medida judicial:
              </p>

              <div className="space-y-4 my-6">
                <div className="flex items-start gap-4 p-4 bg-card/50 rounded-lg border border-border/50">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Negociação Direta</h4>
                    <p className="text-sm text-muted-foreground">
                      Prazo de 30 dias para tentativa de acordo entre as partes
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card/50 rounded-lg border border-border/50">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Mediação</h4>
                    <p className="text-sm text-muted-foreground">
                      Se não houver acordo, mediação por câmara especializada (60 dias)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card/50 rounded-lg border border-border/50">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Arbitragem ou Justiça</h4>
                    <p className="text-sm text-muted-foreground">
                      Submissão ao foro eleito ou câmara de arbitragem acordada
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">5.2. Foro Competente</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fica eleito o foro da Comarca de [Cidade/Estado], com renúncia a qualquer outro, 
                por mais privilegiado que seja, para dirimir quaisquer questões oriundas desta 
                relação contratual.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">5.3. Prescrição</h3>
              <p className="text-muted-foreground leading-relaxed">
                Qualquer reclamação relacionada aos serviços deve ser apresentada dentro do 
                prazo de 2 anos a partir da data do evento que deu origem à reclamação, 
                sob pena de prescrição.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 6: SLA */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">6. Níveis de Serviço (SLA)</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mb-4">6.1. Compromissos de Disponibilidade</h3>
              <p className="text-muted-foreground leading-relaxed">
                Para serviços de hospedagem e infraestrutura, comprometemo-nos com:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold">Nível</th>
                      <th className="text-left py-3 px-4 font-semibold">Disponibilidade</th>
                      <th className="text-left py-3 px-4 font-semibold">Downtime Máx./Mês</th>
                      <th className="text-left py-3 px-4 font-semibold">Crédito</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Standard</td>
                      <td className="py-3 px-4">99.5%</td>
                      <td className="py-3 px-4">3h 39min</td>
                      <td className="py-3 px-4">10% por 0.1% abaixo</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Business</td>
                      <td className="py-3 px-4">99.9%</td>
                      <td className="py-3 px-4">43min</td>
                      <td className="py-3 px-4">15% por 0.1% abaixo</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Enterprise</td>
                      <td className="py-3 px-4">99.95%</td>
                      <td className="py-3 px-4">22min</td>
                      <td className="py-3 px-4">25% por 0.1% abaixo</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">6.2. Exclusões do SLA</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Manutenções programadas comunicadas com antecedência</li>
                <li>• Falhas causadas pelo cliente ou seus usuários</li>
                <li>• Ataques DDoS ou outras ameaças externas</li>
                <li>• Falhas de provedores de conectividade</li>
                <li>• Força maior</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">6.3. Solicitação de Créditos</h3>
              <p className="text-muted-foreground leading-relaxed">
                Para solicitar créditos de SLA, o cliente deve abrir chamado em até 30 dias 
                após o incidente, incluindo evidências da indisponibilidade.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-4">Dúvidas sobre Responsabilidades</h3>
                    <p className="text-muted-foreground mb-4">
                      Para esclarecimentos sobre esta política ou questões contratuais:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li><strong>E-mail:</strong> juridico@cheetahnetwork.com.br</li>
                      <li><strong>Comercial:</strong> comercial@cheetahnetwork.com.br</li>
                      <li><strong>Prazo de resposta:</strong> Até 5 dias úteis</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LiabilityPolicy;