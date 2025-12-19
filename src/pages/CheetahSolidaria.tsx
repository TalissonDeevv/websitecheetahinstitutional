import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Shield, CheckCircle, Info, Globe, MessageCircle, ExternalLink, Copy, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const CheetahSolidaria = () => {
  const [copiedPix, setCopiedPix] = useState(false);
  
  // Meta da campanha AACD/Teleton
  const metaTotal = 100000; // R$ 100.000
  const valorArrecadado = 32500; // R$ 32.500
  const progressoPercentual = (valorArrecadado / metaTotal) * 100;
  
  const aacdonPIX = "03.738.013/0001-02"; // PIX da AACD (exemplo)
  
  const copyPixToClipboard = () => {
    navigator.clipboard.writeText(aacdonPIX);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2000);
  };
  
  const apoiadores = [
    { nome: "Ana Silva", tipo: "Apoiador Solidário", valor: 100 },
    { nome: "João Santos", tipo: "Anjo da AACD", valor: 500 },
    { nome: "Maria Oliveira", tipo: "Apoiador Solidário", valor: 150 },
    { nome: "Pedro Costa", tipo: "Anjo da AACD", valor: 300 },
    { nome: "Fernanda Lima", tipo: "Apoiador Solidário", valor: 75 },
    { nome: "Carlos Roberto", tipo: "Anjo da AACD", valor: 1000 }
  ];

  const values = [
    {
      title: "Transparência Total",
      description: "Todas as doações são rastreáveis e os resultados são compartilhados com total clareza",
      icon: Shield
    },
    {
      title: "Verificação Rigorosa", 
      description: "Cada caso é investigado e verificado por nossa equipe antes de ser publicado",
      icon: CheckCircle
    },
    {
      title: "Impacto Real",
      description: "Focamos em causar mudanças concretas na vida das pessoas que realmente precisam",
      icon: Heart
    },
    {
      title: "Comunidade Ativa",
      description: "Uma rede de pessoas engajadas em fazer a diferença no mundo",
      icon: Users
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Identificação de Casos",
      description: "Nossa equipe identifica pessoas em situação de vulnerabilidade através de indicações da comunidade e parceiros sociais"
    },
    {
      step: "02", 
      title: "Verificação e Análise",
      description: "Cada caso passa por uma rigorosa verificação para garantir autenticidade e real necessidade de ajuda"
    },
    {
      step: "03",
      title: "Criação da Campanha",
      description: "Desenvolvemos uma campanha completa com toda documentação necessária e história detalhada"
    },
    {
      step: "04",
      title: "Divulgação e Arrecadação",
      description: "A campanha é divulgada em nossas plataformas e redes sociais para maximizar o alcance"
    },
    {
      step: "05",
      title: "Acompanhamento",
      description: "Monitoramos o progresso e mantemos todos informados sobre o andamento da campanha"
    },
    {
      step: "06",
      title: "Prestação de Contas",
      description: "Compartilhamos relatórios detalhados sobre como os recursos foram utilizados"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="bg-[#0047ab]/10 border border-[#0047ab]/30 rounded-full px-6 py-2 backdrop-blur-sm">
                <span className="text-[#0047ab] text-sm font-medium">Projeto Social</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-[#0047ab]">Cheetah </span>
              <span className="text-white">Solidária</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#0047ab]">
              Campanha AACD/Teleton 2024
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
              A Cheetah acredita no poder da tecnologia e da solidariedade para transformar vidas. Por isso, estamos apoiando a AACD/Teleton, instituição que há décadas faz a diferença na vida de milhares de pessoas com deficiência. Toda doação realizada através desta página vai diretamente para a AACD, garantindo transparência e impacto real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://doe.aacd.org.br/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-[#0047ab] hover:bg-[#0047ab]/90 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <Heart className="mr-3 h-5 w-5" />
                  Doe Agora
                </Button>
              </a>
              <Button 
                size="lg" 
                variant="outline"
                className="border-[#0047ab] text-[#0047ab] hover:bg-[#0047ab] hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                onClick={() => document.getElementById('meta-coletiva')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Info className="mr-2 h-5 w-5" />
                Veja Nossa Meta
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Como Doar Section */}
      <section className="py-20 px-4 bg-[#0047ab]/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
              Como <span className="text-[#0047ab]">Doar</span>
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              100% das doações são destinadas diretamente à AACD. Nenhum valor passa pela Cheetah.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-black/50 border border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-[#0047ab]/10 rounded-full flex items-center justify-center border-2 border-[#0047ab]">
                      <ExternalLink className="h-8 w-8 text-[#0047ab]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Site Oficial</h3>
                  <p className="text-white/70 mb-4">Faça sua doação direto no site oficial da AACD</p>
                  <a 
                    href="https://doe.aacd.org.br/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#0047ab] hover:bg-[#0047ab]/90 text-white w-full">
                      Acessar doe.aacd.org.br
                    </Button>
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-black/50 border border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-[#0047ab]/10 rounded-full flex items-center justify-center border-2 border-[#0047ab]">
                      <Copy className="h-8 w-8 text-[#0047ab]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">PIX AACD</h3>
                  <p className="text-white/70 mb-4">CNPJ da AACD para doação via PIX</p>
                  <div className="bg-[#0047ab]/10 border border-[#0047ab]/30 rounded-lg p-3 mb-4">
                    <p className="text-[#0047ab] font-mono text-sm">{aacdonPIX}</p>
                  </div>
                  <Button 
                    onClick={copyPixToClipboard}
                    variant="outline"
                    className="border-[#0047ab] text-[#0047ab] hover:bg-[#0047ab] hover:text-white w-full"
                  >
                    {copiedPix ? 'Copiado!' : 'Copiar PIX'}
                    <Copy className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Meta Coletiva Section */}
      <section id="meta-coletiva" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Meta <span className="text-[#0047ab]">Coletiva</span>
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Juntos, podemos fazer ainda mais pela AACD
              </p>
            </div>
            
            <Card className="bg-black/50 border border-[#0047ab]/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-[#0047ab] mb-2">
                    R$ {valorArrecadado.toLocaleString('pt-BR')}
                  </div>
                  <div className="text-white/60">
                    de R$ {metaTotal.toLocaleString('pt-BR')}
                  </div>
                </div>
                
                <Progress value={progressoPercentual} className="h-4 mb-4" />
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">
                    {progressoPercentual.toFixed(1)}% alcançado
                  </div>
                  <p className="text-white/70">
                    Cada contribuição nos aproxima da meta e transforma mais vidas
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Apoiadores Section */}
      <section className="py-20 px-4 bg-[#0047ab]/5">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Nossos <span className="text-[#0047ab]">Apoiadores</span>
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Pessoas especiais que estão fazendo a diferença
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {apoiadores.map((apoiador, index) => (
                <Card key={index} className="bg-black/50 border border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="w-12 h-12 bg-[#0047ab]/10 rounded-full flex items-center justify-center border-2 border-[#0047ab]">
                        {apoiador.tipo === "Anjo da AACD" ? (
                          <Star className="h-6 w-6 text-[#0047ab]" />
                        ) : (
                          <Award className="h-6 w-6 text-[#0047ab]" />
                        )}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{apoiador.nome}</h3>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                      apoiador.tipo === "Anjo da AACD" 
                        ? "bg-yellow-500/20 text-yellow-400" 
                        : "bg-[#0047ab]/20 text-[#0047ab]"
                    }`}>
                      {apoiador.tipo}
                    </div>
                    <p className="text-white/60 text-sm">
                      Contribuição: R$ {apoiador.valor}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Frase de Impacto e Vídeo */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              "Cada contribuição ajuda a escrever uma nova 
              <span className="text-[#0047ab]"> história de superação</span>."
            </blockquote>
            
            <div className="bg-black/50 border border-[#0047ab]/20 rounded-2xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Vídeo Institucional Teleton
              </h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/fuge9Qs5txI"
                  title="Vídeo Institucional Teleton"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
            
            <a 
              href="https://doe.aacd.org.br/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-[#0047ab] hover:bg-[#0047ab]/90 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Heart className="mr-3 h-5 w-5" />
                Faça Sua Doação Agora
              </Button>
            </a>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-20 px-4 bg-[#0047ab]/5">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
              Transforme <span className="text-[#0047ab]">Vidas</span> com a<br />
              <span className="text-[#0047ab]">AACD</span>
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Sua doação vai diretamente para a AACD, uma instituição séria e comprometida 
              com a reabilitação e inclusão de pessoas com deficiência
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://doe.aacd.org.br/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-[#0047ab] hover:bg-[#0047ab]/90 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Doar para AACD
                </Button>
              </a>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-[#0047ab] text-[#0047ab] hover:bg-[#0047ab] hover:text-white px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Fale Conosco
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CheetahSolidaria;