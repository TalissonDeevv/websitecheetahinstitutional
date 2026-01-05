// Edge function para injetar Open Graph metadata dinâmico
// Detecta crawlers de redes sociais e retorna HTML com meta tags corretas

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

const BASE_URL = 'https://cheetahsolutions.com.br';
const DEFAULT_IMAGE = 'https://i.ibb.co/wrrLs7jQ/Cheetah-Solutions.png';

export default function handler(req) {
  const url = new URL(req.url);
  const path = url.pathname;
  
  // Get metadata for route or use defaults
  const metadata = routes[path] || routes['/'];
  
  return {
    title: metadata.title,
    description: metadata.description,
    ogTitle: metadata.ogTitle,
    ogUrl: `${BASE_URL}${path === '/' ? '' : path}`,
    ogImage: DEFAULT_IMAGE,
    ogType: 'website',
  };
}
