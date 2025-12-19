
import { Link, useLocation } from "react-router-dom";
import { MessageCircle } from "lucide-react";

interface MobileNavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const MobileNav = ({ isMenuOpen, setIsMenuOpen }: MobileNavProps) => {
  const location = useLocation();

  const mainMenuItems = [
    { name: "Sobre", path: "/sobre" },
    { name: "Serviços", path: "/servicos" },
    { name: "Equipe", path: "/equipe" },
    { name: "Contato", path: "/contato" },
    { name: "Orçamento", path: "/orcamento" },
  ];

  const moreMenuItems = [
    { name: "Início", path: "/" },
    { name: "Atendefly", path: "/atendefly" },
    { name: "Portfólio", path: "/portfolio" },
    { name: "Projetos Públicos", path: "/projetos" },
    { name: "Blog", path: "/blog" },
    { name: "Cheetah Academy", path: "/academy" },
    { name: "Cheetah Solidária", path: "/cheetah-solidaria" },
    { name: "FAQ", path: "/faq" },
    { name: "Base de Conhecimento", path: "/conhecimento" },
    { name: "Sugestões", path: "/sugestoes" },
  ];

  const isActive = (path: string) => location.pathname === path;

  if (!isMenuOpen) return null;

  return (
    <nav className="lg:hidden mt-4 py-4 border-t border-[#0047ab]/20 animate-fade-in max-h-[calc(100vh-120px)] overflow-y-auto">
      <div className="grid grid-cols-1 gap-2 mb-4">
        {mainMenuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block py-3 px-4 text-sm font-medium transition-all duration-300 hover:text-[#0047ab] rounded-lg mobile-menu-item ${
              isActive(item.path) ? "text-[#0047ab] bg-[#0047ab]/10" : "text-white hover:bg-[#0047ab]/5"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
      
      <div className="border-t border-[#0047ab]/20 pt-4 mb-4">
        <a
          href="https://discord.gg/63qjkQwKmf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#5865F2]/10 hover:bg-[#5865F2]/20 border border-[#5865F2]/20 text-[#5865F2] hover:text-white px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 mx-2 mobile-menu-item"
          onClick={() => setIsMenuOpen(false)}
        >
          <MessageCircle className="h-4 w-4" />
          Nosso Discord
        </a>
      </div>
      
      <div className="border-t border-[#0047ab]/20 pt-4">
        <p className="text-xs text-gray-400 mb-3 px-4">Mais opções:</p>
        <div className="grid grid-cols-1 gap-2">
          {moreMenuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block py-3 px-4 text-sm font-medium transition-all duration-300 hover:text-[#0047ab] rounded-lg mobile-menu-item ${
                isActive(item.path) ? "text-[#0047ab] bg-[#0047ab]/10" : "text-white hover:bg-[#0047ab]/5"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
