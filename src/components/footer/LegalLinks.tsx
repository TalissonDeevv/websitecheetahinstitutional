
import { Link } from "react-router-dom";

const LegalLinks = () => {
  const legalLinks = [
    { name: "Políticas e Termos", path: "/politicas" },
    { name: "Segurança", path: "/seguranca" },
    { name: "Reportar Abuso", path: "/denuncia" },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-white font-semibold text-base">Legal</h3>
      <ul className="space-y-2">
        {legalLinks.map((link) => (
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

export default LegalLinks;
