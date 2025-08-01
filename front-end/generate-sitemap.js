//sitemap para o google search console
const { createSitemap } = require('sitemap');
const fs = require('fs');

// Lista CORRETA de todas as páginas públicas do seu site, baseada no seu app-routing.module.ts
const routes = [
  '/',
  '/funcionalidades',
  '/para-especialistas',
  '/planos',
  '/sobre',
  '/auth/login'
  // OBS: A sua página de Cadastro não está definida nas rotas.
  // Quando você adicioná-la (ex: '/auth/cadastro'), lembre-se de incluir aqui também.
];

// O domínio principal do seu site.
const hostname = 'https://mentalvitalis.com.br';

// Gera o sitemap
const sitemap = createSitemap({
  hostname,
  urls: routes.map(route => ({ url: route, changefreq: 'weekly', priority: 0.8 }))
});

// Salva o arquivo sitemap.xml dentro da pasta 'src'
fs.writeFileSync('src/sitemap.xml', sitemap.toString());

console.log('sitemap.xml gerado com sucesso!');
