import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

interface MobileNavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const MobileNav = ({ isMenuOpen, setIsMenuOpen }: MobileNavProps) => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const mainMenuItems = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "Serviços", path: "/servicos" },
    { name: "Equipe", path: "/equipe" },
    { name: "Blog", path: "/blog" },
    { name: "Contato", path: "/contato" },
  ];

  const secondaryMenuItems = [
    { name: "Trabalhe Conosco", path: "/inscricoes" },
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
      {/* Theme Toggle */}
      <div className="flex items-center justify-between px-4 py-3 mb-4 bg-accent/50 rounded-lg">
        <span className="text-sm font-medium text-foreground">
          {theme === 'dark' ? 'Modo Escuro' : 'Modo Claro'}
        </span>
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background border border-border transition-colors"
          aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
        >
          {theme === 'dark' ? (
            <>
              <Moon className="h-4 w-4 text-primary" />
              <span className="text-xs text-muted-foreground">Escuro</span>
            </>
          ) : (
            <>
              <Sun className="h-4 w-4 text-primary" />
              <span className="text-xs text-muted-foreground">Claro</span>
            </>
          )}
        </button>
      </div>

      {/* Main Navigation */}
      <div className="space-y-1">
        {mainMenuItems.map((item, index) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center justify-between py-4 px-4 text-base font-medium transition-all duration-200 rounded-lg touch-manipulation ${
              isActive(item.path)
                ? "text-primary bg-primary/10 border-l-2 border-primary"
                : "text-foreground hover:text-foreground hover:bg-accent active:bg-accent"
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
      <div className="my-6 border-t border-border" />

      {/* Secondary Navigation */}
      <div className="space-y-1">
        <p className="text-xs text-muted-foreground uppercase tracking-wider px-4 mb-3 font-medium">
          Mais opções
        </p>
        {secondaryMenuItems.map((item, index) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center py-3 px-4 text-sm font-medium transition-all duration-200 rounded-lg touch-manipulation ${
              isActive(item.path)
                ? "text-primary bg-primary/10"
                : "text-muted-foreground hover:text-foreground hover:bg-accent active:bg-accent"
            }`}
            onClick={handleLinkClick}
          >
            {item.name}
          </Link>
        ))}
      </div>


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
