import { MessageCircle, Mail } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-5">
      <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Contato</h3>
      <div className="space-y-4">
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 group"
        >
          <MessageCircle className="h-4 w-4 text-gray-500 group-hover:text-[#0047ab] transition-colors" />
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">WhatsApp</span>
            <span className="text-sm">Em breve</span>
          </div>
        </a>

        <a
          href="mailto:contatocheetahsolutions@gmail.com"
          className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 group"
        >
          <Mail className="h-4 w-4 text-gray-500 group-hover:text-[#0047ab] transition-colors" />
          <div className="flex flex-col min-w-0">
            <span className="text-xs text-gray-500">E-mail</span>
            <span className="text-sm truncate">contatocheetahsolutions@gmail.com</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
