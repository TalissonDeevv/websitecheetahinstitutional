import { Link } from "react-router-dom";
import { ArrowUp, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialLinks from "./footer/SocialLinks";
import QuickLinks from "./footer/QuickLinks";
import ContactInfo from "./footer/ContactInfo";
import LegalLinks from "./footer/LegalLinks";
import cheetahLogo from "@/assets/cheetah-logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-gray-800/50 relative">
      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className="absolute -top-6 right-4 sm:right-8 bg-[#0047ab] hover:bg-[#0047ab]/80 text-white rounded-full w-12 h-12 p-0 shadow-lg hover:scale-110 transition-all duration-300 z-10"
        title="Voltar ao topo"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>

      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Logo e Descrição */}
          <div className="space-y-6 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block hover:opacity-80 transition-opacity duration-300">
              <img 
                src={cheetahLogo} 
                alt="Cheetah Network" 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Inovação e agilidade em soluções tecnológicas. 
              Transformamos ideias em realidade digital.
            </p>
            
            <SocialLinks />

            {/* Status Button */}
            <a
              href="https://status.cheetahnetwork.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-500/80 hover:text-green-400 transition-colors text-sm"
            >
              <Activity className="h-4 w-4" />
              <span>Status dos Serviços</span>
            </a>
          </div>

          <QuickLinks />
          <LegalLinks />
          <ContactInfo />
        </div>

        <div className="border-t border-gray-800/50 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Cheetah Solutions Network LTDA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
