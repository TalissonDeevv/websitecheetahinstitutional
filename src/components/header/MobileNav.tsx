import { Link, useLocation } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const MobileNav = ({ isMenuOpen, setIsMenuOpen }: MobileNavProps) => {
  const location = useLocation();

  const mainMenuItems = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "Serviços", path: "/servicos" },
    { name: "Equipe", path: "/equipe" },
    { name: "Blog", path: "/blog" },
    { name: "Contato", path: "/contato" },
  ];

  const secondaryMenuItems = [
    { name: "Developers Brasil", path: "/developers" },
    { name: "Cheetah Solidária", path: "/cheetah-solidaria" },
    { name: "FAQ", path: "/faq" },
    { name: "Sugestões", path: "/sugestoes" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  if (!isMenuOpen) return null;

  return (
    <nav className="px-4 py-6 h-full flex flex-col">
      {/* Main Navigation */}
      <div className="space-y-1">
        {mainMenuItems.map((item, index) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center justify-between py-4 px-4 text-base font-medium transition-all duration-200 rounded-lg touch-manipulation ${
              isActive(item.path)
                ? "text-primary bg-primary/10 border-l-2 border-primary"
                : "text-gray-200 hover:text-white hover:bg-white/5 active:bg-white/10"
            }`}
            onClick={handleLinkClick}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <span>{item.name}</span>
            {isActive(item.path) && (
              <div className="w-2 h-2 bg-primary rounded-full" />
            )}
          </Link>
        ))}
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-gray-800/60" />

      {/* Secondary Navigation */}
      <div className="space-y-1">
        <p className="text-xs text-gray-500 uppercase tracking-wider px-4 mb-3 font-medium">
          Mais opções
        </p>
        {secondaryMenuItems.map((item, index) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center py-3 px-4 text-sm font-medium transition-all duration-200 rounded-lg touch-manipulation ${
              isActive(item.path)
                ? "text-primary bg-primary/10"
                : "text-gray-400 hover:text-gray-200 hover:bg-white/5 active:bg-white/10"
            }`}
            onClick={handleLinkClick}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-gray-800/60" />

      {/* Discord Link */}
      <a
        href="https://discord.gg/63qjkQwKmf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-gray-400 hover:text-[#5865F2] px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg touch-manipulation active:bg-white/5"
        onClick={handleLinkClick}
      >
        <MessageCircle className="h-5 w-5" />
        <span>Nosso Discord</span>
      </a>

      {/* Spacer */}
      <div className="flex-1" />

      {/* CTA Button */}
      <div className="pt-6 pb-4">
        <Link to="/orcamento" onClick={handleLinkClick}>
          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-semibold touch-manipulation"
          >
            Solicitar Orçamento
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default MobileNav;
