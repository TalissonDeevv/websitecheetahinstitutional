import { Shield, Lock, Eye, CheckCircle, AlertTriangle, Server, Key, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Security = () => {
  const securityMeasures = [
    {
      icon: Shield,
      title: "Criptografia Avançada",
      description: "Protegemos seus dados com criptografia de ponta a ponta",
      details: [
        "Criptografia AES-256 para dados em repouso",
        "Criptografia TLS 1.3 para dados em trânsito",
        "Chaves de criptografia gerenciadas com HSMs"
      ]
    },
    {
      icon: Lock,
      title: "Autenticação Multifator",
      description: "Reforçamos a segurança com autenticação de dois fatores",
      details: [
        "Suporte para TOTP (Google Authenticator, Authy)",
        "Verificação por SMS",
        "Autenticação biométrica"
      ]
    },
    {
      icon: Eye,
      title: "Monitoramento Contínuo",
      description: "Monitoramos nossos sistemas 24/7 para detectar ameaças",
      details: [
        "SIEM (Security Information and Event Management)",
        "IDS/IPS (Intrusion Detection/Prevention Systems)",
        "Análise de logs em tempo real"
      ]
    },
    {
      icon: CheckCircle,
      title: "Testes de Segurança Regulares",
      description: "Realizamos testes de segurança para identificar vulnerabilidades",
      details: [
        "Testes de penetração (pentests)",
        "Análise de vulnerabilidades automatizada",
        "Auditorias de segurança independentes"
      ]
    }
  ];

  const complianceStandards = [
    {
      icon: Server,
      title: "LGPD",
      description: "Conformidade com a Lei Geral de Proteção de Dados do Brasil"
    },
    {
      icon: Key,
      title: "GDPR",
      description: "Conformidade com o Regulamento Geral de Proteção de Dados da UE"
    },
    {
      icon: Database,
      title: "ISO 27001",
      description: "Certificação ISO 27001 para sistemas de gestão de segurança da informação"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 animate-fade-in">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Segurança </span>
            <span className="text-[#0047ab]">Digital</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Nosso compromisso com a proteção dos seus dados e informações sensíveis
          </p>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Nossas Medidas de Segurança
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityMeasures.map((measure, index) => (
              <Card key={index} className="bg-gradient-to-br from-[#0047ab]/10 to-black/50 border-[#0047ab]/20 hover:border-[#0047ab]/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <div className="bg-[#0047ab]/10 rounded-lg p-3 border border-[#0047ab]/20">
                      <measure.icon className="h-6 w-6 text-[#0047ab]" />
                    </div>
                    {measure.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{measure.description}</p>
                  <ul className="space-y-2">
                    {measure.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3 text-sm text-gray-300">
                        <div className="w-2 h-2 bg-[#0047ab] rounded-full mt-2 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Conformidade
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <Card key={index} className="bg-black/50 border-[#0047ab]/20 text-center">
                <CardContent className="p-6">
                  <div className="bg-[#0047ab]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-[#0047ab]/20">
                    <standard.icon className="h-8 w-8 text-[#0047ab]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{standard.title}</h3>
                  <p className="text-sm text-gray-300">{standard.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-r from-[#0047ab]/10 to-purple-500/10 border-[#0047ab]/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-8 w-8 text-[#0047ab] mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Resposta a Incidentes
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Em caso de incidente de segurança, nossa equipe está preparada para responder 
                    rapidamente e mitigar os danos. Mantemos um plano de resposta a incidentes 
                    detalhado e realizamos simulações regulares para garantir a eficácia.
                  </p>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Detecção e análise</li>
                    <li>Contenção e erradicação</li>
                    <li>Recuperação</li>
                    <li>Análise pós-incidente</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact for Security Questions */}
      <section className="py-16 px-4 bg-[#0047ab]/5">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Dúvidas sobre Segurança?
          </h2>
          <p className="text-gray-300 mb-6">
            Para questões de segurança específicas ou para reportar uma vulnerabilidade, 
            entre em contato com nossa equipe de segurança.
          </p>
          <div className="bg-black/30 rounded-lg p-6 border border-[#0047ab]/20">
            <p className="text-white/80 text-sm">
              <strong className="text-[#0047ab]">E-mail de Segurança:</strong><br />
              contatocheetahsolutions@gmail.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Security;
