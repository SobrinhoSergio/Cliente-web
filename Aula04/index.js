var numeros = [100, 10, 1, 50, 70, 80, 20, 2];
numeros.sort((a, b) =>{
    if(a>50 && b>50) {
        return b-a;
    }
    return a-b;
});

for(var i in numeros) {
    console.log(numeros[i]);
}