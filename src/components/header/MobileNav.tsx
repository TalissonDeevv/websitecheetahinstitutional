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
    { name: "Blog", path: "/blog" },
    { name: "Contato", path: "/contato" },
    { name: "Orçamento", path: "/orcamento" },
  ];

  const moreMenuItems = [
    { name: "Início", path: "/" },
    { name: "Cheetah Solidária", path: "/cheetah-solidaria" },
    { name: "FAQ", path: "/faq" },
    { name: "Sugestões", path: "/sugestoes" },
  ];

  const isActive = (path: string) => location.pathname === path;

  if (!isMenuOpen) return null;

  return (
    <nav className="lg:hidden mt-4 py-4 border-t border-gray-800/50 animate-fade-in max-h-[calc(100vh-120px)] overflow-y-auto">
      <div className="grid grid-cols-1 gap-1 mb-4">
        {mainMenuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block py-3 px-4 text-sm font-medium transition-all duration-200 rounded-lg ${
              isActive(item.path) 
                ? "text-[#0047ab] bg-[#0047ab]/10" 
                : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
      
      <div className="border-t border-gray-800/50 pt-4 mb-4">
        <a
          href="https://discord.gg/63qjkQwKmf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-gray-400 hover:text-[#5865F2] px-4 py-3 text-sm font-medium transition-all duration-200"
          onClick={() => setIsMenuOpen(false)}
        >
          <MessageCircle className="h-4 w-4" />
          Nosso Discord
        </a>
      </div>
      
      <div className="border-t border-gray-800/50 pt-4">
        <p className="text-xs text-gray-500 mb-3 px-4 uppercase tracking-wider">Mais opções</p>
        <div className="grid grid-cols-1 gap-1">
          {moreMenuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block py-3 px-4 text-sm font-medium transition-all duration-200 rounded-lg ${
                isActive(item.path) 
                  ? "text-[#0047ab] bg-[#0047ab]/10" 
                  : "text-gray-300 hover:text-white hover:bg-white/5"
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
