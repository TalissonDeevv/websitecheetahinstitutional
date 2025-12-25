import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import CheetahSolidaria from "./pages/CheetahSolidaria";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Security from "./pages/Security";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import Cookies from "./pages/Cookies";
import Transparency from "./pages/Transparency";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Budget from "./pages/Budget";
import Numbers from "./pages/Numbers";
import ServiceBots from "./pages/ServiceBots";
import ServiceWeb from "./pages/ServiceWeb";
import ServiceSystems from "./pages/ServiceSystems";
import ServiceIntegrations from "./pages/ServiceIntegrations";
import ServiceSecurity from "./pages/ServiceSecurity";
import ServiceDashboards from "./pages/ServiceDashboards";
import ServiceEcommerce from "./pages/ServiceEcommerce";
import ServiceAI from "./pages/ServiceAI";
import ServiceCloud from "./pages/ServiceCloud";
import ServiceMobile from "./pages/ServiceMobile";
import PoliticasTermosEnhanced from "./pages/PoliticasTermosEnhanced";
import Campaign from "./pages/Campaign";
import BlogPost from "./pages/BlogPost";
import Management from "./pages/Management";
import TeamVerification from "./pages/TeamVerification";
import TermsExplained from "./pages/TermsExplained";
import Report from "./pages/Report";
import Suggestions from "./pages/Suggestions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="animate-fade-in">
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
            <Route path="/politicas" element={<PoliticasTermosEnhanced />} />
            <Route path="/campanha/:id" element={<Campaign />} />
            <Route path="/numeros" element={<Numbers />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/equipe" element={<Team />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/orcamento" element={<Budget />} />
            <Route path="/gestao" element={<Management />} />
            <Route path="/verificacao-equipe" element={<TeamVerification />} />
            <Route path="/termos-explicados" element={<TermsExplained />} />
            <Route path="/cheetah-solidaria" element={<CheetahSolidaria />} />
            <Route path="/denuncia" element={<Report />} />
            <Route path="/sugestoes" element={<Suggestions />} />
            <Route path="/seguranca" element={<Security />} />
            <Route path="/termos" element={<Terms />} />
            <Route path="/privacidade" element={<Privacy />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/isencao" element={<Disclaimer />} />
            <Route path="/transparencia" element={<Transparency />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
