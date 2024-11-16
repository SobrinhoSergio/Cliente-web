document.addEventListener('DOMContentLoaded', () => {
    
    const form: HTMLFormElement | null = document.getElementById('formSomar') as HTMLFormElement;
    const resultadoDisplay: HTMLElement | null = document.getElementById('resultado') as HTMLElement;
    const num1Input: HTMLInputElement | null  = document.getElementById('num1') as HTMLInputElement;
    const num2Input: HTMLInputElement | null = document.getElementById('num2') as HTMLInputElement;

    form.addEventListener('submit', (e: Event) => {
        e.preventDefault(); // Impede o formulário de recarregar a página
        
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const resultado = num1 + num2;

        resultadoDisplay.innerText = resultado.toString();
    });
});
