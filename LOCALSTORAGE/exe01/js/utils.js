// Função para exibir as pessoas na tabela
export function exibirPessoas(pessoas) {
    const tabela = document.getElementById('tabelaPessoas').querySelector('tbody');
    tabela.innerHTML = ''; // Limpa a tabela antes de preencher
  
    if (pessoas.length > 0) {
      pessoas.forEach((pessoa, index) => {
        const linha = document.createElement('tr');
  
        const colunaNome = document.createElement('td');
        colunaNome.textContent = pessoa.nome;
        linha.appendChild(colunaNome);
  
        const colunaIdade = document.createElement('td');
        colunaIdade.textContent = pessoa.idade;
        linha.appendChild(colunaIdade);
  
        const colunaDataNascimento = document.createElement('td');
        colunaDataNascimento.textContent = pessoa.dataNascimento;
        linha.appendChild(colunaDataNascimento);
  
        const colunaEstadoCivil = document.createElement('td');
        colunaEstadoCivil.textContent = pessoa.estadoCivil;
        linha.appendChild(colunaEstadoCivil);
  
        // Cria a célula do botão de deletar
        const colunaAcoes = document.createElement('td');
        const botaoDeletar = document.createElement('button');
        botaoDeletar.textContent = 'Deletar';
        botaoDeletar.addEventListener('click', () => deletarPessoa(index)); // Chama a função deletarPessoa passando o índice
        colunaAcoes.appendChild(botaoDeletar);
        linha.appendChild(colunaAcoes);
  
        tabela.appendChild(linha);
      });
    } else {
      const linha = document.createElement('tr');
      const coluna = document.createElement('td');
      coluna.textContent = 'Nenhuma pessoa salva no LocalStorage.';
      coluna.colSpan = 5; // Agora, a tabela tem 5 colunas
      coluna.style.textAlign = 'center';
      linha.appendChild(coluna);
      tabela.appendChild(linha);
    }
  }
  
  // Função para deletar a pessoa
  function deletarPessoa(index) {
    const pessoas = JSON.parse(localStorage.getItem('pessoas')) || [];
    pessoas.splice(index, 1); // Remove a pessoa pelo índice
    localStorage.setItem('pessoas', JSON.stringify(pessoas)); // Atualiza o LocalStorage
    exibirPessoas(pessoas); // Atualiza a tabela
  }
  