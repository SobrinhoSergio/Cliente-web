import { cadastrarRegistro } from './main.ts';
import { apagaDivTabela } from './tabela.ts';

// Gerador de IDs únicos
let pessoaId: number = 0;

interface Pessoa {
    id: number;
    nome: string;
    sobrenome: string;
    idade: string; // Idade como string porque vem do input HTML
    cidade: string;
}

export function montaDivCadastro(parent: HTMLElement): void {
    const divCadastro: HTMLDivElement = document.createElement("div");
    divCadastro.setAttribute("id", "divCadastro");
    parent.appendChild(divCadastro);

    const form: HTMLFormElement = document.createElement("form");
    form.setAttribute("action", "cadastro.php");
    form.setAttribute("method", "POST");
    divCadastro.appendChild(form);

    // Campo Nome
    const labelNome: HTMLLabelElement = document.createElement("label");
    labelNome.setAttribute("for", "campo_nome");
    labelNome.textContent = "Nome:";
    form.appendChild(labelNome);

    const inputNome: HTMLInputElement = document.createElement("input");
    inputNome.setAttribute("type", "text");
    inputNome.setAttribute("name", "nome");
    inputNome.setAttribute("id", "campo_nome");
    form.appendChild(inputNome);

    // Campo Sobrenome
    const labelSobrenome: HTMLLabelElement = document.createElement("label");
    labelSobrenome.setAttribute("for", "campo_sobrenome");
    labelSobrenome.textContent = "Sobrenome:";
    form.appendChild(labelSobrenome);

    const inputSobrenome: HTMLInputElement = document.createElement("input");
    inputSobrenome.setAttribute("type", "text");
    inputSobrenome.setAttribute("name", "sobrenome");
    inputSobrenome.setAttribute("id", "campo_sobrenome");
    form.appendChild(inputSobrenome);

    // Campo Idade
    const labelIdade: HTMLLabelElement = document.createElement("label");
    labelIdade.setAttribute("for", "campo_idade");
    labelIdade.textContent = "Idade:";
    form.appendChild(labelIdade);

    const inputIdade: HTMLInputElement = document.createElement("input");
    inputIdade.setAttribute("type", "number");
    inputIdade.setAttribute("name", "idade");
    inputIdade.setAttribute("id", "campo_idade");
    inputIdade.setAttribute("min", "0");
    form.appendChild(inputIdade);

    // Campo Cidade
    const labelCidade: HTMLLabelElement = document.createElement("label");
    labelCidade.setAttribute("for", "campo_cidade");
    labelCidade.textContent = "Cidade:";
    form.appendChild(labelCidade);

    const inputCidade: HTMLInputElement = document.createElement("input");
    inputCidade.setAttribute("type", "text");
    inputCidade.setAttribute("name", "cidade");
    inputCidade.setAttribute("id", "campo_cidade");
    form.appendChild(inputCidade);

    // Botão Cadastrar
    const button: HTMLButtonElement = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("name", "cadastrar");
    button.textContent = "Cadastrar";
    form.appendChild(button);

    // Evento do Botão
    button.addEventListener("click", () => {
        const id: number = ++pessoaId;
        const nome: string = inputNome.value.trim();
        const sobrenome: string = inputSobrenome.value.trim();
        const idade: string = inputIdade.value.trim();
        const cidade: string = inputCidade.value.trim();

        const registroValido: boolean = cadastrarRegistro({ id, nome, sobrenome, idade, cidade });
        if (registroValido) {
            // Atualizar a tabela somente se o cadastro for bem-sucedido
            const divAux: HTMLElement | null = document.getElementById("divAux");
            if (divAux) {
                apagaDivTabela(divAux, "");
            }
            form.reset(); // Limpa os campos do formulário
        }
    });
}
