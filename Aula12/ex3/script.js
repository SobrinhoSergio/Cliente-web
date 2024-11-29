document.addEventListener('DOMContentLoaded', () => {
    // Criar os elementos
    const titulo = document.createElement('h1');
    titulo.textContent = 'Contador de Números';

    const labelMin = document.createElement('label');
    labelMin.textContent = 'Valor Mínimo:';
    const inputMin = document.createElement('input');
    inputMin.type = 'number';
    inputMin.id = 'valorMin';

    const labelMax = document.createElement('label');
    labelMax.textContent = 'Valor Máximo:';
    const inputMax = document.createElement('input');
    inputMax.type = 'number';
    inputMax.id = 'valorMax';

    const botao = document.createElement('button');
    botao.textContent = 'Contar';

    const resultado = document.createElement('p');
    resultado.id = 'resultado';

    // Adicionar elementos ao body
    document.body.append(titulo, labelMin, inputMin, labelMax, inputMax, botao, resultado);

    // Lógica de contagem
    botao.addEventListener('click', () => {
        const min = parseInt(inputMin.value);
        const max = parseInt(inputMax.value);

        if (isNaN(min) || isNaN(max)) {
            resultado.textContent = 'Por favor, insira valores válidos.';
            return;
        }

        if (min >= max) {
            resultado.textContent = 'O valor mínimo deve ser menor que o valor máximo.';
            return;
        }

        let count = 0;
        for (let i = min; i <= max; i++) {
            if (i % 2 === 0 && i % 3 === 0) {
                count++;
            }
        }
        resultado.textContent = `Existem ${count} números múltiplos de 2 e 3 entre ${min} e ${max}.`;
    });
});
