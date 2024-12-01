document.addEventListener("DOMContentLoaded", () => {
    // Tipos para as entidades
    interface Pessoa {
      nome: string;
      idade: number;
      sexo: string;
      cidade: string;
      estado: string;
      nascimento: number;
    };
  
    // Variáveis com tipos explícitos
    const estados: string[] = ["SP", "RJ", "MG", "BA", "RS", "PR"];
    const pessoas: Pessoa[] = [
      { nome: "Ana", idade: 25, sexo: "Feminino", cidade: "São Paulo", estado: "SP", nascimento: 1998 },
      { nome: "Carlos", idade: 40, sexo: "Masculino", cidade: "Rio de Janeiro", estado: "RJ", nascimento: 1983 },
      { nome: "Maria", idade: 30, sexo: "Feminino", cidade: "Belo Horizonte", estado: "MG", nascimento: 1993 },
      { nome: "João", idade: 35, sexo: "Masculino", cidade: "Salvador", estado: "BA", nascimento: 1988 },
      { nome: "Lucas", idade: 20, sexo: "Masculino", cidade: "Porto Alegre", estado: "RS", nascimento: 2003 },
    ];
  
    // Referências aos elementos do DOM
    const stateFilter: HTMLSelectElement | null = document.getElementById("stateFilter") as HTMLSelectElement;
    const nameFilter: HTMLInputElement = document.getElementById("nameFilter") as HTMLInputElement;
    const yearFilter: HTMLSelectElement = document.getElementById("yearFilter") as HTMLSelectElement;
    const tableBody: HTMLTableSectionElement = document.querySelector("#dataTable tbody") as HTMLTableSectionElement;
  
    // Adiciona opções ao filtro de estados
    estados.forEach((estado: string) => {
      stateFilter.innerHTML += `<option value="${estado}">${estado}</option>`;
    });
  
    // Adiciona opções ao filtro de anos
    for (let ano: number = 1910; ano <= new Date().getFullYear(); ano++) {
      yearFilter.innerHTML += `<option value="${ano}">${ano}</option>`;
    }
  
    // Atualiza a tabela com os dados filtrados
    const updateTable = (): void => {
      const estado: string = stateFilter.value;
      const nome: string = nameFilter.value.toLowerCase();
      const ano: string = yearFilter.value;
  
      // Aplica os filtros
      const dadosFiltrados: Pessoa[] = pessoas.filter((pessoa: Pessoa) => {
        return (
          (estado === "" || pessoa.estado === estado) &&
          (nome === "" || pessoa.nome.toLowerCase().includes(nome)) &&
          (ano === "" || pessoa.nascimento.toString() === ano)
        );
      });
  
      // Atualiza a tabela
      tableBody.innerHTML = ""; // Limpa a tabela
  
      if (dadosFiltrados.length === 0) {
        tableBody.innerHTML = "<tr><td colspan='6'>Nenhum resultado encontrado</td></tr>";
        return;
      }
  
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
  
    // Eventos para os filtros
    stateFilter.addEventListener("change", updateTable);
    nameFilter.addEventListener("input", updateTable);
    yearFilter.addEventListener("change", updateTable);
  
    // Inicializa a tabela
    updateTable();
  });
  