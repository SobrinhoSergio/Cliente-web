import { apagaDivTabela } from './tabela.js';

export function montaDivFiltro(parent) {
    const divFiltro = document.createElement("div");
    divFiltro.setAttribute("id", "divFiltro");
    parent.appendChild(divFiltro);

    const form = document.createElement("form");
    divFiltro.appendChild(form);

    // Filtro por Nome
    const labelNome = document.createElement("label");
    labelNome.setAttribute("for", "campo_nome_filtro");
    labelNome.textContent = "Filtrar Nome:";
    form.appendChild(labelNome);

    const inputNome = document.createElement("input");
    inputNome.setAttribute("type", "text");
    inputNome.setAttribute("name", "nome");
    inputNome.setAttribute("id", "campo_nome_filtro");
    form.appendChild(inputNome);

    // Filtro por Sobrenome
    const labelSobrenome = document.createElement("label");
    labelSobrenome.setAttribute("for", "campo_sobrenome_filtro");
    labelSobrenome.textContent = "Filtrar Sobrenome:";
    form.appendChild(labelSobrenome);

    const inputSobrenome = document.createElement("input");
    inputSobrenome.setAttribute("type", "text");
    inputSobrenome.setAttribute("name", "sobrenome");
    inputSobrenome.setAttribute("id", "campo_sobrenome_filtro");
    form.appendChild(inputSobrenome);

    // Botão de Filtrar
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("name", "filtrar");
    button.textContent = "Filtrar";
    form.appendChild(button);

    button.addEventListener("click", () => {
        // Passa o nome e sobrenome para o filtro
        const filtro = {
            nome: inputNome.value.trim(),
            sobrenome: inputSobrenome.value.trim(),
        };
        apagaDivTabela(document.getElementById("divAux"), filtro);
    });
}
