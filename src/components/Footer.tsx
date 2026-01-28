import { Link } from "react-router-dom";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import cheetahLogo from "@/assets/cheetah-logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { name: "Websites", path: "/servicos/web" },
    { name: "Sistemas Web", path: "/servicos/sistemas" },
    { name: "E-commerce", path: "/servicos/ecommerce" },
    { name: "Bots Discord/Telegram", path: "/servicos/bots" },
    { name: "Integrações", path: "/servicos/integracoes" },
    { name: "Apps Mobile", path: "/servicos/mobile" },
  ];

  const company = [
    { name: "Sobre", path: "/sobre" },
    { name: "Equipe", path: "/equipe" },
    { name: "Trabalhe Conosco", path: "/inscricoes" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Contato", path: "/contato" },
  ];

  const projects = [
    { name: "Bella Bot", path: "/bellabot" },
    { name: "Developers Brasil", path: "/developers" },
    { name: "Cheetah Solidária", path: "/cheetah-solidaria" },
  ];

  const legal = [
    { name: "Termos de Uso", path: "/diretrizes/termos-uso" },
    { name: "Privacidade", path: "/diretrizes/privacidade" },
    { name: "Cookies", path: "/diretrizes/cookies" },
    { name: "Segurança", path: "/diretrizes/seguranca" },
    { name: "Diretrizes", path: "/diretrizes" },
  ];

  return (
    <footer className="bg-background border-t border-border relative">
      {/* Back to Top */}
      <Button
        onClick={scrollToTop}
        className="absolute -top-5 right-6 md:right-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-10 h-10 p-0 shadow-lg z-10"
        title="Voltar ao topo"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>

      <div className="container mx-auto px-4 py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 lg:gap-10">
          
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img 
                src={cheetahLogo} 
                alt="Cheetah Network" 
                className="h-8 w-auto dark:invert-0 invert"
                loading="eager"
                fetchPriority="high"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
              Software house focada em soluções digitais sob medida. 
              Engenharia sólida, entregas consistentes.
            </p>
            
            <div className="space-y-2">
              <a 
                href="mailto:contatocheetahsolutions@gmail.com"
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-primary" />
                contatocheetahsolutions@gmail.com
              </a>
              <a 
                href="https://wa.me/5581993964261"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-primary" />
                (81) 99396-4261
              </a>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                Recife, PE — Brasil
              </div>
            </div>

          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
              Serviços
            </h4>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
              Empresa
            </h4>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projetos */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
              Projetos
            </h4>
            <ul className="space-y-2.5">
              {projects.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {legal.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
              Projeto?
            </h4>
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
              Orçamento gratuito e sem compromisso.
            </p>
            <Link to="/orcamento">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs">
                Solicitar orçamento
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Cheetah Solutions Network. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/diretrizes/termos-uso" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Termos
              </Link>
              <Link to="/diretrizes/privacidade" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacidade
              </Link>
              <Link to="/diretrizes/denuncias" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Denunciar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
