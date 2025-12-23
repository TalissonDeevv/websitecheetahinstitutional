import { Link } from "react-router-dom";
import { Heart, Copy, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";

const CheetahSolidaria = () => {
  const [copiedPix, setCopiedPix] = useState(false);
  
  const metaTotal = 100000;
  const valorArrecadado = 32500;
  const progressoPercentual = (valorArrecadado / metaTotal) * 100;
  const aacdonPIX = "03.738.013/0001-02";
  
  const copyPixToClipboard = () => {
    navigator.clipboard.writeText(aacdonPIX);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero */}
      <section className="pt-28 pb-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <div className="text-center">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">Projeto Social</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
                Cheetah <span className="text-primary">Solidária</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Apoiamos a AACD/Teleton porque acreditamos que tecnologia e solidariedade 
                podem transformar vidas. Toda doação vai diretamente para a instituição.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://doe.aacd.org.br/" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                    <Heart className="mr-2 h-4 w-4" />
                    Doar Agora
                  </Button>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Como Doar */}
      <section className="py-16 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-8 text-center">
              Como <span className="text-primary">doar</span>
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedSection delay={100}>
              <div className="p-6 border border-border rounded-lg bg-card text-center h-full">
                <ExternalLink className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Site Oficial</h3>
                <p className="text-sm text-muted-foreground mb-4">Doe diretamente no site da AACD</p>
                <a href="https://doe.aacd.org.br/" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Acessar doe.aacd.org.br
                  </Button>
                </a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={150}>
              <div className="p-6 border border-border rounded-lg bg-card text-center h-full">
                <Copy className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">PIX AACD</h3>
                <p className="text-sm text-muted-foreground mb-4">CNPJ da AACD para doação via PIX</p>
                <div className="bg-secondary/50 border border-border rounded-lg p-3 mb-4">
                  <p className="text-primary font-mono text-sm">{aacdonPIX}</p>
                </div>
                <Button onClick={copyPixToClipboard} variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  {copiedPix ? 'Copiado!' : 'Copiar PIX'}
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Meta */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection>
            <div className="p-8 border border-border rounded-lg bg-card">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Meta <span className="text-primary">Coletiva</span>
              </h2>
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary mb-1">
                  R$ {valorArrecadado.toLocaleString('pt-BR')}
                </div>
                <div className="text-sm text-muted-foreground">
                  de R$ {metaTotal.toLocaleString('pt-BR')}
                </div>
              </div>
              <Progress value={progressoPercentual} className="h-3 mb-4" />
              <p className="text-center text-muted-foreground text-sm">
                {progressoPercentual.toFixed(1)}% alcançado
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-4">
              Transforme <span className="text-primary">vidas</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Sua doação vai diretamente para a AACD, instituição comprometida 
              com a reabilitação e inclusão de pessoas com deficiência.
            </p>
            <a href="https://doe.aacd.org.br/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                <Heart className="mr-2 h-4 w-4" />
                Doar para AACD
              </Button>
            </a>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CheetahSolidaria;
