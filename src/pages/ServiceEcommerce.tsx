import { ShoppingCart, CreditCard, Package, ArrowRight, CheckCircle, Zap, Users, BarChart3, Store, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServiceEcommerce = () => {
  const technologies = [
    "React", "Node.js", "Stripe", "PayPal", "WooCommerce", "Shopify", "MongoDB"
  ];

  const features = [
    "Painel administrativo e controle de estoque",
    "Integração com meios de pagamento",
    "Relatórios de vendas e desempenho",
    "Carrinho de compras inteligente",
    "Sistema de cupons e promoções",
    "Gestão de pedidos e clientes",
    "SEO otimizado para vendas"
  ];

  const benefits = [
    {
      icon: ShoppingCart,
      title: "Experiência de Compra",
      description: "Interface intuitiva que converte visitantes em clientes."
    },
    {
      icon: CreditCard,
      title: "Pagamentos Seguros",
      description: "Integração com múltiplos gateways de pagamento confiáveis."
    },
    {
      icon: Package,
      title: "Gestão Completa",
      description: "Controle total sobre estoque, pedidos e entregas."
    },
    {
      icon: BarChart3,
      title: "Analytics Avançado",
      description: "Relatórios detalhados para otimizar suas vendas."
    }
  ];

  const ecommerceTypes = [
    {
      title: "Loja Virtual Básica",
      description: "Solução completa para pequenos negócios começarem a vender online",
      icon: ShoppingCart,
      features: ["Catálogo de produtos", "Carrinho de compras", "Pagamentos seguros", "Gestão de pedidos"]
    },
    {
      title: "Marketplace Avançado",
      description: "Plataforma robusta para múltiplos vendedores e categorias",
      icon: Store,
      features: ["Multi-vendedores", "Sistema de comissões", "Gestão de categorias", "Relatórios avançados"]
    },
    {
      title: "E-commerce Corporativo",
      description: "Solução escalável para grandes volumes de vendas e integrações",
      icon: Building2,
      features: ["Escalabilidade enterprise", "Integrações ERP", "B2B e B2C", "Analytics avançados"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 animate-fade-in">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">E-commerce </span>
                <span className="text-[#0047ab]">sob Medida</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Crie lojas virtuais modernas e escaláveis, com ferramentas completas para vender, gerir e crescer online. Transforme seu negócio com uma plataforma de e-commerce personalizada.
              </p>
              <Link to="/orcamento">
                <Button className="bg-[#0047ab] hover:bg-[#0047ab]/80 text-white px-8 py-3 text-lg">
                  Solicitar Orçamento
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://i.ibb.co/n26RLZ5/Ecommerce-web-page-amico.png" 
                alt="E-commerce"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -left-4 bg-[#0047ab]/20 rounded-full w-24 h-24 flex items-center justify-center backdrop-blur-sm border border-[#0047ab]/30">
                <ShoppingCart className="h-12 w-12 text-[#0047ab]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#0047ab]/10 to-black/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-white">Por que escolher nosso </span>
              <span className="text-[#0047ab]">E-commerce?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-gradient-to-br from-[#0047ab]/10 to-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#0047ab]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-[#0047ab]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* E-commerce Types Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-white">Tipos de </span>
              <span className="text-[#0047ab]">E-commerce</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Desenvolvemos soluções de e-commerce personalizadas para diferentes necessidades e portes de negócio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ecommerceTypes.map((type, index) => (
              <Card key={index} className="group bg-gradient-to-br from-[#0047ab]/10 to-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="bg-[#0047ab]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-[#0047ab]/30">
                      <type.icon className="h-8 w-8 text-[#0047ab]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{type.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{type.description}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-[#0047ab] mb-3">Principais recursos:</h4>
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#0047ab] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 bg-[#0047ab]/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-white">Tecnologias </span>
              <span className="text-[#0047ab]">Utilizadas</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Utilizamos as melhores tecnologias para criar e-commerce seguros e performáticos
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#0047ab]/10 to-black/50 border border-[#0047ab]/20 rounded-lg p-4 text-center hover:border-[#0047ab]/50 transition-all duration-300"
              >
                <p className="text-white font-medium text-sm">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-white">Recursos </span>
              <span className="text-[#0047ab]">Inclusos</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-gradient-to-r from-[#0047ab]/10 to-transparent p-4 rounded-lg border border-[#0047ab]/20">
                <CheckCircle className="h-5 w-5 text-[#0047ab] flex-shrink-0" />
                <span className="text-white">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#0047ab]/10 to-black/30">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            <span className="text-white">Nosso </span>
            <span className="text-[#0047ab]">Processo</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Users, title: "Análise do Negócio", desc: "Entendemos suas necessidades e objetivos" },
              { icon: ShoppingCart, title: "Design da Loja", desc: "Criamos layouts focados em conversão" },
              { icon: Zap, title: "Desenvolvimento", desc: "Implementamos funcionalidades avançadas" },
              { icon: BarChart3, title: "Otimização", desc: "Melhorias contínuas e análise de performance" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#0047ab]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-[#0047ab]" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#0047ab]/20 to-black/50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-white">Pronto para </span>
            <span className="text-[#0047ab]">Vender Online?</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos criar a loja virtual perfeita para seu negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/orcamento">
              <Button className="bg-[#0047ab] hover:bg-[#0047ab]/80 text-white px-8 py-3">
                Solicitar Orçamento
              </Button>
            </Link>
            <a
              href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20e-commerce"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="border-[#0047ab] text-[#0047ab] hover:bg-[#0047ab] hover:text-white px-8 py-3">
                Falar no WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceEcommerce;
