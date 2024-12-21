export function montaDivTabela(el) {
    const divTabela = document.createElement("div");
    divTabela.setAttribute("id", "divTabela");
    el.appendChild(divTabela);
    const tTable = document.createElement("table");
    divTabela.appendChild(tTable);

    const trCabecalho = document.createElement("tr");
    tTable.appendChild(trCabecalho);

    ["Nome", "Idade", "Data de Nascimento", "Estado Civil"].forEach(cabecalho => {
        const th = document.createElement("th");
        th.textContent = cabecalho;
        trCabecalho.appendChild(th);
    });

    const pessoas = JSON.parse(localStorage.getItem("pessoas"));

    pessoas.forEach(pessoa => {
        const trCorpo = document.createElement("tr");

        ["nome", "idade", "dataNascimento", "estadoCivil"].forEach(campo => {
            const td = document.createElement("td");
            td.textContent = pessoa[campo];
            trCorpo.appendChild(td);
        });

        tTable.appendChild(trCorpo);
    });
}


export const apagaDivTabela = (el, filtroNome) => {
    const divTabela = document.getElementById("divTabela");
    if (divTabela) el.removeChild(divTabela);
    montaDivTabela(el, filtroNome);
};
