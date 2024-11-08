document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.getElementById('formSomar');
    
    form.addEventListener('submit', (e) => {
        
        e.preventDefault(); // Impede o formulário de recarregar a página
        
        const num1 = parseFloat(document.getElementById('num1').value);
        
        const num2 = parseFloat(document.getElementById('num2').value);
        
        const resultado = num1 + num2;
        
        document.getElementById('resultado').innerText = resultado;
    });
});
