
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./header/Logo";
import DesktopNav from "./header/DesktopNav";
import MobileNav from "./header/MobileNav";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#0047ab]/20 transition-all duration-300 safe-top">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <DesktopNav />

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:text-[#0047ab] hover:bg-[#0047ab]/10 transition-all duration-300 min-h-[44px] min-w-[44px]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
