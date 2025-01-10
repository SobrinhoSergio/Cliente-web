// Função para criar um elemento com atributos e conteúdo
export function criarElemento(tag, atributos = {}, conteudo = '') {
    const elemento = document.createElement(tag);
    for (const [atributo, valor] of Object.entries(atributos)) {
      elemento.setAttribute(atributo, valor);
    }
    if (conteudo) {
      elemento.textContent = conteudo;
    }
    return elemento;
  }
  