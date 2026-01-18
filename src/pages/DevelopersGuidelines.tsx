import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, FileText, ExternalLink } from "lucide-react";

const DevelopersGuidelines = () => {
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
            <p className="text-xl text-muted-foreground">
              Diretrizes, Governança e Termos de Participação
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <article className="prose prose-lg max-w-none">
              <div className="space-y-12">
                
                <section>
                  <p className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary/30 pl-4 mb-8">
                    Diretrizes, Governança e Termos de Participação
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    O Programa Cheetah Developers Brasil é uma iniciativa institucional da Cheetah Solutions Network voltada ao reconhecimento, curadoria e apoio a projetos tecnológicos que demonstram alinhamento com os valores de excelência técnica, governança responsável, segurança operacional e compromisso com a comunidade de desenvolvimento de software.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Este documento estabelece as diretrizes, critérios, procedimentos e responsabilidades aplicáveis a todos os projetos que desejam participar ou que já integram o Programa. A leitura integral e a aceitação expressa destes termos são condições obrigatórias para qualquer forma de participação.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introdução</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    O Programa Cheetah Developers Brasil foi criado com o objetivo de fortalecer o ecossistema tecnológico brasileiro, oferecendo visibilidade institucional, apoio técnico e reconhecimento público a projetos que atendam a padrões rigorosos de qualidade, segurança, transparência e ética.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    A participação no Programa representa um diferencial competitivo e reputacional para projetos que buscam credibilidade junto ao mercado, investidores, parceiros e usuários finais. No entanto, tal participação está condicionada ao cumprimento integral das diretrizes aqui estabelecidas e à manutenção contínua dos padrões exigidos.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    O Programa opera sob os princípios de meritocracia, transparência, independência institucional e proteção do ecossistema, não constituindo certificação técnica formal, endosso comercial irrestrito ou garantia de resultados específicos.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Natureza do Programa</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A participação no Programa Cheetah Developers Brasil possui natureza discricionária, revogável e não permanente. A verificação ou aprovação concedida a qualquer projeto:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                    <li>Não constitui certificação técnica formal ou auditoria completa</li>
                    <li>Não representa avaliação jurídica, contábil ou regulatória</li>
                    <li>Não implica garantia de segurança absoluta ou ausência de vulnerabilidades</li>
                    <li>Não configura endosso comercial, societário ou financeiro</li>
                    <li>Não cria vínculo empregatício, societário ou contratual automático</li>
                    <li>Não gera direito adquirido à permanência ou renovação</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    A Cheetah Solutions Network reserva-se o direito de aceitar, recusar, suspender ou encerrar a participação de qualquer projeto, a qualquer momento, com base em critérios técnicos, institucionais, reputacionais ou estratégicos, sem necessidade de justificativa pública.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Processo de Inscrição de Projetos</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A submissão de projetos ao Programa é voluntária e deve seguir os procedimentos estabelecidos pela Cheetah Solutions Network. O processo de inscrição observa os seguintes princípios:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                    <li>A submissão não garante aprovação ou qualquer forma de reconhecimento</li>
                    <li>O projeto deve fornecer informações precisas, completas e verificáveis</li>
                    <li>Omissões, inconsistências ou informações falsas podem resultar em indeferimento imediato ou encerramento posterior</li>
                    <li>A inscrição não cria vínculo contratual, obrigacional ou expectativa de direito</li>
                    <li>O prazo de análise é variável e depende da complexidade do projeto e da disponibilidade institucional</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Ao submeter um projeto, o responsável declara expressamente que leu, compreendeu e aceita integralmente todas as disposições deste documento, comprometendo-se a cumpri-las durante todo o período de participação.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Critérios de Avaliação</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A avaliação de projetos pelo Programa Cheetah Developers Brasil é global, multidimensional e não se limita a aspectos técnicos isolados. Os critérios considerados incluem, mas não se restringem a:
                  </p>
                  
                  <h3 className="text-xl font-medium mt-6 mb-3 text-foreground">4.1. Segurança e Proteção de Dados</h3>
                  <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
                    <li>Implementação de práticas de segurança da informação</li>
                    <li>Conformidade com legislações de proteção de dados (LGPD, GDPR)</li>
                    <li>Gestão adequada de vulnerabilidades e incidentes</li>
                    <li>Proteção contra ameaças cibernéticas e vazamentos</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium mt-6 mb-3 text-foreground">4.2. Governança e Conformidade</h3>
                  <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
                    <li>Estrutura organizacional clara e documentada</li>
                    <li>Políticas internas de ética, conduta e compliance</li>
                    <li>Transparência nas operações e tomada de decisões</li>
                    <li>Conformidade com regulamentações setoriais aplicáveis</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium mt-6 mb-3 text-foreground">4.3. Qualidade Técnica</h3>
                  <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
                    <li>Arquitetura de software robusta e escalável</li>
                    <li>Boas práticas de desenvolvimento e manutenção</li>
                    <li>Documentação técnica adequada</li>
                    <li>Processos de teste e garantia de qualidade</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium mt-6 mb-3 text-foreground">4.4. Confiabilidade e Reputação</h3>
                  <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
                    <li>Histórico público do projeto e de seus responsáveis</li>
                    <li>Avaliações de usuários e comunidade</li>
                    <li>Ausência de envolvimento em controvérsias graves</li>
                    <li>Alinhamento com valores éticos e institucionais</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium mt-6 mb-3 text-foreground">4.5. Impacto Reputacional</h3>
                  <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
                    <li>Potencial de benefício ou dano à imagem institucional</li>
                    <li>Alinhamento com a missão e valores da Cheetah Solutions Network</li>
                    <li>Contribuição positiva para o ecossistema tecnológico</li>
                  </ul>
                  
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Nenhum critério isolado garante aprovação ou permanência no Programa. A avaliação é holística e considera o conjunto de fatores de forma integrada e contextualizada.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Governança e Independência</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    O Programa Cheetah Developers Brasil opera de forma independente, preservando sua autonomia institucional e sua capacidade de tomar decisões baseadas exclusivamente em critérios técnicos, éticos e reputacionais. Esta independência implica:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                    <li>Não há obrigação de alinhamento a interesses externos, públicos ou privados</li>
                    <li>Decisões não são influenciadas por pressões comerciais, políticas ou midiáticas</li>
                    <li>O Programa pode considerar comunicações formais de parceiros do ecossistema</li>
                    <li>Não há obrigação de contraditório público ou exposição de fundamentos internos</li>
                    <li>A governança do Programa é de responsabilidade exclusiva da Cheetah Solutions Network</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    A independência institucional é condição essencial para a credibilidade e efetividade do Programa, garantindo que as decisões sejam tomadas com base em mérito e alinhamento institucional.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Reavaliação, Suspensão e Indeferimento</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A participação no Programa não é permanente e está sujeita a reavaliação contínua. A Cheetah Solutions Network pode, a qualquer momento e de forma preventiva:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                    <li>Reavaliar a adequação do projeto aos critérios do Programa</li>
                    <li>Suspender temporariamente a participação para investigação ou ajustes</li>
                    <li>Indeferir novas solicitações com base em análise técnica ou institucional</li>
                    <li>Encerrar definitivamente a participação de projetos</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Decisões preventivas não constituem:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                    <li>Acusação formal ou imputação de responsabilidade</li>
                    <li>Penalidade ou sanção disciplinar</li>
                    <li>Julgamento público de mérito</li>
                    <li>Juízo pessoal sobre os responsáveis pelo projeto</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    O Programa atua com foco na proteção do ecossistema, da reputação institucional e da confiança pública depositada na marca Cheetah.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Transparência e Limites de Informação</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Embora o Programa valorize a transparência como princípio fundamental, existem limites legítimos à divulgação de informações internas. A Cheetah Solutions Network:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                    <li>Não é obrigada a divulgar relatórios internos de avaliação</li>
                    <li>Não fornece provas, evidências ou documentos técnicos específicos</li>
                    <li>Não detalha publicamente os critérios aplicados em casos individuais</li>
                    <li>Não realiza julgamentos públicos ou exposições de projetos</li>
                    <li>Não responde a questionamentos públicos sobre decisões específicas</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Comunicações formais de parceiros do ecossistema, comunidade ou autoridades podem ser consideradas internamente, porém não geram obrigação de resposta pública ou modificação de decisões.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Uso de Marca e Identidade Visual</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    O uso de qualquer elemento institucional da Cheetah Solutions Network, incluindo nome, logotipo, selos, identidade visual e menções públicas, é estritamente controlado e condicionado a:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                    <li>Aprovação ativa e vigente no Programa</li>
                    <li>Autorização expressa para uso específico</li>
                    <li>Conformidade integral com estas diretrizes</li>
                    <li>Respeito ao manual de identidade visual, quando aplicável</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    O uso autorizado inclui, mas não se limita a:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                    <li>Exibição de selo de verificação em websites e aplicações</li>
                    <li>Menção à participação no Programa em materiais institucionais</li>
                    <li>Referência ao vínculo em comunicações oficiais</li>
                    <li>Utilização de assets gráficos fornecidos pela Cheetah</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Qualquer uso não autorizado, distorcido ou que possa induzir o público a erro constitui violação grave e pode resultar em medidas administrativas e legais.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Desvinculação e Obrigação de Remoção</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Em caso de indeferimento, suspensão, encerramento ou desvinculação voluntária do Programa, o projeto deve proceder imediatamente à remoção completa de qualquer referência à Cheetah Solutions Network, Cheetah Developers Brasil ou quaisquer ativos institucionais associados.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    A obrigação de remoção abrange todos os meios e plataformas, incluindo:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                    <li>Websites, landing pages e aplicações web</li>
                    <li>Aplicativos móveis e software desktop</li>
                    <li>Repositórios de código (GitHub, GitLab, Bitbucket, etc.)</li>
                    <li>Redes sociais e perfis públicos</li>
                    <li>Materiais promocionais, apresentações e documentos</li>
                    <li>Comunicações por e-mail, newsletters e notificações</li>
                    <li>Materiais impressos, banners e sinalizações</li>
                    <li>Vídeos, podcasts e conteúdos audiovisuais</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    O prazo para remoção completa é de 48 (quarenta e oito) horas a partir da comunicação formal de desvinculação. O descumprimento desta obrigação constitui violação grave e pode resultar em medidas legais.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Novo Envio de Projeto</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    O indeferimento ou encerramento da participação no Programa não implica bloqueio definitivo. Projetos podem submeter nova solicitação de participação, desde que:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                    <li>Atendam integralmente aos critérios vigentes no momento da nova submissão</li>
                    <li>Tenham sanado as questões que motivaram o indeferimento ou encerramento anterior</li>
                    <li>Não tenham incorrido em uso indevido da marca após desvinculação</li>
                    <li>Demonstrem mudanças substanciais que justifiquem reavaliação</li>
                    <li>Respeitem eventual período de carência estabelecido</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    A nova submissão será analisada de forma independente, sem prejuízo ou favorecimento em razão de participações anteriores.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Medidas Administrativas</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    O descumprimento das diretrizes estabelecidas neste documento pode resultar em medidas administrativas e institucionais proporcionais à gravidade da violação, incluindo:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                    <li>Advertência formal com prazo para correção</li>
                    <li>Suspensão temporária da participação</li>
                    <li>Revogação imediata da verificação</li>
                    <li>Comunicação interna ao ecossistema de parceiros</li>
                    <li>Notificação extrajudicial para cessação de uso indevido</li>
                    <li>Medidas judiciais para proteção de direitos de propriedade intelectual</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    A aplicação de medidas observará os princípios de proporcionalidade e razoabilidade, considerando a natureza, gravidade e reincidência das violações.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Disposições Finais</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A Cheetah Solutions Network reserva-se o direito de modificar, atualizar ou substituir estas diretrizes a qualquer momento, sem aviso prévio. As alterações entram em vigor imediatamente após sua publicação.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    A continuidade da participação no Programa após a publicação de alterações implica aceitação integral dos novos termos. Projetos que discordem das modificações devem solicitar desvinculação formal.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Estas diretrizes são complementadas pelas demais políticas institucionais da Cheetah Solutions Network, incluindo, mas não se limitando a:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                    <li>Política de Privacidade</li>
                    <li>Termos de Uso</li>
                    <li>Política de Segurança</li>
                    <li>Política de Propriedade Intelectual</li>
                    <li>Termos do Programa de Verificação</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Em caso de conflito entre documentos, prevalecerá a interpretação que melhor proteja os interesses institucionais e a integridade do ecossistema.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    A submissão ao Programa implica aceitação integral, irrestrita e incondicional de todas as disposições deste documento, em sua versão vigente no momento da avaliação.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">Contato Institucional</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Para questões relacionadas ao Programa Cheetah Developers Brasil, entre em contato através do e-mail institucional: <strong className="text-primary">contatocheetahsolutions@gmail.com</strong>
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Solicitações de participação, dúvidas sobre critérios e outras questões serão respondidas exclusivamente por canais oficiais.
                  </p>
                </section>
              </div>
            </article>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="mt-16 p-8 bg-card border border-border rounded-xl text-center">
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
