import { Link } from "react-router-dom";
import { Heart, Copy, ExternalLink, Users, Target, HandHeart, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";
import familySolidaritySvg from "@/assets/family-solidarity.svg";

const CheetahSolidaria = () => {
  const [copiedPix, setCopiedPix] = useState(false);
  const aacdonPIX = "03.738.013/0001-02";
  
  const copyPixToClipboard = () => {
    navigator.clipboard.writeText(aacdonPIX);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero - Asymmetric like other pages */}
      <AnimatedSection animation="fade-up">
        <section className="pt-28 pb-20 px-4 overflow-x-hidden overflow-y-visible">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="flex-1">
                <div className="max-w-2xl">
                  <p className="text-xs text-primary uppercase tracking-[0.2em] mb-6 font-medium">
                    Responsabilidade Social
                  </p>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">
                    Cheetah<br />
                    <span className="text-primary">Solidária</span>
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                    Acreditamos que tecnologia e solidariedade podem transformar vidas. 
                    Por isso, destinamos parte de nossos resultados para causas sociais.
                  </p>
                </div>
              </div>
              
              {/* SVG Illustration - Desktop */}
              <div className="hidden lg:flex items-center justify-center flex-shrink-0">
                <img 
                  src={familySolidaritySvg} 
                  alt="Family solidarity illustration" 
                  className="w-[420px] h-[420px] xl:w-[480px] xl:h-[480px]"
                />
              </div>
            </div>
            
            {/* SVG Illustration - Mobile/Tablet */}
            <div className="flex lg:hidden items-center justify-center mt-8">
              <img 
                src={familySolidaritySvg} 
                alt="Family solidarity illustration" 
                className="w-64 h-64 sm:w-80 sm:h-80"
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Sobre o Projeto */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-4">
              <div className="sticky top-32">
                <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  Nossa Causa
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mt-3 leading-tight">
                  Apoio à AACD<br />
                  Teleton
                </h2>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={100} className="lg:col-span-8">
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  A AACD (Associação de Assistência à Criança Deficiente) é uma instituição 
                  que há décadas transforma a vida de milhares de pessoas com deficiência física, 
                  oferecendo reabilitação de excelência e promovendo inclusão social.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Escolhemos apoiar o Teleton porque acreditamos que toda empresa tem responsabilidade 
                  social. Não se trata de marketing, mas de contribuir genuinamente para uma sociedade 
                  mais justa e inclusiva.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Toda doação realizada através desta página vai diretamente para a AACD. 
                  Não intermediamos recursos — apenas facilitamos o processo e incentivamos 
                  nossa rede de clientes e parceiros a participar.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Como Doar */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-xl mb-16">
              <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                Participe
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3">
                Como contribuir
              </h2>
            </div>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <AnimatedSection delay={100}>
              <div className="bg-card border border-border rounded-xl p-8 h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <ExternalLink className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Site Oficial da AACD</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Doe diretamente no site oficial da AACD. Processo seguro e transparente, 
                  com opções de doação única ou recorrente.
                </p>
                <a href="https://doe.aacd.org.br/" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Acessar doe.aacd.org.br
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={150}>
              <div className="bg-card border border-border rounded-xl p-8 h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Copy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">PIX Direto para AACD</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Use o CNPJ da AACD para fazer uma doação via PIX de forma rápida e prática.
                </p>
                <div className="bg-secondary/50 border border-border rounded-lg p-4 mb-6">
                  <p className="text-xs text-muted-foreground mb-1">CNPJ da AACD</p>
                  <p className="text-primary font-mono text-lg font-medium">{aacdonPIX}</p>
                </div>
                <Button 
                  onClick={copyPixToClipboard} 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  {copiedPix ? 'Copiado!' : 'Copiar chave PIX'}
                  <Copy className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vídeo Institucional Teleton */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">
                Teleton é Solidariedade. Teleton é Gratidão!
              </h2>
            </div>
            
            <div className="mb-10">
              <p className="text-muted-foreground text-center leading-relaxed max-w-2xl mx-auto text-lg">
                A Cheetah Solidária acredita que tecnologia também é sobre pessoas. Apoiar iniciativas 
                como o Teleton é reforçar nosso compromisso com impacto social, inclusão e transformação 
                real de vidas.
              </p>
            </div>
            
            {/* YouTube Video Embed with centered glow effect */}
            <div className="relative">
              {/* Glow effect - centered on video */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(0, 71, 171, 0.15) 0%, rgba(0, 71, 171, 0.08) 40%, transparent 70%)',
                  transform: 'scale(1.3)',
                  filter: 'blur(40px)'
                }}
              />
              <div 
                className="dark:block hidden absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(0, 71, 171, 0.25) 0%, rgba(0, 71, 171, 0.12) 40%, transparent 70%)',
                  transform: 'scale(1.3)',
                  filter: 'blur(40px)'
                }}
              />
              
              <div 
                className="relative w-full aspect-video rounded-2xl overflow-hidden"
                style={{
                  border: '2px solid #0047ab',
                  boxShadow: '0 0 40px rgba(0, 71, 171, 0.15), 0 0 80px rgba(0, 71, 171, 0.08)'
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/HNK4VIu8M9I"
                  title="Teleton - Vídeo Institucional"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
            
            {/* Credits */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Vídeo do canal oficial{" "}
                <a 
                  href="https://www.youtube.com/@teleton" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Teleton AACD
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por que essa causa importa */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <Users className="h-8 w-8 text-primary mx-auto mb-4 opacity-70" />
              <h2 className="text-2xl md:text-3xl font-bold">
                Mais do que apoiar, compreender
              </h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                A Cheetah Solidária nasce de uma vivência real.
              </p>
              <p>
                Conviver com uma deficiência física e acompanhar de perto o trabalho da AACD permite 
                enxergar algo que muitas vezes passa despercebido: o impacto verdadeiro de um atendimento 
                humano, especializado e acessível na vida de uma pessoa.
              </p>
              <p>
                Esse impacto vai além do tratamento. Ele envolve autonomia, confiança, inclusão e a 
                possibilidade de seguir evoluindo — técnica, emocional e socialmente.
              </p>
              <p>
                Apoiar iniciativas como o Teleton é reconhecer que tecnologia, inovação e progresso só 
                fazem sentido quando caminham junto com responsabilidade social e impacto humano real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nosso Compromisso Social */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <HandHeart className="h-8 w-8 text-primary mx-auto mb-4 opacity-70" />
              <h2 className="text-2xl md:text-3xl font-bold">
                Nosso compromisso vai além da tecnologia
              </h2>
            </div>
            
            <div className="text-center">
              <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto mb-10">
                A Cheetah Solutions Network acredita que inovação também é responsabilidade social. 
                Por meio da Cheetah Solidária, buscamos apoiar, divulgar e fortalecer iniciativas que 
                promovem inclusão, acessibilidade e qualidade de vida, alinhando tecnologia, consciência 
                social e impacto positivo.
              </p>
              
              {/* Discrete CTAs */}
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://aacd.org.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-border text-muted-foreground hover:text-foreground">
                    Conheça o trabalho da AACD
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a 
                  href="https://www.youtube.com/@teleton" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-border text-muted-foreground hover:text-foreground">
                    Saiba mais sobre o Teleton
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que a AACD */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20">
              <div className="lg:w-1/3">
                <span className="text-xs text-primary uppercase tracking-[0.15em] font-medium">
                  Impacto Real
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mt-3">
                  Por que escolhemos a AACD
                </h2>
              </div>
              
              <div className="lg:w-2/3">
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
                  <div className="border-l-2 border-primary/30 pl-6">
                    <Building className="h-5 w-5 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Credibilidade</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Mais de 70 anos de história e transparência na gestão de recursos.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-primary/30 pl-6">
                    <Users className="h-5 w-5 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Alcance Nacional</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Atendimento em todo o Brasil, beneficiando milhares de pessoas anualmente.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-primary/30 pl-6">
                    <Target className="h-5 w-5 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Resultados Mensuráveis</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Cada real doado é convertido em reabilitação e inclusão social.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-primary/30 pl-6">
                    <HandHeart className="h-5 w-5 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Transformação de Vidas</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Reabilitação de excelência que devolve autonomia e dignidade.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Sua doação faz<br />
                <span className="text-primary">a diferença.</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg">
                Qualquer valor contribui para a reabilitação e inclusão de pessoas 
                com deficiência física. Doe diretamente para a AACD.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://doe.aacd.org.br/" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    Doar para AACD
                  </Button>
                </a>
                <Link to="/contato">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-border text-muted-foreground hover:bg-secondary hover:text-foreground font-medium"
                  >
                    Falar conosco
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

export default CheetahSolidaria;
