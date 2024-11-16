// Array de objetos com cidades
const cidades = [
    { nome: 'Cachoieras de Macacu', codigo: 1 },
    { nome: 'Rio de Janeiro', codigo: 2 },
    { nome: 'Nova Friburgo', codigo: 3 },
    { nome: 'Belo Horizonte', codigo: 4 },
    { nome: 'Cantagalo JS', codigo: 5 }
];

// Elementos do DOM
const cidadeSelect = document.getElementById('cidadeSelect');
const cidadeSelecionada = document.getElementById('cidadeSelecionada');
const mostrarCidadeBtn = document.getElementById('mostrarCidadeBtn');

// Inicializa o select ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    // Preenche o select com as cidades
    cidades.forEach(cidade => {
        const option = document.createElement('option');
        option.value = cidade.codigo;
        option.textContent = cidade.nome;
        cidadeSelect.appendChild(option);
    });

    // Adiciona o evento de clique no botão
    mostrarCidadeBtn.addEventListener('click', () => {
        const codigoSelecionado = cidadeSelect.value;
        const nomeSelecionado = cidadeSelect.options[cidadeSelect.selectedIndex].text;

        if (codigoSelecionado) {
            cidadeSelecionada.textContent = `Cidade selecionada: ${nomeSelecionado} (Código: ${codigoSelecionado})`;
        } else {
            cidadeSelecionada.textContent = "Por favor, selecione uma cidade.";
        }
    });
});
