
class Pessoa {
    constructor(nome, etnia, sexualidade) {
      this.nome = nome;
      this.etnia = etnia;
      this.sexualidade = sexualidade;
    }
  
    falar() {
      console.log(`${this.nome} está falando.`);
    }
  }
  
 
  class Homem extends Pessoa {
    falar() {
      console.log(`${this.nome} (etnia: ${this.etnia}, sexualidade: ${this.sexualidade}): Eu sou João, um homem branco e hetero.`);
    }
  }
  
  
  class Mulher extends Pessoa {
    falar() {
      console.log(`${this.nome} (etnia: ${this.etnia}, sexualidade: ${this.sexualidade}): Eu sou Maria, uma mulher negra e lesbica.`);
    }
  }
  

  const homem = new Homem('João', 'Branco', 'Heterossexual');
  const mulher = new Mulher('Maria', 'Negro', 'Lésbica');
  
  
  homem.falar(); 
  mulher.falar(); 
  