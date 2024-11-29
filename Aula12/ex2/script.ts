document.addEventListener('DOMContentLoaded', () => {
    // Criação dinâmica dos elementos
    const titulo: HTMLHeadingElement = document.createElement('h1');
    titulo.textContent = 'Realce Dinâmico de Nomes';

    const label: HTMLLabelElement = document.createElement('label');
    label.setAttribute('for', 'filtro');
    label.textContent = 'Digite um nome ou parte dele:';

    const input: HTMLInputElement = document.createElement('input');
    input.type = 'text';
    input.id = 'filtro';
    input.placeholder = 'Ex: Jo';

    const lista: HTMLOListElement = document.createElement('ol');
    lista.id = 'nomes';

    // Adiciona os nomes à lista dinamicamente
    const nomes: string[] = ['João', 'Claudio', 'Marcio'];
    nomes.forEach((nome: string) => {
        const item: HTMLLIElement = document.createElement('li');
        item.textContent = nome;
        lista.appendChild(item);
    });

    // Adiciona os elementos ao body
    document.body.append(titulo, label, input, lista);

    // Seleciona os itens da lista
    const itens: NodeListOf<HTMLLIElement> = lista.querySelectorAll('li');

    // Evento de input para realce dinâmico
    input.addEventListener('input', () => {
        const termo: string = input.value.toLowerCase();

        itens.forEach((item: HTMLLIElement) => {
            const nome: string = item.textContent || '';
            if (termo && nome.toLowerCase().includes(termo)) {
                item.innerHTML = nome.replace(
                    new RegExp(`(${termo})`, 'gi'),
                    '<b>$1</b>'
                );
            } else {
                item.innerHTML = nome; // Restaura o texto original
            }
        });
    });
});
