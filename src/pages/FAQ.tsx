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
      title: "Projetos e Prazos",
      items: [
        {
          question: "Qual é o prazo médio para desenvolvimento?",
          answer: "Depende do escopo. Bots simples: 3-7 dias. Websites: 1-3 semanas. Sistemas complexos: 3-6 semanas. Sempre enviamos cronograma detalhado antes de começar."
        },
        {
          question: "Oferecem suporte após a entrega?",
          answer: "Sim. 30 dias de suporte gratuito após entrega. Depois disso, temos planos de manutenção com valores acessíveis."
        },
        {
          question: "Como funciona o pagamento?",
          answer: "50% na entrada, 50% na entrega. Projetos acima de R$ 5.000 podem ser parcelados em até 3x. Aceitamos PIX, transferência e cartão."
        },
        {
          question: "Posso pedir alterações durante o desenvolvimento?",
          answer: "Sim, dentro do escopo acordado. Alterações pequenas são incluídas. Mudanças significativas geram custos adicionais, sempre comunicados antes."
        }
      ]
    },
    {
      title: "Tecnologia",
      items: [
        {
          question: "Quais tecnologias vocês usam?",
          answer: "React, Node.js, Python, TypeScript, PostgreSQL, MongoDB, entre outras. Escolhemos a melhor tecnologia para cada projeto, não usamos sempre a mesma."
        },
        {
          question: "Fazem integração com outros sistemas?",
          answer: "Sim. APIs REST, GraphQL, webhooks, CRM, ERP, sistemas de pagamento, redes sociais. Se tem API, conseguimos integrar."
        },
        {
          question: "Como garantem a segurança dos dados?",
          answer: "Criptografia, servidores seguros, backups regulares, compliance com LGPD. Seguimos as melhores práticas de segurança do mercado."
        },
        {
          question: "Posso hospedar em meus próprios servidores?",
          answer: "Sim. Oferecemos hospedagem própria ou configuramos nos seus servidores. Orientamos sobre a melhor opção para cada caso."
        }
      ]
    },
    {
      title: "Suporte",
      items: [
        {
          question: "Oferecem treinamento para usar os sistemas?",
          answer: "Sim. Treinamento básico e documentação estão inclusos na entrega. Treinamentos avançados podem ser contratados separadamente."
        },
        {
          question: "Como funciona o suporte técnico?",
          answer: "Durante o projeto: comunicação direta via WhatsApp ou Discord. Após entrega: suporte via ticket ou plano de manutenção."
        },
        {
          question: "O que acontece se algo parar de funcionar?",
          answer: "Se for bug do desenvolvimento, corrigimos sem custo. Se for alteração externa ou novo requisito, avaliamos e orçamos a correção."
        },
        {
          question: "Vocês fazem manutenção de projetos existentes?",
          answer: "Depende. Avaliamos o código e a documentação existente. Se estiver em condições de manutenção, podemos assumir. Caso contrário, sugerimos refatoração."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Cheetah Solutions | Perguntas Frequentes"
        description="Respostas para as dúvidas mais comuns sobre os serviços da Cheetah Solutions Network. Prazos, tecnologias, pagamentos e suporte técnico."
        ogTitle="Perguntas Frequentes | Cheetah Solutions"
        ogDescription="Respostas para as dúvidas mais comuns sobre os serviços da Cheetah Solutions Network. Prazos, tecnologias, pagamentos e suporte técnico."
        ogUrl="/faq"
        canonical="/faq"
      />
      <WebPageJsonLd 
        title="Perguntas Frequentes | Cheetah Solutions"
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
                Respostas diretas para as dúvidas mais comuns sobre 
                nossos serviços e forma de trabalho.
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
              <div className="mb-16 last:mb-0">
                <h2 className="text-lg font-semibold mb-6 pb-3 border-b border-border">
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
              <Link to="/contato">
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
