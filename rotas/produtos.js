class Produto {
  static produtos = [];

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