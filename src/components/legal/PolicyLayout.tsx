import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PolicyNavigation from "./PolicyNavigation";

interface PolicyLayoutProps {
  children: ReactNode;
  title: string;
  lastUpdated?: string;
}

const PolicyLayout = ({ children, title, lastUpdated = "Dezembro de 2024" }: PolicyLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="flex gap-12 max-w-7xl mx-auto">
          <PolicyNavigation />
          
          <main className="flex-1 min-w-0">
            {/* Mobile back link */}
            <Link 
              to="/diretrizes"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 lg:hidden"
            >
              <ChevronLeft className="w-4 h-4" />
              Voltar às Diretrizes
            </Link>
            
            <article className="prose prose-invert prose-lg max-w-none">
              <header className="not-prose mb-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
                <p className="text-sm text-muted-foreground">
                  Última atualização: {lastUpdated}
                </p>
              </header>
              
              {children}
            </article>
          </main>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PolicyLayout;