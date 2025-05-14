// criando uma classe Pessoa
class Pessoa {
    constructor(nome, cpf, idade) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataDeNascimento = dataDeNascimento;
    }

    correr() {
        console.log(`${this.nome} está correndo!`);
    }

    dormir() {
        console.log(`${this.nome} está dormindo!`);
    }
}

// criiando instância da classe Pessoa
const pessoa1 = new Pessoa('João', '123.456.789-00', 30);
const pessoa2 = new Pessoa('Maria', '987.654.321-00', 25);
const pessoa3 = new Pessoa('João', '123.456.789-00', 28);

// utilizando os métodos da classe Pessoa
pessoa1.correr(); // João está correndo!
pessoa2.dormir(); // Maria está dormindo!
pessoa3.correr(); // João está correndo!