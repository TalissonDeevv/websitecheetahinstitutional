
import { Link } from "react-router-dom";

const QuickLinks = () => {
  const quickLinks = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "Serviços", path: "/servicos" },
    { name: "Portfólio", path: "/portfolio" },
    { name: "Cheetah Solidária", path: "/cheetah-solidaria" },
    { name: "Contato", path: "/contato" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-white font-semibold text-base">Links Rápidos</h3>
      <ul className="space-y-2">
        {quickLinks.map((link) => (
          <li key={link.path}>
            <Link 
              to={link.path} 
              className="text-gray-300 hover:text-[#0047ab] transition-colors text-sm hover:scale-105 transform duration-300 inline-block py-1 hover:bg-[#0047ab]/10 px-2 rounded"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
