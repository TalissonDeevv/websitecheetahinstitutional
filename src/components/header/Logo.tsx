import { Link } from "react-router-dom";
import cheetahLogo from "@/assets/cheetah-logo.png";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
      <img 
        src={cheetahLogo} 
        alt="Cheetah Network" 
        className="h-8 sm:h-9 w-auto"
      />
    </Link>
  );
};

export default Logo;
