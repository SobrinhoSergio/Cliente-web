import { addUser } from './table.ts';

export function createForm(): HTMLFormElement {
    const form: HTMLFormElement = document.createElement('form');
    form.id = 'userForm';

    const registeredNames: string[] = []; // Array para controlar os nomes cadastrados

    // Nome
    const nameLabel: HTMLLabelElement = document.createElement('label');
    nameLabel.htmlFor = 'nameInput';
    nameLabel.textContent = 'Nome:';
    form.appendChild(nameLabel);

    const nameInput: HTMLInputElement = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'nameInput';
    nameInput.required = true;
    form.appendChild(nameInput);

    // Idade
    const ageLabel: HTMLLabelElement = document.createElement('label');
    ageLabel.htmlFor = 'ageInput';
    ageLabel.textContent = 'Idade:';
    form.appendChild(ageLabel);

    const ageInput: HTMLInputElement = document.createElement('input');
    ageInput.type = 'number';
    ageInput.id = 'ageInput';
    ageInput.required = true;
    form.appendChild(ageInput);

    // Botão
    const addButton: HTMLButtonElement = document.createElement('button');
    addButton.type = 'button';
    addButton.textContent = 'Adicionar Usuário';
    form.appendChild(addButton);

    // Evento de adição
    addButton.addEventListener('click', () => {
        const name: string = nameInput.value.trim();
        const age: number = parseInt(ageInput.value, 10);

        if (name && !isNaN(age)) {
            // Verificar se o nome já está registrado
            if (registeredNames.includes(name)) {
                alert('Este nome já foi cadastrado.');
            } else {
                addUser({ name, age });
                registeredNames.push(name); // Adiciona o nome à lista de nomes registrados
                form.reset();
            }
        } else {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    });

    return form;
}
