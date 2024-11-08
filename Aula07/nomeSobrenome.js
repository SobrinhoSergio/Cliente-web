// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.getElementById('formNomeSobrenome');

    // Adiciona um evento de submissão ao formulário
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o formulário de recarregar a página
        
        const nome = document.getElementById('nome').value;
        const sobrenome = document.getElementById('sobrenome').value;
        
        const nomeCompleto = nome + ' ' + sobrenome;
        
        document.getElementById('nomeCompleto').innerText = nomeCompleto;
    });
});

