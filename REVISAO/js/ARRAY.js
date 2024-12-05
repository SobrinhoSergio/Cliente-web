// Dados simulados: carrinho de compras
const carrinho = [
    { nome: 'Camiseta', categoria: 'Roupas', preco: 50, quantidade: 2 },
    { nome: 'Calça Jeans', categoria: 'Roupas', preco: 120, quantidade: 1 },
    { nome: 'Tênis', categoria: 'Calçados', preco: 200, quantidade: 1 },
    { nome: 'Meias', categoria: 'Roupas', preco: 15, quantidade: 4 },
    { nome: 'Relógio', categoria: 'Acessórios', preco: 250, quantidade: 1 },
  ];
  
  // 1. Filtrar: apenas itens da categoria 'Roupas'
  const roupas = carrinho.filter(item => item.categoria === 'Roupas');
  
  console.log('Itens filtrados da categoria "Roupas":', roupas);
  
  // 2. Mapear: calcular o preço total de cada item (preço x quantidade)
  const precosTotais = roupas.map(item => ({
    ...item,
    precoTotal: item.preco * item.quantidade
  }));
  
  console.log('Itens com preço total calculado:', precosTotais);
  
  // 3. Reduzir: calcular o valor total do carrinho para a categoria "Roupas"
  const valorTotal = precosTotais.reduce((soma, item) => soma + item.precoTotal, 0);
  
  console.log('Valor total da categoria "Roupas":', valorTotal);
  
  // 4. ForEach: exibir um resumo no console
  console.log('Resumo dos itens da categoria "Roupas":');
  precosTotais.forEach(item => {
    console.log(`- ${item.nome}: ${item.quantidade}x de R$${item.preco} = R$${item.precoTotal}`);
  });
  