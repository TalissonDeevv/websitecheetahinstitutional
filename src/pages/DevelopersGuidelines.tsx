import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ChevronLeft, 
  FileText, 
  ExternalLink, 
  ChevronDown,
  Shield,
  ScrollText,
  ClipboardCheck,
  Scale,
  Eye,
  Stamp,
  Unlink,
  RefreshCw,
  Gavel,
  FileCheck,
  Mail,
  AlertTriangle
} from "lucide-react";

interface GuidelineSection {
  id: string;
  title: string;
  icon: React.ElementType;
  content: React.ReactNode;
}

const DevelopersGuidelines = () => {
  const [openSections, setOpenSections] = useState<string[]>(["intro"]);

  const toggleSection = (id: string) => {
    setOpenSections(prev => 
      prev.includes(id) 
        ? prev.filter(s => s !== id) 
        : [...prev, id]
    );
  };

  const sections: GuidelineSection[] = [
    {
      id: "intro",
      title: "1. Introdução",
      icon: ScrollText,
      content: (
        <div className="space-y-4">
          <p>
            O Programa Cheetah Developers Brasil foi criado com o objetivo de fortalecer o ecossistema tecnológico brasileiro, oferecendo visibilidade institucional, apoio técnico e reconhecimento público a projetos que atendam a padrões rigorosos de qualidade, segurança, transparência e ética.
          </p>
          <p>
            A participação no Programa representa um diferencial competitivo e reputacional para projetos que buscam credibilidade junto ao mercado, investidores, parceiros e usuários finais. No entanto, tal participação está condicionada ao cumprimento integral das diretrizes aqui estabelecidas e à manutenção contínua dos padrões exigidos.
          </p>
          <p>
            O Programa opera sob os princípios de meritocracia, transparência, independência institucional e proteção do ecossistema, não constituindo certificação técnica formal, endosso comercial irrestrito ou garantia de resultados específicos.
          </p>
        </div>
      ),
    },
    {
      id: "natureza",
      title: "2. Natureza do Programa",
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p>
            A participação no Programa Cheetah Developers Brasil possui natureza discricionária, revogável e não permanente. A verificação ou aprovação concedida a qualquer projeto:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Não constitui certificação técnica formal ou auditoria completa</li>
            <li>Não representa avaliação jurídica, contábil ou regulatória</li>
            <li>Não implica garantia de segurança absoluta ou ausência de vulnerabilidades</li>
            <li>Não configura endosso comercial, societário ou financeiro</li>
            <li>Não cria vínculo empregatício, societário ou contratual automático</li>
            <li>Não gera direito adquirido à permanência ou renovação</li>
          </ul>
          <p>
            A Cheetah Solutions Network reserva-se o direito de aceitar, recusar, suspender ou encerrar a participação de qualquer projeto, a qualquer momento, com base em critérios técnicos, institucionais, reputacionais ou estratégicos, sem necessidade de justificativa pública.
          </p>
        </div>
      ),
    },
    {
      id: "inscricao",
      title: "3. Processo de Inscrição",
      icon: ClipboardCheck,
      content: (
        <div className="space-y-4">
          <p>
            A submissão de projetos ao Programa é voluntária e deve seguir os procedimentos estabelecidos pela Cheetah Solutions Network. O processo de inscrição observa os seguintes princípios:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>A submissão não garante aprovação ou qualquer forma de reconhecimento</li>
            <li>O projeto deve fornecer informações precisas, completas e verificáveis</li>
            <li>Omissões, inconsistências ou informações falsas podem resultar em indeferimento imediato ou encerramento posterior</li>
            <li>A inscrição não cria vínculo contratual, obrigacional ou expectativa de direito</li>
            <li>O prazo de análise é variável e depende da complexidade do projeto e da disponibilidade institucional</li>
          </ul>
          <p>
            Ao submeter um projeto, o responsável declara expressamente que leu, compreendeu e aceita integralmente todas as disposições deste documento, comprometendo-se a cumpri-las durante todo o período de participação.
          </p>
        </div>
      ),
    },
    {
      id: "avaliacao",
      title: "4. Critérios de Avaliação",
      icon: Shield,
      content: (
        <div className="space-y-6">
          <p>
            A avaliação de projetos pelo Programa Cheetah Developers Brasil é global, multidimensional e não se limita a aspectos técnicos isolados.
          </p>
          
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <h4 className="font-semibold mb-2 text-sm">Segurança e Proteção de Dados</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Práticas de segurança da informação</li>
                <li>• Conformidade LGPD/GDPR</li>
                <li>• Gestão de vulnerabilidades</li>
              </ul>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <h4 className="font-semibold mb-2 text-sm">Governança e Conformidade</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Estrutura organizacional clara</li>
                <li>• Políticas de ética e conduta</li>
                <li>• Transparência operacional</li>
              </ul>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <h4 className="font-semibold mb-2 text-sm">Qualidade Técnica</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Arquitetura robusta e escalável</li>
                <li>• Boas práticas de desenvolvimento</li>
                <li>• Documentação adequada</li>
              </ul>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <h4 className="font-semibold mb-2 text-sm">Confiabilidade e Reputação</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Histórico do projeto</li>
                <li>• Avaliações da comunidade</li>
                <li>• Alinhamento ético</li>
              </ul>
            </div>
          </div>
          
          <p className="text-sm italic">
            Nenhum critério isolado garante aprovação ou permanência no Programa. A avaliação é holística e considera o conjunto de fatores de forma integrada.
          </p>
        </div>
      ),
    },
    {
      id: "governanca",
      title: "5. Governança e Independência",
      icon: Scale,
      content: (
        <div className="space-y-4">
          <p>
            O Programa Cheetah Developers Brasil opera de forma independente, preservando sua autonomia institucional. Esta independência implica:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Não há obrigação de alinhamento a interesses externos, públicos ou privados</li>
            <li>Decisões não são influenciadas por pressões comerciais, políticas ou midiáticas</li>
            <li>O Programa pode considerar comunicações formais de parceiros do ecossistema</li>
            <li>Não há obrigação de contraditório público ou exposição de fundamentos internos</li>
            <li>A governança do Programa é de responsabilidade exclusiva da Cheetah Solutions Network</li>
          </ul>
          <p>
            A independência institucional é condição essencial para a credibilidade e efetividade do Programa.
          </p>
        </div>
      ),
    },
    {
      id: "reavaliacao",
      title: "6. Reavaliação, Suspensão e Indeferimento",
      icon: AlertTriangle,
      content: (
        <div className="space-y-4">
          <p>
            A participação no Programa não é permanente e está sujeita a reavaliação contínua. A Cheetah Solutions Network pode, a qualquer momento:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Reavaliar a adequação do projeto aos critérios do Programa</li>
            <li>Suspender temporariamente a participação para investigação ou ajustes</li>
            <li>Indeferir novas solicitações com base em análise técnica ou institucional</li>
            <li>Encerrar definitivamente a participação de projetos</li>
          </ul>
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-4">
            <p className="text-sm">
              <strong>Nota:</strong> Decisões preventivas não constituem acusação formal, penalidade ou julgamento público de mérito.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "transparencia",
      title: "7. Transparência e Limites de Informação",
      icon: Eye,
      content: (
        <div className="space-y-4">
          <p>
            Embora o Programa valorize a transparência como princípio fundamental, existem limites legítimos à divulgação de informações internas. A Cheetah Solutions Network:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Não é obrigada a divulgar relatórios internos de avaliação</li>
            <li>Não fornece provas, evidências ou documentos técnicos específicos</li>
            <li>Não detalha publicamente os critérios aplicados em casos individuais</li>
            <li>Não realiza julgamentos públicos ou exposições de projetos</li>
            <li>Não responde a questionamentos públicos sobre decisões específicas</li>
          </ul>
        </div>
      ),
    },
    {
      id: "marca",
      title: "8. Uso de Marca e Identidade Visual",
      icon: Stamp,
      content: (
        <div className="space-y-4">
          <p>
            O uso de qualquer elemento institucional da Cheetah Solutions Network é estritamente controlado e condicionado a:
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
              <h4 className="font-semibold text-sm text-green-600 dark:text-green-400 mb-2">✓ Uso Autorizado</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Selo de verificação em websites</li>
                <li>• Menção em materiais institucionais</li>
                <li>• Assets gráficos fornecidos</li>
              </ul>
            </div>
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
              <h4 className="font-semibold text-sm text-red-600 dark:text-red-400 mb-2">✗ Uso Proibido</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Distorção ou alteração</li>
                <li>• Uso após desvinculação</li>
                <li>• Indução ao erro do público</li>
              </ul>
            </div>
          </div>
          <p className="text-sm">
            Qualquer uso não autorizado pode resultar em medidas administrativas e legais.
          </p>
        </div>
      ),
    },
    {
      id: "desvinculacao",
      title: "9. Desvinculação e Obrigação de Remoção",
      icon: Unlink,
      content: (
        <div className="space-y-4">
          <p>
            Em caso de indeferimento, suspensão, encerramento ou desvinculação voluntária, o projeto deve proceder imediatamente à remoção completa de qualquer referência à Cheetah. A obrigação abrange:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Websites, landing pages e aplicações web</li>
            <li>Aplicativos móveis e software desktop</li>
            <li>Repositórios de código (GitHub, GitLab, etc.)</li>
            <li>Redes sociais e perfis públicos</li>
            <li>Materiais promocionais e documentos</li>
            <li>Vídeos, podcasts e conteúdos audiovisuais</li>
          </ul>
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mt-4">
            <p className="text-sm font-medium text-orange-600 dark:text-orange-400">
              ⏱ Prazo: 48 horas a partir da comunicação formal de desvinculação
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "novo-envio",
      title: "10. Novo Envio de Projeto",
      icon: RefreshCw,
      content: (
        <div className="space-y-4">
          <p>
            O indeferimento ou encerramento não implica bloqueio definitivo. Projetos podem submeter nova solicitação, desde que:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Atendam integralmente aos critérios vigentes</li>
            <li>Tenham sanado as questões que motivaram o encerramento anterior</li>
            <li>Não tenham incorrido em uso indevido da marca após desvinculação</li>
            <li>Demonstrem mudanças substanciais que justifiquem reavaliação</li>
            <li>Respeitem eventual período de carência estabelecido</li>
          </ul>
          <p>
            A nova submissão será analisada de forma independente, sem prejuízo ou favorecimento.
          </p>
        </div>
      ),
    },
    {
      id: "medidas",
      title: "11. Medidas Administrativas",
      icon: Gavel,
      content: (
        <div className="space-y-4">
          <p>
            O descumprimento das diretrizes pode resultar em medidas proporcionais à gravidade:
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
              <span className="text-yellow-500 font-bold text-sm">1</span>
              <span className="text-sm">Advertência formal com prazo para correção</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
              <span className="text-orange-500 font-bold text-sm">2</span>
              <span className="text-sm">Suspensão temporária da participação</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
              <span className="text-red-500 font-bold text-sm">3</span>
              <span className="text-sm">Revogação imediata da verificação</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
              <span className="text-red-700 font-bold text-sm">4</span>
              <span className="text-sm">Medidas judiciais para proteção de direitos</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "disposicoes",
      title: "12. Disposições Finais",
      icon: FileCheck,
      content: (
        <div className="space-y-4">
          <p>
            A Cheetah Solutions Network reserva-se o direito de modificar estas diretrizes a qualquer momento, sem aviso prévio. As alterações entram em vigor imediatamente após publicação.
          </p>
          <p>
            Estas diretrizes são complementadas pelas demais políticas institucionais:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Política de Privacidade</li>
            <li>Termos de Uso</li>
            <li>Política de Segurança</li>
            <li>Política de Propriedade Intelectual</li>
          </ul>
          <p>
            A submissão ao Programa implica aceitação integral de todas as disposições deste documento.
          </p>
        </div>
      ),
    },
    {
      id: "contato",
      title: "Contato Institucional",
      icon: Mail,
      content: (
        <div className="space-y-4">
          <p>
            Para questões relacionadas ao Programa Cheetah Developers Brasil:
          </p>
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <p className="font-medium">📧 E-mail:</p>
            <a 
              href="mailto:contatocheetahsolutions@gmail.com" 
              className="text-primary hover:underline"
            >
              contatocheetahsolutions@gmail.com
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            Solicitações de participação, dúvidas sobre critérios e outras questões serão respondidas exclusivamente por canais oficiais.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Diretrizes do Programa | Cheetah Developers Brasil"
        description="Diretrizes, Governança e Termos de Participação do Programa Cheetah Developers Brasil. Critérios de avaliação, uso de marca e disposições institucionais."
        ogTitle="Diretrizes do Programa | Cheetah Developers Brasil"
        ogDescription="Diretrizes, Governança e Termos de Participação do Programa Cheetah Developers Brasil."
        ogUrl="/developers/diretrizes"
        canonical="/developers/diretrizes"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 border-b border-border/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <Link 
              to="/developers"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ChevronLeft className="w-4 h-4" />
              Voltar para Cheetah Developers Brasil
            </Link>
            
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Documento Institucional</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Programa Cheetah Developers <span className="text-primary">Brasil</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Diretrizes, Governança e Termos de Participação
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              O Programa Cheetah Developers Brasil é uma iniciativa institucional da Cheetah Solutions Network voltada ao reconhecimento, curadoria e apoio a projetos tecnológicos que demonstram alinhamento com os valores de excelência técnica, governança responsável e segurança operacional.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content - Accordion Style */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="space-y-3">
              {sections.map((section, index) => {
                const isOpen = openSections.includes(section.id);
                const Icon = section.icon;
                
                return (
                  <AnimatedSection key={section.id} animation="fade-up" delay={index * 30}>
                    <div className="border border-border rounded-xl overflow-hidden bg-card">
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/30 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <span className="font-semibold">{section.title}</span>
                        </div>
                        <ChevronDown 
                          className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-5 pb-5 pt-0 text-muted-foreground leading-relaxed">
                          <div className="pl-14">
                            {section.content}
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="mt-12 p-8 bg-card border border-border rounded-xl text-center">
              <h3 className="text-xl font-semibold mb-4">Pronto para participar?</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Entre para a comunidade Cheetah Developers Brasil e faça parte de um ecossistema 
                de desenvolvedores focado em aprendizado e evolução técnica.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a 
                  href="https://discord.gg/rY3HUQpECS" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Entrar no Discord
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <Link to="/developers">
                  <Button variant="outline">
                    Voltar para a Comunidade
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

export default DevelopersGuidelines;
