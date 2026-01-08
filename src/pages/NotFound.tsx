import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, MessageCircle } from "lucide-react";
import errorIllustration from "@/assets/error-illustration.svg";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-lg">
        <img 
          src={errorIllustration} 
          alt="Ilustração de erro" 
          className="w-full max-w-sm mx-auto mb-8"
        />
        
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Ocorreu um erro ao carregar esta página.
        </h1>
        
        <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
          Isso pode ter ocorrido devido a uma instabilidade temporária, falha de conexão ou atualização em andamento. Você pode tentar novamente ou retornar à página inicial.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Voltar para a página inicial
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a
              href="https://discord.gg/63qjkQwKmf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Servidor de Suporte no Discord
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
