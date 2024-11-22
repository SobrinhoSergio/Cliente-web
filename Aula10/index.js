var arrayA = [ { nome: 'Ana', altura: 1.75 },
    { nome: 'Bia', altura: 1.40 },
    { nome: 'Carlos', altura: 1.72 },
    { nome: 'Darlan', altura: 1.68 }
    ]
    
    
arrayB = [];

arrayA.map((e,i)=> {
    arrayB[i] = e.altura*2;
    return e;
});