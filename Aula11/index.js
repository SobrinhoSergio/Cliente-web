document.addEventListener("DOMContentLoaded", function () {
    const estados = ["SP", "RJ", "MG", "BA", "RS", "PR"];
    const pessoas = [
      { nome: "Ana", idade: 25, sexo: "Feminino", cidade: "São Paulo", estado: "SP", nascimento: 1998 },
      { nome: "Carlos", idade: 40, sexo: "Masculino", cidade: "Rio de Janeiro", estado: "RJ", nascimento: 1983 },
      { nome: "Maria", idade: 30, sexo: "Feminino", cidade: "Belo Horizonte", estado: "MG", nascimento: 1993 },
      { nome: "João", idade: 35, sexo: "Masculino", cidade: "Salvador", estado: "BA", nascimento: 1988 },
      { nome: "Lucas", idade: 20, sexo: "Masculino", cidade: "Porto Alegre", estado: "RS", nascimento: 2003 },
    ];
  
    const stateFilter = document.getElementById("stateFilter");
    const nameFilter = document.getElementById("nameFilter");
    const yearFilter = document.getElementById("yearFilter");
    const tableBody = document.querySelector("#dataTable tbody");
  
    // Adiciona opções ao filtro de estados
    estados.forEach(function (estado) {
      stateFilter.innerHTML += `<option value="${estado}">${estado}</option>`;
    });
  
    // Adiciona opções ao filtro de anos
    for (let ano = 1910; ano <= new Date().getFullYear(); ano++) {
      yearFilter.innerHTML += `<option value="${ano}">${ano}</option>`;
    }
  
    // Atualiza a tabela com os dados filtrados
    function updateTable() {
      const estado = stateFilter.value;
      const nome = nameFilter.value.toLowerCase();
      const ano = yearFilter.value;
  
      const dadosFiltrados = pessoas.filter(function (pessoa) {
        return (
          (estado === "" || pessoa.estado === estado) &&
          (nome === "" || pessoa.nome.toLowerCase().includes(nome)) &&
          (ano === "" || pessoa.nascimento == ano)
        );
      });
  
      tableBody.innerHTML = ""; // Limpa a tabela
  
      if (dadosFiltrados.length === 0) {
        tableBody.innerHTML = "<tr><td colspan='6'>Nenhum resultado encontrado</td></tr>";
        return;
      }
  
      dadosFiltrados.forEach(function (pessoa) {
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
    }
  
    // Eventos para filtrar
    stateFilter.addEventListener("change", updateTable);
    nameFilter.addEventListener("input", updateTable);
    yearFilter.addEventListener("change", updateTable);
  
    // Inicializa a tabela
    updateTable();
  });
  