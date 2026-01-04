import { Shield, FileText, Scale, Users, Lock, AlertTriangle, RefreshCw, Copyright, Banknote, Eye, MessageSquare, BookOpen, ChevronRight, Building2, Gavel, Server, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const GuidelinesHub = () => {
  const policyGroups = [
    {
      title: "Uso da Plataforma",
      description: "Regras e condições para utilização dos serviços da Cheetah Solutions Network",
      icon: Users,
      gradient: "from-blue-500/10 to-blue-600/5",
      policies: [
        { name: "Termos de Uso", path: "/diretrizes/termos-uso", description: "Condições gerais de utilização dos serviços" },
        { name: "Política de Uso Aceitável", path: "/diretrizes/uso-aceitavel", description: "Regras de conduta e atividades permitidas" },
        { name: "Política de Cookies", path: "/cookies", description: "Uso de cookies e tecnologias similares" },
      ]
    },
    {
      title: "Segurança e Privacidade",
      description: "Proteção de dados, medidas de segurança e direitos dos titulares",
      icon: Lock,
      gradient: "from-green-500/10 to-green-600/5",
      policies: [
        { name: "Política de Privacidade", path: "/diretrizes/privacidade", description: "Tratamento de dados pessoais e LGPD" },
        { name: "Política de Segurança", path: "/diretrizes/seguranca", description: "Medidas técnicas e organizacionais" },
        { name: "Política de Backup", path: "/diretrizes/backup", description: "Estratégias de cópia e recuperação de dados" },
      ]
    },
    {
      title: "Operação e Atendimento",
      description: "Processos operacionais, suporte ao cliente e manutenção de sistemas",
      icon: Server,
      gradient: "from-purple-500/10 to-purple-600/5",
      policies: [
        { name: "Política de Atendimento", path: "/diretrizes/atendimento", description: "Canais de suporte e tempos de resposta" },
        { name: "Política de Atualização", path: "/diretrizes/atualizacao", description: "Manutenções programadas e updates" },
        { name: "Política de Transparência", path: "/diretrizes/transparencia", description: "Compromissos com transparência operacional" },
      ]
    },
    {
      title: "Direitos, Responsabilidades e Garantias",
      description: "Aspectos legais, contratuais e financeiros da relação com clientes",
      icon: Gavel,
      gradient: "from-amber-500/10 to-amber-600/5",
      policies: [
        { name: "Propriedade Intelectual", path: "/diretrizes/propriedade-intelectual", description: "Direitos autorais e licenciamento" },
        { name: "Política de Responsabilidade", path: "/diretrizes/responsabilidade", description: "Limitações e alocação de riscos" },
        { name: "Política de Isenção", path: "/diretrizes/isencao", description: "Disclaimers e exclusões de garantia" },
        { name: "Política de Cancelamento", path: "/diretrizes/cancelamento", description: "Procedimentos de encerramento contratual" },
        { name: "Política de Reembolso", path: "/diretrizes/reembolso", description: "Condições para devolução de valores" },
      ]
    },
    {
      title: "Compliance e Ética",
      description: "Canais de denúncia, conformidade e governança corporativa",
      icon: Shield,
      gradient: "from-red-500/10 to-red-600/5",
      policies: [
        { name: "Canal de Denúncias", path: "/diretrizes/denuncia", description: "Reporte de irregularidades e proteção ao denunciante" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Cheetah Solutions | Diretrizes e Privacidade"
        description="Diretrizes, políticas de privacidade e conformidade da Cheetah Solutions Network. Transparência e governança corporativa."
        ogTitle="Diretrizes e Privacidade"
        ogDescription="Diretrizes, políticas de privacidade e conformidade da Cheetah Solutions Network. Transparência e governança corporativa."
        ogUrl="/diretrizes"
        canonical="/diretrizes"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto max-w-6xl relative">
          <AnimatedSection>
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Governança Corporativa</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Diretrizes, Políticas <br className="hidden md:block" />
                e <span className="text-primary">Conformidade</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                A Cheetah Solutions Network opera com padrões empresariais elevados de governança, 
                ética e transparência. Esta central reúne todos os documentos que regem nossa 
                relação com clientes, parceiros e a sociedade.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <h2 className="text-2xl font-bold mb-4">Nosso Compromisso</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Acreditamos que a confiança se constrói com transparência e responsabilidade.
                </p>
              </div>
              <div className="md:col-span-2">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 rounded-lg p-2.5 h-fit">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Segurança</h3>
                      <p className="text-sm text-muted-foreground">Proteção de dados e sistemas com as melhores práticas do mercado.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 rounded-lg p-2.5 h-fit">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Transparência</h3>
                      <p className="text-sm text-muted-foreground">Comunicação clara sobre processos, decisões e responsabilidades.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 rounded-lg p-2.5 h-fit">
                      <Scale className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Ética</h3>
                      <p className="text-sm text-muted-foreground">Conduta íntegra em todas as relações comerciais e profissionais.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 rounded-lg p-2.5 h-fit">
                      <Handshake className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Conformidade</h3>
                      <p className="text-sm text-muted-foreground">Aderência às leis, regulamentos e padrões do setor.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Policy Groups */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Documentos por Categoria</h2>
              <p className="text-muted-foreground max-w-2xl">
                Navegue pelas categorias abaixo para acessar as políticas e diretrizes aplicáveis. 
                Todos os documentos são revisados periodicamente para garantir conformidade.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {policyGroups.map((group, groupIndex) => (
              <AnimatedSection key={groupIndex} delay={groupIndex * 100}>
                <Card className={`bg-gradient-to-br ${group.gradient} border-border/50 overflow-hidden`}>
                  <CardContent className="p-0">
                    <div className="p-6 md:p-8 border-b border-border/30">
                      <div className="flex items-start gap-4">
                        <div className="bg-background/50 rounded-xl p-3 border border-border/50">
                          <group.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{group.title}</h3>
                          <p className="text-sm text-muted-foreground">{group.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="divide-y divide-border/30">
                      {group.policies.map((policy, policyIndex) => (
                        <Link 
                          key={policyIndex}
                          to={policy.path}
                          className="flex items-center justify-between p-4 md:px-8 hover:bg-background/30 transition-colors group"
                        >
                          <div className="flex items-center gap-4">
                            <FileText className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            <div>
                              <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                                {policy.name}
                              </span>
                              <p className="text-xs text-muted-foreground hidden sm:block">
                                {policy.description}
                              </p>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-4">Aviso Importante</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        A utilização dos serviços da Cheetah Solutions Network implica na aceitação integral 
                        de todos os termos e políticas aqui descritos. Recomendamos a leitura completa de 
                        cada documento antes de contratar nossos serviços.
                      </p>
                      <p>
                        Em caso de dúvidas sobre qualquer disposição contida nestes documentos, entre em 
                        contato com nossa equipe através do e-mail{" "}
                        <a href="mailto:juridico@cheetahnetwork.com.br" className="text-primary hover:underline">
                          juridico@cheetahnetwork.com.br
                        </a>.
                      </p>
                      <p className="pt-2 text-xs border-t border-border/50">
                        <strong>Última atualização:</strong> Dezembro de 2024 · Revisão periódica a cada 6 meses
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-4">Precisa de Esclarecimentos?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Nossa equipe jurídica está disponível para esclarecer dúvidas sobre nossas políticas e termos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contato"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                Falar com a Equipe
              </Link>
              <a 
                href="mailto:juridico@cheetahnetwork.com.br"
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <FileText className="w-5 h-5" />
                E-mail Jurídico
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GuidelinesHub;