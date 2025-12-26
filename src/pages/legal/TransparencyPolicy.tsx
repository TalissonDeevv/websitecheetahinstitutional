import { Eye, BarChart3, Users, FileText, Shield, Clock, CheckCircle, TrendingUp, Building, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const TransparencyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Eye className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Política de Governança</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Política de <span className="text-primary">Transparência</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Nosso compromisso com a transparência operacional, ética empresarial e prestação 
              de contas clara a todos os stakeholders.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Última atualização: Dezembro de 2024 | Versão 2.0
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 1: Compromisso */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">1. Nosso Compromisso com a Transparência</h2>
            
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                A Cheetah Solutions Network acredita que a transparência é fundamental para construir 
                e manter relacionamentos de confiança com clientes, parceiros, colaboradores e a sociedade. 
                Este documento estabelece os princípios e práticas que adotamos para garantir uma 
                gestão aberta e responsável.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">1.1. Pilares da Transparência</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="bg-blue-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-blue-500" />
                    </div>
                    <h4 className="font-semibold mb-2">Clareza</h4>
                    <p className="text-sm text-muted-foreground">
                      Comunicação clara e objetiva em todos os documentos e interações
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="bg-green-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h4 className="font-semibold mb-2">Honestidade</h4>
                    <p className="text-sm text-muted-foreground">
                      Informações precisas e verídicas, mesmo quando desfavoráveis
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="bg-purple-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-purple-500" />
                    </div>
                    <h4 className="font-semibold mb-2">Tempestividade</h4>
                    <p className="text-sm text-muted-foreground">
                      Divulgação oportuna de informações relevantes
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 2: Informações Divulgadas */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">2. Informações que Divulgamos</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mb-4">2.1. Informações Institucionais</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Estrutura organizacional e governança corporativa</li>
                <li>• Missão, visão e valores da empresa</li>
                <li>• Políticas e procedimentos internos</li>
                <li>• Certificações e conformidades obtidas</li>
                <li>• Histórico e marcos importantes da empresa</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">2.2. Informações Operacionais</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Disponibilidade de serviços (status page pública)</li>
                <li>• Incidentes de segurança que afetem clientes</li>
                <li>• Manutenções programadas e janelas de indisponibilidade</li>
                <li>• Alterações significativas em políticas e termos</li>
                <li>• Roadmap de produtos (quando aplicável)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">2.3. Informações de Conformidade</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Relatórios de transparência anuais</li>
                <li>• Estatísticas de solicitações governamentais</li>
                <li>• Ações tomadas contra violações de políticas</li>
                <li>• Auditorias de segurança realizadas</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 3: Métricas e Indicadores */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">3. Métricas e Indicadores Públicos</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3 className="w-6 h-6 text-primary" />
                    <h3 className="text-lg font-semibold">Disponibilidade</h3>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <p className="text-sm text-muted-foreground">
                    Uptime médio dos serviços nos últimos 12 meses
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    <h3 className="text-lg font-semibold">Satisfação</h3>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
                  <p className="text-sm text-muted-foreground">
                    Avaliação média de clientes em pesquisas de satisfação
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                    <h3 className="text-lg font-semibold">Tempo de Resposta</h3>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">&lt; 2h</div>
                  <p className="text-sm text-muted-foreground">
                    Tempo médio de primeira resposta em suporte
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                    <h3 className="text-lg font-semibold">Segurança</h3>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">0</div>
                  <p className="text-sm text-muted-foreground">
                    Vazamentos de dados confirmados no último ano
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="text-sm text-muted-foreground">
              * Métricas atualizadas mensalmente. Última atualização: Dezembro de 2024.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 4: Relatórios */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">4. Relatórios de Transparência</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mb-4">4.1. Relatório Anual</h3>
              <p className="text-muted-foreground leading-relaxed">
                Publicamos anualmente um relatório abrangente contendo:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Resumo das atividades e conquistas do ano</li>
                <li>• Estatísticas operacionais detalhadas</li>
                <li>• Incidentes de segurança e medidas tomadas</li>
                <li>• Solicitações legais recebidas e atendidas</li>
                <li>• Ações de compliance e conformidade</li>
                <li>• Metas para o próximo período</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">4.2. Relatórios Trimestrais</h3>
              <p className="text-muted-foreground leading-relaxed">
                Atualizações trimestrais sobre:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Métricas de disponibilidade e performance</li>
                <li>• Atualizações de segurança implementadas</li>
                <li>• Novos recursos e funcionalidades</li>
                <li>• Feedback consolidado de clientes</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">4.3. Acesso aos Relatórios</h3>
              <p className="text-muted-foreground leading-relaxed">
                Os relatórios estão disponíveis em nossa central de documentos e podem ser 
                solicitados diretamente à nossa equipe de atendimento. Clientes com contratos 
                ativos recebem automaticamente as atualizações por e-mail.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 5: Governança */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">5. Governança Corporativa</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mb-4">5.1. Estrutura Organizacional</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nossa estrutura de governança é desenhada para garantir decisões éticas e responsáveis:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Building className="w-5 h-5 text-primary" />
                      <span className="font-semibold">Diretoria Executiva</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Responsável pelas decisões estratégicas e direção geral da empresa
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-5 h-5 text-primary" />
                      <span className="font-semibold">Comitê de Ética</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Avalia questões éticas e de conformidade, reportando à diretoria
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="font-semibold">Conselho Consultivo</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Especialistas externos que auxiliam em decisões estratégicas
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Eye className="w-5 h-5 text-primary" />
                      <span className="font-semibold">DPO / Encarregado</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Responsável pela proteção de dados e conformidade LGPD
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">5.2. Código de Ética</h3>
              <p className="text-muted-foreground leading-relaxed">
                Todos os colaboradores são orientados por nosso Código de Ética, que estabelece:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Padrões de conduta profissional</li>
                <li>• Política anticorrupção e antissuborno</li>
                <li>• Conflitos de interesse e como gerenciá-los</li>
                <li>• Canais de denúncia e proteção ao denunciante</li>
                <li>• Consequências para violações</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 6: Comunicação */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">6. Canais de Comunicação</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mb-4">6.1. Status de Serviços</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mantemos uma página de status pública (status.cheetahnetwork.com.br) com 
                informações em tempo real sobre a disponibilidade de nossos serviços, 
                incidentes em andamento e histórico de eventos.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">6.2. Comunicados Oficiais</h3>
              <p className="text-muted-foreground leading-relaxed">
                Notícias e atualizações importantes são comunicadas através de:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Blog oficial da empresa</li>
                <li>• Newsletter mensal para clientes</li>
                <li>• Redes sociais oficiais</li>
                <li>• Discord da comunidade</li>
                <li>• E-mail direto para comunicações críticas</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">6.3. Feedback e Sugestões</h3>
              <p className="text-muted-foreground leading-relaxed">
                Valorizamos o feedback de nossos stakeholders e mantemos canais abertos para:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Sugestões de melhoria: sugestoes@cheetahnetwork.com.br</li>
                <li>• Reclamações formais: ouvidoria@cheetahnetwork.com.br</li>
                <li>• Denúncias: denuncia@cheetahnetwork.com.br</li>
              </ul>
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
                  <MessageSquare className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-4">Dúvidas sobre Transparência</h3>
                    <p className="text-muted-foreground mb-4">
                      Para solicitar informações adicionais ou esclarecer dúvidas sobre 
                      nossas práticas de transparência:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li><strong>E-mail:</strong> transparencia@cheetahnetwork.com.br</li>
                      <li><strong>Prazo de resposta:</strong> Até 5 dias úteis</li>
                      <li><strong>Relatórios:</strong> Disponíveis mediante solicitação</li>
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

export default TransparencyPolicy;