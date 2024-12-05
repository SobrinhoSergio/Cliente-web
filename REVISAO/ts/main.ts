import { montaDivCadastro } from './cadastro.js';
import { montaDivFiltro } from './filtro.js';
import { montaDivTabela } from './tabela.js';

// Array de cadastro compartilhado entre os módulos
export const arrayCadastro: Array<{
    id: string;
    nome: string;
    sobrenome: string;
    idade: number;
    cidade: string;
}> = [];

document.addEventListener("DOMContentLoaded", () => {
    const body: HTMLElement = document.body;

    montaDivCadastro(body);
    montaDivFiltro(body);

    const divAux: HTMLDivElement = document.createElement("div");
    divAux.id = "divAux";
    body.appendChild(divAux);

    montaDivTabela(divAux, ""); // Exibe a tabela inicialmente vazia
});

export function cadastrarRegistro({
    id,
    nome,
    sobrenome,
    idade,
    cidade,
}: {
    id: string;
    nome: string;
    sobrenome: string;
    idade: number | string;
    cidade: string;
}): boolean {
    // Validações
    if (!nome || !sobrenome || !idade || !cidade) {
        alert("Todos os campos devem ser preenchidos.");
        return false;
    }

    if (isNaN(Number(idade)) || parseInt(String(idade)) <= 0) {
        alert("A idade deve ser um número válido e maior que zero.");
        return false;
    }

    const nomeExistente = arrayCadastro.some((item) => item.nome === nome);
    if (nomeExistente) {
        alert("O nome já foi cadastrado. Insira um nome diferente.");
        return false;
    }

    // Registro válido
    arrayCadastro.push({
        id,
        nome,
        sobrenome,
        idade: parseInt(String(idade)),
        cidade,
    });

    console.log("Registro cadastrado com sucesso:", arrayCadastro);
    return true;
}

/**
 * Função para deletar um registro pelo ID.
 * @param id ID do registro a ser removido.
 */
export function deletarRegistro(id: string): void {
    const index = arrayCadastro.findIndex((item) => item.id === id);
    if (index !== -1) {
        arrayCadastro.splice(index, 1); // Remove o registro do array
        console.log(`Registro com ID ${id} removido.`);
    } else {
        console.warn(`Registro com ID ${id} não encontrado.`);
    }
}
