import { cadastrarPessoaNoArray } from './localStorageUtils.js';
import { apagaDivTabela } from './tableManager.js';

export function montaDivCadastro(handleCadastro) {
    const tBody = document.getElementsByTagName("body")[0];
    const divCadastro = document.createElement("div");
    divCadastro.setAttribute("id", "divCadastro");
    tBody.appendChild(divCadastro);

    const fForm = document.createElement("form");
    divCadastro.appendChild(fForm);

    ["Nome", "Idade", "Data de Nascimento", "Estado Civil"].forEach(campo => {
        const label = document.createElement("label");
        label.textContent = `${campo}: `;
        fForm.appendChild(label);

        const input = document.createElement("input");
        input.setAttribute("type", campo === "Idade" ? "number" : "text");
        input.setAttribute("id", `campo_${campo.toLowerCase().replace(" ", "_")}`);
        fForm.appendChild(input);
        fForm.appendChild(document.createElement("br"));
    });

    const tButton = document.createElement("button");
    tButton.setAttribute("type", "button");
    tButton.textContent = "Cadastrar";
    fForm.appendChild(tButton);

    tButton.addEventListener("click", () => {
        const pessoa = {
            nome: document.getElementById("campo_nome").value,
            idade: parseInt(document.getElementById("campo_idade").value, 10),
            dataNascimento: document.getElementById("campo_data_de_nascimento").value,
            estadoCivil: document.getElementById("campo_estado_civil").value,
        };

        handleCadastro(pessoa);
    });
}


