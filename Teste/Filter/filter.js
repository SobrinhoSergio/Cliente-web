// Dados simulados
const users = [
    { nome: "Ana", idade: 22 },
    { nome: "Carlos", idade: 30 },
    { nome: "Beatriz", idade: 18 },
    { nome: "João", idade: 45 },
    { nome: "Diana", idade: 28 },
    { nome: "Eduardo", idade: 35 },
  ];
  
  // Elementos DOM
  const minAgeInput = document.getElementById("min-age");
  const maxAgeInput = document.getElementById("max-age");
  const filterButton = document.getElementById("filter-button");
  const userTable = document.getElementById("user-table");
  
  // Função para exibir usuários na tabela
  function renderTable(data) {
    userTable.innerHTML = ""; // Limpa a tabela
  
    if (data.length === 0) {
      userTable.innerHTML = "<tr><td colspan='2'>Nenhum usuário encontrado</td></tr>";
      return;
    }
  
    data.forEach((user) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${user.nome}</td><td>${user.idade}</td>`;
      userTable.appendChild(row);
    });
  }
  
  // Função para filtrar usuários
  function filterUsers() {
    const minAge = parseInt(minAgeInput.value) || 0;
    const maxAge = parseInt(maxAgeInput.value) || Infinity;
  
    // Validação de intervalo
    if (minAge > maxAge) {
      alert("A idade mínima não pode ser maior que a idade máxima!");
      return;
    }
  
    // Filtrar usuários com base no intervalo
    const filteredUsers = users.filter(
      (user) => user.idade >= minAge && user.idade <= maxAge
    );
  
    renderTable(filteredUsers);
  }
  
  // Inicializa a tabela com todos os usuários
  renderTable(users);
  
  // Adiciona evento ao botão de filtro
  filterButton.addEventListener("click", filterUsers);
  