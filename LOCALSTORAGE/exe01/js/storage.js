// Função para salvar pessoas no LocalStorage
export function salvarPessoa(pessoa) {
    const pessoas = JSON.parse(localStorage.getItem('pessoas')) || [];
    pessoas.push(pessoa);
    localStorage.setItem('pessoas', JSON.stringify(pessoas));
  }
  
  // Função para obter pessoas do LocalStorage
  export function obterPessoas() {
    return JSON.parse(localStorage.getItem('pessoas')) || [];
  }
  
  // Função para limpar o LocalStorage
  export function limparPessoas() {
    localStorage.removeItem('pessoas');
  }
  