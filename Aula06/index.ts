var carregarDiv = () => {
    var divPrinc: HTMLDivElement | null = document.getElementById("principal") as HTMLDivElement | null;
    if (divPrinc) {
        divPrinc.innerHTML = "Conteúdo carregado com Sucesso!";
    }
}
