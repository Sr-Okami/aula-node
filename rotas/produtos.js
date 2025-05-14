class Produto {
  static produtos = [
    { id: 1, nome: 'Mouse', preco: 50 },
    { id: 2, nome: 'Teclado', preco: 100 },
    { id: 3, nome: 'Monitor', preco: 1500 },
  ];

  static listar() {
    return this.produtos;
  }

  static adicionar(produto) {
    this.produtos.push(produto);
  }

  static remover(id) {
    this.produtos = this.produtos.filter(produto => produto.id !== id);
  }
}

module.exports = Produto;