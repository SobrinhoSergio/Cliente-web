// Lista inicial de estudantes
let estudantes = [
    { nome: 'Ana', nota: 8.5 },
    { nome: 'Carlos', nota: 6.0 },
    { nome: 'Beatriz', nota: 7.5 },
  ];
  
  // 1. Adicionar novos estudantes usando push
  function adicionarEstudante(nome, nota) {
    estudantes.push({ nome, nota });
  }
  adicionarEstudante('Eduardo', 9.0);
  adicionarEstudante('Fernanda', 5.5);
  
  console.log('Lista de estudantes após adição:');
  console.log(estudantes);
  
  // 2. Atualizar a nota de um estudante específico usando find
  function atualizarNota(nome, novaNota) {
    let estudante = estudantes.find(est => est.nome === nome);
    if (estudante) {
      estudante.nota = novaNota;
    } else {
      console.log(`Estudante ${nome} não encontrado!`);
    }
  }
  atualizarNota('Carlos', 7.0);
  console.log('Lista após atualizar a nota do Carlos:');
  console.log(estudantes);
  
  // 3. Filtrar estudantes aprovados (nota >= 7) usando filter
  let aprovados = estudantes.filter(est => est.nota >= 7);
  console.log('Estudantes aprovados:');
  console.log(aprovados);
  
  // 4. Ordenar estudantes por nota em ordem decrescente usando sort
  let estudantesOrdenados = [...estudantes].sort((a, b) => b.nota - a.nota);
  console.log('Estudantes ordenados por nota (decrescente):');
  console.log(estudantesOrdenados);
  
  // 5. Transformar os dados em strings amigáveis usando map
  let descricoes = estudantes.map(est => `${est.nome}: Nota ${est.nota}`);
  console.log('Descrição dos estudantes:');
  console.log(descricoes);
  
  // 6. Calcular a média das notas usando reduce
  let media = estudantes.reduce((soma, est) => soma + est.nota, 0) / estudantes.length;
  console.log(`Média da turma: ${media.toFixed(2)}`);
  
  // 7. Iterar sobre todos os estudantes usando forEach
  console.log('Lista completa dos estudantes:');
  estudantes.forEach(est => {
    console.log(`${est.nome} tem nota ${est.nota}`);
  });