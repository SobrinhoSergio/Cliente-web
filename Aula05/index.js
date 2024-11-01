let leitor = require("prompt-sync")();

let carros = ['BMW', "Jeep", "Volvo", "Fiat", "Ford", "Chevrolet"];

let nomeCarro = leitor("Digite de um carro: ");

let posicao = carros.indexOf(nomeCarro);

if(posicao == -1){
    console.log("Carro não encontrado!");
}
else{
    console.log("Carro encontrado na posição: "+ carros[posicao]);
}



