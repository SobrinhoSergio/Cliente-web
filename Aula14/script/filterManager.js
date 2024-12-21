import { apagaDivTabela } from './tableManager.js';

export function montaDivFiltro() {
    const tBody = document.getElementsByTagName("body")[0];
    const divFiltro = document.createElement("div");
    divFiltro.setAttribute("id", "divFiltro");
    tBody.appendChild(divFiltro);

    const fFormFiltro = document.createElement("form");
    divFiltro.appendChild(fFormFiltro);

    const tLabel1 = document.createElement("label");
    tLabel1.setAttribute("for", "campo_nome_filtro");
    tLabel1.textContent = "Filtrar por Nome: ";
    fFormFiltro.appendChild(tLabel1);

    const tInputNomeFiltro = document.createElement("input");
    tInputNomeFiltro.setAttribute("type", "text");
    tInputNomeFiltro.setAttribute("id", "campo_nome_filtro");
    fFormFiltro.appendChild(tInputNomeFiltro);

    const tButtonFiltro = document.createElement("button");
    tButtonFiltro.setAttribute("type", "button");
    tButtonFiltro.textContent = "Filtrar";
    fFormFiltro.appendChild(tButtonFiltro);

    tButtonFiltro.addEventListener("click", () => {
        apagaDivTabela(document.getElementById("divAux"), tInputNomeFiltro.value);
    });
}
