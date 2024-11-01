const prompt1 = require("prompt-sync")();

class Pessoa {
    public nome: string;
    public cpf: number = 0;
    public idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
}

let pessoa4 = new Pessoa("Marina", 35);
pessoa4.cpf = 45;

let pessoas2: Pessoa[] = [
    new Pessoa("Vitor", 35),
    { nome: "Sérgio", idade: 18, cpf: 5 } as Pessoa,
    new Pessoa("Maria", 35),
    pessoa4
];

let continua: number = 1;

while (continua) {
    let encontrar = Number(prompt1("Digite a idade das pessoas que deseja encontrar: "));

    let encontrou: boolean = false;

    pessoas2.forEach((a: Pessoa) => {
        if (a.idade === encontrar) {
            encontrou = true;
            console.log("Pessoa de nome " + a.nome + " encontrada");
        }
    });

    if (!encontrou) {
        console.log("Nenhuma pessoa encontrada");
    }

    continua = Number(prompt1("Deseja encontrar uma nova pessoa? (1) para continuar e (0) para sair: "));
}
