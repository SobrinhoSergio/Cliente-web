let leitor = require("prompt-sync")();

let carros: string[] = ['BMW', 'Jeep', 'Volvo', 'Fiat', 'Ford', 'Chevrolet'];

let nomeCarro: string = leitor("Digite o nome de um carro: ");

let posicao: number = carros.indexOf(nomeCarro);

if (posicao === -1) {
    console.log("Carro não encontrado!");
} else {
    console.log("Carro encontrado na posição: " + posicao);
}



