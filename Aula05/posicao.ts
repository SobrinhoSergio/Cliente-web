let leitor1 = require("prompt-sync")();

let carros1: string[] = ['BMW', 'Jeep', 'Volvo', 'Fiat', 'Ford', 'Chevrolet'];

let posicao1: number = parseInt(leitor1("Digite a posição do carro (0 a " + (carros1.length - 1) + "): "));

if (posicao1 < 0 || posicao1 >= carros1.length) {
    console.log("Posição inválida!");
} else {
    console.log("O carro na posição " + posicao1 + " é: " + carros1[posicao1]);
}
