
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Construction } from "lucide-react";

interface ComingSoonToastProps {
  message?: string;
  title?: string;
}

const ComingSoonToast = ({ 
  message = "Esta funcionalidade está em desenvolvimento e estará disponível em breve!", 
  title = "Em Breve" 
}: ComingSoonToastProps) => {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: title,
      description: (
        <div className="flex items-center gap-2">
          <Construction className="h-4 w-4 text-yellow-500" />
          {message}
        </div>
      ),
      duration: 4000,
    });
  }, [toast, message, title]);

  return null;
};

export default ComingSoonToast;
