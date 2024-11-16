document.addEventListener("DOMContentLoaded", function () {
    // Cria o contêiner principal
    const mainDiv: HTMLDivElement = document.createElement("div");
    mainDiv.id = "main";

    // Cria o formulário
    const formCadastro: HTMLFormElement = document.createElement("form");
    formCadastro.method = "POST";
    formCadastro.action = "cadastro.php";
    formCadastro.id = "formCadastro";

    // Função auxiliar para criar divs de entrada
    function createWrapper(): HTMLDivElement {
        const div: HTMLDivElement = document.createElement("div");
        div.className = "itemWrapper";
        return div;
    }

    // Campo Nome
    let nomeWrapper: HTMLDivElement = createWrapper();
    let labelNome: HTMLLabelElement = document.createElement("label");
    labelNome.setAttribute("for", "nome");
    labelNome.textContent = "Nome:";
    let inputNome: HTMLInputElement = document.createElement("input");
    inputNome.type = "text";
    inputNome.id = "nome";
    inputNome.name = "nome";
    inputNome.placeholder = "Informe seu nome.";
    inputNome.required = true;
    nomeWrapper.appendChild(labelNome);
    nomeWrapper.appendChild(inputNome);
    formCadastro.appendChild(nomeWrapper);

    // Campo Idade
    let idadeWrapper: HTMLDivElement = createWrapper();
    let labelIdade: HTMLLabelElement = document.createElement("label");
    labelIdade.setAttribute("for", "idade");
    labelIdade.textContent = "Idade:";
    let inputIdade: HTMLInputElement = document.createElement("input");
    inputIdade.type = "number";
    inputIdade.id = "idade";
    inputIdade.name = "idade";
    inputIdade.placeholder = "Informe sua idade.";
    idadeWrapper.appendChild(labelIdade);
    idadeWrapper.appendChild(inputIdade);
    formCadastro.appendChild(idadeWrapper);

    // Campo Sexo
    let sexoWrapper: HTMLDivElement = createWrapper();
    let labelSexo: HTMLLabelElement = document.createElement("label");
    labelSexo.textContent = "Sexo:";
    sexoWrapper.appendChild(labelSexo);

    const sexos = [
        { id: "sexo_M", value: "M", label: "Masculino" },
        { id: "sexo_F", value: "F", label: "Feminino" },
        { id: "sexo_O", value: "O", label: "Outros" }
    ];
    sexos.forEach((sexo, index) => {
        let inputSexo: HTMLInputElement = document.createElement("input");
        inputSexo.type = "radio";
        inputSexo.id = sexo.id;
        inputSexo.name = "sexo";
        inputSexo.value = sexo.value;

        // Marca o primeiro sexo como selecionado por padrão
        if (index === 0) {
            inputSexo.checked = true; // Marca o primeiro como selecionado
        }

        let labelSexoItem: HTMLLabelElement = document.createElement("label");
        labelSexoItem.setAttribute("for", sexo.id);
        labelSexoItem.textContent = sexo.label;
        sexoWrapper.appendChild(inputSexo);
        sexoWrapper.appendChild(labelSexoItem);
    });
    formCadastro.appendChild(sexoWrapper);

    // Campo Esporte Preferido
    let esporteWrapper: HTMLDivElement = createWrapper();
    let labelEsporte: HTMLLabelElement = document.createElement("label");
    labelEsporte.textContent = "Esporte Preferido:";
    esporteWrapper.appendChild(labelEsporte);

    const esportes = [
        { id: "esporte_preferido_F", value: "F", label: "Futebol", checked: true },
        { id: "esporte_preferido_V", value: "V", label: "Vôlei" },
        { id: "esporte_preferido_N", value: "N", label: "Natação", checked: true },
        { id: "esporte_preferido_O", value: "O", label: "Outros" }
    ];
    esportes.forEach(esporte => {
        let inputEsporte: HTMLInputElement = document.createElement("input");
        inputEsporte.type = "checkbox";
        inputEsporte.id = esporte.id;
        inputEsporte.name = "esporte_preferido";
        inputEsporte.value = esporte.value;
        inputEsporte.checked = esporte.checked || false;
        let labelEsporteItem: HTMLLabelElement = document.createElement("label");
        labelEsporteItem.setAttribute("for", esporte.id);
        labelEsporteItem.textContent = esporte.label;
        esporteWrapper.appendChild(inputEsporte);
        esporteWrapper.appendChild(labelEsporteItem);
    });
    formCadastro.appendChild(esporteWrapper);

    // Campo Cidade de Nascimento
    let cidadeWrapper: HTMLDivElement = createWrapper();
    let labelCidade: HTMLLabelElement = document.createElement("label");
    labelCidade.setAttribute("for", "cidade_nascimento");
    labelCidade.textContent = "Cidade de Nasc:";
    let inputCidade: HTMLInputElement = document.createElement("input");
    inputCidade.type = "text";
    inputCidade.id = "cidade_nascimento";
    inputCidade.name = "cidade_nascimento";
    inputCidade.placeholder = "Informe a cidade que você nasceu.";
    inputCidade.required = true;
    cidadeWrapper.appendChild(labelCidade);
    cidadeWrapper.appendChild(inputCidade);
    formCadastro.appendChild(cidadeWrapper);

    // Campo Estado de Nascimento
    let estadoWrapper: HTMLDivElement = createWrapper();
    let labelEstado: HTMLLabelElement = document.createElement("label");
    labelEstado.setAttribute("for", "estado_nascimento");
    labelEstado.textContent = "Estado de Nasc:";
    let selectEstado: HTMLSelectElement = document.createElement("select");
    selectEstado.id = "estado_nascimento";
    selectEstado.name = "estado_nascimento";
    selectEstado.required = true;
    ["-", "RJ", "SP", "ES", "MG", "O"].forEach((estado) => {
        let option: HTMLOptionElement = document.createElement("option");
        option.value = estado;
        option.textContent = estado === "-" ? "-" : estado;
        if (estado === "MG") option.selected = true;
        selectEstado.appendChild(option);
    });
    estadoWrapper.appendChild(labelEstado);
    estadoWrapper.appendChild(selectEstado);
    formCadastro.appendChild(estadoWrapper);

    // Campo CPF
    let cpfWrapper: HTMLDivElement = createWrapper();
    let labelCpf: HTMLLabelElement = document.createElement("label");
    labelCpf.setAttribute("for", "cpf");
    labelCpf.textContent = "CPF:";
    let inputCpf: HTMLInputElement = document.createElement("input");
    inputCpf.type = "number";
    inputCpf.id = "cpf";
    inputCpf.name = "cpf";
    inputCpf.placeholder = "Informe seu CPF.";
    inputCpf.required = true;
    cpfWrapper.appendChild(labelCpf);
    cpfWrapper.appendChild(inputCpf);
    formCadastro.appendChild(cpfWrapper);

    // Campo Descrição
    let descricaoWrapper: HTMLDivElement = createWrapper();
    let labelDescricao: HTMLLabelElement = document.createElement("label");
    labelDescricao.setAttribute("for", "descricao");
    labelDescricao.textContent = "Descrição:";
    let inputDescricao: HTMLTextAreaElement = document.createElement("textarea");
    inputDescricao.id = "descricao";
    inputDescricao.name = "descricao";
    inputDescricao.placeholder = "Faça uma descrição sobre você.";
    descricaoWrapper.appendChild(labelDescricao);
    descricaoWrapper.appendChild(inputDescricao);
    formCadastro.appendChild(descricaoWrapper);

    // Botões de Enviar e Limpar
    let buttonWrapper: HTMLDivElement = document.createElement("div");
    buttonWrapper.className = "itemWrapperBTNsSubmitReset";
    let submitButton: HTMLButtonElement = document.createElement("button");
    submitButton.type = "submit";
    submitButton.id = "botao_enviar";
    submitButton.name = "enviar";
    submitButton.textContent = "Enviar";
    let resetButton: HTMLButtonElement = document.createElement("button");
    resetButton.type = "reset";
    resetButton.id = "botao_limpar_form";
    resetButton.name = "reset";
    resetButton.textContent = "Limpar Formulário";
    buttonWrapper.appendChild(submitButton);
    buttonWrapper.appendChild(resetButton);
    formCadastro.appendChild(buttonWrapper);

    // Adiciona o formulário ao contêiner principal
    mainDiv.appendChild(formCadastro);
    document.body.appendChild(mainDiv);
});
