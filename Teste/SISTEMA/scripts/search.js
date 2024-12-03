import { users } from './table.js'; // Importa o array de usuários
import { renderTable } from './table.js'; // Reutiliza a lógica de renderização

export function createSearch() {
    // Cria o container do campo de pesquisa
    const searchContainer = document.createElement('div');
    searchContainer.id = 'searchContainer';

    // Campo de texto para pesquisa
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'searchInput';
    input.placeholder = 'Digite um nome para pesquisar...';

    // Botão de pesquisa
    const button = document.createElement('button');
    button.textContent = 'Pesquisar';

    // Adiciona evento de clique no botão
    button.addEventListener('click', () => {
        const searchTerm = input.value.trim().toLowerCase();
        searchUsers(searchTerm); // Chama a função para filtrar os usuários
    });

    // Adiciona os elementos ao container
    searchContainer.appendChild(input);
    searchContainer.appendChild(button);

    return searchContainer;
}

function searchUsers(searchTerm) {
    if (searchTerm === '') {
        renderTable(); // Exibe todos os usuários se o campo de pesquisa estiver vazio
    } else {
        // Filtra os usuários com base no nome
        const filteredUsers = users.filter(user =>
            user.name.toLowerCase().includes(searchTerm)
        );

        renderFilteredTable(filteredUsers);
    }
}

function renderFilteredTable(filteredUsers) {
    const tableBody = document.querySelector('#userTable tbody');
    tableBody.innerHTML = ''; // Limpa a tabela antes de renderizar os resultados

    filteredUsers.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td><button class="deleteButton" data-index="${index}">Deletar</button></td>
        `;
        tableBody.appendChild(row);
    });
}
