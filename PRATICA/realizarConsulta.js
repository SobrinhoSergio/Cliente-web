function main(){
    botao = document.getElementById("realizarConsulta")
    divMedico = document.getElementById("selectMedico")
    divPaciente = document.getElementById("selectPaciente")
    
    function listaPacientes(){
        selectPaciente = document.createElement("select")
        selectPaciente.id = "selPaciente"
        try {
            pacientes = JSON.parse( localStorage.getItem( 'pacientes' ) )
            //console.log(pacientes)
        }catch(e){
            console.log("erro ao coletar pacientes")
        }
        if(pacientes){
            pacientes.forEach(paciente => {
                pacienteOption = document.createElement("option")
                console.log(paciente.nome)
                pacienteOption.value = paciente.nome;
                pacienteOption.innerText = paciente.nome;
                selectPaciente.appendChild(pacienteOption)
            });
            divPaciente.appendChild(selectPaciente)
        }
        
    }
    listaPacientes()

    function listaMedicos(){
        selectMedico = document.createElement("select")
        selectMedico.id = "selMedico"
        try {
            medicos = JSON.parse( localStorage.getItem( 'medicos' ) )
        }catch(e){
            console.log("erro ao coletar Medicos")
        }
        if(medicos){
            medicos.forEach(medico => {
                medicoOption = document.createElement("option")
                console.log(medico.nome)
                medicoOption.value = medico.nome;
                medicoOption.innerText = medico.nome;
                selectMedico.appendChild(medicoOption)
            });
            divMedico.appendChild(selectMedico)
        }
        
    }
    listaMedicos()

    botao.onclick = (event) => {
        event.preventDefault()
        
        data = document.getElementById("data")
        tipo = document.getElementById("tipo")
        obs = document.getElementById("obs")
        medicamentos = document.getElementById("medicamentos")
        exames = document.getElementById("exames")

        medico = document.getElementById("selMedico")
        paciente = document.getElementById("selPaciente")

        let consultas = []
        let consultaStorage
        try{
            consultaStorage = JSON.parse( localStorage.getItem( 'consultas' ) );
        }catch(e){
            console.log("first")
        }

        if(consultaStorage){
            consultas = consultaStorage 
        }
        
        maiorId = 0 
        for(con of consultas){
            if(con.id > maiorId){
                maiorId = con.id
            }
        }
        let consulta = {
            id: maiorId + 1,
            data: data.value,
            tipo: tipo.value,
            obs: obs.value,
            medicamentos: medicamentos.value,
            exames: exames.value,
            medico: medico.value,
            paciente: paciente.value
            
        }

        consultas.push(consulta)
        localStorage.setItem( 'consultas', JSON.stringify( consultas ) );
        
        

        //console.log(consulta)
    }   
}