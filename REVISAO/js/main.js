import { montaDivCadastro } from './cadastro.js';
import { montaDivFiltro } from './filtro.js';
import { montaDivTabela } from './tabela.js';

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    montaDivCadastro(body);
    montaDivFiltro(body);

    const divAux = document.createElement("div");
    divAux.id = "divAux";
    body.appendChild(divAux);

    montaDivTabela(divAux, "");
});

// Array de cadastro compartilhado entre os módulos
export const arrayCadastro = [];
/*export function cadastrarNomeNoArray(nome) {
    console.log(nome);
    arrayCadastro.push(nome);
}*/

export function cadastrarRegistro({ id, nome, sobrenome, idade, cidade }) {
    // Validações
    if (!nome || !sobrenome || !idade || !cidade) {
        alert("Todos os campos devem ser preenchidos.");
        return false;
    }

    if (isNaN(idade) || parseInt(idade) <= 0) {
        alert("A idade deve ser um número válido e maior que zero.");
        return false;
    }

    const nomeExistente = arrayCadastro.some((item) => item.nome === nome);
    if (nomeExistente) {
        alert("O nome já foi cadastrado. Insira um nome diferente.");
        return false;
    }


    // Registro válido
    arrayCadastro.push({ id, nome, sobrenome, idade, cidade });
    console.log(arrayCadastro);
    return true;
}




export function deletarRegistro(id) {
    const index = arrayCadastro.findIndex((item) => item.id === id);
    if (index !== -1) {
        arrayCadastro.splice(index, 1); // Remove o registro do array
    }
}