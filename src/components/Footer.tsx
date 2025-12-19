
import { Link } from "react-router-dom";
import { ArrowUp, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialLinks from "./footer/SocialLinks";
import QuickLinks from "./footer/QuickLinks";
import ContactInfo from "./footer/ContactInfo";
import LegalLinks from "./footer/LegalLinks";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-[#0047ab]/20 relative">
      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className="absolute -top-6 right-4 sm:right-8 bg-[#0047ab] hover:bg-[#0047ab]/80 text-white rounded-full w-12 h-12 p-0 shadow-lg hover:scale-110 transition-all duration-300 z-10"
        title="Voltar ao topo"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>

      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-white">
              <img 
                src="/lovable-uploads/32424dbd-18c4-4b34-bb1c-3e1c7b0326ea.png" 
                alt="Cheetah Network Logo" 
                className="h-8 sm:h-10 w-8 sm:w-10"
              />
              <span className="text-lg sm:text-2xl">Cheetah Network</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Inovação e agilidade em soluções tecnológicas. 
              Transformamos ideias em realidade digital.
            </p>
            
            <SocialLinks />

            {/* Status Button */}
            <a
              href="https://status.cheetahnetwork.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm hover:bg-green-400/10 px-2 py-1 rounded-lg"
            >
              <Activity className="h-4 w-4" />
              <span>Status dos Serviços</span>
            </a>
          </div>

          <QuickLinks />
          <LegalLinks />
          <ContactInfo />
        </div>

        <div className="border-t border-[#0047ab]/20 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Cheetah Solutions Network LTDA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
