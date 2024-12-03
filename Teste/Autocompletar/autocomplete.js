// Dados simulados
const data = [
    "Ana",
    "Antonio",
    "Beatriz",
    "Bernardo",
    "Carlos",
    "Catarina",
    "Daniel",
    "Diana",
    "Eduardo",
    "Eliana",
  ];
  
  // Elementos DOM
  const searchInput = document.getElementById("search-input");
  const suggestionsContainer = document.getElementById("suggestions");
  
  // Função para exibir sugestões
  function showSuggestions(filteredData) {
    // Limpa sugestões anteriores
    suggestionsContainer.innerHTML = "";
  
    if (filteredData.length === 0) {
      return;
    }
  
    // Adiciona sugestões ao container
    filteredData.forEach((item) => {
      const suggestionItem = document.createElement("div");
      suggestionItem.classList.add("suggestion-item");
      suggestionItem.textContent = item;
  
      // Adiciona evento de clique
      suggestionItem.addEventListener("click", () => {
        searchInput.value = item; // Preenche o campo de busca
        suggestionsContainer.innerHTML = ""; // Limpa sugestões
      });
  
      suggestionsContainer.appendChild(suggestionItem);
    });
  }
  
  // Função para filtrar dados
  function filterData(query) {
    return data.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }
  
  // Evento de entrada no campo de busca
  searchInput.addEventListener("input", (event) => {
    const query = event.target.value.trim();
  
    if (query === "") {
      suggestionsContainer.innerHTML = ""; // Limpa sugestões
      return;
    }
  
    const filteredData = filterData(query);
    showSuggestions(filteredData);
  });
  
  // Fecha o menu ao clicar fora
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".search-container")) {
      suggestionsContainer.innerHTML = "";
    }
  });
  