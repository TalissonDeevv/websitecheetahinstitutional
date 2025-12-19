
import { Bot, Globe, Cog, Link2, ArrowRight, Shield, Wrench, Info, Smartphone, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      title: "Bots para Discord e Telegram",
      description: "Desenvolva bots inteligentes e personalizados que revolucionam a gestão de comunidades online.",
      details: [
        "• Automação completa de tarefas repetitivas e gerenciamento de usuários",
        "• Suporte ao cliente 24/7 com respostas automáticas inteligentes",
        "• Sistema de moderação avançada com filtros customizáveis",
        "• Comandos personalizados para economia virtual e gamificação",
        "• Integração com APIs externas (YouTube, Spotify, jogos)",
        "• Notificações automatizadas e alertas em tempo real",
        "• Dashboard web para controle total das funcionalidades",
        "• Backup automático e sistema de logs detalhados"
      ],
      icon: Bot,
      link: "/servicos/bots"
    },
    {
      title: "Websites Personalizados",
      description: "Websites modernos e responsivos que convertem visitantes em clientes reais.",
      details: [
        "• Design responsivo adaptado para todos os dispositivos móveis",
        "• Otimização avançada para mecanismos de busca (SEO completo)",
        "• Sistema de gerenciamento de conteúdo intuitivo e fácil",
        "• E-commerce integrado com gateways de pagamento seguros",
        "• Formulários avançados com validação e automação",
        "• Galerias dinâmicas e portfólios interativos",
        "• Integração completa com redes sociais e ferramentas",
        "• Carregamento ultra-rápido e performance otimizada",
        "• Certificados SSL e medidas de segurança avançadas"
      ],
      icon: Globe,
      link: "/servicos/web"
    },
    {
      title: "Sistemas Web",
      description: "Sistemas web personalizados que otimizam processos e aumentam produtividade empresarial.",
      details: [
        "• ERPs completos adaptados às necessidades específicas do negócio",
        "• Sistemas de gestão integrados com múltiplos departamentos",
        "• CRMs avançados para relacionamento e vendas eficientes",
        "• Controle de estoque em tempo real com alertas automáticos",
        "• Sistemas de recursos humanos com gestão de pessoal",
        "• Dashboards gerenciais com KPIs e métricas importantes",
        "• Automação completa de workflows e processos internos",
        "• Relatórios avançados e análises de dados detalhadas",
        "• Integração com sistemas legados e APIs externas"
      ],
      icon: Cog,
      link: "/servicos/sistemas"
    },
    {
      title: "Integrações de Sistemas",
      description: "Conecte todas suas ferramentas através de integrações robustas e APIs personalizadas.",
      details: [
        "• Sincronização automática de dados entre múltiplos sistemas",
        "• Automação completa de fluxos de trabalho empresariais",
        "• Integração com serviços terceiros (Google, Microsoft, AWS)",
        "• Webhooks personalizados para comunicação em tempo real",
        "• APIs REST e GraphQL para máxima compatibilidade",
        "• Migração segura de dados entre plataformas diferentes",
        "• Sincronização bidirecional em tempo real",
        "• Ecossistemas tecnológicos integrados e eficientes",
        "• Eliminação total de trabalho manual repetitivo"
      ],
      icon: Link2,
      link: "/servicos/integracoes"
    },
    {
      title: "Segurança Digital e Proteção de Dados",
      description: "Máxima proteção digital com as melhores práticas de segurança e conformidade legal.",
      details: [
        "• Autenticação multifator e controle de acesso avançado",
        "• Criptografia de ponta a ponta para dados sensíveis",
        "• Proteção contra ataques DDoS, SQL injection e XSS",
        "• Auditoria completa de segurança e testes de penetração",
        "• Conformidade total com LGPD, GDPR e outras regulamentações",
        "• Backup automatizado com redundância geográfica",
        "• Monitoramento 24/7 de vulnerabilidades e ameaças",
        "• Certificados SSL avançados e firewalls personalizados",
        "• Políticas de acesso granulares por usuário e função"
      ],
      icon: Shield,
      link: "/servicos/seguranca"
    },
    {
      title: "Dashboards & Business Intelligence",
      description: "Transforme dados em insights valiosos com dashboards inteligentes e análises avançadas.",
      details: [
        "• Visualizações interativas em tempo real e responsivas",
        "• Relatórios automatizados com envio programado por email",
        "• Análise preditiva usando algoritmos de machine learning",
        "• KPIs customizados específicos para seu tipo de negócio",
        "• Integração com múltiplas fontes de dados simultâneas",
        "• Gráficos dinâmicos com drill-down para análises detalhadas",
        "• Sistema de alertas automáticos para métricas críticas",
        "• Exportação de relatórios em diversos formatos (PDF, Excel)",
        "• Ferramentas avançadas de análise para decisões estratégicas"
      ],
      icon: Info,
      link: "/servicos/dashboards"
    },
    {
      title: "Aplicativos Mobile",
      description: "Apps nativos para Android e iOS com performance excepcional e experiência única.",
      details: [
        "• Desenvolvimento nativo para máxima performance",
        "• Interface intuitiva e design moderno personalizado",
        "• Integração com APIs e serviços web existentes",
        "• Notificações push personalizadas e segmentadas",
        "• Funcionalidades offline para uso sem internet",
        "• Integração com recursos nativos (câmera, GPS, sensores)",
        "• Publicação nas lojas oficiais (Google Play e App Store)",
        "• Analytics detalhado de uso e comportamento do usuário",
        "• Atualizações automáticas e manutenção contínua"
      ],
      icon: Smartphone,
      link: "/servicos/mobile"
    },
    {
      title: "E-commerce & Lojas Virtuais",
      description: "Plataformas completas de e-commerce para vender online com máxima conversão.",
      details: [
        "• Catálogo de produtos com gerenciamento avançado",
        "• Múltiplos gateways de pagamento integrados (PIX, cartão, boleto)",
        "• Sistema de cupons, promoções e programas de fidelidade",
        "• Gestão completa de estoque e controle de inventário",
        "• Painel administrativo com relatórios de vendas detalhados",
        "• Integração com correios e transportadoras para frete",
        "• Carrinho abandono recovery e remarketing automatizado",
        "• SEO otimizado para produtos e categorias",
        "• Marketplace integration (Mercado Livre, Amazon, etc.)"
      ],
      icon: CreditCard,
      link: "/servicos/ecommerce"
    },
    {
      title: "Inteligência Artificial & Automação",
      description: "Soluções de IA para automatizar processos e aumentar eficiência operacional.",
      details: [
        "• Chatbots inteligentes com processamento de linguagem natural",
        "• Análise preditiva e machine learning customizado",
        "• Automação de processos (RPA) para tarefas repetitivas",
        "• Reconhecimento de imagem e processamento de documentos",
        "• Sistemas de recomendação personalizados",
        "• Análise de sentimento e feedback automatizado",
        "• Otimização de preços dinâmica baseada em IA",
        "• Detecção de fraudes e anomalias em tempo real",
        "• Integração com APIs de IA (OpenAI, Google AI, AWS AI)"
      ],
      icon: Wrench,
      link: "/servicos/ia"
    },
    {
      title: "Cloud Solutions & Infraestrutura",
      description: "Infraestrutura em nuvem escalável, segura e de alta disponibilidade.",
      details: [
        "• Migração completa para nuvem (AWS, Azure, Google Cloud)",
        "• Arquitetura escalável com auto-scaling automático",
        "• Monitoramento 24/7 com alertas proativos",
        "• Backup automatizado com recuperação de desastres",
        "• CDN global para máxima velocidade de carregamento",
        "• Containers e microserviços com Docker e Kubernetes",
        "• DevOps completo com CI/CD pipelines automatizados",
        "• Otimização de custos e performance contínua",
        "• Compliance e certificações de segurança"
      ],
      icon: Globe,
      link: "/servicos/cloud"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 animate-fade-in">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Nossos </span>
            <span className="text-[#0047ab]">Serviços</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Soluções tecnológicas completas para impulsionar seu negócio no mundo digital
          </p>
        </div>
      </section>

      {/* Important Notice Section */}
      <section className="py-16 px-4 bg-[#0047ab]/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Alert className="bg-gradient-to-r from-[#0047ab]/10 to-transparent border border-[#0047ab]/30 backdrop-blur-sm">
              <Info className="h-5 w-5 text-[#0047ab]" />
              <AlertDescription className="text-white/90 leading-relaxed">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#0047ab] mb-3">Aviso Importante</h3>
                  <p>
                    Em breve, a Cheetah Network contará com seu próprio sistema de hospedagem, 
                    exclusivo para clientes que contratam nossos serviços de bots, sistemas e websites.
                  </p>
                  <p>
                    Nosso objetivo é entregar soluções completas, seguras e integradas e a hospedagem 
                    será mais um recurso que facilitará a vida dos nossos parceiros.
                  </p>
                  <p>
                    Este serviço será reservado apenas para projetos desenvolvidos pela Cheetah, 
                    garantindo maior desempenho, estabilidade e suporte especializado.
                  </p>
                  <p className="text-[#0047ab] font-medium">
                    Fique atento! Mais informações serão divulgadas em breve.
                  </p>
                </div>
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group bg-gradient-to-br from-gray-900/90 to-black/90 border border-[#0047ab]/30 hover:border-[#0047ab] transition-all duration-500 hover:scale-[1.02] overflow-hidden backdrop-blur-sm hover:shadow-2xl hover:shadow-[#0047ab]/20">
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="bg-gradient-to-br from-[#0047ab]/20 to-[#0047ab]/5 rounded-2xl w-16 h-16 flex items-center justify-center mr-6 border-2 border-[#0047ab]/40 group-hover:border-[#0047ab] transition-all duration-300 group-hover:scale-110">
                      <service.icon className="h-8 w-8 text-[#0047ab] group-hover:text-[#0047ab] transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#0047ab] transition-colors duration-300">{service.title}</h3>
                      <p className="text-gray-300 leading-relaxed text-lg">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {service.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#0047ab] rounded-full mt-2.5 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <Link to={service.link}>
                    <Button className="bg-gradient-to-r from-[#0047ab] to-[#0047ab]/80 hover:from-[#0047ab]/90 hover:to-[#0047ab] text-white w-full group/btn border-0 h-12 text-lg font-semibold shadow-lg shadow-[#0047ab]/25 hover:shadow-xl hover:shadow-[#0047ab]/35 transition-all duration-300">
                      <span className="group-hover/btn:scale-105 transition-transform duration-300">Saiba Mais</span>
                      <ArrowRight className="ml-3 h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance and Additional Services Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#0047ab]/10 to-black/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-white">Serviços </span>
              <span className="text-[#0047ab]">Adicionais</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Além dos nossos serviços principais, oferecemos soluções complementares para garantir o melhor desempenho dos seus projetos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-[#0047ab]/10 to-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-[#0047ab]/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <Wrench className="h-6 w-6 text-[#0047ab]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Planos de Manutenção</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Mantenha seus sistemas sempre atualizados e funcionando perfeitamente com nossos planos de manutenção preventiva e corretiva.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Atualizações regulares de segurança</li>
                  <li>• Monitoramento contínuo</li>
                  <li>• Backup automático</li>
                  <li>• Suporte técnico prioritário</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#0047ab]/10 to-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-[#0047ab]/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <Shield className="h-6 w-6 text-[#0047ab]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Consultoria & Suporte</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Consultoria especializada e suporte técnico para otimizar suas soluções e garantir máxima performance.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Análise de performance</li>
                  <li>• Otimização de sistemas</li>
                  <li>• Treinamento de equipes</li>
                  <li>• Auditoria de segurança</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">
              Interessado em nossos planos de manutenção ou outros serviços? Entre em contato conosco!
            </p>
            <Link to="/contato">
              <Button className="bg-[#0047ab] hover:bg-[#0047ab]/80 text-white px-8 py-3">
                Solicitar Orçamento
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#0047ab]/20 to-black/50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-white">Pronto para </span>
            <span className="text-[#0047ab]">Começar?</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossas soluções podem transformar seu negócio
          </p>
          <Link to="/contato">
            <Button className="bg-[#0047ab] hover:bg-[#0047ab]/80 text-white px-8 py-3 text-lg">
              Fale Conosco
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
