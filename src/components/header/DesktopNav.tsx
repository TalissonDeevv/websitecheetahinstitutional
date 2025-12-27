import { Link, useLocation } from "react-router-dom";
import { ChevronDown, MessageCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeToggle from "@/components/ThemeToggle";

const DesktopNav = () => {
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
    { name: "Developers Brasil", path: "/developers" },
    { name: "Cheetah Solidária", path: "/cheetah-solidaria" },
    { name: "FAQ", path: "/faq" },
    { name: "Sugestões", path: "/sugestoes" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
      {mainMenuItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
            isActive(item.path) 
              ? "text-primary" 
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {item.name}
        </Link>
      ))}
      
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 outline-none">
          Mais
          <ChevronDown className="h-3.5 w-3.5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-popover border-border z-[100] backdrop-blur-sm">
          {moreMenuItems.map((item) => (
            <DropdownMenuItem key={item.path} asChild>
              <Link
                to={item.path}
                className={`w-full transition-colors duration-200 ${
                  isActive(item.path) 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {item.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <a
        href="https://discord.gg/63qjkQwKmf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground text-sm transition-colors duration-200 whitespace-nowrap ml-1"
      >
        <MessageCircle className="h-3.5 w-3.5" />
        <span className="hidden xl:inline">Discord</span>
      </a>

      <ThemeToggle />
    </nav>
  );
};

export default DesktopNav;
