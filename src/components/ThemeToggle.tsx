import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative h-9 w-9 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
      aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
    >
      <Sun className={`h-4 w-4 absolute transition-all duration-300 ${
        theme === 'dark' ? 'opacity-0 scale-0 rotate-90' : 'opacity-100 scale-100 rotate-0'
      }`} />
      <Moon className={`h-4 w-4 absolute transition-all duration-300 ${
        theme === 'dark' ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 -rotate-90'
      }`} />
      <span className="sr-only">
        {theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
      </span>
    </Button>
  );
};

export default ThemeToggle;
