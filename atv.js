class Animal {
    constructor(nome,cor){
        this.nome = nome;
        this.cor = cor;

    }
    falar() {
        return `Ola meu nome é ${this.nome}`
    }
}

 class Cachorro extends Animal {
    constructor(nome, cor, raça) {
        super(nome,cor);
        this.raça = raça
    }
    latir() {
        return`au au`
    }
 }

 class Gato extends Animal {
    constructor(nome, cor, raça) {
        super(nome,cor);
        this.raça = raça
    }
    miar() {
        return`miauuuu`
    }
 }

 const animais = [
    new Cachorro("rex","marrom", "pastor alemão"),
    new Gato("MIA", "preto", "siamês"),
 ];

 for (const animal of animais) {
    console.log(`o animal "${animal.nome}" é ${animal.cor}.`);
 }

 for (const animal of animais){
    console.log(animal.falar());
 }

 const cachorro = animais [0];
 console.log(cachorro.latir());

 const gato = animais[1];
 console.log(gato.miar());