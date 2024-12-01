function main() {
    //console.log(JSON.parse( localStorage.getItem( 'medicos' ) ))
    tabelaDiv = document.getElementById("tabelaDiv")
    tabelaDiv.innerText = ""

    async function fetchMedicos() {
        try {
            let response = await fetch('http://localhost:3000/api/medicos', { 
                headers: { 'Accept': 'application/json' },
                mode: 'cors' 
            });
            if (response.status >= 400) {
                throw new Error('Erro ' + response.status);
            }
            let json = await response.json();
            return json; 

        } catch (err) {
            console.error(err);
            return { data: [] }; 
        }
    }

    async function deleteMedico(id){
        fetch( `http://localhost:3000/api/medicos/${id}`,
            { method: 'DELETE' } )
            .then( response => {
            if ( response.status >= 400 ) {
                throw new Error( 'Erro ' + response.status );
            }
            alert( 'Removido' );
            } )
            .catch( err => console.error( err ) )
    }

    function alterMedicoForm(medico){
        let currentForm = document.getElementById("alterForm");
        if (currentForm) {
            currentForm.remove(); // Remove o formulário existente se houver
        }

        let container = document.createElement("form");
        container.classList.add("form");
        container.id = "alterForm"
        document.body.appendChild(container);

        // mostra id
        let id = medico.id
        let divId = document.createElement("div")
        divId.innerHTML = "Id: " + id
        container.appendChild(divId)

        // Nome
        let divNome = document.createElement("div");
        container.appendChild(divNome);

        let labelNome = document.createElement("label");
        labelNome.setAttribute("for", "nome");
        labelNome.innerText = 'Nome: ';
        divNome.appendChild(labelNome);

        let inputNome = document.createElement("input");
        inputNome.setAttribute("type", "text");
        inputNome.value = medico.nome
        inputNome.setAttribute("id", "nome");
        divNome.appendChild(inputNome);

        //  CRM
        let divCrm = document.createElement("div");
        container.appendChild(divCrm);

        let labelCrm = document.createElement("label");
        labelCrm.setAttribute("for", "CRM");
        labelCrm.innerText = "CRM: ";
        divCrm.appendChild(labelCrm);

        let inputCrm = document.createElement("input");
        inputCrm.setAttribute("type", "text");
        inputCrm.setAttribute("id", "CRM");
        inputCrm.value = medico.numeroCrm
        divCrm.appendChild(inputCrm);

        // Dias Atendimento 
        let divAtendimentoContainer = document.createElement("div");
        container.appendChild(divAtendimentoContainer);

        let divAtendimentoLabel = document.createElement("div");
        divAtendimentoLabel.innerText = 'Atendimento:';
        divAtendimentoContainer.appendChild(divAtendimentoLabel);

        
        let dias = ["segunda", "terca", "quarta", "quinta", "sexta"];
        dias.forEach(dia => {
            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("id", dia);
            checkbox.setAttribute("value", dia);
            if (medico.diasAtendimento.includes(dia)){
                 checkbox.setAttribute("checked", true)
            }
            divAtendimentoContainer.appendChild(checkbox);

            let labelDia = document.createElement("label");
            labelDia.setAttribute("for", dia);
            labelDia.innerText = dia;
            divAtendimentoContainer.appendChild(labelDia);
        });

        // Cria o campo Especialidade (Dropdown)
        let divEspecialidade = document.createElement("div");
        container.appendChild(divEspecialidade);

        let labelEspecialidade = document.createElement("label");
        labelEspecialidade.setAttribute("for", "especialidade");
        labelEspecialidade.innerText = "Especialidade: ";
        divEspecialidade.appendChild(labelEspecialidade);

        let selectEspecialidade = document.createElement("select");
        selectEspecialidade.setAttribute("name", "especialidade");
        selectEspecialidade.setAttribute("id", "especialidade");
        divEspecialidade.appendChild(selectEspecialidade);

        let especialidades = ["Dermatologista", "Cardiologista", "Neurologista", "Reumatologista", "Hematologista"];
        especialidades.forEach(especialidade => {
            let option = document.createElement("option");
            option.setAttribute("value", especialidade);
            option.innerText = especialidade;
            selectEspecialidade.appendChild(option);
        });
        selectEspecialidade.value = medico.especialidade

        // botao alterar medico
        let botaoAlterarMedico = document.createElement("button");
        botaoAlterarMedico.setAttribute("id", "botaoAlterarMedico");
        botaoAlterarMedico.innerText = "Alterar Medico";
        botaoAlterarMedico.onclick = (event) => {
            event.preventDefault()
            let segunda = document.getElementById("segunda").checked;
            let terca = document.getElementById("terca").checked;
            let quarta = document.getElementById("quarta").checked;
            let quinta = document.getElementById("quinta").checked;
            let sexta = document.getElementById("sexta").checked;

            let diasAtendimento = "";
            if (segunda) diasAtendimento += "segunda ";
            if (terca) diasAtendimento += "terca ";
            if (quarta) diasAtendimento += "quarta ";
            if (quinta) diasAtendimento += "quinta ";
            if (sexta) diasAtendimento += "sexta ";
            let medico = {
                id: id,
                nome: inputNome.value,
                numeroCrm: inputCrm.value,
                diasAtendimento: diasAtendimento.trim(),
                especialidade: selectEspecialidade.value
            };
            alterMedico(medico)
        }

        container.appendChild(botaoAlterarMedico);
    }
    
    async function alterMedico(medico) {
        console.log(medico)
        try {
            const response = await fetch(`http://localhost:3000/api/medicos/${medico.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    nome: medico.nome,
                    numeroCrm: medico.numeroCrm,
                    diasAtendimento: medico.diasAtendimento,
                    especialidade: medico.especialidade
                })
            });
    
            if (response.status >= 400) {
                throw new Error('Erro ' + response.status);
            }
    
            const data = await response.json();
            console.log('Médico atualizado com sucesso:', data);
            alert('Médico atualizado com sucesso!');
        } catch (error) {
            console.error('Erro ao atualizar médico:', error);
            alert('Erro ao atualizar médico. Veja o console para mais detalhes.');
        }
    }

    async function geraTabela(){
        //medicos = JSON.parse( localStorage.getItem( 'medicos' ) )
        let response = await fetchMedicos(); 
        let medicos = response.data; 
        console.log(response)

        if (medicos.length === 0) {
            tabelaDiv.innerText = "Nenhum médico encontrado.";
            return;
        }

        let tabela = document.createElement("table")
        tabela.id = "tabela1"
        let titles = document.createElement("tr")

        var th1 = document.createElement("th")
        th1.innerHTML = "Id"
        titles.appendChild(th1)
        var th2 = document.createElement("th")
        th2.innerHTML = "Nome"
        titles.appendChild(th2)
        var th3 = document.createElement("th")
        th3.innerHTML = "Crm"
        titles.appendChild(th3)
        var th4 = document.createElement("th")
        th4.innerHTML = "Dias de Atendimento"
        titles.appendChild(th4)
        var th5 = document.createElement("th")
        th5.innerHTML = "Especialidade"
        titles.appendChild(th5)

        tabela.appendChild(titles)
        tabelaDiv.appendChild(tabela)

        medicos.forEach(medico => {
            let tr = document.createElement("tr")
            tabela.appendChild(tr)

            var td1 = document.createElement("td")
            td1.innerHTML = medico.id
            tr.appendChild(td1)
            var td2 = document.createElement("td")
            td2.innerHTML = medico.nome
            tr.appendChild(td2)
            var td3 = document.createElement("td")
            td3.innerHTML = medico.numeroCrm
            tr.appendChild(td3)
            var td4 = document.createElement("td")
            td4.innerHTML = medico.diasAtendimento
            tr.appendChild(td4)
            var td5 = document.createElement("td")
            td5.innerHTML = medico.especialidade
            tr.appendChild(td5)

            var td6 = document.createElement("td")
            deleteButton = document.createElement("button")
            deleteButton.innerHTML = "remover"
            deleteButton.onclick = async (event) =>{
                event.preventDefault()
                deleteMedico(medico.id)
            }
            td6.appendChild(deleteButton)
            tr.appendChild(td6)

            var td7 = document.createElement("td")
            alterButton = document.createElement("button")
            alterButton.innerHTML= "alterar"
            alterButton.onclick = (event) => {
                event.preventDefault()
                alterMedicoForm(medico)
            }
            td7.appendChild(alterButton)
            tr.appendChild(td7)
        });
    }
    geraTabela()

    
}