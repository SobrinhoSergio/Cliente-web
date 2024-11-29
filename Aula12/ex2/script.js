document.addEventListener('DOMContentLoaded', () => {
    // Criação dos elementos dinamicamente
    const titulo = document.createElement('h1');
    titulo.textContent = 'Realce Dinâmico de Nomes';

    const label = document.createElement('label');
    label.setAttribute('for', 'filtro');
    label.textContent = 'Digite um nome ou parte dele:';

    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'filtro';
    input.placeholder = 'Ex: Jo';

    const lista = document.createElement('ol');
    lista.id = 'nomes';

    // Adiciona os nomes à lista dinamicamente
    const nomes = ['João', 'Claudio', 'Marcio'];
    nomes.forEach((nome) => {
        const item = document.createElement('li');
        item.textContent = nome;
        lista.appendChild(item);
    });

    // Adiciona os elementos ao body
    document.body.append(titulo, label, input, lista);

    // Lógica para realçar nomes dinamicamente
    const itens = lista.querySelectorAll('li');
    input.addEventListener('input', () => {
        const termo = input.value.toLowerCase();

        itens.forEach((item) => {
            const nome = item.textContent.toLowerCase();
            if (termo && nome.includes(termo)) {
                item.innerHTML = item.textContent.replace(
                    new RegExp(`(${termo})`, 'gi'),
                    '<b>$1</b>'
                );
            } else {
                item.innerHTML = item.textContent;
            }
        });
    });
});
