
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText } from "lucide-react";

interface BudgetTermsAccordionProps {
  acceptTerms: boolean;
  setAcceptTerms: (accept: boolean) => void;
}

const BudgetTermsAccordion = ({ acceptTerms, setAcceptTerms }: BudgetTermsAccordionProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg border border-[#0047ab]/20">
        <Checkbox
          id="terms"
          checked={acceptTerms}
          onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
          className="bg-black/50 border-[#0047ab]/20 mt-1"
        />
        <div className="flex-1">
          <label htmlFor="terms" className="text-gray-300 text-sm cursor-pointer">
            <span className="text-white font-medium">Li e aceito os termos e condições</span> para solicitação de orçamento
          </label>
        </div>
      </div>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="terms" className="border-[#0047ab]/20">
          <AccordionTrigger className="text-white hover:text-[#0047ab] py-3">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Visualizar Termos e Condições Completos
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="p-4 bg-black/30 rounded-lg border border-[#0047ab]/20 max-h-64 overflow-y-auto">
              <h4 className="text-white font-semibold mb-3">Termos para Solicitação de Orçamento</h4>
              <div className="space-y-3 text-gray-300 text-sm">
                <div>
                  <h5 className="text-white font-medium mb-1">1. Gratuidade do Orçamento</h5>
                  <p>A elaboração e envio do orçamento é totalmente gratuita e não gera qualquer compromisso de contratação para ambas as partes.</p>
                </div>
                
                <div>
                  <h5 className="text-white font-medium mb-1">2. Veracidade das Informações</h5>
                  <p>O cliente declara que todas as informações fornecidas são verdadeiras e completas. Informações incorretas podem resultar em orçamentos imprecisos.</p>
                </div>
                
                <div>
                  <h5 className="text-white font-medium mb-1">3. Validade do Orçamento</h5>
                  <p>O orçamento apresentado terá validade de 30 dias corridos a partir da data de envio. Após este período, novos valores podem ser aplicados.</p>
                </div>
                
                <div>
                  <h5 className="text-white font-medium mb-1">4. Análise Técnica</h5>
                  <p>O orçamento final pode sofrer alterações após análise técnica detalhada do projeto, sendo o cliente comunicado sobre quaisquer mudanças antes da contratação.</p>
                </div>
                
                <div>
                  <h5 className="text-white font-medium mb-1">5. Prazo de Resposta</h5>
                  <p>Nosso prazo padrão para resposta é de até 48 horas úteis. Projetos complexos podem necessitar de prazo adicional para análise completa.</p>
                </div>
                
                <div>
                  <h5 className="text-white font-medium mb-1">6. Confidencialidade</h5>
                  <p>Todas as informações compartilhadas serão tratadas com absoluta confidencialidade e utilizadas exclusivamente para elaboração do orçamento.</p>
                </div>
                
                <div>
                  <h5 className="text-white font-medium mb-1">7. Propriedade Intelectual</h5>
                  <p>Ideias, conceitos e soluções apresentadas no orçamento são de propriedade da Cheetah Network até a efetiva contratação dos serviços.</p>
                </div>
                
                <div>
                  <h5 className="text-white font-medium mb-1">8. Uso Indevido</h5>
                  <p>É vedado o uso das informações do orçamento para fins diversos da avaliação para contratação, incluindo mas não limitado a: reprodução, distribuição ou utilização por terceiros.</p>
                </div>
                
                <div>
                  <h5 className="text-white font-medium mb-1">9. Cancelamento</h5>
                  <p>O cliente pode cancelar a solicitação de orçamento a qualquer momento sem qualquer ônus. A Cheetah Network reserva-se o direito de recusar projetos que não estejam alinhados com nossos valores éticos.</p>
                </div>
                
                <div>
                  <h5 className="text-white font-medium mb-1">10. Foro</h5>
                  <p>Para dirimir questões relacionadas a este orçamento, fica eleito o foro da comarca de São Paulo/SP, com renúncia expressa a qualquer outro.</p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default BudgetTermsAccordion;
