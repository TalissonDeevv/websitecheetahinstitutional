import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { 
  Shield, Lock, Cookie, FileCheck, Database, Headphones, 
  RefreshCw, Eye, Copyright, Scale, FileWarning, XCircle, 
  CreditCard, AlertTriangle, ChevronLeft, Menu, X, BadgeCheck, Code2
} from "lucide-react";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

// Configuração das diretrizes
const guidelines = [
  { id: "privacidade", name: "Privacidade", icon: Lock },
  { id: "cookies", name: "Cookies", icon: Cookie },
  { id: "seguranca", name: "Segurança", icon: Shield },
  { id: "uso-aceitavel", name: "Uso Aceitável", icon: FileCheck },
  { id: "backup", name: "Backup", icon: Database },
  { id: "atendimento", name: "Atendimento", icon: Headphones },
  { id: "atualizacao", name: "Atualização", icon: RefreshCw },
  { id: "transparencia", name: "Transparência", icon: Eye },
  { id: "propriedade-intelectual", name: "Propriedade Intelectual", icon: Copyright },
  { id: "responsabilidade", name: "Responsabilidade", icon: Scale },
  { id: "isencao", name: "Isenção", icon: FileWarning },
  { id: "cancelamento", name: "Cancelamento", icon: XCircle },
  { id: "reembolso", name: "Reembolso", icon: CreditCard },
  { id: "denuncias", name: "Canal de Denúncias", icon: AlertTriangle },
  { id: "termos-verificacao", name: "Termos de Verificação", icon: BadgeCheck },
  { id: "programa-developers", name: "Programa Cheetah Developers Brasil", icon: Code2 },
];

// Conteúdo completo de cada diretriz
const guidelineContent: Record<string, React.ReactNode> = {
  "privacidade": <PrivacidadeContent />,
  "cookies": <CookiesContent />,
  "seguranca": <SegurancaContent />,
  "uso-aceitavel": <UsoAceitavelContent />,
  "backup": <BackupContent />,
  "atendimento": <AtendimentoContent />,
  "atualizacao": <AtualizacaoContent />,
  "transparencia": <TransparenciaContent />,
  "propriedade-intelectual": <PropriedadeIntelectualContent />,
  "responsabilidade": <ResponsabilidadeContent />,
  "isencao": <IsencaoContent />,
  "cancelamento": <CancelamentoContent />,
  "reembolso": <ReembolsoContent />,
  "denuncias": <DenunciasContent />,
  "termos-verificacao": <TermosVerificacaoContent />,
  "programa-developers": <ProgramaDevelopersContent />,
};

