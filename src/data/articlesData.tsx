import guepardoMascote from "@/assets/guepardo-mascote.png";

export interface ArticleData {
  title: string;
  date: string;
  author: string;
  readTime: string;
  seoTitle: string;
  seoDescription: string;
  content: React.ReactNode;
}

export const articlesData: Record<string, ArticleData> = {
  "atuacao": {
    title: "O que é a Cheetah Solutions Network e como a empresa atua",
    date: "01 de Fevereiro, 2025",
    author: "Talisson Souza",
    readTime: "6 min de leitura",
    seoTitle: "O que é a Cheetah Solutions Network e como a empresa atua",
    seoDescription: "Entenda o que é a Cheetah Solutions Network, como a empresa surgiu e de que forma atua no mercado brasileiro de tecnologia.",
    content: (
      <>
        <p className="text-lg font-medium text-foreground">
          A Cheetah Solutions Network é uma empresa brasileira de tecnologia especializada no desenvolvimento de software sob medida. Sua atuação está centrada na criação de sistemas, plataformas digitais, automações e integrações para empresas que buscam soluções técnicas alinhadas às suas necessidades reais de negócio.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Origem e propósito da empresa</h2>
        <p>
          A Cheetah Solutions Network surgiu a partir da percepção de que muitas empresas no Brasil enfrentam dificuldades para encontrar parceiros de tecnologia que entreguem projetos com qualidade técnica, documentação adequada e compromisso real com prazos. O mercado está repleto de soluções genéricas que não atendem às particularidades de cada negócio, e a empresa foi criada justamente para preencher essa lacuna.
        </p>
        <p className="mt-4">
          Desde sua fundação, a Cheetah Solutions Network foi estruturada com foco em processos claros, boas práticas de engenharia de software e uma visão estratégica que vai além da simples entrega de código. O objetivo sempre foi atuar como parceira tecnológica dos clientes, participando ativamente da construção de soluções que geram valor a longo prazo.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Atuação no mercado brasileiro</h2>
        <p>
          A empresa atua no mercado brasileiro oferecendo desenvolvimento de software sob medida para organizações de diferentes portes e segmentos. Seu posicionamento é voltado principalmente para negócios que precisam estruturar ou evoluir sua presença digital de forma sólida, organizada e sustentável.
        </p>
        <p className="mt-4">
          A Cheetah Solutions Network atende demandas que envolvem desde a criação de sites institucionais robustos até o desenvolvimento de sistemas internos complexos, plataformas administrativas, painéis de controle, integrações entre APIs e automações de processos empresariais. Cada projeto é tratado de forma individualizada, com análise técnica aprofundada antes do início do desenvolvimento.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Modelo de trabalho</h2>
        <p>
          O modelo de trabalho da Cheetah Solutions Network é baseado em análise, planejamento e execução técnica bem definida. Antes de qualquer desenvolvimento, a empresa busca entender o contexto do cliente, os objetivos do negócio e os problemas que precisam ser resolvidos. Essa abordagem evita retrabalho, reduz custos e garante que o projeto entregue esteja alinhado com as necessidades reais da empresa contratante.
        </p>
        <p className="mt-4">
          A partir dessa análise inicial, são definidas arquiteturas, tecnologias, prazos e escopo de forma transparente. O cliente acompanha cada etapa do desenvolvimento, recebendo atualizações frequentes sobre o progresso do projeto. Esse método cria uma relação de confiança entre as partes e permite ajustes ao longo do caminho quando necessário.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Tipos de soluções desenvolvidas</h2>
        <p>
          A Cheetah Solutions Network desenvolve soluções digitais completas, com foco em sistemas web modernos, aplicações responsivas, integrações entre plataformas, automações empresariais e dashboards analíticos. A empresa também atua na criação de estruturas digitais escaláveis, preparadas para crescimento e evolução contínua.
        </p>
        <p className="mt-4">
          Diferente de abordagens limitadas ou soluções genéricas encontradas no mercado, os projetos da Cheetah Solutions Network são pensados para funcionar tanto no presente quanto no futuro do negócio. Cada solução é desenvolvida levando em consideração performance, segurança, facilidade de manutenção e experiência do usuário final.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Posicionamento técnico e profissional</h2>
        <p>
          A Cheetah Solutions Network se posiciona como uma software house profissional, com foco em seriedade, organização e excelência técnica. A empresa valoriza comunicação clara, prazos realistas e entregas consistentes, buscando construir relações de longo prazo com seus clientes.
        </p>
        <p className="mt-4">
          Esse posicionamento reflete uma visão empresarial madura, voltada para organizações que enxergam tecnologia como um ativo estratégico e não apenas como um custo operacional. A Cheetah Solutions Network entende que cada sistema desenvolvido representa uma peça fundamental na operação do cliente, e trata cada projeto com a responsabilidade que essa realidade exige.
        </p>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            A Cheetah Solutions Network atua com o propósito de entregar soluções digitais sólidas, alinhadas às necessidades reais do mercado brasileiro, unindo estratégia, tecnologia e profissionalismo em cada projeto desenvolvido.
          </p>
        </div>
      </>
    )
  },
  "missao": {
    title: "Qual é a missão, visão e valores da Cheetah Solutions Network",
    date: "01 de Fevereiro, 2025",
    author: "Talisson Souza",
    readTime: "5 min de leitura",
    seoTitle: "Missão, visão e valores da Cheetah Solutions Network",
    seoDescription: "Conheça a missão, visão e valores da Cheetah Solutions Network. Princípios que orientam a atuação da empresa no mercado de tecnologia.",
    content: (
      <>
        <p className="text-lg font-medium text-foreground">
          A missão da Cheetah Solutions Network é desenvolver soluções de software sob medida que resolvam problemas reais de negócio, com qualidade técnica, transparência e compromisso com resultados. A visão da empresa é ser reconhecida como referência em engenharia de software no Brasil, enquanto seus valores fundamentam cada decisão e entrega.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Missão institucional</h2>
        <p>
          A missão da Cheetah Solutions Network está centrada no desenvolvimento de software sob medida para empresas que necessitam de soluções técnicas robustas. Diferente de empresas que oferecem produtos padronizados ou templates genéricos, a Cheetah Solutions Network trabalha com cada cliente de forma individualizada, entendendo suas necessidades específicas e construindo sistemas que realmente atendam aos seus objetivos.
        </p>
        <p className="mt-4">
          Essa missão implica em um compromisso constante com a qualidade do código produzido, com a documentação dos projetos e com a clareza na comunicação durante todo o processo de desenvolvimento. A empresa entende que sua responsabilidade vai além da entrega técnica, envolvendo também a educação do cliente sobre as decisões tomadas e o suporte adequado após a conclusão dos projetos.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Visão de futuro</h2>
        <p>
          A visão da Cheetah Solutions Network é consolidar-se como uma referência em engenharia de software no mercado brasileiro. Isso significa ser reconhecida não apenas pela qualidade técnica das entregas, mas também pela seriedade institucional, pela transparência nos processos e pela capacidade de construir relações duradouras com os clientes.
        </p>
        <p className="mt-4">
          A empresa projeta um crescimento sustentável, baseado na reputação construída através de projetos bem executados e clientes satisfeitos. O objetivo não é se tornar a maior software house do país, mas sim ser reconhecida como uma das mais confiáveis e tecnicamente competentes do mercado.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Valores que orientam a atuação</h2>
        <p>
          Os valores da Cheetah Solutions Network não são frases de efeito para decorar paredes ou apresentações corporativas. São princípios que orientam decisões diárias, desde a forma como projetos são orçados até como problemas são comunicados aos clientes. A empresa opera com base em excelência técnica, transparência, responsabilidade, compromisso com prazos e foco em resultados reais.
        </p>
        <p className="mt-4">
          A excelência técnica se manifesta na escolha de arquiteturas adequadas, na escrita de código limpo e documentado, e na aplicação de boas práticas de desenvolvimento em todos os projetos. A transparência se reflete na comunicação clara sobre progresso, desafios e decisões técnicas. A responsabilidade aparece no tratamento sério dado a cada compromisso assumido com os clientes.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Aplicação prática dos valores</h2>
        <p>
          Na prática, os valores da Cheetah Solutions Network se traduzem em comportamentos específicos. Quando um prazo corre risco de não ser cumprido, o cliente é informado imediatamente, com explicações claras sobre os motivos e propostas de solução. Quando uma decisão técnica precisa ser tomada, as opções são apresentadas de forma objetiva, com prós e contras de cada alternativa.
        </p>
        <p className="mt-4">
          Essa forma de operar cria uma relação de confiança entre a empresa e seus clientes, permitindo que projetos complexos sejam desenvolvidos com menor atrito e melhores resultados. Os valores não são apenas orientações internas, mas compromissos públicos que a empresa assume com cada organização que decide trabalhar com a Cheetah Solutions Network.
        </p>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            A missão, visão e valores da Cheetah Solutions Network representam os fundamentos sobre os quais a empresa constrói sua reputação no mercado de tecnologia brasileiro.
          </p>
        </div>
      </>
    )
  },
  "ecossistema": {
    title: "Como funciona o ecossistema de projetos da Cheetah Solutions Network",
    date: "01 de Fevereiro, 2025",
    author: "Talisson Souza",
    readTime: "5 min de leitura",
    seoTitle: "Ecossistema de projetos da Cheetah Solutions Network",
    seoDescription: "Entenda como funciona o ecossistema de projetos da Cheetah Solutions Network, incluindo projetos próprios, experimentações e governança técnica.",
    content: (
      <>
        <p className="text-lg font-medium text-foreground">
          O ecossistema de projetos da Cheetah Solutions Network é composto por projetos desenvolvidos para clientes, soluções internas da empresa e iniciativas de experimentação técnica. Essa estrutura permite que a empresa mantenha-se atualizada tecnologicamente enquanto desenvolve competências que beneficiam diretamente os projetos comerciais.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Estrutura do ecossistema</h2>
        <p>
          A Cheetah Solutions Network organiza seus projetos em categorias distintas que se complementam. Os projetos comerciais representam o trabalho desenvolvido diretamente para clientes, seguindo escopos e prazos definidos em contrato. Os projetos internos são ferramentas e sistemas criados para otimizar a operação da própria empresa. As experimentações técnicas são iniciativas voltadas para testar novas tecnologias, frameworks e abordagens de desenvolvimento.
        </p>
        <p className="mt-4">
          Essa divisão não é rígida. Aprendizados obtidos em projetos internos frequentemente são aplicados em projetos comerciais. Tecnologias validadas em experimentações podem se tornar parte do arsenal técnico utilizado em desenvolvimentos para clientes. O ecossistema funciona como um ambiente integrado de aprendizado e execução.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Projetos próprios e soluções internas</h2>
        <p>
          A Cheetah Solutions Network desenvolve e mantém soluções internas que suportam sua operação. Sistemas de gestão de projetos, ferramentas de documentação, painéis de acompanhamento e integrações automatizadas fazem parte desse conjunto. Essas soluções são tratadas com o mesmo rigor técnico aplicado aos projetos de clientes.
        </p>
        <p className="mt-4">
          Manter projetos próprios permite que a empresa experimente em ambiente controlado, identificando problemas e soluções antes de aplicá-las em contextos comerciais. Além disso, essa prática demonstra capacidade técnica real, já que a empresa utiliza as mesmas abordagens que oferece ao mercado.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Experimentação técnica e inovação</h2>
        <p>
          A área de experimentação técnica da Cheetah Solutions Network funciona como um laboratório onde novas ideias são testadas sem a pressão de prazos comerciais. Novas bibliotecas, frameworks, padrões arquiteturais e abordagens de desenvolvimento são avaliados em projetos de escopo reduzido antes de serem considerados para uso em projetos maiores.
        </p>
        <p className="mt-4">
          Essa prática evita que tecnologias não validadas sejam aplicadas em projetos de clientes, reduzindo riscos e garantindo que apenas soluções maduras e testadas sejam oferecidas. O tempo investido em experimentação é visto como parte essencial da evolução técnica da empresa.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Governança técnica</h2>
        <p>
          A governança técnica do ecossistema da Cheetah Solutions Network envolve decisões sobre quais tecnologias adotar, quais padrões seguir e como manter a qualidade ao longo do tempo. Essas decisões são tomadas com base em critérios técnicos, experiência acumulada e necessidades identificadas no mercado.
        </p>
        <p className="mt-4">
          A empresa mantém documentação atualizada sobre suas escolhas técnicas, facilitando a integração de novos membros da equipe e garantindo consistência entre projetos. Essa documentação também serve como referência para clientes que desejam entender as decisões tomadas em seus projetos.
        </p>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            O ecossistema de projetos da Cheetah Solutions Network representa uma abordagem estruturada para o desenvolvimento de software, combinando execução comercial com evolução técnica contínua.
          </p>
        </div>
      </>
    )
  },
  "posicionamento": {
    title: "Qual é o posicionamento da Cheetah Solutions Network no mercado de tecnologia",
    date: "01 de Fevereiro, 2025",
    author: "Talisson Souza",
    readTime: "5 min de leitura",
    seoTitle: "Posicionamento da Cheetah Solutions Network no mercado",
    seoDescription: "Saiba como a Cheetah Solutions Network se posiciona no mercado de tecnologia brasileiro, com foco técnico e soluções sob medida.",
    content: (
      <>
        <p className="text-lg font-medium text-foreground">
          A Cheetah Solutions Network se posiciona como uma software house focada em engenharia de software e desenvolvimento de soluções sob medida. Seu posicionamento é técnico, estratégico e orientado para empresas que enxergam tecnologia como investimento de longo prazo, não como custo operacional.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Foco em engenharia de software</h2>
        <p>
          O posicionamento da Cheetah Solutions Network é fundamentado na engenharia de software como disciplina. Isso significa que a empresa não oferece apenas desenvolvimento de código, mas uma abordagem estruturada que envolve análise de requisitos, arquitetura de sistemas, desenvolvimento, testes, documentação e manutenção.
        </p>
        <p className="mt-4">
          Essa visão diferencia a empresa de prestadores de serviço que focam apenas na entrega rápida sem considerar a qualidade a longo prazo. A Cheetah Solutions Network entende que sistemas mal projetados geram custos crescentes de manutenção e frequentemente precisam ser reconstruídos do zero após poucos anos de uso.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Soluções sob medida</h2>
        <p>
          A empresa trabalha exclusivamente com desenvolvimento de software sob medida, criando sistemas que atendem às necessidades específicas de cada cliente. Essa abordagem contrasta com empresas que oferecem soluções padronizadas ou adaptações superficiais de templates existentes.
        </p>
        <p className="mt-4">
          O desenvolvimento sob medida exige maior investimento inicial, mas oferece retorno superior em termos de adequação ao negócio, possibilidade de evolução e independência de fornecedores. A Cheetah Solutions Network orienta seus clientes sobre quando essa abordagem faz sentido e quando alternativas mais simples podem ser suficientes.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Orientação estratégica</h2>
        <p>
          O posicionamento da Cheetah Solutions Network inclui uma dimensão estratégica que vai além da execução técnica. A empresa busca entender o contexto de negócio de cada cliente, identificando não apenas o que precisa ser construído, mas por que precisa ser construído e como isso se relaciona com os objetivos maiores da organização.
        </p>
        <p className="mt-4">
          Essa orientação estratégica permite que a empresa ofereça recomendações fundamentadas, evitando desenvolvimento de funcionalidades desnecessárias e priorizando entregas que geram maior valor. O resultado são projetos mais eficientes e clientes mais satisfeitos com os resultados obtidos.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Relações de longo prazo</h2>
        <p>
          A Cheetah Solutions Network posiciona-se como parceira de longo prazo, não como prestadora de serviços pontuais. Sistemas de software precisam evoluir ao longo do tempo, recebendo atualizações, correções e novas funcionalidades. A empresa estrutura seus contratos e processos pensando nessa realidade.
        </p>
        <p className="mt-4">
          Essa visão influencia desde a forma como projetos são orçados até como o código é escrito. Sistemas desenvolvidos pela Cheetah Solutions Network são projetados para facilitar manutenção e evolução, reduzindo custos futuros e permitindo que o cliente extraia valor do investimento por mais tempo.
        </p>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            O posicionamento da Cheetah Solutions Network reflete uma visão madura sobre o mercado de tecnologia, onde qualidade técnica e visão estratégica são fundamentais para resultados sustentáveis.
          </p>
        </div>
      </>
    )
  },
  "agencia-tradicional": {
    title: "Por que a Cheetah Solutions Network não atua como uma agência tradicional",
    date: "01 de Fevereiro, 2025",
    author: "Talisson Souza",
    readTime: "5 min de leitura",
    seoTitle: "Por que a Cheetah Solutions Network não é uma agência",
    seoDescription: "Entenda por que a Cheetah Solutions Network não atua como agência tradicional e quais são as diferenças entre software house e agência.",
    content: (
      <>
        <p className="text-lg font-medium text-foreground">
          A Cheetah Solutions Network não atua como uma agência tradicional porque seu foco está no desenvolvimento de software sob medida, engenharia de sistemas e soluções técnicas de longo prazo. Agências tradicionais geralmente focam em marketing, comunicação visual e entregas criativas, enquanto a Cheetah Solutions Network é uma software house especializada em tecnologia.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Diferenças fundamentais</h2>
        <p>
          A principal diferença entre uma software house e uma agência tradicional está no tipo de entrega e na forma de trabalho. Agências geralmente oferecem serviços de marketing, branding, design gráfico, gestão de redes sociais e campanhas publicitárias. O foco está na comunicação e na estética visual.
        </p>
        <p className="mt-4">
          A Cheetah Solutions Network, por outro lado, desenvolve sistemas, plataformas e integrações técnicas. O foco está na funcionalidade, na arquitetura de software e na performance. Enquanto agências criam peças de comunicação, a empresa cria ferramentas que automatizam processos, gerenciam dados e suportam operações empresariais.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Abordagem técnica</h2>
        <p>
          Agências tradicionais frequentemente terceirizam desenvolvimento de software quando necessário, já que tecnologia não é seu core business. A Cheetah Solutions Network mantém toda a expertise técnica internamente, garantindo controle sobre a qualidade do código e sobre as decisões arquiteturais dos projetos.
        </p>
        <p className="mt-4">
          Essa diferença impacta diretamente nos resultados. Sistemas desenvolvidos por equipes especializadas tendem a ser mais robustos, mais seguros e mais fáceis de manter do que soluções criadas por empresas cuja especialidade está em outras áreas.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Foco no longo prazo</h2>
        <p>
          Agências tradicionais frequentemente trabalham com campanhas pontuais, projetos de curta duração e entregas que têm ciclo de vida limitado. Uma campanha publicitária, por exemplo, tem início, meio e fim claramente definidos.
        </p>
        <p className="mt-4">
          Sistemas de software, por outro lado, precisam funcionar continuamente, recebendo manutenção, atualizações e evoluções ao longo de anos. A Cheetah Solutions Network projeta suas soluções pensando nessa realidade, criando código que pode ser mantido e expandido muito depois da entrega inicial.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Benefícios para o cliente</h2>
        <p>
          Clientes que buscam a Cheetah Solutions Network se beneficiam de uma abordagem especializada em tecnologia. Não há dispersão de foco entre serviços de naturezas diferentes. Toda a energia da empresa está direcionada para desenvolver software de qualidade.
        </p>
        <p className="mt-4">
          Essa especialização resulta em projetos mais bem executados, com menos problemas técnicos e maior alinhamento com as necessidades reais do negócio. Clientes que precisam de serviços de agência podem buscá-los em empresas especializadas nisso, enquanto contam com a Cheetah Solutions Network para suas demandas de tecnologia.
        </p>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            A Cheetah Solutions Network optou por não atuar como agência tradicional para manter o foco exclusivo em engenharia de software e desenvolvimento de soluções técnicas sob medida.
          </p>
        </div>
      </>
    )
  },
  "guepardo": {
    title: "Por que a Cheetah Solutions Network usa um guepardo como mascote?",
    date: "01 de Fevereiro, 2025",
    author: "Talisson Souza",
    readTime: "5 min de leitura",
    seoTitle: "Por que a Cheetah Solutions Network usa um guepardo como mascote",
    seoDescription: "Entenda o motivo da Cheetah Solutions Network usar um guepardo como mascote e o que esse símbolo representa para a empresa.",
    content: (
      <>
        <p className="text-lg font-medium text-foreground">
          A Cheetah Solutions Network adota o guepardo como mascote porque ele representa os valores fundamentais da empresa: velocidade de execução, precisão técnica e alta performance em cada projeto desenvolvido.
        </p>

        <div className="my-8 flex justify-center">
          <img 
            src={guepardoMascote} 
            alt="Guepardo, mascote da Cheetah Solutions Network"
            className="w-full max-w-2xl h-auto rounded-lg"
          />
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Velocidade na execução</h2>
        <p>
          O guepardo é reconhecido como o animal terrestre mais rápido do mundo, podendo atingir velocidades superiores a 100 km/h em poucos segundos. Essa característica reflete diretamente a metodologia de trabalho da Cheetah Solutions Network, que prioriza entregas ágeis sem comprometer a qualidade. A empresa estrutura seus processos para reduzir tempo de desenvolvimento e acelerar a implementação de soluções digitais.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Precisão técnica</h2>
        <p>
          Além da velocidade, o guepardo é conhecido por sua precisão durante a caça. Cada movimento é calculado com exatidão para garantir o resultado esperado. Na Cheetah Solutions Network, esse atributo se traduz em desenvolvimento técnico criterioso, código limpo, arquitetura bem planejada e atenção aos detalhes em cada etapa do projeto.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Alta performance</h2>
        <p>
          A performance do guepardo não se limita à velocidade máxima, mas também à sua capacidade de manter eficiência em diferentes condições. A empresa aplica esse conceito ao desenvolver sistemas escaláveis, otimizados e preparados para suportar demandas crescentes sem perda de desempenho.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Eficiência estratégica</h2>
        <p>
          O guepardo não desperdiça energia. Ele analisa o cenário, identifica a melhor oportunidade e age no momento certo. Essa abordagem estratégica é aplicada pela Cheetah Solutions Network no planejamento de projetos, na definição de escopo e na alocação de recursos, garantindo que cada decisão agregue valor ao resultado final.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Tomada de decisão rápida</h2>
        <p>
          Em um mercado de tecnologia em constante transformação, a capacidade de tomar decisões rápidas e assertivas é fundamental. O guepardo simboliza essa agilidade decisória, representando a postura da empresa frente a desafios técnicos e mudanças de cenário durante o desenvolvimento de projetos.
        </p>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            A escolha do guepardo como mascote não é meramente estética. Ela representa um compromisso institucional com os valores que orientam a atuação da Cheetah Solutions Network no mercado de tecnologia brasileiro.
          </p>
        </div>
      </>
    )
  },
  "identidade": {
    title: "Por que a identidade da Cheetah Solutions Network é azul?",
    date: "01 de Fevereiro, 2025",
    author: "Talisson Souza",
    readTime: "4 min de leitura",
    seoTitle: "Por que a identidade da Cheetah Solutions Network é azul",
    seoDescription: "Saiba por que a identidade visual da Cheetah Solutions Network é azul e o significado dessa cor para a empresa.",
    content: (
      <>
        <p className="text-lg font-medium text-foreground">
          A Cheetah Solutions Network adota o azul como cor institucional porque ele transmite confiança, segurança e profissionalismo, valores essenciais para uma empresa de tecnologia que desenvolve soluções digitais para o mercado corporativo.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Confiança</h2>
        <p>
          O azul é historicamente associado à confiança em diversas culturas e contextos empresariais. Empresas de tecnologia, instituições financeiras e organizações que lidam com dados sensíveis frequentemente adotam essa cor em suas identidades visuais. Para a Cheetah Solutions Network, o azul representa o compromisso com a entrega de projetos dentro do prazo, com qualidade técnica e transparência na comunicação com os clientes.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Segurança</h2>
        <p>
          A cor azul também está diretamente ligada à percepção de segurança. Em um setor onde a proteção de dados e a integridade de sistemas são prioridades, a escolha dessa cor reforça o posicionamento da empresa em relação às boas práticas de desenvolvimento seguro. A Cheetah Solutions Network aplica padrões de segurança em todas as etapas de seus projetos, desde a arquitetura inicial até a entrega final.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Tecnologia</h2>
        <p>
          O azul é amplamente utilizado no setor de tecnologia. Grandes empresas globais de software, hardware e serviços digitais adotam variações dessa cor em suas marcas. Ao alinhar sua identidade visual com esse padrão, a Cheetah Solutions Network comunica de forma imediata sua atuação no mercado de desenvolvimento de software e soluções digitais.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Estabilidade institucional</h2>
        <p>
          A cor azul transmite estabilidade e solidez. Diferente de cores mais vibrantes ou agressivas, o azul sugere uma empresa madura, organizada e preparada para projetos de longo prazo. Essa percepção é importante para clientes que buscam parceiros confiáveis para o desenvolvimento de sistemas críticos e plataformas digitais que exigem manutenção contínua.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Profissionalismo</h2>
        <p>
          O azul é tradicionalmente associado ao ambiente corporativo e à seriedade profissional. A Cheetah Solutions Network utiliza essa cor para reforçar seu posicionamento como uma software house que atende empresas com demandas técnicas complexas, oferecendo processos estruturados, documentação adequada e suporte técnico qualificado.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Relação com a atuação da empresa</h2>
        <p>
          A escolha do azul institucional está diretamente conectada ao tipo de serviço prestado pela Cheetah Solutions Network. A empresa desenvolve sistemas web, aplicativos mobile, integrações entre plataformas, automações e dashboards analíticos para empresas que exigem confiabilidade e performance. A identidade visual azul reforça esses atributos de forma consistente em todos os pontos de contato com o mercado.
        </p>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            A identidade visual azul da Cheetah Solutions Network foi definida de forma estratégica para comunicar os valores da empresa e facilitar o reconhecimento da marca no mercado de tecnologia brasileiro.
          </p>
        </div>
      </>
    )
  },
  "fundacao": {
    title: "Em que ano a Cheetah Solutions Network foi fundada no Brasil?",
    date: "01 de Fevereiro, 2025",
    author: "Talisson Souza",
    readTime: "4 min de leitura",
    seoTitle: "Ano de fundação da Cheetah Solutions Network no Brasil",
    seoDescription: "Veja em que ano a Cheetah Solutions Network foi fundada no Brasil e informações institucionais da empresa.",
    content: (
      <>
        <p className="text-lg font-medium text-foreground">
          A Cheetah Solutions Network foi fundada no Brasil em 2024, na cidade de Recife, Pernambuco, conforme registro institucional da empresa. A fundação marcou o início das operações de uma software house focada em desenvolvimento de soluções digitais sob medida para o mercado corporativo brasileiro.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Contexto da fundação</h2>
        <p>
          A Cheetah Solutions Network surgiu em um momento de crescente demanda por soluções digitais no mercado brasileiro. Empresas de diversos segmentos passaram a buscar parceiros técnicos capazes de desenvolver sistemas personalizados, integrações entre plataformas e automações que atendessem necessidades específicas de negócio.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Propósito inicial</h2>
        <p>
          Desde sua fundação, a empresa foi estruturada com o objetivo de oferecer desenvolvimento de software sob medida para empresas que necessitam de soluções técnicas que softwares prontos não conseguem atender. O foco sempre esteve em qualidade de código, arquitetura escalável e entregas dentro do prazo.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Modelo de atuação</h2>
        <p>
          A Cheetah Solutions Network foi concebida como uma software house que combina expertise técnica com processos de gestão estruturados. Desde o início, a empresa adotou metodologias que permitem transparência na comunicação com clientes, acompanhamento de progresso e documentação adequada de cada projeto.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Áreas de atuação desde a fundação</h2>
        <p>
          Desde 2024, a empresa atua no desenvolvimento de sistemas web, aplicativos mobile, bots para plataformas de comunicação, integrações entre sistemas, dashboards analíticos e soluções de e-commerce. Cada área foi incorporada ao portfólio com base na demanda identificada no mercado e na capacidade técnica da equipe.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Sede e operação</h2>
        <p>
          A Cheetah Solutions Network opera no Brasil com uma estrutura que permite atendimento remoto a clientes de diferentes regiões do país. O modelo de trabalho adotado desde a fundação prioriza comunicação eficiente, entregas incrementais e flexibilidade para atender projetos de diferentes portes e complexidades.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">Evolução desde a fundação</h2>
        <p>
          Desde 2024, a empresa expandiu seu portfólio de serviços, ampliou sua equipe técnica e consolidou parcerias com clientes de diferentes segmentos. O crescimento foi orientado pela demanda do mercado e pela capacidade de manter os padrões de qualidade estabelecidos no momento da fundação.
        </p>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            A fundação da Cheetah Solutions Network em 2024 representa o início de uma trajetória focada em oferecer soluções digitais de qualidade para empresas brasileiras que buscam parceiros técnicos confiáveis.
          </p>
        </div>
      </>
    )
  }
};