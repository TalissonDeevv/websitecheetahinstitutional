import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./header/Logo";
import DesktopNav from "./header/DesktopNav";
import MobileNav from "./header/MobileNav";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 safe-top h-16 sm:h-[68px] flex items-center justify-center">
        <div className="mx-4 mt-2 w-full max-w-6xl bg-background/80 backdrop-blur-md border border-border/40 rounded-2xl px-5 h-12 sm:h-14 flex items-center justify-between shadow-lg shadow-black/5 dark:shadow-black/20">
          <Logo />
          <DesktopNav />

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden relative text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200 min-h-[44px] min-w-[44px] touch-manipulation"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">{isMenuOpen ? "Fechar menu" : "Abrir menu"}</span>
            <div className="relative w-6 h-6">
              <Menu 
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
                }`} 
              />
              <X 
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  isMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
                }`} 
              />
            </div>
          </Button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div
        id="mobile-menu"
        className={`fixed top-16 sm:top-[68px] left-0 right-0 bottom-0 z-40 lg:hidden bg-background/98 backdrop-blur-md overflow-y-auto transition-all duration-300 ease-out ${
          isMenuOpen 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </>
  );
};

export default Header;
