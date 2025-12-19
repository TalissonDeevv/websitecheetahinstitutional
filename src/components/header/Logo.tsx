
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 sm:gap-3 hover:scale-105 transition-all duration-300">
      <div className="bg-[#0047ab]/10 rounded-lg p-1.5 sm:p-2 border border-[#0047ab]/20">
        <img 
          src="/lovable-uploads/32424dbd-18c4-4b34-bb1c-3e1c7b0326ea.png" 
          alt="Cheetah Network Logo" 
          className="h-8 w-8 sm:h-10 sm:w-10"
        />
      </div>
      <div className="hidden xs:block">
        <div className="text-lg sm:text-xl font-bold text-white hover:text-[#0047ab] transition-colors">
          Cheetah Network
        </div>
        <div className="text-xs text-gray-400 hidden sm:block">
          Soluções Tecnológicas Inovadoras
        </div>
      </div>
    </Link>
  );
};

export default Logo;
