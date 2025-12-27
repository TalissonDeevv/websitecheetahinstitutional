import { Link } from "react-router-dom";
import cheetahLogo from "@/assets/cheetah-logo.png";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center hover:opacity-85 transition-opacity duration-200">
      <img 
        src={cheetahLogo} 
        alt="Cheetah Network" 
        className="h-8 sm:h-9 max-h-9 w-auto object-contain dark:invert-0 invert"
        loading="eager"
        fetchPriority="high"
      />
    </Link>
  );
};

export default Logo;
