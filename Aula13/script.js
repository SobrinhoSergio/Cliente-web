document.addEventListener("DOMContentLoaded", ()=>{
    cargaInicial();
    montaDivCadastro();
    montaDivFiltro();
    var divAux = document.createElement("div");
    divAux.setAttribute("id", "divAux");
    var tBody = document.getElementsByTagName("body")[0];
    tBody.appendChild(divAux);
    montaDivTabela(divAux);       
   
});                       
var cargaInicial = () =>{
    if(localStorage.getItem("nomes")) {
        var nomes = [];
        localStorage.setItem("nomes", JSON.stringify(nomes));    
    }
}
function cadastrarNomeNoArray(nome){
    console.log(nome);
    var nomes = JSON.parse(localStorage.getItem("nomes"));
    nomes.push(nome);
    localStorage.setItem("nomes", JSON.stringify(nomes)); 
}

function apagaDivTabela(el, nome) {
    var divTabela = document.getElementById("divTabela");
    el.removeChild(divTabela);

    montaDivTabela(el, nome);
}

function montaDivTabela(el, nome) {
    console.log(el);
    var divTabela =  document.createElement("div");
    divTabela.setAttribute("id", "divTabela");
    el.appendChild(divTabela);
    var tTable = document.createElement("table");
    divTabela.appendChild(tTable);
    var trCabecalho = document.createElement("tr");
    tTable.appendChild(trCabecalho);
    var thCabecalhoNome = document.createElement("th");
    thCabecalhoNome.textContent = "Nome"
    trCabecalho.appendChild(thCabecalhoNome);
    var nomes = JSON.parse(localStorage.getItem("nomes"));
    
    nomes.filter(valor=>{
        if(valor.indexOf(nome)>-1)
            return true;
        return false;
    }).forEach(element => {
        console.log(element);
        var trCorpo = document.createElement("tr"); 
        var tdCorpo = document.createElement("td");
        tdCorpo.textContent = element;
        trCorpo.appendChild(tdCorpo);
        tTable.appendChild(trCorpo); 
    });

    
}

function montaDivFiltro() {
    let tBody = document.getElementsByTagName("body")[0];
    let divFiltro =  document.createElement("div");
    divFiltro.setAttribute("id", "divFiltro");
    tBody.appendChild(divFiltro);
    let fFormFiltro = document.createElement("form");
    
    divFiltro.appendChild(fFormFiltro);

    let tLabel1 = document.createElement("label");
    tLabel1.setAttribute("for", "campo_nome_filtro");
    fFormFiltro.appendChild(tLabel1);

    let tInputNomeFiltro = document.createElement("input");
    tInputNomeFiltro.setAttribute("type", "text");
    tInputNomeFiltro.setAttribute("name", "nome");
    tInputNomeFiltro.setAttribute("id", "campo_nome_filtro");
    fFormFiltro.appendChild(tInputNomeFiltro);

    let tButtonFIltro = document.createElement("button");
    tButtonFIltro.setAttribute("type", "button");
    tButtonFIltro.setAttribute("name", "cadastrar");
    tButtonFIltro.textContent = "Filtrar"
    fFormFiltro.appendChild(tButtonFIltro);

    tButtonFIltro.addEventListener("click", ()=>{
        //cadastrarNomeNoArray(tInputNome.value);
        apagaDivTabela(document.getElementById("divAux"), tInputNomeFiltro.value);
    })
}


function montaDivCadastro() {
    var tBody = document.getElementsByTagName("body")[0];
   
    var divCadastro = document.createElement("div");
    divCadastro.setAttribute("id", "divCadastro");
    tBody.appendChild(divCadastro);

    var fForm = document.createElement("form");
    fForm.setAttribute("action", "cadastro.php");
    fForm.setAttribute("method", "POST");
    divCadastro.appendChild(fForm);

    var tLabel1 = document.createElement("label");
    tLabel1.setAttribute("for", "campo_nome");
    fForm.appendChild(tLabel1);

    var tInputNome = document.createElement("input");
    tInputNome.setAttribute("type", "text");
    tInputNome.setAttribute("name", "nome");
    tInputNome.setAttribute("id", "campo_nome");
    fForm.appendChild(tInputNome);

    var tButton = document.createElement("button");
    tButton.setAttribute("type", "button");
    tButton.setAttribute("name", "cadastrar");
    tButton.textContent = "Cadastrar"
    fForm.appendChild(tButton);
    tButton.addEventListener("click", ()=>{
        cadastrarNomeNoArray(tInputNome.value);
        apagaDivTabela(document.getElementById("divAux"), "");
    })
}