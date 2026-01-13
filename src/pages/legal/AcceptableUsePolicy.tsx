import { Users, Ban, AlertTriangle, CheckCircle, Shield, FileText, Scale, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const AcceptableUsePolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Política de Conduta</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Política de <span className="text-primary">Uso Aceitável</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Diretrizes de conduta para utilização responsável e ética de nossos serviços, 
              estabelecendo limites claros e consequências para violações.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Última atualização: Dezembro de 2024 | Versão 2.5
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 1: Propósito */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">1. Propósito e Escopo</h2>
            
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Esta Política de Uso Aceitável (PUA) define as regras de conduta para todos os 
                usuários dos serviços da Cheetah Solutions Network, visando garantir um ambiente 
                seguro, ético e produtivo para todos.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Aplicabilidade</h3>
              <p className="text-muted-foreground leading-relaxed">
                Esta política aplica-se a:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Clientes e usuários finais de sistemas desenvolvidos</li>
                <li>• Usuários de serviços de hospedagem e infraestrutura</li>
                <li>• Participantes de canais de comunicação oficiais (Discord, etc.)</li>
                <li>• Qualquer pessoa que interaja com nossos sistemas e serviços</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Aceitação</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ao utilizar nossos serviços, você concorda em cumprir integralmente esta política. 
                O desconhecimento não exime o usuário de suas obrigações e das consequências por violações.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 2: Usos Permitidos */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">2. Usos Permitidos</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Os serviços da Cheetah Solutions Network podem ser utilizados para:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <Card className="bg-card/50 border-green-500/30">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-semibold">Atividades Comerciais Legítimas</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Operação de negócios, e-commerce, serviços online conforme legislação aplicável
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-green-500/30">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-semibold">Desenvolvimento de Software</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Criação, teste e deploy de aplicações web e sistemas
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-green-500/30">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-semibold">Armazenamento de Dados</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Dados próprios ou de terceiros com consentimento adequado
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-green-500/30">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-semibold">Comunicação</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Interação respeitosa através dos canais oficiais
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 3: Atividades Proibidas */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">3. Atividades Estritamente Proibidas</h2>

            <div className="p-6 bg-destructive/10 border border-destructive/20 rounded-xl mb-8">
              <div className="flex items-start gap-3">
                <Ban className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Aviso</h4>
                  <p className="text-muted-foreground">
                    As atividades listadas abaixo são estritamente proibidas e resultarão em ação imediata, 
                    incluindo suspensão de serviços e possível ação legal.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mb-4">Atividades Ilegais</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Qualquer atividade que viole leis federais, estaduais ou municipais brasileiras</li>
                <li>• Fraude, estelionato, lavagem de dinheiro ou financiamento de atividades ilegais</li>
                <li>• Distribuição de conteúdo ilegal (pornografia infantil, drogas, armas)</li>
                <li>• Violação de propriedade intelectual (pirataria, contrafação)</li>
                <li>• Invasão de sistemas, hacking ou acesso não autorizado</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Abuso de Recursos</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Mineração de criptomoedas sem autorização expressa</li>
                <li>• Ataques DDoS, spam ou qualquer forma de abuso de rede</li>
                <li>• Uso de recursos para comprometer outros sistemas</li>
                <li>• Consumo excessivo de recursos que afete outros clientes</li>
                <li>• Engenharia reversa de nossos sistemas</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Conteúdo Inadequado</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Discurso de ódio, discriminação ou incitação à violência</li>
                <li>• Assédio, bullying ou comportamento intimidador</li>
                <li>• Pornografia ou conteúdo sexualmente explícito não autorizado</li>
                <li>• Fake news ou desinformação deliberada</li>
                <li>• Conteúdo que viole direitos de terceiros</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Violações de Segurança</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Tentativas de acesso não autorizado a sistemas ou dados</li>
                <li>• Distribuição de malware, vírus ou código malicioso</li>
                <li>• Phishing ou engenharia social</li>
                <li>• Compartilhamento de credenciais de acesso</li>
                <li>• Bypass de controles de segurança</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 4: Consequências */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">4. Consequências de Violações</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Violações desta política serão tratadas de forma proporcional à gravidade, 
                podendo resultar em:
              </p>

              <div className="space-y-4 my-6">
                <Card className="bg-card/50 border-yellow-500/30">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-yellow-500 mb-2">Nível 1 - Advertência</h4>
                    <p className="text-sm text-muted-foreground">
                      Notificação formal para violações leves ou primeira ocorrência. 
                      Prazo de 48 horas para correção.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-orange-500/30">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-orange-500 mb-2">Nível 2 - Suspensão Temporária</h4>
                    <p className="text-sm text-muted-foreground">
                      Suspensão de 7 a 30 dias para violações moderadas ou reincidência. 
                      Reativação condicionada a compromisso formal.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-red-500/30">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-red-500 mb-2">Nível 3 - Suspensão Imediata</h4>
                    <p className="text-sm text-muted-foreground">
                      Suspensão imediata sem aviso prévio para violações graves. 
                      Análise para determinar se será permanente.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-destructive/30">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-destructive mb-2">Nível 4 - Encerramento Definitivo</h4>
                    <p className="text-sm text-muted-foreground">
                      Cancelamento permanente do contrato, sem direito a reembolso. 
                      Possível ação legal e comunicação às autoridades.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">Processo de Análise</h3>
              <p className="text-muted-foreground leading-relaxed">
                Toda denúncia de violação será analisada por nossa equipe de compliance:
              </p>
              <ol className="text-muted-foreground space-y-2">
                <li>1. Recebimento e registro da denúncia ou detecção automatizada</li>
                <li>2. Investigação e coleta de evidências</li>
                <li>3. Notificação ao usuário e oportunidade de defesa (exceto casos graves)</li>
                <li>4. Decisão e aplicação de penalidades</li>
                <li>5. Possibilidade de recurso em instância superior</li>
              </ol>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 5: Responsabilidades */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">5. Responsabilidades do Usuário</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mb-4">Segurança de Conta</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Manter credenciais de acesso em sigilo</li>
                <li>• Utilizar senhas fortes e únicas</li>
                <li>• Ativar autenticação de dois fatores quando disponível</li>
                <li>• Notificar imediatamente sobre acessos suspeitos</li>
                <li>• Não compartilhar contas com terceiros</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Conteúdo Próprio</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Responsabilidade integral pelo conteúdo publicado</li>
                <li>• Garantir conformidade com leis de propriedade intelectual</li>
                <li>• Obter consentimentos necessários para dados de terceiros</li>
                <li>• Manter backups de dados críticos</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Uso de Recursos</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Utilizar recursos de forma razoável e eficiente</li>
                <li>• Não explorar vulnerabilidades ou bugs</li>
                <li>• Reportar problemas de segurança identificados</li>
                <li>• Seguir as melhores práticas de desenvolvimento</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 6: Monitoramento */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">6. Monitoramento e Fiscalização</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                A Cheetah Solutions Network reserva-se o direito de monitorar o uso de seus serviços 
                para garantir conformidade com esta política:
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">O que Monitoramos</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Logs de acesso e atividades do sistema</li>
                <li>• Consumo de recursos (CPU, memória, banda)</li>
                <li>• Padrões de tráfego de rede</li>
                <li>• Alertas automatizados de segurança</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">O que NÃO Monitoramos</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Conteúdo de comunicações privadas</li>
                <li>• Dados de clientes (exceto em investigações autorizadas)</li>
                <li>• Código-fonte de aplicações (sem autorização)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Transparência</h3>
              <p className="text-muted-foreground leading-relaxed">
                Relatórios de transparência sobre ações tomadas são publicados anualmente, 
                preservando a privacidade dos envolvidos.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 7: Denúncias */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">7. Como Reportar Violações</h2>

            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <MessageSquare className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-4">Canal de Denúncias</h3>
                    <p className="text-muted-foreground mb-4">
                      Se você identificar violações desta política, reporte imediatamente:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li><strong>E-mail:</strong> abuse@cheetahnetwork.com.br</li>
                      <li><strong>Formulário:</strong> /legal/denuncia</li>
                      <li><strong>Prazo de resposta:</strong> Até 48 horas</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-4">
                      Denúncias podem ser feitas de forma anônima. Garantimos sigilo e proteção 
                      contra retaliação para denunciantes de boa-fé.
                    </p>
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

export default AcceptableUsePolicy;