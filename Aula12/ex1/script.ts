// Cria os elementos da interface de forma dinâmica
document.addEventListener('DOMContentLoaded', () => {
    // Criação dos elementos
    const titulo: HTMLHeadingElement = document.createElement('h1');
    titulo.textContent = 'Tabuada Automática';

    const label: HTMLLabelElement = document.createElement('label');
    label.textContent = 'Digite um número:';
    label.htmlFor = 'numero';

    const input: HTMLInputElement = document.createElement('input');
    input.type = 'number';
    input.id = 'numero';
    input.placeholder = 'Ex: 5';

    const botao: HTMLButtonElement = document.createElement('button');
    botao.textContent = 'Confirmar';

    const lista: HTMLUListElement = document.createElement('ul');
    lista.id = 'tabuada';

    // Adiciona os elementos ao body
    document.body.append(titulo, label, input, botao, lista);

    // Evento de clique para gerar a tabuada
    botao.addEventListener('click', () => {
        const numero: number = parseInt(input.value);
        lista.innerHTML = ''; // Limpa a lista

        if (!isNaN(numero)) {
            for (let i = 1; i <= 10; i++) {
                const item: HTMLLIElement = document.createElement('li');
                item.textContent = `${numero} x ${i} = ${numero * i}`;
                lista.appendChild(item);
            }
        } else {
            const erro: HTMLLIElement = document.createElement('li');
            erro.textContent = 'Por favor, insira um número válido.';
            lista.appendChild(erro);
        }
    });
});
