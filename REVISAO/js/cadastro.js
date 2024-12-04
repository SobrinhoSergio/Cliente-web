import { cadastrarRegistro } from './main.js';
import { apagaDivTabela } from './tabela.js';

// Gerador de IDs únicos
let pessoaId = 0;

export function montaDivCadastro(parent) {
    const divCadastro = document.createElement("div");
    divCadastro.setAttribute("id", "divCadastro");
    parent.appendChild(divCadastro);

    const form = document.createElement("form");
    form.setAttribute("action", "cadastro.php");
    form.setAttribute("method", "POST");
    divCadastro.appendChild(form);

    // Campo Nome
    const labelNome = document.createElement("label");
    labelNome.setAttribute("for", "campo_nome");
    labelNome.textContent = "Nome:";
    form.appendChild(labelNome);

    const inputNome = document.createElement("input");
    inputNome.setAttribute("type", "text");
    inputNome.setAttribute("name", "nome");
    inputNome.setAttribute("id", "campo_nome");
    form.appendChild(inputNome);

    // Campo Sobrenome
    const labelSobrenome = document.createElement("label");
    labelSobrenome.setAttribute("for", "campo_sobrenome");
    labelSobrenome.textContent = "Sobrenome:";
    form.appendChild(labelSobrenome);

    const inputSobrenome = document.createElement("input");
    inputSobrenome.setAttribute("type", "text");
    inputSobrenome.setAttribute("name", "sobrenome");
    inputSobrenome.setAttribute("id", "campo_sobrenome");
    form.appendChild(inputSobrenome);

    // Campo Idade
    const labelIdade = document.createElement("label");
    labelIdade.setAttribute("for", "campo_idade");
    labelIdade.textContent = "Idade:";
    form.appendChild(labelIdade);

    const inputIdade = document.createElement("input");
    inputIdade.setAttribute("type", "number");
    inputIdade.setAttribute("name", "idade");
    inputIdade.setAttribute("id", "campo_idade");
    inputIdade.setAttribute("min", "0");
    form.appendChild(inputIdade);

    // Campo Cidade
    const labelCidade = document.createElement("label");
    labelCidade.setAttribute("for", "campo_cidade");
    labelCidade.textContent = "Cidade:";
    form.appendChild(labelCidade);

    const inputCidade = document.createElement("input");
    inputCidade.setAttribute("type", "text");
    inputCidade.setAttribute("name", "cidade");
    inputCidade.setAttribute("id", "campo_cidade");
    form.appendChild(inputCidade);

    // Botão Cadastrar
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("name", "cadastrar");
    button.textContent = "Cadastrar";
    form.appendChild(button);

    // Evento do Botão
    /*button.addEventListener("click", () => {
        const pessoa = {
            id: ++pessoaId,
            nome: inputNome.value,
            sobrenome: inputSobrenome.value,
            idade: inputIdade.value,
            cidade: inputCidade.value,
        };

        cadastrarNomeNoArray(pessoa);
        apagaDivTabela(document.getElementById("divAux"), "");
        
        // Limpa os campos do formulário após o cadastro
        form.reset();
    });*/

    button.addEventListener("click", () => {
        const id =  ++pessoaId;
        const nome = inputNome.value.trim();
        const sobrenome = inputSobrenome.value.trim();
        const idade = inputIdade.value.trim();
        const cidade = inputCidade.value.trim();
    
        const registroValido = cadastrarRegistro({ nome, sobrenome, idade, cidade });
        if (registroValido) {
            // Atualizar a tabela somente se o cadastro for bem-sucedido
            apagaDivTabela(document.getElementById("divAux"), "");
            form.reset(); // Limpa os campos do formulário
        }
    });
    
}
