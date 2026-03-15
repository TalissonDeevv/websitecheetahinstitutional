import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "@/components/ScrollToTop";
import OverflowDebugGate from "@/components/debug/OverflowDebugGate";

import DiscordPopup from "./components/DiscordPopup";
import CheetahSolidaria from "./pages/CheetahSolidaria";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Articles from "./pages/Articles";
import ArticlePost from "./pages/ArticlePost";
import Budget from "./pages/Budget";
import Numbers from "./pages/Numbers";
// Individual service pages consolidated into /servicos
import Campaign from "./pages/Campaign";
import BlogPost from "./pages/BlogPost";
import Management from "./pages/Management";
import TeamVerification from "./pages/TeamVerification";
import TermsExplained from "./pages/TermsExplained";
import Suggestions from "./pages/Suggestions";
import NotFound from "./pages/NotFound";
import GuidelinesPage from "./pages/legal/GuidelinesPage";
import Comunidade from "./pages/Comunidade";

import ApprovedProjects from "./pages/ApprovedProjects";
import TrabalheConosco from "./pages/TrabalheConosco";
import BellaBot from "./pages/BellaBot";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <OverflowDebugGate />
          <DiscordPopup />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/servicos/bots" element={<ServiceBots />} />
            <Route path="/servicos/web" element={<ServiceWeb />} />
            <Route path="/servicos/sistemas" element={<ServiceSystems />} />
            <Route path="/servicos/integracoes" element={<ServiceIntegrations />} />
            <Route path="/servicos/seguranca" element={<ServiceSecurity />} />
            <Route path="/servicos/dashboards" element={<ServiceDashboards />} />
            <Route path="/servicos/ecommerce" element={<ServiceEcommerce />} />
            <Route path="/servicos/ia" element={<ServiceAI />} />
            <Route path="/servicos/cloud" element={<ServiceCloud />} />
            <Route path="/servicos/mobile" element={<ServiceMobile />} />
            <Route path="/campanha/:id" element={<Campaign />} />
            <Route path="/numeros" element={<Numbers />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/atendimento" element={<Contact />} />
            <Route path="/contato" element={<Navigate to="/atendimento" replace />} />
            <Route path="/equipe" element={<Team />} />
            
            {/* Articles (renamed from Blog) */}
            <Route path="/artigos" element={<Articles />} />
            <Route path="/artigos/:slug" element={<ArticlePost />} />
            
            {/* Legacy blog redirects */}
            <Route path="/blog" element={<Navigate to="/artigos" replace />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            
            <Route path="/orcamento" element={<Budget />} />
            <Route path="/gestao" element={<Management />} />
            <Route path="/verificacao-equipe" element={<TeamVerification />} />
            <Route path="/termos-explicados" element={<TermsExplained />} />
            <Route path="/cheetah-solidaria" element={<CheetahSolidaria />} />
            <Route path="/sugestoes" element={<Suggestions />} />
            <Route path="/comunidade" element={<Comunidade />} />
            
            {/* Legacy redirect */}
            <Route path="/developers" element={<Navigate to="/comunidade" replace />} />
            <Route path="/developers/projetos" element={<Navigate to="/comunidade/projetos" replace />} />
            
            <Route path="/comunidade/projetos" element={<ApprovedProjects />} />
            <Route path="/inscricoes" element={<TrabalheConosco />} />
            <Route path="/trabalhe-conosco" element={<Navigate to="/inscricoes" replace />} />
            <Route path="/bellabot" element={<BellaBot />} />

            {/* Institutional Articles - Direct URL Redirects */}
            <Route path="/atuacao" element={<Navigate to="/artigos/atuacao" replace />} />
            <Route path="/missao" element={<Navigate to="/artigos/missao" replace />} />
            <Route path="/ecossistema" element={<Navigate to="/artigos/ecossistema" replace />} />
            <Route path="/posicionamento" element={<Navigate to="/artigos/posicionamento" replace />} />
            <Route path="/agencia-tradicional" element={<Navigate to="/artigos/agencia-tradicional" replace />} />
            <Route path="/por-que-usamos-guepardo" element={<Navigate to="/artigos/guepardo" replace />} />
            <Route path="/identidade-azul-cheetah" element={<Navigate to="/artigos/identidade" replace />} />
            <Route path="/fundacao-cheetah-solutions-network" element={<Navigate to="/artigos/fundacao" replace />} />

            {/* Guidelines - Single Page with dynamic routing */}
            <Route path="/diretrizes" element={<GuidelinesPage />} />
            <Route path="/diretrizes/:policyId" element={<GuidelinesPage />} />

            {/* Redirects for legacy routes */}
            <Route path="/legal" element={<Navigate to="/diretrizes" replace />} />
            <Route path="/legal/*" element={<Navigate to="/diretrizes" replace />} />
            <Route path="/politicas" element={<Navigate to="/diretrizes" replace />} />
            <Route path="/termos" element={<Navigate to="/diretrizes/termos-uso" replace />} />
            <Route path="/privacidade" element={<Navigate to="/diretrizes/privacidade" replace />} />
            <Route path="/cookies" element={<Navigate to="/diretrizes/cookies" replace />} />
            <Route path="/seguranca" element={<Navigate to="/diretrizes/seguranca" replace />} />
            <Route path="/transparencia" element={<Navigate to="/diretrizes/transparencia" replace />} />
            <Route path="/isencao" element={<Navigate to="/diretrizes/isencao" replace />} />
            <Route path="/denuncia" element={<Navigate to="/diretrizes/denuncias" replace />} />
            

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

