
import { Cookie, Settings, Eye, Shield, Database, ToggleLeft, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Cookies = () => {
  const cookieTypes = [
    {
      icon: Shield,
      title: "Cookies Essenciais",
      description: "Necessários para o funcionamento básico do site",
      examples: ["Autenticação", "Preferências de idioma", "Carrinho de compras"],
      required: true
    },
    {
      icon: Eye,
      title: "Cookies Analíticos",
      description: "Ajudam-nos a entender como você usa nosso site",
      examples: ["Google Analytics", "Mapas de calor", "Análise de comportamento"],
      required: false
    },
    {
      icon: Settings,
      title: "Cookies Funcionais",
      description: "Melhoram a funcionalidade e personalização",
      examples: ["Preferências de tema", "Localização", "Configurações salvas"],
      required: false
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 animate-fade-in">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Política de </span>
            <span className="text-[#0047ab]">Cookies</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Como utilizamos cookies para melhorar sua experiência em nosso site
          </p>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Tipos de Cookies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cookieTypes.map((type, index) => (
              <Card key={index} className="bg-gradient-to-br from-[#0047ab]/10 to-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#0047ab]/10 rounded-lg p-3 border border-[#0047ab]/20">
                      <type.icon className="h-6 w-6 text-[#0047ab]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{type.title}</h3>
                      {type.required && (
                        <span className="text-xs text-yellow-400">Obrigatório</span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">{type.description}</p>
                  <div className="space-y-2">
                    <p className="text-xs text-gray-400 font-medium">Exemplos:</p>
                    <ul className="text-xs text-gray-300 space-y-1">
                      {type.examples.map((example, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-[#0047ab] rounded-full"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Cookies */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Como Utilizamos Cookies
          </h2>
          
          <div className="space-y-6">
            <Card className="bg-black/50 border-[#0047ab]/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                  <Info className="h-5 w-5 text-[#0047ab]" />
                  Finalidades do Uso
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0047ab] rounded-full mt-2"></div>
                    <span>Manter você conectado durante sua sessão</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0047ab] rounded-full mt-2"></div>
                    <span>Lembrar suas preferências e configurações</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0047ab] rounded-full mt-2"></div>
                    <span>Analisar o desempenho e uso do nosso site</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0047ab] rounded-full mt-2"></div>
                    <span>Personalizar conteúdo e experiência do usuário</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Gerenciamento de Cookies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-[#0047ab]/10 to-black/50 border-[#0047ab]/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                  <Settings className="h-5 w-5 text-[#0047ab]" />
                  Controle do Navegador
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Você pode controlar cookies através das configurações do seu navegador:
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Bloquear todos os cookies</li>
                  <li>• Permitir apenas cookies essenciais</li>
                  <li>• Deletar cookies existentes</li>
                  <li>• Receber notificações sobre cookies</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-[#0047ab]/10 to-black/50 border-[#0047ab]/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                  <ToggleLeft className="h-5 w-5 text-[#0047ab]" />
                  Preferências do Site
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Configure suas preferências de cookies diretamente nas configurações do seu navegador conforme descrito ao lado.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 px-4 bg-yellow-500/10">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-black/30 border-yellow-500/30">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Cookie className="h-8 w-8 text-yellow-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Informação Importante
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Ao continuar usando nosso site, você concorda com o uso de cookies conforme 
                    descrito nesta política. Cookies essenciais são necessários para o funcionamento 
                    do site e não podem ser desabilitados. Para outros tipos de cookies, você pode 
                    gerenciar suas preferências a qualquer momento.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cookies;
