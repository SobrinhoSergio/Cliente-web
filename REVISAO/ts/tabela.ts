import { arrayCadastro } from './main.js';

interface Pessoa {
    id: number;
    nome: string;
    sobrenome: string;
    idade: string; // Idade como string porque vem do input HTML
    cidade: string;
}

interface Filtro {
    nome?: string;
    sobrenome?: string;
}

export function apagaDivTabela(container: HTMLElement, filtro: Filtro): void {
    const divTabela: HTMLElement | null = document.getElementById("divTabela");
    if (divTabela) {
        container.removeChild(divTabela);
    }
    montaDivTabela(container, filtro);
}

export function montaDivTabela(parent: HTMLElement, filtro: Filtro): void {
    const divTabela: HTMLDivElement = document.createElement("div");
    divTabela.setAttribute("id", "divTabela");
    parent.appendChild(divTabela);

    const table: HTMLTableElement = document.createElement("table");
    divTabela.appendChild(table);

    const headerRow: HTMLTableRowElement = document.createElement("tr");
    table.appendChild(headerRow);

    // Cabeçalhos da tabela
    ["ID", "Nome", "Sobrenome", "Idade", "Cidade", "Ações"].forEach((header: string) => {
        const headerCell: HTMLTableCellElement = document.createElement("th");
        headerCell.textContent = header;
        headerRow.appendChild(headerCell);
    });

    // Filtragem e exibição de registros
    const registrosFiltrados: Pessoa[] = arrayCadastro.filter((item: Pessoa) =>
        (!filtro.nome || item.nome.includes(filtro.nome)) &&
        (!filtro.sobrenome || item.sobrenome.includes(filtro.sobrenome))
    );

    registrosFiltrados.forEach((element: Pessoa) => {
        const row: HTMLTableRowElement = document.createElement("tr");

        // Colunas de dados
        (["id", "nome", "sobrenome", "idade", "cidade"] as (keyof Pessoa)[]).forEach((key: keyof Pessoa) => {
            const cell: HTMLTableCellElement = document.createElement("td");
            cell.textContent = element[key].toString();
            row.appendChild(cell);
        });

        // Coluna de ações (botão de deletar)
        const actionCell: HTMLTableCellElement = document.createElement("td");
        const deleteButton: HTMLButtonElement = document.createElement("button");
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
        const totalIdades: number = registrosFiltrados.reduce(
            (sum: number, item: Pessoa) => sum + parseInt(item.idade, 10), 
            0
        );
        const mediaIdades: string = (totalIdades / registrosFiltrados.length).toFixed(2);
        const maiorIdade: number = Math.max(
            ...registrosFiltrados.map((item: Pessoa) => parseInt(item.idade, 10))
        );
        const menorIdade: number = Math.min(
            ...registrosFiltrados.map((item: Pessoa) => parseInt(item.idade, 10))
        );

        const calculosRow: HTMLTableRowElement = document.createElement("tr");
        calculosRow.style.fontWeight = "bold";

        // Colunas de cálculo
        const calculos: string[] = [
            "Totais",
            "",
            "",
            `Soma: ${totalIdades}, Média: ${mediaIdades}, Maior: ${maiorIdade}, Menor: ${menorIdade}`,
            "",
        ];

        calculos.forEach((value: string) => {
            const cell: HTMLTableCellElement = document.createElement("td");
            cell.textContent = value;
            calculosRow.appendChild(cell);
        });

        table.appendChild(calculosRow);
    }
}

export function deletarRegistro(id: number): void {
    const index: number = arrayCadastro.findIndex((item: Pessoa) => item.id === id);
    if (index !== -1) {
        arrayCadastro.splice(index, 1); // Remove o registro do array
    }
}
