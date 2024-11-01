/*let Pessoa = function (nome, cpf, idade){
    this.nome = nome;
    this.cpf = cpf;
    this.idade = idade;
}

// Criando instâncias de Pessoa
let pessoa1 = new Pessoa("Alice", "123.456.789-00", 18);
let pessoa2 = new Pessoa("Bruno", "234.567.890-11", 30);
let pessoa3 = new Pessoa("Carla", "345.678.901-22", 25);

console.log(pessoa1); 
console.log(pessoa2);
console.log(pessoa3); */


let leitor = require("prompt-sync")();

let Pessoa = function(nome, cpf, idade) {
    this.nome = nome;
    this.cpf = cpf;
    this.idade = idade;
    
}
let pessoa4 = (new Pessoa("José", 35));
pessoa4.cpf = 45
let pessoas2 = [
    new Pessoa("Vitor", 35),
    {nome: "João", idade: 25, cpf:5},
    new Pessoa("Maria", 30),
    pessoa4
];

var continua = 1;

while (continua) {
   let encontrar = leitor("Digite a idade das pessoas que deseja encontrar: ")
   let encontrou = false;
    pessoas2.forEach((a)=>{
        if(a.idade == encontrar) {
            encontrou = true;
            console.log("Pessoa de nome "+a.nome+ " encontrada");
        }
    });
    if(!encontrou) {
        console.log("Nenhuma pessoa encontrada");
    }
    continua = leitor("Deseja encontrar uma nova pessoa? (1) para continuar e (0) para sair: ")
}
