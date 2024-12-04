document.addEventListener("DOMContentLoaded", () => {
    interface Pessoa {
        nome: string;
        idade: number;
        sexo: string;
        cidade: string;
        estado: string;
        nascimento: number;
    };

    const estados: string[] = ["SP", "RJ", "MG", "BA", "RS", "PR"];
    const pessoas: Pessoa[] = [
        { nome: "Ana", idade: 25, sexo: "Feminino", cidade: "São Paulo", estado: "SP", nascimento: 1998 },
        { nome: "Carlos", idade: 40, sexo: "Masculino", cidade: "Rio de Janeiro", estado: "RJ", nascimento: 1983 },
        { nome: "Maria", idade: 30, sexo: "Feminino", cidade: "Belo Horizonte", estado: "MG", nascimento: 1993 },
        { nome: "João", idade: 35, sexo: "Masculino", cidade: "Salvador", estado: "BA", nascimento: 1988 },
        { nome: "Lucas", idade: 20, sexo: "Masculino", cidade: "Porto Alegre", estado: "RS", nascimento: 2003 },
    ];

    const stateFilter = document.getElementById("stateFilter") as HTMLSelectElement;
    const nameFilter = document.getElementById("nameFilter") as HTMLInputElement;
    const yearFilter = document.getElementById("yearFilter") as HTMLSelectElement;
    const tableBody = document.querySelector("#dataTable tbody") as HTMLTableSectionElement;

    const totalIdadeDisplay = document.getElementById("totalIdade") as HTMLElement;
    const maiorIdadeDisplay = document.getElementById("maiorIdade") as HTMLElement;
    const menorIdadeDisplay = document.getElementById("menorIdade") as HTMLElement;

    estados.forEach((estado: string) => {
        stateFilter.innerHTML += `<option value="${estado}">${estado}</option>`;
    });

    for (let ano: number = 1910; ano <= new Date().getFullYear(); ano++) {
        yearFilter.innerHTML += `<option value="${ano}">${ano}</option>`;
    }

    const updateTable = (): void => {
        const estado: string = stateFilter.value;
        const nome: string = nameFilter.value.toLowerCase();
        const ano: string = yearFilter.value;

        const dadosFiltrados: Pessoa[] = pessoas.filter((pessoa: Pessoa) => {
            return (
                (estado === "" || pessoa.estado === estado) &&
                (nome === "" || pessoa.nome.toLowerCase().includes(nome)) &&
                (ano === "" || pessoa.nascimento.toString() === ano)
            );
        });

        tableBody.innerHTML = "";

        if (dadosFiltrados.length === 0) {
            tableBody.innerHTML = "<tr><td colspan='6'>Nenhum resultado encontrado</td></tr>";
            totalIdadeDisplay.textContent = "Total de Idades: 0";
            maiorIdadeDisplay.textContent = "Maior Idade: -";
            menorIdadeDisplay.textContent = "Menor Idade: -";
            return;
        }

        // Soma das idades, maior e menor idade
        const totalIdades = dadosFiltrados.reduce((total, pessoa) => total + pessoa.idade, 0);
        const maiorIdade = Math.max(...dadosFiltrados.map(pessoa => pessoa.idade));
        const menorIdade = Math.min(...dadosFiltrados.map(pessoa => pessoa.idade));

        // Atualiza as informações no DOM
        totalIdadeDisplay.textContent = `Total de Idades: ${totalIdades}`;
        maiorIdadeDisplay.textContent = `Maior Idade: ${maiorIdade}`;
        menorIdadeDisplay.textContent = `Menor Idade: ${menorIdade}`;

        dadosFiltrados.forEach((pessoa: Pessoa) => {
            tableBody.innerHTML += `
                <tr>
                    <td>${pessoa.nome}</td>
                    <td>${pessoa.idade}</td>
                    <td>${pessoa.sexo}</td>
                    <td>${pessoa.cidade}</td>
                    <td>${pessoa.estado}</td>
                    <td>${pessoa.nascimento}</td>
                </tr>
            `;
        });
    };

    stateFilter.addEventListener("change", updateTable);
    nameFilter.addEventListener("input", updateTable);
    yearFilter.addEventListener("change", updateTable);

    updateTable();
});
