// Definição da classe base Pessoa
class Pessoa {
  constructor(nome, cpf, dataDeNascimento) {
    this.nome = nome;
    this.cpf = cpf;
    this.dataDeNascimento = dataDeNascimento;
  }

  autenticar() {
    console.log(`${this.nome} está autenticado.`);
  }
}

// Definição da classe Gerente que herda de Pessoa
class Gerente extends Pessoa {
  constructor(nome, cpf, dataDeNascimento, departamento) {
    super(nome, cpf, dataDeNascimento);
    this.departamento = departamento;
  }

  autenticar() {
    super.autenticar(); // Chama o método da classe pai
    console.log(`Gerente do departamento ${this.departamento} autenticado.`);
  }
}

// Criando e usando uma instância de Gerente
const gerente1 = new Gerente('José', '987.654.321-00', '02/02/1980', 'Vendas');

console.log(gerente1);
/* Output:
Gerente {
  nome: 'José',
  cpf: '987.654.321-00',
  dataDeNascimento: '02/02/1980',
  departamento: 'Vendas'
}
*/

gerente1.autenticar();
/* Output:
José está autenticado.
Gerente do departamento Vendas autenticado.
*/

// Criando cópia por referência
const gerenteAuxiliar = gerente1; 

// Modificando a propriedade através da cópia
gerenteAuxiliar.nome = 'Alice';

console.log(gerente1.nome);       // Alice
console.log(gerenteAuxiliar.nome); // Alice