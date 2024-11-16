// Definindo o tipo para as cidades
interface Cidade {
    nome: string;
    codigo: number;
}

// Array de objetos com cidades
const cidades1: Cidade[] = [
    { nome: 'Cachoieras de Macacu', codigo: 1 },
    { nome: 'Rio de Janeiro', codigo: 2 },
    { nome: 'Nova Friburgo', codigo: 3 },
    { nome: 'Belo Horizonte', codigo: 4 },
    { nome: 'Cantagalo TS', codigo: 5 }
];

// Elementos do DOM
const cidadeSelect: HTMLSelectElement | null = document.getElementById('cidadeSelect') as HTMLSelectElement;
const cidadeSelecionada: HTMLDivElement | null = document.getElementById('cidadeSelecionada') as HTMLDivElement;
const mostrarCidadeBtn: HTMLButtonElement | null = document.getElementById('mostrarCidadeBtn') as HTMLButtonElement;

// Inicializa o select ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    
    if (!cidadeSelect || !mostrarCidadeBtn || !cidadeSelecionada) {
        console.error("Erro: elementos do DOM não encontrados.");
        return;
    }

    // Preenche o select com as cidades
    cidades1.forEach((cidade: Cidade): void => {
        const option: HTMLOptionElement = document.createElement('option');
        option.value = cidade.codigo.toString(); // Convertendo o código para string
        option.textContent = cidade.nome;
        cidadeSelect.appendChild(option);
    });

    // Adiciona o evento de clique no botão
    mostrarCidadeBtn.addEventListener('click', (): void => {
        const codigoSelecionado: number = parseInt(cidadeSelect.value); // Convertendo o valor para número
        const nomeSelecionado: string = cidadeSelect.options[cidadeSelect.selectedIndex].text;

        if (!isNaN(codigoSelecionado)) {
            cidadeSelecionada.textContent = `Cidade selecionada: ${nomeSelecionado} (Código: ${codigoSelecionado})`;
        } else {
            cidadeSelecionada.textContent = "Por favor, selecione uma cidade.";
        }
    });
});
