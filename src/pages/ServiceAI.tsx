import { Brain, Bot, MessageSquare, ArrowRight, MessageCircle, CheckCircle, Zap, Sparkles, Cpu, BarChart3, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const ServiceAI = () => {
  const aiSolutions = [
    {
      title: "Chatbots Inteligentes",
      description: "Atendimento automatizado com compreensão de linguagem natural",
      features: ["Respostas contextuais", "Integração multicanal", "Aprendizado contínuo", "Handoff para humanos"]
    },
    {
      title: "Assistentes Virtuais",
      description: "IA personalizada para automação de tarefas específicas do negócio",
      features: ["Processamento de documentos", "Análise de dados", "Geração de relatórios", "Automação de workflows"]
    },
    {
      title: "Análise Preditiva",
      description: "Machine learning para insights e previsões de negócio",
      features: ["Previsão de demanda", "Detecção de anomalias", "Segmentação de clientes", "Análise de sentimento"]
    }
  ];

  const technologies = [
    "OpenAI/GPT", "LangChain", "Anthropic Claude", "Hugging Face", "TensorFlow", "PyTorch", "Pinecone"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero - Asymmetric */}
      <section className="pt-28 pb-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <AnimatedSection className="lg:col-span-7">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">Inteligência Artificial</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
                IA que resolve <span className="text-primary">problemas reais</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Implementamos soluções de inteligência artificial focadas em resultados práticos. 
                Chatbots, automação e análise de dados com tecnologia de ponta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/orcamento">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contato">
                  <Button variant="outline" className="border-border text-foreground hover:bg-secondary">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Falar com Especialista
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200} className="lg:col-span-5">
              <div className="relative">
                <img 
                  src="https://i.ibb.co/mCL6wdbD/Android-amico.png" 
                  alt="Inteligência Artificial"
                  className="rounded-lg w-full"
                />
                <div className="absolute -bottom-4 -left-4 bg-primary/10 border border-primary/20 rounded-lg p-4 backdrop-blur-sm">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* O Problema */}
      <section className="py-16 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="text-2xl font-bold mb-6">
                O problema que <span className="text-primary">resolvemos</span>
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Muitas empresas querem usar IA mas não sabem por onde começar. 
                  A tecnologia avança rápido e separar hype de soluções práticas é desafiador.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Equipes perdem tempo em tarefas repetitivas que poderiam ser automatizadas. 
                  Atendimento ao cliente sobrecarregado, análise manual de dados, processos lentos.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Implementamos IA de forma pragmática, focando em casos de uso com ROI claro 
                  e integração natural com processos existentes.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={150}>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Por que usar IA agora</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Atendimento 24/7</h4>
                      <p className="text-xs text-muted-foreground mt-1">Respostas imediatas sem aumentar equipe</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Automação inteligente</h4>
                      <p className="text-xs text-muted-foreground mt-1">Tarefas complexas executadas automaticamente</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BarChart3 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Insights de dados</h4>
                      <p className="text-xs text-muted-foreground mt-1">Padrões e previsões que humanos não veem</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Escala ilimitada</h4>
                      <p className="text-xs text-muted-foreground mt-1">Atende milhares simultaneamente</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Soluções de IA */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-2">
              Soluções de <span className="text-primary">IA</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl">
              Implementações práticas com resultados mensuráveis
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {aiSolutions.map((solution, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-card border border-border rounded-xl p-8 h-full">
                  <h3 className="text-lg font-semibold mb-3">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>
                  <div className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-16 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-8">
              Casos de <span className="text-primary">aplicação</span>
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedSection delay={100}>
              <div className="p-5 border-l-2 border-primary bg-card/50 rounded-r-lg">
                <h3 className="text-base font-semibold mb-2">Atendimento ao Cliente</h3>
                <p className="text-sm text-muted-foreground">
                  Chatbots que resolvem dúvidas frequentes, qualificam leads e 
                  encaminham casos complexos para atendentes humanos.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={150}>
              <div className="p-5 border-l-2 border-primary bg-card/50 rounded-r-lg">
                <h3 className="text-base font-semibold mb-2">Processamento de Documentos</h3>
                <p className="text-sm text-muted-foreground">
                  Extração automática de dados de contratos, notas fiscais e 
                  documentos diversos com alta precisão.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="p-5 border-l-2 border-primary bg-card/50 rounded-r-lg">
                <h3 className="text-base font-semibold mb-2">Análise de Feedback</h3>
                <p className="text-sm text-muted-foreground">
                  Processamento de avaliações, reviews e menções para 
                  identificar sentimento e tendências.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={250}>
              <div className="p-5 border-l-2 border-primary bg-card/50 rounded-r-lg">
                <h3 className="text-base font-semibold mb-2">Recomendações Personalizadas</h3>
                <p className="text-sm text-muted-foreground">
                  Sistemas que sugerem produtos, conteúdos ou ações 
                  baseados no comportamento do usuário.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Tecnologias */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-2">
              Tecnologias de <span className="text-primary">IA</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl">
              Trabalhamos com as principais plataformas e frameworks de IA
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-secondary border border-border rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Processo */}
      <section className="py-16 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold mb-4">
                  Nossa <span className="text-primary">abordagem</span>
                </h2>
              </div>
              
              <div className="space-y-0">
                {[
                  { step: "01", title: "Análise de Viabilidade", text: "Avaliamos se IA é a melhor solução e qual abordagem faz sentido." },
                  { step: "02", title: "Prova de Conceito", text: "Desenvolvemos um MVP para validar a solução com dados reais." },
                  { step: "03", title: "Desenvolvimento", text: "Implementação completa com integração aos sistemas existentes." },
                  { step: "04", title: "Treinamento e Otimização", text: "Ajuste fino do modelo e treinamento da equipe para uso." },
                ].map((item, index) => (
                  <AnimatedSection key={index} delay={index * 50}>
                    <div className="flex items-start gap-6 py-6 border-b border-border last:border-0">
                      <span className="text-primary font-bold text-lg w-12 shrink-0">{item.step}</span>
                      <div>
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.text}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Pronto para usar <span className="text-primary">IA</span> no seu negócio?
              </h2>
              <p className="text-muted-foreground mb-8">
                Vamos avaliar juntos como inteligência artificial pode resolver seus desafios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/orcamento">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contato">
                  <Button variant="outline" className="border-border text-foreground hover:bg-secondary">
                    Falar com Especialista
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceAI;
