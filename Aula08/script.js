document.addEventListener("DOMContentLoaded", function() {
    // Cria o contêiner principal
    const mainDiv = document.createElement("div");
    mainDiv.id = "main";

    // Cria o formulário
    const formCadastro = document.createElement("form");
    formCadastro.method = "POST";
    formCadastro.action = "cadastro.php";
    formCadastro.id = "formCadastro";

    // Função auxiliar para criar divs de entrada
    function createWrapper() {
        const div = document.createElement("div");
        div.className = "itemWrapper";
        return div;
    }

    // Campo Nome
    let nomeWrapper = createWrapper();
    let labelNome = document.createElement("label");
    labelNome.setAttribute("for", "nome");
    labelNome.textContent = "Nome:";
    let inputNome = document.createElement("input");
    inputNome.type = "text";
    inputNome.id = "nome";
    inputNome.name = "nome";
    inputNome.placeholder = "Informe seu nome.";
    inputNome.required = true;
    nomeWrapper.appendChild(labelNome);
    nomeWrapper.appendChild(inputNome);
    formCadastro.appendChild(nomeWrapper);

    // Campo Idade
    let idadeWrapper = createWrapper();
    let labelIdade = document.createElement("label");
    labelIdade.setAttribute("for", "idade");
    labelIdade.textContent = "Idade:";
    let inputIdade = document.createElement("input");
    inputIdade.type = "number";
    inputIdade.id = "idade";
    inputIdade.name = "idade";
    inputIdade.placeholder = "Informe sua idade.";
    idadeWrapper.appendChild(labelIdade);
    idadeWrapper.appendChild(inputIdade);
    formCadastro.appendChild(idadeWrapper);

    // Campo Sexo
    let sexoWrapper = createWrapper();
    let labelSexo = document.createElement("label");
    labelSexo.textContent = "Sexo:";
    sexoWrapper.appendChild(labelSexo);

    const sexos = [
        { id: "masculino", value: "masculino", label: "Masculino" },
        { id: "feminino", value: "feminino", label: "Feminino" },
        { id: "outros", value: "outros", label: "Outros" }
    ];
    
    sexos.forEach((sexo, index) => {
        let inputSexo = document.createElement("input");
        inputSexo.type = "radio";
        inputSexo.id = sexo.id;
        inputSexo.name = "sexo";
        inputSexo.value = sexo.value;
    
        // Seleciona o primeiro rádio como padrão
        if (index === 0) {
            inputSexo.checked = true; // Marca o primeiro rádio como selecionado
        }
    
        let labelSexoItem = document.createElement("label");
        labelSexoItem.setAttribute("for", sexo.id);
        labelSexoItem.textContent = sexo.label;
    
        sexoWrapper.appendChild(inputSexo);
        sexoWrapper.appendChild(labelSexoItem);
    });
    
    formCadastro.appendChild(sexoWrapper);
    

    // Campo Esporte Preferido
    let esporteWrapper = createWrapper();
    let labelEsporte = document.createElement("label");
    labelEsporte.textContent = "Esporte Preferido:";
    esporteWrapper.appendChild(labelEsporte);

    let esportes = [
        { id: "esporte_preferido_F", value: "F", label: "Futebol", checked: true },
        { id: "esporte_preferido_V", value: "V", label: "Vôlei" },
        { id: "esporte_preferido_N", value: "N", label: "Natação", checked: true },
        { id: "esporte_preferido_O", value: "O", label: "Outros" }
    ];
    esportes.forEach(esporte => {
        let inputEsporte = document.createElement("input");
        inputEsporte.type = "checkbox";
        inputEsporte.id = esporte.id;
        inputEsporte.name = "esporte_preferido";
        inputEsporte.value = esporte.value;
        inputEsporte.checked = esporte.checked || false;
        let labelEsporteItem = document.createElement("label");
        labelEsporteItem.setAttribute("for", esporte.id);
        labelEsporteItem.textContent = esporte.label;
        esporteWrapper.appendChild(inputEsporte);
        esporteWrapper.appendChild(labelEsporteItem);
    });
    formCadastro.appendChild(esporteWrapper);

    // Campo Cidade de Nascimento
    let cidadeWrapper = createWrapper();
    let labelCidade = document.createElement("label");
    labelCidade.setAttribute("for", "cidade_nascimento");
    labelCidade.textContent = "Cidade de Nasc:";
    let inputCidade = document.createElement("input");
    inputCidade.type = "text";
    inputCidade.id = "cidade_nascimento";
    inputCidade.name = "cidade_nascimento";
    inputCidade.placeholder = "Informe a cidade que você nasceu.";
    inputCidade.required = true;
    cidadeWrapper.appendChild(labelCidade);
    cidadeWrapper.appendChild(inputCidade);
    formCadastro.appendChild(cidadeWrapper);

    // Campo Estado de Nascimento
    let estadoWrapper = createWrapper();
    let labelEstado = document.createElement("label");
    labelEstado.setAttribute("for", "estado_nascimento");
    labelEstado.textContent = "Estado de Nasc:";
    let selectEstado = document.createElement("select");
    selectEstado.id = "estado_nascimento";
    selectEstado.name = "estado_nascimento";
    selectEstado.required = true;
    ["-", "RJ", "SP", "ES", "MG", "O"].forEach((estado, index) => {
        let option = document.createElement("option");
        option.value = estado;
        option.textContent = estado === "-" ? "-" : estado;
        if (estado === "MG") option.selected = true;
        selectEstado.appendChild(option);
    });
    estadoWrapper.appendChild(labelEstado);
    estadoWrapper.appendChild(selectEstado);
    formCadastro.appendChild(estadoWrapper);

    // Campo CPF
    let cpfWrapper = createWrapper();
    let labelCpf = document.createElement("label");
    labelCpf.setAttribute("for", "cpf");
    labelCpf.textContent = "CPF:";
    let inputCpf = document.createElement("input");
    inputCpf.type = "number";
    inputCpf.id = "cpf";
    inputCpf.name = "cpf";
    inputCpf.placeholder = "Informe seu CPF.";
    inputCpf.required = true;
    cpfWrapper.appendChild(labelCpf);
    cpfWrapper.appendChild(inputCpf);
    formCadastro.appendChild(cpfWrapper);

    // Campo Descrição
    let descricaoWrapper = createWrapper();
    let labelDescricao = document.createElement("label");
    labelDescricao.setAttribute("for", "descricao");
    labelDescricao.textContent = "Descrição:";
    let inputDescricao = document.createElement("textarea");
    inputDescricao.id = "descricao";
    inputDescricao.name = "descricao";
    inputDescricao.placeholder = "Faça uma descrição sobre você.";
    descricaoWrapper.appendChild(labelDescricao);
    descricaoWrapper.appendChild(inputDescricao);
    formCadastro.appendChild(descricaoWrapper);

    // Botões de Enviar e Limpar
    let buttonWrapper = document.createElement("div");
    buttonWrapper.className = "itemWrapperBTNsSubmitReset";
    let submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.id = "botao_enviar";
    submitButton.name = "enviar";
    submitButton.textContent = "Enviar";
    let resetButton = document.createElement("button");
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
