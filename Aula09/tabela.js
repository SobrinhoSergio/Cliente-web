const cidades = [
    { nome: "Rio de Janeiro", codigo: "RJ" },
    { nome: "São Paulo", codigo: "SP" },
    { nome: "Espírito Santo", codigo: "ES" },
    { nome: "Minas Gerais", codigo: "MG" },
    { nome: "Bahia JS", codigo: "BA" }
];

document.addEventListener("DOMContentLoaded", function () {

    // Criar a tabela dinamicamente
    const tabela = document.createElement("table");
    tabela.border = "1"; // Define uma borda para a tabela
    tabela.id = "tabelaCidades";

    // Criar o cabeçalho da tabela
    const thead = document.createElement("thead");
    const trHeader = document.createElement("tr");
    const thNome = document.createElement("th");
    thNome.textContent = "Nome da Cidade";
    const thCodigo = document.createElement("th");
    thCodigo.textContent = "Código";

    trHeader.appendChild(thNome);
    trHeader.appendChild(thCodigo);
    thead.appendChild(trHeader);
    tabela.appendChild(thead);

    // Criar o corpo da tabela (onde os dados serão inseridos)
    const tbody = document.createElement("tbody");

    // Preenchendo a tabela com as cidades
    cidades.forEach(cidade => {
        const tr = document.createElement("tr");

        const tdNome = document.createElement("td");
        tdNome.textContent = cidade.nome;

        const tdCodigo = document.createElement("td");
        tdCodigo.textContent = cidade.codigo;

        tr.appendChild(tdNome);
        tr.appendChild(tdCodigo);
        tbody.appendChild(tr);
    });

    tabela.appendChild(tbody);

    // Adiciona a tabela ao corpo da página
    document.body.appendChild(tabela);
});