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
            let tr = document.createElement("tr")
            tabela.appendChild(tr)

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
        });
    }
    geraTabela()
}