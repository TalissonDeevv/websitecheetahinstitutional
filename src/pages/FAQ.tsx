
import { HelpCircle, MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FAQ = () => {
  const faqs = [
    {
      question: "Qual é o prazo médio para desenvolvimento de um projeto?",
      answer: "O prazo varia conforme a complexidade do projeto. Bots simples: 3-7 dias. Websites: 1-3 semanas. Projetos complexos: 3-6 semanas. Sempre fornecemos um cronograma detalhado antes do início."
    },
    {
      question: "Oferecem suporte após a entrega do projeto?",
      answer: "Sim, oferecemos suporte gratuito por 30 dias após a entrega. Após esse período, disponibilizamos planos de suporte técnico e manutenção preventiva com valores acessíveis."
    },
    {
      question: "Como funciona o processo de pagamento?",
      answer: "Trabalhamos com 50% de entrada e 50% na entrega. Para projetos acima de R$ 5.000, parcelamos em até 3x. Aceitamos PIX, transferência bancária e cartões de crédito."
    },
    {
      question: "Posso solicitar alterações durante o desenvolvimento?",
      answer: "Sim, dentro do escopo acordado. Alterações pequenas são incluídas. Mudanças significativas podem gerar custos adicionais, sempre comunicados previamente."
    },
    {
      question: "Quais tecnologias vocês utilizam?",
      answer: "Utilizamos tecnologias modernas como React, Node.js, Python, Discord.js, TypeScript, PostgreSQL, MongoDB, entre outras. Escolhemos sempre a melhor tecnologia para cada projeto."
    },
    {
      question: "Fazem integração com outros sistemas?",
      answer: "Sim, temos experiência em integrações com APIs REST, GraphQL, webhooks, CRM, ERP, sistemas de pagamento, redes sociais e muito mais."
    },
    {
      question: "O Atendefly funciona com qualquer número do WhatsApp?",
      answer: "Sim, o Atendefly funciona com WhatsApp Business oficial. Configuramos a integração com seu número existente sem interferir no funcionamento normal."
    },
    {
      question: "Posso testar o Atendefly antes de contratar?",
      answer: "Sim, oferecemos 14 dias de teste gratuito com todas as funcionalidades. Sem compromisso ou taxas ocultas."
    },
    {
      question: "Vocês desenvolvem para outras plataformas além do Discord?",
      answer: "Sim, desenvolvemos bots para Telegram, chatbots para websites, WhatsApp Business e outras plataformas de mensageria."
    },
    {
      question: "Como garantem a segurança dos dados?",
      answer: "Utilizamos criptografia, servidores seguros, backups regulares e seguimos as melhores práticas de segurança. Somos compliance com LGPD."
    },
    {
      question: "Oferecem treinamento para usar os sistemas desenvolvidos?",
      answer: "Sim, incluímos treinamento básico na entrega e documentação completa. Treinamentos avançados podem ser contratados separadamente."
    },
    {
      question: "Posso hospedar o projeto em meus próprios servidores?",
      answer: "Sim, oferecemos tanto hospedagem própria quanto configuração em servidores do cliente. Orientamos sobre a melhor opção para cada caso."
    }
  ];

  const categories = [
    {
      title: "Projetos e Prazos",
      items: faqs.slice(0, 4)
    },
    {
      title: "Tecnologia e Integrações",
      items: faqs.slice(4, 8)
    },
    {
      title: "Suporte e Segurança",
      items: faqs.slice(8, 12)
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Perguntas </span>
            <span className="text-[#0047ab]">Frequentes</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços e processos
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
                <HelpCircle className="h-8 w-8 text-[#0047ab]" />
                {category.title}
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.items.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${categoryIndex}-${index}`}
                    className="bg-gray-900/50 border-[#0047ab]/20 rounded-lg overflow-hidden"
                  >
                    <AccordionTrigger className="text-left px-6 py-4 hover:bg-[#0047ab]/10 text-white hover:text-white">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Dicas Rápidas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#0047ab]/10 to-black/50 p-6 rounded-lg border border-[#0047ab]/20">
              <h3 className="text-xl font-semibold mb-3 text-white">💡 Antes de Contratar</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Tenha uma ideia clara do que precisa</li>
                <li>• Prepare referências visuais se possível</li>
                <li>• Defina um orçamento aproximado</li>
                <li>• Considere prazos realistas</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#0047ab]/10 to-black/50 p-6 rounded-lg border border-[#0047ab]/20">
              <h3 className="text-xl font-semibold mb-3 text-white">🚀 Para Melhores Resultados</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Mantenha comunicação constante</li>
                <li>• Forneça feedback detalhado</li>
                <li>• Teste funcionalidades regularmente</li>
                <li>• Documente requisitos importantes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#0047ab]/10 to-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Não Encontrou sua Resposta?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para esclarecer todas as suas dúvidas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-[#0047ab] hover:bg-[#0047ab]/80 text-white px-8 py-6 text-lg font-semibold rounded-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline"
              className="border-[#0047ab] text-[#0047ab] hover:bg-[#0047ab] hover:text-white px-8 py-6 text-lg font-semibold rounded-lg"
            >
              Enviar E-mail
            </Button>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Resposta em até 2 horas durante horário comercial
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
