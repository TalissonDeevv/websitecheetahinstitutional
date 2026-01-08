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
    title: 'Cheetah Solutions | Desenvolvimento de Software Sob Medida',
    description: 'Criamos sistemas, aplicações e plataformas digitais escaláveis, unindo engenharia de software, automação e design profissional para transformar ideias em soluções tecnológicas reais.',
    ogTitle: 'Cheetah Solutions | Desenvolvimento de Software Sob Medida',
  },
  '/sobre': {
    title: 'Cheetah Solutions | Quem Somos',
    description: 'Uma equipe técnica que entende de negócio. A Cheetah Solutions Network é uma software house focada na criação de soluções digitais sob medida para empresas que buscam eficiência, performance e escalabilidade.',
    ogTitle: 'Quem Somos | Cheetah Solutions',
  },
  '/servicos': {
    title: 'Cheetah Solutions | Nossos Serviços',
    description: 'Desenvolvimento de software sob medida para empresas. Bots, websites, sistemas web, integrações, apps mobile e e-commerce.',
    ogTitle: 'Nossos Serviços | Cheetah Solutions',
  },
  '/servicos/web': {
    title: 'Cheetah Solutions | Desenvolvimento Web',
    description: 'Websites que funcionam e convertem. Desenvolvemos soluções web modernas, rápidas e otimizadas para SEO.',
    ogTitle: 'Desenvolvimento Web | Cheetah Solutions',
  },
  '/servicos/mobile': {
    title: 'Cheetah Solutions | Apps Mobile',
    description: 'Apps que funcionam de verdade. Desenvolvemos aplicativos Android e iOS com foco em performance e usabilidade.',
    ogTitle: 'Apps Mobile | Cheetah Solutions',
  },
  '/servicos/bots': {
    title: 'Cheetah Solutions | Bots e Automação',
    description: 'Bots que trabalham por você. Desenvolvemos bots inteligentes para Discord, Telegram e WhatsApp.',
    ogTitle: 'Bots e Automação | Cheetah Solutions',
  },
  '/servicos/sistemas': {
    title: 'Cheetah Solutions | Sistemas Personalizados',
    description: 'Sistemas sob medida para empresas. CRM, ERP, gestão de estoque, dashboards analíticos e portais de clientes.',
    ogTitle: 'Sistemas Personalizados | Cheetah Solutions',
  },
  '/servicos/ecommerce': {
    title: 'Cheetah Solutions | E-commerce',
    description: 'Lojas virtuais que vendem. E-commerces completos, otimizados para conversão e preparados para escalar.',
    ogTitle: 'E-commerce | Cheetah Solutions',
  },
  '/servicos/integracoes': {
    title: 'Cheetah Solutions | APIs e Integrações',
    description: 'Sistemas que conversam. Conectamos diferentes sistemas e automatizamos fluxos complexos.',
    ogTitle: 'APIs e Integrações | Cheetah Solutions',
  },
  '/servicos/ia': {
    title: 'Cheetah Solutions | Inteligência Artificial',
    description: 'IA que resolve problemas reais. Chatbots inteligentes, assistentes virtuais e análise preditiva.',
    ogTitle: 'Inteligência Artificial | Cheetah Solutions',
  },
  '/servicos/cloud': {
    title: 'Cheetah Solutions | Cloud e Deploy',
    description: 'Cloud Solutions & Deploy. Publique suas aplicações com facilidade, performance otimizada e segurança garantida.',
    ogTitle: 'Cloud e Deploy | Cheetah Solutions',
  },
  '/servicos/dashboards': {
    title: 'Cheetah Solutions | Dashboards e BI',
    description: 'Transforme dados em decisões. Dashboards interativos, KPIs em tempo real e relatórios automatizados.',
    ogTitle: 'Dashboards e Business Intelligence | Cheetah Solutions',
  },
  '/servicos/seguranca': {
    title: 'Cheetah Solutions | Segurança Digital',
    description: 'Proteção que você pode confiar. Autenticação robusta, proteção contra ataques e conformidade LGPD.',
    ogTitle: 'Segurança Digital | Cheetah Solutions',
  },
  '/equipe': {
    title: 'Cheetah Solutions | Equipes Técnicas',
    description: 'Uma equipe técnica com foco em resultado. Profissionais que entendem de código e de negócio.',
    ogTitle: 'Equipes Técnicas | Cheetah Solutions',
  },
  '/blog': {
    title: 'Cheetah Solutions | Blogs e Artigos',
    description: 'Conteúdo técnico sobre desenvolvimento, tecnologia e boas práticas. Direto ao ponto.',
    ogTitle: 'Blogs e Artigos | Cheetah Solutions',
  },
  '/contato': {
    title: 'Cheetah Solutions | Fale Conosco',
    description: 'Entre em contato com a Cheetah Solutions. Sem compromisso. Conte o que precisa e avaliamos se faz sentido trabalharmos juntos.',
    ogTitle: 'Fale Conosco | Cheetah Solutions',
  },
  '/orcamento': {
    title: 'Cheetah Solutions | Solicite Orçamento',
    description: 'Preencha o formulário com as informações do seu projeto. Retornamos em até 48 horas com uma proposta detalhada.',
    ogTitle: 'Solicite Orçamento | Cheetah Solutions',
  },
  '/developers': {
    title: 'Cheetah Solutions | Cheetah Developers Brasil',
    description: 'Comunidade oficial de desenvolvedores da Cheetah Solutions Network. Aprenda, colabore e evolua com outros profissionais de tecnologia.',
    ogTitle: 'Cheetah Developers Brasil | Cheetah Solutions',
  },
  '/inscricoes': {
    title: 'Trabalhe Conosco | Cheetah Solutions',
    description: 'Junte-se à equipe da Cheetah Solutions. Vagas remotas para desenvolvedores, designers e profissionais de tecnologia. Projetos reais, remuneração justa e crescimento técnico.',
    ogTitle: 'Trabalhe Conosco | Cheetah Solutions',
  },
  '/cheetah-solidaria': {
    title: 'Cheetah Solutions | Cheetah Solidária',
    description: 'Conheça a Cheetah Solidária, nossa iniciativa de responsabilidade social em parceria com a AACD Teleton. Tecnologia e solidariedade transformando vidas.',
    ogTitle: 'Cheetah Solidária | Cheetah Solutions',
  },
  '/faq': {
    title: 'Cheetah Solutions | Perguntas Frequentes',
    description: 'Respostas para as dúvidas mais comuns sobre os serviços da Cheetah Solutions Network. Prazos, tecnologias, pagamentos e suporte técnico.',
    ogTitle: 'Perguntas Frequentes | Cheetah Solutions',
  },
  '/sugestoes': {
    title: 'Cheetah Solutions | Sugestões e Melhorias',
    description: 'Envie suas sugestões para a Cheetah Solutions Network. Sua opinião é fundamental para nossa evolução e melhoria contínua dos serviços.',
    ogTitle: 'Sugestões e Melhorias | Cheetah Solutions',
  },
  '/diretrizes': {
    title: 'Cheetah Solutions | Diretrizes e Privacidade',
    description: 'Diretrizes, políticas de privacidade e conformidade da Cheetah Solutions Network. Transparência e governança corporativa.',
    ogTitle: 'Diretrizes e Privacidade | Cheetah Solutions',
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
  <meta property="og:site_name" content="Cheetah Solutions">
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
    <a href="${fullUrl}">Visite Cheetah Solutions</a>
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
