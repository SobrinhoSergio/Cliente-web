import { cargaInicial } from './localStorageUtils.js';
import { montaDivTabela } from './tableManager.js';
import { montaDivFiltro } from './filterManager.js';
import { montaDivCadastro } from './formManager.js';

document.addEventListener("DOMContentLoaded", () => {
    cargaInicial();  // Carrega os dados do localStorage
    montaDivCadastro(handleCadastro);  // Cria o formulário de cadastro
    montaDivFiltro();  // Cria o filtro

    const divAux = document.createElement("div");
    divAux.setAttribute("id", "divAux");
    document.body.appendChild(divAux);

    montaDivTabela(divAux);  // Cria a tabela com os dados
});

// Função para lidar com o cadastro de uma pessoa
function handleCadastro(pessoa) {
    try {
        if (pessoa.idade < 15) {
            throw new IdadeMinimaError("Idade mínima é 15 anos.");
        }
        cadastrarPessoaNoArray(pessoa);
        apagaDivTabela(document.getElementById("divAux"), "");
    } catch (error) {
        if (error instanceof IdadeMinimaError) {
            alert(error.message);
        } else {
            console.error("Erro desconhecido:", error);
        }
    }
}
