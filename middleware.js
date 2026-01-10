// Vercel Edge Middleware para detectar crawlers e servir meta tags corretas
// Este arquivo deve estar na raiz do projeto

export const config = {
  matcher: [
    '/',
    '/sobre',
    '/servicos',
    '/servicos/:path*',
    '/equipe',
    '/blog',
    '/contato',
    '/orcamento',
    '/developers',
    '/inscricoes',
    '/cheetah-solidaria',
    '/faq',
    '/sugestoes',
    '/diretrizes',
  ],
};

const CRAWLER_USER_AGENTS = [
  'facebookexternalhit',
  'Facebot',
  'LinkedInBot',
  'Twitterbot',
  'WhatsApp',
  'TelegramBot',
  'Discordbot',
  'Slackbot',
  'Embedly',
  'Pinterest',
  'redditbot',
  'Googlebot',
  'bingbot',
];

const routes = {
  '/': {
    title: 'Cheetah Solutions Network | Desenvolvimento de Software Sob Medida',
    description: 'A Cheetah Solutions Network é uma software house especializada em desenvolvimento de software sob medida, criando sistemas, automações e plataformas digitais escaláveis para empresas que exigem performance e eficiência.',
    ogTitle: 'Cheetah Solutions Network | Desenvolvimento de Software Sob Medida',
  },
  '/sobre': {
    title: 'Cheetah Solutions Network | Quem Somos',
    description: 'Conheça a Cheetah Solutions Network, uma software house especializada em soluções digitais sob medida para empresas que buscam performance, escalabilidade e eficiência.',
    ogTitle: 'Quem Somos | Cheetah Solutions Network',
  },
  '/servicos': {
    title: 'Cheetah Solutions Network | Nossos Serviços',
    description: 'A Cheetah Solutions Network oferece desenvolvimento de software sob medida para empresas. Bots, websites, sistemas web, integrações, apps mobile e e-commerce.',
    ogTitle: 'Nossos Serviços | Cheetah Solutions Network',
  },
  '/servicos/web': {
    title: 'Cheetah Solutions Network | Desenvolvimento Web',
    description: 'Websites que funcionam e convertem. A Cheetah Solutions Network desenvolve soluções web modernas, rápidas e otimizadas para SEO.',
    ogTitle: 'Desenvolvimento Web | Cheetah Solutions Network',
  },
  '/servicos/mobile': {
    title: 'Cheetah Solutions Network | Apps Mobile',
    description: 'Apps que funcionam de verdade. A Cheetah Solutions Network desenvolve aplicativos Android e iOS com foco em performance e usabilidade.',
    ogTitle: 'Apps Mobile | Cheetah Solutions Network',
  },
  '/servicos/bots': {
    title: 'Cheetah Solutions Network | Bots e Automação',
    description: 'Bots que trabalham por você. A Cheetah Solutions Network desenvolve bots inteligentes para Discord, Telegram e WhatsApp.',
    ogTitle: 'Bots e Automação | Cheetah Solutions Network',
  },
  '/servicos/sistemas': {
    title: 'Cheetah Solutions Network | Sistemas Personalizados',
    description: 'Sistemas sob medida para empresas. A Cheetah Solutions Network desenvolve CRM, ERP, gestão de estoque, dashboards analíticos e portais de clientes.',
    ogTitle: 'Sistemas Personalizados | Cheetah Solutions Network',
  },
  '/servicos/ecommerce': {
    title: 'Cheetah Solutions Network | E-commerce',
    description: 'Lojas virtuais que vendem. A Cheetah Solutions Network desenvolve e-commerces completos, otimizados para conversão e preparados para escalar.',
    ogTitle: 'E-commerce | Cheetah Solutions Network',
  },
  '/servicos/integracoes': {
    title: 'Cheetah Solutions Network | APIs e Integrações',
    description: 'Sistemas que conversam. A Cheetah Solutions Network conecta diferentes sistemas e automatiza fluxos complexos.',
    ogTitle: 'APIs e Integrações | Cheetah Solutions Network',
  },
  '/servicos/ia': {
    title: 'Cheetah Solutions Network | Inteligência Artificial',
    description: 'IA que resolve problemas reais. A Cheetah Solutions Network desenvolve chatbots inteligentes, assistentes virtuais e análise preditiva.',
    ogTitle: 'Inteligência Artificial | Cheetah Solutions Network',
  },
  '/servicos/cloud': {
    title: 'Cheetah Solutions Network | Cloud e Deploy',
    description: 'Cloud Solutions & Deploy. A Cheetah Solutions Network publica suas aplicações com facilidade, performance otimizada e segurança garantida.',
    ogTitle: 'Cloud e Deploy | Cheetah Solutions Network',
  },
  '/servicos/dashboards': {
    title: 'Cheetah Solutions Network | Dashboards e BI',
    description: 'Transforme dados em decisões. A Cheetah Solutions Network desenvolve dashboards interativos, KPIs em tempo real e relatórios automatizados.',
    ogTitle: 'Dashboards e Business Intelligence | Cheetah Solutions Network',
  },
  '/servicos/seguranca': {
    title: 'Cheetah Solutions Network | Segurança Digital',
    description: 'Proteção que você pode confiar. A Cheetah Solutions Network implementa autenticação robusta, proteção contra ataques e conformidade LGPD.',
    ogTitle: 'Segurança Digital | Cheetah Solutions Network',
  },
  '/equipe': {
    title: 'Cheetah Solutions Network | Equipes Técnicas',
    description: 'Uma equipe técnica com foco em resultado. Profissionais da Cheetah Solutions Network que entendem de código e de negócio.',
    ogTitle: 'Equipes Técnicas | Cheetah Solutions Network',
  },
  '/blog': {
    title: 'Cheetah Solutions Network | Blogs e Artigos',
    description: 'Conteúdo técnico da Cheetah Solutions Network sobre desenvolvimento, tecnologia e boas práticas. Direto ao ponto.',
    ogTitle: 'Blogs e Artigos | Cheetah Solutions Network',
  },
  '/contato': {
    title: 'Cheetah Solutions Network | Fale Conosco',
    description: 'Entre em contato com a Cheetah Solutions Network. Sem compromisso. Conte o que precisa e avaliamos se faz sentido trabalharmos juntos.',
    ogTitle: 'Fale Conosco | Cheetah Solutions Network',
  },
  '/orcamento': {
    title: 'Cheetah Solutions Network | Solicite Orçamento',
    description: 'Preencha o formulário com as informações do seu projeto. A Cheetah Solutions Network retorna em até 48 horas com uma proposta detalhada.',
    ogTitle: 'Solicite Orçamento | Cheetah Solutions Network',
  },
  '/developers': {
    title: 'Cheetah Solutions Network | Cheetah Developers Brasil',
    description: 'Comunidade oficial de desenvolvedores da Cheetah Solutions Network. Aprenda, colabore e evolua com outros profissionais de tecnologia.',
    ogTitle: 'Cheetah Developers Brasil | Cheetah Solutions Network',
  },
  '/inscricoes': {
    title: 'Trabalhe Conosco | Cheetah Solutions Network',
    description: 'Junte-se à equipe da Cheetah Solutions Network. Vagas remotas para desenvolvedores, designers e profissionais de tecnologia. Projetos reais, remuneração justa e crescimento técnico.',
    ogTitle: 'Trabalhe Conosco | Cheetah Solutions Network',
  },
  '/cheetah-solidaria': {
    title: 'Cheetah Solutions Network | Cheetah Solidária',
    description: 'Conheça a Cheetah Solidária, iniciativa de responsabilidade social da Cheetah Solutions Network em parceria com a AACD Teleton. Tecnologia e solidariedade transformando vidas.',
    ogTitle: 'Cheetah Solidária | Cheetah Solutions Network',
  },
  '/faq': {
    title: 'Cheetah Solutions Network | Perguntas Frequentes',
    description: 'Respostas para as dúvidas mais comuns sobre os serviços da Cheetah Solutions Network. Prazos, tecnologias, pagamentos e suporte técnico.',
    ogTitle: 'Perguntas Frequentes | Cheetah Solutions Network',
  },
  '/sugestoes': {
    title: 'Cheetah Solutions Network | Sugestões e Melhorias',
    description: 'Envie suas sugestões para a Cheetah Solutions Network. Sua opinião é fundamental para nossa evolução e melhoria contínua dos serviços.',
    ogTitle: 'Sugestões e Melhorias | Cheetah Solutions Network',
  },
  '/diretrizes': {
    title: 'Cheetah Solutions Network | Diretrizes e Privacidade',
    description: 'Diretrizes, políticas de privacidade e conformidade da Cheetah Solutions Network. Transparência e governança corporativa.',
    ogTitle: 'Diretrizes e Privacidade | Cheetah Solutions Network',
  },
};

