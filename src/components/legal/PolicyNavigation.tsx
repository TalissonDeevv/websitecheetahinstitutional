import { Link, useLocation } from "react-router-dom";
import { ChevronLeft, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const policies = [
  { name: "Termos de Uso", path: "/diretrizes/termos-uso" },
  { name: "Política de Privacidade", path: "/diretrizes/privacidade" },
  { name: "Política de Segurança", path: "/diretrizes/seguranca" },
  { name: "Política de Uso Aceitável", path: "/diretrizes/uso-aceitavel" },
  { name: "Política de Backup", path: "/diretrizes/backup" },
  { name: "Política de Atendimento", path: "/diretrizes/atendimento" },
  { name: "Política de Atualização", path: "/diretrizes/atualizacao" },
  { name: "Política de Transparência", path: "/diretrizes/transparencia" },
  { name: "Propriedade Intelectual", path: "/diretrizes/propriedade-intelectual" },
  { name: "Política de Responsabilidade", path: "/diretrizes/responsabilidade" },
  { name: "Política de Isenção", path: "/diretrizes/isencao" },
  { name: "Política de Cancelamento", path: "/diretrizes/cancelamento" },
  { name: "Política de Reembolso", path: "/diretrizes/reembolso" },
  { name: "Canal de Denúncias", path: "/diretrizes/denuncia" },
  { name: "Termos de Verificação", path: "/diretrizes/termos-verificacao" },
  { name: "Programa Cheetah Developers Brasil", path: "/diretrizes/programa-developers" },
];

const PolicyNavigation = () => {
  const location = useLocation();

  return (
    <aside className="hidden lg:block w-64 flex-shrink-0">
      <div className="sticky top-32">
        <Link 
          to="/diretrizes"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ChevronLeft className="w-4 h-4" />
          Voltar às Diretrizes
        </Link>
        
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
          Documentos
        </h3>
        
        <nav className="space-y-1">
          {policies.map((policy) => {
            const isActive = location.pathname === policy.path;
            return (
              <Link
                key={policy.path}
                to={policy.path}
                className={cn(
                  "flex items-center gap-2 text-sm py-2 px-3 rounded-lg transition-colors",
                  isActive 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                <FileText className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">{policy.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default PolicyNavigation;