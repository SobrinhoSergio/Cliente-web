document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('formNomeSobrenome') as HTMLFormElement;
    const resultadoDisplay = document.getElementById('nomeCompleto') as HTMLElement;
    const nomeInput = document.getElementById('nome') as HTMLInputElement;
    const sobrenomeInput = document.getElementById('sobrenome') as HTMLInputElement;

    form.addEventListener('submit', (e: Event) => {
        e.preventDefault();


        const nome = nomeInput.value;
        const sobrenome = sobrenomeInput.value;

        const nomeCompleto = `${nome} ${sobrenome}`;

        resultadoDisplay.innerText = nomeCompleto;
    });
});
