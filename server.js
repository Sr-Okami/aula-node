// npm start
const http = require('http');
const Produto = require('./rotas/produtos');

const server = http.createServer((req, res) => {
  const { url, method } = req;

  // Rota principal
  if (url === '/' && method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Servidor Node.js use /produtos para acessar os produtos');
  } 
  // Rota para listar produtos
  else if (url === '/produtos' && method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(Produto.listarProdutos());
  } 
  // Rota para adicionar produto
  else if (url === '/produtos/adicionar' && method === 'POST') {
    const novoProduto = new Produto(3, 'Monitor', 800);
    res.statusCode = 201;
    res.setHeader('Content-Type', 'application/json');
    res.end(Produto.adicionarProduto(novoProduto));
  } 
  // Rota para remover produto
  else if (url === '/produtos/remover' && method === 'DELETE') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(Produto.removerProduto());
  } 
  // Rota não encontrada
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Página não encontrada');
  }
});

const hostname = '127.0.0.1';
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});