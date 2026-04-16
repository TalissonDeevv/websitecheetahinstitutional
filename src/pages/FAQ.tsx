import { MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { FAQJsonLd, WebPageJsonLd } from "@/components/JsonLd";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Metodologia e Processo",
      items: [
        {
          question: "Como funciona o Cheetah OPS Framework?",
          answer: "O Cheetah OPS Framework é nossa metodologia proprietária dividida em três etapas: diagnóstico operacional, definição de arquitetura tecnológica e implementação estruturada. Antes de qualquer desenvolvimento, mapeamos a operação da empresa para identificar gargalos e definir a melhor abordagem."
        },
        {
          question: "Qual é o prazo médio de um projeto?",
          answer: "Depende da complexidade operacional. Automações e integrações simples: 1-2 semanas. Sistemas operacionais completos: 4-8 semanas. Estruturações de maior escopo: 8-16 semanas. Sempre enviamos cronograma detalhado após o diagnóstico."
        },
        {
          question: "O desenvolvimento começa imediatamente?",
          answer: "Não. Todo projeto inicia com diagnóstico operacional. Mapeamos processos, identificamos gargalos e definimos a arquitetura antes de escrever qualquer código. Isso garante que o sistema resolva o problema certo."
        },
        {
          question: "Posso solicitar alterações durante o projeto?",
          answer: "Sim, dentro do escopo definido na arquitetura. Ajustes menores são incorporados naturalmente. Mudanças de escopo significativas são avaliadas e comunicadas antes da implementação."
        }
      ]
    },
    {
      title: "Tecnologia e Infraestrutura",
      items: [
        {
          question: "Quais tecnologias vocês utilizam?",
          answer: "React, Node.js, Python, TypeScript, PostgreSQL, MongoDB, AWS, entre outras. A escolha de tecnologia é feita com base no diagnóstico operacional, priorizando a melhor solução para cada cenário."
        },
        {
          question: "Os sistemas se integram com ferramentas existentes?",
          answer: "Sim. Integração entre sistemas é uma de nossas capacidades centrais. Conectamos ERPs, CRMs, bancos de dados, APIs e qualquer plataforma que a operação da empresa utilize."
        },
        {
          question: "Como garantem segurança e estabilidade?",
          answer: "Segurança é definida na etapa de arquitetura, não adicionada depois. Criptografia, backups, controle de acesso e conformidade com LGPD fazem parte da estrutura de cada sistema."
        },
        {
          question: "Posso hospedar nos meus próprios servidores?",
          answer: "Sim. Configuramos a infraestrutura conforme a necessidade da empresa, seja em servidores próprios, cloud gerenciado ou hospedagem dedicada."
        }
      ]
    },
    {
      title: "Comercial e Suporte",
      items: [
        {
          question: "Como funciona o pagamento?",
          answer: "O modelo de pagamento é estruturado conforme o projeto. Geralmente trabalhamos com entrada na aprovação e parcelas conforme entregas. Aceitamos PIX, transferência e cartão."
        },
        {
          question: "Oferecem suporte após a entrega?",
          answer: "Sim. 30 dias de acompanhamento inclusos após cada implantação. Planos de manutenção contínua estão disponíveis para monitoramento e evolução do sistema."
        },
        {
          question: "O que acontece se algo parar de funcionar?",
          answer: "Se for falha do desenvolvimento, corrigimos sem custo. Se for alteração externa ou novo requisito operacional, avaliamos e orçamos a correção com transparência."
        },
        {
          question: "Vocês assumem projetos iniciados por outras empresas?",
          answer: "Depende. Avaliamos a base de código e a documentação existente. Se estiver em condições de manutenção, podemos assumir. Caso contrário, recomendamos refatoração com base em diagnóstico operacional."
        }
      ]
    },
    {
      title: "Posicionamento e Metodologia",
      items: [
        {
          question: "A Cheetah vende sites, bots ou sistemas prontos?",
          answer: "Não trabalhamos com produtos de prateleira ou pacotes fechados. A Cheetah estrutura arquiteturas de software sob medida a partir da operação do cliente, desenvolvendo os sistemas, automações e integrações necessários para eliminar gargalos e aumentar previsibilidade."
        },
        {
          question: "Como a Cheetah define a solução ideal para cada empresa?",
          answer: "Antes de qualquer linha de código, aplicamos a Cheetah OPS Framework para mapear processos, identificar gargalos críticos e projetar a arquitetura ideal da operação."
        },
        {
          question: "Vocês são uma software house tradicional?",
          answer: "Não. Nosso foco não é apenas desenvolver software, mas reestruturar operações por meio de engenharia de sistemas orientada à performance."
        },
        {
          question: "O que vocês entregam na prática?",
          answer: "Dependendo da necessidade operacional, a entrega pode envolver sistemas internos, painéis, automações, apps, integrações, inteligência de dados ou infraestrutura escalável. A tecnologia é definida pelo problema, não por um catálogo."
        },
        {
          question: "Para quais empresas a Cheetah é indicada?",
          answer: "Empresas em crescimento que enfrentam desorganização operacional, processos desconectados, baixa previsibilidade e gargalos que impedem escala."
        },
        {
          question: "A Cheetah oferece mentoria empresarial?",
          answer: "A Cheetah não opera no modelo de mentoria tradicional. Nossa atuação combina diagnóstico operacional, arquitetura de software e implementação sob medida para resolver gargalos estruturais. Estratégia sem execução não transforma operação — por isso nosso foco está em construir a infraestrutura tecnológica que sustenta crescimento."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Cheetah Solutions Network | Perguntas Frequentes"
        description="Respostas sobre a metodologia, processos e forma de trabalho da Cheetah Solutions Network. Diagnóstico operacional, tecnologias, prazos e suporte técnico."
        ogTitle="Perguntas Frequentes | Cheetah Solutions Network"
        ogDescription="Respostas sobre a metodologia, processos e forma de trabalho da Cheetah Solutions Network. Diagnóstico operacional, tecnologias, prazos e suporte."
        ogUrl="/faq"
        canonical="/faq"
      />
      <WebPageJsonLd 
        title="Perguntas Frequentes | Cheetah Solutions Network"
        description="Respostas para as dúvidas mais comuns sobre os serviços da Cheetah Solutions Network."
        url="/faq"
      />
      <FAQJsonLd 
        questions={faqCategories.flatMap(cat => 
          cat.items.map(item => ({ question: item.question, answer: item.answer }))
        )}
      />
      <Header />
      {/* Hero */}
      <AnimatedSection animation="fade-up">
        <section className="pt-28 pb-12 px-4">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <p className="text-xs text-primary uppercase tracking-[0.2em] mb-6 font-medium">
                FAQ
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
                Perguntas<br />
                <span className="text-primary">frequentes.</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Respostas diretas sobre nossa metodologia, processo de trabalho 
                e forma de estruturar operações empresariais.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          {faqCategories.map((category, categoryIndex) => (
            <AnimatedSection key={categoryIndex} animation="fade-up" delay={categoryIndex * 100}>
              <div className={`${categoryIndex > 0 ? 'mt-12' : ''} mb-8`}>
                <h2 className="text-lg font-semibold mb-4 pb-3 border-b border-border">
                  {category.title}
                </h2>
                
                <Accordion type="single" collapsible className="space-y-2">
                  {category.items.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${categoryIndex}-${index}`}
                      className="border border-border rounded-lg overflow-hidden bg-card"
                    >
                      <AccordionTrigger className="text-left px-5 py-4 hover:bg-secondary/50 text-sm font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-5 pb-4 text-muted-foreground text-sm leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection animation="fade-up">
        <section className="py-20 px-4 bg-secondary/30">
          <div className="container mx-auto">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">
                Não encontrou sua resposta?
              </h2>
              <p className="text-muted-foreground mb-6">
                Fale diretamente com nossa equipe. Respondemos em até 24h.
              </p>
              <Link to="/atendimento">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Entrar em contato
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default FAQ;
