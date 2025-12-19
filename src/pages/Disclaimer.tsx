
import { AlertTriangle, Shield, FileText, Scale, Info, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  const disclaimerSections = [
    {
      icon: AlertTriangle,
      title: "Limitações de Responsabilidade",
      content: [
        "Os serviços são fornecidos 'como estão' sem garantias expressas ou implícitas",
        "Não garantimos que o serviço será ininterrupto ou livre de erros",
        "Não somos responsáveis por danos indiretos, incidentais ou consequenciais",
        "Nossa responsabilidade é limitada ao valor pago pelos serviços"
      ]
    },
    {
      icon: ExternalLink,
      title: "Conteúdo de Terceiros",
      content: [
        "Nossos serviços podem conter links para sites de terceiros",
        "Não controlamos nem endossamos o conteúdo de sites externos",
        "Não somos responsáveis pela privacidade ou práticas de terceiros",
        "O uso de serviços de terceiros é por sua própria conta e risco"
      ]
    },
    {
      icon: FileText,
      title: "Propriedade Intelectual",
      content: [
        "Todo conteúdo em nosso site é propriedade da Cheetah Network",
        "Você não pode reproduzir ou distribuir nosso conteúdo sem permissão",
        "Respeitamos os direitos de propriedade intelectual de terceiros",
        "Respondemos prontamente a reclamações de violação de direitos autorais"
      ]
    },
    {
      icon: Scale,
      title: "Lei Aplicável",
      content: [
        "Estes termos são regidos pelas leis brasileiras",
        "Qualquer disputa será resolvida nos tribunais do Brasil",
        "Se alguma cláusula for inválida, o restante permanece em vigor",
        "Nosso silêncio não constitui renúncia a direitos"
      ]
    }
  ];

  const risks = [
    {
      title: "Riscos Técnicos",
      description: "Interrupções de serviço, bugs ou problemas de compatibilidade podem ocorrer"
    },
    {
      title: "Riscos de Segurança", 
      description: "Embora implementemos medidas de segurança, nenhum sistema é 100% seguro"
    },
    {
      title: "Riscos de Dados",
      description: "Perda de dados pode ocorrer; recomendamos backups regulares"
    },
    {
      title: "Riscos de Disponibilidade",
      description: "Serviços podem ficar indisponíveis devido a manutenção ou problemas técnicos"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 animate-fade-in">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Isenção de </span>
            <span className="text-[#0047ab]">Responsabilidade</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Limitações legais e esclarecimentos sobre o uso dos nossos serviços
          </p>
        </div>
      </section>

      {/* Main Disclaimer Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {disclaimerSections.map((section, index) => (
              <Card key={index} className="bg-gradient-to-br from-[#0047ab]/10 to-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <div className="bg-[#0047ab]/10 rounded-lg p-3 border border-[#0047ab]/20">
                      <section.icon className="h-6 w-6 text-[#0047ab]" />
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-sm text-gray-300">
                        <div className="w-2 h-2 bg-[#0047ab] rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Disclosure */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Divulgação de Riscos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {risks.map((risk, index) => (
              <Card key={index} className="bg-black/50 border-[#0047ab]/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">{risk.title}</h3>
                      <p className="text-sm text-gray-300">{risk.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-r from-[#0047ab]/10 to-purple-500/10 border-[#0047ab]/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <Info className="h-8 w-8 text-[#0047ab] mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Aviso Importante
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Esta isenção de responsabilidade é parte integrante dos nossos Termos de Uso. 
                    Ao utilizar nossos serviços, você reconhece ter lido, compreendido e concordado 
                    com todas as limitações e exclusões aqui descritas.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Se você não concorda com qualquer parte desta isenção, recomendamos que não 
                    utilize nossos serviços. Para esclarecimentos adicionais, entre em contato 
                    com nossa equipe jurídica.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact for Legal Questions */}
      <section className="py-16 px-4 bg-[#0047ab]/5">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Dúvidas Jurídicas?
          </h2>
          <p className="text-gray-300 mb-6">
            Para questões legais específicas ou esclarecimentos sobre esta isenção, 
            entre em contato com nosso departamento jurídico.
          </p>
          <div className="bg-black/30 rounded-lg p-6 border border-[#0047ab]/20">
            <p className="text-white/80 text-sm">
              <strong className="text-[#0047ab]">E-mail Legal:</strong><br />
              legal@cheetahnetwork.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Disclaimer;
