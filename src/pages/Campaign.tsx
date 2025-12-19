import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, Users, Calendar, MapPin, Target, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Campaign = () => {
  const { id } = useParams();

  const campaigns = {
    "familia-silva": {
      title: "Ajudando a Família Silva",
      description: "Maria Silva, mãe de três filhos, precisa de ajuda para custear o tratamento médico de sua filha mais nova. Cada contribuição faz a diferença.",
      fullDescription: "Maria Silva, de 35 anos, é mãe solteira de três filhos e trabalha como diarista para sustentar a família. Sua filha mais nova, Ana, de apenas 8 anos, foi diagnosticada com uma condição médica que requer tratamento especializado e medicamentos de alto custo. Com a renda limitada, Maria está lutando para conseguir arcar com todas as despesas médicas necessárias.",
      status: "Ativa",
      category: "Saúde",
      location: "São Paulo, SP",
      goal: 15000,
      raised: 8750,
      supporters: 47,
      daysLeft: 23,
      updates: [
        {
          date: "2024-01-15",
          title: "Consulta médica realizada",
          description: "Ana passou pela consulta com o especialista e iniciou o novo tratamento."
        },
        {
          date: "2024-01-10", 
          title: "Exames complementares",
          description: "Realizamos os exames solicitados pelo médico."
        }
      ]
    },
    "casa-joao": {
      title: "Reconstrução da Casa do João",
      description: "Após um incêndio devastador, João perdeu tudo. Vamos ajudá-lo a reconstruir sua casa e sua vida.",
      fullDescription: "João Santos, de 62 anos, perdeu tudo em um incêndio que destruiu completamente sua residência. Aposentado, ele vivia sozinho na casa que construiu ao longo de 30 anos de trabalho. O incêndio foi causado por um curto-circuito e destruiu não apenas a estrutura da casa, mas também todos os seus pertences pessoais e documentos.",
      status: "Finalizada",
      category: "Moradia", 
      location: "Rio de Janeiro, RJ",
      goal: 25000,
      raised: 25000,
      supporters: 89,
      daysLeft: 0,
      updates: [
        {
          date: "2024-01-20",
          title: "Casa entregue!",
          description: "João recebeu as chaves da sua nova casa. Muito obrigado a todos que contribuíram!"
        }
      ]
    },
    "educacao-todos": {
      title: "Educação para Todos",
      description: "Campanha para fornecer material escolar e uniforme para crianças carentes da comunidade local.",
      fullDescription: "Esta campanha visa beneficiar 50 crianças de famílias em situação de vulnerabilidade social na comunidade de Vila Esperança, em Belo Horizonte. Muitas dessas crianças não têm acesso a materiais escolares básicos, uniformes adequados e livros didáticos, comprometendo seu desenvolvimento educacional.",
      status: "Em breve",
      category: "Educação",
      location: "Minas Gerais, MG", 
      goal: 12000,
      raised: 0,
      supporters: 0,
      daysLeft: 0,
      updates: []
    }
  };

  const campaignData = campaigns[id as keyof typeof campaigns];

  if (!campaignData) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Campanha não encontrada</h1>
          <Link to="/cheetah-solidaria" className="text-[#0047ab] hover:underline">
            Voltar para Cheetah Solidária
          </Link>
        </div>
      </div>
    );
  }

  const progressPercentage = (campaignData.raised / campaignData.goal) * 100;

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Link 
            to="/cheetah-solidaria"
            className="inline-flex items-center text-[#0047ab] hover:text-[#0047ab]/80 mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Cheetah Solidária
          </Link>

          {/* Campaign Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="bg-[#0047ab]/10 text-[#0047ab] px-3 py-1 rounded-full text-sm font-medium border border-[#0047ab]/20">
                {campaignData.category}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                campaignData.status === 'Ativa' ? 'bg-green-500/20 text-green-400' :
                campaignData.status === 'Finalizada' ? 'bg-gray-500/20 text-gray-400' :
                'bg-yellow-500/20 text-yellow-400'
              }`}>
                {campaignData.status}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{campaignData.title}</h1>
            <div className="flex items-center gap-2 text-white/60">
              <MapPin className="h-4 w-4" />
              {campaignData.location}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card className="bg-black/50 border border-[#0047ab]/20">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Sobre esta campanha</h2>
                  <p className="text-white/80 leading-relaxed">{campaignData.fullDescription}</p>
                </CardContent>
              </Card>

              {/* Updates */}
              {campaignData.updates.length > 0 && (
                <Card className="bg-black/50 border border-[#0047ab]/20">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Atualizações</h2>
                    <div className="space-y-4">
                      {campaignData.updates.map((update, index) => (
                        <div key={index} className="border-l-2 border-[#0047ab]/30 pl-4">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span className="font-medium">{update.title}</span>
                            <span className="text-sm text-white/60">{new Date(update.date).toLocaleDateString('pt-BR')}</span>
                          </div>
                          <p className="text-white/70 text-sm">{update.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Progress Card */}
              <Card className="bg-black/50 border border-[#0047ab]/20">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Arrecadado</span>
                        <span>{progressPercentage.toFixed(0)}%</span>
                      </div>
                      <Progress value={progressPercentage} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <div className="text-2xl font-bold text-[#0047ab]">
                          R$ {campaignData.raised.toLocaleString('pt-BR')}
                        </div>
                        <div className="text-sm text-white/60">
                          de R$ {campaignData.goal.toLocaleString('pt-BR')}
                        </div>
                      </div>
                      
                      <div className="flex justify-between">
                        <div>
                          <div className="font-semibold">{campaignData.supporters}</div>
                          <div className="text-xs text-white/60">Apoiadores</div>
                        </div>
                        {campaignData.status === 'Ativa' && (
                          <div>
                            <div className="font-semibold">{campaignData.daysLeft}</div>
                            <div className="text-xs text-white/60">Dias restantes</div>
                          </div>
                        )}
                      </div>
                    </div>

                    {campaignData.status === 'Ativa' && (
                      <Button className="w-full bg-[#0047ab] hover:bg-[#0047ab]/90">
                        <Heart className="mr-2 h-4 w-4" />
                        Contribuir Agora
                      </Button>
                    )}

                    {campaignData.status === 'Finalizada' && (
                      <Button disabled className="w-full">
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Campanha Finalizada
                      </Button>
                    )}

                    {campaignData.status === 'Em breve' && (
                      <Button disabled className="w-full">
                        <Calendar className="mr-2 h-4 w-4" />
                        Em Breve
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Share Card */}
              <Card className="bg-black/50 border border-[#0047ab]/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Compartilhe esta campanha</h3>
                  <p className="text-sm text-white/70 mb-4">
                    Ajude a amplificar esta causa compartilhando com seus amigos e familiares.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Users className="mr-2 h-4 w-4" />
                    Compartilhar
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Campaign;