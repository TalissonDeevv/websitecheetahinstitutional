
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, MessageCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DesktopNav = () => {
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

  return (
    <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
      {mainMenuItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`text-sm font-medium transition-all duration-300 hover:text-[#0047ab] hover:scale-105 whitespace-nowrap ${
            isActive(item.path) 
              ? "text-[#0047ab] border-b-2 border-[#0047ab]" 
              : "text-white"
          }`}
        >
          {item.name}
        </Link>
      ))}
      
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-white hover:text-[#0047ab] transition-colors">
          Mais
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-black/95 border-[#0047ab]/20 z-[100] backdrop-blur-sm">
          {moreMenuItems.map((item) => (
            <DropdownMenuItem key={item.path} asChild>
              <Link
                to={item.path}
                className={`w-full text-white hover:text-[#0047ab] hover:bg-[#0047ab]/10 transition-colors ${
                  isActive(item.path) ? "text-[#0047ab] bg-[#0047ab]/10" : ""
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
        className="flex items-center gap-2 bg-[#5865F2]/10 hover:bg-[#5865F2]/20 border border-[#5865F2]/20 hover:border-[#5865F2] text-[#5865F2] hover:text-white px-2 xl:px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap"
      >
        <MessageCircle className="h-4 w-4" />
        <span className="hidden xl:inline">Discord</span>
      </a>
    </nav>
  );
};

export default DesktopNav;
