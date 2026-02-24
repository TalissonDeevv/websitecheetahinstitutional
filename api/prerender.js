// Vercel Edge Function para servir HTML com meta tags corretas para crawlers
// Arquivo: api/prerender.js

const CRAWLER_USER_AGENTS = [
  "facebookexternalhit",
  "Facebot",
  "LinkedInBot",
  "Twitterbot",
  "WhatsApp",
  "TelegramBot",
  "Discordbot",
  "Slackbot",
  "Embedly",
  "Pinterest",
  "redditbot",
];

const routes = {
  "/": {
    title: "Cheetah Solutions Network | Desenvolvimento de Software Sob Medida",
    description:
      "A Cheetah Solutions Network é uma software house especializada em desenvolvimento de software sob medida, criando sistemas, automações e plataformas digitais escaláveis para empresas que exigem performance e eficiência.",
    ogTitle: "Cheetah Solutions Network | Desenvolvimento de Software Sob Medida",
  },
  "/sobre": {
    title: "Cheetah Solutions Network | Quem Somos",
    description:
      "Conheça a Cheetah Solutions Network, uma software house especializada em soluções digitais sob medida para empresas que buscam performance, escalabilidade e eficiência.",
    ogTitle: "Quem Somos | Cheetah Solutions Network",
  },
  "/servicos": {
    title: "Cheetah Solutions Network | Nossos Serviços",
    description:
      "A Cheetah Solutions Network oferece desenvolvimento de software sob medida para empresas. Bots, websites, sistemas web, integrações, apps mobile e e-commerce.",
    ogTitle: "Nossos Serviços | Cheetah Solutions Network",
  },
  "/servicos/web": {
    title: "Cheetah Solutions Network | Desenvolvimento Web",
    description:
      "Websites que funcionam e convertem. A Cheetah Solutions Network desenvolve soluções web modernas, rápidas e otimizadas para SEO.",
    ogTitle: "Desenvolvimento Web | Cheetah Solutions Network",
  },
  "/servicos/mobile": {
    title: "Cheetah Solutions Network | Apps Mobile",
    description:
      "Apps que funcionam de verdade. A Cheetah Solutions Network desenvolve aplicativos Android e iOS com foco em performance e usabilidade.",
    ogTitle: "Apps Mobile | Cheetah Solutions Network",
  },
  "/servicos/bots": {
    title: "Cheetah Solutions Network | Bots e Automação",
    description:
      "Bots que trabalham por você. A Cheetah Solutions Network desenvolve bots inteligentes para Discord, Telegram e WhatsApp.",
    ogTitle: "Bots e Automação | Cheetah Solutions Network",
  },
  "/servicos/sistemas": {
    title: "Cheetah Solutions Network | Sistemas Personalizados",
    description:
      "Sistemas sob medida para empresas. A Cheetah Solutions Network desenvolve CRM, ERP, gestão de estoque, dashboards analíticos e portais de clientes.",
    ogTitle: "Sistemas Personalizados | Cheetah Solutions Network",
  },
  "/servicos/ecommerce": {
    title: "Cheetah Solutions Network | E-commerce",
    description:
      "Lojas virtuais que vendem. A Cheetah Solutions Network desenvolve e-commerces completos, otimizados para conversão e preparados para escalar.",
    ogTitle: "E-commerce | Cheetah Solutions Network",
  },
  "/servicos/integracoes": {
    title: "Cheetah Solutions Network | APIs e Integrações",
    description: "Sistemas que conversam. A Cheetah Solutions Network conecta diferentes sistemas e automatiza fluxos complexos.",
    ogTitle: "APIs e Integrações | Cheetah Solutions Network",
  },
  "/servicos/ia": {
    title: "Cheetah Solutions Network | Inteligência Artificial",
    description: "IA que resolve problemas reais. A Cheetah Solutions Network desenvolve chatbots inteligentes, assistentes virtuais e análise preditiva.",
    ogTitle: "Inteligência Artificial | Cheetah Solutions Network",
  },
  "/servicos/cloud": {
    title: "Cheetah Solutions Network | Cloud e Deploy",
    description:
      "Cloud Solutions & Deploy. A Cheetah Solutions Network publica suas aplicações com facilidade, performance otimizada e segurança garantida.",
    ogTitle: "Cloud e Deploy | Cheetah Solutions Network",
  },
  "/servicos/dashboards": {
    title: "Cheetah Solutions Network | Dashboards e BI",
    description:
      "Transforme dados em decisões. A Cheetah Solutions Network desenvolve dashboards interativos, KPIs em tempo real e relatórios automatizados.",
    ogTitle: "Dashboards e Business Intelligence | Cheetah Solutions Network",
  },
  "/servicos/seguranca": {
    title: "Cheetah Solutions Network | Segurança Digital",
    description:
      "Proteção que você pode confiar. A Cheetah Solutions Network implementa autenticação robusta, proteção contra ataques e conformidade LGPD.",
    ogTitle: "Segurança Digital | Cheetah Solutions Network",
  },
  "/equipe": {
    title: "Cheetah Solutions Network | Equipes Técnicas",
    description:
      "Uma equipe técnica com foco em resultado. Profissionais da Cheetah Solutions Network que entendem de código e de negócio.",
    ogTitle: "Equipes Técnicas | Cheetah Solutions Network",
  },
  "/artigos": {
    title: "Artigos Institucionais | Cheetah Solutions Network",
    description: "Artigos institucionais sobre a identidade, história e posicionamento da Cheetah Solutions Network. Conteúdo oficial e informativo.",
    ogTitle: "Artigos Institucionais | Cheetah Solutions Network",
  },
  "/atendimento": {
    title: "Central de Atendimento | Cheetah Solutions Network",
    description:
      "Central de atendimento da Cheetah Solutions Network. Suporte técnico especializado, acompanhamento de projetos e atendimento para clientes ativos.",
    ogTitle: "Central de Atendimento | Cheetah Solutions Network",
  },
  "/orcamento": {
    title: "Cheetah Solutions Network | Solicite Orçamento",
    description:
      "Preencha o formulário com as informações do seu projeto. A Cheetah Solutions Network retorna em até 48 horas com uma proposta detalhada.",
    ogTitle: "Solicite Orçamento | Cheetah Solutions Network",
  },
  "/comunidade": {
    title: "Comunidade de Programação e Tecnologia | Cheetah Solutions Network",
    description:
      "Participe da comunidade de desenvolvedores da Cheetah Solutions Network. Um espaço aberto para quem gosta de programação, tecnologia e desenvolvimento de software no Brasil.",
    ogTitle: "Comunidade de Programação e Tecnologia | Cheetah Solutions Network",
  },
  "/inscricoes": {
    title: "Trabalhe Conosco | Cheetah Solutions Network",
    description:
      "Junte-se à equipe da Cheetah Solutions Network. Vagas remotas para desenvolvedores, designers e profissionais de tecnologia. Projetos reais, remuneração justa e crescimento técnico.",
    ogTitle: "Trabalhe Conosco | Cheetah Solutions Network",
  },
  "/inscricoes": {
    title: "Cheetah Solutions Network | Trabalhe Conosco",
    description:
      "Junte-se à equipe da Cheetah Solutions Network. Vagas remotas para desenvolvedores, designers e profissionais de tecnologia. Projetos reais, remuneração justa e crescimento técnico.",
    ogTitle: "Trabalhe Conosco | Cheetah Solutions Network",
    ogDescription:
      "Conheça as áreas de atuação da Cheetah Solutions Network, inscreva-se em nosso banco de talentos e acompanhe futuras oportunidades técnicas.",
  },
  "/cheetah-solidaria": {
    title: "Cheetah Solutions Network | Cheetah Solidária",
    description:
      "Conheça a Cheetah Solidária, iniciativa de responsabilidade social da Cheetah Solutions Network em parceria com a AACD Teleton. Tecnologia e solidariedade transformando vidas.",
    ogTitle: "Cheetah Solidária | Cheetah Solutions Network",
  },
  "/faq": {
    title: "Cheetah Solutions Network | Perguntas Frequentes",
    description:
      "Respostas para as dúvidas mais comuns sobre os serviços da Cheetah Solutions Network. Prazos, tecnologias, pagamentos e suporte técnico.",
    ogTitle: "Perguntas Frequentes | Cheetah Solutions Network",
  },
  "/sugestoes": {
    title: "Cheetah Solutions Network | Sugestões e Melhorias",
    description:
      "Envie suas sugestões para a Cheetah Solutions Network. Sua opinião é fundamental para nossa evolução e melhoria contínua dos serviços.",
    ogTitle: "Sugestões e Melhorias | Cheetah Solutions Network",
  },
  "/diretrizes": {
    title: "Cheetah Solutions Network | Diretrizes e Privacidade",
    description:
      "Diretrizes, políticas de privacidade e conformidade da Cheetah Solutions Network. Transparência e governança corporativa.",
    ogTitle: "Diretrizes e Privacidade | Cheetah Solutions Network",
  },
};

