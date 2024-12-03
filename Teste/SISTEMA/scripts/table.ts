// Definição do tipo para o usuário
export interface User {
    id: number;
    name: string;
    age: number;
}

// Array inicial de usuários
export let users: User[] = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
];

// Variável para gerenciar IDs únicos
let userIdCounter: number = users.length + 1;

// Cria a tabela e retorna o elemento
export function createTable(): HTMLTableElement {
    const table = document.createElement('table');
    table.id = 'userTable';

    // Cabeçalho da tabela
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

// Adiciona um usuário ao array e re-renderiza a tabela
export function addUser(user: Omit<User, 'id'>): void {
    const newUser: User = { ...user, id: userIdCounter++ }; // Gera um ID único para o novo usuário
    users.push(newUser);
    renderTable(); // Atualiza a tabela
}

// Renderiza a tabela com os dados atuais do array
function renderTable(): void {
    const tableBody = document.querySelector<HTMLTableSectionElement>('#userTable tbody');

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
    tableBody.querySelectorAll<HTMLButtonElement>('.deleteButton').forEach(button => {
        button.addEventListener('click', (event: MouseEvent) => {
            const target = event.target as HTMLButtonElement;
            const index = parseInt(target.dataset.index || '');

            if (!isNaN(index) && index >= 0) {
                users.splice(index, 1); // Remove o usuário correspondente
                renderTable(); // Re-renderiza a tabela
            } else {
                console.error('Índice inválido para exclusão.');
            }
        });
    });
}
