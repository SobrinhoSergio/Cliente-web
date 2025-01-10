import { criarElemento } from './elementos.js';

// Função para criar o formulário de cadastro
export function criarFormularioCadastro() {
  const section = criarElemento('section', { class: 'form-container' });

  // Título
  const titulo = criarElemento('h2', {}, 'Cadastro de Pessoa');
  section.appendChild(titulo);

  // Campo Nome
  const grupoNome = criarElemento('div', { class: 'form-group' });
  grupoNome.appendChild(criarElemento('label', { for: 'nome' }, 'Nome:'));
  grupoNome.appendChild(criarElemento('input', { type: 'text', id: 'nome', placeholder: 'Digite seu nome' }));
  section.appendChild(grupoNome);

  // Campo Idade
  const grupoIdade = criarElemento('div', { class: 'form-group' });
  grupoIdade.appendChild(criarElemento('label', { for: 'idade' }, 'Idade:'));
  grupoIdade.appendChild(criarElemento('input', { type: 'number', id: 'idade', placeholder: 'Digite sua idade' }));
  section.appendChild(grupoIdade);

  // Campo Data de Nascimento
  const grupoDataNascimento = criarElemento('div', { class: 'form-group' });
  grupoDataNascimento.appendChild(criarElemento('label', { for: 'dataNascimento' }, 'Data de Nascimento:'));
  grupoDataNascimento.appendChild(criarElemento('input', { type: 'date', id: 'dataNascimento' }));
  section.appendChild(grupoDataNascimento);

  // Campo Estado Civil
  const grupoEstadoCivil = criarElemento('div', { class: 'form-group' });
  grupoEstadoCivil.appendChild(criarElemento('label', { for: 'estadoCivil' }, 'Estado Civil:'));
  const selectEstadoCivil = criarElemento('select', { id: 'estadoCivil' });
  ['Solteiro', 'Casado', 'Divorciado', 'Viúvo'].forEach((estado) => {
    const option = criarElemento('option', { value: estado }, estado);
    selectEstadoCivil.appendChild(option);
  });
  grupoEstadoCivil.appendChild(selectEstadoCivil);
  section.appendChild(grupoEstadoCivil);

  // Botões
  const grupoBotoes = criarElemento('div', { class: 'button-group' });
  grupoBotoes.appendChild(criarElemento('button', { id: 'salvar' }, 'Salvar'));
  grupoBotoes.appendChild(criarElemento('button', { id: 'limpar' }, 'Limpar'));
  section.appendChild(grupoBotoes);

  return section;
}
