// Cria os elementos da interface de forma dinâmica
document.addEventListener('DOMContentLoaded', () => {
    // Criação dos elementos
    const titulo = document.createElement('h1');
    titulo.textContent = 'Tabuada Automática';

    const label = document.createElement('label');
    label.textContent = 'Digite um número:';
    label.htmlFor = 'numero';

    const input = document.createElement('input');
    input.type = 'number';
    input.id = 'numero';
    input.placeholder = 'Ex: 5';

    const botao = document.createElement('button');
    botao.textContent = 'Confirmar';

    const lista = document.createElement('ul');
    lista.id = 'tabuada';

    // Adiciona os elementos ao body
    document.body.append(titulo, label, input, botao, lista);

    // Evento de clique para gerar a tabuada
    botao.addEventListener('click', () => {
        const numero = parseInt(input.value);
        lista.innerHTML = ''; // Limpa a lista

        if (!isNaN(numero)) {
            for (let i = 1; i <= 10; i++) {
                const item = document.createElement('li');
                item.textContent = `${numero} x ${i} = ${numero * i}`;
                lista.appendChild(item);
            }
        } else {
            lista.innerHTML = '<li>Por favor, insira um número válido.</li>';
        }
    });
});
