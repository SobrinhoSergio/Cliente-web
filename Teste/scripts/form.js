import { addUser } from './table.js';

export function createForm() {
    const form = document.createElement('form');
    form.id = 'userForm';

    // Nome
    const nameLabel = document.createElement('label');
    nameLabel.htmlFor = 'nameInput';
    nameLabel.textContent = 'Nome:';
    form.appendChild(nameLabel);

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'nameInput';
    nameInput.required = true;
    form.appendChild(nameInput);

    // Idade
    const ageLabel = document.createElement('label');
    ageLabel.htmlFor = 'ageInput';
    ageLabel.textContent = 'Idade:';
    form.appendChild(ageLabel);

    const ageInput = document.createElement('input');
    ageInput.type = 'number';
    ageInput.id = 'ageInput';
    ageInput.required = true;
    form.appendChild(ageInput);

    // Botão
    const addButton = document.createElement('button');
    addButton.type = 'button';
    addButton.textContent = 'Adicionar Usuário';
    form.appendChild(addButton);

    // Evento de adição
    addButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const age = parseInt(ageInput.value);

        if (name && !isNaN(age)) {
            addUser({ name, age });
            form.reset();
        } else {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    });

    return form;
}
