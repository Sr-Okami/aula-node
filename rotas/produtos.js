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
    const novoId = produtos.length > 0 ? Math.max(...produtos.map(p => p.id)) + 1 : 1;
    const novoProduto = new Produto(novoId, produto.nome, produto.valor);
    produtos.push(novoProduto);
    return JSON.stringify({ 
      mensagem: 'Produto adicionado com sucesso',
      produto: novoProduto
    });
  }

  static removerProduto(id) {
    const index = produtos.findIndex(p => p.id === id);
    if (index === -1) {
      return JSON.stringify({ 
        mensagem: 'Produto não encontrado',
        error: true
      });
    }
    const [removido] = produtos.splice(index, 1);
    return JSON.stringify({ 
      mensagem: 'Produto removido com sucesso',
      produto: removido
    });
  }
}

// Banco de dados em memória
const produtos = [
  new Produto(1, 'Teclado', 50),
  new Produto(2, 'Mouse', 30)
];

module.exports = Produto;