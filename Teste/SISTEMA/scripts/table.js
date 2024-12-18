export let users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
];
let userIdCounter = users.length + 1; // Inicializa o contador de IDs baseado no tamanho do array

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
    // Adiciona um ID único ao novo usuário
    user.id = userIdCounter++;
    users.push(user);
    renderTable(); // Atualiza a tabela após adicionar o novo usuário
}

function renderTable() {
    const tableBody = document.querySelector('#userTable tbody');

    if (!tableBody) {
        console.error('Tabela não encontrada no DOM!');
        return;
    }

    tableBody.innerHTML = ''; // Limpa o conteúdo existente

    // Renderiza cada linha da tabela
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

    // Configura os eventos de exclusão
    tableBody.querySelectorAll('.deleteButton').forEach(button => {
        button.addEventListener('click', (event) => {
            const target = event.target;
            const index = parseInt(target.dataset.index);

            if (!isNaN(index) && index >= 0) {
                users.splice(index, 1); // Remove o usuário correspondente
                renderTable(); // Re-renderiza a tabela
            } else {
                console.error('Índice inválido para exclusão.');
            }
        });
    });
}
