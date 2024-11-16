interface Cidade {
    nome: string;
    codigo: number; // Código como número
}

// Array com as cidades e seus códigos
const cidades2: Cidade[] = [
    { nome: "Rio de Janeiro", codigo: 1 }, 
    { nome: "São Paulo", codigo: 2 },
    { nome: "Espírito Santo", codigo: 3 },
    { nome: "Minas Gerais", codigo: 4 },
    { nome: "Bahia TS", codigo: 5 }
];

document.addEventListener("DOMContentLoaded", function (): void {

    // Criar a tabela dinamicamente
    const tabela: HTMLTableElement = document.createElement("table") as HTMLTableElement;
    tabela.border = "1"; // Define uma borda para a tabela
    tabela.id = "tabelaCidades";

    // Criar o cabeçalho da tabela
    const thead: HTMLTableSectionElement = document.createElement("thead") as HTMLTableSectionElement;
    const trHeader: HTMLTableRowElement = document.createElement("tr") as HTMLTableRowElement;
    const thNome: HTMLTableCellElement = document.createElement("th") as HTMLTableCellElement;
    const thCodigo: HTMLTableCellElement = document.createElement("th") as HTMLTableCellElement;

    thNome.textContent = "Nome da Cidade";
    thCodigo.textContent = "Código";

    trHeader.appendChild(thNome);
    trHeader.appendChild(thCodigo);
    thead.appendChild(trHeader);
    tabela.appendChild(thead);

    // Criar o corpo da tabela
    const tbody: HTMLTableSectionElement = document.createElement("tbody") as HTMLTableSectionElement;

    // Preenchendo a tabela com as cidades
    cidades2.forEach((cidade: Cidade): void => {
        const tr: HTMLTableRowElement = document.createElement("tr") as HTMLTableRowElement;

        const tdNome: HTMLTableCellElement = document.createElement("td") as HTMLTableCellElement;
        tdNome.textContent = cidade.nome;

        const tdCodigo: HTMLTableCellElement = document.createElement("td") as HTMLTableCellElement;
        tdCodigo.textContent = cidade.codigo.toString(); // Convertendo o número para string

        tr.appendChild(tdNome);
        tr.appendChild(tdCodigo);
        tbody.appendChild(tr);
    });

    tabela.appendChild(tbody);

    // Adiciona a tabela ao corpo da página usando querySelector
    const body: HTMLBodyElement | null = document.querySelector("body") as HTMLBodyElement;
    if (body) {
        body.appendChild(tabela);
    } else {
        console.error("Elemento body não encontrado!");
    }
});
