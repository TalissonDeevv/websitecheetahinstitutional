import { Link } from "react-router-dom";

const QuickLinks = () => {
  const quickLinks = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "Serviços", path: "/servicos" },
    { name: "Equipe", path: "/equipe" },
    { name: "Artigos", path: "/artigos" },
    { name: "Contato", path: "/contato" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <div className="space-y-5">
      <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Links Rápidos</h3>
      <ul className="space-y-3">
        {quickLinks.map((link) => (
          <li key={link.path}>
            <Link 
              to={link.path} 
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
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
