let leitor = require("prompt-sync")();

let pessoas = [
    { nome: "Alice", cpf: "123.456.789-00", idade: 18 },
    { nome: "Bruno", cpf: "234.567.890-11", idade: 30 },
    { nome: "Carla", cpf: "345.678.901-22", idade: 18 },
    { nome: "Diego", cpf: "456.789.012-33", idade: 35 }
];


let idadeProcurada = parseInt(leitor("Digite a idade que deseja procurar: "));
let encontrado = false;

pessoas.forEach(pessoa => {
    if (pessoa.idade === idadeProcurada) {
        console.log(`Nome: ${pessoa.nome}, CPF: ${pessoa.cpf}, Idade: ${pessoa.idade}`);
        encontrado = true;
    }
});

if (!encontrado) {
    console.log("Nenhuma pessoa encontrada com essa idade.");
}