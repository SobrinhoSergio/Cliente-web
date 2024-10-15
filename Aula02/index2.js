var leitor = require("prompt-sync")();

var parada = leitor("Informe o número: ");

for(var i = 0; i < parada; i++){
    console.log(`Números: ${i} \n`);
}