const GuidelinesPage = () => {
  const { policyId } = useParams();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Define diretriz ativa (default: privacidade)
  const activeId = policyId || "privacidade";
  const activeGuideline = guidelines.find(g => g.id === activeId);
  const isValidPolicy = !policyId || guidelines.some(g => g.id === policyId);
  
  // Scroll to top quando muda diretriz - MUST be before any conditional return
  useEffect(() => {
    if (isValidPolicy) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  }, [activeId, isValidPolicy]);

  const handleNavigation = (id: string) => {
    navigate(`/diretrizes/${id}`, { replace: false });
  };

  // Redireciona se não existir - AFTER all hooks
  if (!isValidPolicy) {
    return <Navigate to="/diretrizes/privacidade" replace />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 border-b border-border/30">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Diretrizes Corporativas</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Diretrizes e <span className="text-primary">Governança</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Transparência, ética e conformidade são pilares fundamentais da Cheetah Solutions Network. 
              Aqui você encontra todas as nossas diretrizes institucionais e operacionais.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="flex gap-8 lg:gap-12">
          
          {/* Sidebar Desktop */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-32">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Documentos
              </h3>
              <nav className="space-y-1">
                {guidelines.map((item) => {
                  const isActive = activeId === item.id;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigation(item.id)}
                      className={cn(
                        "w-full flex items-center gap-3 text-sm py-3 px-4 rounded-lg transition-all duration-200 text-left",
                        isActive 
                          ? "bg-primary/10 text-primary font-medium border-l-2 border-primary" 
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      )}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden fixed bottom-6 right-6 z-50">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm pt-24 px-4 overflow-y-auto">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Selecione uma Diretriz
              </h3>
              <nav className="space-y-2 pb-24">
                {guidelines.map((item) => {
                  const isActive = activeId === item.id;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigation(item.id)}
                      className={cn(
                        "w-full flex items-center gap-3 text-base py-4 px-4 rounded-lg transition-all duration-200 text-left",
                        isActive 
                          ? "bg-primary/10 text-primary font-medium border-l-2 border-primary" 
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      )}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          )}

          {/* Content Area */}
          <main className="flex-1 min-w-0">
            <AnimatedSection key={activeId}>
              <article className="prose prose-invert prose-lg max-w-none">
                <header className="not-prose mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    {activeGuideline && <activeGuideline.icon className="w-8 h-8 text-primary" />}
                    <h2 className="text-3xl font-bold">{activeGuideline?.name}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Última atualização: Dezembro de 2024
                  </p>
                </header>
                
                <div className="space-y-8">
                  {guidelineContent[activeId]}
                </div>
              </article>
            </AnimatedSection>
          </main>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

// ============================================
// CONTEÚDOS DAS DIRETRIZES
// ============================================

function PrivacidadeContent() {
  return (
    <>
      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">1. Introdução</h3>
        <p className="text-muted-foreground leading-relaxed">
          A Cheetah Solutions Network ("Empresa", "nós", "nosso") tem o compromisso de proteger a privacidade e os dados pessoais de todos os usuários, clientes, parceiros e visitantes que interagem com nossos serviços, plataformas e canais de comunicação. Esta Diretriz de Privacidade estabelece os princípios, procedimentos e práticas adotadas para garantir o tratamento adequado, seguro e transparente de informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e demais legislações aplicáveis.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Nosso compromisso com a privacidade é parte integrante de nossa cultura organizacional e reflete nossos valores de ética, transparência e respeito aos direitos fundamentais de cada indivíduo. Entendemos que a confiança depositada em nossa empresa é um ativo valioso que deve ser preservado através de práticas rigorosas de proteção de dados.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">2. Objetivo</h3>
        <p className="text-muted-foreground leading-relaxed">
          Esta Diretriz tem como objetivo principal estabelecer diretrizes claras e abrangentes sobre como a Cheetah Solutions Network coleta, utiliza, armazena, compartilha e protege dados pessoais. Buscamos garantir que todas as operações de tratamento de dados sejam realizadas de forma legítima, necessária e proporcional, sempre respeitando os direitos dos titulares e as exigências legais aplicáveis.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Adicionalmente, esta diretriz visa informar de maneira clara e acessível sobre as práticas de privacidade da empresa, permitindo que os titulares de dados tomem decisões informadas sobre o compartilhamento de suas informações pessoais e exerçam seus direitos de forma plena e efetiva.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">3. Escopo de Aplicação</h3>
        <p className="text-muted-foreground leading-relaxed">
          Esta Diretriz aplica-se a todos os dados pessoais coletados e tratados pela Cheetah Solutions Network, independentemente do meio utilizado para coleta (digital, físico, telefônico ou presencial). O escopo abrange:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li>Visitantes de nossos sites, aplicações e plataformas digitais</li>
          <li>Clientes e usuários de nossos produtos e serviços</li>
          <li>Parceiros comerciais, fornecedores e prestadores de serviço</li>
          <li>Candidatos a vagas de emprego e colaboradores</li>
          <li>Qualquer pessoa que interaja com nossos canais de comunicação</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-4">
          A diretriz é aplicável a todas as unidades de negócio, departamentos e colaboradores da empresa, que devem observar e cumprir integralmente suas disposições no exercício de suas atividades.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">4. Dados Coletados</h3>
        <p className="text-muted-foreground leading-relaxed">
          A Cheetah Solutions Network pode coletar diferentes categorias de dados pessoais, dependendo do contexto da interação e dos serviços utilizados:
        </p>
        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">4.1. Dados de Identificação</h4>
        <p className="text-muted-foreground leading-relaxed">
          Nome completo, CPF, RG, data de nascimento, nacionalidade, estado civil, profissão e outros dados necessários para identificação do titular.
        </p>
        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">4.2. Dados de Contato</h4>
        <p className="text-muted-foreground leading-relaxed">
          Endereço residencial ou comercial, número de telefone, endereço de e-mail e demais formas de contato fornecidas pelo titular.
        </p>
        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">4.3. Dados Técnicos e de Navegação</h4>
        <p className="text-muted-foreground leading-relaxed">
          Endereço IP, tipo de navegador, sistema operacional, páginas visitadas, tempo de permanência, cookies e identificadores de dispositivo.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">5. Direitos do Titular</h3>
        <p className="text-muted-foreground leading-relaxed">
          Em conformidade com a LGPD, garantimos aos titulares de dados os seguintes direitos, que podem ser exercidos a qualquer momento mediante solicitação formal:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li>Confirmação da existência de tratamento de dados</li>
          <li>Acesso aos dados pessoais tratados</li>
          <li>Correção de dados incompletos, inexatos ou desatualizados</li>
          <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
          <li>Portabilidade dos dados a outro fornecedor de serviço</li>
          <li>Revogação do consentimento</li>
          <li>Informação sobre compartilhamento com terceiros</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">6. Contato</h3>
        <p className="text-muted-foreground leading-relaxed">
          Para exercer seus direitos ou esclarecer dúvidas sobre esta Diretriz de Privacidade, entre em contato através do e-mail: <strong className="text-primary">contatocheetahsolutions@gmail.com</strong>
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Nosso Encarregado de Proteção de Dados (DPO) está à disposição para atender todas as solicitações relacionadas à privacidade e proteção de dados pessoais.
        </p>
      </section>
    </>
  );
}

function CookiesContent() {
  return (
    <>
      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">1. Introdução</h3>
        <p className="text-muted-foreground leading-relaxed">
          Esta Diretriz de Cookies descreve como a Cheetah Solutions Network utiliza cookies e tecnologias semelhantes em suas plataformas digitais. Nosso compromisso é garantir transparência sobre o uso dessas tecnologias e oferecer controle aos usuários sobre suas preferências de rastreamento.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Cookies são pequenos arquivos de texto armazenados no dispositivo do usuário quando este acessa nossos sites e aplicações. Essas tecnologias são essenciais para o funcionamento adequado de muitas funcionalidades e para proporcionar uma experiência de navegação otimizada e personalizada.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">2. Objetivo</h3>
        <p className="text-muted-foreground leading-relaxed">
          O objetivo desta Diretriz é informar de forma clara e acessível sobre as categorias de cookies utilizados, suas finalidades específicas, e os mecanismos disponíveis para gerenciamento de preferências. Buscamos equilibrar as necessidades operacionais da plataforma com o respeito à privacidade e autonomia dos usuários.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">3. Tipos de Cookies Utilizados</h3>
        
        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">3.1. Cookies Essenciais</h4>
        <p className="text-muted-foreground leading-relaxed">
          São cookies estritamente necessários para o funcionamento básico do site. Sem eles, funcionalidades como navegação entre páginas, acesso a áreas seguras e processamento de formulários não funcionariam corretamente. Estes cookies não podem ser desabilitados.
        </p>

        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">3.2. Cookies de Desempenho</h4>
        <p className="text-muted-foreground leading-relaxed">
          Coletam informações sobre como os visitantes utilizam o site, como páginas mais visitadas, tempo de permanência e mensagens de erro. Esses dados são utilizados exclusivamente para melhorar o funcionamento do site e são coletados de forma agregada e anônima.
        </p>

        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">3.3. Cookies de Funcionalidade</h4>
        <p className="text-muted-foreground leading-relaxed">
          Permitem que o site lembre escolhas feitas pelo usuário, como idioma preferido, região ou personalizações de interface, proporcionando uma experiência mais personalizada e conveniente.
        </p>

        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">3.4. Cookies de Marketing</h4>
        <p className="text-muted-foreground leading-relaxed">
          São utilizados para rastrear visitantes em diferentes sites e exibir anúncios relevantes. Esses cookies são geralmente definidos por parceiros de publicidade e podem ser desabilitados nas configurações de preferências.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">4. Gerenciamento de Cookies</h3>
        <p className="text-muted-foreground leading-relaxed">
          Você pode gerenciar suas preferências de cookies diretamente nas configurações do seu navegador. A maioria dos navegadores permite bloquear ou excluir cookies, embora isso possa afetar a funcionalidade de alguns recursos do site.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Para mais informações sobre como gerenciar cookies em seu navegador específico, consulte a documentação oficial do navegador ou entre em contato conosco através do e-mail: <strong className="text-primary">contatocheetahsolutions@gmail.com</strong>
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">5. Atualizações</h3>
        <p className="text-muted-foreground leading-relaxed">
          Esta Diretriz pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou em requisitos legais. Recomendamos que os usuários revisem esta página regularmente para se manterem informados sobre o uso de cookies em nossas plataformas.
        </p>
      </section>
    </>
  );
}

function SegurancaContent() {
  return (
    <>
      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">1. Introdução</h3>
        <p className="text-muted-foreground leading-relaxed">
          A Cheetah Solutions Network reconhece a segurança da informação como um pilar estratégico fundamental para a continuidade dos negócios e a proteção dos ativos digitais de nossos clientes e da própria organização. Esta Diretriz de Segurança estabelece os princípios, diretrizes e práticas que norteiam nossa abordagem de segurança cibernética e proteção de dados.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Em um cenário de ameaças digitais em constante evolução, mantemos um compromisso inabalável com a implementação de controles de segurança robustos, atualizados e alinhados com as melhores práticas internacionais e frameworks reconhecidos, como ISO 27001, NIST Cybersecurity Framework e CIS Controls.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">2. Objetivo</h3>
        <p className="text-muted-foreground leading-relaxed">
          Esta Diretriz tem como objetivo estabelecer diretrizes claras para a proteção da confidencialidade, integridade e disponibilidade das informações processadas, armazenadas e transmitidas pela Cheetah Solutions Network. Buscamos garantir que todos os sistemas, processos e pessoas envolvidos em nossas operações estejam adequadamente protegidos contra ameaças internas e externas.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">3. Escopo de Aplicação</h3>
        <p className="text-muted-foreground leading-relaxed">
          Esta Diretriz aplica-se a todos os sistemas de informação, infraestrutura tecnológica, dados e processos da Cheetah Solutions Network, bem como a todos os colaboradores, prestadores de serviço, parceiros e terceiros que tenham acesso aos recursos de tecnologia da informação da empresa.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">4. Medidas de Segurança Implementadas</h3>
        
        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">4.1. Segurança de Infraestrutura</h4>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Firewalls de última geração com inspeção profunda de pacotes</li>
          <li>Sistemas de detecção e prevenção de intrusões (IDS/IPS)</li>
          <li>Segmentação de rede e micro-segmentação</li>
          <li>Monitoramento contínuo 24/7 de eventos de segurança</li>
          <li>Redundância geográfica de data centers</li>
        </ul>

        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">4.2. Segurança de Dados</h4>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Criptografia de dados em repouso e em trânsito (AES-256, TLS 1.3)</li>
          <li>Gestão centralizada de chaves criptográficas</li>
          <li>Controle de acesso baseado em função (RBAC)</li>
          <li>Autenticação multifator (MFA) obrigatória</li>
          <li>Logs de auditoria imutáveis</li>
        </ul>

        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">4.3. Segurança de Aplicações</h4>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Análise estática e dinâmica de código (SAST/DAST)</li>
          <li>Testes de penetração regulares</li>
          <li>Programa de bug bounty</li>
          <li>Validação de entrada e sanitização de dados</li>
          <li>Proteção contra OWASP Top 10</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">5. Gestão de Incidentes</h3>
        <p className="text-muted-foreground leading-relaxed">
          Mantemos um processo estruturado de resposta a incidentes de segurança, que inclui detecção, contenção, erradicação, recuperação e análise pós-incidente. Todos os incidentes são documentados e analisados para melhoria contínua de nossos controles de segurança.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Para reportar vulnerabilidades ou incidentes de segurança, entre em contato: <strong className="text-primary">contatocheetahsolutions@gmail.com</strong>
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">6. Conformidade e Auditorias</h3>
        <p className="text-muted-foreground leading-relaxed">
          A Cheetah Solutions Network realiza auditorias internas e externas regulares para verificar a conformidade com esta Diretriz e com os requisitos legais e regulatórios aplicáveis. Os resultados das auditorias são utilizados para identificar oportunidades de melhoria e atualizar nossos controles de segurança.
        </p>
      </section>
    </>
  );
}

function UsoAceitavelContent() {
  return (
    <>
      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">1. Introdução</h3>
        <p className="text-muted-foreground leading-relaxed">
          Esta Diretriz de Uso Aceitável estabelece as regras e diretrizes para a utilização adequada dos serviços, plataformas e recursos tecnológicos oferecidos pela Cheetah Solutions Network. O objetivo é garantir um ambiente digital seguro, ético e produtivo para todos os usuários, preservando a integridade dos sistemas e a qualidade dos serviços prestados.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Ao utilizar nossos serviços, o usuário declara ter lido, compreendido e concordado com todas as disposições desta Diretriz. O descumprimento das regras aqui estabelecidas pode resultar em suspensão ou cancelamento do acesso aos serviços.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">2. Objetivo</h3>
        <p className="text-muted-foreground leading-relaxed">
          Esta Diretriz tem como objetivo definir claramente os comportamentos permitidos e proibidos na utilização de nossos serviços, estabelecendo limites e responsabilidades que devem ser observados por todos os usuários. Buscamos promover o uso responsável e ético da tecnologia, prevenindo abusos que possam prejudicar outros usuários ou a própria infraestrutura da empresa.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">3. Condutas Proibidas</h3>
        <p className="text-muted-foreground leading-relaxed">
          É expressamente proibido aos usuários de nossos serviços:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li>Utilizar os serviços para fins ilegais ou não autorizados</li>
          <li>Transmitir vírus, malware ou código malicioso</li>
          <li>Tentar obter acesso não autorizado a sistemas ou dados</li>
          <li>Realizar ataques de negação de serviço (DoS/DDoS)</li>
          <li>Enviar spam ou comunicações não solicitadas em massa</li>
          <li>Violar direitos de propriedade intelectual de terceiros</li>
          <li>Publicar conteúdo ilegal, difamatório ou ofensivo</li>
          <li>Compartilhar credenciais de acesso com terceiros</li>
          <li>Realizar engenharia reversa dos sistemas</li>
          <li>Utilizar bots ou automações não autorizadas</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">4. Responsabilidades do Usuário</h3>
        <p className="text-muted-foreground leading-relaxed">
          O usuário é responsável por:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li>Manter a confidencialidade de suas credenciais de acesso</li>
          <li>Notificar imediatamente sobre qualquer uso não autorizado</li>
          <li>Cumprir todas as leis e regulamentos aplicáveis</li>
          <li>Manter backups próprios de dados críticos</li>
          <li>Utilizar os recursos de forma razoável e não abusiva</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">5. Monitoramento</h3>
        <p className="text-muted-foreground leading-relaxed">
          A Cheetah Solutions Network reserva-se o direito de monitorar a utilização de seus serviços para garantir o cumprimento desta Diretriz, proteger a infraestrutura e os demais usuários, e cumprir obrigações legais. O monitoramento é realizado de forma proporcional e em conformidade com a legislação de proteção de dados.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">6. Consequências de Violações</h3>
        <p className="text-muted-foreground leading-relaxed">
          Violações desta Diretriz podem resultar em advertência, suspensão temporária ou permanente do acesso, rescisão contratual, e responsabilização civil e criminal conforme aplicável. A gravidade da penalidade será proporcional à natureza e impacto da violação.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Dúvidas ou denúncias sobre uso inadequado devem ser direcionadas para: <strong className="text-primary">contatocheetahsolutions@gmail.com</strong>
        </p>
      </section>
    </>
  );
}

function BackupContent() {
  return (
    <>
      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">1. Introdução</h3>
        <p className="text-muted-foreground leading-relaxed">
          A Cheetah Solutions Network reconhece a importância crítica da preservação e recuperação de dados para a continuidade dos negócios e a proteção dos ativos digitais de nossos clientes. Esta Diretriz de Backup estabelece os princípios, procedimentos e responsabilidades relacionados à criação, armazenamento e restauração de cópias de segurança de dados e sistemas.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Nossa estratégia de backup é projetada para minimizar o risco de perda de dados, garantir tempos de recuperação adequados às necessidades do negócio e manter a integridade das informações em todos os cenários de falha ou desastre.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">2. Objetivo</h3>
        <p className="text-muted-foreground leading-relaxed">
          Esta Diretriz tem como objetivo definir os requisitos mínimos para backup e recuperação de dados, estabelecendo procedimentos padronizados que garantam a disponibilidade e integridade das informações críticas. Buscamos assegurar que todos os sistemas e dados essenciais estejam adequadamente protegidos contra perdas acidentais, falhas técnicas, ataques cibernéticos ou desastres naturais.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">3. Tipos de Backup</h3>
        
        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">3.1. Backup Completo (Full)</h4>
        <p className="text-muted-foreground leading-relaxed">
          Cópia integral de todos os dados e sistemas, realizada semanalmente. Fornece o ponto de restauração mais confiável, embora demande mais tempo e espaço de armazenamento.
        </p>

        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">3.2. Backup Incremental</h4>
        <p className="text-muted-foreground leading-relaxed">
          Cópia apenas dos dados modificados desde o último backup (completo ou incremental), realizada diariamente. Otimiza tempo e espaço, mas requer todos os incrementais anteriores para restauração completa.
        </p>

        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">3.3. Backup Diferencial</h4>
        <p className="text-muted-foreground leading-relaxed">
          Cópia dos dados modificados desde o último backup completo, utilizado em cenários específicos. Oferece equilíbrio entre velocidade de backup e simplicidade de restauração.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">4. Política de Retenção</h3>
        <p className="text-muted-foreground leading-relaxed">
          Os backups são retidos conforme a seguinte política:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li>Backups diários: retidos por 30 dias</li>
          <li>Backups semanais: retidos por 3 meses</li>
          <li>Backups mensais: retidos por 1 ano</li>
          <li>Backups anuais: retidos por 5 anos ou conforme exigência legal</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">5. Armazenamento e Segurança</h3>
        <p className="text-muted-foreground leading-relaxed">
          Todos os backups são armazenados com criptografia AES-256 em múltiplas localidades geográficas, garantindo redundância e proteção contra desastres localizados. O acesso aos backups é restrito a pessoal autorizado e todas as operações são registradas em logs de auditoria.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">6. Responsabilidades do Cliente</h3>
        <p className="text-muted-foreground leading-relaxed">
          Embora a Cheetah Solutions Network mantenha backups regulares dos sistemas gerenciados, recomendamos fortemente que os clientes mantenham cópias independentes de seus dados críticos. A responsabilidade final pela preservação de dados de negócio é compartilhada entre as partes conforme definido em contrato.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Para solicitar restauração de backup ou esclarecer dúvidas, entre em contato: <strong className="text-primary">contatocheetahsolutions@gmail.com</strong>
        </p>
      </section>
    </>
  );
}

function AtendimentoContent() {
  return (
    <>
      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">1. Introdução</h3>
        <p className="text-muted-foreground leading-relaxed">
          A Cheetah Solutions Network está comprometida em fornecer um atendimento de excelência a todos os seus clientes, parceiros e usuários. Esta Diretriz de Atendimento estabelece os padrões, procedimentos e compromissos que norteiam nossa relação de suporte e atendimento, garantindo respostas ágeis, precisas e soluções efetivas para todas as demandas.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Nosso time de atendimento é formado por profissionais qualificados, treinados continuamente nas melhores práticas de suporte técnico e atendimento ao cliente, sempre focados em proporcionar a melhor experiência possível.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">2. Canais de Atendimento</h3>
        <p className="text-muted-foreground leading-relaxed">
          Disponibilizamos múltiplos canais de atendimento para melhor atender às necessidades de nossos clientes:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-3 text-muted-foreground">
          <li><strong>E-mail:</strong> contatocheetahsolutions@gmail.com - Atendimento em até 24 horas úteis</li>
          <li><strong>WhatsApp:</strong> (81) 99396-4261 - Segunda a sexta, das 9h às 18h</li>
          <li><strong>Portal do Cliente:</strong> Chamados técnicos e acompanhamento de solicitações</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">3. Níveis de Suporte</h3>
        
        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">3.1. Suporte Nível 1 - Atendimento Inicial</h4>
        <p className="text-muted-foreground leading-relaxed">
          Primeiro contato com o cliente, triagem de demandas, resolução de questões básicas, orientações de uso e encaminhamento para níveis especializados quando necessário.
        </p>

        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">3.2. Suporte Nível 2 - Suporte Técnico</h4>
        <p className="text-muted-foreground leading-relaxed">
          Análise e resolução de problemas técnicos de média complexidade, configurações avançadas, diagnóstico de falhas e implementação de soluções técnicas.
        </p>

        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">3.3. Suporte Nível 3 - Especializado</h4>
        <p className="text-muted-foreground leading-relaxed">
          Tratamento de incidentes críticos, problemas complexos que requerem conhecimento especializado, desenvolvimento de correções e melhorias de sistema.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">4. SLA - Acordos de Nível de Serviço</h3>
        <p className="text-muted-foreground leading-relaxed">
          Os tempos de resposta e resolução variam conforme a criticidade do chamado e o plano contratado:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li><strong>Crítico:</strong> Primeira resposta em até 1 hora, resolução em até 4 horas</li>
          <li><strong>Alto:</strong> Primeira resposta em até 4 horas, resolução em até 24 horas</li>
          <li><strong>Médio:</strong> Primeira resposta em até 8 horas, resolução em até 48 horas</li>
          <li><strong>Baixo:</strong> Primeira resposta em até 24 horas, resolução em até 5 dias úteis</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">5. Responsabilidades das Partes</h3>
        <p className="text-muted-foreground leading-relaxed">
          Para garantir um atendimento eficiente, é fundamental a colaboração mútua. O cliente deve fornecer informações precisas sobre o problema, acesso quando necessário e responder às solicitações do suporte em tempo hábil. A Cheetah Solutions Network se compromete a manter comunicação clara, cumprir os prazos acordados e buscar a melhor solução para cada caso.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">6. Escalação e Reclamações</h3>
        <p className="text-muted-foreground leading-relaxed">
          Caso o atendimento não atenda às expectativas ou os prazos não sejam cumpridos, o cliente pode solicitar escalação do caso para a gestão de atendimento. Reclamações formais devem ser direcionadas para: <strong className="text-primary">contatocheetahsolutions@gmail.com</strong>
        </p>
      </section>
    </>
  );
}

function AtualizacaoContent() {
  return (
    <>
      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">1. Introdução</h3>
        <p className="text-muted-foreground leading-relaxed">
          A Cheetah Solutions Network mantém um compromisso contínuo com a melhoria e evolução de seus sistemas, plataformas e serviços. Esta Diretriz de Atualização estabelece os procedimentos, políticas e comunicações relacionadas às atualizações de software, correções de segurança e implementação de novas funcionalidades.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Entendemos que atualizações são essenciais para manter a segurança, estabilidade e competitividade de nossos serviços, e trabalhamos para que todas as mudanças sejam implementadas com o mínimo impacto possível nas operações de nossos clientes.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">2. Tipos de Atualização</h3>
        
        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">2.1. Atualizações de Segurança</h4>
        <p className="text-muted-foreground leading-relaxed">
          Correções críticas de vulnerabilidades de segurança. Estas atualizações são aplicadas com prioridade máxima e podem ser implementadas sem aviso prévio em casos de risco iminente, seguindo os protocolos de gestão de incidentes.
        </p>

        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">2.2. Atualizações de Manutenção</h4>
        <p className="text-muted-foreground leading-relaxed">
          Correções de bugs, melhorias de performance e ajustes técnicos que não alteram funcionalidades. Geralmente aplicadas em janelas de manutenção programadas.
        </p>

        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">2.3. Atualizações de Funcionalidade</h4>
        <p className="text-muted-foreground leading-relaxed">
          Implementação de novos recursos, melhorias de interface ou expansão de capacidades. Comunicadas com antecedência e acompanhadas de documentação atualizada.
        </p>

        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">2.4. Atualizações Maiores (Major Releases)</h4>
        <p className="text-muted-foreground leading-relaxed">
          Mudanças significativas que podem afetar compatibilidade ou exigir adaptações. Comunicadas com antecedência mínima de 30 dias e acompanhadas de guias de migração quando necessário.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">3. Janelas de Manutenção</h3>
        <p className="text-muted-foreground leading-relaxed">
          As manutenções programadas são realizadas preferencialmente em horários de menor utilização, tipicamente entre 02h00 e 06h00 (horário de Brasília), em dias úteis ou finais de semana, conforme a natureza e impacto esperado da atualização.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Manutenções emergenciais podem ocorrer a qualquer momento em casos de vulnerabilidades críticas de segurança ou falhas que afetem a disponibilidade do serviço.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">4. Comunicação de Atualizações</h3>
        <p className="text-muted-foreground leading-relaxed">
          Os clientes são notificados sobre atualizações relevantes através de:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li>E-mail para contatos administrativos e técnicos cadastrados</li>
          <li>Notificações no portal do cliente</li>
          <li>Changelog público no site institucional</li>
          <li>Status page para manutenções programadas e emergenciais</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">5. Suporte a Versões Anteriores</h3>
        <p className="text-muted-foreground leading-relaxed">
          A Cheetah Solutions Network mantém suporte para versões anteriores de seus sistemas conforme política específica de cada produto, geralmente por um período de 12 a 24 meses após o lançamento de uma nova versão major. Versões em fim de vida (EOL) não recebem correções de segurança e sua utilização é desencorajada.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">6. Contato</h3>
        <p className="text-muted-foreground leading-relaxed">
          Para dúvidas sobre atualizações ou solicitações especiais de migração, entre em contato: <strong className="text-primary">contatocheetahsolutions@gmail.com</strong>
        </p>
      </section>
    </>
  );
}

function TransparenciaContent() {
  return (
    <>
      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">1. Introdução</h3>
        <p className="text-muted-foreground leading-relaxed">
          A transparência é um valor fundamental da Cheetah Solutions Network. Esta Diretriz de Transparência estabelece nosso compromisso com a comunicação aberta, honesta e acessível com todos os stakeholders, incluindo clientes, parceiros, colaboradores e a sociedade em geral.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Acreditamos que a confiança é construída através de ações transparentes e comunicação clara. Por isso, mantemos o compromisso de informar proativamente sobre nossas práticas, decisões e operações, respeitando as limitações legais e de confidencialidade aplicáveis.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">2. Objetivo</h3>
        <p className="text-muted-foreground leading-relaxed">
          Esta Diretriz tem como objetivo definir os princípios e práticas que orientam a transparência organizacional da Cheetah Solutions Network, estabelecendo compromissos claros sobre o que comunicamos, como comunicamos e quais informações são disponibilizadas publicamente.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">3. Princípios de Transparência</h3>
        <ul className="list-disc pl-6 mt-4 space-y-3 text-muted-foreground">
          <li><strong>Clareza:</strong> Comunicações em linguagem acessível e compreensível</li>
          <li><strong>Proatividade:</strong> Informar antes de ser questionado</li>
          <li><strong>Acessibilidade:</strong> Informações facilmente localizáveis</li>
          <li><strong>Veracidade:</strong> Compromisso absoluto com a verdade</li>
          <li><strong>Tempestividade:</strong> Comunicação no momento oportuno</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">4. Informações Divulgadas</h3>
        <p className="text-muted-foreground leading-relaxed">
          A Cheetah Solutions Network disponibiliza publicamente:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li>Termos e condições de uso de todos os serviços</li>
          <li>Diretrizes de privacidade e proteção de dados</li>
          <li>Procedimentos de segurança (na medida adequada)</li>
          <li>Política de preços e condições comerciais</li>
          <li>Status de disponibilidade dos serviços</li>
          <li>Comunicados sobre incidentes e correções</li>
          <li>Roadmap de desenvolvimento (quando aplicável)</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">5. Limitações</h3>
        <p className="text-muted-foreground leading-relaxed">
          Algumas informações não podem ser divulgadas por razões de:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li>Segurança da informação e proteção contra ameaças</li>
          <li>Confidencialidade comercial e segredos de negócio</li>
          <li>Proteção de dados pessoais de terceiros</li>
          <li>Obrigações contratuais de sigilo</li>
          <li>Requisitos legais e regulatórios</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">6. Canais de Transparência</h3>
        <p className="text-muted-foreground leading-relaxed">
          Mantemos diversos canais para garantir o acesso às informações: site institucional, portal do cliente, comunicados por e-mail, e atendimento direto. Para solicitações específicas de informação, entre em contato: <strong className="text-primary">contatocheetahsolutions@gmail.com</strong>
        </p>
      </section>
    </>
  );
}

function PropriedadeIntelectualContent() {
  return (
    <>
      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">1. Introdução</h3>
        <p className="text-muted-foreground leading-relaxed">
          Esta Diretriz de Propriedade Intelectual estabelece os direitos e obrigações relacionados aos ativos intelectuais desenvolvidos, utilizados ou licenciados pela Cheetah Solutions Network e seus clientes. A proteção da propriedade intelectual é fundamental para a inovação e o desenvolvimento sustentável do setor de tecnologia.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Respeitamos integralmente os direitos de propriedade intelectual de terceiros e esperamos o mesmo tratamento recíproco de nossos clientes, parceiros e usuários em relação aos nossos ativos intelectuais.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">2. Objetivo</h3>
        <p className="text-muted-foreground leading-relaxed">
          Esta Diretriz tem como objetivo definir claramente a titularidade, licenciamento e proteção de direitos de propriedade intelectual envolvidos na prestação de serviços pela Cheetah Solutions Network, estabelecendo regras claras para evitar conflitos e garantir a segurança jurídica das partes envolvidas.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">3. Propriedade de Desenvolvimentos</h3>
        
        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">3.1. Código e Sistemas Desenvolvidos sob Encomenda</h4>
        <p className="text-muted-foreground leading-relaxed">
          Salvo disposição contratual em contrário, os códigos-fonte, sistemas e soluções desenvolvidos especificamente para um cliente sob contrato de prestação de serviços são de propriedade do cliente após quitação integral do projeto.
        </p>

        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">3.2. Propriedade Intelectual Pré-existente</h4>
        <p className="text-muted-foreground leading-relaxed">
          Frameworks, bibliotecas, componentes e metodologias desenvolvidos pela Cheetah Solutions Network anteriormente ou independentemente de projetos específicos permanecem de propriedade exclusiva da empresa, sendo licenciados para uso no projeto do cliente.
        </p>

        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">3.3. Melhorias e Derivações</h4>
        <p className="text-muted-foreground leading-relaxed">
          Melhorias em componentes pré-existentes da Cheetah Solutions Network realizadas durante a execução de um projeto são de propriedade da empresa, podendo ser utilizadas em outros projetos.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">4. Licenciamento de Software</h3>
        <p className="text-muted-foreground leading-relaxed">
          O uso de software e serviços da Cheetah Solutions Network é concedido mediante licença não-exclusiva, intransferível e revogável, nos termos definidos em cada contrato específico. A licença não implica transferência de propriedade e está condicionada ao cumprimento dos termos contratuais e desta Diretriz.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">5. Proteção de Marca</h3>
        <p className="text-muted-foreground leading-relaxed">
          As marcas, logotipos, nomes comerciais e elementos de identidade visual da Cheetah Solutions Network são protegidos por lei e não podem ser utilizados sem autorização prévia e expressa. O uso autorizado deve seguir as diretrizes de marca fornecidas pela empresa.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">6. Violações</h3>
        <p className="text-muted-foreground leading-relaxed">
          Violações de direitos de propriedade intelectual serão tratadas com rigor, podendo resultar em ações judiciais, rescisão contratual e responsabilização por danos. Para reportar violações ou solicitar autorizações, entre em contato: <strong className="text-primary">contatocheetahsolutions@gmail.com</strong>
        </p>
      </section>
    </>
  );
}

function ResponsabilidadeContent() {
  return (
    <>
      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">1. Introdução</h3>
        <p className="text-muted-foreground leading-relaxed">
          Esta Diretriz de Responsabilidade estabelece os limites e condições da responsabilidade civil da Cheetah Solutions Network perante seus clientes, usuários e terceiros. Nosso objetivo é definir claramente as obrigações assumidas pela empresa e as situações em que a responsabilidade pode ser limitada ou excluída, em conformidade com a legislação brasileira aplicável.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          A Cheetah Solutions Network assume responsabilidade por seus atos e pelos serviços prestados, dentro dos limites legais e contratuais estabelecidos, sempre buscando a excelência operacional e a satisfação de seus clientes.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">2. Objetivo</h3>
        <p className="text-muted-foreground leading-relaxed">
          Esta Diretriz tem como objetivo estabelecer um framework claro de responsabilidades, definindo as obrigações da Cheetah Solutions Network, os limites de responsabilidade aplicáveis e as situações de exclusão de responsabilidade, garantindo transparência e previsibilidade nas relações comerciais.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">3. Compromissos da Empresa</h3>
        <p className="text-muted-foreground leading-relaxed">
          A Cheetah Solutions Network se compromete a:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li>Prestar serviços com diligência, competência e profissionalismo</li>
          <li>Manter a infraestrutura adequada para os serviços contratados</li>
          <li>Implementar medidas de segurança apropriadas</li>
          <li>Comunicar proativamente sobre incidentes e manutenções</li>
          <li>Cumprir os SLAs estabelecidos em contrato</li>
          <li>Manter confidencialidade das informações dos clientes</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">4. Limitações de Responsabilidade</h3>
        <p className="text-muted-foreground leading-relaxed">
          Ressalvadas as hipóteses de dolo ou culpa grave, a responsabilidade da Cheetah Solutions Network está limitada a:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li>Danos diretos comprovadamente causados por ação ou omissão da empresa</li>
          <li>Valor máximo equivalente aos valores pagos pelo cliente nos 12 meses anteriores ao evento</li>
          <li>Exclusão de responsabilidade por lucros cessantes, danos indiretos ou consequenciais</li>
          <li>Exclusão de responsabilidade por eventos de força maior ou caso fortuito</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">5. Responsabilidades do Cliente</h3>
        <p className="text-muted-foreground leading-relaxed">
          O cliente é responsável por:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li>Utilizar os serviços conforme os termos contratados e a Diretriz de Uso Aceitável</li>
          <li>Manter a segurança de suas credenciais de acesso</li>
          <li>Manter backups independentes de dados críticos</li>
          <li>Informar tempestivamente sobre problemas identificados</li>
          <li>Cumprir obrigações legais relacionadas ao uso dos serviços</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">6. Contato</h3>
        <p className="text-muted-foreground leading-relaxed">
          Para questões relacionadas a responsabilidade ou reclamações formais, entre em contato: <strong className="text-primary">contatocheetahsolutions@gmail.com</strong>
        </p>
      </section>
    </>
  );
}

function IsencaoContent() {
  return (
    <>
      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">1. Introdução</h3>
        <p className="text-muted-foreground leading-relaxed">
          Esta Diretriz de Isenção (Disclaimer) estabelece as condições, limitações e ressalvas aplicáveis aos serviços, informações e conteúdos fornecidos pela Cheetah Solutions Network. O objetivo é garantir clareza sobre as expectativas razoáveis que clientes e usuários devem ter ao utilizar nossos serviços e plataformas.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          A Cheetah Solutions Network se esforça para fornecer serviços de alta qualidade e informações precisas, porém existem limitações inerentes que devem ser compreendidas por todos os usuários.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">2. Objetivo</h3>
        <p className="text-muted-foreground leading-relaxed">
          Esta Diretriz tem como objetivo estabelecer de forma transparente as limitações e ressalvas aplicáveis aos serviços da Cheetah Solutions Network, prevenindo mal-entendidos e definindo expectativas realistas sobre o que nossos serviços podem e não podem entregar.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">3. Isenções Gerais</h3>
        
        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">3.1. Disponibilidade de Serviços</h4>
        <p className="text-muted-foreground leading-relaxed">
          Embora nos esforcemos para manter alta disponibilidade, não garantimos operação ininterrupta. Serviços podem sofrer interrupções por manutenções programadas, atualizações de segurança, problemas técnicos ou eventos fora de nosso controle.
        </p>

        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">3.2. Conteúdo Informativo</h4>
        <p className="text-muted-foreground leading-relaxed">
          Informações disponibilizadas em nossos sites, blogs e materiais são de caráter informativo e educacional. Não constituem aconselhamento profissional jurídico, financeiro, técnico ou de qualquer outra natureza especializada.
        </p>

        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">3.3. Resultados e Performance</h4>
        <p className="text-muted-foreground leading-relaxed">
          Resultados obtidos com o uso de nossos serviços podem variar conforme diversos fatores, incluindo configuração, uso adequado, condições de rede e integração com sistemas de terceiros. Não garantimos resultados específicos.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">4. Links e Serviços de Terceiros</h3>
        <p className="text-muted-foreground leading-relaxed">
          Nossos serviços podem conter links ou integrações com serviços de terceiros. A Cheetah Solutions Network não se responsabiliza por conteúdo, políticas de privacidade, práticas de segurança ou disponibilidade de serviços de terceiros. A utilização desses serviços é por conta e risco do usuário.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">5. Decisões de Negócio</h3>
        <p className="text-muted-foreground leading-relaxed">
          Decisões de negócio tomadas com base em informações, relatórios ou análises gerados por nossos sistemas são de responsabilidade exclusiva do usuário. Recomendamos sempre validar informações críticas através de múltiplas fontes e consultar profissionais especializados quando necessário.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">6. Contato</h3>
        <p className="text-muted-foreground leading-relaxed">
          Para esclarecimentos sobre esta Diretriz de Isenção, entre em contato: <strong className="text-primary">contatocheetahsolutions@gmail.com</strong>
        </p>
      </section>
    </>
  );
}

function CancelamentoContent() {
  return (
    <>
      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">1. Introdução</h3>
        <p className="text-muted-foreground leading-relaxed">
          Esta Diretriz de Cancelamento estabelece as condições, procedimentos e consequências relacionados ao encerramento de contratos e serviços prestados pela Cheetah Solutions Network. Nosso objetivo é garantir um processo de cancelamento transparente, justo e que preserve os direitos de todas as partes envolvidas.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Entendemos que circunstâncias podem mudar e respeitamos o direito dos clientes de encerrar a relação comercial. Da mesma forma, a empresa reserva-se o direito de rescindir contratos em situações específicas previstas nesta Diretriz.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">2. Objetivo</h3>
        <p className="text-muted-foreground leading-relaxed">
          Esta Diretriz tem como objetivo definir claramente as condições para cancelamento de serviços, os prazos aplicáveis, as obrigações de cada parte durante o processo de encerramento e as consequências do cancelamento, incluindo questões de reembolso e recuperação de dados.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">3. Direito de Arrependimento</h3>
        <p className="text-muted-foreground leading-relaxed">
          Conforme previsto no Código de Defesa do Consumidor (Art. 49), o cliente pessoa física que contratar serviços fora do estabelecimento comercial tem o direito de desistir do contrato no prazo de 7 (sete) dias corridos a contar da data de contratação, com direito a reembolso integral dos valores pagos.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">4. Procedimentos de Cancelamento</h3>
        
        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">4.1. Solicitação</h4>
        <p className="text-muted-foreground leading-relaxed">
          O cancelamento deve ser solicitado formalmente por e-mail para: <strong className="text-primary">contatocheetahsolutions@gmail.com</strong>, ou através do portal do cliente, pelo titular da conta ou representante legal autorizado.
        </p>

        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">4.2. Prazo de Aviso Prévio</h4>
        <p className="text-muted-foreground leading-relaxed">
          Salvo disposição contratual em contrário, o cancelamento requer aviso prévio de 30 dias, período durante o qual o serviço continuará ativo e os valores proporcionais serão devidos.
        </p>

        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">4.3. Recuperação de Dados</h4>
        <p className="text-muted-foreground leading-relaxed">
          O cliente terá um prazo de 30 dias após o encerramento efetivo para solicitar a exportação de seus dados. Após este período, os dados serão eliminados de forma segura conforme nossa Diretriz de Backup e Segurança.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">5. Cancelamento por Parte da Empresa</h3>
        <p className="text-muted-foreground leading-relaxed">
          A Cheetah Solutions Network reserva-se o direito de cancelar contratos nas seguintes situações:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li>Inadimplência por período superior a 30 dias</li>
          <li>Violação grave dos Termos de Uso ou Diretriz de Uso Aceitável</li>
          <li>Atividades ilegais ou fraudulentas</li>
          <li>Descontinuação do serviço (com aviso prévio de 90 dias)</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">6. Efeitos do Cancelamento</h3>
        <p className="text-muted-foreground leading-relaxed">
          Após o cancelamento efetivo: o acesso aos serviços será suspenso; dados serão retidos pelo período de recuperação; obrigações de confidencialidade permanecem vigentes; cláusulas sobreviventes do contrato continuam válidas conforme sua natureza.
        </p>
      </section>
    </>
  );
}

function ReembolsoContent() {
  return (
    <>
      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">1. Introdução</h3>
        <p className="text-muted-foreground leading-relaxed">
          Esta Diretriz de Reembolso estabelece as condições, procedimentos e prazos para solicitação e processamento de reembolsos de valores pagos pelos serviços da Cheetah Solutions Network. Nosso compromisso é tratar todas as solicitações de forma justa, transparente e em conformidade com a legislação consumerista brasileira.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          A Cheetah Solutions Network valoriza a satisfação de seus clientes e, quando cabível, realiza reembolsos de forma ágil e sem burocracia excessiva, sempre respeitando os termos contratuais e as disposições legais aplicáveis.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">2. Situações com Direito a Reembolso</h3>
        <p className="text-muted-foreground leading-relaxed">
          O cliente tem direito a reembolso nas seguintes situações:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li>Exercício do direito de arrependimento (7 dias) para contratações online</li>
          <li>Cobrança indevida ou em duplicidade</li>
          <li>Serviço não prestado por responsabilidade da empresa</li>
          <li>Descontinuação de serviço por iniciativa da empresa</li>
          <li>Outras situações previstas em contrato específico</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">3. Situações sem Direito a Reembolso</h3>
        <p className="text-muted-foreground leading-relaxed">
          Não há direito a reembolso nas seguintes situações:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li>Serviços já prestados e entregues conforme contratado</li>
          <li>Cancelamento após o período de arrependimento sem justa causa</li>
          <li>Violação dos termos de uso pelo cliente</li>
          <li>Desistência de projetos em andamento após início da execução</li>
          <li>Não utilização do serviço por escolha do cliente</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">4. Procedimento de Solicitação</h3>
        <p className="text-muted-foreground leading-relaxed">
          Para solicitar reembolso, o cliente deve:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li>Enviar solicitação formal para: <strong className="text-primary">contatocheetahsolutions@gmail.com</strong></li>
          <li>Identificar-se como titular da conta ou representante autorizado</li>
          <li>Informar o motivo da solicitação</li>
          <li>Apresentar comprovante de pagamento quando necessário</li>
          <li>Fornecer dados bancários para depósito (quando aplicável)</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">5. Prazos e Processamento</h3>
        <p className="text-muted-foreground leading-relaxed">
          Os reembolsos são processados conforme os seguintes prazos:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li><strong>Análise:</strong> Até 5 dias úteis após recebimento da solicitação</li>
          <li><strong>Comunicação:</strong> Até 2 dias úteis após conclusão da análise</li>
          <li><strong>Processamento:</strong> Até 10 dias úteis após aprovação</li>
          <li><strong>Cartão de crédito:</strong> Estorno na fatura subsequente (prazo da operadora)</li>
          <li><strong>Transferência bancária:</strong> Até 5 dias úteis após processamento</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">6. Reembolso Proporcional</h3>
        <p className="text-muted-foreground leading-relaxed">
          Em casos de cancelamento de serviços de assinatura ou contratos de longo prazo, o reembolso será calculado proporcionalmente ao período não utilizado, deduzidas eventuais taxas administrativas previstas em contrato e valores correspondentes a serviços já prestados.
        </p>
      </section>
    </>
  );
}

function DenunciasContent() {
  return (
    <>
      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">1. Introdução</h3>
        <p className="text-muted-foreground leading-relaxed">
          A Cheetah Solutions Network mantém um Canal de Denúncias como parte de seu compromisso com a ética, integridade e conformidade. Este canal permite que colaboradores, clientes, parceiros e terceiros reportem de forma segura e confidencial situações de irregularidades, violações de políticas, condutas antiéticas ou ilegais relacionadas às atividades da empresa.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Garantimos que todas as denúncias são tratadas com seriedade, imparcialidade e confidencialidade, e que os denunciantes de boa-fé são protegidos contra qualquer forma de retaliação.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">2. Objetivo</h3>
        <p className="text-muted-foreground leading-relaxed">
          Este Canal de Denúncias tem como objetivo criar um ambiente seguro para o reporte de irregularidades, contribuindo para a manutenção de uma cultura organizacional ética e para a identificação e correção de problemas que possam afetar a empresa, seus colaboradores, clientes ou a sociedade.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">3. O que pode ser denunciado</h3>
        <p className="text-muted-foreground leading-relaxed">
          O Canal de Denúncias está disponível para reportar:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li>Fraudes, corrupção e lavagem de dinheiro</li>
          <li>Violações de políticas internas e código de ética</li>
          <li>Assédio moral, sexual ou qualquer forma de discriminação</li>
          <li>Conflitos de interesse</li>
          <li>Vazamento de informações confidenciais</li>
          <li>Violações de leis e regulamentos</li>
          <li>Condutas antiéticas ou ilegais de colaboradores, parceiros ou terceiros</li>
          <li>Riscos à segurança da informação</li>
          <li>Irregularidades contábeis ou financeiras</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">4. Como fazer uma denúncia</h3>
        <p className="text-muted-foreground leading-relaxed">
          As denúncias podem ser feitas através do e-mail: <strong className="text-primary">contatocheetahsolutions@gmail.com</strong>
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          A denúncia deve conter:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li>Descrição detalhada dos fatos</li>
          <li>Pessoas envolvidas (quando conhecidas)</li>
          <li>Data e local dos acontecimentos</li>
          <li>Evidências ou documentos que possam comprovar a denúncia (se disponíveis)</li>
          <li>Informações de contato (opcional - denúncias anônimas são aceitas)</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">5. Garantias ao Denunciante</h3>
        <p className="text-muted-foreground leading-relaxed">
          A Cheetah Solutions Network garante:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li><strong>Confidencialidade:</strong> A identidade do denunciante é protegida</li>
          <li><strong>Não retaliação:</strong> Denunciantes de boa-fé são protegidos contra represálias</li>
          <li><strong>Imparcialidade:</strong> Todas as denúncias são investigadas de forma justa</li>
          <li><strong>Acompanhamento:</strong> O denunciante pode acompanhar o status da investigação</li>
          <li><strong>Anonimato:</strong> Denúncias anônimas são aceitas e investigadas</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">6. Processo de Investigação</h3>
        <p className="text-muted-foreground leading-relaxed">
          Todas as denúncias são analisadas por equipe independente. Investigações são conduzidas de forma sigilosa e imparcial, com prazo médio de conclusão de 30 a 60 dias, dependendo da complexidade. O denunciante será informado sobre a conclusão da investigação, respeitadas as limitações de confidencialidade.
        </p>
      </section>
    </>
  );
}

function TermosVerificacaoContent() {
  return (
    <>
      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">Introdução</h3>
        <p className="text-muted-foreground leading-relaxed">
          O Programa de Verificação e Parcerias da Cheetah Solutions Network estabelece diretrizes institucionais para projetos tecnológicos que desejam manter vínculo público, institucional ou reputacional com a organização.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          A participação no Programa é facultativa, revogável e não gera qualquer direito adquirido, societário, contratual ou comercial.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">1. Natureza Institucional do Programa</h3>
        <p className="text-muted-foreground leading-relaxed">
          A verificação concedida possui caráter institucional e reputacional, não constituindo:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li>Certificação técnica</li>
          <li>Avaliação jurídica formal</li>
          <li>Garantia de segurança</li>
          <li>Endosso irrestrito</li>
          <li>Parceria comercial automática</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-4">
          A Cheetah Solutions Network não se responsabiliza por operações, condutas, decisões técnicas ou legais dos projetos verificados.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">2. Temporalidade e Reavaliação</h3>
        <p className="text-muted-foreground leading-relaxed">
          A verificação não é permanente e poderá ser:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li>Reavaliada</li>
          <li>Suspensa</li>
          <li>Indeferida</li>
          <li>Encerrada</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-4">
          A qualquer momento, mediante análise técnica, institucional ou reputacional, sem necessidade de aviso prévio.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">3. Decisões Preventivas</h3>
        <p className="text-muted-foreground leading-relaxed">
          Decisões tomadas no âmbito do Programa podem ter caráter preventivo, sem que isso represente:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li>Acusação formal</li>
          <li>Penalidade</li>
          <li>Julgamento público</li>
          <li>Juízo de mérito pessoal ou institucional</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-4">
          O Programa atua com foco na proteção do ecossistema, da reputação institucional e da confiança pública.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">4. Critérios de Avaliação Global</h3>
        <p className="text-muted-foreground leading-relaxed">
          A avaliação considera um conjunto amplo e integrado de fatores, incluindo, mas não se limitando a:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li>Governança e conformidade institucional</li>
          <li>Segurança técnica e operacional</li>
          <li>Transparência e confiabilidade</li>
          <li>Histórico público e institucional</li>
          <li>Impacto reputacional potencial</li>
          <li>Alinhamento com valores da Cheetah Solutions Network</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Nenhum critério isolado garante aprovação ou permanência.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">5. Autonomia, Sigilo e Não Divulgação</h3>
        <p className="text-muted-foreground leading-relaxed">
          A Cheetah Solutions Network:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li>Não é obrigada a divulgar relatórios internos</li>
          <li>Não fornece provas, evidências ou critérios específicos</li>
          <li>Não realiza julgamentos públicos</li>
          <li>Não responde a pressões externas</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Comunicações formais de parceiros do ecossistema podem ser consideradas internamente, sem necessidade de divulgação.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">6. Uso de Marca, Nome e Identidade Visual</h3>
        <p className="text-muted-foreground leading-relaxed">
          O uso de qualquer elemento institucional da Cheetah Solutions Network é estritamente restrito a projetos com:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li>Verificação ativa</li>
          <li>Autorização vigente</li>
          <li>Conformidade com estes termos</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Inclui-se, mas não se limita a:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li>Nome da instituição</li>
          <li>Logotipo</li>
          <li>Selos</li>
          <li>Menções públicas</li>
          <li>Páginas, textos, banners, materiais promocionais</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">7. Obrigação de Remoção em Caso de Encerramento</h3>
        <p className="text-muted-foreground leading-relaxed">
          Em caso de indeferimento, suspensão, encerramento ou desvinculação voluntária, o projeto deverá remover imediatamente qualquer referência direta ou indireta à Cheetah Solutions Network, em todos os ambientes, incluindo:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li>Websites</li>
          <li>Redes sociais</li>
          <li>Repositórios</li>
          <li>Materiais gráficos</li>
          <li>Documentações</li>
          <li>Comunicações públicas</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">8. Descumprimento das Diretrizes</h3>
        <p className="text-muted-foreground leading-relaxed">
          O descumprimento destes termos poderá resultar em medidas administrativas e institucionais proporcionais, incluindo a revogação imediata da verificação e comunicação interna ao ecossistema, quando necessário.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">9. Nova Submissão</h3>
        <p className="text-muted-foreground leading-relaxed">
          O indeferimento ou encerramento não impede nova submissão futura, desde que:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li>Os critérios vigentes à época sejam integralmente atendidos</li>
          <li>Não haja tentativa de uso indevido da marca após encerramento anterior</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">10. Independência do Programa</h3>
        <p className="text-muted-foreground leading-relaxed">
          O Programa de Verificação atua de forma independente, sem obrigação de alinhamento a interesses externos, públicos ou privados, preservando sua autonomia institucional.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-foreground">Encerramento</h3>
        <p className="text-muted-foreground leading-relaxed">
          A submissão ao Programa implica aceitação integral e irrestrita destes termos, em sua versão vigente no momento da avaliação.
        </p>
      </section>
    </>
  );
}

function ProgramaDevelopersContent() {
  return (
    <>
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
        <h3 className="text-xl font-semibold mb-4 text-foreground">1. Introdução</h3>
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
        <h3 className="text-xl font-semibold mb-4 text-foreground">2. Natureza do Programa</h3>
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
        <h3 className="text-xl font-semibold mb-4 text-foreground">3. Processo de Inscrição de Projetos</h3>
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
        <h3 className="text-xl font-semibold mb-4 text-foreground">4. Critérios de Avaliação</h3>
        <p className="text-muted-foreground leading-relaxed">
          A avaliação de projetos pelo Programa Cheetah Developers Brasil é global, multidimensional e não se limita a aspectos técnicos isolados. Os critérios considerados incluem, mas não se restringem a:
        </p>
        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">4.1. Segurança e Proteção de Dados</h4>
        <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
          <li>Implementação de práticas de segurança da informação</li>
          <li>Conformidade com legislações de proteção de dados (LGPD, GDPR)</li>
          <li>Gestão adequada de vulnerabilidades e incidentes</li>
          <li>Proteção contra ameaças cibernéticas e vazamentos</li>
        </ul>
        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">4.2. Governança e Conformidade</h4>
        <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
          <li>Estrutura organizacional clara e documentada</li>
          <li>Políticas internas de ética, conduta e compliance</li>
          <li>Transparência nas operações e tomada de decisões</li>
          <li>Conformidade com regulamentações setoriais aplicáveis</li>
        </ul>
        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">4.3. Qualidade Técnica</h4>
        <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
          <li>Arquitetura de software robusta e escalável</li>
          <li>Boas práticas de desenvolvimento e manutenção</li>
          <li>Documentação técnica adequada</li>
          <li>Processos de teste e garantia de qualidade</li>
        </ul>
        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">4.4. Confiabilidade e Reputação</h4>
        <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
          <li>Histórico público do projeto e de seus responsáveis</li>
          <li>Avaliações de usuários e comunidade</li>
          <li>Ausência de envolvimento em controvérsias graves</li>
          <li>Alinhamento com valores éticos e institucionais</li>
        </ul>
        <h4 className="text-lg font-medium mt-6 mb-3 text-foreground">4.5. Impacto Reputacional</h4>
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
        <h3 className="text-xl font-semibold mb-4 text-foreground">5. Governança e Independência</h3>
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
        <h3 className="text-xl font-semibold mb-4 text-foreground">6. Reavaliação, Suspensão e Indeferimento</h3>
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
        <h3 className="text-xl font-semibold mb-4 text-foreground">7. Transparência e Limites de Informação</h3>
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
        <h3 className="text-xl font-semibold mb-4 text-foreground">8. Uso de Marca e Identidade Visual</h3>
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
        <h3 className="text-xl font-semibold mb-4 text-foreground">9. Desvinculação e Obrigação de Remoção</h3>
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
        <h3 className="text-xl font-semibold mb-4 text-foreground">10. Novo Envio de Projeto</h3>
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
        <h3 className="text-xl font-semibold mb-4 text-foreground">11. Medidas Administrativas</h3>
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
        <h3 className="text-xl font-semibold mb-4 text-foreground">12. Disposições Finais</h3>
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
        <h3 className="text-xl font-semibold mb-4 text-foreground">Contato Institucional</h3>
        <p className="text-muted-foreground leading-relaxed">
          Para questões relacionadas ao Programa Cheetah Developers Brasil, entre em contato através do e-mail institucional: <strong className="text-primary">contatocheetahsolutions@gmail.com</strong>
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Solicitações de participação, dúvidas sobre critérios e outras questões serão respondidas exclusivamente por canais oficiais.
        </p>
      </section>
    </>
  );
}

export default GuidelinesPage;
