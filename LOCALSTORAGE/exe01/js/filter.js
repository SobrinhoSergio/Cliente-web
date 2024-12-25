import { exibirPessoas } from './utils.js';

// Função para filtrar as pessoas com base nos campos preenchidos
export function filtrarPessoas(pessoas, filtros) {
  return pessoas.filter(pessoa => {
    // Verifica o filtro por nome
    const nomeMatch = filtros.nome 
      ? pessoa.nome.toLowerCase().includes(filtros.nome.toLowerCase()) 
      : true;

    // Verifica o filtro por idade
    const idadeMatch = filtros.idade 
      ? pessoa.idade === parseInt(filtros.idade) 
      : true;

    // Verifica o filtro por data de nascimento
    const dataNascimentoMatch = filtros.dataNascimento 
      ? pessoa.dataNascimento === filtros.dataNascimento 
      : true;

    // Verifica o filtro por estado civil
    const estadoCivilMatch = filtros.estadoCivil 
      ? pessoa.estadoCivil === filtros.estadoCivil 
      : true;

    return nomeMatch && idadeMatch && dataNascimentoMatch && estadoCivilMatch;
  });
}

// Função para aplicar o filtro
export function aplicarFiltro() {
  // Obtém os valores dos filtros
  const filtros = {
    nome: document.getElementById('filtroNome').value,
    idade: document.getElementById('filtroIdade').value,
    dataNascimento: document.getElementById('filtroDataNascimento').value,
    estadoCivil: document.getElementById('filtroEstadoCivil').value,
  };

  // Obtém a lista de pessoas do LocalStorage
  const pessoas = JSON.parse(localStorage.getItem('pessoas')) || [];

  // Filtra as pessoas com base nos critérios
  const pessoasFiltradas = filtrarPessoas(pessoas, filtros);

  // Exibe as pessoas filtradas
  exibirPessoas(pessoasFiltradas);
}
