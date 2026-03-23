import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

const DesktopNav = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Sobre", path: "/sobre" },
    { name: "Serviços", path: "/servicos" },
    { name: "FAQ", path: "/faq" },
    { name: "Atendimento", path: "/atendimento" },
    { name: "Orçamento", path: "/orcamento" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
      {menuItems.map((item) => (
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
      <ThemeToggle />
    </nav>
  );
};

export default DesktopNav;
