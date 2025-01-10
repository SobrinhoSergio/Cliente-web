/*async function retornarNumero100() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(100);
      }, 3000); // 3 segundos
    });
  }
  
  async function executar() {
    const resultado = await retornarNumero100();
    console.log(resultado); // Exibe 100 após 3 segundos
  }
  
  executar();*/


function verificarNumero(numero) {
    return new Promise((resolve, reject) => {
        if (numero < 5) {
        reject(new Error("O número é menor que 5."));
        } else {
        resolve("O número é maior ou igual a 5.");
        }
    });
}

// Testando a função
verificarNumero(3)
.then((mensagem) => {
    console.log(mensagem); // Não será chamado
})
.catch((erro) => {
    console.error(erro.message); // "O número é menor que 5."
});

verificarNumero(7)
.then((mensagem) => {
    console.log(mensagem); // "O número é maior ou igual a 5."
})
.catch((erro) => {
    console.error(erro.message); // Não será chamado
});
  
  
  
// Passar um número e verificar se é menor que 5 reject e maior resolve