const BASE_URL = 'https://www.cheetahsolutions.com.br';
const DEFAULT_IMAGE = 'https://i.ibb.co/gFfPkTZ7/Cheetah-Solutions-Network.png';

function isCrawler(userAgent) {
  if (!userAgent) return false;
  return CRAWLER_USER_AGENTS.some(crawler => 
    userAgent.toLowerCase().includes(crawler.toLowerCase())
  );
}

function generateHTML(path) {
  const metadata = routes[path] || routes['/'];
  const fullUrl = `${BASE_URL}${path === '/' ? '' : path}`;
  
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${metadata.title}</title>
  <meta name="description" content="${metadata.description}">
  
  <!-- Open Graph -->
  <meta property="og:title" content="${metadata.ogTitle}">
  <meta property="og:description" content="${metadata.description}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${fullUrl}">
  <meta property="og:image" content="${DEFAULT_IMAGE}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:site_name" content="Cheetah Solutions Network">
  <meta property="og:locale" content="pt_BR">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${metadata.ogTitle}">
  <meta name="twitter:description" content="${metadata.description}">
  <meta name="twitter:image" content="${DEFAULT_IMAGE}">
  <meta name="twitter:site" content="@cheetahsolutionsbr">
  
  <link rel="canonical" href="${fullUrl}">
  <link rel="icon" href="https://files.catbox.moe/46lzz6.ico" type="image/x-icon">
</head>
<body>
  <main>
    <h1>${metadata.ogTitle}</h1>
    <p>${metadata.description}</p>
    <a href="${fullUrl}">Visite Cheetah Solutions Network</a>
  </main>
</body>
</html>`;
}

export default function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';
  const url = new URL(request.url);
  const hostname = url.hostname;
  const path = url.pathname;
  
  // Redirect non-www to www (301 permanent redirect)
  if (hostname === 'cheetahsolutions.com.br') {
    const newUrl = new URL(request.url);
    newUrl.hostname = 'www.cheetahsolutions.com.br';
    return Response.redirect(newUrl.toString(), 301);
  }
  
  // Se for um crawler, retorna HTML estático com meta tags
  if (isCrawler(userAgent)) {
    const html = generateHTML(path);
    return new Response(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  }
  
  // Para usuários normais, continua para a SPA
  return;
}