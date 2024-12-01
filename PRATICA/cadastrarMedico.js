function main() {
    let botao = document.getElementById("btnCadastrarMedico");
    botao.onclick = async (event) => {
        event.preventDefault();

        let nome = document.getElementById("nome").value;
        let crm = document.getElementById("CRM").value;

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

        let especialidade = document.getElementById("especialidade").value;

        // Cria um objeto com os dados do médico
        let medico = {
            nome: nome,
            numeroCrm: crm,
            diasAtendimento: diasAtendimento.trim(),
            especialidade: especialidade
        };

        try {

            let response = await fetch("http://localhost:3000/api/medicos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(medico)
            });

            if (response.ok) {
                let result = await response.json();
                console.log("Médico cadastrado com sucesso:", result);
                alert("Médico cadastrado com sucesso!");
            } else {
                console.error("Erro ao cadastrar médico:", response.statusText);
                alert("Erro ao cadastrar médico!");
            }
        } catch (error) {
            console.error("Erro ao conectar com a API:", error);
            alert("Erro ao conectar com a API!");
        }
    };
}