const BASE_URL = "https://www.cheetahsolutions.com.br";
const DEFAULT_IMAGE = "https://i.ibb.co/gFfPkTZ7/Cheetah-Solutions-Network.png";

function isCrawler(userAgent) {
  if (!userAgent) return false;
  return CRAWLER_USER_AGENTS.some((crawler) => userAgent.toLowerCase().includes(crawler.toLowerCase()));
}

function generateHTML(path) {
  const metadata = routes[path] || routes["/"];
  const fullUrl = `${BASE_URL}${path === "/" ? "" : path}`;
  const ogDescription = metadata.ogDescription || metadata.description;

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${metadata.title}</title>
  <meta name="description" content="${metadata.description}">

  <!-- Open Graph -->
  <meta property="og:title" content="${metadata.ogTitle}">
  <meta property="og:description" content="${ogDescription}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${fullUrl}">
  <meta property="og:image" content="${DEFAULT_IMAGE}">
  <meta property="og:site_name" content="Cheetah Solutions Network">
  <meta property="og:locale" content="pt_BR">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${metadata.ogTitle}">
  <meta name="twitter:description" content="${ogDescription}">
  <meta name="twitter:image" content="${DEFAULT_IMAGE}">
  <meta name="twitter:site" content="@cheetahsolutionsbr">

  <link rel="canonical" href="${fullUrl}">
</head>
<body>
  <h1>${metadata.ogTitle}</h1>
  <p>${metadata.description}</p>
  <a href="${fullUrl}">Visite Cheetah Solutions Network</a>
</body>
</html>`;
}

export default function handler(req, res) {
  const userAgent = req.headers["user-agent"] || "";
  const path = req.query.path || "/";

  if (isCrawler(userAgent)) {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.status(200).send(generateHTML("/" + path));
  } else {
    // Redireciona para a SPA
    res.redirect(302, "/" + path);
  }
}

export const config = {
  runtime: "edge",
};