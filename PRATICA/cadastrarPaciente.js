function main(){
    botao = document.getElementById("btnCadastrarPaciente")
    botao.onclick = (event) => {
        event.preventDefault()
        
        nome = document.getElementById("nome")

        //endereco
        logradouro = document.getElementById("logradouro")
        numero = document.getElementById("numero")
        complemento = document.getElementById("complemento")
        bairro = document.getElementById("bairro")
        cep = document.getElementById("cep")
        cidade = document.getElementById("cidade")

        //identidade
        numeroIdentidade = document.getElementById("numeroIdentidade")
        tipoDocumento = document.getElementById("tipoDocumento")


        let pacientes = []
        let pacientesStorage
        try{
            pacientesStorage = JSON.parse( localStorage.getItem( 'pacientes' ) );
        }catch(e){
            console.log("first")
        }

        if(pacientesStorage){
            pacientes = pacientesStorage 
        }
        
        maiorId = 0 
        for(pat of pacientes){
            if(pat.id > maiorId){
                maiorId = pat.id
            }
        }
        let paciente = {
            id: maiorId + 1,
            nome: nome.value,
            endereco: logradouro.value + " " + numero.value + " " + complemento.value + " " + bairro.value + " " + cep.value + "" + cidade.value,
            identidade: tipoDocumento.value + " :" +  numeroIdentidade.value
        }

        pacientes.push(paciente)
        localStorage.setItem( 'pacientes', JSON.stringify( pacientes ) );
        
        console.log(pacientes)
    }   
}