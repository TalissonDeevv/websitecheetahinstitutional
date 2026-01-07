
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, XCircle, Shield, Search, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TeamVerification = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState<{
    found: boolean;
    name?: string;
    role?: string;
    status?: string;
    message?: string;
  } | null>(null);

  const officialMembers = [
    { name: "Talisson Souza", role: "CEO & Founder", status: "Ativo" },
    { name: "Vitor Mapeli", role: "COO", status: "Ativo" },
    { name: "Bruno Nugget", role: "CCO", status: "Ativo" },
    { name: "Guilherme Garrido", role: "Senior Developer", status: "Ativo" },
    { name: "Ruan", role: "Customer Support Manager", status: "Ativo" },
  ];

  const handleSearch = () => {
    if (!searchTerm.trim()) return;

    const member = officialMembers.find(
      m => m.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (member) {
      setSearchResult({
        found: true,
        name: member.name,
        role: member.role,
        status: member.status,
        message: "Esta pessoa é um membro oficial da equipe Cheetah Network."
      });
    } else {
      setSearchResult({
        found: false,
        message: "Esta pessoa não é reconhecida como membro oficial da equipe Cheetah Network."
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <section className="pt-28 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-[#0047ab]/10 rounded-full flex items-center justify-center border-2 border-[#0047ab]">
                <Shield className="h-8 w-8 text-[#0047ab]" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Verificação de </span>
              <span className="text-[#0047ab]">Autenticidade</span>
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Verifique se alguém que está se apresentando como membro da nossa equipe 
              ou parceiro é realmente oficial da Cheetah Network.
            </p>
          </div>

          <Card className="bg-black/50 border-[#0047ab]/20 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center flex items-center justify-center gap-2">
                <Search className="h-6 w-6 text-[#0047ab]" />
                Buscar Membro da Equipe
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="search" className="text-white mb-2 block">
                    Nome da Pessoa
                  </Label>
                  <Input
                    id="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Digite o nome completo ou parcial..."
                    className="bg-black/50 border-[#0047ab]/30 text-white"
                  />
                </div>
                <Button 
                  onClick={handleSearch}
                  size="lg"
                  className="w-full bg-[#0047ab] hover:bg-[#0047ab]/90 text-white py-4"
                  disabled={!searchTerm.trim()}
                >
                  <Search className="mr-2 h-5 w-5" />
                  Verificar Autenticidade
                </Button>
              </div>
            </CardContent>
          </Card>

          {searchResult && (
            <Card className={`border-2 backdrop-blur-sm animate-fade-in ${
              searchResult.found 
                ? 'bg-green-500/10 border-green-500/50' 
                : 'bg-red-500/10 border-red-500/50'
            }`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  {searchResult.found ? (
                    <CheckCircle className="h-12 w-12 text-green-400" />
                  ) : (
                    <XCircle className="h-12 w-12 text-red-400" />
                  )}
                  <div>
                    <h3 className={`text-xl font-semibold ${
                      searchResult.found ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {searchResult.found ? '✅ É OFICIAL' : '❌ NÃO É RECONHECIDO'}
                    </h3>
                    <p className="text-white/80">{searchResult.message}</p>
                  </div>
                </div>

                {searchResult.found && searchResult.name && (
                  <div className="bg-black/30 rounded-lg p-4 border border-green-500/20">
                    <h4 className="text-white font-semibold mb-2">Informações Oficiais:</h4>
                    <div className="space-y-1 text-white/80">
                      <p><span className="text-green-400">Nome:</span> {searchResult.name}</p>
                      <p><span className="text-green-400">Cargo:</span> {searchResult.role}</p>
                      <p><span className="text-green-400">Status:</span> {searchResult.status}</p>
                    </div>
                  </div>
                )}

                {!searchResult.found && (
                  <div className="bg-black/30 rounded-lg p-4 border border-red-500/20">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <div className="text-white/80 text-sm">
                        <p className="font-semibold text-yellow-400 mb-2">⚠️ Atenção:</p>
                        <p>Se alguém está se passando por membro da nossa equipe, entre em contato conosco imediatamente através dos nossos canais oficiais.</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          <div className="mt-12">
            <Card className="bg-[#0047ab]/5 border-[#0047ab]/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Nossa Equipe Oficial</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {officialMembers.map((member, index) => (
                    <div key={index} className="bg-black/30 rounded-lg p-4 border border-[#0047ab]/20">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#0047ab]/20 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        </div>
                        <div>
                          <p className="text-white font-medium">{member.name}</p>
                          <p className="text-[#0047ab] text-sm">{member.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamVerification;
