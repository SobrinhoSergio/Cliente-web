import { Pessoa } from './Pessoa.js';
import { IdadeMinimaError } from './IdadeMinimaError.js';
import { salvarPessoa, obterPessoas, limparPessoas } from './storage.js';
import { exibirPessoas } from './utils.js';
import { aplicarFiltro } from './filter.js';

// Função para adicionar uma nova pessoa
function adicionarPessoa() {
  try {
    const nome = document.getElementById('nome').value.trim();
    const idade = parseInt(document.getElementById('idade').value, 10);
    const dataNascimento = document.getElementById('dataNascimento').value;
    const estadoCivil = document.getElementById('estadoCivil').value.trim();

    // Verifica se algum campo está vazio
    if (!nome || !idade || !dataNascimento || !estadoCivil) {
      alert('Todos os campos devem ser preenchidos!');
      return;
    }

    // Validação do ano de nascimento
    const anoNascimento = new Date(dataNascimento).getFullYear();
    const anoAtual = new Date().getFullYear();

    if (anoNascimento > anoAtual) {
      alert('O ano de nascimento não pode ser maior que o ano atual.');
      return;
    }

    // Verifica se a idade é um número válido e maior ou igual a 15
    if (isNaN(idade) || idade < 15) {
      throw new IdadeMinimaError('A idade mínima é 15 anos e deve ser um número válido.');
    }

    // Verifica se já existe uma pessoa com o mesmo nome
    const pessoasExistentes = obterPessoas();
    if (pessoasExistentes.some(pessoa => pessoa.nome.toLowerCase() === nome.toLowerCase())) {
      alert('Já existe uma pessoa com esse nome!');
      return;
    }

    // Cria a nova pessoa e salva
    const pessoa = new Pessoa(nome, idade, dataNascimento, estadoCivil);
    salvarPessoa(pessoa);
    alert('Pessoa salva com sucesso!');
    exibirPessoas(obterPessoas());
  } catch (error) {
    if (error instanceof IdadeMinimaError) {
      alert(error.message);
    } else {
      console.error(error);
    }
  }
}

// Inicializa a tabela ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  exibirPessoas(obterPessoas());

  // Adiciona evento de clique ao botão "Salvar"
  document.getElementById('salvar').addEventListener('click', adicionarPessoa);

  // Adiciona evento de clique ao botão "Limpar"
  document.getElementById('limpar').addEventListener('click', () => {
    limparPessoas();
    exibirPessoas([]);
    alert('LocalStorage limpo!');
  });
});


document.getElementById('aplicarFiltro').addEventListener('click', aplicarFiltro);