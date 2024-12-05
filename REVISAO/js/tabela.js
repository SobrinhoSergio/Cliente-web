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

    // Filtragem e exibição de registros
    const registrosFiltrados = arrayCadastro.filter((item) =>
        (!filtro.nome || item.nome.includes(filtro.nome)) &&
        (!filtro.sobrenome || item.sobrenome.includes(filtro.sobrenome))
    );

    registrosFiltrados.forEach((element) => {
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

    // Adicionando a linha com os cálculos de idade
    if (registrosFiltrados.length > 0) {
        const totalIdades = registrosFiltrados.reduce((sum, item) => sum + parseInt(item.idade), 0);
        const mediaIdades = (totalIdades / registrosFiltrados.length).toFixed(2);
        const maiorIdade = Math.max(...registrosFiltrados.map((item) => parseInt(item.idade)));
        const menorIdade = Math.min(...registrosFiltrados.map((item) => parseInt(item.idade)));

        const calculosRow = document.createElement("tr");
        calculosRow.style.fontWeight = "bold";

        // Colunas de cálculo
        const calculos = [
            "Totais",
            "",
            "",
            `Soma: ${totalIdades}, Média: ${mediaIdades}, Maior: ${maiorIdade}, Menor: ${menorIdade}`,
            "",
        ];

        calculos.forEach((value) => {
            const cell = document.createElement("td");
            cell.textContent = value;
            calculosRow.appendChild(cell);
        });

        table.appendChild(calculosRow);
    }
}


export function deletarRegistro(id) {
    const index = arrayCadastro.findIndex((item) => item.id === id);
    if (index !== -1) {
        arrayCadastro.splice(index, 1); // Remove o registro do array
    }
}