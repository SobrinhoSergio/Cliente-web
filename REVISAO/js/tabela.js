import { arrayCadastro } from './main.js';

export function apagaDivTabela(container, filtro) {
    const divTabela = document.getElementById("divTabela");
    if (divTabela) {
        container.removeChild(divTabela);
    }
    montaDivTabela(container, filtro);
}

export function montaDivTabela(parent, filtro) {
    const divTabela = document.createElement("div");
    divTabela.setAttribute("id", "divTabela");
    parent.appendChild(divTabela);

    const table = document.createElement("table");
    divTabela.appendChild(table);

    const headerRow = document.createElement("tr");
    table.appendChild(headerRow);

    // Cabeçalhos da tabela
    ["ID", "Nome", "Sobrenome", "Idade", "Cidade", "Ações"].forEach((header) => {
        const headerCell = document.createElement("th");
        headerCell.textContent = header;
        headerRow.appendChild(headerCell);
    });

    // Linhas filtradas
    arrayCadastro
        .filter((item) =>
            (!filtro.nome || item.nome.includes(filtro.nome)) &&
            (!filtro.sobrenome || item.sobrenome.includes(filtro.sobrenome))
        )
        .forEach((element) => {
            const row = document.createElement("tr");

            // Colunas de dados
            ["id", "nome", "sobrenome", "idade", "cidade"].forEach((key) => {
                const cell = document.createElement("td");
                cell.textContent = element[key];
                row.appendChild(cell);
            });

            // Coluna de ações (botão de deletar)
            const actionCell = document.createElement("td");
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Deletar";
            deleteButton.addEventListener("click", () => {
                deletarRegistro(element.id);
                apagaDivTabela(parent, filtro); // Atualiza a tabela
            });
            actionCell.appendChild(deleteButton);
            row.appendChild(actionCell);

            table.appendChild(row);
        });
}

export function deletarRegistro(id) {
    const index = arrayCadastro.findIndex((item) => item.id === id);
    if (index !== -1) {
        arrayCadastro.splice(index, 1); // Remove o registro do array
    }
}