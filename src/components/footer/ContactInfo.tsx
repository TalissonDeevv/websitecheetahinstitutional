
import { MessageCircle, Instagram, Mail } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-white font-semibold text-base">Contato</h3>
      <div className="space-y-3">
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 bg-gray-800/50 hover:bg-[#0047ab]/20 border border-gray-700 hover:border-[#0047ab]/50 rounded-lg transition-all duration-300 group"
        >
          <MessageCircle className="h-4 w-4 text-[#0047ab] group-hover:scale-110 transition-transform flex-shrink-0" />
          <div className="flex flex-col min-w-0">
            <span className="text-xs text-gray-400">WhatsApp</span>
            <span className="text-sm text-white truncate">Em breve</span>
          </div>
        </a>

        <a
          href="mailto:contatocheetahsolutions@gmail.com"
          className="flex items-center gap-3 p-3 bg-gray-800/50 hover:bg-[#0047ab]/20 border border-gray-700 hover:border-[#0047ab]/50 rounded-lg transition-all duration-300 group"
        >
          <Mail className="h-4 w-4 text-[#0047ab] group-hover:scale-110 transition-transform flex-shrink-0" />
          <div className="flex flex-col min-w-0">
            <span className="text-xs text-gray-400">E-mail</span>
            <span className="text-sm text-white truncate">contatocheetahsolutions@gmail.com</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
