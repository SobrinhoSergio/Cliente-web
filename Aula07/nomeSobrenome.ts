document.addEventListener('DOMContentLoaded', () => {

    const form: HTMLFormElement | null = document.getElementById('formNomeSobrenome') as HTMLFormElement;
    const resultadoDisplay: HTMLElement | null = document.getElementById('nomeCompleto') as HTMLElement;
    const nomeInput: HTMLInputElement | null = document.getElementById('nome') as HTMLInputElement;
    const sobrenomeInput: HTMLInputElement | null = document.getElementById('sobrenome') as HTMLInputElement;

    form.addEventListener('submit', (e: Event) => {
        e.preventDefault();


        const nome = nomeInput.value;
        const sobrenome = sobrenomeInput.value;

        const nomeCompleto = `${nome} ${sobrenome}`;

        resultadoDisplay.innerText = nomeCompleto;
    });
});
