import { Copyright, FileText, Code, Shield, Lock, AlertTriangle, Scale, CheckCircle, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const IntellectualPropertyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Copyright className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Política Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">Propriedade</span> Intelectual
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Direitos autorais, marcas registradas, licenciamento de software e proteção 
              de ativos intelectuais desenvolvidos e utilizados em nossos projetos.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Última atualização: Dezembro de 2024 | Versão 2.0
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 1: Definições */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">1. Definições</h2>
            
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Para fins desta política, consideram-se as seguintes definições:
              </p>

              <div className="grid grid-cols-1 gap-4 my-6">
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Propriedade Intelectual (PI)</h4>
                    <p className="text-sm text-muted-foreground">
                      Conjunto de direitos sobre criações do intelecto humano, incluindo invenções, 
                      obras literárias e artísticas, designs, símbolos, nomes e imagens utilizados 
                      no comércio.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Código-Fonte</h4>
                    <p className="text-sm text-muted-foreground">
                      Conjunto de instruções escritas em linguagem de programação que compõem 
                      um software, incluindo comentários, documentação inline e estrutura de arquivos.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Trabalho Derivado</h4>
                    <p className="text-sm text-muted-foreground">
                      Obra baseada em trabalho preexistente, como tradução, adaptação, arranjo, 
                      modificação ou qualquer outra forma de transformação.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Licença</h4>
                    <p className="text-sm text-muted-foreground">
                      Autorização formal concedida pelo titular de direitos para uso, modificação 
                      ou distribuição de sua propriedade intelectual sob termos específicos.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 2: Propriedade do Código */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">2. Propriedade do Código Desenvolvido</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mb-4">Código Desenvolvido sob Contrato</h3>
              <p className="text-muted-foreground leading-relaxed">
                Salvo disposição contratual em contrário, os direitos sobre código desenvolvido 
                especificamente para um cliente são definidos da seguinte forma:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <Card className="bg-card/50 border-green-500/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <h4 className="font-semibold">Direitos do Cliente</h4>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Uso irrestrito do software desenvolvido</li>
                      <li>• Modificação do código para uso próprio</li>
                      <li>• Acesso completo ao código-fonte</li>
                      <li>• Contratação de terceiros para manutenção</li>
                      <li>• Propriedade das regras de negócio implementadas</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Shield className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold">Direitos Retidos pela Cheetah</h4>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Bibliotecas e frameworks proprietários</li>
                      <li>• Componentes reutilizáveis genéricos</li>
                      <li>• Metodologias e processos de desenvolvimento</li>
                      <li>• Conhecimento técnico adquirido</li>
                      <li>• Direito de uso em portfólio</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">Transferência de Propriedade</h3>
              <p className="text-muted-foreground leading-relaxed">
                A transferência completa de propriedade intelectual (work-for-hire) pode ser 
                acordada mediante contrato específico, com as seguintes condições:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Cláusula expressa no contrato de prestação de serviços</li>
                <li>• Definição clara do escopo da transferência</li>
                <li>• Possível ajuste no valor do contrato</li>
                <li>• Exclusão de bibliotecas de terceiros licenciadas</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Código Proprietário da Cheetah</h3>
              <p className="text-muted-foreground leading-relaxed">
                Determinados componentes desenvolvidos pela Cheetah Solutions Network são 
                propriedade exclusiva da empresa e licenciados para uso nos projetos:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Frameworks internos de desenvolvimento</li>
                <li>• Bibliotecas de componentes UI</li>
                <li>• Ferramentas de automação e DevOps</li>
                <li>• Integrações padronizadas com serviços de terceiros</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 3: Licenciamento */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">3. Licenciamento de Software</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mb-4">Uso de Software de Terceiros</h3>
              <p className="text-muted-foreground leading-relaxed">
                Os projetos desenvolvidos podem utilizar bibliotecas e frameworks de terceiros, 
                sujeitos às suas respectivas licenças. A Cheetah Solutions Network:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Mantém inventário de dependências e suas licenças</li>
                <li>• Verifica compatibilidade de licenças antes da adoção</li>
                <li>• Documenta atribuições necessárias</li>
                <li>• Cumpre obrigações de licenças copyleft quando aplicável</li>
                <li>• Fornece lista de dependências ao cliente mediante solicitação</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Tipos de Licença Utilizadas</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold">Tipo</th>
                      <th className="text-left py-3 px-4 font-semibold">Exemplos</th>
                      <th className="text-left py-3 px-4 font-semibold">Implicações</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Permissivas</td>
                      <td className="py-3 px-4">MIT, Apache 2.0, BSD</td>
                      <td className="py-3 px-4 text-sm">Uso livre, manter atribuição</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Copyleft Fraco</td>
                      <td className="py-3 px-4">LGPL, MPL</td>
                      <td className="py-3 px-4 text-sm">Modificações devem ser abertas</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Copyleft Forte</td>
                      <td className="py-3 px-4">GPL, AGPL</td>
                      <td className="py-3 px-4 text-sm">Projeto derivado deve ser GPL</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Proprietárias</td>
                      <td className="py-3 px-4">Comerciais</td>
                      <td className="py-3 px-4 text-sm">Conforme termos específicos</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">Licença de Uso para Clientes</h3>
              <p className="text-muted-foreground leading-relaxed">
                Quando não há transferência de propriedade, o cliente recebe licença de uso 
                com as seguintes características:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>Perpétua:</strong> Sem prazo de expiração após pagamento integral</li>
                <li><strong>Não-exclusiva:</strong> Não impede uso de tecnologias similares em outros projetos</li>
                <li><strong>Intransferível:</strong> Não pode ser cedida a terceiros sem autorização</li>
                <li><strong>Uso comercial:</strong> Permitido para fins comerciais do cliente</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 4: Marcas e Identidade */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">4. Marcas e Identidade Visual</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mb-4">Marcas da Cheetah Solutions Network</h3>
              <p className="text-muted-foreground leading-relaxed">
                Os seguintes elementos são marcas registradas ou em processo de registro:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Nome "Cheetah Solutions Network" e variações</li>
                <li>• Logotipo e símbolos gráficos da empresa</li>
                <li>• Nomes de produtos e serviços</li>
                <li>• Slogans e taglines</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Uso das Marcas</h3>
              <p className="text-muted-foreground leading-relaxed">
                O uso de nossas marcas por terceiros requer autorização prévia e deve seguir 
                as diretrizes de identidade visual. Usos permitidos incluem:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Referência ao nome da empresa em contexto editorial</li>
                <li>• Menção em portfólio de clientes (com aprovação)</li>
                <li>• Uso do selo "Desenvolvido por Cheetah Solutions" quando acordado</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Marca d'Água e Créditos</h3>
              <p className="text-muted-foreground leading-relaxed">
                Por padrão, não inserimos marcas d'água ou créditos visíveis nos produtos 
                desenvolvidos para clientes, exceto quando:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Acordado contratualmente</li>
                <li>• Exigido por licenças de terceiros utilizadas</li>
                <li>• Solicitado pelo cliente</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 5: Confidencialidade */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">5. Confidencialidade e Segredos Comerciais</h2>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mb-4">Informações Confidenciais</h3>
              <p className="text-muted-foreground leading-relaxed">
                Consideram-se informações confidenciais:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Código-fonte proprietário e algoritmos</li>
                <li>• Metodologias e processos internos</li>
                <li>• Dados de clientes e projetos</li>
                <li>• Estratégias comerciais e roadmaps</li>
                <li>• Informações financeiras e contratuais</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Acordo de Confidencialidade (NDA)</h3>
              <p className="text-muted-foreground leading-relaxed">
                Projetos que envolvam informações sensíveis são protegidos por NDA específico, 
                que estabelece:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Definição precisa das informações protegidas</li>
                <li>• Obrigações de sigilo das partes</li>
                <li>• Período de confidencialidade (geralmente 5 anos)</li>
                <li>• Exceções e exclusões aplicáveis</li>
                <li>• Penalidades por descumprimento</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Proteção de Segredos Comerciais</h3>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas técnicas e organizacionais para proteção:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Controle de acesso baseado em necessidade (need-to-know)</li>
                <li>• Criptografia de dados sensíveis</li>
                <li>• Acordos de confidencialidade com colaboradores</li>
                <li>• Monitoramento de acessos e vazamentos</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 6: Violações */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">6. Violações e Medidas Legais</h2>

            <div className="p-6 bg-destructive/10 border border-destructive/20 rounded-xl mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Aviso Legal</h4>
                  <p className="text-muted-foreground">
                    A violação de direitos de propriedade intelectual é passível de ação judicial, 
                    incluindo pedido de indenização por danos materiais e morais, além de medidas 
                    criminais quando aplicável.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl font-semibold mb-4">6.1. Tipos de Violação</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Reprodução não autorizada de software</li>
                <li>• Uso indevido de marcas registradas</li>
                <li>• Divulgação de informações confidenciais</li>
                <li>• Apropriação de código-fonte sem licença</li>
                <li>• Engenharia reversa não autorizada</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">6.2. Procedimentos</h3>
              <p className="text-muted-foreground leading-relaxed">
                Em caso de identificação de violação:
              </p>
              <ol className="text-muted-foreground space-y-2">
                <li>1. Documentação da violação e coleta de evidências</li>
                <li>2. Notificação extrajudicial solicitando cessação</li>
                <li>3. Negociação de acordo, se aplicável</li>
                <li>4. Ação judicial para proteção de direitos</li>
              </ol>

              <h3 className="text-xl font-semibold mt-8 mb-4">6.3. Denúncia de Violações</h3>
              <p className="text-muted-foreground leading-relaxed">
                Para reportar violações de propriedade intelectual envolvendo a Cheetah Solutions Network:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>E-mail:</strong> contatocheetahsolutions@gmail.com</li>
                <li><strong>Assunto:</strong> [PI] Denúncia de Violação</li>
                <li>Inclua evidências e informações de contato</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Scale className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-4">Questões sobre Propriedade Intelectual</h3>
                    <p className="text-muted-foreground mb-4">
                      Para esclarecimentos sobre direitos de propriedade intelectual em projetos:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li><strong>E-mail:</strong> contatocheetahsolutions@gmail.com</li>
                      <li><strong>Resposta:</strong> Até 5 dias úteis</li>
                      <li><strong>Documentação:</strong> Disponível mediante solicitação</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IntellectualPropertyPolicy;