// rotas/produtos.js
class Produto {
  constructor(id, nome, valor) {
    this.id = id;
    this.nome = nome;
    this.valor = valor;
  }

  static listarProdutos() {
    return JSON.stringify(produtos);
  }

  static adicionarProduto(produto) {
    produtos.push(produto);
    return JSON.stringify({ mensagem: 'Produto adicionado com sucesso' });
  }

  static removerProduto() {
    produtos.pop();
    return JSON.stringify({ mensagem: 'Produto removido com sucesso' });
  }
}

// Banco de dados em memória
const produtos = [
  new Produto(1, 'Teclado', 50),
  new Produto(2, 'Mouse', 30)
];

module.exports = Produto;