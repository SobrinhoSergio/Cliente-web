function main() {
    
    console.log(JSON.parse( localStorage.getItem( 'pacientes' ) ))
    tabelaDiv = document.getElementById("tabelaDiv")
    tabelaDiv.innerText = ""

    function geraTabela(){
        pacientes = JSON.parse( localStorage.getItem( 'pacientes' ) )
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
        th3.innerHTML = "endereco"
        titles.appendChild(th3)
        var th4 = document.createElement("th")
        th4.innerHTML = "identidade"
        titles.appendChild(th4)

        tabela.appendChild(titles)
        tabelaDiv.appendChild(tabela)

        pacientes.forEach(paciente => {
            var tr = document.createElement("tr")
            

            var td1 = document.createElement("td")
            td1.innerHTML = paciente.id
            tr.appendChild(td1)
            var td2 = document.createElement("td")
            td2.innerHTML = paciente.nome
            tr.appendChild(td2)
            var td3 = document.createElement("td")
            td3.innerHTML = paciente.endereco
            tr.appendChild(td3)
            var td4 = document.createElement("td")
            td4.innerHTML = paciente.identidade
            tr.appendChild(td4)

            tr.onclick = (event) => {
                visualizarConsultas(paciente.nome)
            }
            tabela.appendChild(tr)
        });
    }
    geraTabela()

    function visualizarConsultas(nome){
        consultas = JSON.parse( localStorage.getItem( 'consultas' ) )
        console.log(consultas)

        let tabela;
        if (document.getElementById("tabelaConsultas")){
            tabela = document.getElementById("tabelaConsultas")
            let trs = tabela.getElementsByTagName("tr");
            while(trs.length>1) trs[1].parentNode.removeChild(trs[1])
        }else{
            tabela = document.createElement("table")
            tabela.id = "tabelaConsultas"
            let titles = document.createElement("tr")

            var th1 = document.createElement("th")
            th1.innerHTML = "Id"
            titles.appendChild(th1)
            var th2 = document.createElement("th")
            th2.innerHTML = "data"
            titles.appendChild(th2)
            var th3 = document.createElement("th")
            th3.innerHTML = "exames"
            titles.appendChild(th3)
            var th4 = document.createElement("th")
            th4.innerHTML = "medicamentos"
            titles.appendChild(th4)
            var th5 = document.createElement("th")
            th5.innerHTML = "medico"
            titles.appendChild(th5)
            var th6 = document.createElement("th")
            th6.innerHTML = "observacoes"
            titles.appendChild(th6)
            var th7 = document.createElement("th")
            th7.innerHTML = "paciente"
            titles.appendChild(th7)
            var th8 = document.createElement("th")
            th8.innerHTML = "tipo"
            titles.appendChild(th8)

            tabela.appendChild(titles)
            tabelaDiv.appendChild(tabela)
        }
        

        consultasFiltradas = consultas.filter((consulta) => consulta.paciente == nome)
        console.log(consultasFiltradas)
        consultasFiltradas.forEach(consulta => {
            var tr = document.createElement("tr")
            
            var td1 = document.createElement("td")
            td1.innerHTML = consulta.id
            tr.appendChild(td1)
            var td2 = document.createElement("td")
            td2.innerHTML = consulta.data
            tr.appendChild(td2)
            var td3 = document.createElement("td")
            td3.innerHTML = consulta.exames
            tr.appendChild(td3)
            var td4 = document.createElement("td")
            td4.innerHTML = consulta.medicamentos
            tr.appendChild(td4)
            var td5 = document.createElement("td")
            td5.innerHTML = consulta.medico
            tr.appendChild(td5)
            var td6 = document.createElement("td")
            td6.innerHTML = consulta.obs
            tr.appendChild(td6)
            var td7 = document.createElement("td")
            td7.innerHTML = consulta.paciente
            tr.appendChild(td7)
            var td8 = document.createElement("td")
            td8.innerHTML = consulta.tipo
            tr.appendChild(td8)

            tabela.appendChild(tr)
        });
    }
}