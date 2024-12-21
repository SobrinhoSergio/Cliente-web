export function cargaInicial() {
    if (!localStorage.getItem("pessoas")) {
        var pessoas = [];
        localStorage.setItem("pessoas", JSON.stringify(pessoas));
    }
}


export const cadastrarPessoaNoArray = (pessoa) => {
    const pessoas = JSON.parse(localStorage.getItem("pessoas"));
    pessoas.push(pessoa);
    localStorage.setItem("pessoas", JSON.stringify(pessoas));
};
