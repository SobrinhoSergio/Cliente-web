export let users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
];
let userIdCounter = 1; // Inicializa o contador de IDs

export function createTable() {
    const table = document.createElement('table');
    table.id = 'userTable';

    // Cabeçalho
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Ações</th>
        </tr>
    `;
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    return table;
}

export function addUser(user) {
    user.id = userIdCounter++; // Adiciona um ID único ao novo usuário
    users.push(user);
    renderTable();
}

function renderTable() {
    const tableBody = document.querySelector('#userTable tbody');
    tableBody.innerHTML = '';

    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td><button class="deleteButton" data-index="${index}">Deletar</button></td>
        `;
        tableBody.appendChild(row);
    });

    // Eventos de exclusão
    tableBody.querySelectorAll('.deleteButton').forEach(button => {
        button.addEventListener('click', (event) => {
            const target = event.target;
            const index = parseInt(target.dataset.index);
            users.splice(index, 1);
            renderTable();
        });
    });
}
