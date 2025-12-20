import { Link } from "react-router-dom";

const LegalLinks = () => {
  const legalLinks = [
    { name: "Políticas e Termos", path: "/politicas" },
    { name: "Segurança", path: "/seguranca" },
    { name: "Reportar Abuso", path: "/denuncia" },
  ];

  return (
    <div className="space-y-5">
      <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Legal</h3>
      <ul className="space-y-3">
        {legalLinks.map((link) => (
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

export default LegalLinks;
