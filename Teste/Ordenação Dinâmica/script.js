// Dados simulados
const users = [
    { id: 1, nome: "Ana", idade: 22 },
    { id: 2, nome: "Carlos", idade: 30 },
    { id: 3, nome: "Beatriz", idade: 18 },
    { id: 4, nome: "João", idade: 45 },
    { id: 5, nome: "Diana", idade: 28 },
    { id: 6, nome: "Eduardo", idade: 35 },
  ];
  
  let filteredUsers = [...users]; // Usado para manter o estado após filtragem
  
  // Elementos DOM
  const minAgeInput = document.getElementById("min-age");
  const maxAgeInput = document.getElementById("max-age");
  const filterButton = document.getElementById("filter-button");
  const userTable = document.getElementById("user-table");
  const sortIdButton = document.getElementById("sort-id");
  const sortNameButton = document.getElementById("sort-name");
  const sortAgeButton = document.getElementById("sort-age");
  
  // Renderiza a tabela
  function renderTable(data) {
    userTable.innerHTML = "";
  
    if (data.length === 0) {
      userTable.innerHTML = "<tr><td colspan='3'>Nenhum usuário encontrado</td></tr>";
      return;
    }
  
    data.forEach((user) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${user.id}</td><td>${user.nome}</td><td>${user.idade}</td>`;
      userTable.appendChild(row);
    });
  }
  
  // Filtra usuários por intervalo de idade
  function filterUsers() {
    const minAge = parseInt(minAgeInput.value) || 0;
    const maxAge = parseInt(maxAgeInput.value) || Infinity;
  
    if (minAge > maxAge) {
      alert("A idade mínima não pode ser maior que a idade máxima!");
      return;
    }
  
    filteredUsers = users.filter(
      (user) => user.idade >= minAge && user.idade <= maxAge
    );
  
    renderTable(filteredUsers);
  }
  
  // Ordena os usuários
  function sortUsers(field, ascending = true) {
    filteredUsers.sort((a, b) => {
      if (a[field] < b[field]) return ascending ? -1 : 1;
      if (a[field] > b[field]) return ascending ? 1 : -1;
      return 0;
    });
  
    renderTable(filteredUsers);
  }
  
  // Eventos de filtragem
  filterButton.addEventListener("click", filterUsers);
  
  // Eventos de ordenação
  let idAscending = true;
  let nameAscending = true;
  let ageAscending = true;
  
  sortIdButton.addEventListener("click", () => {
    sortUsers("id", idAscending);
    idAscending = !idAscending;
  });
  
  sortNameButton.addEventListener("click", () => {
    sortUsers("nome", nameAscending);
    nameAscending = !nameAscending;
  });
  
  sortAgeButton.addEventListener("click", () => {
    sortUsers("idade", ageAscending);
    ageAscending = !ageAscending;
  });
  
  // Inicializa com todos os usuários
  renderTable(filteredUsers);
  