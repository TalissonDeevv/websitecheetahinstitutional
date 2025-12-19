
import { Book, MessageCircle, Bot, Zap, Shield, Code, Database, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Knowledge = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="bg-[#0047ab]/10 border border-[#0047ab]/30 rounded-full px-6 py-2 backdrop-blur-sm">
                <span className="text-[#0047ab] text-sm font-medium">Base de Conhecimento</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-white">Documentação</span><br />
              <span className="text-[#0047ab]">Técnica</span>
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Guia completo sobre nossos produtos, integrações e soluções técnicas. 
              Encontre respostas para suas dúvidas e aprenda a aproveitar ao máximo nossas ferramentas.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="atendefly" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 bg-black/50 border border-[#0047ab]/20 mb-8">
              <TabsTrigger value="atendefly" className="data-[state=active]:bg-[#0047ab] data-[state=active]:text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                Atendefly
              </TabsTrigger>
              <TabsTrigger value="bots" className="data-[state=active]:bg-[#0047ab] data-[state=active]:text-white">
                <Bot className="w-4 h-4 mr-2" />
                Bots
              </TabsTrigger>
              <TabsTrigger value="integracoes" className="data-[state=active]:bg-[#0047ab] data-[state=active]:text-white">
                <Zap className="w-4 h-4 mr-2" />
                Integrações
              </TabsTrigger>
              <TabsTrigger value="faq" className="data-[state=active]:bg-[#0047ab] data-[state=active]:text-white">
                <Book className="w-4 h-4 mr-2" />
                FAQ Técnico
              </TabsTrigger>
            </TabsList>

            {/* Atendefly Documentation */}
            <TabsContent value="atendefly">
              <Card className="bg-black/50 border-[#0047ab]/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-3">
                    <MessageCircle className="h-8 w-8 text-[#0047ab]" />
                    Documentação do Atendefly
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="overview" className="border-[#0047ab]/20">
                      <AccordionTrigger className="text-white hover:text-[#0047ab]">
                        Como funciona o Atendefly?
                      </AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        <div className="space-y-4">
                          <p>O Atendefly é um sistema inteligente de atendimento via WhatsApp que utiliza IA para automatizar e otimizar o atendimento ao cliente.</p>
                          
                          <h4 className="text-[#0047ab] font-semibold">Componentes principais:</h4>
                          <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Motor de IA:</strong> Processa mensagens e gera respostas contextuais</li>
                            <li><strong>Dashboard Web:</strong> Interface para gerenciar conversas e configurações</li>
                            <li><strong>API WhatsApp:</strong> Integração oficial com WhatsApp Business</li>
                            <li><strong>Sistema de Filas:</strong> Distribui conversas entre atendentes</li>
                            <li><strong>Analytics:</strong> Relatórios detalhados de performance</li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="setup" className="border-[#0047ab]/20">
                      <AccordionTrigger className="text-white hover:text-[#0047ab]">
                        Configuração Inicial
                      </AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        <div className="space-y-4">
                          <h4 className="text-[#0047ab] font-semibold">Passo a passo:</h4>
                          <ol className="list-decimal pl-6 space-y-2">
                            <li>Conecte sua conta WhatsApp Business</li>
                            <li>Configure respostas automáticas personalizadas</li>
                            <li>Defina horários de atendimento</li>
                            <li>Configure fluxos de conversa</li>
                            <li>Integre com seu CRM (opcional)</li>
                            <li>Teste o sistema com conversas simuladas</li>
                          </ol>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="features" className="border-[#0047ab]/20">
                      <AccordionTrigger className="text-white hover:text-[#0047ab]">
                        Recursos Avançados
                      </AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-[#0047ab] font-semibold mb-2">Automação</h4>
                            <ul className="list-disc pl-4 space-y-1 text-sm">
                              <li>Respostas automáticas inteligentes</li>
                              <li>Classificação automática de mensagens</li>
                              <li>Roteamento baseado em palavras-chave</li>
                              <li>Agendamento de mensagens</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-[#0047ab] font-semibold mb-2">Gestão</h4>
                            <ul className="list-disc pl-4 space-y-1 text-sm">
                              <li>Dashboard em tempo real</li>
                              <li>Histórico completo de conversas</li>
                              <li>Métricas de performance</li>
                              <li>Relatórios personalizados</li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Bots Documentation */}
            <TabsContent value="bots">
              <Card className="bg-black/50 border-[#0047ab]/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-3">
                    <Bot className="h-8 w-8 text-[#0047ab]" />
                    Como Usar os Bots
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="types" className="border-[#0047ab]/20">
                      <AccordionTrigger className="text-white hover:text-[#0047ab]">
                        Tipos de Bots Disponíveis
                      </AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-[#0047ab]/10 rounded-lg p-4 border border-[#0047ab]/20">
                              <h4 className="text-[#0047ab] font-semibold mb-2">Bot Discord</h4>
                              <ul className="list-disc pl-4 space-y-1 text-sm">
                                <li>Moderação automática</li>
                                <li>Comandos personalizados</li>
                                <li>Sistema de níveis</li>
                                <li>Música e entretenimento</li>
                              </ul>
                            </div>
                            <div className="bg-[#0047ab]/10 rounded-lg p-4 border border-[#0047ab]/20">
                              <h4 className="text-[#0047ab] font-semibold mb-2">Bot Telegram</h4>
                              <ul className="list-disc pl-4 space-y-1 text-sm">
                                <li>Atendimento automatizado</li>
                                <li>Notificações em massa</li>
                                <li>Integração com sistemas</li>
                                <li>Coleta de dados</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="commands" className="border-[#0047ab]/20">
                      <AccordionTrigger className="text-white hover:text-[#0047ab]">
                        Comandos e Configurações
                      </AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        <div className="space-y-4">
                          <h4 className="text-[#0047ab] font-semibold">Comandos Básicos do Discord:</h4>
                          <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
                            <div className="space-y-2">
                              <div><span className="text-[#0047ab]">!help</span> - Lista todos os comandos disponíveis</div>
                              <div><span className="text-[#0047ab]">!moderar @usuário</span> - Aplica moderação</div>
                              <div><span className="text-[#0047ab]">!config</span> - Abre painel de configurações</div>
                              <div><span className="text-[#0047ab]">!stats</span> - Mostra estatísticas do servidor</div>
                            </div>
                          </div>
                          
                          <h4 className="text-[#0047ab] font-semibold">Comandos do Telegram:</h4>
                          <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
                            <div className="space-y-2">
                              <div><span className="text-[#0047ab]">/start</span> - Inicia o bot</div>
                              <div><span className="text-[#0047ab]">/ajuda</span> - Lista de comandos</div>
                              <div><span className="text-[#0047ab]">/contato</span> - Informações de contato</div>
                              <div><span className="text-[#0047ab]">/status</span> - Status do sistema</div>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="customization" className="border-[#0047ab]/20">
                      <AccordionTrigger className="text-white hover:text-[#0047ab]">
                        Personalização e Deploy
                      </AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        <div className="space-y-4">
                          <h4 className="text-[#0047ab] font-semibold">Processo de Personalização:</h4>
                          <ol className="list-decimal pl-6 space-y-2">
                            <li>Análise dos requisitos específicos</li>
                            <li>Desenvolvimento das funcionalidades customizadas</li>
                            <li>Testes em ambiente controlado</li>
                            <li>Deploy em servidor dedicado</li>
                            <li>Monitoramento e suporte contínuo</li>
                          </ol>
                          
                          <div className="bg-[#0047ab]/10 rounded-lg p-4 border border-[#0047ab]/20">
                            <h5 className="text-[#0047ab] font-semibold mb-2">Tecnologias Utilizadas:</h5>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div>• Node.js</div>
                              <div>• Python</div>
                              <div>• Discord.js</div>
                              <div>• Telegram Bot API</div>
                              <div>• PostgreSQL</div>
                              <div>• Redis</div>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Integrations Documentation */}
            <TabsContent value="integracoes">
              <Card className="bg-black/50 border-[#0047ab]/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-3">
                    <Zap className="h-8 w-8 text-[#0047ab]" />
                    Integrações Possíveis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="crm" className="border-[#0047ab]/20">
                      <AccordionTrigger className="text-white hover:text-[#0047ab]">
                        CRM e Sistemas de Vendas
                      </AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-[#0047ab]/10 rounded-lg p-4 border border-[#0047ab]/20">
                              <h4 className="text-[#0047ab] font-semibold mb-2">Salesforce</h4>
                              <ul className="list-disc pl-4 space-y-1 text-sm">
                                <li>Sincronização de leads</li>
                                <li>Atualização automática</li>
                                <li>Relatórios integrados</li>
                              </ul>
                            </div>
                            <div className="bg-[#0047ab]/10 rounded-lg p-4 border border-[#0047ab]/20">
                              <h4 className="text-[#0047ab] font-semibold mb-2">HubSpot</h4>
                              <ul className="list-disc pl-4 space-y-1 text-sm">
                                <li>Gestão de contatos</li>
                                <li>Pipeline de vendas</li>
                                <li>Automação de marketing</li>
                              </ul>
                            </div>
                            <div className="bg-[#0047ab]/10 rounded-lg p-4 border border-[#0047ab]/20">
                              <h4 className="text-[#0047ab] font-semibold mb-2">Pipedrive</h4>
                              <ul className="list-disc pl-4 space-y-1 text-sm">
                                <li>Controle de negócios</li>
                                <li>Atividades automáticas</li>
                                <li>Métricas de conversão</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="ecommerce" className="border-[#0047ab]/20">
                      <AccordionTrigger className="text-white hover:text-[#0047ab]">
                        E-commerce e Pagamentos
                      </AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        <div className="space-y-4">
                          <h4 className="text-[#0047ab] font-semibold">Plataformas Suportadas:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="text-white font-medium mb-2">Lojas Virtuais:</h5>
                              <ul className="list-disc pl-4 space-y-1 text-sm">
                                <li>Shopify</li>
                                <li>WooCommerce</li>
                                <li>Magento</li>
                                <li>Vtex</li>
                                <li>Tray</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="text-white font-medium mb-2">Gateways de Pagamento:</h5>
                              <ul className="list-disc pl-4 space-y-1 text-sm">
                                <li>Stripe</li>
                                <li>PayPal</li>
                                <li>PagSeguro</li>
                                <li>Mercado Pago</li>
                                <li>Cielo</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="apis" className="border-[#0047ab]/20">
                      <AccordionTrigger className="text-white hover:text-[#0047ab]">
                        APIs e Webhooks
                      </AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        <div className="space-y-4">
                          <h4 className="text-[#0047ab] font-semibold">Métodos de Integração:</h4>
                          
                          <div className="bg-black/30 rounded-lg p-4">
                            <h5 className="text-white font-medium mb-2">REST API</h5>
                            <p className="text-sm text-white/70 mb-2">Integração via chamadas HTTP padrão</p>
                            <div className="font-mono text-xs bg-black/50 p-2 rounded">
                              GET /api/v1/conversations<br/>
                              POST /api/v1/messages<br/>
                              PUT /api/v1/settings
                            </div>
                          </div>

                          <div className="bg-black/30 rounded-lg p-4">
                            <h5 className="text-white font-medium mb-2">Webhooks</h5>
                            <p className="text-sm text-white/70 mb-2">Notificações em tempo real para eventos</p>
                            <ul className="list-disc pl-4 space-y-1 text-sm">
                              <li>Nova mensagem recebida</li>
                              <li>Conversa finalizada</li>
                              <li>Cliente desconectado</li>
                              <li>Erro no sistema</li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Technical FAQ */}
            <TabsContent value="faq">
              <Card className="bg-black/50 border-[#0047ab]/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-3">
                    <Book className="h-8 w-8 text-[#0047ab]" />
                    FAQ Técnico
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="faq1" className="border-[#0047ab]/20">
                      <AccordionTrigger className="text-white hover:text-[#0047ab]">
                        Como funciona a segurança dos dados?
                      </AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        <div className="space-y-3">
                          <p>Implementamos múltiplas camadas de segurança:</p>
                          <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Criptografia TLS 1.3:</strong> Todas as comunicações são criptografadas</li>
                            <li><strong>Autenticação OAuth 2.0:</strong> Controle de acesso seguro</li>
                            <li><strong>Conformidade LGPD:</strong> Processamento adequado de dados pessoais</li>
                            <li><strong>Backup automático:</strong> Dados protegidos com redundância</li>
                            <li><strong>Monitoramento 24/7:</strong> Detecção proativa de ameaças</li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="faq2" className="border-[#0047ab]/20">
                      <AccordionTrigger className="text-white hover:text-[#0047ab]">
                        Qual a capacidade de processamento?
                      </AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        <div className="space-y-3">
                          <p>Nossas soluções são dimensionadas para diferentes volumes:</p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-[#0047ab]/10 rounded-lg p-3 border border-[#0047ab]/20">
                              <h5 className="text-[#0047ab] font-semibold">Básico</h5>
                              <ul className="text-xs space-y-1 mt-2">
                                <li>1.000 msgs/hora</li>
                                <li>10 conversas simultâneas</li>
                                <li>99.5% uptime</li>
                              </ul>
                            </div>
                            <div className="bg-[#0047ab]/10 rounded-lg p-3 border border-[#0047ab]/20">
                              <h5 className="text-[#0047ab] font-semibold">Profissional</h5>
                              <ul className="text-xs space-y-1 mt-2">
                                <li>10.000 msgs/hora</li>
                                <li>100 conversas simultâneas</li>
                                <li>99.9% uptime</li>
                              </ul>
                            </div>
                            <div className="bg-[#0047ab]/10 rounded-lg p-3 border border-[#0047ab]/20">
                              <h5 className="text-[#0047ab] font-semibold">Enterprise</h5>
                              <ul className="text-xs space-y-1 mt-2">
                                <li>Ilimitado</li>
                                <li>Conversas ilimitadas</li>
                                <li>99.99% uptime</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="faq3" className="border-[#0047ab]/20">
                      <AccordionTrigger className="text-white hover:text-[#0047ab]">
                        Como é feito o suporte técnico?
                      </AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        <div className="space-y-3">
                          <p>Oferecemos suporte completo em múltiplos canais:</p>
                          <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Suporte 24/7:</strong> WhatsApp e chat online</li>
                            <li><strong>Documentação técnica:</strong> Guias detalhados e exemplos</li>
                            <li><strong>Treinamento:</strong> Capacitação da equipe</li>
                            <li><strong>Consultoria:</strong> Orientação para otimização</li>
                            <li><strong>SLA garantido:</strong> Tempo de resposta definido por contrato</li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="faq4" className="border-[#0047ab]/20">
                      <AccordionTrigger className="text-white hover:text-[#0047ab]">
                        É possível personalizar completamente?
                      </AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        <div className="space-y-3">
                          <p>Sim, oferecemos total flexibilidade de customização:</p>
                          <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Interface personalizada:</strong> Cores, logo e layout customizados</li>
                            <li><strong>Fluxos específicos:</strong> Adaptação às suas regras de negócio</li>
                            <li><strong>Integrações exclusivas:</strong> Conectividade com sistemas internos</li>
                            <li><strong>Recursos únicos:</strong> Desenvolvimento de funcionalidades específicas</li>
                            <li><strong>White label:</strong> Solução com sua marca</li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="faq5" className="border-[#0047ab]/20">
                      <AccordionTrigger className="text-white hover:text-[#0047ab]">
                        Como migrar de outro sistema?
                      </AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        <div className="space-y-3">
                          <p>Processo de migração sem interrupções:</p>
                          <ol className="list-decimal pl-6 space-y-1">
                            <li><strong>Análise atual:</strong> Avaliação do sistema existente</li>
                            <li><strong>Planejamento:</strong> Cronograma detalhado de migração</li>
                            <li><strong>Importação de dados:</strong> Transferência segura do histórico</li>
                            <li><strong>Testes paralelos:</strong> Validação antes da ativação</li>
                            <li><strong>Go-live assistido:</strong> Acompanhamento na transição</li>
                            <li><strong>Suporte pós-migração:</strong> Monitoramento e ajustes</li>
                          </ol>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Knowledge;
