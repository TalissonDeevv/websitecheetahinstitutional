import { Shield, FileText, Scale, Users, Lock, AlertTriangle, RefreshCw, Copyright, Banknote, Eye, MessageSquare, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const LegalOverview = () => {
  const policies = [
    {
      icon: MessageSquare,
      title: "Política de Atendimento",
      description: "Diretrizes completas sobre nosso processo de suporte, canais de comunicação, tempos de resposta e compromissos com a qualidade do atendimento ao cliente.",
      path: "/legal/atendimento",
      category: "Relacionamento"
    },
    {
      icon: RefreshCw,
      title: "Política de Cancelamento",
      description: "Procedimentos detalhados para cancelamento de serviços, prazos aplicáveis, retenção de dados e obrigações das partes após o encerramento contratual.",
      path: "/legal/cancelamento",
      category: "Contratual"
    },
    {
      icon: Shield,
      title: "Política de Backup",
      description: "Estratégias de backup, frequência de cópias de segurança, locais de armazenamento, procedimentos de recuperação e responsabilidades sobre dados.",
      path: "/legal/backup",
      category: "Técnico"
    },
    {
      icon: Lock,
      title: "Política de Segurança",
      description: "Medidas técnicas e organizacionais para proteção de dados, controles de acesso, criptografia, monitoramento e resposta a incidentes de segurança.",
      path: "/legal/seguranca",
      category: "Técnico"
    },
    {
      icon: Users,
      title: "Política de Uso Aceitável",
      description: "Regras de conduta para utilização dos serviços, atividades proibidas, consequências de violações e responsabilidades do usuário.",
      path: "/legal/uso-aceitavel",
      category: "Conduta"
    },
    {
      icon: Eye,
      title: "Política de Transparência",
      description: "Compromissos com a transparência operacional, divulgação de informações, relatórios periódicos e governança corporativa.",
      path: "/legal/transparencia",
      category: "Governança"
    },
    {
      icon: RefreshCw,
      title: "Política de Atualização",
      description: "Processos de atualização de sistemas, manutenções programadas, comunicação prévia, janelas de manutenção e procedimentos de rollback.",
      path: "/legal/atualizacao",
      category: "Técnico"
    },
    {
      icon: Copyright,
      title: "Propriedade Intelectual",
      description: "Direitos autorais, marcas registradas, licenciamento de software, propriedade de código desenvolvido e proteção de ativos intelectuais.",
      path: "/legal/propriedade-intelectual",
      category: "Legal"
    },
    {
      icon: AlertTriangle,
      title: "Política de Responsabilidade",
      description: "Limitações de responsabilidade, exclusões de garantia, indenizações, força maior e alocação de riscos entre as partes.",
      path: "/legal/responsabilidade",
      category: "Legal"
    },
    {
      icon: Scale,
      title: "Política de Isenção",
      description: "Isenções de responsabilidade específicas, disclaimers legais, avisos importantes e limitações aplicáveis aos serviços prestados.",
      path: "/legal/isencao",
      category: "Legal"
    },
    {
      icon: AlertTriangle,
      title: "Canal de Denúncias",
      description: "Procedimentos para reportar irregularidades, proteção ao denunciante, processo de investigação e medidas corretivas.",
      path: "/legal/denuncia",
      category: "Compliance"
    },
    {
      icon: FileText,
      title: "Termos de Uso",
      description: "Condições gerais de utilização dos serviços, direitos e obrigações das partes, vigência contratual e disposições finais.",
      path: "/legal/termos-uso",
      category: "Contratual"
    },
    {
      icon: Eye,
      title: "Política de Privacidade",
      description: "Coleta e tratamento de dados pessoais, bases legais, compartilhamento, direitos dos titulares e conformidade com LGPD.",
      path: "/legal/privacidade",
      category: "Privacidade"
    },
    {
      icon: Banknote,
      title: "Política de Reembolso",
      description: "Condições para solicitação de reembolso, prazos, métodos de devolução, casos aplicáveis e procedimentos administrativos.",
      path: "/legal/reembolso",
      category: "Financeiro"
    }
  ];

  const categories = [
    { name: "Contratual", color: "from-blue-500/20 to-blue-600/10", count: policies.filter(p => p.category === "Contratual").length },
    { name: "Técnico", color: "from-green-500/20 to-green-600/10", count: policies.filter(p => p.category === "Técnico").length },
    { name: "Legal", color: "from-purple-500/20 to-purple-600/10", count: policies.filter(p => p.category === "Legal").length },
    { name: "Privacidade", color: "from-cyan-500/20 to-cyan-600/10", count: policies.filter(p => p.category === "Privacidade").length },
    { name: "Compliance", color: "from-orange-500/20 to-orange-600/10", count: policies.filter(p => p.category === "Compliance").length },
    { name: "Governança", color: "from-indigo-500/20 to-indigo-600/10", count: policies.filter(p => p.category === "Governança").length }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Documentação Legal Completa</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Políticas e <span className="text-primary">Termos</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transparência e conformidade legal são pilares fundamentais da Cheetah Solutions Network. 
                Aqui você encontra toda a documentação que rege nossa relação com clientes, parceiros e usuários.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-8">Categorias de Documentos</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${category.color} border border-border/30 rounded-xl p-4 text-center`}
                >
                  <span className="text-2xl font-bold text-foreground">{category.count}</span>
                  <p className="text-sm text-muted-foreground mt-1">{category.name}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* All Policies */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-4">Documentos Disponíveis</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">
              Clique em qualquer documento abaixo para acessar seu conteúdo completo. 
              Todos os documentos são revisados periodicamente para garantir conformidade legal.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {policies.map((policy, index) => (
              <AnimatedSection key={index} delay={index * 50}>
                <Link to={policy.path}>
                  <Card className="bg-card/50 border-border/50 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 h-full group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 rounded-xl p-3 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                          <policy.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                              {policy.title}
                            </h3>
                            <span className="text-xs bg-secondary/50 text-muted-foreground px-2 py-1 rounded-full">
                              {policy.category}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {policy.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-4">Aviso Importante</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        A utilização dos serviços da Cheetah Solutions Network implica na aceitação integral 
                        de todos os termos e políticas aqui descritos. Recomendamos a leitura completa de 
                        cada documento antes de contratar nossos serviços.
                      </p>
                      <p>
                        Em caso de dúvidas sobre qualquer disposição contida nestes documentos, entre em 
                        contato com nossa equipe jurídica através do e-mail{" "}
                        <a href="mailto:juridico@cheetahnetwork.com.br" className="text-primary hover:underline">
                          juridico@cheetahnetwork.com.br
                        </a>.
                      </p>
                      <p className="text-sm">
                        <strong>Última atualização geral:</strong> Dezembro de 2024
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
              Nossa equipe está disponível para esclarecer qualquer dúvida sobre nossas políticas e termos.
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

export default LegalOverview;