var numeros = [100, 10, 1, 50, 20, 2];

function compara(a:number, b:number): number{
    if(a<=50) {
        return b-a;
    }
    return a-b;
}

numeros.sort(compara);

for(var i in numeros) {
    console.log(numeros[i]);
}