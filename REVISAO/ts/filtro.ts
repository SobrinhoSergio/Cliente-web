import { apagaDivTabela } from './tabela.js';

interface Filtro {
    nome: string;
    sobrenome: string;
}

export function montaDivFiltro(parent: HTMLElement): void {
    const divFiltro: HTMLDivElement = document.createElement("div");
    divFiltro.setAttribute("id", "divFiltro");
    parent.appendChild(divFiltro);

    const form: HTMLFormElement = document.createElement("form");
    divFiltro.appendChild(form);

    // Filtro por Nome
    const labelNome: HTMLLabelElement = document.createElement("label");
    labelNome.setAttribute("for", "campo_nome_filtro");
    labelNome.textContent = "Filtrar Nome:";
    form.appendChild(labelNome);

    const inputNome: HTMLInputElement = document.createElement("input");
    inputNome.setAttribute("type", "text");
    inputNome.setAttribute("name", "nome");
    inputNome.setAttribute("id", "campo_nome_filtro");
    form.appendChild(inputNome);

    // Filtro por Sobrenome
    const labelSobrenome: HTMLLabelElement = document.createElement("label");
    labelSobrenome.setAttribute("for", "campo_sobrenome_filtro");
    labelSobrenome.textContent = "Filtrar Sobrenome:";
    form.appendChild(labelSobrenome);

    const inputSobrenome: HTMLInputElement = document.createElement("input");
    inputSobrenome.setAttribute("type", "text");
    inputSobrenome.setAttribute("name", "sobrenome");
    inputSobrenome.setAttribute("id", "campo_sobrenome_filtro");
    form.appendChild(inputSobrenome);

    // Botão de Filtrar
    const button: HTMLButtonElement = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("name", "filtrar");
    button.textContent = "Filtrar";
    form.appendChild(button);

    // Adiciona evento de clique ao botão de filtro
    button.addEventListener("click", (): void => {
        // Passa os valores de nome e sobrenome como filtro
        const filtro: Filtro = {
            nome: inputNome.value.trim(),
            sobrenome: inputSobrenome.value.trim(),
        };

        const divAux: HTMLElement | null = document.getElementById("divAux");

        if (divAux) {
            apagaDivTabela(divAux, filtro); // Atualiza a tabela com o filtro
        } else {
            console.error("Elemento com ID 'divAux' não encontrado.");
        }
    });
}
